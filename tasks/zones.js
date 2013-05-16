var moment = require('../moment-timezone'),

	TIME_RULE_WALL_CLOCK = 0,
	TIME_RULE_UTC        = 1,
	TIME_RULE_STANDARD   = 2,

	DAY_RULE_WEEKDAY_AFTER  = 0, // 0 - 6
	DAY_RULE_DAY_OF_MONTH   = 7,
	DAY_RULE_LAST_WEEKDAY   = 8,

	DAYS_OF_WEEK         = 'sun mon tue wed thu fri sat'.split(' '),

	ZONE_FILES           = "africa antarctica asia australasia europe northamerica southamerica".split(' '),

	rIsRuleset = /\d+:\d+/;

/******************************
	Helpers
******************************/

function replacer(key, value) {
	if (value.constructor !== Object) {
		return value;
	}
	return Object.keys(value).sort().reduce(function(sorted, key) {
		sorted[key] = value[key];
		return sorted;
	}, {});
}

function parseLatLong (input, isLong) {
	var sign = input[0] === '+' ? 1 : -1,
		deg = ~~input.substr(1, 2 + isLong) * sign,
		min = ~~input.substr(3 + isLong, 2),
		sec = ~~input.substr(5 + isLong, 2);

	min += sec / 60;
	deg += min / 60;

	return parseFloat(deg.toFixed(4), 10);
}

// converts time in the HH:mm format to absolute number of minutes
function parseMinutes (input) {
	var output = input.split(':'),
		sign = ~input.indexOf('-') ? -1 : 1,
		hour = Math.abs(+output[0]),
		minute = parseInt(output[1], 10) || 0;

	return sign * ((hour * 60) + minute);
}

function parseSeconds (input) {
	var output = input.split(':'),
		sign = ~input.indexOf('-') ? -1 : 1,
		hour = Math.abs(+output[0]),
		minute = parseInt(output[1], 10) || 0,
		second = parseInt(output[2], 10) || 0;

	return sign * ((hour * 60 * 60) + (minute * 60) + second);
}

function trimMinutes (input) {
	var output = input.split(':'),
		hour = output[0],
		minute = parseInt(output[1], 10) || 0,
		second = parseInt(output[2], 10) || 0;

	if (second) {
		return [hour, minute, second].join(':');
	}

	if (minute) {
		return [hour, minute].join(':');
	}

	return hour + '';
}

function formatSeconds(input) {
	var abs = Math.abs(input),
		seconds = abs % 60,
		minutes = Math.floor(abs / 60) % 60,
		hours = Math.floor(abs / 3600) % 60;

	if (input < 0) {
		hours = '-' + hours;
	}

	return trimMinutes([hours, minutes, seconds].join(':'));
}

/******************************
	Task
******************************/

module.exports = function (grunt) {
	grunt.registerTask('zones', 'Generate the zone data files based on the olson database.', function () {
		var file = new File();

		ZONE_FILES.forEach(function (filename) {
			file.load('tz/' + filename);
		});

		file.loadZoneTab('tz/zone.tab');

		file.save();
	});

	/******************************
		Files
	******************************/

	function File (filename) {
		this.filename = filename;
		this.rules = {};
		this.zones = {};
		this.meta = {};
	}

	File.prototype = {
		loadZoneTab : function (filename) {
			var i,
				lines = grunt.file.read(filename).split('\n');
			for (i = 0; i < lines.length; i++) {
				this.parseZoneTabLine(lines[i]);
			}
		},

		parseZoneTabLine : function (line) {
			var sanitized = this.sanitizeLine(line),
				name,
				latlon;
			// ignore comment lines
			if (!sanitized) {
				return;
			}

			name = sanitized[2];
			latlon = sanitized[1].match(/[+-]\d+/g);

			if (!this.meta[name]) {
				this.meta[name] = {};
			}
			this.meta[name].lat = parseLatLong(latlon[0], 0);
			this.meta[name].lon = parseLatLong(latlon[1], 1);
		},

		load : function (filename) {
			var i,
				lines = grunt.file.read(filename).split('\n');
			for (i = 0; i < lines.length; i++) {
				this.parseLine(lines[i]);
			}
			this.updateZonesUntil();
		},

		updateZonesUntil : function () {
			var i, j, zone;
			for (i in this.zones) {
				zone = this.zones[i];
				for (j = 0; j < zone.length; j++) {
					zone[j].findUntilRule(this.rules);
				}
			}
		},

		// convert a line to an array of data
		sanitizeLine : function (line) {
			// ignore comments
			line = line.split("#")[0];

			// if the line is only whitespace, ignore it
			if (!line.match(/\S/)) {
				return;
			}

			// assume lines that start with whitespace are zones
			// and use the last known zone name
			if (line.match(/^\s/)) {
				line = "Zone " + this.lastZone + line;
			}

			return line.split(/\s+/);
		},

		parseLine : function (line) {
			var sanitized = this.sanitizeLine(line),
				type;
			// ignore comment lines
			if (!sanitized) {
				return;
			}

			// the type is the first element
			type = sanitized.shift().toLowerCase();
			switch (type) {
			case 'zone':
				return this.parseZone(sanitized);
			case 'rule':
				return this.parseRule(sanitized);
			case 'link':
				break;
			}
		},

		parseZone : function (line) {
			var zone = new Zone(line),
				name = line[0];

			if (!this.zones[name]) {
				this.zones[name] = [];
			}
			if (!this.meta[name]) {
				this.meta[name] = {};
			}
			if (!this.meta[name].rules) {
				this.meta[name].rules = {};
			}
			this.meta[name].rules[zone.ruleset] = true;
			this.zones[name].push(zone);

			this.lastZone = zone.name;
		},

		parseRule : function (line) {
			var rule = new Rule(line);

			if (!this.rules[line[0]]) {
				this.rules[line[0]] = [];
			}
			this.rules[line[0]].push(rule);
		},

		parseLink : function (line) {

		},

		formatObject : function (obj) {
			var o = {},
				name,
				i;

			for (name in obj) {
				o[name] = [];
				for (i = 0; i < obj[name].length; i++) {
					o[name].push(obj[name][i].format());
				}
			}

			return o;
		},

		format : function () {
			var o = {
				meta : this.meta,
				rules : this.formatObject(this.rules),
				zones : this.formatObject(this.zones)
			};
			return JSON.stringify(o, replacer, '\t').replace(/\\t/g, '\t');
		},

		trimMeta : function () {
			var name, zone,
				rule, ruleset,
				rules;

			for (name in this.meta) {
				zone = this.meta[name];
				ruleset = zone.rules;
				rules = [];
				for (rule in ruleset) {
					if (rule !== '-') {
						rules.push(rule);
					}
				}
				zone.rules = rules.join(' ');
			}
		},

		save : function () {
			this.trimMeta();
			grunt.file.write('moment-timezone.json', this.format());
		}
	};

	/******************************
		Zones
	******************************/

	function Zone (line) {
		this.name = line[0];
		this.offset = parseSeconds(line[1]);
		this.ruleAsOffset = 0;
		this.parseRuleset(line[2]);
		this.letters = line[3];
		this.zone = moment.tz.addZone(this.name + " " + this.format());
		this.parseUntil(line.slice(4));
	}

	Zone.prototype = {
		parseRuleset : function (ruleset) {
			if (rIsRuleset.exec(ruleset)) {
				this.ruleAsOffset = parseSeconds(ruleset);
				this.ruleset = '-';
			} else {
				this.ruleset = ruleset;
			}
		},

		findUntilRule : function (rules) {
			var name;

			// no need for this if there is no until data
			if (!this.untilYear) {
				return;
			}

			// if (this.name !== "Pacific/Tahiti") return;

			for (name in rules) {
				if (name === this.ruleset) {
					this.findUntilRuleFromSet(rules[name], name);
					return;
				}
			}

			// for one-off zones, use an empty array
			this.findUntilRuleFromSet([], name);
		},

		findUntilRuleFromSet : function (set, name) {
			var until = this.untilMoment,
				last = until.clone().subtract(1, 'd'),
				untilRule = this.zone.rule(until),
				lastRule = this.zone.rule(last);

			if (this.untilTimeRule === TIME_RULE_STANDARD) {
				this.untilOffset = this.offset;
			} else if (this.untilTimeRule === TIME_RULE_WALL_CLOCK) {
				this.untilOffset = this.offset + this.ruleAsOffset + (lastRule.offset * 60);
			}
		},

		parseUntil : function (input) {
			var time, minute, second;

			this.untilYear = +input[0] || 0;

			this.untilMoment = moment.utc([this.untilYear]);

			if (~(input[3] || '').indexOf('u')) {
				this.untilTimeRule = TIME_RULE_UTC;
			} else if (~(input[3] || '').indexOf('s')) {
				this.untilTimeRule = TIME_RULE_STANDARD;
			} else {
				this.untilTimeRule = TIME_RULE_WALL_CLOCK;
			}

			if (input[1]) {
				this.untilMonth = input[1] = moment(input[1], "MMM").month();
				this.untilMoment.month(this.untilMonth);
			}

			if (input[2]) {
				this.untilDay = input[2] = this.date(input[2].toLowerCase(), this.untilYear);
				this.untilMoment.date(this.untilDay);
			}

			if (input[3]) {
				time = input[3].split(':');
				input[3] = time[0];
				this.untilMoment.hour(time[0]);

				minute = parseInt(time[1], 10);
				second = parseInt(time[2], 10);

				if (minute) {
					input[4] = minute;
					this.untilMoment.minute(minute);
				}

				if (second) {
					input[4] = input[4] || 0;
					input[5] = second;
					this.untilMoment.second(second);
				}

				this.untilMoment.subtract(this.offset + this.ruleAsOffset, 's');
			}

			this.until = input.join('_').replace(/_$/, '');
		},

		parseDay : function (input) {
			var lastWeekdayIndex = DAYS_OF_WEEK.indexOf(input.slice(4, 7)),
				weekdayAfterIndex = DAYS_OF_WEEK.indexOf(input.slice(0, 3));

			if (~lastWeekdayIndex) {
				this.dayRule = DAY_RULE_LAST_WEEKDAY;
				this.day = lastWeekdayIndex;
			} else if (~weekdayAfterIndex) {
				this.dayRule = weekdayAfterIndex;
				this.day = input.slice(5);
			} else {
				this.dayRule = DAY_RULE_DAY_OF_MONTH;
				this.day = input;
			}
		},

		date : function (input, year) {
			this.parseDay(input);
			if (this.dayRule === DAY_RULE_DAY_OF_MONTH) {
				return this.day;
			} else if (this.dayRule === DAY_RULE_LAST_WEEKDAY) {
				return this.lastWeekday(year);
			}
			return this.weekdayAfter(year);
		},

		weekdayAfter : function (year) {
			var day = this.day,
				firstDayOfWeek = moment([year, this.untilMonth, 1]).day(),
				output = this.dayRule + 1 - firstDayOfWeek;

			while (output < day) {
				output += 7;
			}

			return output;
		},

		lastWeekday : function (year) {
			var day = this.day,
				dow = day % 7,
				lastDowOfMonth = moment([year, this.untilMonth + 1, 1]).day(),
				daysInMonth = moment([year, this.untilMonth, 1]).daysInMonth(),
				output = daysInMonth + (dow - (lastDowOfMonth - 1)) - (~~(day / 7) * 7);

			if (dow >= lastDowOfMonth) {
				output -= 7;
			}

			return output;
		},

		format : function () {
			var o = [
				formatSeconds(this.offset + this.ruleAsOffset),
				this.ruleset,
				this.letters
			];
			if (this.until) {
				o.push(this.until);

				if (this.untilOffset) {
					o.push(formatSeconds(this.untilOffset));
				}
			}
			return o.join(' ');
		},

		formatMeta : function () {
			return {

			};
		}
	};

	/******************************
		Rules
	******************************/

	function Rule (line) {
		this.name = line[0];
		this.startYear = line[1];
		this.endYear = this.parseEndYear(line[2]);
		this.month = this.parseMonth(line[4]);
		this.offset = trimMinutes(line[7]);
		this.letters = line[8] === '-' ? '' : line[8];
		this.parseDay(line[5].toLowerCase());
		this.parseTime(line[6]);

		this.debugType(line[3]);

		moment.tz.addRule(this.name + " " + this.format());
	}

	Rule.prototype = {
		parseMonth : function (input) {
			return moment(input, "MMM").month();
		},

		parseEndYear : function (input) {
			if (input === 'only') {
				return this.startYear;
			} else if (input === 'max') {
				return '9999';
			}
			return input;
		},

		parseDay : function (input) {
			var lastWeekdayIndex = DAYS_OF_WEEK.indexOf(input.slice(4, 7)),
				weekdayAfterIndex = DAYS_OF_WEEK.indexOf(input.slice(0, 3));

			if (~lastWeekdayIndex) {
				this.dayRule = DAY_RULE_LAST_WEEKDAY;
				this.day = lastWeekdayIndex;
			} else if (~weekdayAfterIndex) {
				this.dayRule = weekdayAfterIndex;
				this.day = input.slice(5);
			} else {
				this.dayRule = DAY_RULE_DAY_OF_MONTH;
				this.day = input;
			}
		},

		parseTime : function (input) {
			if (~input.indexOf('u')) {
				this.timeRule = TIME_RULE_UTC;
			} else if (~input.indexOf('s')) {
				this.timeRule = TIME_RULE_STANDARD;
			} else {
				this.timeRule = TIME_RULE_WALL_CLOCK;
			}
			this.time = trimMinutes(input);
		},

		debugType : function (type) {
			if (type !== '-') {
				console.log('\n\n');
				console.log('new type:', type);
				console.log(this);
				console.log('\n\n');
			}
		},

		format : function () {
			var o = [
				this.startYear,
				this.endYear,
				this.month,
				this.day,
				this.dayRule,
				this.time,
				this.timeRule,
				this.offset
			];
			if (this.letters) {
				o.push(this.letters);
			}
			return o.join(' ');
		}
	};
};

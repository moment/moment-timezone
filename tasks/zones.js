var moment = require('../moment-timezone'),

	TIME_RULE_WALL_CLOCK = 0,
	TIME_RULE_UTC        = 1,
	TIME_RULE_STANDARD   = 2,

	DAY_RULE_WEEKDAY_AFTER  = 0, // 0 - 6
	DAY_RULE_DAY_OF_MONTH   = 7,
	DAY_RULE_LAST_WEEKDAY   = 8,

	DAYS_OF_WEEK         = 'sun mon tue wed thu fri sat'.split(' '),

	ZONE_FILES           = "africa antarctica asia australasia europe northamerica pacificnew southamerica",

	rIsRuleset = /\d+:\d+/;

/******************************
	Helpers
******************************/

// converts time in the HH:mm format to absolute number of minutes
function parseMinutes (input) {
	var output = input.split(':'),
		sign = +output[0] < 0 ? -1 : 1,
		hour = Math.abs(+output[0]),
		minute = parseInt(output[1], 10) || 0;

	return sign * ((hour * 60) + minute);
}

function parseSeconds (input) {
	var output = input.split(':'),
		sign = +output[0] < 0 ? -1 : 1,
		hour = Math.abs(+output[0]),
		minute = parseInt(output[1], 10) || 0,
		second = parseInt(output[2], 10) || 0;

	return sign * ((hour * 60 * 60) + (minute * 60) + second);
}

/******************************
	Task
******************************/

module.exports = function (grunt) {
	grunt.registerTask('zones', 'Generate the zone data files based on the olson database.', function () {
		var files = [];

		grunt.file.expandFiles("tz/*").forEach(function (filename) {
			var name = filename.split('/')[1],
				file;
			if (ZONE_FILES.indexOf(name) === -1) {
				return;
			}

			file = new File(filename);
			files.push(file);
			file.save();
		});
	});

	/******************************
		Files
	******************************/

	function File (filename) {
		this.filename = filename;
		this.rules = {};
		this.zones = {};
		this.load();
	}

	File.prototype = {
		load : function () {
			var i,
				lines = grunt.file.read(this.filename).split('\n');
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
			var zone = new Zone(line);

			if (!this.zones[line[0]]) {
				this.zones[line[0]] = [];
			}
			this.zones[line[0]].push(zone);

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

		formatRules : function () {
			var o = "\trules : {\n",
				rules = [],
				ruleText,
				ruleArray,
				rule,
				name,
				i;

			for (name in this.rules) {
				rule = this.rules[name];
				ruleText = '\t\t"' + name + '" : [\n';
				ruleArray = [];
				for (i = 0; i < rule.length; i++) {
					ruleArray.push('\t\t\t"' + rule[i].format() + '"');
				}
				ruleText += ruleArray.join(',\n');
				ruleText += '\n\t\t]';
				rules.push(ruleText);
			}

			o += rules.join(',\n');
			o += '\n\t}';
			return o;
		},

		formatZones : function () {
			var o = "\tzones : {\n",
				zones = [],
				zoneText,
				zoneArray,
				zone,
				name,
				i;

			for (name in this.zones) {
				zone = this.zones[name];
				zoneText = '\t\t"' + name + '" : [\n';
				zoneArray = [];
				for (i = 0; i < zone.length; i++) {
					zoneArray.push('\t\t\t"' + zone[i].format() + '"');
				}
				zoneText += zoneArray.join(',\n');
				zoneText += '\n\t\t]';
				zones.push(zoneText);
			}

			o += zones.join(',\n');
			o += '\n\t}';
			return o;
		},

		format : function () {
			var o = 'module.exports = {\n';
			o += this.formatRules();
			o += ',\n';
			o += this.formatZones();
			o += '\n};';
			return o;
		},

		save : function () {
			var filename = this.filename.replace('tz', 'zones') + '.js',
				data = this.format(),
				gzip = ' (' + grunt.helper('gzip', data).length + 'b)';
			grunt.file.write(filename, data);
			grunt.log.writeln('[] '.green + filename + gzip.grey);
		}
	};

	/******************************
		Zones
	******************************/

	function Zone (line) {
		this.name = line[0];
		this.offset = parseSeconds(line[1]);
		this.parseRuleset(line[2]);
		this.letters = line[3];
		this.zone = moment.tz.addZone(this.name + " " + this.format());
		this.parseUntil(line.slice(4));
	}

	Zone.prototype = {
		parseRuleset : function (ruleset) {
			if (rIsRuleset.exec(ruleset)) {
				this.offset += parseSeconds(ruleset);
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
				this.untilOffset = this.offset + (lastRule.offset * 60);
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

				this.untilMoment.subtract(this.offset, 's');
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
				this.offset,
				this.ruleset,
				this.letters
			];
			if (this.until) {
				o.push(this.until);

				if (this.untilOffset) {
					o.push(this.untilOffset || 0);
				}
			}
			return o.join('\t');
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
		this.offset = parseMinutes(line[7]);
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
			this.time = parseMinutes(input);
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
			return o.join('\t');
		}
	};
};

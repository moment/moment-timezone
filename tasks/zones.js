var moment = require('../moment-timezone'),

	TIME_RULE_WALL_CLOCK = 0,
	TIME_RULE_UTC        = 1,
	TIME_RULE_STANDARD   = 2,

	DAY_RULE_WEEKDAY_AFTER  = 0, // 0 - 6
	DAY_RULE_DAY_OF_MONTH   = 7,
	DAY_RULE_LAST_WEEKDAY   = 8,

	DAYS_OF_WEEK         = 'sun mon tue wed thu fri sat'.split(' ');

/******************************
	Helpers
******************************/

// converts time in the HH:mm format to absolute number of minutes
function parseMinutes (input) {
	var output = input.split(':'),
		minutes = +output[0] * 60,
		minutes2 = parseInt(output[1], 10) || 0;

	if (minutes >= 0) {
		minutes += minutes2;
	} else {
		minutes -= minutes2;
	}
	return minutes;
}

/******************************
	Task
******************************/

module.exports = function (grunt) {
	grunt.registerTask('zones', 'Generate the zone data files based on the olson database.', function () {
		var files = [];

		grunt.file.expandFiles("olson/*").forEach(function (filename) {
			var file = new File(filename);
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
			o += '\n}';
			return o;
		},

		save : function () {
			var filename = this.filename.replace('olson', 'zones') + '.js',
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
		this.offset = parseMinutes(line[1]);
		this.ruleset = line[2];
		this.letters = line[3];
		this.parseUntil(line.slice(4));
	}

	Zone.prototype = {
		findUntilRule : function (rules) {
			var name;

			// no need for this if there is no until data
			if (!this.untilYear) {
				return;
			}

			// if (this.name !== "America/Phoenix") {
			// 	return;
			// }

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
			var i,
				rule,
				ruleOffset = 0,
				rules = [];

			// console.log('\n' + this.name.green, this.untilYear, '\n');

			for (i = 0; i < set.length; i++) {
				rule = set[i];
				if (this.untilYear >= rule.startYear) {
					// console.log('[ ]'.green, this.untilYear, '>=', rule.startYear);
					rules.push(rule);
				} else {
					// console.log('[X]'.red, this.untilYear, '<', rule.startYear);
				}
			}

			rules.sort(function (a, b) {
				var diff = b.startYear - a.startYear;
				if (!diff) {
					return b.month - a.month;
				}
				return diff;
			});

			for (i = 0; i < rules.length; i++) {
				rule = rules[i];
				ruleOffset = rule.offset;
				// console.log('[ ]'.yellow, rule.format().grey);
				if (this.untilMonth <= rule.month) {
					// console.log('month'.green, this.untilMonth, '<=', rule.month);
					break;
				}
				// otherwise use first rule from last year
				if (this.untilYear > rule.startYear) {
					// console.log('year '.green, this.untilYear, '>', rule.startYear);
					break;
				}
			}

			this.untilOffset = 0;
			if (this.untilTimeRule === TIME_RULE_STANDARD) {
				// console.log('TIME_RULE_STANDARD '.green, this.offset);
				this.untilOffset = this.offset;
			} else if (this.untilTimeRule === TIME_RULE_WALL_CLOCK) {
				// console.log('TIME_RULE_WALL_CLOCK '.green, this.offset, ruleOffset);
				this.untilOffset = this.offset + ruleOffset;
			}

			// if (rule) {
			// 	console.log(rule.format());
			// }
			// console.log(this.format());
		},

		parseUntil : function (input) {
			this.untilYear = +input[0] || 0;
			if (input[1]) {
				this.untilMonth = input[1] = moment(input[1], "MMM").month();
			}
			if (input[3]) {
				this.untilTime = input[4] = parseMinutes(input[3]);
				input[3] = 0;
			}

			if (~(input[3] || '').indexOf('u')) {
				this.untilTimeRule = TIME_RULE_UTC;
			} else if (~input.indexOf('s')) {
				this.untilTimeRule = TIME_RULE_STANDARD;
			} else {
				this.untilTimeRule = TIME_RULE_WALL_CLOCK;
			}

			this.until = input.join('_').replace(/_$/, '');
		},

		formatUntil : function () {
			var a = [];
			if (this.untilYear) {
				a.push(this.untilYear);
			}
			return this.untilYear;
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
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
	grunt.registerTask('zones', 'Build the zone files.', function () {
		var files = [];

		grunt.file.expandFiles("olson/antarctica").forEach(function (filename) {
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
				ruleText = '\t\t' + name + ' : [\n';
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

		},

		format : function () {
			console.log(this.formatRules());
		},

		save : function () {
			this.format();
			console.log(this.filename);
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
		this.until = this.parseUntil(line.slice(4));
	}

	Zone.prototype = {
		parseUntil : function (input) {
			if (input[1]) {
				input[1] = moment(input[1], "MMM").month();
			}
			if (input[3]) {
				input[4] = parseMinutes(input[3]);
				input[3] = 0;
			}
			return input.join('_');
		},

		format : function () {
			var o = [
				this.offset,
				this.ruleset,
				this.letters
			];
			if (this.until) {
				o.push(this.until);
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



// function zoneUntil (array) {
// 	var parts = array.slice(4);
// 	if (parts[1]) {
// 		parts[1] = moment(parts[1], "MMM").month();
// 	}
// 	if (parts[3]) {
// 		parts[4] = ruleHMToMinutes(parts[3]);
// 		parts[3] = 0;
// 	}
// 	return parts.join(' ');
// }

// function formatZone (zone, output) {
// 	zone[0] = output.lastZone = zone[0] || output.lastZone;
// 	zones[zone[0]] = true;
// 	if (!output.zones[zone[0]]) {
// 		output.zones[zone[0]] = [];
// 	}
// 	zone[1] = ruleHMToMinutes(zone[1]);
// 	zone[4] = zoneUntil(zone);
// 	zone.splice(zone[4] ? 5 : 4);

// 	// sometimes comments are sprinkled in with the rules
// 	if (!zone[1] && !zone[2] && !zone[3]) {
// 		return;
// 	}

// 	output.zones[zone[0]].push(zone.slice(1).join(','));
// }

// function ruleHMToMinutesAndSuffix (input) {
// 	var output = ruleHMToMinutes(input);

// 	if (input.indexOf('u') > -1) {
// 		return output + 'u';
// 	}

// 	if (input.indexOf('s') > -1) {
// 		return output + 's';
// 	}

// 	return output;
// }

// function ruleHMToMinutes (input) {
// 	//return input;
// 	var output = input.split(':'),
// 		minutes = +output[0] * 60,
// 		minutes2 = parseInt(output[1], 10) || 0;

// 	if (minutes >= 0) {
// 		minutes += +minutes2;
// 	} else {
// 		minutes -= minutes2;
// 	}
// 	return minutes;
// }

// function ruleGreaterThan (input) {
// 	var dow = daysOfWeek.indexOf(input.toLowerCase().slice(0, 3)),
// 		dom = input.slice(5);

// 	return dow + ":" + dom;
// }

// function ruleLast (input) {
// 	var dow = daysOfWeek.indexOf(input.toLowerCase().slice(4, 7));
// 	return -dow;
// }

// function ruleDay (input) {
// 	if (daysOfWeek.indexOf(input.toLowerCase().slice(4, 7)) > -1) {
// 		return ruleLast(input);
// 	} else if (+input + "" === input) {
// 		return input;
// 	} else if (daysOfWeek.indexOf(input.toLowerCase().slice(0, 3)) > -1) {
// 		return ruleGreaterThan(input);
// 	}
// 	console.log('no switch found', input);
// 	return input;
// }

// function formatRule (rule, output) {
// 	// remove type
// 	rule.splice(3, 1);

// 	// ignore 'only' as end year
// 	if (rule[2] === 'only') {
// 		rule[2] = rule[1];
// 	}

// 	// set 'max' to 9999
// 	if (rule[2] === 'max') {
// 		rule[2] = 9999;
// 	}

// 	// convert month names to numbers
// 	rule[3] = moment(rule[3], "MMM").month();

// 	rule[4] = ruleDay(rule[4]);
// 	rule[5] = ruleHMToMinutesAndSuffix(rule[5]);
// 	rule[6] = ruleHMToMinutes(rule[6]);

// 	if (!output.rules[rule[0]]) {
// 		output.rules[rule[0]] = [];
// 	}
// 	output.rules[rule[0]].push(rule.slice(1, 8).join(','));
// }

// function parseLine (line, output) {
// 	var array,
// 		lineType;

// 	// assume lines that start with whitespace are zones
// 	if (line.match(/^\s/)) {
// 		line = "Zone " + output.lastZone + line;
// 	}

// 	// ignore comments
// 	line = line.split("#")[0];

// 	// only lines with more than 3 chars are valid
// 	if (line.length < 4) {
// 		return;
// 	}

// 	array = line.split(/\s+/);
// 	lineType = array.shift();

// 	switch (lineType) {
// 		case 'Zone':
// 			formatZone(array, output);
// 			break;
// 		case 'Rule':
// 			formatRule(array, output);
// 			break;
// 		case 'Link':
// 			break;
// 		case 'Leap':
// 			break;
// 	}
// }

// function parseZone (zone, grunt) {
// 	var data = grunt.file.read(zone),
// 		i,
// 		output = {
// 			rules : {},
// 			zones : {},
// 			lastZone : null
// 		},
// 		lines = data.split('\n'),
// 		outPath = zone.replace('olson', 'zones') + '.js',
// 		outData = 'module.exports = ';

// 	for (i = 0; i < lines.length; i++) {
// 		parseLine(lines[i], output);
// 	}

// 	outData += JSON.stringify(output, null, '\t') + ';\n';

// 	grunt.file.write(outPath, outData);

// 	grunt.log.writeln('File "' + outPath + '" created. ' + ('(' + grunt.helper('gzip', outData).length + ' bytes gzipped)').green);
// }

// function exportZones (grunt) {
// 	var i,
// 		z = [],
// 		output = "module.exports = [";

// 	for (i in zones) {
// 		z.push(i);
// 	}

// 	z.sort();

// 	for (i = 0; i < z.length; i++) {
// 		output += '\n\t"' + z[i] + '",';
// 	}

// 	output += "\n];";

// 	grunt.file.write("./tasks/zone-names.js", output);

// }

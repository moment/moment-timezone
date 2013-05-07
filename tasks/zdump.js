var path = require('path'),
	moment = require('../moment-timezone'),
	zoneNames = require('./zone-names');

module.exports = function (grunt) {
	// placeholder for an array of timezones
	var ALL_ZONES;

	/******************************
		Grunt task
	******************************/

	grunt.registerTask('zdump', 'Generate unit tests for each timezone based on zdump.', function () {
		var i;
		ALL_ZONES = [];
		for (i = 0; i < zoneNames.length; i++) {
			ALL_ZONES.push(zoneNames[i]);
		}
		nextTest(this.async());
	});

	/******************************
		zdump
	******************************/

	function zdump(name, cb) {
		grunt.utils.spawn({
			cmd: "zdump",
			args: ["-v", name]
		}, function (err, result, code) {
			cb(result.stdout.split('\n'));
		});
	}

	/******************************
		Tests
	******************************/

	function nextTest(cb) {
		var zone = ALL_ZONES.shift();
		if (zone) {
			generateTest(zone, function () {
				nextTest(cb);
			});
		} else {
			cb();
		}
	}

	function generateTest(name, cb) {
		zdump(name, function (data) {
			var file = new File(name, data);
			file.save();
			cb();
		});
	}

	/******************************
		Files
	******************************/

	function File (name, data) {
		this.years = {};
		this.name = name;
		this.addTests(data);
	}

	File.prototype = {
		addTests : function (data) {
			var test,
				years = this.years,
				i;

			// start at 2 so we skip the 1901
			// end 2 behind data.length to skip 2038
			for (i = 2; i < data.length - 2; i++) {
				test = new Test(this.name, data[i]);
				if (!years[test.year]) {
					years[test.year] = new Year(this.name, test.year);
				}
				years[test.year].add(test);
			}
		},

		renderTests : function () {
			var o = [],
				years = this.years,
				i;
			for (i in years) {
				o.push(years[i].format());
			}
			return (o.join(',\n\n'));
		},

		renderRequire : function () {
			var levels = (this.name.match(/\//g) || []).length,
				i,
				o = '';

			for (i = 0; i < levels; i++) {
				o += '../';
			}
			return o;
		},

		render : function () {
			var o = '';
			o += 'var moment = require("' + this.renderRequire() + '../moment-timezone");';
			o += '\n\nexports["' + this.name + '"] = {\n\n';
			o += this.renderTests();
			o += '\n};';
			return o;
		},

		save : function () {
			var filename = path.join(process.cwd(), "tests/" + this.name.toLowerCase() + '.js');
			grunt.file.write(filename, this.render());
			grunt.log.writeln("[] ".green + filename);
		}
	};

	/******************************
		Year object
	******************************/

	function Year (name, year) {
		this.tests = [];
		this.name = name;
		this.year = year;
	}

	Year.prototype = {
		add : function (test) {
			this.tests.push(test);
		},

		format : function () {
			var o = '', i;
			o += '\t"' + this.year + '" : function (t) {';
			// o += '\n\t\tt.expect(' + (this.tests.length * 2) + ');\n';
			for (i = 0; i < this.tests.length; i++) {
				o += '\n\t\t' +  this.tests[i].formatTest();
			}
			o += '\n';
			for (i = 0; i < this.tests.length; i++) {
				o += '\n\t\t' +  this.tests[i].offsetTest();
			}
			o += '\n\n\t\tt.done();';
			o += '\n\t}';
			return o;
		}
	};

	/******************************
		Test object
	******************************/

	function Test (name, line) {
		var s = line.split(/\s+/),
			utc = s.slice(2, 6).join(' '),
			local = s.slice(9, 13).join(' '),
			format = "MMM D HH:mm:ss YYYY",
			diff;

		this.utc = moment.utc(utc, format);
		this.local = moment.utc(local, format);
		this.time = s[11];
		this.name = name;
		this.nameShort = s[13];
		this.year = s[5];

		diff = this.utc.diff(this.local, 'minutes', true);

		if (diff === ~~diff) {
			this.offset = diff;
		} else {
			this.offset = Math.round(diff * 60) + ' / 60';
		}
	}

	Test.prototype = {
		formatTest : function () {
			var o = '',
				utc = this.utc.format();
			o += 't.equal(moment("' + utc + '").tz("' + this.name + '").format("HH:mm:ss"), ';
			o += '"' + this.time + '"';
			o += ', "' + utc + " should be " + this.time + ' ' + this.nameShort + '");';

			return o;
		},

		offsetTest : function () {
			var o = '',
				utc = this.utc.format();
			o += 't.equal(moment("' + utc + '").tz("' + this.name + '").zone(), ';
			o += this.offset;
			o += ', "' + utc + " should be " + this.offset + ' minutes offset in ' + this.nameShort + '");';

			return o;
		}
	};
};

var path = require('path'),
	moment = require('../moment-timezone'),
	zoneNames = require('./zone-names');

module.exports = function (grunt) {
	// placeholder for an array of timezones
	var ALL_ZONES = ["america/los_angeles"];

	/******************************
		Grunt task
	******************************/

	grunt.registerTask('gen-tests', 'Generate unit tests for each timezone.', function () {
		nextTest(this.async());
	});

	/******************************
		zdump
	******************************/

	function zdump(name, cb) {
		grunt.utils.spawn({
			cmd: "zdump",
			args: ["-v", "-c", "2020", name]
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
			console.log(data);
			makeTests(name, data);
			cb();
		});
	}

	function makeTests (name, data) {
		var tests = [],
			test,
			years = {},
			year,
			i;

		for (i = 0; i < data.length; i++) {
			test = new Test(name, data[i]);
			if (!years[test.year]) {
				years[test.year] = new Year(name, test.year);
			}
			years[test.year].add(test);
		}

		for (i in years) {
			year = years[i];
			console.log(year.format());
		}
	}

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
			o += '\t"' + this.name + ' ' + this.year + '" : function (test) {';
			o += '\n\t\ttest.expect(' + (this.tests.length * 2) + ');\n';
			for (i = 0; i < this.tests.length; i++) {
				o += '\n\t\t' +  this.tests[i].formatTest();
			}
			o += '\n';
			for (i = 0; i < this.tests.length; i++) {
				o += '\n\t\t' +  this.tests[i].offsetTest();
			}
			o += '\n\n\t\ttest.done();';
			o += '\n\t},\n';
			return o;
		}
	}

	/******************************
		Test object
	******************************/

	function Test (name, line) {
		var s = line.split(/\s+/),
			utc = s.slice(2, 6).join(' '),
			local = s.slice(9, 13).join(' '),
			format = "MMM D HH:mm:ss YYYY";

		this.utc = moment.utc(utc, format);
		this.local = moment.utc(local, format);
		this.time = s[11];
		this.name = name;
		this.nameShort = s[13];
		this.year = s[5];
		this.offset = this.utc.diff(this.local, 'minutes');

		// console.log(this.year);
		// console.log(this.local.format());
		// console.log(name, this.utc.diff(this.local, 'minutes'), this.time);
		// console.log(this.format());
	}

	Test.prototype = {
		formatTest : function () {
			var o = '',
				utc = this.utc.format();
			o += 'test.equal(moment("' + utc + '").tz("' + this.name + '").format("HH:mm:ss"), ';
			o += '"' + this.time + '"';
			o += ', "' + utc + " should be " + this.time + ' in ' + this.name + '");';

			return o;
		},

		offsetTest : function () {
			var o = '',
				utc = this.utc.format();
			o += 'test.equal(moment("' + utc + '").tz("' + this.name + '").zone(), ';
			o += this.offset;
			o += ', "' + utc + " should be " + this.offset + ' minutes offset");';

			return o;
		}
	}
};

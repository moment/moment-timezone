var path = require('path'),
	moment = require('moment');

module.exports = function (grunt) {
	// placeholder for an array of timezones
	var ALL_ZONES,
		INITIAL_ZONE,

		failedZones = [],
		failedTests = [],

		logTableWidths = [4, 0, 12, 12],

		failedZoneCount = 0,
		passedZoneCount = 0;

	/******************************
		Grunt task
	******************************/

	grunt.registerTask('generate-tests', 'Run the unit tests in different timezones.', function () {
		var done = this.async();
		getCurrentTimezone(function (zone) {
			// save the initial timezone so we dont break our computers
			INITIAL_ZONE = zone;

			ALL_ZONES = [zone];

			// start building the tests
			nextTest(done);
		});
	});

	/******************************
		Timezones
	******************************/

	function getCurrentTimezone(cb) {
		grunt.utils.spawn({
			cmd: "systemsetup",
			args: ["gettimezone"]
		}, function (err, result, code) {
			cb(result.stdout.replace('Time Zone: ', ''));
		});
	}

	function getAllTimezones(cb) {
		grunt.utils.spawn({
			cmd: "systemsetup",
			args: ["listtimezones"]
		}, function (err, result, code) {
			var zones = result.stdout.replace('Time Zones:', '');
			zones = zones.match(/\S+/g);
			cb(zones);
		});
	}

	function setTimezone(zone, cb) {
		grunt.utils.spawn({
			cmd: "systemsetup",
			args: ["settimezone", zone]
		}, function (err, result, code) {
			cb();
		});
	}

	/******************************
		Tests
	******************************/

	function nextTest(cb) {
		var zone = ALL_ZONES.pop();
		if (zone) {
			setTimezone(zone, function () {
				generateZone(zone, function () {
					nextTest(cb);
				});
			});
		} else {
			cb();
		}
	}

	function generateZone(zone, cb) {
		var filename = path.join(process.cwd(), "tests/" + zone.toLowerCase() + '.js'),
			max = +moment([2013]),
			offset = 0,
			currentMoment,
			output = [],
			tests = [],
			i;

		output.push('var TZ = require("../../moment-timezone"),');
		output.push('\tmoment = require("moment");');
		output.push('\nexports.rules = {');

		output.push('\t"' + zone + '" : function (test) {');
		output.push('\t\tvar zone = TZ.getZoneSet("' + zone + '");');

		// every minute from 1970 to 2012
		for (i = 0; i < max; i += 60000) {
			currentMoment = moment(i);
			if (offset !== currentMoment.zone()) {
				offset = currentMoment.zone();
				tests.push(makeTest(currentMoment.clone().subtract('d', 1)));
				tests.push(makeTest(currentMoment.clone().subtract('ms', 1)));
				tests.push(makeTest(currentMoment));
			}
		}

		output.push('\t\ttest.expect(' + tests.length + ');\n');

		for (i = 0; i < tests.length; i++) {
			output.push(tests[i]);
		}

		output.push('\t\ttest.done();');
		output.push('\t}');
		output.push('};');

		grunt.file.write(filename, output.join('\n'));
		cb();
	}

	function makeTest(mom) {
		var utc = mom.clone().utc(),
			o = '\t\t';
		o += 'test.equal(zone.offset(moment("' + utc.format() + '")), ';
		o += mom.zone();
		o += ', "' + utc.format() + " should be " + mom.zone() + ' minutes offset");';

		return o;
	}
};

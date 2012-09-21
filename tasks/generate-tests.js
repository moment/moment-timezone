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
			output = "",
			i;

		// every minute from 1970 to 2012
		for (i = 0; i < max; i += 60000) {
			currentMoment = moment(i);
			if (offset !== currentMoment.zone()) {
				offset = currentMoment.zone();
				output += makeTest(currentMoment);
			}
		}

		grunt.file.write(filename, output);
		cb();
	}

	function makeTest(mom) {
		return "'" + mom.format() + " should be " + mom.zone() + "',\n";
	}
};

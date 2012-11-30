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
			output = [],
			tests = [],
			i;

		output.push('var TZ = require("../../moment-timezone"),');
		output.push('\tmoment = require("moment");');
		output.push('\nexports.rules = {');

		// every minute from 1970 to 2012
		for (i = 1970; i < 2012; i++) {
			tests.push(makeTestForYear(i, zone));
		}

		output.push(tests.join(',\n\n'));

		output.push('};');

		grunt.file.write(filename, output.join('\n'));
		cb();
	}

	function makeTestForYear (year, zone) {
		var max = +moment([year + 1]),
			offset = 0,
			currentMoment,
			output = [],
			tests = [],
			formatTests = [],
			i = +moment([year]);

		for (i; i < max; i += 60000) {
			currentMoment = moment(i);
			if (offset !== currentMoment.zone()) {
				offset = currentMoment.zone();

				tests.push(makeTest(currentMoment.clone().subtract('ms', 1)));
				tests.push(makeTest(currentMoment));

				formatTests.push(makeFormatTest(currentMoment.clone().subtract('ms', 1), zone));
				formatTests.push(makeFormatTest(currentMoment, zone));
			}
		}

		output.push('\t"' + zone + ' ' + year + '" : function (test) {');
		output.push('\t\tvar zone = TZ.getZoneSet("' + zone + '");');
		output.push('\t\ttest.expect(' + tests.length + ');\n');

		for (i = 0; i < tests.length; i++) {
			output.push(tests[i]);
		}

		output.push('\n\t\ttest.done();');
		output.push('\t},\n');

		output.push('\t"' + zone + ' ' + year + ' format" : function (test) {');
		output.push('\t\ttest.expect(' + formatTests.length + ');\n');

		for (i = 0; i < formatTests.length; i++) {
			output.push(formatTests[i]);
		}

		output.push('\n\t\ttest.done();');
		output.push('\t}');

		return output.join('\n');
	}

	function makeFormatTest(mom, zoneName) {
		var utc = mom.clone().utc(),
			o = '\t\t';
		o += 'test.equal(moment("' + utc.format() + '").tz("' + zoneName + '").format("HH:mm"), ';
		o += '"' + mom.format("HH:mm") + '"';
		o += ', "' + utc.format() + " should be " + mom.format("HH:mm") + ' in ' + zoneName + '");';

		return o;
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

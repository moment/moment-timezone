var path = require('path'),
	moment = require('../moment-timezone');

module.exports = function (grunt) {
	/******************************
		Grunt task
	******************************/

	grunt.registerTask('generate-test', 'Build a unit test for the current timezone', function () {
		var done = this.async();
		getCurrentTimezone(function (zone) {
			generateZone(zone, done);
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

	/******************************
		Tests
	******************************/

	function generateZone(zone, cb) {
		var filename = path.join(process.cwd(), "tests/" + zone.toLowerCase() + '.js'),
			output = [],
			tests = [],
			i,
			testCount = 0;

		output.push('var moment = require("../../moment-timezone");');
		output.push('\nexports.rules = {');

		// every minute from 1970 to 2012
		for (i = 2013; i < 2014; i++) {
			tests.push(makeTestForYear(i, zone));
		}

		output.push(tests.join(',\n\n'));

		output.push('};');

		grunt.file.write(filename, output.join('\n'));
		grunt.log.writeln("Created " + filename);
		cb();
	}

	function makeTestForYear (year, zone) {
		var max = +moment.utc([year + 1]),
			output = [],
			tests = [],
			formatTests = [],
			i = +moment.utc([year]),
			currentMoment = moment(i),
			offset = currentMoment.zone();

		// first day of year
		tests.push(makeTest(moment.utc([year]), zone));
		formatTests.push(makeFormatTest(moment.utc([year]), zone));

		// everytime the offset changes
		for (i; i < max; i += 60000) {
			currentMoment = moment(i);
			if (offset !== currentMoment.zone()) {
				offset = currentMoment.zone();

				tests.push(makeTest(currentMoment.clone().subtract('ms', 1), zone));
				tests.push(makeTest(currentMoment, zone));

				formatTests.push(makeFormatTest(currentMoment.clone().subtract('ms', 1), zone));
				formatTests.push(makeFormatTest(currentMoment, zone));
			}
		}

		// last day of year
		tests.push(makeTest(moment.utc([year]).endOf('year'), zone));
		formatTests.push(makeFormatTest(moment.utc([year]).endOf('year'), zone));

		if (tests.length) {
			output.push('\t"' + zone + ' ' + year + ' offset" : function (test) {');
			output.push('\t\ttest.expect(' + tests.length + ');\n');

			for (i = 0; i < tests.length; i++) {
				output.push(tests[i]);
			}

			output.push('\n\t\ttest.done();');
			output.push('\t},\n');
		}

		if (formatTests.length) {
			output.push('\t"' + zone + ' ' + year + ' format" : function (test) {');
			output.push('\t\ttest.expect(' + formatTests.length + ');\n');

			for (i = 0; i < formatTests.length; i++) {
				output.push(formatTests[i]);
			}

			output.push('\n\t\ttest.done();');
			output.push('\t}');
		}

		return output.join('\n');
	}

	function makeFormatTest(mom, zoneName) {
		var utc = mom.clone().utc(),
			local = mom.clone().local(),
			o = '\t\t';
		o += 'test.equal(moment("' + utc.format() + '").tz("' + zoneName + '").format("HH:mm"), ';
		o += '"' + local.format("HH:mm") + '"';
		o += ', "' + utc.format() + " should be " + local.format("HH:mm") + ' in ' + zoneName + '");';

		return o;
	}

	function makeTest(mom, zoneName) {
		var utc = mom.clone().utc(),
			local = mom.clone().local(),
			o = '\t\t';
		o += 'test.equal(moment("' + utc.format() + '").tz("' + zoneName + '").zone(), ';
		o += local.zone();
		o += ', "' + utc.format() + " should be " + local.zone() + ' minutes offset");';

		return o;
	}
};

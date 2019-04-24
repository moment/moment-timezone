"use strict";

var path = require('path'),
	moment = require('moment'),
	tz = require('../').tz,
	helpers = require('../tests/helpers/helpers');

/**
 * Creates a test for a provided time change (zone.untils[i])
 */
function changeTest (zone, i) {
	var until         = moment.utc(zone.untils[i]),
		minutesOffset = zone.offsets[i],
		secondsOffset = Math.round(minutesOffset * 60),
		abbr          = zone.abbrs[i],
		dateTime      = until.format('YYYY-MM-DDTHH:mm:ssZ'),
		hours         = until.clone().subtract(secondsOffset, 'seconds').format('HH:mm:ss');

	if (secondsOffset % 60) {
		minutesOffset = secondsOffset + ' / 60';
	}

	return '["' + dateTime + '", "' + hours + '", "' + abbr + '", ' + minutesOffset + ']';
}

/**
 * Creates a test for provided year
 */
function yearTest (year, changeTests, name) {
	return '\t"' + year + '" : helpers.makeTestYear("' + name + '", [\n\t\t' + changeTests.join(',\n\t\t') + '\n\t])';
}

/**
 * Creates tests for all time changes in a timezone
 */
function yearTests (zone) {
	var changeTests = {};

	zone.untils.forEach(function (until, i) {
		if (i < 2 || i >= zone.untils.length - 2) { return; }
		var year = moment.utc(until).year();
		changeTests[year] = changeTests[year] || [];
		changeTests[year].push(changeTest(zone, i));
	});

	return Object.keys(changeTests).map(function (year) {
		return yearTest(year, changeTests[year], zone.name);
	}).join(',\n\n');
}

function intro (name) {
	var helpers = path.relative(path.dirname('zones/' + name), 'helpers/helpers').replace(/\\/g, '/');
	return '"use strict";\n\nvar helpers = require("' + helpers + '");\n\nexports["' + name + '"] = {\n\n';
}

/**
 * Creates two guess tests for a timezone, guess:by:offset and guess:by:abbr
 */
function guessTests (zone) {
	var mostPopulatedInOffset = helpers.getGuessResult(zone.name, { offset: true });
	var mostPopulatedInAbbr = helpers.getGuessResult(zone.name, { abbr: true });
	var tests = '';
	if (mostPopulatedInOffset === zone.name) {
		tests += '\t"guess:by:offset" : helpers.makeTestGuess("' + zone.name + '", { offset: true }),\n\n';
	} else if (mostPopulatedInOffset) {
		tests += '\t"guess:by:offset" : helpers.makeTestGuess("' + zone.name + '", { offset: true, expect: "' + mostPopulatedInOffset + '" }),\n\n';
	}
	if (mostPopulatedInAbbr === zone.name) {
		tests += '\t"guess:by:abbr" : helpers.makeTestGuess("' + zone.name + '", { abbr: true }),\n\n';
	} else if (mostPopulatedInAbbr) {
		tests += '\t"guess:by:abbr" : helpers.makeTestGuess("' + zone.name + '", { abbr: true, expect: "' + mostPopulatedInAbbr + '" }),\n\n';
	}
	return tests;
}

module.exports = function (grunt) {
	grunt.registerTask('data-tests', '8. Create unit tests from data-collect.', function () {
		tz.load(grunt.file.readJSON('data/packed/2019a.json'));
		var zones = grunt.file.readJSON('temp/collect/2019a.json');

		zones.forEach(function (zone) {
			var data = intro(zone.name) + guessTests(zone) + yearTests(zone) + '\n};',
				dest = path.join('tests/zones', zone.name.toLowerCase() + '.js');

			grunt.file.mkdir(path.dirname(dest));
			grunt.file.write(dest, data);
			grunt.verbose.ok("Created " + zone.name + " tests.");
		});


		grunt.log.ok('Created tests');
	});
};

// Tests should look something like this.
//
// "use strict";
//
// var helpers = require("../../helpers/helpers");
//
// exports["America/Los_Angeles"] = {
// 	"guess:by:offset" : helpers.makeTestGuess("America/Los_Angeles", { offset: true, expect: "America/Los_Angeles" }),
//
// 	"guess:by:abbr" : helpers.makeTestGuess("America/Los_Angeles", { abbr: true }),
//
// 	"1918" : helpers.makeTestYear("America/Los_Angeles", [
// 		["1918-03-31T09:59:59+00:00", "01:59:59", "PST", 480],
// 		["1918-03-31T10:00:00+00:00", "03:00:00", "PDT", 420],
// 		["1918-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
// 		["1918-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
// 	]),
//
// 	"1919" : helpers.makeTestYear("America/Los_Angeles", [
// 		["1919-03-30T09:59:59+00:00", "01:59:59", "PST", 480],
// 		["1919-03-30T10:00:00+00:00", "03:00:00", "PDT", 420],
// 		["1919-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
// 		["1919-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
// 	])
// };

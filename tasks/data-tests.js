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

	// Fixed-offset zones (like `Etc/GMT-2`) only have a single `null` until value.
	// We pick a fixed timestamp for those cases, using the Unix epoch.
	if (zone.untils.length === 1 && zone.untils[0] === null) {
		var fixedUntil = Object.assign({}, zone, { untils: [0] })
		changeTests[1970] = [changeTest(fixedUntil, 0)];
	} else {
		zone.untils.forEach(function (until, i) {
			var year = moment.utc(until).year();
			changeTests[year] = changeTests[year] || [];
			changeTests[year].push(changeTest(zone, i));
		});
	}

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

/**
 * Creates a test for a zone's `.countries()` output
 */
function zoneCountriesTest (zone) {
	var countries = zone.countries.slice().sort();
	return "\t\ttest.deepEqual(tz.zone('" + zone.name + "').countries(), [" +
		countries.map(function (code) { return '"' + code + '"' }).join(',') +
		"]);\n";
}

/**
 * Creates a test for a country -> zones mapping
 */
function countryZonesTest (country) {
	var zones = country.zones.slice().sort();
	return '\t\ttest.deepEqual(tz.zonesForCountry("' + country.abbr + '"), [' +
		zones.map(function (zone) { return '"' + zone + '"' }).join(',') +
		']);\n';
}

/**
 * Creates all tests for countries.js
 */
function allCountriesTests (zoneTests, countryTests) {
	var intro = '"use strict";\n\nvar moment = require("../../");\nvar tz = moment.tz;\n\nexports.countries = {',
		outro = '\n};\n',
		tests = [
			{ name: 'zone_countries', tests: zoneTests },
			{ name: 'country_zones', tests: countryTests },
		],
		testStrings = tests.map(function (data) {
			return '\n\n\t' + data.name + ' : function (test) {\n\n' +
				data.tests.sort().join('') +
				'\n\t\ttest.done();\n\t}';
		});

	return intro + testStrings.join(',') + outro;
}

module.exports = function (grunt) {
	grunt.registerTask('data-tests', '8. Create unit tests from data-collect.', function (version) {
		version = version || 'latest';
		tz.load(grunt.file.readJSON('data/packed/' + version + '.json'));
		var zones = grunt.file.readJSON('temp/collect/' + version + '.json'),
			meta = grunt.file.readJSON('data/meta/' + version + '.json'),
			testBase = version === 'latest' ? 'tests' : path.join('temp/tests', version),
			zoneCountriesTests = [];

		// Generate unit tests for each zone
		zones.forEach(function (zone) {
			var data = intro(zone.name) + guessTests(zone) + yearTests(zone) + '\n};',
				dest = path.join(testBase, 'zones', zone.name.toLowerCase() + '.js');

			grunt.file.write(dest, data);
			zoneCountriesTests.push(zoneCountriesTest(zone));
			grunt.verbose.ok("Created " + zone.name + " tests.");
		});

		// Generate unit tests for countries
		if (meta.countries) {
			var countryZonesTests = Object.values(meta.countries).map(countryZonesTest);
			grunt.file.write(
				path.join(testBase, 'countries', 'countries.js'),
				allCountriesTests(zoneCountriesTests, countryZonesTests)
			);
			grunt.verbose.ok("Created country tests.");
		}

		// Copy helpers and rewrite paths when generating for a specific version
		if (version !== 'latest') {
			grunt.file.copy('tests/helpers/helpers.js',
					path.join(testBase, 'helpers/helpers.js'),
					{process: function (helperCode) {
				return helperCode.replace(
						"var moment = require('../../index')",
						"var moment = require('../index')");
			}});
			grunt.file.write(path.join(testBase, 'index.js'),
				'(module.exports = require("../../../moment-timezone"))' +
				'.tz.load(require("../../../data/packed/' + version + '.json"));');
		}

		grunt.log.ok('Created tests');
	});
};

// Zone tests should look something like this.
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

// Country tests should look something like this.
//
// "use strict";
//
// var moment = require("../../");
// var tz = moment.tz;
//
// exports.countries = {
//
// 	zone_countries : function (test) {
//
// 		test.deepEqual(tz.zone('Africa/Abidjan').countries(), ["BF","CI","GH","GM","GN","IS","ML","MR","SH","SL","SN","TG"]);
// 		test.deepEqual(tz.zone('Africa/Accra').countries(), ["GH"]);
//		...
//
// 		test.done();
// 	},
//
// 	country_zones : function (test) {
//
// 		test.deepEqual(tz.zonesForCountry("AD"), ["Europe/Andorra"]);
// 		test.deepEqual(tz.zonesForCountry("AE"), ["Asia/Dubai"]);
// 		test.deepEqual(tz.zonesForCountry("AF"), ["Asia/Kabul"]);
// 		test.deepEqual(tz.zonesForCountry("AG"), ["America/Antigua","America/Puerto_Rico"]);
// 		...
//
// 		test.done();
// 	}
// };

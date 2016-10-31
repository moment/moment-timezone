"use strict";

var path = require('path'),
	moment = require('moment'),
	tz = require('../').tz;

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

function yearTest (year, changes, name) {
	return '\t"' + year + '" : helpers.makeTestYear("' + name + '", [\n\t\t' + changes.join(',\n\t\t') + '\n\t])';
}

function tests (zone) {
	var years = {};

	zone.untils.forEach(function (until, i) {
		if (i < 2 || i >= zone.untils.length - 2) { return; }
		var year = moment.utc(until).year();
		years[year] = years[year] || [];
		years[year].push(changeTest(zone, i));
	});

	return Object.keys(years).map(function (year) {
		return yearTest(year, years[year], zone.name);
	}).join(',\n\n');
}

function intro (name) {
	var helpers = path.relative(path.dirname('zones/' + name), 'helpers/helpers');
	return '"use strict";\n\nvar helpers = require("' + helpers + '");\n\nexports["' + name + '"] = {\n';
}

function formatForMonth (name, month, format) {
	return tz([2015, month, 1], name).format(format);
}

function untilForMonth (name, month) {
	var zone = tz.zone(name),
		index = zone._index(new Date(2015, month, 1)),
		until = zone.untils[Math.min(zone.untils.length - 1, index)];
	return tz(until === Infinity ? [2015, month, 1] : until, name).format('YYYY-MM-DD HH:mm');
}

function dataToOffsetAndAbbr (zoneData) {
	var name = zoneData.name;
	return {
		name: name,
		population: zoneData.population,
		offsets: formatForMonth(name, 0, 'Z') + ' ' + formatForMonth(name, 6, 'Z'),
		untils: untilForMonth(name, 0) + ' ' + untilForMonth(name, 6),
		abbrs: formatForMonth(name, 0, 'z') + ' ' + formatForMonth(name, 6, 'z')
	};
}

function population (data, grouped) {
	var current = dataToOffsetAndAbbr(data);
	var isMostPopulatedInOffset = current.population > 0;
	var isMostPopulatedInAbbr = current.population > 0;
	grouped.forEach(function (other) {
		if (current.population > other.population || current.name === other.name) {
			return;
		}
		if (other.offsets === current.offsets) {
			isMostPopulatedInOffset = false;
			if (other.abbrs === current.abbrs) {
				isMostPopulatedInAbbr = false;
			}
		}
	});

	if (!/[A-Z]/.test(current.abbrs) || (!isMostPopulatedInAbbr && !isMostPopulatedInOffset)) {
		return '';
	}
	return '\t"guess" : helpers.makeTestGuess("' + data.name + '", { offset: ' + isMostPopulatedInOffset + ', abbr: ' + isMostPopulatedInAbbr + ' }),\n\n';
}

module.exports = function (grunt) {
	grunt.registerTask('data-tests', '8. Create unit tests from data-collect.', function () {
		tz.load(grunt.file.readJSON('data/packed/latest.json'));
		var zones = grunt.file.readJSON('temp/collect/latest.json'),
			grouped = zones.map(dataToOffsetAndAbbr);

		zones.forEach(function (zone) {
			var data = intro(zone.name) + population(zone, grouped) + tests(zone) + '\n};',
				dest = path.join('tests/zones', zone.name.toLowerCase() + '.js');

			grunt.file.mkdir(path.dirname(dest));
			grunt.file.write(dest, data);
			grunt.verbose.ok("Created " + zone.name + " tests.");
		});

<<<<<<< HEAD
=======

>>>>>>> origin/Country-Functionality
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
// 	"guess" : helpers.makeTestGuess("America/Los_Angeles", { offset: true, abbr: true }),
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
<<<<<<< HEAD
// };
=======
// };
>>>>>>> origin/Country-Functionality

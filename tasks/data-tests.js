"use strict";

var path = require('path'),
	moment = require('moment');

function changeTest (zone, i) {
	var until         = moment.utc(zone.untils[i]),
		minutesOffset = zone.offsets[i],
		secondsOffset = Math.round(minutesOffset * 60),
		abbr          = zone.abbrs[i],
		dateTime      = until.format(),
		hours         = until.clone().subtract('seconds', secondsOffset).format('HH:mm:ss');

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

module.exports = function (grunt) {
	grunt.registerTask('data-tests', '7. Create unit tests from data-collect.', function () {
		var zones = grunt.file.readJSON('data/zdump/latest.json');

		zones.forEach(function (zone) {
			var data = intro(zone.name) + tests(zone) + '\n};',
				dest = path.join('tests/zones', zone.name.toLowerCase() + '.js');

			grunt.file.mkdir(path.dirname(dest));
			grunt.file.write(dest, data);
			grunt.log.ok("Created " + zone.name + " tests.");
		});

	});
};

// Tests should look something like this.
//
// "use strict";
//
// var helpers = require("../../helpers/helpers");
//
// exports["America/Los_Angeles"] = {
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

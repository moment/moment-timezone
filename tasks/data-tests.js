import path from 'path';
import moment from '../index';

function changeTest (zone, i) {
	const until         = moment.utc(zone.untils[i]);
	let minutesOffset   = zone.offsets[i];
	const secondsOffset = Math.round(minutesOffset * 60);
	const abbr          = zone.abbrs[i];
	const dateTime      = until.format();
	const hours         = until.clone().subtract(secondsOffset, 'seconds').format('HH:mm:ss');

	if (secondsOffset % 60) {
		minutesOffset = secondsOffset + ' / 60';
	}

	return `["${ dateTime }", "${ hours }", "${ abbr }", ${ minutesOffset }]`;
}

function yearTest (year, changes, name) {
	return `\t"${ year }" : helpers.makeTestYear("${ name }", [\n\t\t${ changes.join(',\n\t\t') }\n\t])`;
}

function tests (zone) {
	const years = {};

	zone.untils.forEach((until, i) => {
		if (i < 2 || i >= zone.untils.length - 2) { return; }
		const year = moment.utc(until).year();
		years[year] = years[year] || [];
		years[year].push(changeTest(zone, i));
	});

	return Object.keys(years).map(year => {
		return yearTest(year, years[year], zone.name);
	}).join(',\n\n');
}

function intro (name) {
	const helpers = path.relative(path.dirname(`zones/${ name }`), 'helpers/helpers');
	return `"use strict";\n\nvar helpers = require("${ helpers }");\n\nexports["${ name }"] = {\n`;
}

function formatForMonth (name, month, format) {
	return moment.tz([2015, month, 1], name).format(format);
}

function untilForMonth (name, month) {
	const zone = moment.tz.zone(name);
	const index = zone._index(new Date(2015, month, 1));
	const until = zone.untils[Math.min(zone.untils.length - 1, index)];
	return moment.tz(until === Infinity ? [2015, month, 1] : until, name).format('YYYY-MM-DD HH:mm');
}

function dataToOffsetAndAbbr (zoneData) {
	const { name, population } = zoneData;
	return {
		name,
		population,
		offsets: `${formatForMonth(name, 0, 'Z')} ${formatForMonth(name, 6, 'Z')}`,
		untils: `${untilForMonth(name, 0)} ${untilForMonth(name, 6)}`,
		abbrs: `${formatForMonth(name, 0, 'z')} ${formatForMonth(name, 6, 'z')}`
	};
}

function population (data, grouped) {
	const current = dataToOffsetAndAbbr(data);
	let isMostPopulatedInOffset = current.population > 0;
	let isMostPopulatedInAbbr = current.population > 0;
	grouped.forEach(other => {
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
	if (!isMostPopulatedInAbbr && !isMostPopulatedInOffset) {
		return '';
	}
	return `\t"guess" : helpers.makeTestGuess("${ data.name }", { offset: ${ isMostPopulatedInOffset }, abbr: ${ isMostPopulatedInAbbr } }),\n\n`;
}

export default grunt => {
	const { readJSON, mkdir, write } = grunt.file;

	grunt.registerTask('data-tests', '8. Create unit tests from data-collect.', _ => {
		const zones = readJSON('temp/collect/latest.json');
		const grouped = zones.map(dataToOffsetAndAbbr);

		zones.forEach(zone => {
			const data = intro(zone.name) + population(zone, grouped) + tests(zone) + '\n};';
			const dest = path.join('tests/zones', `${ zone.name.toLowerCase() }.js`);

			mkdir(path.dirname(dest));
			write(dest, data);
			grunt.verbose.ok(`Created ${ zone.name } tests.`);
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
// };

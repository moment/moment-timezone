import moment from 'moment';
import Database from '../src/database/database';

const CHANGE_HEADER = `import { testChange } from '../helpers/zones';\n\n`;
const GUESS_HEADER = `import { testGuessForOffset, testGuessForAbbr } from '../helpers/zones';\n\n`;

function changeTest(zone, until) {
	const offset   = zone.offset(until);
	const instance = moment.utc(until);
	const abbr     = zone.abbr(until);
	const dateTime = instance.format();
	const hours    = instance.clone().subtract(offset, 'minutes').format('HH:mm:ss');

	return `testChange('${ zone.name }', '${ dateTime }', '${ hours }', '${ abbr }', ${ offset });`;
}

function changeTests (zones) {
	const tests = [];
	const thisYear = moment().year();

	zones.forEach(zone => {
		const thisYearUntils = [];

		zone.untils.filter(until => moment.utc(until).year() === thisYear).forEach(until => {
			thisYearUntils.push(until - 6e4);
			thisYearUntils.push(until);
		});

		if (!thisYearUntils.length) {
			thisYearUntils.push(Date.UTC(thisYear, 0, 1));
		}

		thisYearUntils.forEach(until => tests.push(changeTest(zone, until)));
		tests.push('');
	});

	return tests.join('\n') + '\n';
}

function guessTests (zones) {
	const forAbbr = {};
	const forOffset = {};
	const thisYear = moment().year();

	zones.forEach(zone => {
		if (!zone.population) {
			return;
		}

		const jan = Date.UTC(thisYear, 0, 1);
		const jun = Date.UTC(thisYear, 6, 1);
		const abbr = `${ zone.abbr(jan) }-${ zone.abbr(jun) }`;
		const offset = `${ zone.offset(jan) }-${ zone.offset(jun) }`;

		if (!forAbbr[abbr] || forAbbr[abbr].population < zone.population) {
			forAbbr[abbr] = zone;
		}

		if (!forOffset[offset] || forOffset[offset].population < zone.population) {
			forOffset[offset] = zone;
		}
	});

	return Object.keys(forOffset).map(key => forOffset[key].name).sort().map(name => {
		return `testGuessForOffset('${ name }');`;
	}).join('\n') + '\n\n' + Object.keys(forAbbr).map(key => forAbbr[key].name).sort().map(name => {
		return `testGuessForAbbr('${ name }');`;
	}).join('\n') + '\n';
}

export default grunt => {
	const { write, readJSON } = grunt.file;

	function buildZones () {
		const db = new Database();
		db.put(readJSON('src/data/packed.json'));
		return db.getNames().map(name => db.getZone(name));
	}

	grunt.registerTask('data-tests', '8. Create unit tests from data-collect.', _ => {
		const zones = buildZones();

		write('test/zone/changes.js', CHANGE_HEADER + changeTests(zones));
		write('test/zone/guesses.js', GUESS_HEADER + guessTests(zones));
	});
};

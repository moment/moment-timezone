import test from 'ava';
import pack from '../../src/pack/pack';
import Database from '../../src/database/database';
import guessFromUserOffsets from '../../src/guess/guess-from-user-offsets';

const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;
const oldGetFullYear = Date.prototype.getFullYear;

test.afterEach(t => {
	Date.prototype.getTimezoneOffset = oldGetTimezoneOffset;
	Date.prototype.getFullYear = oldGetFullYear;
});

test('with daylight saving time', t => {
	const db = new Database();

	// Mock timezone offset changes
	// Jan  1 - Mar 15 == -01:00
	// Mar 16 - Oct 15 == -02:00
	// Oct 16 - Dec 31 == -01:00
	Date.prototype.getTimezoneOffset = function () {
		const date = this.getDate();
		const month = this.getMonth();
		let isSummer = (month > 2 && month < 9);
		if (month === 2) { isSummer = date > 15; }
		if (month === 9) { isSummer = date <= 15; }
		return isSummer ? 60 : 120;
	};

	Date.prototype.getFullYear = function () {
		return 2014;
	};

	db.putZone(pack({
		name: "Incorrect/Too_Small",
		abbrs: ["AAA", "BBB", "CCC", "DDD"],
		offsets: [60, 120, 60, 120],
		untils: [
			Date.UTC(2013, 2, 15),
			Date.UTC(2013, 9, 15),
			Date.UTC(2014, 2, 15),
			Infinity
		],
		population: 1
	}));

	db.putZone(pack({
		name: "Correct/Zone",
		abbrs: ["AAA", "BBB", "CCC", "DDD"],
		offsets: [60, 120, 60, 120],
		untils: [
			Date.UTC(2013, 2, 15),
			Date.UTC(2013, 9, 15),
			Date.UTC(2014, 2, 15),
			Infinity
		],
		population: 100
	}));

	db.putZone(pack({
		name: "Incorrect/Wrong_Offsets",
		abbrs: ["AAA", "BBB", "CCC", "DDD"],
		offsets: [60, 0, 60, 0],
		untils: [
			Date.UTC(2013, 2, 15),
			Date.UTC(2013, 9, 15),
			Date.UTC(2014, 2, 15),
			Infinity
		],
		population: 100
	}));

	t.is(guessFromUserOffsets(db), 'Correct/Zone');
});

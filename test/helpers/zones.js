import test from 'ava';
import moment from '../../src/moment-timezone';
import { mockIntl, resetIntl } from './intl';

const tz = moment.tz;
const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;
const oldToTimeString = Date.prototype.toTimeString;

function mockTimezoneOffset(name) {
	const zone = tz.zone(name);
	Date.prototype.getTimezoneOffset = function () {
		return zone.offset(+this);
	};
}

function mockToTimeString(name, format) {
	Date.prototype.toTimeString = function () {
		return tz(+this, name).format(format || 'HH:mm:ss [GMT]ZZ');
	};
}

test.afterEach(_ => {
	resetIntl();
	Date.prototype.getTimezoneOffset = oldGetTimezoneOffset;
	Date.prototype.toTimeString = oldToTimeString;
});

export function testYear(name, year, expected) {
	test(`${name}: ${year}`, t => {
		for (let i = 0, l = expected.length; i < l; i++) {
			let [date, time, abbr, offset] = expected[i];
			let m = moment(date).tz(name);
			t.is(m.format("HH:mm:ss"), time, `${date} should be ${time} ${abbr}`);
			t.is(m.utcOffset(), -offset, `${date} should be ${offset} minutes offset in ${abbr}`);
			t.is(m.zoneAbbr(), abbr, `${date} should be ${abbr}`);
		}
	});
}

export function testGuess(name, mostPopulatedFor) {
	test(`${name}: guess`, t => {
		mockIntl(undefined);

		if (mostPopulatedFor.offset) {
			mockTimezoneOffset(name);
			mockToTimeString(name);
			t.is(tz.guess(true), name);
		}

		if (mostPopulatedFor.abbr) {
			mockTimezoneOffset(name);
			mockToTimeString(name, 'HH:mm:ss [GMT]ZZ (z)');
			t.is(tz.guess(true), name);
		}
	});
}

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

export function testChange(name, date, time, abbr, offset) {
	test(name, t => {
		let m = moment(date).tz(name);
		t.is(m.format("HH:mm:ss"), time, `${date} should be ${time} ${abbr}`);
		t.is(m.utcOffset(), -offset, `${date} should be ${offset} minutes offset in ${abbr}`);
		t.is(m.zoneAbbr(), abbr, `${date} should be ${abbr}`);
	});
}

export function testGuessForOffset(name) {
	test(name + '› offset', t => {
		mockIntl(undefined);
		mockTimezoneOffset(name);
		mockToTimeString(name);
		t.is(tz.guess(true), name);
	});
}

export function testGuessForAbbr(name) {
	test(name + '› abbr', t => {
		mockIntl(undefined);
		mockTimezoneOffset(name);
		mockToTimeString(name, 'HH:mm:ss [GMT]ZZ (z)');
		t.is(tz.guess(true), name);
	});
}

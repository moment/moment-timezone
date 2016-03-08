import test from 'ava';
import { mockIntl, resetIntl } from '../helpers/intl';
import Database from '../../src/database/database';
import memoizeGuess from '../../src/guess/memoize-guess';

const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;
const oldGetFullYear = Date.prototype.getFullYear;

test.afterEach(t => {
	resetIntl();
	Date.prototype.getTimezoneOffset = oldGetTimezoneOffset;
	Date.prototype.getFullYear = oldGetFullYear;
});

test('memoizing', t => {
	mockIntl(undefined);

	const db = new Database();
	db.putZone("FakeUTC|UTC|0|0|0|1");

	let getTimezoneOffsetCalls = 0;
	Date.prototype.getTimezoneOffset = function () {
		getTimezoneOffsetCalls++;
		return 0;
	};

	const guess = memoizeGuess(db);

	t.is(guess(), 'FakeUTC');
	t.not(getTimezoneOffsetCalls, 0);

	getTimezoneOffsetCalls = 0;

	t.is(guess(), 'FakeUTC');
	t.is(getTimezoneOffsetCalls, 0);

	t.is(guess(true), 'FakeUTC');
	t.not(getTimezoneOffsetCalls, 0);
});

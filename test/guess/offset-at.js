import test from 'ava';
import OffsetAt from '../../src/guess/offset-at';

test('offset and at', t => {
	const at = new Date(1234567890000);
	at.getTimezoneOffset = () => { return 360; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.at, 1234567890000);
	t.is(offsetAt.offset, 360);
});

test('abbr from a known format (CST)', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 GMT-0600 (CST)"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, 'CST');
});

test('abbr from a known format (Central Standard Time)', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 GMT-0600 (Central Standard Time)"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, 'CST');
});

test('abbr from a known format CST', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 CST"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, 'CST');
});

test('ignore GMT', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 GMT"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, undefined);
});

test('ignore (GMT)', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 (GMT)"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, undefined);
});

test('abbr undefined on unknown format (cst)', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 (cst)"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, undefined);
});

test('abbr undefined on unknown format (台北標準時間)', t => {
	const at = new Date(1234567890000);
	at.toTimeString = () => { return "17:31:30 (台北標準時間)"; };
	const offsetAt = new OffsetAt(at);

	t.is(offsetAt.abbr, undefined);
});

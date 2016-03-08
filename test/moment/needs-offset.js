import test from 'ava';
import moment from 'moment';
import needsOffset from '../../src/moment/needs-offset';

test.beforeEach(t => {
	moment.momentProperties.push('_a');
});

test.afterEach(t => {
	moment.momentProperties.pop();
});

test('Array', t => {
	t.ok(needsOffset(moment([2010, 0, 1])),     'Parsing an array needs an offset.');
	t.ok(needsOffset(moment.utc([2010, 0, 1])), 'Parsing an array needs an offset.');
});

test('Now', t => {
	t.ok(!needsOffset(moment()),     'Parsing now does not need an offset.');
	t.ok(!needsOffset(moment.utc()), 'Parsing now does not need an offset.');
});

test('String + Format', t => {
	t.ok(needsOffset(moment("Mar 4 2010", "MMM D YYYY")),     'Parsing a string and format needs an offset.');
	t.ok(needsOffset(moment.utc("Mar 4 2010", "MMM D YYYY")), 'Parsing a string and format needs an offset.');
});

test('String + Format + Offset', t => {
	t.ok(!needsOffset(moment("Mar 4 2010 +1000", "MMM D YYYY Z")),       'Parsing a string and format and offset does not need an offset.');
	t.ok(!needsOffset(moment.utc("Mar 4 2010 +1000", "MMM D YYYY Z")),   'Parsing a string and format and offset does not need an offset.');
	t.ok(!needsOffset(moment("Mar 4 2010 +10:00", "MMM D YYYY ZZ")),     'Parsing a string and format and offset does not need an offset.');
	t.ok(!needsOffset(moment.utc("Mar 4 2010 +10:00", "MMM D YYYY ZZ")), 'Parsing a string and format and offset does not need an offset.');
});

test('String + Formats', t => {
	const formats = ["YYYY-MM-DD", "MMM D YYYY"];
	t.ok(needsOffset(moment("Mar 4 2010", formats)),     'Parsing a string and formats needs an offset.');
	t.ok(needsOffset(moment.utc("Mar 4 2010", formats)), 'Parsing a string and formats needs an offset.');
});

test('ISO 8601 String', t => {
	t.ok(needsOffset(moment("2011-10-10 10:10:10")),            'Parsing an ISO 8601 string without an offset needs an offset.');
	t.ok(needsOffset(moment.utc("2011-10-10 10:10:10")),        'Parsing an ISO 8601 string without an offset needs an offset.');
	t.ok(!needsOffset(moment("2011-10-10 10:10:10+10:00")),     'Parsing an ISO 8601 string with an offset does not need an offset.');
	t.ok(!needsOffset(moment.utc("2011-10-10 10:10:10+10:00")), 'Parsing an ISO 8601 string with an offset does not need an offset.');
	t.ok(!needsOffset(moment("2011-10-10 10:10:10+00:00")),     'Parsing an ISO 8601 string with an offset does not need an offset.');
	t.ok(!needsOffset(moment.utc("2011-10-10 10:10:10+00:00")), 'Parsing an ISO 8601 string with an offset does not need an offset.');
});

test('Object', t => {
	t.ok(needsOffset(moment({y : 2010, M : 3, d : 1})),          'Parsing an object needs an offset.');
	t.ok(needsOffset(moment({year : 2010, month : 3, day : 1})), 'Parsing an object needs an offset.');
	t.ok(needsOffset(moment.utc({y : 2010, M : 3, d : 1})),      'Parsing an object needs an offset.');
});

test('Unix Offset', t => {
	t.ok(!needsOffset(moment(1318781876406)),     'Parsing unix timestamp in milliseconds does not need an offset.');
	t.ok(!needsOffset(moment.utc(1318781876406)), 'Parsing unix timestamp in milliseconds does not need an offset.');
});

test('Unix Timestamp', t => {
	t.ok(!needsOffset(moment.unix(1318781876)),     'Parsing unix timestamp in seconds does not need an offset.');
});

test('Date', t => {
	t.ok(!needsOffset(moment(new Date())),     'Parsing a date object does not need an offset.');
	t.ok(!needsOffset(moment.utc(new Date())), 'Parsing a date object does not need an offset.');
});

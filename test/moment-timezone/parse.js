import test from 'ava';
import moment from '../../src/moment-timezone';
import packed from '../../src/data/latest';

const { moveAmbiguousForward, moveInvalidForward } = moment.tz;

test.beforeEach(t => {
	moment.tz.add([
		'America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0',
		'America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0'
	]);
});

test.afterEach(t => {
	moment.tz.load(packed);
	moment.tz.moveAmbiguousForward = moveAmbiguousForward;
	moment.tz.moveInvalidForward = moveInvalidForward;
	moment.tz.setDefault(null);
});

test('default states', t => {
	t.ok(moment.tz.moveInvalidForward,    'Should default to moving invalid input forward');
	t.ok(!moment.tz.moveAmbiguousForward, 'Should default to moving ambiguous input backward');
});

test('invalid input - moveInvalidForward = false - Los Angeles', t => {
	moment.tz.moveInvalidForward = false;

	// the hour from 2am to 3am does not exist on March 11 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 2, 11, 1, 59, 59], 'America/Los_Angeles');
	const atStart = moment.tz([2012, 2, 11, 2,  0,  0],   'America/Los_Angeles');
	const atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], 'America/Los_Angeles');
	const after   = moment.tz([2012, 2, 11, 3,  0,  0],   'America/Los_Angeles');

	t.is( before.format('HH mm ss Z'), '01 59 59 -08:00', 'Before the lost hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -08:00', 'During the lost hour, the time should roll back to the previous time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -08:00', 'During the lost hour, the time should roll back to the previous time');
	t.is(  after.format('HH mm ss Z'), '03 00 00 -07:00',  'After the lost hour, the time should match the input time');

	t.is( before.utcOffset(), -480, 'Before the lost hour, the offset should match the non-dst offset');
	t.is(atStart.utcOffset(), -480, 'During the lost hour, the offset should match the non-dst offset');
	t.is(  atEnd.utcOffset(), -480, 'During the lost hour, the offset should match the non-dst offset');
	t.is(  after.utcOffset(), -420,  'After the lost hour, the offset should match the dst offset');
});

test('invalid input - moveInvalidForward = false - New York', t => {
	moment.tz.moveInvalidForward = false;

	// the hour from 2am to 3am does not exist on March 11 2011 in America/New_York
	const before  = moment.tz([2012, 2, 11, 1, 59, 59], 'America/New_York');
	const atStart = moment.tz([2012, 2, 11, 2,  0,  0], 'America/New_York');
	const atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], 'America/New_York');
	const after   = moment.tz([2012, 2, 11, 3,  0,  0], 'America/New_York');

	t.is( before.format('HH mm ss Z'), '01 59 59 -05:00', 'Before the lost hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -05:00', 'During the lost hour, the time should roll back to the previous time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -05:00', 'During the lost hour, the time should roll back to the previous time');
	t.is(  after.format('HH mm ss Z'), '03 00 00 -04:00',  'After the lost hour, the time should match the input time');

	t.is( before.utcOffset(), -300, 'Before the lost hour, the offset should match the non-dst offset');
	t.is(atStart.utcOffset(), -300, 'During the lost hour, the offset should match the non-dst offset');
	t.is(  atEnd.utcOffset(), -300, 'During the lost hour, the offset should match the non-dst offset');
	t.is(  after.utcOffset(), -240,  'After the lost hour, the offset should match the dst offset');
});

test('invalid input - moveInvalidForward = true - Los Angeles', t => {
	moment.tz.moveInvalidForward = true;

	// the hour from 2am to 3am does not exist on March 11 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 2, 11, 1, 59, 59], 'America/Los_Angeles');
	const atStart = moment.tz([2012, 2, 11, 2,  0,  0],   'America/Los_Angeles');
	const atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], 'America/Los_Angeles');
	const after   = moment.tz([2012, 2, 11, 3,  0,  0],   'America/Los_Angeles');

	t.is( before.format('HH mm ss Z'), '01 59 59 -08:00', 'Before the lost hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '03 00 00 -07:00', 'During the lost hour, the time should roll forward to the previous time');
	t.is(  atEnd.format('HH mm ss Z'), '03 59 59 -07:00', 'During the lost hour, the time should roll forward to the previous time');
	t.is(  after.format('HH mm ss Z'), '03 00 00 -07:00',  'After the lost hour, the time should match the input time');

	t.is( before.utcOffset(), -480, 'Before the lost hour, the offset should match the non-dst offset');
	t.is(atStart.utcOffset(), -420, 'During the lost hour, the offset should match the dst offset');
	t.is(  atEnd.utcOffset(), -420, 'During the lost hour, the offset should match the dst offset');
	t.is(  after.utcOffset(), -420,  'After the lost hour, the offset should match the dst offset');
});

test('invalid input - moveInvalidForward = true - New York', t => {
	moment.tz.moveInvalidForward = true;

	// the hour from 2am to 3am does not exist on March 11 2011 in America/New_York
	const before  = moment.tz([2012, 2, 11, 1, 59, 59], 'America/New_York');
	const atStart = moment.tz([2012, 2, 11, 2,  0,  0], 'America/New_York');
	const atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], 'America/New_York');
	const after   = moment.tz([2012, 2, 11, 3,  0,  0], 'America/New_York');

	t.is( before.format('HH mm ss Z'), '01 59 59 -05:00', 'Before the lost hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '03 00 00 -04:00', 'During the lost hour, the time should roll forward to the previous time');
	t.is(  atEnd.format('HH mm ss Z'), '03 59 59 -04:00', 'During the lost hour, the time should roll forward to the previous time');
	t.is(  after.format('HH mm ss Z'), '03 00 00 -04:00',  'After the lost hour, the time should match the input time');

	t.is( before.utcOffset(), -300, 'Before the lost hour, the offset should match the non-dst offset');
	t.is(atStart.utcOffset(), -240, 'During the lost hour, the offset should match the dst offset');
	t.is(  atEnd.utcOffset(), -240, 'During the lost hour, the offset should match the dst offset');
	t.is(  after.utcOffset(), -240,  'After the lost hour, the offset should match the dst offset');
});

test('ambiguous input - moveAmbiguousForward = false - Los Angeles', t => {
	moment.tz.moveAmbiguousForward = false;

	// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 10, 4, 0, 59, 59], 'America/Los_Angeles');
	const atStart = moment.tz([2012, 10, 4, 1,  0,  0], 'America/Los_Angeles');
	const atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], 'America/Los_Angeles');
	const after   = moment.tz([2012, 10, 4, 2,  0,  0], 'America/Los_Angeles');

	t.is( before.format('HH mm ss Z'), '00 59 59 -07:00', 'Before the duplicated hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -07:00', 'During the duplicated hour, the time should match the earlier input time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -07:00', 'During the duplicated hour, the time should match the earlier input time');
	t.is(  after.format('HH mm ss Z'), '02 00 00 -08:00',  'After the duplicated hour, the time should match the input time');

	t.is( before.utcOffset(), -420, 'Before the duplicated hour, the offset should match the dst offset');
	t.is(atStart.utcOffset(), -420, 'During the duplicated hour, the offset should match the dst offset');
	t.is(  atEnd.utcOffset(), -420, 'During the duplicated hour, the offset should match the dst offset');
	t.is(  after.utcOffset(), -480,  'After the duplicated hour, the offset should match the non-dst offset');
});

test('ambiguous input - moveAmbiguousForward = false - New York', t => {
	moment.tz.moveAmbiguousForward = false;

	// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 10, 4, 0, 59, 59], 'America/New_York');
	const atStart = moment.tz([2012, 10, 4, 1,  0,  0], 'America/New_York');
	const atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], 'America/New_York');
	const after   = moment.tz([2012, 10, 4, 2,  0,  0], 'America/New_York');

	t.is( before.format('HH mm ss Z'), '00 59 59 -04:00', 'Before the duplicated hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -04:00', 'During the duplicated hour, the time should match the earlier input time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -04:00', 'During the duplicated hour, the time should match the earlier input time');
	t.is(  after.format('HH mm ss Z'), '02 00 00 -05:00',  'After the duplicated hour, the time should match the input time');

	t.is( before.utcOffset(), -240, 'Before the duplicated hour, the offset should match the dst offset');
	t.is(atStart.utcOffset(), -240, 'During the duplicated hour, the offset should match the dst offset');
	t.is(  atEnd.utcOffset(), -240, 'During the duplicated hour, the offset should match the dst offset');
	t.is(  after.utcOffset(), -300,  'After the duplicated hour, the offset should match the non-dst offset');
});

test('ambiguous input - moveAmbiguousForward = true - Los Angeles', t => {
	moment.tz.moveAmbiguousForward = true;

	// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 10, 4, 0, 59, 59], 'America/Los_Angeles');
	const atStart = moment.tz([2012, 10, 4, 1,  0,  0], 'America/Los_Angeles');
	const atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], 'America/Los_Angeles');
	const after   = moment.tz([2012, 10, 4, 2,  0,  0], 'America/Los_Angeles');

	t.is( before.format('HH mm ss Z'), '00 59 59 -07:00', 'Before the duplicated hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -08:00', 'During the duplicated hour, the time should match the later input time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -08:00', 'During the duplicated hour, the time should match the later input time');
	t.is(  after.format('HH mm ss Z'), '02 00 00 -08:00',  'After the duplicated hour, the time should match the input time');

	t.is( before.utcOffset(), -420, 'Before the duplicated hour, the offset should match the dst offset');
	t.is(atStart.utcOffset(), -480, 'During the duplicated hour, the offset should match the non-dst offset');
	t.is(  atEnd.utcOffset(), -480, 'During the duplicated hour, the offset should match the non-dst offset');
	t.is(  after.utcOffset(), -480,  'After the duplicated hour, the offset should match the non-dst offset');
});

test('ambiguous input - moveAmbiguousForward = true - New York', t => {
	moment.tz.moveAmbiguousForward = true;

	// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
	const before  = moment.tz([2012, 10, 4, 0, 59, 59], 'America/New_York');
	const atStart = moment.tz([2012, 10, 4, 1,  0,  0], 'America/New_York');
	const atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], 'America/New_York');
	const after   = moment.tz([2012, 10, 4, 2,  0,  0], 'America/New_York');

	t.is( before.format('HH mm ss Z'), '00 59 59 -04:00', 'Before the duplicated hour, the time should match the input time');
	t.is(atStart.format('HH mm ss Z'), '01 00 00 -05:00', 'During the duplicated hour, the time should match the later input time');
	t.is(  atEnd.format('HH mm ss Z'), '01 59 59 -05:00', 'During the duplicated hour, the time should match the later input time');
	t.is(  after.format('HH mm ss Z'), '02 00 00 -05:00',  'After the duplicated hour, the time should match the input time');

	t.is( before.utcOffset(), -240, 'Before the duplicated hour, the offset should match the dst offset');
	t.is(atStart.utcOffset(), -300, 'During the duplicated hour, the offset should match the non-dst offset');
	t.is(  atEnd.utcOffset(), -300, 'During the duplicated hour, the offset should match the non-dst offset');
	t.is(  after.utcOffset(), -300,  'After the duplicated hour, the offset should match the non-dst offset');
});

test('check needsOffset in moment.tz (America/Los_Angeles)', t => {
	const name = 'America/Los_Angeles';
	t.is(moment.tz([2012, 5, 1], name).format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz('2012-06-01', name).format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz('2012-06-01 07:00:00+00:00', name).format('YYYY-MM-DD HH:mm:ss Z'), '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz(1338534000000, name).format('YYYY-MM-DD HH:mm:ss Z'),               '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz(new Date(1338534000000), name).format('YYYY-MM-DD HH:mm:ss Z'),     '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz({y : 2012, M : 5, d : 1}, name).format('YYYY-MM-DD HH:mm:ss Z'),    '2012-06-01 00:00:00 -07:00');
	t.is(moment.tz(moment.utc([2012, 5, 1, 7]), name).format('YYYY-MM-DD HH:mm:ss Z'), '2012-06-01 00:00:00 -07:00');
});

test('check needsOffset in moment.tz (America/New_York)', t => {
	const name = 'America/New_York';
	t.is(moment.tz([2012, 5, 1], name).format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz('2012-06-01', name).format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz('2012-06-01 04:00:00+00:00', name).format('YYYY-MM-DD HH:mm:ss Z'), '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz(1338523200000, name).format('YYYY-MM-DD HH:mm:ss Z'),               '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz(new Date(1338523200000), name).format('YYYY-MM-DD HH:mm:ss Z'),     '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz({y : 2012, M : 5, d : 1}, name).format('YYYY-MM-DD HH:mm:ss Z'),    '2012-06-01 00:00:00 -04:00');
	t.is(moment.tz(moment.utc([2012, 5, 1, 4]), name).format('YYYY-MM-DD HH:mm:ss Z'), '2012-06-01 00:00:00 -04:00');
});

test('parse in default zone', t => {
	moment.tz.setDefault('America/New_York');
	t.is(moment([2012, 5, 1]).format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -04:00');
	t.is(moment('2012-06-01').format('YYYY-MM-DD HH:mm:ss Z'),                '2012-06-01 00:00:00 -04:00');
	t.is(moment('2012-06-01 04:00:00+00:00').format('YYYY-MM-DD HH:mm:ss Z'), '2012-06-01 00:00:00 -04:00');
	t.is(moment(1338523200000).format('YYYY-MM-DD HH:mm:ss Z'),               '2012-06-01 00:00:00 -04:00');
	t.is(moment(new Date(1338523200000)).format('YYYY-MM-DD HH:mm:ss Z'),     '2012-06-01 00:00:00 -04:00');
	t.is(moment({y : 2012, M : 5, d : 1}).format('YYYY-MM-DD HH:mm:ss Z'),    '2012-06-01 00:00:00 -04:00');
});

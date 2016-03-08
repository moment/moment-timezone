import test from 'ava';
import userOffsets from '../../src/guess/user-offsets';

const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;

test.afterEach(t => {
	Date.prototype.getTimezoneOffset = oldGetTimezoneOffset;
});

test('with daylight saving time', t => {
	let getTimezoneOffsetCalls = 0;
	// Mock timezone offset changes
	// Jan  1 - Mar 15 == -01:00
	// Mar 16 - Oct 15 == -02:00
	// Oct 16 - Dec 31 == -01:00
	Date.prototype.getTimezoneOffset = function () {
		getTimezoneOffsetCalls++;
		let date = this.getDate();
		let month = this.getMonth();
		let isSummer = (month > 2 && month < 9);
		if (month === 2) { isSummer = date > 15; }
		if (month === 9) { isSummer = date <= 15; }
		return isSummer ? 60 : 120;
	};

	const offsets = userOffsets(2014).sort((a, b) => {
		return a.at - b.at;
	});

	t.ok(getTimezoneOffsetCalls < 200);

	t.is(offsets.length, 24);
	// 2012
	t.same(new Date(offsets[ 0].at), new Date(2012, 0,  1,  0,  0));
	t.same(new Date(offsets[ 1].at), new Date(2012, 2, 15, 23, 59));
	t.same(new Date(offsets[ 2].at), new Date(2012, 2, 16,  0,  0));
	t.same(new Date(offsets[ 3].at), new Date(2012, 6,  1,  0,  0));
	t.same(new Date(offsets[ 4].at), new Date(2012, 9, 15, 23, 59));
	t.same(new Date(offsets[ 5].at), new Date(2012, 9, 16,  0,  0));
	// 2013
	t.same(new Date(offsets[ 6].at), new Date(2013, 0,  1,  0,  0));
	t.same(new Date(offsets[ 7].at), new Date(2013, 2, 15, 23, 59));
	t.same(new Date(offsets[ 8].at), new Date(2013, 2, 16,  0,  0));
	t.same(new Date(offsets[ 9].at), new Date(2013, 6,  1,  0,  0));
	t.same(new Date(offsets[10].at), new Date(2013, 9, 15, 23, 59));
	t.same(new Date(offsets[11].at), new Date(2013, 9, 16,  0,  0));
	// 2014
	t.same(new Date(offsets[12].at), new Date(2014, 0,  1,  0,  0));
	t.same(new Date(offsets[13].at), new Date(2014, 2, 15, 23, 59));
	t.same(new Date(offsets[14].at), new Date(2014, 2, 16,  0,  0));
	t.same(new Date(offsets[15].at), new Date(2014, 6,  1,  0,  0));
	t.same(new Date(offsets[16].at), new Date(2014, 9, 15, 23, 59));
	t.same(new Date(offsets[17].at), new Date(2014, 9, 16,  0,  0));
	// 2015
	t.same(new Date(offsets[18].at), new Date(2015, 0,  1,  0,  0));
	t.same(new Date(offsets[19].at), new Date(2015, 2, 15, 23, 59));
	t.same(new Date(offsets[20].at), new Date(2015, 2, 16,  0,  0));
	t.same(new Date(offsets[21].at), new Date(2015, 6,  1,  0,  0));
	t.same(new Date(offsets[22].at), new Date(2015, 9, 15, 23, 59));
	t.same(new Date(offsets[23].at), new Date(2015, 9, 16,  0,  0));
});

test('without daylight saving time', t => {
	let getTimezoneOffsetCalls = 0;

	Date.prototype.getTimezoneOffset = _ => {
		getTimezoneOffsetCalls++;
		return 120;
	};

	const offsets = userOffsets(2014).sort((a, b) => {
		return a.at - b.at;
	});

	t.ok(getTimezoneOffsetCalls < 60);

	t.is(offsets.length, 8);
	t.same(new Date(offsets[0].at), new Date(2012, 0,  1,  0,  0));
	t.same(new Date(offsets[1].at), new Date(2012, 6,  1,  0,  0));
	t.same(new Date(offsets[2].at), new Date(2013, 0,  1,  0,  0));
	t.same(new Date(offsets[3].at), new Date(2013, 6,  1,  0,  0));
	t.same(new Date(offsets[4].at), new Date(2014, 0,  1,  0,  0));
	t.same(new Date(offsets[5].at), new Date(2014, 6,  1,  0,  0));
	t.same(new Date(offsets[6].at), new Date(2015, 0,  1,  0,  0));
	t.same(new Date(offsets[7].at), new Date(2015, 6,  1,  0,  0));
});

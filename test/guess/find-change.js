import test from 'ava';
import findChange from '../../src/guess/find-change';
import OffsetAt from '../../src/guess/offset-at';

const oldGetTimezoneOffset = Date.prototype.getTimezoneOffset;

test.afterEach(t => {
	Date.prototype.getTimezoneOffset = oldGetTimezoneOffset;
});

test('find', t => {
	const changeTimestamp = Date.UTC(2016, 1, 2, 3, 4);

	Date.prototype.getTimezoneOffset = function () {
		return this > changeTimestamp ? 60 : 120;
	};

	const changeOffsetAt = findChange(
		new OffsetAt(new Date(Date.UTC(2015,  0,  1))),
		new OffsetAt(new Date(Date.UTC(2017, 11, 31)))
	);

	t.is(changeOffsetAt.at, changeTimestamp);
});

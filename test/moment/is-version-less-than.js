import test from 'ava';
import isVersionLessThan from '../../src/moment/is-version-less-than';

test("major", t => {
	t.true(isVersionLessThan("0.0.0", "1.0.0"));
	t.true(isVersionLessThan("1.0.0", "2.0.0"));
	t.true(isVersionLessThan("2.0.0", "3.0.0"));
	t.true(isVersionLessThan("9.0.0", "10.0.0"));
	t.false(isVersionLessThan("1.0.0", "1.0.0"));
	t.false(isVersionLessThan("1.0.0", "0.0.0"));
	t.false(isVersionLessThan("10.0.0", "9.0.0"));
});

test("minor", t => {
	t.true(isVersionLessThan("0.0.0", "0.1.0"));
	t.true(isVersionLessThan("1.1.0", "1.2.0"));
	t.true(isVersionLessThan("1.9.0", "1.10.0"));
	t.false(isVersionLessThan("0.1.0", "0.0.0"));
	t.false(isVersionLessThan("1.2.0", "1.1.0"));
	t.false(isVersionLessThan("1.10.0", "1.9.0"));
});

test("patch", t => {
	t.true(isVersionLessThan("0.0.0", "0.0.8"));
	t.true(isVersionLessThan("1.1.1", "1.1.6"));
	t.true(isVersionLessThan("1.0.9", "1.0.10"));
	t.false(isVersionLessThan("0.0.8", "0.0.0"));
	t.false(isVersionLessThan("1.1.6", "1.1.1"));
	t.false(isVersionLessThan("1.0.10", "1.0.9"));
});

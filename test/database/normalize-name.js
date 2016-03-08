import test from 'ava';
import normalizeName from '../../src/database/normalize-name';

test('normalize', t => {
	t.is(normalizeName('America/Los_Angeles'), 'america_los_angeles');
	t.is(normalizeName('America/North_Dakota/New_Salem'), 'america_north_dakota_new_salem');
});

test('unexpected input', t => {
	t.is(normalizeName(), '');
	t.is(normalizeName(null), '');
	t.is(normalizeName(undefined), '');
	t.is(normalizeName(1), '1');
});

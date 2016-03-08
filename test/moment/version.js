import test from 'ava';
import VERSION from '../../src/moment/version';

test('moment-timezone version', t => {
	t.regex(VERSION, /^\d+\.\d+\.\d+$/);
});

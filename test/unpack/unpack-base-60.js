import test from 'ava';
import unpackBase60 from '../../src/unpack/unpack-base-60';

const EPSILON = 1e-30;

function compare(t, input, expected) {
	t.ok(Math.abs(unpackBase60(input) - expected) < EPSILON, `unpacking ${ input } should equal ${ expected }`);
}

test('whole numbers', t => {
	compare(t, '0', 0);
	compare(t, '1', 1);
	compare(t, '9', 9);
	compare(t, 'a', 10);
	compare(t, 'z', 35);
	compare(t, 'A', 36);
	compare(t, 'X', 59);
	compare(t, '10', 60);
	compare(t, '11', 60 + 1);
	compare(t, '1a', 60 + 10);
	compare(t, '1z', 60 + 35);
	compare(t, '1A', 60 + 36);
	compare(t, '1X', 60 + 59);
	compare(t, '100', 60 * 60);
	compare(t, '10000000', 60 * 60 * 60 * 60 * 60 * 60 * 60);
});

test('decimal numbers', t => {
	compare(t, '0.0', 0);
	compare(t, '.1', 1 / 60);
	compare(t, '0.1', 1 / 60);
	compare(t, '0.9', 9 / 60);
	compare(t, '0.a', 10 / 60);
	compare(t, '0.z', 35 / 60);
	compare(t, '0.A', 36 / 60);
	compare(t, '0.X', 59 / 60);
	compare(t, '0.01', 1 / 3600);
	compare(t, '0.10', 1 / 60);
	compare(t, '0.11', (1 / 60) + ( 1 / 3600));
	compare(t, '0.1a', (1 / 60) + (10 / 3600));
	compare(t, '0.1z', (1 / 60) + (35 / 3600));
	compare(t, '0.1A', (1 / 60) + (36 / 3600));
	compare(t, '0.1X', (1 / 60) + (59 / 3600));
	compare(t, '.00000001', 1 / (60 * 60 * 60 * 60 * 60 * 60 * 60 * 60));
});

test('negative numbers', t => {
	compare(t, '-1', -1);
	compare(t, '-9', -9);
	compare(t, '-a', -10);
	compare(t, '-z', -35);
	compare(t, '-A', -36);
	compare(t, '-X', -59);
	compare(t, '-10', -60);
	compare(t, '-11', -(60 + 1));
	compare(t, '-1a', -(60 + 10));
	compare(t, '-1z', -(60 + 35));
	compare(t, '-1A', -(60 + 36));
	compare(t, '-1X', -(60 + 59));
	compare(t, '-100', -60 * 60);
	compare(t, '-10000000', -60 * 60 * 60 * 60 * 60 * 60 * 60);
	compare(t, '-.1', -1 / 60);
	compare(t, '-0.1', -1 / 60);
	compare(t, '-0.9', -9 / 60);
	compare(t, '-0.a', -10 / 60);
	compare(t, '-0.z', -35 / 60);
	compare(t, '-0.A', -36 / 60);
	compare(t, '-0.X', -59 / 60);
});

test('abnormal input', t => {
	compare(t, '010.010', 60 + (1 / 3600));
	compare(t, '0X0.0X0', (59 * 60) + (59 / 3600));
	compare(t, 'X.', 59);
	compare(t, '.X', 59 / 60);
});

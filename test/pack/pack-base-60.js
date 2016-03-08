import test from 'ava';
import packBase60 from '../../src/pack/pack-base-60';

test('whole numbers', t => {
	t.same(packBase60(0, 0), '0');
	t.same(packBase60(0, 0), '0');
	t.same(packBase60(1, 0), '1');
	t.same(packBase60(9, 0), '9');
	t.same(packBase60(10, 0), 'a');
	t.same(packBase60(35, 0), 'z');
	t.same(packBase60(36, 0), 'A');
	t.same(packBase60(59, 0), 'X');
	t.same(packBase60(60, 0), '10');
	t.same(packBase60(60 +  1, 0), '11');
	t.same(packBase60(60 + 10, 0), '1a');
	t.same(packBase60(60 + 35, 0), '1z');
	t.same(packBase60(60 + 36, 0), '1A');
	t.same(packBase60(60 + 59, 0), '1X');
	t.same(packBase60(60 * 60, 0), '100');
	t.same(packBase60(2799360000000, 0), '10000000');
});

test('decimal numbers', t => {
	t.same(packBase60(0, 10), '0');
	t.same(packBase60( 1 / 60, 1), '.1');
	t.same(packBase60( 9 / 60, 1), '.9');
	t.same(packBase60(10 / 60, 1), '.a');
	t.same(packBase60(35 / 60, 1), '.z');
	t.same(packBase60(36 / 60, 1), '.A');
	t.same(packBase60(59 / 60, 1), '.X');
	t.same(packBase60( 1 / 60, 2), '.1');
	t.same(packBase60(59 / 60, 2), '.X');
	t.same(packBase60(59 / 60, 6), '.X');
	t.same(packBase60(1 / 3600, 1), '0');
	t.same(packBase60(1 / 3600, 2), '.01');
	t.same(packBase60((1 / 60) + ( 1 / 3600), 2), '.11');
	t.same(packBase60((1 / 60) + (10 / 3600), 2), '.1a');
	t.same(packBase60((1 / 60) + (35 / 3600), 2), '.1z');
	t.same(packBase60((1 / 60) + (36 / 3600), 2), '.1A');
	t.same(packBase60((1 / 60) + (59 / 3600), 2), '.1X');
	t.same(packBase60((1 / 60) + ( 1 / 3600), 3), '.11');
	t.same(packBase60((1 / 60) + (59 / 3600), 3), '.1X');
	t.same(packBase60((1 / 60) + (59 / 3600), 8), '.1X');
	t.same(packBase60(1 / (60 * 60 * 60 * 60 * 60 * 60 * 60 * 60), 8), '.00000001');
});

test('negative numbers', t => {
	t.same(packBase60(-0, 0), '0');
	t.same(packBase60(-1, 0), '-1');
	t.same(packBase60(-60, 0), '-10');
	t.same(packBase60(-(60 + 59), 0), '-1X');
	t.same(packBase60( -1 / 60, 1), '-.1');
	t.same(packBase60(-35 / 60, 1), '-.z');
	t.same(packBase60( -1 / 3600, 1), '0');
	t.same(packBase60(-((1 / 60) + (59 / 3600)), 8), '-.1X');
	t.same(packBase60(-1 / (60 * 60 * 60 * 60 * 60 * 60 * 60 * 60), 8), '-.00000001');
});

import test from 'ava';
import packUntils from '../../src/pack/pack-untils';

test('untils', t => {
	t.is(packUntils([
		-4259 * 60000,
		-4139 * 60000,
		-3900 * 60000,
		-3780 * 60000,
		-3541 * 60000,
		Infinity
	]), '-1aX 20 3X 20 3X');
});

test('untils', t => {
	t.is(packUntils([
		6 * 60000,
		7 * 60000,
		8 * 60000,
		Infinity
	]), '6 1 1');
});

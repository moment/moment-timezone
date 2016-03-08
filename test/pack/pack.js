import test from 'ava';
import pack from '../../src/pack/pack';

test('single', t => {
	t.is(pack({
		name : "Some/Zone_Name",
		abbrs   : ["ABC", "DEF", "ABC", "DEF", "GHI", "DEF"],
		offsets : [60, 239, 60, 239, 60, 239],
		untils  : [
			-4259 * 60000,
			-4139 * 60000,
			-3900 * 60000,
			-3780 * 60000,
			-3541 * 60000,
			Infinity
		],
		population : 1234567
	}), "Some/Zone_Name|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X|12e5");
});

test('with errors', t => {
	t.throws(_ => pack({
		abbrs : ['ABC'],
		offsets : [60],
		untils : [1000]
	}));
});

import test from 'ava';
import filterYears from '../../src/pack/filter-years';

function unpacked () {
	return {
		name : "Some/Zone_Name",
		abbrs   : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
		offsets : [ 60, 120, 180, 240, 300, 360, 420, 480, 540, 600],
		untils  : [
			Date.UTC(1900, 0, 1),
			Date.UTC(1900, 6, 15),
			Date.UTC(2000, 0, 1),
			Date.UTC(2000, 6, 15),
			Date.UTC(2001, 0, 1),
			Date.UTC(2001, 6, 15),
			Date.UTC(2001, 8, 1),
			Date.UTC(2002, 0, 1),
			Date.UTC(2005, 0, 1),
			null
		]
	};
}

test('filter 1970-2038', t => {
	t.same(
		filterYears(unpacked(), 1970, 2038),
		{
			name : "Some/Zone_Name",
			abbrs   : ["C", "D", "E", "F", "G", "H", "I", "J"],
			offsets : [180, 240, 300, 360, 420, 480, 540, 600],
			untils  : [
				Date.UTC(2000, 0, 1),
				Date.UTC(2000, 6, 15),
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				Date.UTC(2002, 0, 1),
				Date.UTC(2005, 0, 1),
				null
			],
			population: undefined
		}
	);
});

test('filter 2000-2038', t => {
	t.same(
		filterYears(unpacked(), 2000, 2038),
		{
			name : "Some/Zone_Name",
			abbrs   : ["C", "D", "E", "F", "G", "H", "I", "J"],
			offsets : [180, 240, 300, 360, 420, 480, 540, 600],
			untils  : [
				Date.UTC(2000, 0, 1),
				Date.UTC(2000, 6, 15),
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				Date.UTC(2002, 0, 1),
				Date.UTC(2005, 0, 1),
				null
			],
			population: undefined
		}
	);
});

test('filter 2001-2038', t => {
	t.same(
		filterYears(unpacked(), 2001, 2038),
		{
			name : "Some/Zone_Name",
			abbrs   : ["E", "F", "G", "H", "I", "J"],
			offsets : [300, 360, 420, 480, 540, 600],
			untils  : [
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				Date.UTC(2002, 0, 1),
				Date.UTC(2005, 0, 1),
				null
			],
			population: undefined
		}
	);
});

test('filter 2000-2001', t => {
	t.same(
		filterYears(unpacked(), 2000, 2001),
		{
			name : "Some/Zone_Name",
			abbrs   : ["C", "D", "E", "F", "G", "H"],
			offsets : [180, 240, 300, 360, 420, 480],
			untils  : [
				Date.UTC(2000, 0, 1),
				Date.UTC(2000, 6, 15),
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				null
			],
			population: undefined
		}
	);
});

test('filter 2001-2000', t => {
	t.same(
		filterYears(unpacked(), 2001, 2000),
		{
			name : "Some/Zone_Name",
			abbrs   : ["C", "D", "E", "F", "G", "H"],
			offsets : [180, 240, 300, 360, 420, 480],
			untils  : [
				Date.UTC(2000, 0, 1),
				Date.UTC(2000, 6, 15),
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				null
			],
			population: undefined
		}
	);
});

test('filter 2000', t => {
	t.same(
		filterYears(unpacked(), 2000),
		{
			name : "Some/Zone_Name",
			abbrs   : ["C", "D", "E"],
			offsets : [180, 240, 300],
			untils  : [
				Date.UTC(2000, 0, 1),
				Date.UTC(2000, 6, 15),
				null
			],
			population: undefined
		}
	);
});

test('filter 2001-2005', t => {
	t.same(
		filterYears(unpacked(), 2001, 2005),
		{
			name : "Some/Zone_Name",
			abbrs   : ["E", "F", "G", "H", "I", "J"],
			offsets : [300, 360, 420, 480, 540, 600],
			untils  : [
				Date.UTC(2001, 0, 1),
				Date.UTC(2001, 6, 15),
				Date.UTC(2001, 8, 1),
				Date.UTC(2002, 0, 1),
				Date.UTC(2005, 0, 1),
				null
			],
			population: undefined
		}
	);
});

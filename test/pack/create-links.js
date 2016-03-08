import test from 'ava';
import createLinks from '../../src/pack/create-links';

const ZONE_A = { name: "Zone/A", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
const ZONE_B = { name: "Zone/B", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
const ZONE_C = { name: "Zone/C", abbrs: ["ZYX", "WVU"],        offsets: [20, 30],     untils: [-3000, 900] };
const ZONE_D = { name: "Zone/D", abbrs: ["ZYX", "WVU"],        offsets: [20, 30],     untils: [-3000, 900] };
const ZONE_E = { name: "Zone/E", abbrs: ["ZYX", "WVU"],        offsets: [20, 30],     untils: [-3000, 900] };

const ZONES_ABC   = { zones: [ZONE_A, ZONE_B, ZONE_C],                 links: [], version: '2014abc' };
const ZONES_ACD   = { zones: [ZONE_A,         ZONE_C, ZONE_D],         links: [], version: '2014acd' };
const ZONES_ADCB  = { zones: [ZONE_A, ZONE_D, ZONE_C, ZONE_B],         links: [], version: '2014adcb' };
const ZONES_ABCD  = { zones: [ZONE_A, ZONE_B, ZONE_C, ZONE_D],         links: [], version: '2014abcd' };
const ZONES_ABCDE = { zones: [ZONE_A, ZONE_B, ZONE_C, ZONE_D, ZONE_E], links: [], version: '2014abcde' };

test('abc', t => {
	t.same(createLinks(ZONES_ABC), {
		zones : [ZONE_A, ZONE_C],
		links : ['Zone/A|Zone/B'],
		version : '2014abc'
	});
});

test('acd', t => {
	t.same(createLinks(ZONES_ACD), {
		zones : [ZONE_A, ZONE_C],
		links : ['Zone/C|Zone/D'],
		version : '2014acd'
	});
});

test('adcb', t => {
	t.same(createLinks(ZONES_ADCB), {
		zones : [ZONE_A, ZONE_D],
		links : ['Zone/A|Zone/B', 'Zone/D|Zone/C'],
		version : '2014adcb'
	});
});

test('abcd', t => {
	t.same(createLinks(ZONES_ABCD), {
		zones : [ZONE_A, ZONE_C],
		links : ['Zone/A|Zone/B', 'Zone/C|Zone/D'],
		version : '2014abcd'
	});
});

test('abcde', t => {
	t.same(createLinks(ZONES_ABCDE), {
		zones : [ZONE_A, ZONE_C],
		links : ['Zone/A|Zone/B', 'Zone/C|Zone/D', 'Zone/C|Zone/E'],
		version : '2014abcde'
	});
});

test('differing offsets', t => {
	const A = { name: "Zone/A", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
	const B = { name: "Zone/B", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 40], untils: [-1000, 100, 200] };
	t.same(createLinks({
		zones : [A, B],
		links : [],
		version : '2014ab'
	}), {
		zones : [A, B],
		links : [],
		version : '2014ab'
	});
});

test('differing untils', t => {
	const A = { name: "Zone/A", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
	const B = { name: "Zone/B", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 300] };
	t.same(createLinks({
		zones : [A, B],
		links : [],
		version : '2014ab'
	}), {
		zones : [A, B],
		links : [],
		version : '2014ab'
	});
});

test('differing abbrs', t => {
	const A = { name: "Zone/A", abbrs: ["ABC", "DEF", "GHI"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
	const B = { name: "Zone/B", abbrs: ["ABC", "DEF", "XYZ"], offsets: [10, 20, 30], untils: [-1000, 100, 200] };
	t.same(createLinks({
		zones : [A, B],
		links : [],
		version : '2014ab'
	}), {
		zones : [A, B],
		links : [],
		version : '2014ab'
	});
});

test('differing lengths', t => {
	const A = { name: "Zone/A", abbrs: ["ABC", "DEF", "GHI"],        offsets: [10, 20, 30],     untils: [-1000, 100, 200] };
	const B = { name: "Zone/B", abbrs: ["ABC", "DEF", "GHI", "JKL"], offsets: [10, 20, 30, 40], untils: [-1000, 100, 200, 300] };
	t.same(createLinks({
		zones : [A, B],
		links : [],
		version : '2014ab'
	}), {
		zones : [A, B],
		links : [],
		version : '2014ab'
	});
});

test('retain existing links', t => {
	t.same(createLinks({
		zones : [ZONE_A, ZONE_B, ZONE_C],
		links : ["Test/A|Test/B", "Test/A|Test/C"],
		version : '2014abcretain'
	}), {
		zones : [ZONE_A, ZONE_C],
		links : ["Test/A|Test/B", "Test/A|Test/C", "Zone/A|Zone/B"],
		version : '2014abcretain'
	});
});

test('make the zone with the smaller population a link', t => {
	const large = { name: "Zone/Large", abbrs: ["ABC"], offsets: [10], untils: [-1000], population: 100 };
	const small = { name: "Zone/Small", abbrs: ["ABC"], offsets: [10], untils: [-1000], population: 10 };
	const largeFirst = { zones: [large, small], links: [], version: '2014populations' };
	const smallFirst = { zones: [small, large], links: [], version: '2014populations' };

	t.same(createLinks(largeFirst), {
		zones: [large],
		links: ["Zone/Large|Zone/Small"],
		version: '2014populations'
	});

	t.same(createLinks(smallFirst), {
		zones: [large],
		links: ["Zone/Large|Zone/Small"],
		version: '2014populations'
	});
});

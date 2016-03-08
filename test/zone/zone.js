import test from 'ava';
import Zone from '../../src/zone/zone';

// gE = 1000; 1E = 100; 2k = 140
const PACKED = "SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k";

test('constructor', t => {
	const zone = new Zone(PACKED);

	t.is(zone.name, "SomeZone");
	t.same(zone.abbrs, ["TIM", "TAM", "IAM", "TAM", "TIM", "TAM"]);
	t.same(zone.offsets, [360.5, 300, 360, 300, 360.5, 300]);
	t.same(zone.untils, [
		1000 * 60000,
		1100 * 60000,
		1240 * 60000,
		1340 * 60000,
		1480 * 60000,
		Infinity
	]);
});

test('#abbr', t => {
	const zone = new Zone(PACKED);

	t.is(zone.abbr(-999 * 60000), "TIM");
	t.is(zone.abbr( 999 * 60000), "TIM");
	t.is(zone.abbr(1000 * 60000), "TAM");
	t.is(zone.abbr(1099 * 60000), "TAM");
	t.is(zone.abbr(1100 * 60000), "IAM");
	t.is(zone.abbr(1239 * 60000), "IAM");
	t.is(zone.abbr(1240 * 60000), "TAM");
	t.is(zone.abbr(1339 * 60000), "TAM");
	t.is(zone.abbr(1340 * 60000), "TIM");
	t.is(zone.abbr(1479 * 60000), "TIM");
	t.is(zone.abbr(1480 * 60000), "TAM");
	t.is(zone.abbr(3000 * 60000), "TAM");
});

test('#offset', t => {
	const zone = new Zone(PACKED);

	t.is(zone.offset(-999 * 60000), 360.5);
	t.is(zone.offset( 999 * 60000), 360.5);
	t.is(zone.offset(1000 * 60000), 300);
	t.is(zone.offset(1099 * 60000), 300);
	t.is(zone.offset(1100 * 60000), 360);
	t.is(zone.offset(1239 * 60000), 360);
	t.is(zone.offset(1240 * 60000), 300);
	t.is(zone.offset(1339 * 60000), 300);
	t.is(zone.offset(1340 * 60000), 360.5);
	t.is(zone.offset(1479 * 60000), 360.5);
	t.is(zone.offset(1480 * 60000), 300);
	t.is(zone.offset(3000 * 60000), 300);
});

test('#_index', t => {
	const zone = new Zone(PACKED);

	t.is(zone._index(-999 * 60000), 0);
	t.is(zone._index( 999 * 60000), 0);
	t.is(zone._index(1000 * 60000), 1);
	t.is(zone._index(1099 * 60000), 1);
	t.is(zone._index(1100 * 60000), 2);
	t.is(zone._index(1239 * 60000), 2);
	t.is(zone._index(1240 * 60000), 3);
	t.is(zone._index(1339 * 60000), 3);
	t.is(zone._index(1340 * 60000), 4);
	t.is(zone._index(1479 * 60000), 4);
	t.is(zone._index(1480 * 60000), 5);
	t.is(zone._index(3000 * 60000), 5);
});

test('#parse', t => {
	const zone = new Zone(PACKED);

	t.is(zone.parse(( 999 - 360.5) * 60000), 360.5);
	t.is(zone.parse((1000 - 360.5) * 60000), 300);
	t.is(zone.parse((1099 - 300)   * 60000), 300);
	t.is(zone.parse((1100 - 300)   * 60000), 360);
	t.is(zone.parse((1239 - 360)   * 60000), 360);
	t.is(zone.parse((1240 - 360)   * 60000), 300);
	t.is(zone.parse((1339 - 300)   * 60000), 300);
	t.is(zone.parse((1340 - 300)   * 60000), 360.5);
	t.is(zone.parse((1479 - 360.5) * 60000), 360.5);
	t.is(zone.parse((1480 - 360.5) * 60000), 300);
});

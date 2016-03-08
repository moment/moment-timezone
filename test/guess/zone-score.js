import test from 'ava';
import Zone from '../../src/zone/zone';
import ZoneScore from '../../src/guess/zone-score';
import OffsetAt from '../../src/guess/offset-at';

function buildZone () {
	const zone = new Zone();
	zone._set({
		name: "TestScores",
		abbrs:   [ "ABC",  "DEF",    "GHI"],
		untils:  [140e10, 141e10, Infinity],
		offsets: [    60,    120,      -60]
	});
	return zone;
}

function buildOffsetAt (at, abbr, offset) {
	const offsetAt = new OffsetAt(new Date(at));
	offsetAt.abbr = abbr;
	offsetAt.offset = offset;
	return offsetAt;
}

test('exact match', t => {
	const zone = buildZone();
	const zoneScore = new ZoneScore(zone);

	zoneScore.scoreOffsetAt(buildOffsetAt(139e10, "ABC", 60));
	t.is(zoneScore.offsetScore, 0);
	t.is(zoneScore.abbrScore, 0);

	zoneScore.scoreOffsetAt(buildOffsetAt(140e10, "DEF", 120));
	t.is(zoneScore.offsetScore, 0);
	t.is(zoneScore.abbrScore, 0);

	zoneScore.scoreOffsetAt(buildOffsetAt(141e10, "GHI", -60));
	t.is(zoneScore.offsetScore, 0);
	t.is(zoneScore.abbrScore, 0);
});

test('ignore lowercase letters in zone abbr', t => {
	const zone = new Zone();
	zone._set({
		name: "TestScores",
		abbrs:   ["ABCd",  "DEF",    "GHI"],
		untils:  [140e10,    141e10, Infinity],
		offsets: [    60,       120,      -60]
	});
	const zoneScore = new ZoneScore(zone);

	zoneScore.scoreOffsetAt(buildOffsetAt(139e10, "ABC", 60));
	t.is(zoneScore.abbrScore, 0);
});

test('mismatch abbr', t => {
	const zone = buildZone();
	const zoneScore = new ZoneScore(zone);

	zoneScore.scoreOffsetAt(buildOffsetAt(139e10, "AAA", 60));
	t.is(zoneScore.abbrScore, 1);

	zoneScore.scoreOffsetAt(buildOffsetAt(140e10, "DDD", 120));
	t.is(zoneScore.abbrScore, 2);

	zoneScore.scoreOffsetAt(buildOffsetAt(141e10, "GGG", -60));
	t.is(zoneScore.abbrScore, 3);
});

test('mismatch offset', t => {
	const zone = buildZone();
	const zoneScore = new ZoneScore(zone);

	zoneScore.scoreOffsetAt(buildOffsetAt(139e10, "ABC", 50));
	t.is(zoneScore.offsetScore, 10);

	zoneScore.scoreOffsetAt(buildOffsetAt(140e10, "DEF", 140));
	t.is(zoneScore.offsetScore, 30);

	zoneScore.scoreOffsetAt(buildOffsetAt(141e10, "GHI", 10));
	t.is(zoneScore.offsetScore, 100);
});

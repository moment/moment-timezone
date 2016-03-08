import test from 'ava';
import Zone from '../../src/zone/zone';
import ZoneScore from '../../src/guess/zone-score';
import sortZoneScores from '../../src/guess/sort-zone-scores';

test('sorting', t => {
	const zoneA = new Zone();
	const zoneB = new Zone();
	const zoneC = new Zone();
	const zoneD = new Zone();

	const zoneScoreA = new ZoneScore(zoneA);
	const zoneScoreB = new ZoneScore(zoneB);
	const zoneScoreC = new ZoneScore(zoneC);
	const zoneScoreD = new ZoneScore(zoneD);

	zoneScoreA.offsetScore = 60;
	zoneScoreB.offsetScore = 60;
	zoneScoreC.offsetScore = 0;
	zoneScoreD.offsetScore = 0;

	zoneScoreA.abbrScore = 0;
	zoneScoreB.abbrScore = 1;
	zoneScoreC.abbrScore = 2;
	zoneScoreD.abbrScore = 2;

	zoneC.population = 400;
	zoneD.population = 100;

	t.same(
		[zoneScoreA, zoneScoreB, zoneScoreC, zoneScoreD].sort(sortZoneScores),
		[zoneScoreC, zoneScoreD, zoneScoreA, zoneScoreB]
	);
	t.same(
		[zoneScoreD, zoneScoreC, zoneScoreB, zoneScoreA].sort(sortZoneScores),
		[zoneScoreC, zoneScoreD, zoneScoreA, zoneScoreB]
	);
});

import userOffsets from './user-offsets';
import ZoneScore from './zone-score';
import sortZoneScores from './sort-zone-scores';

export default function guessFromUserOffsets (db) {
	const offsets = userOffsets(new Date().getFullYear());
	const offsetsLength = offsets.length;
	const guesses = db.getGuesses(offsets);
	const zoneScores = [];

	for (let i = 0, l = guesses.length; i < l; i++) {
		let zoneScore = new ZoneScore(db.getZone(guesses[i]), offsetsLength);
		for (let j = 0; j < offsetsLength; j++) {
			zoneScore.scoreOffsetAt(offsets[j]);
		}
		zoneScores.push(zoneScore);
	}

	zoneScores.sort(sortZoneScores);

	return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
}

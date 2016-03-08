export default function sortZoneScores (a, b) {
	if (a.offsetScore !== b.offsetScore) {
		return a.offsetScore - b.offsetScore;
	}
	if (a.abbrScore !== b.abbrScore) {
		return a.abbrScore - b.abbrScore;
	}
	return b.zone.population - a.zone.population;
}

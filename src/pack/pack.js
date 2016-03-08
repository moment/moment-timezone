import validatePackData from './validate-pack-data';
import packAbbrsAndOffsets from './pack-abbrs-and-offsets';
import packPopulation from './pack-population';
import packUntils from './pack-untils';

export default function pack (source) {
	validatePackData(source);
	return [
		source.name,
		packAbbrsAndOffsets(source),
		packUntils(source.untils) + packPopulation(source.population)
	].join('|');
}

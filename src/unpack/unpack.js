import arrayToInt from './array-to-int';
import intsToUntils from './ints-to-untils';
import mapIndices from './map-indices';

export default function unpack (string) {
	const data = string.split('|');
	const offsets = data[2].split(' ');
	const indices = data[3].split('');
	const untils  = data[4].split(' ');

	arrayToInt(offsets);
	arrayToInt(indices);
	arrayToInt(untils);

	intsToUntils(untils, indices.length);

	return {
		name       : data[0],
		abbrs      : mapIndices(data[1].split(' '), indices),
		offsets    : mapIndices(offsets, indices),
		untils     : untils,
		population : data[5] | 0
	};
}

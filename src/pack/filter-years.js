import findStartAndEndIndex from './find-start-and-end-index';

export default function filterYears (source, start, end) {
	let indices = findStartAndEndIndex(source.untils, start, end);
	let untils = source.untils.slice(...indices);

	untils[untils.length - 1] = null;

	return {
		name       : source.name,
		abbrs      : source.abbrs.slice(...indices),
		untils     : untils,
		offsets    : source.offsets.slice(...indices),
		population : source.population
	};
}

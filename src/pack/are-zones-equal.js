import areArraysEqual from './are-arrays-equal';

export default function areZonesEqual(a, b) {
	return (
		areArraysEqual(a.abbrs,   b.abbrs) &&
		areArraysEqual(a.untils,  b.untils) &&
		areArraysEqual(a.offsets, b.offsets)
	);
}

import packBase60 from './pack-base-60';

export default function packAbbrsAndOffsets(source) {
	let index = 0;
	const abbrs = [];
	const offsets = [];
	const indices = [];
	const map = {};

	for (let i = 0; i < source.abbrs.length; i++) {
		let key = source.abbrs[i] + '|' + source.offsets[i];
		if (map[key] === undefined) {
			map[key] = index;
			abbrs[index] = source.abbrs[i];
			offsets[index] = packBase60(Math.round(source.offsets[i] * 60) / 60, 1);
			index++;
		}
		indices[i] = packBase60(map[key], 0);
	}

	return abbrs.join(' ') + '|' + offsets.join(' ') + '|' + indices.join('');
}

import OffsetAt from './offset-at';
import findChange from './find-change';

export default function userOffsets(year) {
	const startYear = year - 2;
	const offsets = [];
	let last = new OffsetAt(new Date(startYear, 0, 1));

	for (let i = 1; i < 48; i++) {
		let next = new OffsetAt(new Date(startYear, i, 1));
		if (next.offset !== last.offset) {
			let change = findChange(last, next);
			offsets.push(change);
			offsets.push(new OffsetAt(new Date(change.at + 6e4)));
		}
		last = next;
	}

	for (let i = 0; i < 4; i++) {
		offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
		offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
	}

	return offsets;
}

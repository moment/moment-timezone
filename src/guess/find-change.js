import OffsetAt from './offset-at';

export default function findChange(low, high) {
	let diff;

	while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
		let mid = new OffsetAt(new Date(low.at + diff));
		if (mid.offset === low.offset) {
			low = mid;
		} else {
			high = mid;
		}
	}

	return low;
}

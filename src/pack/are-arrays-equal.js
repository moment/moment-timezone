export default function areArraysEqual(a, b) {
	const length = a.length;
	if (b.length !== length) {
		return false;
	}

	for (let i = 0; i < length; i++) {
		if (a[i] !== b[i]) {
			return false;
		}
	}

	return true;
}

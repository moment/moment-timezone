export default function findStartAndEndIndex (untils, start, end) {
	let startI = 0;
	let endI = untils.length + 1;

	end = end || start;

	if (start > end) {
		[start, end] = [end, start];
	}

	for (let i = 0; i < untils.length; i++) {
		if (untils[i] == null) {
			continue;
		}
		let untilYear = new Date(untils[i]).getUTCFullYear();
		if (untilYear < start) {
			startI = i + 1;
		}
		if (untilYear > end) {
			endI = Math.min(endI, i + 1);
		}
	}

	return [startI, endI];
}

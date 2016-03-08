export default function intsToUntils (array, length) {
	for (let i = 0; i < length; i++) {
		array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
	}

	array[length - 1] = Infinity;
}

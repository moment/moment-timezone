export default function packPopulation (number) {
	if (!number) {
		return '';
	}
	if (number < 1000) {
		return '|' + number;
	}
	let exponent = String(number | 0).length - 2;
	let precision = Math.round(number / Math.pow(10, exponent));
	return '|' + precision + 'e' + exponent;
}

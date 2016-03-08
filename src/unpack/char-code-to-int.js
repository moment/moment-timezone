export default function charCodeToInt(charCode) {
	if (charCode > 96) {
		return charCode - 87;
	} else if (charCode > 64) {
		return charCode - 29;
	}
	return charCode - 48;
}

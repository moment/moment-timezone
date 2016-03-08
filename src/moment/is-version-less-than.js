export default function isVersionLessThan (a, b) {
	const [aMajor, aMinor, aPatch] = a.split('.');
	const [bMajor, bMinor, bPatch] = b.split('.');
	let sameMajor = aMajor === bMajor;
	let sameMinor = sameMajor && aMinor === bMinor;
	return (+aMajor < +bMajor) || (sameMajor && +aMinor < +bMinor) || (sameMinor && +aPatch < +bPatch);
}

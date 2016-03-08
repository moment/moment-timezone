function attachToArray(array) {
	let hasA = false;
	let hasZ = false;

	for (let i = 0; i < array.length; i++) {
		hasA = hasA || array[i] === '_a';
		hasZ = hasZ || array[i] === '_z';
	}
	if (!hasA) {
		array.push('_a');
	}
	if (!hasZ) {
		array.push('_z');
	}
}

export default function attachMomentProperties (moment) {
	const momentProperties = moment.momentProperties;

	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		attachToArray(momentProperties);
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}
}

import unpackBase60 from './unpack-base-60';

export default function arrayToInt (array) {
	for (let i = 0, l = array.length; i < l; i++) {
		array[i] = unpackBase60(array[i]);
	}
}

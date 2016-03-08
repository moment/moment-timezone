import packBase60 from './pack-base-60';

export default function packUntils(untils) {
	const out = [];
	let last = 0;

	for (let i = 0; i < untils.length - 1; i++) {
		out[i] = packBase60(Math.round((untils[i] - last) / 1000) / 60, 1);
		last = untils[i];
	}

	return out.join(' ');
}

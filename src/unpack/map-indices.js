export default function mapIndices (source, indices) {
	const out = [];

	for (let i = 0, l = indices.length; i < l; i++) {
		out[i] = source[indices[i]];
	}

	return out;
}

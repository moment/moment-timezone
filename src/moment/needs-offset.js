export default function needsOffset (m) {
	return !!(m._a && (m._tzm === undefined));
}

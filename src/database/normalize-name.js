export default function normalizeName (name) {
	return String(name || '').toLowerCase().replace(/\//g, '_');
}

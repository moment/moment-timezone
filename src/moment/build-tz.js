import needsOffset from './needs-offset';

export default function buildTz (moment, db) {
	function tz (...args) {
		const name = args.pop();
		const zone = db.getZone(name);
		const out = moment.utc(...args);

		if (zone && !moment.isMoment(args[0]) && needsOffset(out)) {
			out.add(zone.parse(out, tz), 'minutes');
		}

		out.tz(name);

		return out;
	}
	return tz;
}

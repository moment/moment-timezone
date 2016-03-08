/*global Intl*/
import logError from '../utils/log-error';

export default function guessFromIntl (db) {
	try {
		let intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
		let zone = db.getZone(intlName);
		if (zone) {
			return zone.name;
		}
		logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
	} catch (e) {
		// Intl unavailable, fall back to manual guessing.
	}
}

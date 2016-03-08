import logError from '../utils/log-error';
import isVersionLessThan from './is-version-less-than';

export default function attachSetDefault (moment, db) {
	moment.defaultZone = null;

	return function(name) {
		if (isVersionLessThan(moment.version, '2.9.0')) {
			logError(`Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ${ moment.version }.`);
		} else {
			moment.defaultZone = name ? db.getZone(name) : null;
		}
		return moment;
	};
}

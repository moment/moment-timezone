import logError from '../utils/log-error';
import VERSION from './version';
import isVersionLessThan from './is-version-less-than';

import buildTz from './build-tz';

import memoizeGuess from '../guess/memoize-guess';

import Database from '../database/database';

import attachMomentProperties from './attach-moment-properties';
import attachPrototypeTz from './attach-prototype-tz';
import attachPrototypeWrappers from './attach-prototype-wrappers';
import attachSetDefault from './attach-set-default';
import attachUpdateOffset from './attach-update-offset';

function versionIsNotSupported (version) {
	if (isVersionLessThan(version, '2.6.0')) {
		logError(`Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ${ version }. See momentjs.com`);
		return true;
	}
}

export default function attach (moment) {
	if (versionIsNotSupported(moment.version)) { return; }

	const db = new Database();
	const tz = buildTz(moment, db);

	tz.version = VERSION;
	tz.dataVersion  = '';
	tz.moveInvalidForward = true;
	tz.moveAmbiguousForward = false;

	tz.add  = zone => { db.putZone(zone); };
	tz.link = link => { db.putLink(link); };
	tz.load = data => {
		db.put(data);
		tz.dataVersion = db.version;
	};

	tz.zone = name => { return db.getZone(name); };
	tz.names = _ => { return db.getNames(); };

	tz.guess = memoizeGuess(db);

	tz.setDefault = attachSetDefault(moment, db);

	attachPrototypeTz(moment, db);
	attachPrototypeWrappers(moment.fn);
	attachUpdateOffset(moment);
	attachMomentProperties(moment);

	moment.tz = tz;
	tz.moment = moment;

	return tz;
}

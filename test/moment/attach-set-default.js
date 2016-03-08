import test from 'ava';
import stub from '../helpers/stub';
import { pauseErrors, resumeErrors } from '../helpers/logging';
import attachSetDefault from '../../src/moment/attach-set-default';

test('moment < 2.9.0', t => {
	const zone = {};
	const moment = { version: "2.8.0" };
	const db = stub({}, 'getZone', zone);
	const setDefault = attachSetDefault(moment, db);

	pauseErrors();
	const returnMoment = setDefault('America/Los_Angeles');

	t.is(returnMoment, moment);
	t.same(resumeErrors(), ['Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js 2.8.0.']);
	t.same(db.getZoneArgs, undefined);
});

test('moment < 2.9.0', t => {
	const zone = {};
	const moment = { version: "2.9.0" };
	const db = stub({}, 'getZone', zone);
	const setDefault = attachSetDefault(moment, db);

	pauseErrors();
	const returnMoment = setDefault('America/Los_Angeles');

	t.is(returnMoment, moment);
	t.same(resumeErrors(), []);
});

test('changes moment.defaultZone to zone', t => {
	const zone = {};
	const moment = { version: "2.9.0" };
	const db = stub({}, 'getZone', zone);
	const setDefault = attachSetDefault(moment, db);

	t.is(moment.defaultZone, null);

	const returnMoment = setDefault('America/Los_Angeles');

	t.is(returnMoment, moment);
	t.is(moment.defaultZone, zone);
	t.same(db.getZoneArgs, ['America/Los_Angeles']);
});

test('unsets defaultZone', t => {
	const zone = {};
	const moment = { version: "2.9.0" };
	const db = stub({}, 'getZone', zone);
	const setDefault = attachSetDefault(moment, db);

	moment.defaultZone = zone;

	setDefault();

	t.is(moment.defaultZone, null);
	t.same(db.getZoneArgs, undefined);
});

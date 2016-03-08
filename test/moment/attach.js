import test from 'ava';
import moment from 'moment';
import VERSION from '../../src/moment/version';
import { pauseErrors, resumeErrors } from '../helpers/logging';
import attach from '../../src/moment/attach';

test.afterEach(t => {
	resumeErrors();
});

function fakeMoment () {
	return {
		version: "2.6.0",
		fn: {},
		momentProperties: []
	};
}

test('check moment version', t => {
	pauseErrors();
	const tz = attach({ version: "2.5.0" });

	t.same(resumeErrors(), ['Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js 2.5.0. See momentjs.com']);
	t.is(tz, undefined);
});

test('moment-timezone version', t => {
	const moment = fakeMoment();
	const tz = attach(moment);

	t.is(tz.version, VERSION);
});

test('moment-timezone invalid and ambiguous flags', t => {
	const moment = fakeMoment();
	const tz = attach(moment);

	t.true(tz.moveInvalidForward);
	t.false(tz.moveAmbiguousForward);
});

test('attaches to moment as .tz', t => {
	const moment = fakeMoment();
	const tz = attach(moment);

	t.is(moment.tz, tz);
	t.is(tz.moment, moment);
});

test('has public tz methods', t => {
	const moment = fakeMoment();
	const tz = attach(moment);

	t.is(typeof tz, 'function');
	t.is(typeof tz.add, 'function');
	t.is(typeof tz.link, 'function');
	t.is(typeof tz.load, 'function');
	t.is(typeof tz.zone, 'function');
	t.is(typeof tz.guess, 'function');
	t.is(typeof tz.names, 'function');
	t.is(typeof tz.setDefault, 'function');
	t.is(typeof moment.fn.tz, 'function');
	t.is(typeof moment.fn.utc, 'function');
	t.is(typeof moment.fn.zoneName, 'function');
	t.is(typeof moment.fn.zoneAbbr, 'function');
	t.is(typeof moment.updateOffset, 'function');
	t.same(moment.momentProperties, ['_a', '_z']);
});

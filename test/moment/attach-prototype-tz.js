import test from 'ava';
import stub from '../helpers/stub';
import { pauseErrors, resumeErrors } from '../helpers/logging';
import attachPrototypeTz from '../../src/moment/attach-prototype-tz';

test.afterEach(t => {
	resumeErrors();
});

test('attach and use as setter', t => {
	const zone = { name: 'FakeZone' };
	const fn = {};
	const moment = stub({ fn }, 'updateOffset');
	const db = stub({}, 'getZone', zone);
	const instance = {};

	attachPrototypeTz(moment, db);

	const name = fn.tz.call(instance, 'fake_zone');

	t.is(name, instance);
	t.same(moment.updateOffsetArgs, [instance]);
	t.same(db.getZoneArgs, ['fake_zone']);
});

test('log error', t => {
	const fn = {};
	const moment = stub({ fn }, 'updateOffset');
	const db = stub({}, 'getZone');
	const instance = {};

	attachPrototypeTz(moment, db);

	pauseErrors();
	const name = fn.tz.call(instance, 'fake_zone');

	t.same(resumeErrors(), ["Moment Timezone has no data for fake_zone. See http://momentjs.com/timezone/docs/#/data-loading/."]);
	t.is(name, instance);
	t.is(moment.updateOffsetArgs, undefined);
	t.same(db.getZoneArgs, ['fake_zone']);
});

test('attach and use as getter', t => {
	const fn = {};
	const moment = stub({ fn }, 'updateOffset');
	const db = stub({}, 'getZone');
	const instance = { _z: { name: 'FakeZoneName' } };

	attachPrototypeTz(moment, db);

	const name = fn.tz.call(instance);

	t.is(name, 'FakeZoneName');
	t.is(moment.updateOffsetArgs, undefined);
	t.is(db.getZoneArgs, undefined);
});

test('attach and use as getter without zone', t => {
	const fn = {};
	const moment = stub({ fn }, 'updateOffset');
	const db = stub({}, 'getZone');
	const instance = { };

	attachPrototypeTz(moment, db);

	const name = fn.tz.call(instance);

	t.is(name, undefined);
	t.is(moment.updateOffsetArgs, undefined);
	t.is(db.getZoneArgs, undefined);
});

import test from 'ava';
import stub from '../helpers/stub';
import attachUpdateOffset from '../../src/moment/attach-update-offset';

test('attaches updateOffset to object', t => {
	const moment = {};
	attachUpdateOffset(moment);

	t.is(typeof moment.updateOffset, 'function');
});

test('calls .utcOffset() correctly', t => {
	const zone = stub({}, 'offset', 120);
	const instance = stub({ _z: zone }, 'utcOffset');

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, true);

	t.same(zone.offsetArgs, [instance]);
	t.same(instance.utcOffsetArgs, [-120, true]);
});

test('calls .utcOffset() correctly', t => {
	const zone = stub({}, 'offset', -300);
	const instance = stub({ _z: zone }, 'utcOffset');

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(zone.offsetArgs, [instance]);
	t.same(instance.utcOffsetArgs, [300, false]);
});

test('calls .zone() correctly (moment version < 2.9.0)', t => {
	const zone = stub({}, 'offset', 60);
	const instance = stub({ _z: zone }, 'zone');

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, true);

	t.same(zone.offsetArgs, [instance]);
	t.same(instance.zoneArgs, [60, true]);
});

test('calls .zone() correctly (moment version < 2.9.0)', t => {
	const zone = stub({}, 'offset', -300);
	const instance = stub({ _z: zone }, 'zone');

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(zone.offsetArgs, [instance]);
	t.same(instance.zoneArgs, [-300, false]);
});

test('sets default zone correctly', t => {
	const date = new Date();
	const _a = [];

	const defaultZone = {};
	stub(defaultZone, 'parse', 45);
	stub(defaultZone, 'offset', 60);

	const instance = { _a };
	stub(instance, 'utc', instance);
	stub(instance, 'add');
	stub(instance, 'utcOffset');

	const moment = { defaultZone };
	stub(moment, 'utc', { _d: date });
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(moment.utcArgs, [_a]);
	t.same(instance.utcArgs, []);
	t.same(instance.addArgs, [45, 'minutes']);
	t.same(instance.utcOffsetArgs, [-60, false]);
	t.same(defaultZone.parseArgs, [instance]);
	t.same(defaultZone.offsetArgs, [instance]);
});

test('doesnt set zone to defaultZone when defaultZone is null', t => {
	const instance = {};
	stub(instance, 'utc');
	stub(instance, 'add');
	stub(instance, 'utcOffset');

	const moment = { defaultZone: null };
	stub(moment, 'utc');
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(moment.utcArgs, undefined);
	t.same(instance.utcArgs, undefined);
	t.same(instance.addArgs, undefined);
	t.same(instance.utcOffsetArgs, undefined);
});

test('doesnt set zone to defaultZone when _z is null', t => {
	const instance = { _z: null };

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(instance.utcArgs, undefined);
});

test('doesnt set zone to defaultZone when _z is defined', t => {
	const zone = {};
	stub(zone, 'offset', 60);

	const instance = { _z: zone };
	stub(instance, 'utcOffset');

	const moment = {};
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(instance.utcArgs, undefined);
	t.same(instance.utcOffsetArgs, [-60, false]);
	t.same(zone.offsetArgs, [instance]);
});

test('doesnt update offset when needsOffset is false', t => {
	const date = new Date();

	const defaultZone = {};
	stub(defaultZone, 'parse', 45);
	stub(defaultZone, 'offset', 60);

	const instance = {};
	stub(instance, 'utc', instance);
	stub(instance, 'add');
	stub(instance, 'utcOffset');

	const moment = { defaultZone };
	stub(moment, 'utc', { _d: date });
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(moment.utcArgs, undefined);
	t.same(instance.utcArgs, undefined);
	t.same(instance.addArgs, undefined);
	t.same(instance.utcOffsetArgs, [-60, false]);
	t.same(defaultZone.parseArgs, undefined);
	t.same(defaultZone.offsetArgs, [instance]);
});

test('doesnt update offset when _isUTC is true', t => {
	const date = new Date();
	const _a = [];

	const defaultZone = {};
	stub(defaultZone, 'parse', 45);
	stub(defaultZone, 'offset', 60);

	const instance = { _a, _isUTC: true };
	stub(instance, 'utc', instance);
	stub(instance, 'add');
	stub(instance, 'utcOffset');

	const moment = { defaultZone };
	stub(moment, 'utc', { _d: date });
	attachUpdateOffset(moment);
	moment.updateOffset(instance, false);

	t.same(moment.utcArgs, undefined);
	t.same(instance.utcArgs, undefined);
	t.same(instance.addArgs, undefined);
	t.same(instance.utcOffsetArgs, [-60, false]);
	t.same(defaultZone.parseArgs, undefined);
	t.same(defaultZone.offsetArgs, [instance]);
});

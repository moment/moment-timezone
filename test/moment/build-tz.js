import test from 'ava';
import stub from '../helpers/stub';
import buildTz from '../../src/moment/build-tz';

test('parsing tz("2014-01-01", "YYYY-MM-DD", "America/Los_Angeles")', t => {
	const zone = stub({}, 'parse', 120);
	const db = stub({}, 'getZone', zone);

	const instance = { _a: [] };
	stub(instance, 'add');
	stub(instance, 'tz');

	const moment = {};
	stub(moment, 'isMoment', false);
	stub(moment, 'utc', instance);

	const tz = buildTz(moment, db);

	const parsed = tz("2014-01-01", "YYYY-MM-DD", "America/Los_Angeles");

	t.is(parsed, instance);
	t.same(db.getZoneArgs, ["America/Los_Angeles"]);
	t.same(moment.utcArgs, ["2014-01-01", "YYYY-MM-DD"]);
	t.same(moment.isMomentArgs, ["2014-01-01"]);
	t.same(instance.addArgs, [120, 'minutes']);
	t.same(instance.tzArgs, ["America/Los_Angeles"]);
	t.same(zone.parseArgs, [instance, tz]);
});

test('parsing tz(1400000000000, "America/Los_Angeles")', t => {
	const zone = stub({}, 'parse', 120);
	const db = stub({}, 'getZone', zone);

	const instance = {};
	stub(instance, 'add');
	stub(instance, 'tz');

	const moment = {};
	stub(moment, 'isMoment', false);
	stub(moment, 'utc', instance);

	const tz = buildTz(moment, db);

	const parsed = tz(1400000000000, "America/Los_Angeles");

	t.is(parsed, instance);
	t.same(db.getZoneArgs, ["America/Los_Angeles"]);
	t.same(moment.utcArgs, [1400000000000]);
	t.same(moment.isMomentArgs, [1400000000000]);
	t.same(instance.addArgs, undefined);
	t.same(instance.tzArgs, ["America/Los_Angeles"]);
	t.same(zone.parseArgs, undefined);
});

test('parsing tz(momentInstance, "America/Los_Angeles")', t => {
	const zone = stub({}, 'parse', 120);
	const db = stub({}, 'getZone', zone);

	const instance = {};
	stub(instance, 'add');
	stub(instance, 'tz');

	const moment = {};
	stub(moment, 'isMoment', true);
	stub(moment, 'utc', instance);

	const tz = buildTz(moment, db);

	const parsed = tz(instance, "America/Los_Angeles");

	t.is(parsed, instance);
	t.same(db.getZoneArgs, ["America/Los_Angeles"]);
	t.same(moment.utcArgs, [instance]);
	t.same(moment.isMomentArgs, [instance]);
	t.same(instance.addArgs, undefined);
	t.same(instance.tzArgs, ["America/Los_Angeles"]);
	t.same(zone.parseArgs, undefined);
});


test('parsing tz("America/Los_Angeles")', t => {
	const zone = stub({}, 'parse', 240);
	const db = stub({}, 'getZone', zone);

	const instance = { _a: [] };
	stub(instance, 'add');
	stub(instance, 'tz');

	const moment = {};
	stub(moment, 'isMoment', false);
	stub(moment, 'utc', instance);

	const tz = buildTz(moment, db);

	const parsed = tz("America/Los_Angeles");

	t.is(parsed, instance);
	t.same(db.getZoneArgs, ["America/Los_Angeles"]);
	t.same(moment.utcArgs, []);
	t.same(moment.isMomentArgs, [undefined]);
	t.same(instance.addArgs, [240, 'minutes']);
	t.same(instance.tzArgs, ["America/Los_Angeles"]);
	t.same(zone.parseArgs, [instance, tz]);
});

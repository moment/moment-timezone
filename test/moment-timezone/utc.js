import test from 'ava';
import moment from '../../src/moment-timezone';

test('utc', t => {
	moment.tz.add([
		"TestUTC/Pacific|PST|80|0|",
		"TestUTC/Eastern|EST|50|0|"
	]);

	const instance = moment("2014-07-10 12:00:00+00:00");
	const localFormat = instance.format();
	const localOffset = instance.utcOffset();

	instance.tz("TestUTC/Pacific");

	t.is(instance.utcOffset(), -480, "Should change the offset when using moment.fn.tz");
	t.is(instance.format(), "2014-07-10T04:00:00-08:00", "Should change the offset when using moment.fn.tz");

	instance.utc();
	moment.updateOffset(instance);

	t.is(instance.utcOffset(), 0, "Should set the offset to +00:00 when using moment.fn.utc");
	t.is(instance.format(), "2014-07-10T12:00:00+00:00", "Should change the offset when using moment.fn.utc");

	instance.tz("TestUTC/Eastern");

	t.is(instance.utcOffset(), -300, "Should change the offset when using moment.fn.tz");
	t.is(instance.format(), "2014-07-10T07:00:00-05:00", "Should change the offset when using moment.fn.tz");

	instance.utc();
	moment.updateOffset(instance);

	t.is(instance.utcOffset(), 0, "Should set the offset to +00:00 when using moment.fn.utc");
	t.is(instance.format(), "2014-07-10T12:00:00+00:00", "Should change the offset when using moment.fn.utc");

	instance.local();
	moment.updateOffset(instance);

	t.is(instance.utcOffset(), localOffset, "Should reset the offset to local time when using moment.fn.local");
	t.is(instance.format(), localFormat, "Should reset the offset to local time when using moment.fn.local");
});

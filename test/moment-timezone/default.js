import test from 'ava';
import moment from '../../src/moment-timezone';

test.afterEach(t => {
	moment.tz.setDefault();
});

test('moment.defaultZone', t =>{
	t.is(moment.defaultZone, null);

	moment.tz.setDefault('America/New_York');
	t.is(moment.defaultZone.name, 'America/New_York');

	moment.tz.setDefault();
	t.is(moment.defaultZone, null);
});

test('normal', t => {
	moment.tz.setDefault('America/New_York');
	const instance = moment();
	t.is(instance._z.name, 'America/New_York');

	moment.tz.setDefault();
	const m2 = moment();

	moment.tz.setDefault('America/New_York');
	m2.millisecond(0);
	t.is(m2._z, null);
});

test('utc', t => {
	moment.tz.setDefault('America/New_York');
	t.is(moment.utc().format('ZZ'), '+0000');
	t.not(moment().format('ZZ'), '+0000');

	const utcMoment = moment.utc();
	const normalMoment = moment();
	const normalMomentOffset = normalMoment.format('ZZ');

	moment.tz.setDefault();
	utcMoment.millisecond(0);
	normalMoment.millisecond(0);
	t.is(utcMoment.format('ZZ'), '+0000');
	t.is(normalMoment.format('ZZ'), normalMomentOffset);
});

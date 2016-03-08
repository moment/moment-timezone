import test from 'ava';
import attachMomentProperties from '../../src/moment/attach-moment-properties';

test('moment >= 2.8.1 with empty array', t => {
	const momentProperties = [];
	const moment = { momentProperties };
	attachMomentProperties(moment);

	t.same(momentProperties, ['_a', '_z']);
});

test('moment >= 2.8.1 with non empty array', t => {
	const momentProperties = ['_t'];
	const moment = { momentProperties };
	attachMomentProperties(moment);

	t.same(momentProperties, ['_t', '_a', '_z']);
});

test('moment >= 2.8.1 with _a already', t => {
	const momentProperties = ['_a'];
	const moment = { momentProperties };
	attachMomentProperties(moment);

	t.same(momentProperties, ['_a', '_z']);
});

test('moment >= 2.8.1 with _z already', t => {
	const momentProperties = ['_z'];
	const moment = { momentProperties };
	attachMomentProperties(moment);

	t.same(momentProperties, ['_z', '_a']);
});

test('moment < 2.8.1', t => {
	const momentProperties = {};
	const moment = { momentProperties };
	attachMomentProperties(moment);

	t.same(momentProperties, { _z: null });
});

test('moment without momentProperties', t => {
	const moment = {};

	t.notThrows(_ => {
		attachMomentProperties(moment);
	});
});

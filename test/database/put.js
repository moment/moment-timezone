import test from 'ava';
import Database from '../../src/database/database';

const DATA = {
	version : 'test0',
	zones : [
		"SomeZone/Pacific|PST PDT|70 80|010101|gE 1E 2k 1E 2k",
		"SomeZone/Eastern|EST EDT|50 60|010101|rE 1E 2k 1E 2k"
	],
	links : [
		"SomeZone/Los_Angles|SomeZone/Pacific",
		"SomeZone/New_York|SomeZone/Eastern"
	]
};

test('put all', t => {
	const db = new Database();

	db.put(DATA);

	t.ok(db.getZone('SomeZone/Pacific'));
	t.ok(db.getZone('SomeZone/Eastern'));

	t.ok(db.getZone('SomeZone/Los_Angles'));
	t.ok(db.getZone('SomeZone/New_York'));

	t.is(db.version, 'test0');
});

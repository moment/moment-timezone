import test from 'ava';
import Database from '../../src/database/database';

test('get names', t => {
	const db = new Database();

	t.same(db.getNames(), []);

	db.putZone("Zone1|ASDF|0|0|0");

	t.same(db.getNames(), ["Zone1"]);

	db.putZone("Zone2|ASDF|0|0|0");

	t.same(db.getNames(), ["Zone1", "Zone2"]);

	db.putZone("Zone3|ASDF|0|0|0");

	t.same(db.getNames(), ["Zone1", "Zone2", "Zone3"]);
});

test('sorting', t => {
	const db = new Database();

	t.same(db.getNames(), []);

	db.putZone([
		"CZone3|ASDF|0|0|0",
		"BZone2|ASDF|0|0|0"
	]);

	t.same(db.getNames(), ["BZone2", "CZone3"]);

	db.putZone("AZone1|ASDF|0|0|0");

	t.same(db.getNames(), ["AZone1", "BZone2", "CZone3"]);
});

import test from 'ava';
import Database from '../../src/database/database';

test('linking', t => {
	const db = new Database();

	db.putZone("Zone1|ASDF|0|0|0");
	db.putLink("Alias1|Zone1");
	db.putLink(["Alias2|Zone1", "Alias3|Zone1"]);

	t.ok(db.getZone('Zone1'));
	t.ok(db.getZone('Alias1'));
	t.ok(db.getZone('Alias2'));
	t.ok(db.getZone('Alias3'));

	t.is(db.getZone('Zone1').name,  'Zone1');
	t.is(db.getZone('Alias1').name, 'Alias1');
	t.is(db.getZone('Alias2').name, 'Alias2');
	t.is(db.getZone('Alias3').name, 'Alias3');
});

test('reversed', t => {
	const db = new Database();

	db.putZone("Zone1|ASDF|0|0|0");
	db.putLink("Zone1|Alias1");
	db.putLink(["Zone1|Alias2", "Zone1|Alias3"]);

	t.ok(db.getZone('Zone1'));
	t.ok(db.getZone('Alias1'));
	t.ok(db.getZone('Alias2'));
	t.ok(db.getZone('Alias3'));

	t.is(db.getZone('Zone1').name,  'Zone1');
	t.is(db.getZone('Alias1').name, 'Alias1');
	t.is(db.getZone('Alias2').name, 'Alias2');
	t.is(db.getZone('Alias3').name, 'Alias3');
});

test('out of order', t => {
	const db = new Database();

	db.putLink("Alias1|Zone1");
	db.putZone("Zone1|ASDF|0|0|0");

	t.ok(db.getZone('Zone1'));
	t.ok(db.getZone('Alias1'));

	t.is(db.getZone('Zone1').name,  'Zone1');
	t.is(db.getZone('Alias1').name, 'Alias1');

	db.putLink("Alias2|Zone2");
	t.ok(!db.getZone('Alias2'));
});

test('names of aliases', t => {
	const db = new Database();

	db.putLink("Alias1|Zone1");
	db.putZone("Zone1|ASDF|0|0|0");
	t.same(db.getNames(), ["Alias1", "Zone1"]);

	db.putLink("Alias2|Zone1");
	t.same(db.getNames(), ["Alias1", "Alias2", "Zone1"]);

	db.putLink("Alias3|Zone2");
	t.same(db.getNames(), ["Alias1", "Alias2", "Zone1"]);

	db.putLink("Alias3|Zone1");
	t.same(db.getNames(), ["Alias1", "Alias2", "Alias3", "Zone1"]);
});

test('zone and alias not loaded', t => {
	const db = new Database();

	db.putLink("Alias1|Zone1");

	t.ok(!db.getZone('Zone1'));
	t.ok(!db.getZone('Alias1'));
});

import test from 'ava';
import Database from '../../src/database/database';

test('adding', t => {
	const db = new Database();

	db.putZone('SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k');

	const zone = db.getZone('SomeZone');

	t.is(zone.name, "SomeZone");
	t.same(zone.abbrs, ["TIM", "TAM", "IAM", "TAM", "TIM", "TAM"]);
	t.same(zone.offsets, [360.5, 300, 360, 300, 360.5, 300]);
	t.same(zone.untils, [
		1000 * 60000,
		1100 * 60000,
		1240 * 60000,
		1340 * 60000,
		1480 * 60000,
		Infinity
	]);
});

test('adding many', t => {
	const db = new Database();

	db.putZone([
		"AddingMany/Test1|QWE RTY|60 30|0101|-30 10 8",
		"AddingMany/Test2|QWE RTY|60 30|1010|-30 10 8",
		"AddingMany/Test3|QWE RTY|60 30|0101|-30 10 8"
	]);
	db.putZone("AddingMany/Test4|QWE RTY|60 30|0101|-30 10 8");

	t.ok(db.getZone("AddingMany/Test1"));
	t.ok(db.getZone("AddingMany/Test2"));
	t.ok(db.getZone("AddingMany/Test3"));
	t.ok(db.getZone("AddingMany/Test4"));
});

test('caching', t => {
	const db = new Database();

	t.is(db.getZone('SomeZone'), null);

	db.putZone("SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k");

	t.not(db.getZone("SomeZone"), null);
});

test('case sensitivity', t => {
	const db = new Database();

	db.putZone("CASE_INSENSITIVE|ASD|60|0|234");

	t.ok(db.getZone('case_insensitive'));
	t.ok(db.getZone('Case_Insensitive'));
	t.ok(db.getZone('case/insensitive'));

	db.putZone("Case/Insens_Itive2|ASD|60|0|234");

	t.ok(db.getZone('CASE_insens_itive2'));
	t.ok(db.getZone('case_insens_itive2'));
	t.ok(db.getZone('Case_Insens_itive2'));
	t.ok(db.getZone('case/insens/itive2'));
});

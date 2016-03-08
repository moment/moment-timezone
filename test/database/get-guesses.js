import test from 'ava';
import Database from '../../src/database/database';
import OffsetAt from '../../src/guess/offset-at';

function buildOffsetAt(offset) {
	const offsetAt = new OffsetAt(new Date());
	offsetAt.offset = offset;
	return offsetAt;
}

test('get guesses', t => {
	const db = new Database();

	db.putZone([
		"Test/50/60|QWE RTY|50 60|0101|-30 10 8|1",
		"Test/60/70|QWE RTY|60 70|1010|-30 10 8|1",
		"Test/70/80|QWE RTY|70 80|0101|-30 10 8|1"
	]);

	t.same(db.getGuesses([buildOffsetAt(300)]), ["Test/50/60"]);
	t.same(db.getGuesses([buildOffsetAt(360)]), ["Test/50/60", "Test/60/70"]);
	t.same(db.getGuesses([buildOffsetAt(420)]), ["Test/60/70", "Test/70/80"]);
	t.same(db.getGuesses([buildOffsetAt(480)]), ["Test/70/80"]);

	t.same(db.getGuesses([buildOffsetAt(300), buildOffsetAt(300)]), ["Test/50/60"]);
	t.same(db.getGuesses([buildOffsetAt(300), buildOffsetAt(360)]), ["Test/50/60", "Test/60/70"]);
	t.same(db.getGuesses([buildOffsetAt(300), buildOffsetAt(480)]), ["Test/50/60", "Test/70/80"]);
	t.same(db.getGuesses([buildOffsetAt(300), buildOffsetAt(420)]), ["Test/50/60", "Test/60/70", "Test/70/80"]);
});

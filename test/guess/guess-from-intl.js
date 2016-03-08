import test from 'ava';
import { mockIntl, resetIntl, mockIntlTimeZone } from '../helpers/intl';
import { pauseErrors, resumeErrors } from '../helpers/logging';
import Database from '../../src/database/database';
import guessFromIntl from '../../src/guess/guess-from-intl';

test.afterEach(_ => {
	resetIntl();
	resumeErrors();
});

test('use Intl when available', t => {
	const db = new Database();
	db.putZone("Known/Timezone_A|ASDF|0|0|0");
	mockIntlTimeZone('Known/Timezone_A');

	t.is(guessFromIntl(db), 'Known/Timezone_A');
});

test('use name from db when mismatched', t => {
	const db = new Database();
	db.putZone("Known/Timezone_B|ASDF|0|0|0");
	mockIntlTimeZone('known_timezone_b');

	t.is(guessFromIntl(db), 'Known/Timezone_B');
});

test('ignore result from Intl if not in db', t => {
	const db = new Database();
	mockIntlTimeZone('Unknown/Timezone_A');
	pauseErrors();

	t.is(guessFromIntl(db), undefined);
	t.same(resumeErrors(), [
		'Moment Timezone found Unknown/Timezone_A from the Intl api, but did not have that data loaded.'
	]);
});

test('catch errors when Intl is undefined', t => {
	const db = new Database();
	mockIntl(undefined);

	t.notThrows(_ => {
		t.is(guessFromIntl(db), undefined);
	});
});

test('catch errors when Intl is weird', t => {
	const db = new Database();
	mockIntl({
		DateTimeFormat: function () {
			return {};
		}
	});

	t.notThrows(_ => {
		t.is(guessFromIntl(db), undefined);
	});
});

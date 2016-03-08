import test from 'ava';
import validatePackData from '../../src/pack/validate-pack-data';

test('errors without name', t => {
	t.throws(_ => validatePackData({
		abbrs : ['ABC'],
		offsets : [60],
		untils : [1000]
	}));

	t.throws(_ => validatePackData({
		name : "",
		abbrs : ['ABC'],
		offsets : [60],
		untils : [1000]
	}));
});

test('errors without abbrs', t => {
	t.throws(_ => validatePackData({
		name : "Test/Name",
		offsets : [60],
		untils : [1000]
	}));
});

test('errors without offsets', t => {
	t.throws(_ => validatePackData({
		name : "Test/Name",
		abbrs : ["ABC"],
		untils : [1000]
	}));
});

test('errors without untils', t => {
	t.throws(_ => validatePackData({
		name : "Test/Name",
		abbrs : ["ABC"],
		offsets : [60]
	}));
});

test('errors with mismatched data lengths', t => {
	t.throws(_ => validatePackData({
		name : "Test/Name",
		abbrs : ['ABC'],
		offsets : [60, 20],
		untils : [1000]
	}));

	t.throws(_ => validatePackData({
		name : "Test/Name",
		abbrs : ['ABC', 'DEF'],
		offsets : [60],
		untils : [1000]
	}));

	t.throws(_ => validatePackData({
		name : "Test/Name",
		abbrs : ['ABC'],
		offsets : [60],
		untils : [1000, 2000]
	}));
});

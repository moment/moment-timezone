import test from 'ava';
import packPopulation from '../../src/pack/pack-population';

test('empty', t => {
	t.is(packPopulation(0), '');
	t.is(packPopulation(), '');
});

test('below 1000', t => {
	t.is(packPopulation(1), '|1');
	t.is(packPopulation(999), '|999');
	t.is(packPopulation(500), '|500');
});

test('above 1000', t => {
	t.is(packPopulation(1000), '|10e2');
	t.is(packPopulation(1234567), '|12e5');
	t.is(packPopulation(455000001), '|46e7');
});

"use strict";

var tz = require("../../").tz;

function compare(test, data) {
	var i,
		input,
		output,
		expected;

	for (i = 0; i < data.length; i++) {
		input = data[i][0];
		output = tz.unpackBase60(data[i][0]);
		expected = data[i][1];
		test.equal(output, expected, 'unpacking ' + input + ' should equal ' + expected);
	}

	test.done();
}

exports['unpack-base-60'] = {
	ints : function (test) {
		compare(test, [
			['0', 0],
			['1', 1],
			['9', 9],
			['a', 10],
			['z', 35],
			['A', 36],
			['X', 59],
			['10', 60],
			['11', 60 + 1],
			['1a', 60 + 10],
			['1z', 60 + 35],
			['1A', 60 + 36],
			['1X', 60 + 59],
			['100', 60 * 60],
			['10000000', 60 * 60 * 60 * 60 * 60 * 60 * 60]
		]);
	},

	floats : function (test) {
		compare(test, [
			['0.0', 0],
			['.1',   1 / 60],
			['0.1',  1 / 60],
			['0.9',  9 / 60],
			['0.a', 10 / 60],
			['0.z', 35 / 60],
			['0.A', 36 / 60],
			['0.X', 59 / 60],
			['0.01', 1 / 3600],
			['0.10', 1 / 60],
			['0.11', (60 +  1) / 3600],
			['0.1a', (60 + 10) / 3600],
			['0.1z', (60 + 35) / 3600],
			['0.1A', (60 + 36) / 3600],
			['0.1X', (60 + 59) / 3600],
			['.00000001', 1 / (60 * 60 * 60 * 60 * 60 * 60 * 60)]
		]);
	}
};

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
	}
};

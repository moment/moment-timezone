"use strict";

var tz = require("../../moment-timezone-utils");

function compare(test, data) {
	var i,
		input,
		output,
		expected,
		precision;

	for (i = 0; i < data.length; i++) {
		input     = data[i][0];
		precision = data[i][1];
		expected  = data[i][2];
		output    = tz.packBase60(input, precision);
		test.equal(output, expected, 'packing ' + input + ' to ' + precision + ' decimal places should equal ' + expected);
	}

	test.done();
}

exports['pack-base-60'] = {
	ints : function (test) {
		compare(test, [
			[0,  0, '0'],
			[1,  0, '1'],
			[9,  0, '9'],
			[10, 0, 'a'],
			[35, 0, 'z'],
			[36, 0, 'A'],
			[59, 0, 'X'],
			[60, 0, '10'],
			[60 +  1, 0, '11'],
			[60 + 10, 0, '1a'],
			[60 + 35, 0, '1z'],
			[60 + 36, 0, '1A'],
			[60 + 59, 0, '1X'],
			[60 * 60, 0, '100'],
			[2799360000000, 0, '10000000']
		]);
	}
};

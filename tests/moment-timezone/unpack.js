"use strict";

var tz = require("../../index").tz;

function compare(test, source, expected) {
	var actual = tz.unpack(source);

	test.deepEqual(actual.name,    expected.name,    'should be able to unpack name');
	test.deepEqual(actual.abbrs,   expected.abbrs,   'should be able to unpack abbrs');
	test.deepEqual(actual.untils,  expected.untils,  'should be able to unpack untils');
	test.deepEqual(actual.offsets, expected.offsets, 'should be able to unpack offsets');

	test.done();
}

exports.unpack = {
	single : function (test) {
		compare(test,
			"Some/Zone_Name|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X",
			{
				name : "Some/Zone_Name",
				abbrs   : ["ABC", "DEF", "ABC", "DEF", "GHI", "DEF"],
				offsets : [60, 239, 60, 239, 60, 239],
				untils  : [
					-4259 * 60000,
					-4139 * 60000,
					-3900 * 60000,
					-3780 * 60000,
					-3541 * 60000,
					Infinity
				]
			}
		);
	}
};

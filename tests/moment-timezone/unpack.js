"use strict";

var tz = require("../../").tz;

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
<<<<<<< HEAD
	},
	"unpack with country" : function (t) {
		t.deepEqual(
			tz.unpack("Some/Zone_Name1|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X||VU"),
			{
				name : "Some/Zone_Name1",
				abbrs   : ["ABC", "DEF", "ABC", "DEF", "GHI", "DEF"],
				offsets : [60, 239, 60, 239, 60, 239],
				untils  : [
					-4259 * 60000,
					-4139 * 60000,
					-3900 * 60000,
					-3780 * 60000,
					-3541 * 60000,
					Infinity
				],
				population 	: 0,
				countries	: ["VU"]
			},
			"Should unpack zone strings with countries in them"
		);
		t.done();
	},
	"unpack with multiple country" : function (t) {
		t.deepEqual(
			tz.unpack("Some/Zone_Name2|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X||VU GB US"),
			{
				name : "Some/Zone_Name2",
				abbrs   : ["ABC", "DEF", "ABC", "DEF", "GHI", "DEF"],
				offsets : [60, 239, 60, 239, 60, 239],
				untils  : [
					-4259 * 60000,
					-4139 * 60000,
					-3900 * 60000,
					-3780 * 60000,
					-3541 * 60000,
					Infinity
				],
				population 	: 0,
				countries	: ["VU", "GB", "US"]
			},
			"Should unpack zone strings with multiple countries in them"
		);
		t.done();
	},
	"unpack country" : function (t) {
		t.deepEqual(
			tz.unpackCountry("UZ|Uzbekistan|Asia/Samarkand Asia/Tashkent"),
			{
				name : "Uzbekistan",
				abbr   : "UZ",
				zones  : [
					"Asia/Samarkand",
					"Asia/Tashkent"
				]
			},
			"Should unpack country strings"
		);
		t.done();
=======
>>>>>>> origin/Country-Functionality
	}
};

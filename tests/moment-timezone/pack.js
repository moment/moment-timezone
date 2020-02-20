"use strict";

var tz = require("../../moment-timezone-utils").tz;

function compare(test, source, expected) {
	test.equal(tz.pack(source), expected, 'should be able to pack data');

	test.done();
}

exports.pack = {
	single : function (test) {
		compare(test,
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
			},
			"Some/Zone_Name|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X||"
		);
	},

	'single with population' : function (test) {
		compare(test,
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
				],
				population : 1234567
			},
			"Some/Zone_Name|ABC DEF GHI|10 3X 10|010121|-1aX 20 3X 20 3X|12e5|"
		);
	},

	'single with population under 1000' : function (test) {
		compare(test,
			{
				name : "Some/Zone_Name",
				abbrs   : ["ABC"],
				offsets : [60],
				untils  : [Infinity],
				population : 999
			},
			"Some/Zone_Name|ABC|10|0||999|"
		);
	},

	'single with rounded up population' : function (test) {
		compare(test,
			{
				name : "Some/Zone_Name",
				abbrs   : ["ABC"],
				offsets : [60],
				untils  : [Infinity],
				population : 455000001
			},
			"Some/Zone_Name|ABC|10|0||46e7|"
		);
	},

	errors : function (test) {
		test.throws(function () {
			tz.pack({
				abbrs : ['ABC'],
				offsets : [60],
				untils : [1000]
			});
		}, "Packing data without a name should throw an error");

		test.throws(function () {
			tz.pack({
				name : "",
				abbrs : ['ABC'],
				offsets : [60],
				untils : [1000]
			});
		}, "Packing data without a name should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				offsets : [60],
				untils : [1000]
			});
		}, "Packing data without abbrs should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				abbrs : ["ABC"],
				untils : [1000]
			});
		}, "Packing data without offsets should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				abbrs : ["ABC"],
				offsets : [60]
			});
		}, "Packing data without untils should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				abbrs : ['ABC'],
				offsets : [60, 20],
				untils : [1000]
			});
		}, "Packing data with mismatched offset length should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				abbrs : ['ABC', 'DEF'],
				offsets : [60],
				untils : [1000]
			});
		}, "Packing data with mismatched abbr length should throw an error");

		test.throws(function () {
			tz.pack({
				name : "Test/Name",
				abbrs : ['ABC'],
				offsets : [60],
				untils : [1000, 2000]
			});
		}, "Packing data with mismatched untils length should throw an error");

		test.done();
	}
};

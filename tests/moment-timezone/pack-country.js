"use strict";

var tz = require("../../moment-timezone-utils").tz;

function compare(test, source, expected) {
	test.equal(tz.packCountry(source), expected, 'should be able to pack country data');

	test.done();
}

exports.packCountry = {
	single : function (test) {
		compare(test,
			{
				name : "Country_name",
				abbr : "Country_code",
				zones  : [
					"Zone_1",
					"Zone_2",
					"Zone_3"
				]
			},
			"Country_code|Country_name|Zone_1 Zone_2 Zone_3"
		);
	},

	errors : function (test) {
		test.throws(function () {
			tz.packCountry({
				abbr : 'ABC',
				zones : ['Zone_1']
			});
		}, "Packing country data without a name should throw an error");

		test.throws(function () {
			tz.packCountry({
				name : "",
				abbr : 'ABC',
				zones : ['Zone_1']
			});
		}, "Packing country data without a name should throw an error");

		test.throws(function () {
			tz.packCountry({
				name : "Country_name",
				zones : ['Zone_1']
			});
		}, "Packing country data without abbr should throw an error");

		test.throws(function () {
			tz.packCountry({
				name : "Country_name",
				abbr : "ABC"
			});
		}, "Packing country data without zones should throw an error");

		test.throws(function () {
			tz.packCountry({
				name : "Country_name",
				abbr : "ABC",
				zones : []
			});
		}, "Packing country data with empty zones array should throw an error");

		test.done();
	}
};

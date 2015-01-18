"use strict";

var tz = require("../../").tz;

function compare(test, source, expected) {
	var actual = tz.unpackCountry(source);

	test.deepEqual(actual.name,   expected.name,    'should be able to unpack name');
	test.deepEqual(actual.abbr,   expected.abbr,   'should be able to unpack abbrs');
	test.deepEqual(actual.zones,  expected.zones,  'should be able to unpack untils');

	test.done();
}

exports.unpackCountry = {
	single : function (test) {
		compare(test,
			"Country_Code|Country_Name|Zone_1 Zone_2 Zone_3",
			{
				name : "Country_Name",
				abbr : "Country_Code",
				zones  : [
					"Zone_1",
					"Zone_2",
					"Zone_3"
				]
			}
		);
	}
};

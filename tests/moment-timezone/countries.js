"use strict";

var tz = require("../../").tz;

function clearObject (obj) {
	var key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			delete obj[key];
		}
	}
}

exports.countries = {
	setUp : function (done) {
		clearObject(tz._countries);
		done();
	},

	gettingCountries : function (test) {
		test.ok(!tz.country('C1'),  "Countries should have been reset.");
		test.ok(!tz.country('C2'),  "Countries should have been reset.");
		test.ok(!tz.country('C3'),  "Countries should have been reset.");
		test.ok(!tz._countries.C1,  "Countries should have been reset.");
		test.ok(!tz._countries.C2,  "Countries should have been reset.");
		test.ok(!tz._countries.C3,  "Countries should have been reset.");

		test.deepEqual(tz.countries(), [], "There should be no countries by default.");

		tz.addCountry("C1|Country_1|Zone_10");

		test.deepEqual(tz.countries(), [{
			name: "Country_1",
			abbr: "C1",
			zones: ["Zone_10"]
		}], "Adding a Country should be reflected in .countries().");

		tz.addCountry("C2|Country_2|Zone_20 Zone_21");

		test.deepEqual(tz.countries(), [{
			name: "Country_1",
			abbr: "C1",
			zones: ["Zone_10"]
		}, {
			name: "Country_2",
			abbr: "C2",
			zones: ["Zone_20", "Zone_21"]
		}], "Adding a Country should be reflected in .countries().");

		tz.addCountry("C3|Country_3|Zone_30 Zone_31 Zone_32");

		test.deepEqual(tz.countries(), [{
			name: "Country_1",
			abbr: "C1",
			zones: ["Zone_10"]
		}, {
			name: "Country_2",
			abbr: "C2",
			zones: ["Zone_20", "Zone_21"]
		},{
			name: "Country_3",
			abbr: "C3",
			zones: ["Zone_30", "Zone_31", "Zone_32"]
		}], "Adding a Country should be reflected in .countries().");

		test.done();
	},

	gettingCountry : function(test) {
		test.ok(!tz.country("C4"),  "Country C4 should not be found.");

		tz.addCountry("C4|Country_4|Zone_40");

		test.deepEqual(tz.country("C4"), {
			name: "Country_4",
			abbr: "C4",
			zones: ["Zone_40"]
		}, "should be able to find a specific country from its countryCode.");

		test.done();
	},

	gettingCountryZones: function (test) {
		test.ok(!tz.zonesOfCountry("C5"),  "No zones should be returned for Country C5");

		tz.addCountry("C5|Country_5|Zone_50");
		tz.add("Zone_50|ZST ZDT|50 60|010101|rE 1E 2k 1E 2k");

		test.ok(tz.zonesOfCountry("C5"),  "Zones array should be returned for Country C5");

		test.ok(tz.zonesOfCountry("C5"),  "2. Zones array should be returned for Country C5");
		test.done();
	}
};

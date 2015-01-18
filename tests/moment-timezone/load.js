"use strict";

var tz = require("../../").tz;

var DATA = {
	version : 'test0',
	zones : [
		"SomeZone/Pacific|PST PDT|70 80|010101|gE 1E 2k 1E 2k",
		"SomeZone/Eastern|EST EDT|50 60|010101|rE 1E 2k 1E 2k"
	],
	links : [
		"SomeZone/Los_Angles|SomeZone/Pacific",
		"SomeZone/New_York|SomeZone/Eastern"
	],
	countries : [
		"C1|Country_1|SomeZone/Pacific",
		"C2|Country_2|SomeZone/Eastern"
	] 
};

exports.load = {
	load : function (test) {
		tz.load(DATA);

		test.ok(tz.zone('SomeZone/Pacific'), "Should have data loaded from zones array");
		test.ok(tz.zone('SomeZone/Eastern'), "Should have data loaded from zones array");

		test.ok(tz.zone('SomeZone/Los_Angles'), "Should have data loaded from links array");
		test.ok(tz.zone('SomeZone/New_York'), "Should have data loaded from links array");

		test.ok(tz.country('C1'), "Should have country data loaded from countries array");
		test.ok(tz.country('C2'), "Should have country data loaded from countries array");

		test.equal(tz.dataVersion, 'test0', "Should set the moment.tz.dataVersion based on the version property");

		test.done();
	}
};

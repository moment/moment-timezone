"use strict";

var tz = require("../../index").tz;

function clearObject (obj) {
	var key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			delete obj[key];
		}
	}
}

exports.names = {
	setUp : function (done) {
		clearObject(tz._links);
		clearObject(tz._zones);
		clearObject(tz._names);
		done();
	},

	gettingNames : function (test) {
		test.ok(!tz.zone('Zone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('Zone2'),  "Zones should have been reset.");
		test.ok(!tz.zone('Zone3'),  "Zones should have been reset.");
		test.ok(!tz._zones.zone1,   "Zones should have been reset.");
		test.ok(!tz._zones.zone2,   "Zones should have been reset.");
		test.ok(!tz._zones.zone3,   "Zones should have been reset.");

		test.deepEqual(tz.names(), [], "There should be no zones by default.");

		tz.add("Zone1|ASDF|0|0|0");

		test.deepEqual(tz.names(), ["Zone1"], "Adding a Zone should be reflected in .names().");

		tz.add("Zone2|ASDF|0|0|0");

		test.deepEqual(tz.names(), ["Zone1", "Zone2"], "Adding a Zone should be reflected in .names().");

		tz.add("Zone3|ASDF|0|0|0");

		test.deepEqual(tz.names(), ["Zone1", "Zone2", "Zone3"], "Adding a Zone should be reflected in .names().");

		test.done();
	},

	sorting : function (test) {
		test.ok(!tz.zone('AZone1'),  "Zones should have been reset.");
		test.ok(!tz.zone('BZone2'),  "Zones should have been reset.");
		test.ok(!tz.zone('CZone3'),  "Zones should have been reset.");
		test.ok(!tz._zones.azone1,   "Zones should have been reset.");
		test.ok(!tz._zones.bzone2,   "Zones should have been reset.");
		test.ok(!tz._zones.czone3,   "Zones should have been reset.");

		test.deepEqual(tz.names(), [], "There should be no zones by default.");

		tz.add([
			"CZone3|ASDF|0|0|0",
			"BZone2|ASDF|0|0|0"
		]);

		test.deepEqual(tz.names(), ["BZone2", "CZone3"], "Zone names should always be sorted.");

		tz.add("AZone1|ASDF|0|0|0");

		test.deepEqual(tz.names(), ["AZone1", "BZone2", "CZone3"], "Zone names should always be sorted.");

		test.done();
	}
};

"use strict";

var tz = require("../../").tz;

// gE = 1000; 1E = 100; 2k = 140
var PACKED = "SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k";

exports.zone = {
	adding : function (test) {
		tz.add(PACKED);

		var zone = tz.zone("SomeZone");

		test.ok(zone, "Add a zone with tz.add(string) and get it back with tz.zone(name).");
		test.equal(zone.name, "SomeZone", "Should unpack name onto .name property.");
		test.deepEqual(zone.abbrs, ["TIM", "TAM", "IAM", "TAM", "TIM", "TAM"], "Should unpack abbrs onto .abbrs property.");
		test.deepEqual(zone.offsets, [360.5, 300, 360, 300, 360.5, 300], "Should unpack offsets onto .offsets property.");
		test.deepEqual(zone.untils, [
			1000 * 60000,
			1100 * 60000,
			1240 * 60000,
			1340 * 60000,
			1480 * 60000,
			Infinity
		], "Should unpack untils onto .untils property.");

		test.done();
	},

	caching : function (test) {
		tz._zones.somezone = undefined;

		test.equal(tz.zone("SomeZone"), null, "If moment.tz._zones does not have an zone, tz.zone(name) should return null.");

		tz.add(PACKED);

		test.ok(tz.zone("SomeZone"), "Should be able to add and retrieve a zone.");
		test.ok(tz._zones.somezone, "The cache should be updated when adding a zone.");

		test.done();
	}
};

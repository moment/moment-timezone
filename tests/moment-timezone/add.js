"use strict";

var moment = require("../../"),
	tz = moment.tz;

exports.add = {
	adding : function (test) {
		// gE = 1000; 1E = 100; 2k = 140
		tz.add("SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k|TA TB");

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

	addingMany : function (test) {
		tz.add([
			"AddingMany/Test1|QWE RTY|60 30|0101|-30 10 8|TA",
			"AddingMany/Test2|QWE RTY|60 30|1010|-30 10 8|TB",
			"AddingMany/Test3|QWE RTY|60 30|0101|-30 10 8|TC"
		]);
		tz.add("AddingMany/Test4|QWE RTY|60 30|0101|-30 10 8");

		test.ok(tz.zone("AddingMany/Test1"), "Should be able to add items in an array of strings.");
		test.ok(tz.zone("AddingMany/Test2"), "Should be able to add items in an array of strings.");
		test.ok(tz.zone("AddingMany/Test3"), "Should be able to add items in an array of strings.");
		test.ok(tz.zone("AddingMany/Test4"), "Should be able to add an item in a single string.");

		test.done();
	},

	caching : function (test) {
		tz._zones.somezone = undefined;

		test.equal(tz.zone("SomeZone"), null, "If moment.tz._zones does not have an zone, tz.zone(name) should return null.");

		// gE = 1000; 1E = 100; 2k = 140
		tz.add("SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k|SC");

		test.ok(tz.zone("SomeZone"), "Should be able to add and retrieve a zone.");
		test.ok(tz._zones.somezone, "The cache should be updated when adding a zone.");

		test.done();
	},

	caseInsensitive : function (test) {
		tz.add("CASE_INSENSITIVE|ASD|60|0|234|TA");

		test.ok(tz.zone('case_insensitive'), "getting zones should not be case sensitive.");
		test.ok(tz.zone('Case_Insensitive'), "getting zones should not be case sensitive.");
		test.ok(tz.zone('case/insensitive'), "getting zones should not differentiate between _ and /.");

		tz.add("Case/Insens_Itive2|ASD|60|0|234|TA");

		test.ok(tz.zone('CASE_insens_itive2'), "getting zones should not be case sensitive.");
		test.ok(tz.zone('case_insens_itive2'), "getting zones should not be case sensitive.");
		test.ok(tz.zone('Case_Insens_itive2'), "getting zones should not be case sensitive.");
		test.ok(tz.zone('case/insens/itive2'), "getting zones should not differentiate between _ and /.");

		test.done();
	},

	missingZone : function (test) {
		if (typeof console === 'undefined') {
			test.done();
			return;
		}

		var oldError = console.error,
			errors = '';

		console.error = function (message) {
			errors += message;
		};

		moment().tz('Not_A/Loaded_Zone');

		test.equal(errors, "Moment Timezone has no data for Not_A/Loaded_Zone. See http://momentjs.com/timezone/docs/#/data-loading/.");

		errors = '';

		tz('Another/Unloaded_Zone');

		test.equal(errors, "Moment Timezone has no data for Another/Unloaded_Zone. See http://momentjs.com/timezone/docs/#/data-loading/.");

		console.error = oldError;

		test.done();
	}
};

"use strict";

var tz = require("../../").tz;

// gE = 1000; 1E = 100; 2k = 140
var PACKED = "SomeZone|TIM TAM IAM|60.u 50 60|012101|gE 1E 2k 1E 2k";

var moveAmbiguousForward, moveInvalidForward;

exports.zone = {
	setUp : function (done) {
		moveAmbiguousForward = tz.moveAmbiguousForward;
		moveInvalidForward = tz.moveInvalidForward;
		done();
	},

	tearDown : function (done) {
		tz.moveAmbiguousForward = moveAmbiguousForward;
		tz.moveInvalidForward = moveInvalidForward;
		done();
	},

	construct : function (test) {
		var zone = new tz.Zone(PACKED);

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

	offsetChanges: function(test) {
		var zone = new tz.Zone(PACKED),
		  from = 1200 * 60000,
		  to =  1400 * 60000,
		  expected = [ 1240 * 60000, 1340 * 60000 ];
		test.deepEqual(zone.offsetChanges(from, to), expected, "The offsetChanges from " + from + "to" + to + "  should be " + expected);
		from = 0;
		expected = [ 1000 * 60000, 1100 * 60000, 1240 * 60000, 1340 * 60000 ];
		test.deepEqual(zone.offsetChanges(from, to), expected, "The offsetChanges from " + from + "to" + to + "  should be " + expected);
		to = 1500 * 60000;
		expected = [ 1000 * 60000, 1100 * 60000, 1240 * 60000, 1340 * 60000, 1480 * 60000 ];
		test.deepEqual(zone.offsetChanges(from, to), expected, "The offsetChanges from " + from + "to" + to + "  should be " + expected);
		test.done();
	},

	offsetNext: function(test) {
		var zone = new tz.Zone(PACKED),
		  timestamp = 1050 * 60000,
		  expected = 1100 * 60000;
		test.equal(zone.offsetNext(timestamp), expected, "The offsetNext of " + timestamp + " should be " + expected);
		timestamp = 1150 * 60000;
		expected = 1240 * 60000;
		test.equal(zone.offsetNext(timestamp), expected, "The offsetNext of " + timestamp + " should be " + expected);
		test.done();
	},

	offsetPrevious: function(test) {
		var zone = new tz.Zone(PACKED),
		  timestamp = 1050 * 60000,
		  expected = 1000 * 60000;
		test.equal(zone.offsetPrevious(timestamp), expected, "The offsetNext of " + timestamp + " should be " + expected);
		timestamp = 1150 * 60000;
		expected = 1100 * 60000;
		test.equal(zone.offsetPrevious(timestamp), expected, "The offsetNext of " + timestamp + " should be " + expected);
		test.done();
	},

	abbr : function (test) {
		var zone = new tz.Zone(PACKED),
			tests = [
				[-999 * 60000, "TIM"],
				[ 999 * 60000, "TIM"],
				[1000 * 60000, "TAM"],
				[1099 * 60000, "TAM"],
				[1100 * 60000, "IAM"],
				[1239 * 60000, "IAM"],
				[1240 * 60000, "TAM"],
				[1339 * 60000, "TAM"],
				[1340 * 60000, "TIM"],
				[1479 * 60000, "TIM"],
				[1480 * 60000, "TAM"],
				[3000 * 60000, "TAM"]
			], i, source, expected;

		for (i = 0; i < tests.length; i++) {
			source = tests[i][0];
			expected = tests[i][1];
			test.equal(zone.abbr(source), expected, "The abbr for " + source + " should be " + expected);
		}

		test.done();
	},

	offset : function (test) {
		var zone = new tz.Zone(PACKED),
			tests = [
				[-999 * 60000, 360.5],
				[ 999 * 60000, 360.5],
				[1000 * 60000, 300],
				[1099 * 60000, 300],
				[1100 * 60000, 360],
				[1239 * 60000, 360],
				[1240 * 60000, 300],
				[1339 * 60000, 300],
				[1340 * 60000, 360.5],
				[1479 * 60000, 360.5],
				[1480 * 60000, 300],
				[3000 * 60000, 300]
			], i, source, expected;

		for (i = 0; i < tests.length; i++) {
			source = tests[i][0];
			expected = tests[i][1];
			test.equal(zone.offset(source), expected, "The offset for " + source + " should be " + expected);
		}

		test.done();
	},

	_index : function (test) {
		var zone = new tz.Zone(PACKED),
			tests = [
				[-999 * 60000, 0],
				[ 999 * 60000, 0],
				[1000 * 60000, 1],
				[1099 * 60000, 1],
				[1100 * 60000, 2],
				[1239 * 60000, 2],
				[1240 * 60000, 3],
				[1339 * 60000, 3],
				[1340 * 60000, 4],
				[1479 * 60000, 4],
				[1480 * 60000, 5],
				[3000 * 60000, 5]
			], i, source, expected;

		for (i = 0; i < tests.length; i++) {
			source = tests[i][0];
			expected = tests[i][1];
			test.equal(zone._index(source), expected, "The _index for " + source + " should be " + expected);
		}

		test.done();
	},

	parse : function (test) {
		var zone = new tz.Zone(PACKED),
			tests = [
				[( 999 - 360.5) * 60000, 360.5],
				[(1000 - 360.5) * 60000, 300],

				[(1099 - 300)   * 60000, 300],
				[(1100 - 300)   * 60000, 360],

				[(1239 - 360)   * 60000, 360],
				[(1240 - 360)   * 60000, 300],

				[(1339 - 300)   * 60000, 300],
				[(1340 - 300)   * 60000, 360.5],

				[(1479 - 360.5) * 60000, 360.5],
				[(1480 - 360.5) * 60000, 300]
			], i, source, expected;

		tz.moveInvalidForward = false;

		for (i = 0; i < tests.length; i++) {
			source = tests[i][0];
			expected = tests[i][1];
			test.equal(zone.parse(source), expected, "The parse for " + source + " should be " + expected);
		}

		test.done();
	}
};

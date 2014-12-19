"use strict";

var moment = require("../../index");
var helpers = require("../helpers/helpers");

var Los_Angeles = "America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp0 1Vb0 3dB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0";
var New_York    = "America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0";

var moveAmbiguousForward, moveInvalidForward;

exports.parse = {
	setUp : function (done) {
		moment.tz.add([Los_Angeles, New_York]);

		moveAmbiguousForward = moment.tz.moveAmbiguousForward;
		moveInvalidForward = moment.tz.moveInvalidForward;
		done();
	},

	tearDown : function (done) {
		moment.tz.moveAmbiguousForward = moveAmbiguousForward;
		moment.tz.moveInvalidForward = moveInvalidForward;
		done();
	},

	"default states" : function (t) {
		t.ok(moment.tz.moveInvalidForward,    "Should default to moving invalid input forward");
		t.ok(!moment.tz.moveAmbiguousForward, "Should default to moving ambiguous input backward");

		t.done();
	},

	"invalid input - moveInvalidForward = false - Los Angeles" : function (t) {
		moment.tz.moveInvalidForward = false;

		// the hour from 2am to 3am does not exist on March 11 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0],   "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0],   "America/Los_Angeles");

		t.equal( before.format("HH mm ss Z"), "01 59 59 -08:00", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -08:00", "During the lost hour, the time should roll back to the previous time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -08:00", "During the lost hour, the time should roll back to the previous time");
		t.equal(  after.format("HH mm ss Z"), "03 00 00 -07:00",  "After the lost hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -480, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atStart), -480, "During the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -480, "During the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(after),   -420,  "After the lost hour, the offset should match the dst offset");

		t.done();
	},

	"invalid input - moveInvalidForward = false - New York" : function (t) {
		moment.tz.moveInvalidForward = false;

		// the hour from 2am to 3am does not exist on March 11 2011 in America/New_York
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0], "America/New_York");

		t.equal( before.format("HH mm ss Z"), "01 59 59 -05:00", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -05:00", "During the lost hour, the time should roll back to the previous time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -05:00", "During the lost hour, the time should roll back to the previous time");
		t.equal(  after.format("HH mm ss Z"), "03 00 00 -04:00",  "After the lost hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -300, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atStart), -300, "During the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -300, "During the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(after),   -240,  "After the lost hour, the offset should match the dst offset");

		t.done();
	},

	"invalid input - moveInvalidForward = true - Los Angeles" : function (t) {
		// moment.tz.moveInvalidForward = true; Should default to true

		// the hour from 2am to 3am does not exist on March 11 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0],   "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0],   "America/Los_Angeles");

		t.equal( before.format("HH mm ss Z"), "01 59 59 -08:00", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "03 00 00 -07:00", "During the lost hour, the time should roll forward to the previous time");
		t.equal(  atEnd.format("HH mm ss Z"), "03 59 59 -07:00", "During the lost hour, the time should roll forward to the previous time");
		t.equal(  after.format("HH mm ss Z"), "03 00 00 -07:00",  "After the lost hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -480, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atStart), -420, "During the lost hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -420, "During the lost hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(after),   -420,  "After the lost hour, the offset should match the dst offset");

		t.done();
	},

	"invalid input - moveInvalidForward = true - New York" : function (t) {
		// moment.tz.moveInvalidForward = true; Should default to true

		// the hour from 2am to 3am does not exist on March 11 2011 in America/New_York
		var before  = moment.tz([2012, 2, 11, 1, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 2, 11, 2, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 2, 11, 2, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 2, 11, 3, 0, 0], "America/New_York");

		t.equal( before.format("HH mm ss Z"), "01 59 59 -05:00", "Before the lost hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "03 00 00 -04:00", "During the lost hour, the time should roll forward to the previous time");
		t.equal(  atEnd.format("HH mm ss Z"), "03 59 59 -04:00", "During the lost hour, the time should roll forward to the previous time");
		t.equal(  after.format("HH mm ss Z"), "03 00 00 -04:00",  "After the lost hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -300, "Before the lost hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atStart), -240, "During the lost hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -240, "During the lost hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(after),   -240,  "After the lost hour, the offset should match the dst offset");

		t.done();
	},

	"ambiguous input - moveAmbiguousForward = false - Los Angeles" : function (t) {
		// moment.tz.moveAmbiguousForward = false; Should default to false

		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/Los_Angeles");

		t.equal( before.format("HH mm ss Z"), "00 59 59 -07:00", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -07:00", "During the duplicated hour, the time should match the earlier input time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -07:00", "During the duplicated hour, the time should match the earlier input time");
		t.equal(  after.format("HH mm ss Z"), "02 00 00 -08:00",  "After the duplicated hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -420, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atStart), -420, "During the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -420, "During the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(after),   -480,  "After the duplicated hour, the offset should match the non-dst offset");

		t.done();
	},

	"ambiguous input - moveAmbiguousForward = false - New York" : function (t) {
		// moment.tz.moveAmbiguousForward = false; Should default to false

		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/New_York");

		t.equal( before.format("HH mm ss Z"), "00 59 59 -04:00", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -04:00", "During the duplicated hour, the time should match the earlier input time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -04:00", "During the duplicated hour, the time should match the earlier input time");
		t.equal(  after.format("HH mm ss Z"), "02 00 00 -05:00",  "After the duplicated hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -240, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atStart), -240, "During the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -240, "During the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(after),   -300,  "After the duplicated hour, the offset should match the non-dst offset");

		t.done();
	},

	"ambiguous input - moveAmbiguousForward = true - Los Angeles" : function (t) {
		moment.tz.moveAmbiguousForward = true;

		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/Los_Angeles"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/Los_Angeles"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/Los_Angeles"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/Los_Angeles");

		t.equal( before.format("HH mm ss Z"), "00 59 59 -07:00", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -08:00", "During the duplicated hour, the time should match the later input time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -08:00", "During the duplicated hour, the time should match the later input time");
		t.equal(  after.format("HH mm ss Z"), "02 00 00 -08:00",  "After the duplicated hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -420, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atStart), -480, "During the duplicated hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -480, "During the duplicated hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(after),   -480,  "After the duplicated hour, the offset should match the non-dst offset");

		t.done();
	},

	"ambiguous input - moveAmbiguousForward = true - New York" : function (t) {
		moment.tz.moveAmbiguousForward = true;

		// the hour from 1am to 2am happens twice on Nov 4 2011 in America/Los_Angeles
		var before  = moment.tz([2012, 10, 4, 0, 59, 59], "America/New_York"),
			atStart = moment.tz([2012, 10, 4, 1, 0, 0], "America/New_York"),
			atEnd   = moment.tz([2012, 10, 4, 1, 59, 59], "America/New_York"),
			after   = moment.tz([2012, 10, 4, 2, 0, 0], "America/New_York");

		t.equal( before.format("HH mm ss Z"), "00 59 59 -04:00", "Before the duplicated hour, the time should match the input time");
		t.equal(atStart.format("HH mm ss Z"), "01 00 00 -05:00", "During the duplicated hour, the time should match the later input time");
		t.equal(  atEnd.format("HH mm ss Z"), "01 59 59 -05:00", "During the duplicated hour, the time should match the later input time");
		t.equal(  after.format("HH mm ss Z"), "02 00 00 -05:00",  "After the duplicated hour, the time should match the input time");

		t.equal(helpers.getUTCOffset(before),  -240, "Before the duplicated hour, the offset should match the dst offset");
		t.equal(helpers.getUTCOffset(atStart), -300, "During the duplicated hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(atEnd),   -300, "During the duplicated hour, the offset should match the non-dst offset");
		t.equal(helpers.getUTCOffset(after),   -300,  "After the duplicated hour, the offset should match the non-dst offset");

		t.done();
	},

	"check needsOffset in moment.tz" : function (t) {
		var name = "America/Los_Angeles",
			tests = [
				[moment.tz([2012, 5, 1], name),                "2012-06-01 00:00:00 -07:00", "[2012, 5, 1]"],
				[moment.tz("2012-06-01", name),                "2012-06-01 00:00:00 -07:00", "2012-06-01"],
				[moment.tz("2012-06-01 07:00:00+00:00", name), "2012-06-01 00:00:00 -07:00", "2012-06-01 00:00:00+00:00"],
				[moment.tz(1338534000000, name),               "2012-06-01 00:00:00 -07:00", "1338534000000"],
				[moment.tz(new Date(1338534000000), name),     "2012-06-01 00:00:00 -07:00", "new Date(1338534000000)"],
				[moment.tz({y : 2012, M : 5, d : 1}, name),    "2012-06-01 00:00:00 -07:00", "{y : 2012, M : 5, d : 1}"]
			], i, actual, message, expected;

		for (i = 0; i < tests.length; i++) {
			actual   = tests[i][0].format('YYYY-MM-DD HH:mm:ss Z');
			expected = tests[i][1];
			message  = tests[i][2];
			t.equal(actual, expected, "Parsing " + message + " in America/Los_Angeles should equal " + expected);
		}

		t.done();
	}
};

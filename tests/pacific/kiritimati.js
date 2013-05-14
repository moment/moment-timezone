var moment = require("../../index");

exports["Pacific/Kiritimati"] = {

	"1979" : function (t) {
		t.equal(moment("1979-10-01T10:39:59+00:00").tz("Pacific/Kiritimati").format("HH:mm:ss"), "23:59:59", "1979-10-01T10:39:59+00:00 should be 23:59:59 LINT");
		t.equal(moment("1979-10-01T10:40:00+00:00").tz("Pacific/Kiritimati").format("HH:mm:ss"), "00:40:00", "1979-10-01T10:40:00+00:00 should be 00:40:00 LINT");

		t.equal(moment("1979-10-01T10:39:59+00:00").tz("Pacific/Kiritimati").zone(), 640, "1979-10-01T10:39:59+00:00 should be 640 minutes offset in LINT");
		t.equal(moment("1979-10-01T10:40:00+00:00").tz("Pacific/Kiritimati").zone(), 600, "1979-10-01T10:40:00+00:00 should be 600 minutes offset in LINT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-01-01T09:59:59+00:00").tz("Pacific/Kiritimati").format("HH:mm:ss"), "23:59:59", "1995-01-01T09:59:59+00:00 should be 23:59:59 LINT");
		t.equal(moment("1995-01-01T10:00:00+00:00").tz("Pacific/Kiritimati").format("HH:mm:ss"), "00:00:00", "1995-01-01T10:00:00+00:00 should be 00:00:00 LINT");

		t.equal(moment("1995-01-01T09:59:59+00:00").tz("Pacific/Kiritimati").zone(), 600, "1995-01-01T09:59:59+00:00 should be 600 minutes offset in LINT");
		t.equal(moment("1995-01-01T10:00:00+00:00").tz("Pacific/Kiritimati").zone(), -840, "1995-01-01T10:00:00+00:00 should be -840 minutes offset in LINT");

		t.done();
	}
};
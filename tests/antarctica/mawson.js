var moment = require("../../moment-timezone");

exports["Antarctica/Mawson"] = {

	"1954" : function (t) {
		t.equal(moment("1954-02-12T23:59:59+00:00").tz("Antarctica/Mawson").format("HH:mm:ss"), "23:59:59", "1954-02-12T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1954-02-13T00:00:00+00:00").tz("Antarctica/Mawson").format("HH:mm:ss"), "06:00:00", "1954-02-13T00:00:00+00:00 should be 06:00:00 MAWT");

		t.equal(moment("1954-02-12T23:59:59+00:00").tz("Antarctica/Mawson").zone(), 0, "1954-02-12T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1954-02-13T00:00:00+00:00").tz("Antarctica/Mawson").zone(), -360, "1954-02-13T00:00:00+00:00 should be -360 minutes offset in MAWT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-10-17T19:59:59+00:00").tz("Antarctica/Mawson").format("HH:mm:ss"), "01:59:59", "2009-10-17T19:59:59+00:00 should be 01:59:59 MAWT");
		t.equal(moment("2009-10-17T20:00:00+00:00").tz("Antarctica/Mawson").format("HH:mm:ss"), "01:00:00", "2009-10-17T20:00:00+00:00 should be 01:00:00 MAWT");

		t.equal(moment("2009-10-17T19:59:59+00:00").tz("Antarctica/Mawson").zone(), -360, "2009-10-17T19:59:59+00:00 should be -360 minutes offset in MAWT");
		t.equal(moment("2009-10-17T20:00:00+00:00").tz("Antarctica/Mawson").zone(), -300, "2009-10-17T20:00:00+00:00 should be -300 minutes offset in MAWT");

		t.done();
	}
};
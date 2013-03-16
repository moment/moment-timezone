var moment = require("../../moment-timezone");

exports["Indian/Mauritius"] = {

	"1906" : function (t) {
		t.equal(moment("1906-12-31T20:09:59+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "23:59:59", "1906-12-31T20:09:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1906-12-31T20:10:00+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "00:10:00", "1906-12-31T20:10:00+00:00 should be 00:10:00 MUT");

		t.equal(moment("1906-12-31T20:09:59+00:00").tz("Indian/Mauritius").zone(), -230, "1906-12-31T20:09:59+00:00 should be -230 minutes offset in LMT");
		t.equal(moment("1906-12-31T20:10:00+00:00").tz("Indian/Mauritius").zone(), -240, "1906-12-31T20:10:00+00:00 should be -240 minutes offset in MUT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-10-09T19:59:59+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "23:59:59", "1982-10-09T19:59:59+00:00 should be 23:59:59 MUT");
		t.equal(moment("1982-10-09T20:00:00+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "01:00:00", "1982-10-09T20:00:00+00:00 should be 01:00:00 MUST");

		t.equal(moment("1982-10-09T19:59:59+00:00").tz("Indian/Mauritius").zone(), -240, "1982-10-09T19:59:59+00:00 should be -240 minutes offset in MUT");
		t.equal(moment("1982-10-09T20:00:00+00:00").tz("Indian/Mauritius").zone(), -300, "1982-10-09T20:00:00+00:00 should be -300 minutes offset in MUST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-20T18:59:59+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "23:59:59", "1983-03-20T18:59:59+00:00 should be 23:59:59 MUST");
		t.equal(moment("1983-03-20T19:00:00+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "23:00:00", "1983-03-20T19:00:00+00:00 should be 23:00:00 MUT");

		t.equal(moment("1983-03-20T18:59:59+00:00").tz("Indian/Mauritius").zone(), -300, "1983-03-20T18:59:59+00:00 should be -300 minutes offset in MUST");
		t.equal(moment("1983-03-20T19:00:00+00:00").tz("Indian/Mauritius").zone(), -240, "1983-03-20T19:00:00+00:00 should be -240 minutes offset in MUT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-10-25T21:59:59+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "01:59:59", "2008-10-25T21:59:59+00:00 should be 01:59:59 MUT");
		t.equal(moment("2008-10-25T22:00:00+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "03:00:00", "2008-10-25T22:00:00+00:00 should be 03:00:00 MUST");

		t.equal(moment("2008-10-25T21:59:59+00:00").tz("Indian/Mauritius").zone(), -240, "2008-10-25T21:59:59+00:00 should be -240 minutes offset in MUT");
		t.equal(moment("2008-10-25T22:00:00+00:00").tz("Indian/Mauritius").zone(), -300, "2008-10-25T22:00:00+00:00 should be -300 minutes offset in MUST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T20:59:59+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "01:59:59", "2009-03-28T20:59:59+00:00 should be 01:59:59 MUST");
		t.equal(moment("2009-03-28T21:00:00+00:00").tz("Indian/Mauritius").format("HH:mm:ss"), "01:00:00", "2009-03-28T21:00:00+00:00 should be 01:00:00 MUT");

		t.equal(moment("2009-03-28T20:59:59+00:00").tz("Indian/Mauritius").zone(), -300, "2009-03-28T20:59:59+00:00 should be -300 minutes offset in MUST");
		t.equal(moment("2009-03-28T21:00:00+00:00").tz("Indian/Mauritius").zone(), -240, "2009-03-28T21:00:00+00:00 should be -240 minutes offset in MUT");

		t.done();
	}
};
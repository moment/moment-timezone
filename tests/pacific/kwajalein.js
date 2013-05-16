var moment = require("../../index");

exports["Pacific/Kwajalein"] = {

	"1969" : function (t) {
		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Kwajalein").format("HH:mm:ss"), "23:59:59", "1969-09-30T12:59:59+00:00 should be 23:59:59 MHT");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Kwajalein").format("HH:mm:ss"), "01:00:00", "1969-09-30T13:00:00+00:00 should be 01:00:00 KWAT");

		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Kwajalein").zone(), -660, "1969-09-30T12:59:59+00:00 should be -660 minutes offset in MHT");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Kwajalein").zone(), 720, "1969-09-30T13:00:00+00:00 should be 720 minutes offset in KWAT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-08-20T11:59:59+00:00").tz("Pacific/Kwajalein").format("HH:mm:ss"), "23:59:59", "1993-08-20T11:59:59+00:00 should be 23:59:59 KWAT");
		t.equal(moment("1993-08-20T12:00:00+00:00").tz("Pacific/Kwajalein").format("HH:mm:ss"), "00:00:00", "1993-08-20T12:00:00+00:00 should be 00:00:00 MHT");

		t.equal(moment("1993-08-20T11:59:59+00:00").tz("Pacific/Kwajalein").zone(), 720, "1993-08-20T11:59:59+00:00 should be 720 minutes offset in KWAT");
		t.equal(moment("1993-08-20T12:00:00+00:00").tz("Pacific/Kwajalein").zone(), -720, "1993-08-20T12:00:00+00:00 should be -720 minutes offset in MHT");

		t.done();
	}
};
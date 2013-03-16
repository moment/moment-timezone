var moment = require("../../moment-timezone");

exports["Pacific/Majuro"] = {

	"1969" : function (t) {
		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Majuro").format("HH:mm:ss"), "23:59:59", "1969-09-30T12:59:59+00:00 should be 23:59:59 MHT");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Majuro").format("HH:mm:ss"), "01:00:00", "1969-09-30T13:00:00+00:00 should be 01:00:00 MHT");

		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Majuro").zone(), -660, "1969-09-30T12:59:59+00:00 should be -660 minutes offset in MHT");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Majuro").zone(), -720, "1969-09-30T13:00:00+00:00 should be -720 minutes offset in MHT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Pacific/Enderbury"] = {

	"1979" : function (t) {
		t.equal(moment("1979-10-01T11:59:59+00:00").tz("Pacific/Enderbury").format("HH:mm:ss"), "23:59:59", "1979-10-01T11:59:59+00:00 should be 23:59:59 PHOT");
		t.equal(moment("1979-10-01T12:00:00+00:00").tz("Pacific/Enderbury").format("HH:mm:ss"), "01:00:00", "1979-10-01T12:00:00+00:00 should be 01:00:00 PHOT");

		t.equal(moment("1979-10-01T11:59:59+00:00").tz("Pacific/Enderbury").zone(), 720, "1979-10-01T11:59:59+00:00 should be 720 minutes offset in PHOT");
		t.equal(moment("1979-10-01T12:00:00+00:00").tz("Pacific/Enderbury").zone(), 660, "1979-10-01T12:00:00+00:00 should be 660 minutes offset in PHOT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-01-01T10:59:59+00:00").tz("Pacific/Enderbury").format("HH:mm:ss"), "23:59:59", "1995-01-01T10:59:59+00:00 should be 23:59:59 PHOT");
		t.equal(moment("1995-01-01T11:00:00+00:00").tz("Pacific/Enderbury").format("HH:mm:ss"), "00:00:00", "1995-01-01T11:00:00+00:00 should be 00:00:00 PHOT");

		t.equal(moment("1995-01-01T10:59:59+00:00").tz("Pacific/Enderbury").zone(), 660, "1995-01-01T10:59:59+00:00 should be 660 minutes offset in PHOT");
		t.equal(moment("1995-01-01T11:00:00+00:00").tz("Pacific/Enderbury").zone(), -780, "1995-01-01T11:00:00+00:00 should be -780 minutes offset in PHOT");

		t.done();
	}
};
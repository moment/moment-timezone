var moment = require("../../moment-timezone");

exports["Pacific/Kosrae"] = {

	"1969" : function (t) {
		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Kosrae").format("HH:mm:ss"), "23:59:59", "1969-09-30T12:59:59+00:00 should be 23:59:59 KOST");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Kosrae").format("HH:mm:ss"), "01:00:00", "1969-09-30T13:00:00+00:00 should be 01:00:00 KOST");

		t.equal(moment("1969-09-30T12:59:59+00:00").tz("Pacific/Kosrae").zone(), -660, "1969-09-30T12:59:59+00:00 should be -660 minutes offset in KOST");
		t.equal(moment("1969-09-30T13:00:00+00:00").tz("Pacific/Kosrae").zone(), -720, "1969-09-30T13:00:00+00:00 should be -720 minutes offset in KOST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-12-31T11:59:59+00:00").tz("Pacific/Kosrae").format("HH:mm:ss"), "23:59:59", "1998-12-31T11:59:59+00:00 should be 23:59:59 KOST");
		t.equal(moment("1998-12-31T12:00:00+00:00").tz("Pacific/Kosrae").format("HH:mm:ss"), "23:00:00", "1998-12-31T12:00:00+00:00 should be 23:00:00 KOST");

		t.equal(moment("1998-12-31T11:59:59+00:00").tz("Pacific/Kosrae").zone(), -720, "1998-12-31T11:59:59+00:00 should be -720 minutes offset in KOST");
		t.equal(moment("1998-12-31T12:00:00+00:00").tz("Pacific/Kosrae").zone(), -660, "1998-12-31T12:00:00+00:00 should be -660 minutes offset in KOST");

		t.done();
	}
};
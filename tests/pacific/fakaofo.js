var moment = require("../../index");

exports["Pacific/Fakaofo"] = {

	"2011" : function (t) {
		t.equal(moment("2011-12-30T10:59:59+00:00").tz("Pacific/Fakaofo").format("HH:mm:ss"), "23:59:59", "2011-12-30T10:59:59+00:00 should be 23:59:59 TKT");
		t.equal(moment("2011-12-30T11:00:00+00:00").tz("Pacific/Fakaofo").format("HH:mm:ss"), "00:00:00", "2011-12-30T11:00:00+00:00 should be 00:00:00 TKT");

		t.equal(moment("2011-12-30T10:59:59+00:00").tz("Pacific/Fakaofo").zone(), 660, "2011-12-30T10:59:59+00:00 should be 660 minutes offset in TKT");
		t.equal(moment("2011-12-30T11:00:00+00:00").tz("Pacific/Fakaofo").zone(), -780, "2011-12-30T11:00:00+00:00 should be -780 minutes offset in TKT");

		t.done();
	}
};
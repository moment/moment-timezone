var moment = require("../../index");

exports["Pacific/Guadalcanal"] = {

	"1912" : function (t) {
		t.equal(moment("1912-09-30T13:20:11+00:00").tz("Pacific/Guadalcanal").format("HH:mm:ss"), "23:59:59", "1912-09-30T13:20:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-09-30T13:20:12+00:00").tz("Pacific/Guadalcanal").format("HH:mm:ss"), "00:20:12", "1912-09-30T13:20:12+00:00 should be 00:20:12 SBT");

		t.equal(moment("1912-09-30T13:20:11+00:00").tz("Pacific/Guadalcanal").zone(), -38388 / 60, "1912-09-30T13:20:11+00:00 should be -38388 / 60 minutes offset in LMT");
		t.equal(moment("1912-09-30T13:20:12+00:00").tz("Pacific/Guadalcanal").zone(), -660, "1912-09-30T13:20:12+00:00 should be -660 minutes offset in SBT");

		t.done();
	}
};
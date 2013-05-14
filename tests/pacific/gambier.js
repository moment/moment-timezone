var moment = require("../../index");

exports["Pacific/Gambier"] = {

	"1912" : function (t) {
		t.equal(moment("1912-10-01T08:59:47+00:00").tz("Pacific/Gambier").format("HH:mm:ss"), "23:59:59", "1912-10-01T08:59:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-10-01T08:59:48+00:00").tz("Pacific/Gambier").format("HH:mm:ss"), "23:59:48", "1912-10-01T08:59:48+00:00 should be 23:59:48 GAMT");

		t.equal(moment("1912-10-01T08:59:47+00:00").tz("Pacific/Gambier").zone(), 32388 / 60, "1912-10-01T08:59:47+00:00 should be 32388 / 60 minutes offset in LMT");
		t.equal(moment("1912-10-01T08:59:48+00:00").tz("Pacific/Gambier").zone(), 540, "1912-10-01T08:59:48+00:00 should be 540 minutes offset in GAMT");

		t.done();
	}
};
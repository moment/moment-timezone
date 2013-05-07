var moment = require("../../moment-timezone");

exports["Pacific/Tahiti"] = {

	"1912" : function (t) {
		t.equal(moment("1912-10-01T09:58:15+00:00").tz("Pacific/Tahiti").format("HH:mm:ss"), "23:59:59", "1912-10-01T09:58:15+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-10-01T09:58:16+00:00").tz("Pacific/Tahiti").format("HH:mm:ss"), "23:58:16", "1912-10-01T09:58:16+00:00 should be 23:58:16 TAHT");

		t.equal(moment("1912-10-01T09:58:15+00:00").tz("Pacific/Tahiti").zone(), 35896 / 60, "1912-10-01T09:58:15+00:00 should be 35896 / 60 minutes offset in LMT");
		t.equal(moment("1912-10-01T09:58:16+00:00").tz("Pacific/Tahiti").zone(), 600, "1912-10-01T09:58:16+00:00 should be 600 minutes offset in TAHT");

		t.done();
	}
};
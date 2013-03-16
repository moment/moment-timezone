var moment = require("../../moment-timezone");

exports["Pacific/Marquesas"] = {

	"1912" : function (t) {
		t.equal(moment("1912-10-01T09:17:59+00:00").tz("Pacific/Marquesas").format("HH:mm:ss"), "23:59:59", "1912-10-01T09:17:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-10-01T09:18:00+00:00").tz("Pacific/Marquesas").format("HH:mm:ss"), "23:48:00", "1912-10-01T09:18:00+00:00 should be 23:48:00 MART");

		t.equal(moment("1912-10-01T09:17:59+00:00").tz("Pacific/Marquesas").zone(), 558, "1912-10-01T09:17:59+00:00 should be 558 minutes offset in LMT");
		t.equal(moment("1912-10-01T09:18:00+00:00").tz("Pacific/Marquesas").zone(), 570, "1912-10-01T09:18:00+00:00 should be 570 minutes offset in MART");

		t.done();
	}
};
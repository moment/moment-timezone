var moment = require("../../index");

exports["Africa/Blantyre"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T21:39:59+00:00").tz("Africa/Blantyre").format("HH:mm:ss"), "23:59:59", "1903-02-28T21:39:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T21:40:00+00:00").tz("Africa/Blantyre").format("HH:mm:ss"), "23:40:00", "1903-02-28T21:40:00+00:00 should be 23:40:00 CAT");

		t.equal(moment("1903-02-28T21:39:59+00:00").tz("Africa/Blantyre").zone(), -140, "1903-02-28T21:39:59+00:00 should be -140 minutes offset in LMT");
		t.equal(moment("1903-02-28T21:40:00+00:00").tz("Africa/Blantyre").zone(), -120, "1903-02-28T21:40:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
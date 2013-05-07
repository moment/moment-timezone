var moment = require("../../moment-timezone");

exports["Africa/Maputo"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T21:49:39+00:00").tz("Africa/Maputo").format("HH:mm:ss"), "23:59:59", "1903-02-28T21:49:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T21:49:40+00:00").tz("Africa/Maputo").format("HH:mm:ss"), "23:49:40", "1903-02-28T21:49:40+00:00 should be 23:49:40 CAT");

		t.equal(moment("1903-02-28T21:49:39+00:00").tz("Africa/Maputo").zone(), -7820 / 60, "1903-02-28T21:49:39+00:00 should be -7820 / 60 minutes offset in LMT");
		t.equal(moment("1903-02-28T21:49:40+00:00").tz("Africa/Maputo").zone(), -120, "1903-02-28T21:49:40+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
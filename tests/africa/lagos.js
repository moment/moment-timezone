var moment = require("../../moment-timezone");

exports["Africa/Lagos"] = {

	"1919" : function (t) {
		t.equal(moment("1919-08-31T23:46:23+00:00").tz("Africa/Lagos").format("HH:mm:ss"), "23:59:59", "1919-08-31T23:46:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-08-31T23:46:24+00:00").tz("Africa/Lagos").format("HH:mm:ss"), "00:46:24", "1919-08-31T23:46:24+00:00 should be 00:46:24 WAT");

		t.equal(moment("1919-08-31T23:46:23+00:00").tz("Africa/Lagos").zone(), -13, "1919-08-31T23:46:23+00:00 should be -13 minutes offset in LMT");
		t.equal(moment("1919-08-31T23:46:24+00:00").tz("Africa/Lagos").zone(), -60, "1919-08-31T23:46:24+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
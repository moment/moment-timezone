var moment = require("../../moment-timezone");

exports["Africa/Lusaka"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T22:06:51+00:00").tz("Africa/Lusaka").format("HH:mm:ss"), "23:59:59", "1903-02-28T22:06:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T22:06:52+00:00").tz("Africa/Lusaka").format("HH:mm:ss"), "00:06:52", "1903-02-28T22:06:52+00:00 should be 00:06:52 CAT");

		t.equal(moment("1903-02-28T22:06:51+00:00").tz("Africa/Lusaka").zone(), -6788 / 60, "1903-02-28T22:06:51+00:00 should be -6788 / 60 minutes offset in LMT");
		t.equal(moment("1903-02-28T22:06:52+00:00").tz("Africa/Lusaka").zone(), -120, "1903-02-28T22:06:52+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
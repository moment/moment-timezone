var moment = require("../../moment-timezone");

exports["Africa/Harare"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T21:55:47+00:00").tz("Africa/Harare").format("HH:mm:ss"), "23:59:59", "1903-02-28T21:55:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T21:55:48+00:00").tz("Africa/Harare").format("HH:mm:ss"), "23:55:48", "1903-02-28T21:55:48+00:00 should be 23:55:48 CAT");

		t.equal(moment("1903-02-28T21:55:47+00:00").tz("Africa/Harare").zone(), -7452 / 60, "1903-02-28T21:55:47+00:00 should be -7452 / 60 minutes offset in LMT");
		t.equal(moment("1903-02-28T21:55:48+00:00").tz("Africa/Harare").zone(), -120, "1903-02-28T21:55:48+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
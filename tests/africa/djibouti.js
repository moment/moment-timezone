var moment = require("../../moment-timezone");

exports["Africa/Djibouti"] = {

	"1911" : function (t) {
		t.equal(moment("1911-06-30T21:07:23+00:00").tz("Africa/Djibouti").format("HH:mm:ss"), "23:59:59", "1911-06-30T21:07:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-06-30T21:07:24+00:00").tz("Africa/Djibouti").format("HH:mm:ss"), "00:07:24", "1911-06-30T21:07:24+00:00 should be 00:07:24 EAT");

		t.equal(moment("1911-06-30T21:07:23+00:00").tz("Africa/Djibouti").zone(), -10356 / 60, "1911-06-30T21:07:23+00:00 should be -10356 / 60 minutes offset in LMT");
		t.equal(moment("1911-06-30T21:07:24+00:00").tz("Africa/Djibouti").zone(), -180, "1911-06-30T21:07:24+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
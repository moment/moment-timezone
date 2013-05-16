var moment = require("../../index");

exports["Asia/Dubai"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T20:18:47+00:00").tz("Asia/Dubai").format("HH:mm:ss"), "23:59:59", "1919-12-31T20:18:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T20:18:48+00:00").tz("Asia/Dubai").format("HH:mm:ss"), "00:18:48", "1919-12-31T20:18:48+00:00 should be 00:18:48 GST");

		t.equal(moment("1919-12-31T20:18:47+00:00").tz("Asia/Dubai").zone(), -13272 / 60, "1919-12-31T20:18:47+00:00 should be -13272 / 60 minutes offset in LMT");
		t.equal(moment("1919-12-31T20:18:48+00:00").tz("Asia/Dubai").zone(), -240, "1919-12-31T20:18:48+00:00 should be -240 minutes offset in GST");

		t.done();
	}
};
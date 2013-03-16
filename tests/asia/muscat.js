var moment = require("../../moment-timezone");

exports["Asia/Muscat"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T20:05:35+00:00").tz("Asia/Muscat").format("HH:mm:ss"), "23:59:59", "1919-12-31T20:05:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T20:05:36+00:00").tz("Asia/Muscat").format("HH:mm:ss"), "00:05:36", "1919-12-31T20:05:36+00:00 should be 00:05:36 GST");

		t.equal(moment("1919-12-31T20:05:35+00:00").tz("Asia/Muscat").zone(), -234, "1919-12-31T20:05:35+00:00 should be -234 minutes offset in LMT");
		t.equal(moment("1919-12-31T20:05:36+00:00").tz("Asia/Muscat").zone(), -240, "1919-12-31T20:05:36+00:00 should be -240 minutes offset in GST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Africa/Mbabane"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T21:55:35+00:00").tz("Africa/Mbabane").format("HH:mm:ss"), "23:59:59", "1903-02-28T21:55:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T21:55:36+00:00").tz("Africa/Mbabane").format("HH:mm:ss"), "23:55:36", "1903-02-28T21:55:36+00:00 should be 23:55:36 SAST");

		t.equal(moment("1903-02-28T21:55:35+00:00").tz("Africa/Mbabane").zone(), -7464 / 60, "1903-02-28T21:55:35+00:00 should be -7464 / 60 minutes offset in LMT");
		t.equal(moment("1903-02-28T21:55:36+00:00").tz("Africa/Mbabane").zone(), -120, "1903-02-28T21:55:36+00:00 should be -120 minutes offset in SAST");

		t.done();
	}
};
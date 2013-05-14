var moment = require("../../index");

exports["Africa/Kigali"] = {

	"1935" : function (t) {
		t.equal(moment("1935-05-31T21:59:43+00:00").tz("Africa/Kigali").format("HH:mm:ss"), "23:59:59", "1935-05-31T21:59:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1935-05-31T21:59:44+00:00").tz("Africa/Kigali").format("HH:mm:ss"), "23:59:44", "1935-05-31T21:59:44+00:00 should be 23:59:44 CAT");

		t.equal(moment("1935-05-31T21:59:43+00:00").tz("Africa/Kigali").zone(), -7216 / 60, "1935-05-31T21:59:43+00:00 should be -7216 / 60 minutes offset in LMT");
		t.equal(moment("1935-05-31T21:59:44+00:00").tz("Africa/Kigali").zone(), -120, "1935-05-31T21:59:44+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
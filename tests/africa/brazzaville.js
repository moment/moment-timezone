var moment = require("../../moment-timezone");

exports["Africa/Brazzaville"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T22:58:51+00:00").tz("Africa/Brazzaville").format("HH:mm:ss"), "23:59:59", "1911-12-31T22:58:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T22:58:52+00:00").tz("Africa/Brazzaville").format("HH:mm:ss"), "23:58:52", "1911-12-31T22:58:52+00:00 should be 23:58:52 WAT");

		t.equal(moment("1911-12-31T22:58:51+00:00").tz("Africa/Brazzaville").zone(), -61, "1911-12-31T22:58:51+00:00 should be -61 minutes offset in LMT");
		t.equal(moment("1911-12-31T22:58:52+00:00").tz("Africa/Brazzaville").zone(), -60, "1911-12-31T22:58:52+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Africa/Douala"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T23:21:11+00:00").tz("Africa/Douala").format("HH:mm:ss"), "23:59:59", "1911-12-31T23:21:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T23:21:12+00:00").tz("Africa/Douala").format("HH:mm:ss"), "00:21:12", "1911-12-31T23:21:12+00:00 should be 00:21:12 WAT");

		t.equal(moment("1911-12-31T23:21:11+00:00").tz("Africa/Douala").zone(), -2328 / 60, "1911-12-31T23:21:11+00:00 should be -2328 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T23:21:12+00:00").tz("Africa/Douala").zone(), -60, "1911-12-31T23:21:12+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
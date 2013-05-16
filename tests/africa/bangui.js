var moment = require("../../index");

exports["Africa/Bangui"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T22:45:39+00:00").tz("Africa/Bangui").format("HH:mm:ss"), "23:59:59", "1911-12-31T22:45:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T22:45:40+00:00").tz("Africa/Bangui").format("HH:mm:ss"), "23:45:40", "1911-12-31T22:45:40+00:00 should be 23:45:40 WAT");

		t.equal(moment("1911-12-31T22:45:39+00:00").tz("Africa/Bangui").zone(), -4460 / 60, "1911-12-31T22:45:39+00:00 should be -4460 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T22:45:40+00:00").tz("Africa/Bangui").zone(), -60, "1911-12-31T22:45:40+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
var moment = require("../../index");

exports["Africa/Libreville"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T23:22:11+00:00").tz("Africa/Libreville").format("HH:mm:ss"), "23:59:59", "1911-12-31T23:22:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T23:22:12+00:00").tz("Africa/Libreville").format("HH:mm:ss"), "00:22:12", "1911-12-31T23:22:12+00:00 should be 00:22:12 WAT");

		t.equal(moment("1911-12-31T23:22:11+00:00").tz("Africa/Libreville").zone(), -2268 / 60, "1911-12-31T23:22:11+00:00 should be -2268 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T23:22:12+00:00").tz("Africa/Libreville").zone(), -60, "1911-12-31T23:22:12+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Asia/Kuwait"] = {

	"1949" : function (t) {
		t.equal(moment("1949-12-31T20:48:03+00:00").tz("Asia/Kuwait").format("HH:mm:ss"), "23:59:59", "1949-12-31T20:48:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1949-12-31T20:48:04+00:00").tz("Asia/Kuwait").format("HH:mm:ss"), "23:48:04", "1949-12-31T20:48:04+00:00 should be 23:48:04 AST");

		t.equal(moment("1949-12-31T20:48:03+00:00").tz("Asia/Kuwait").zone(), -11516 / 60, "1949-12-31T20:48:03+00:00 should be -11516 / 60 minutes offset in LMT");
		t.equal(moment("1949-12-31T20:48:04+00:00").tz("Asia/Kuwait").zone(), -180, "1949-12-31T20:48:04+00:00 should be -180 minutes offset in AST");

		t.done();
	}
};
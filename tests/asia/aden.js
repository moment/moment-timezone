var moment = require("../../moment-timezone");

exports["Asia/Aden"] = {

	"1949" : function (t) {
		t.equal(moment("1949-12-31T21:00:05+00:00").tz("Asia/Aden").format("HH:mm:ss"), "23:59:59", "1949-12-31T21:00:05+00:00 should be 23:59:59 LMT");
		t.equal(moment("1949-12-31T21:00:06+00:00").tz("Asia/Aden").format("HH:mm:ss"), "00:00:06", "1949-12-31T21:00:06+00:00 should be 00:00:06 AST");

		t.equal(moment("1949-12-31T21:00:05+00:00").tz("Asia/Aden").zone(), -10794 / 60, "1949-12-31T21:00:05+00:00 should be -10794 / 60 minutes offset in LMT");
		t.equal(moment("1949-12-31T21:00:06+00:00").tz("Asia/Aden").zone(), -180, "1949-12-31T21:00:06+00:00 should be -180 minutes offset in AST");

		t.done();
	}
};
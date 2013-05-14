var moment = require("../../index");

exports["Asia/Riyadh"] = {

	"1949" : function (t) {
		t.equal(moment("1949-12-31T20:53:07+00:00").tz("Asia/Riyadh").format("HH:mm:ss"), "23:59:59", "1949-12-31T20:53:07+00:00 should be 23:59:59 LMT");
		t.equal(moment("1949-12-31T20:53:08+00:00").tz("Asia/Riyadh").format("HH:mm:ss"), "23:53:08", "1949-12-31T20:53:08+00:00 should be 23:53:08 AST");

		t.equal(moment("1949-12-31T20:53:07+00:00").tz("Asia/Riyadh").zone(), -11212 / 60, "1949-12-31T20:53:07+00:00 should be -11212 / 60 minutes offset in LMT");
		t.equal(moment("1949-12-31T20:53:08+00:00").tz("Asia/Riyadh").zone(), -180, "1949-12-31T20:53:08+00:00 should be -180 minutes offset in AST");

		t.done();
	}
};
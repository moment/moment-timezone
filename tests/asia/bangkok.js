var moment = require("../../index");

exports["Asia/Bangkok"] = {

	"1920" : function (t) {
		t.equal(moment("1920-03-31T17:17:55+00:00").tz("Asia/Bangkok").format("HH:mm:ss"), "23:59:59", "1920-03-31T17:17:55+00:00 should be 23:59:59 BMT");
		t.equal(moment("1920-03-31T17:17:56+00:00").tz("Asia/Bangkok").format("HH:mm:ss"), "00:17:56", "1920-03-31T17:17:56+00:00 should be 00:17:56 ICT");

		t.equal(moment("1920-03-31T17:17:55+00:00").tz("Asia/Bangkok").zone(), -24124 / 60, "1920-03-31T17:17:55+00:00 should be -24124 / 60 minutes offset in BMT");
		t.equal(moment("1920-03-31T17:17:56+00:00").tz("Asia/Bangkok").zone(), -420, "1920-03-31T17:17:56+00:00 should be -420 minutes offset in ICT");

		t.done();
	}
};
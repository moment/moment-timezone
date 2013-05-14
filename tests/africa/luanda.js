var moment = require("../../index");

exports["Africa/Luanda"] = {

	"1911" : function (t) {
		t.equal(moment("1911-05-25T23:07:55+00:00").tz("Africa/Luanda").format("HH:mm:ss"), "23:59:59", "1911-05-25T23:07:55+00:00 should be 23:59:59 AOT");
		t.equal(moment("1911-05-25T23:07:56+00:00").tz("Africa/Luanda").format("HH:mm:ss"), "00:07:56", "1911-05-25T23:07:56+00:00 should be 00:07:56 WAT");

		t.equal(moment("1911-05-25T23:07:55+00:00").tz("Africa/Luanda").zone(), -3124 / 60, "1911-05-25T23:07:55+00:00 should be -3124 / 60 minutes offset in AOT");
		t.equal(moment("1911-05-25T23:07:56+00:00").tz("Africa/Luanda").zone(), -60, "1911-05-25T23:07:56+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
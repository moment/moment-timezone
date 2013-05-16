var moment = require("../../index");

exports["America/St_Vincent"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T04:04:55+00:00").tz("America/St_Vincent").format("HH:mm:ss"), "23:59:59", "1912-01-01T04:04:55+00:00 should be 23:59:59 KMT");
		t.equal(moment("1912-01-01T04:04:56+00:00").tz("America/St_Vincent").format("HH:mm:ss"), "00:04:56", "1912-01-01T04:04:56+00:00 should be 00:04:56 AST");

		t.equal(moment("1912-01-01T04:04:55+00:00").tz("America/St_Vincent").zone(), 14696 / 60, "1912-01-01T04:04:55+00:00 should be 14696 / 60 minutes offset in KMT");
		t.equal(moment("1912-01-01T04:04:56+00:00").tz("America/St_Vincent").zone(), 240, "1912-01-01T04:04:56+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
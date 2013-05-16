var moment = require("../../index");

exports["America/St_Lucia"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T04:03:59+00:00").tz("America/St_Lucia").format("HH:mm:ss"), "23:59:59", "1912-01-01T04:03:59+00:00 should be 23:59:59 CMT");
		t.equal(moment("1912-01-01T04:04:00+00:00").tz("America/St_Lucia").format("HH:mm:ss"), "00:04:00", "1912-01-01T04:04:00+00:00 should be 00:04:00 AST");

		t.equal(moment("1912-01-01T04:03:59+00:00").tz("America/St_Lucia").zone(), 244, "1912-01-01T04:03:59+00:00 should be 244 minutes offset in CMT");
		t.equal(moment("1912-01-01T04:04:00+00:00").tz("America/St_Lucia").zone(), 240, "1912-01-01T04:04:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
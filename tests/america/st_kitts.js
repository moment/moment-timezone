var moment = require("../../moment-timezone");

exports["America/St_Kitts"] = {

	"1912" : function (t) {
		t.equal(moment("1912-03-02T04:10:51+00:00").tz("America/St_Kitts").format("HH:mm:ss"), "23:59:59", "1912-03-02T04:10:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-03-02T04:10:52+00:00").tz("America/St_Kitts").format("HH:mm:ss"), "00:10:52", "1912-03-02T04:10:52+00:00 should be 00:10:52 AST");

		t.equal(moment("1912-03-02T04:10:51+00:00").tz("America/St_Kitts").zone(), 15052 / 60, "1912-03-02T04:10:51+00:00 should be 15052 / 60 minutes offset in LMT");
		t.equal(moment("1912-03-02T04:10:52+00:00").tz("America/St_Kitts").zone(), 240, "1912-03-02T04:10:52+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
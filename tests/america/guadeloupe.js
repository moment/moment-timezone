var moment = require("../../moment-timezone");

exports["America/Guadeloupe"] = {

	"1911" : function (t) {
		t.equal(moment("1911-06-08T04:06:07+00:00").tz("America/Guadeloupe").format("HH:mm:ss"), "23:59:59", "1911-06-08T04:06:07+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-06-08T04:06:08+00:00").tz("America/Guadeloupe").format("HH:mm:ss"), "00:06:08", "1911-06-08T04:06:08+00:00 should be 00:06:08 AST");

		t.equal(moment("1911-06-08T04:06:07+00:00").tz("America/Guadeloupe").zone(), 246, "1911-06-08T04:06:07+00:00 should be 246 minutes offset in LMT");
		t.equal(moment("1911-06-08T04:06:08+00:00").tz("America/Guadeloupe").zone(), 240, "1911-06-08T04:06:08+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["America/St_Thomas"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T04:19:43+00:00").tz("America/St_Thomas").format("HH:mm:ss"), "23:59:59", "1911-07-01T04:19:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-07-01T04:19:44+00:00").tz("America/St_Thomas").format("HH:mm:ss"), "00:19:44", "1911-07-01T04:19:44+00:00 should be 00:19:44 AST");

		t.equal(moment("1911-07-01T04:19:43+00:00").tz("America/St_Thomas").zone(), 259, "1911-07-01T04:19:43+00:00 should be 259 minutes offset in LMT");
		t.equal(moment("1911-07-01T04:19:44+00:00").tz("America/St_Thomas").zone(), 240, "1911-07-01T04:19:44+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
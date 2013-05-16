var moment = require("../../index");

exports["America/Grenada"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T04:06:59+00:00").tz("America/Grenada").format("HH:mm:ss"), "23:59:59", "1911-07-01T04:06:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-07-01T04:07:00+00:00").tz("America/Grenada").format("HH:mm:ss"), "00:07:00", "1911-07-01T04:07:00+00:00 should be 00:07:00 AST");

		t.equal(moment("1911-07-01T04:06:59+00:00").tz("America/Grenada").zone(), 247, "1911-07-01T04:06:59+00:00 should be 247 minutes offset in LMT");
		t.equal(moment("1911-07-01T04:07:00+00:00").tz("America/Grenada").zone(), 240, "1911-07-01T04:07:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
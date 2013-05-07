var moment = require("../../moment-timezone");

exports["America/Dominica"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T04:06:35+00:00").tz("America/Dominica").format("HH:mm:ss"), "00:00:59", "1911-07-01T04:06:35+00:00 should be 00:00:59 LMT");
		t.equal(moment("1911-07-01T04:06:36+00:00").tz("America/Dominica").format("HH:mm:ss"), "00:06:36", "1911-07-01T04:06:36+00:00 should be 00:06:36 AST");

		t.equal(moment("1911-07-01T04:06:35+00:00").tz("America/Dominica").zone(), 14736 / 60, "1911-07-01T04:06:35+00:00 should be 14736 / 60 minutes offset in LMT");
		t.equal(moment("1911-07-01T04:06:36+00:00").tz("America/Dominica").zone(), 240, "1911-07-01T04:06:36+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
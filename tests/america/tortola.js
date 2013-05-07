var moment = require("../../moment-timezone");

exports["America/Tortola"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T04:18:27+00:00").tz("America/Tortola").format("HH:mm:ss"), "23:59:59", "1911-07-01T04:18:27+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-07-01T04:18:28+00:00").tz("America/Tortola").format("HH:mm:ss"), "00:18:28", "1911-07-01T04:18:28+00:00 should be 00:18:28 AST");

		t.equal(moment("1911-07-01T04:18:27+00:00").tz("America/Tortola").zone(), 15508 / 60, "1911-07-01T04:18:27+00:00 should be 15508 / 60 minutes offset in LMT");
		t.equal(moment("1911-07-01T04:18:28+00:00").tz("America/Tortola").zone(), 240, "1911-07-01T04:18:28+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
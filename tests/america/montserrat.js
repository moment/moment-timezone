var moment = require("../../moment-timezone");

exports["America/Montserrat"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T04:09:51+00:00").tz("America/Montserrat").format("HH:mm:ss"), "00:00:59", "1911-07-01T04:09:51+00:00 should be 00:00:59 LMT");
		t.equal(moment("1911-07-01T04:09:52+00:00").tz("America/Montserrat").format("HH:mm:ss"), "00:09:52", "1911-07-01T04:09:52+00:00 should be 00:09:52 AST");

		t.equal(moment("1911-07-01T04:09:51+00:00").tz("America/Montserrat").zone(), 14932 / 60, "1911-07-01T04:09:51+00:00 should be 14932 / 60 minutes offset in LMT");
		t.equal(moment("1911-07-01T04:09:52+00:00").tz("America/Montserrat").zone(), 240, "1911-07-01T04:09:52+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
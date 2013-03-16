var moment = require("../../moment-timezone");

exports["Asia/Bahrain"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T20:37:39+00:00").tz("Asia/Bahrain").format("HH:mm:ss"), "23:59:59", "1919-12-31T20:37:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T20:37:40+00:00").tz("Asia/Bahrain").format("HH:mm:ss"), "00:37:40", "1919-12-31T20:37:40+00:00 should be 00:37:40 GST");

		t.equal(moment("1919-12-31T20:37:39+00:00").tz("Asia/Bahrain").zone(), -202, "1919-12-31T20:37:39+00:00 should be -202 minutes offset in LMT");
		t.equal(moment("1919-12-31T20:37:40+00:00").tz("Asia/Bahrain").zone(), -240, "1919-12-31T20:37:40+00:00 should be -240 minutes offset in GST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-05-31T19:59:59+00:00").tz("Asia/Bahrain").format("HH:mm:ss"), "23:59:59", "1972-05-31T19:59:59+00:00 should be 23:59:59 GST");
		t.equal(moment("1972-05-31T20:00:00+00:00").tz("Asia/Bahrain").format("HH:mm:ss"), "23:00:00", "1972-05-31T20:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1972-05-31T19:59:59+00:00").tz("Asia/Bahrain").zone(), -240, "1972-05-31T19:59:59+00:00 should be -240 minutes offset in GST");
		t.equal(moment("1972-05-31T20:00:00+00:00").tz("Asia/Bahrain").zone(), -180, "1972-05-31T20:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	}
};
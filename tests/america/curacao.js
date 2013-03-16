var moment = require("../../moment-timezone");

exports["America/Curacao"] = {

	"1912" : function (t) {
		t.equal(moment("1912-02-12T04:35:46+00:00").tz("America/Curacao").format("HH:mm:ss"), "23:59:59", "1912-02-12T04:35:46+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-02-12T04:35:47+00:00").tz("America/Curacao").format("HH:mm:ss"), "00:05:47", "1912-02-12T04:35:47+00:00 should be 00:05:47 ANT");

		t.equal(moment("1912-02-12T04:35:46+00:00").tz("America/Curacao").zone(), 275, "1912-02-12T04:35:46+00:00 should be 275 minutes offset in LMT");
		t.equal(moment("1912-02-12T04:35:47+00:00").tz("America/Curacao").zone(), 270, "1912-02-12T04:35:47+00:00 should be 270 minutes offset in ANT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Curacao").format("HH:mm:ss"), "23:59:59", "1965-01-01T04:29:59+00:00 should be 23:59:59 ANT");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Curacao").format("HH:mm:ss"), "00:30:00", "1965-01-01T04:30:00+00:00 should be 00:30:00 AST");

		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Curacao").zone(), 270, "1965-01-01T04:29:59+00:00 should be 270 minutes offset in ANT");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Curacao").zone(), 240, "1965-01-01T04:30:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
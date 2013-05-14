var moment = require("../../index");

exports["America/Aruba"] = {

	"1912" : function (t) {
		t.equal(moment("1912-02-12T04:40:23+00:00").tz("America/Aruba").format("HH:mm:ss"), "23:59:59", "1912-02-12T04:40:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-02-12T04:40:24+00:00").tz("America/Aruba").format("HH:mm:ss"), "00:10:24", "1912-02-12T04:40:24+00:00 should be 00:10:24 ANT");

		t.equal(moment("1912-02-12T04:40:23+00:00").tz("America/Aruba").zone(), 16824 / 60, "1912-02-12T04:40:23+00:00 should be 16824 / 60 minutes offset in LMT");
		t.equal(moment("1912-02-12T04:40:24+00:00").tz("America/Aruba").zone(), 270, "1912-02-12T04:40:24+00:00 should be 270 minutes offset in ANT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Aruba").format("HH:mm:ss"), "23:59:59", "1965-01-01T04:29:59+00:00 should be 23:59:59 ANT");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Aruba").format("HH:mm:ss"), "00:30:00", "1965-01-01T04:30:00+00:00 should be 00:30:00 AST");

		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Aruba").zone(), 270, "1965-01-01T04:29:59+00:00 should be 270 minutes offset in ANT");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Aruba").zone(), 240, "1965-01-01T04:30:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
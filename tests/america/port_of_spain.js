var moment = require("../../moment-timezone");

exports["America/Port_of_Spain"] = {

	"1912" : function (t) {
		t.equal(moment("1912-03-02T04:06:03+00:00").tz("America/Port_of_Spain").format("HH:mm:ss"), "23:59:59", "1912-03-02T04:06:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-03-02T04:06:04+00:00").tz("America/Port_of_Spain").format("HH:mm:ss"), "00:06:04", "1912-03-02T04:06:04+00:00 should be 00:06:04 AST");

		t.equal(moment("1912-03-02T04:06:03+00:00").tz("America/Port_of_Spain").zone(), 246, "1912-03-02T04:06:03+00:00 should be 246 minutes offset in LMT");
		t.equal(moment("1912-03-02T04:06:04+00:00").tz("America/Port_of_Spain").zone(), 240, "1912-03-02T04:06:04+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
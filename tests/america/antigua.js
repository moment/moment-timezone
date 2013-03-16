var moment = require("../../moment-timezone");

exports["America/Antigua"] = {

	"1912" : function (t) {
		t.equal(moment("1912-03-02T04:07:11+00:00").tz("America/Antigua").format("HH:mm:ss"), "23:59:59", "1912-03-02T04:07:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-03-02T04:07:12+00:00").tz("America/Antigua").format("HH:mm:ss"), "23:07:12", "1912-03-02T04:07:12+00:00 should be 23:07:12 EST");

		t.equal(moment("1912-03-02T04:07:11+00:00").tz("America/Antigua").zone(), 247, "1912-03-02T04:07:11+00:00 should be 247 minutes offset in LMT");
		t.equal(moment("1912-03-02T04:07:12+00:00").tz("America/Antigua").zone(), 300, "1912-03-02T04:07:12+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-01-01T04:59:59+00:00").tz("America/Antigua").format("HH:mm:ss"), "23:59:59", "1951-01-01T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1951-01-01T05:00:00+00:00").tz("America/Antigua").format("HH:mm:ss"), "01:00:00", "1951-01-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1951-01-01T04:59:59+00:00").tz("America/Antigua").zone(), 300, "1951-01-01T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1951-01-01T05:00:00+00:00").tz("America/Antigua").zone(), 240, "1951-01-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
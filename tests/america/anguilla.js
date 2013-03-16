var moment = require("../../moment-timezone");

exports["America/Anguilla"] = {

	"1912" : function (t) {
		t.equal(moment("1912-03-02T04:12:15+00:00").tz("America/Anguilla").format("HH:mm:ss"), "23:59:59", "1912-03-02T04:12:15+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-03-02T04:12:16+00:00").tz("America/Anguilla").format("HH:mm:ss"), "00:12:16", "1912-03-02T04:12:16+00:00 should be 00:12:16 AST");

		t.equal(moment("1912-03-02T04:12:15+00:00").tz("America/Anguilla").zone(), 252, "1912-03-02T04:12:15+00:00 should be 252 minutes offset in LMT");
		t.equal(moment("1912-03-02T04:12:16+00:00").tz("America/Anguilla").zone(), 240, "1912-03-02T04:12:16+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
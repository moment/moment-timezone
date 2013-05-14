var moment = require("../../index");

exports["Africa/Sao_Tome"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T00:36:31+00:00").tz("Africa/Sao_Tome").format("HH:mm:ss"), "23:59:59", "1912-01-01T00:36:31+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T00:36:32+00:00").tz("Africa/Sao_Tome").format("HH:mm:ss"), "00:36:32", "1912-01-01T00:36:32+00:00 should be 00:36:32 GMT");

		t.equal(moment("1912-01-01T00:36:31+00:00").tz("Africa/Sao_Tome").zone(), 2192 / 60, "1912-01-01T00:36:31+00:00 should be 2192 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-01T00:36:32+00:00").tz("Africa/Sao_Tome").zone(), 0, "1912-01-01T00:36:32+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
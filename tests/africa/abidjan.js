var moment = require("../../moment-timezone");

exports["Africa/Abidjan"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T00:16:07+00:00").tz("Africa/Abidjan").format("HH:mm:ss"), "23:59:59", "1912-01-01T00:16:07+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T00:16:08+00:00").tz("Africa/Abidjan").format("HH:mm:ss"), "00:16:08", "1912-01-01T00:16:08+00:00 should be 00:16:08 GMT");

		t.equal(moment("1912-01-01T00:16:07+00:00").tz("Africa/Abidjan").zone(), 968 / 60, "1912-01-01T00:16:07+00:00 should be 968 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-01T00:16:08+00:00").tz("Africa/Abidjan").zone(), 0, "1912-01-01T00:16:08+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Africa/Ouagadougou"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T00:06:03+00:00").tz("Africa/Ouagadougou").format("HH:mm:ss"), "23:59:59", "1912-01-01T00:06:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T00:06:04+00:00").tz("Africa/Ouagadougou").format("HH:mm:ss"), "00:06:04", "1912-01-01T00:06:04+00:00 should be 00:06:04 GMT");

		t.equal(moment("1912-01-01T00:06:03+00:00").tz("Africa/Ouagadougou").zone(), 6, "1912-01-01T00:06:03+00:00 should be 6 minutes offset in LMT");
		t.equal(moment("1912-01-01T00:06:04+00:00").tz("Africa/Ouagadougou").zone(), 0, "1912-01-01T00:06:04+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
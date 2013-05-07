var moment = require("../../moment-timezone");

exports["Africa/Dakar"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T01:09:43+00:00").tz("Africa/Dakar").format("HH:mm:ss"), "23:59:59", "1912-01-01T01:09:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T01:09:44+00:00").tz("Africa/Dakar").format("HH:mm:ss"), "00:09:44", "1912-01-01T01:09:44+00:00 should be 00:09:44 WAT");

		t.equal(moment("1912-01-01T01:09:43+00:00").tz("Africa/Dakar").zone(), 4184 / 60, "1912-01-01T01:09:43+00:00 should be 4184 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-01T01:09:44+00:00").tz("Africa/Dakar").zone(), 60, "1912-01-01T01:09:44+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-06-01T00:59:59+00:00").tz("Africa/Dakar").format("HH:mm:ss"), "23:59:59", "1941-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1941-06-01T01:00:00+00:00").tz("Africa/Dakar").format("HH:mm:ss"), "01:00:00", "1941-06-01T01:00:00+00:00 should be 01:00:00 GMT");

		t.equal(moment("1941-06-01T00:59:59+00:00").tz("Africa/Dakar").zone(), 60, "1941-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1941-06-01T01:00:00+00:00").tz("Africa/Dakar").zone(), 0, "1941-06-01T01:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
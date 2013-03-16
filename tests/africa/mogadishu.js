var moment = require("../../moment-timezone");

exports["Africa/Mogadishu"] = {

	"1930" : function (t) {
		t.equal(moment("1930-12-31T20:59:59+00:00").tz("Africa/Mogadishu").format("HH:mm:ss"), "23:59:59", "1930-12-31T20:59:59+00:00 should be 23:59:59 EAT");
		t.equal(moment("1930-12-31T21:00:00+00:00").tz("Africa/Mogadishu").format("HH:mm:ss"), "23:30:00", "1930-12-31T21:00:00+00:00 should be 23:30:00 BEAT");

		t.equal(moment("1930-12-31T20:59:59+00:00").tz("Africa/Mogadishu").zone(), -180, "1930-12-31T20:59:59+00:00 should be -180 minutes offset in EAT");
		t.equal(moment("1930-12-31T21:00:00+00:00").tz("Africa/Mogadishu").zone(), -150, "1930-12-31T21:00:00+00:00 should be -150 minutes offset in BEAT");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-12-31T21:29:59+00:00").tz("Africa/Mogadishu").format("HH:mm:ss"), "23:59:59", "1956-12-31T21:29:59+00:00 should be 23:59:59 BEAT");
		t.equal(moment("1956-12-31T21:30:00+00:00").tz("Africa/Mogadishu").format("HH:mm:ss"), "00:30:00", "1956-12-31T21:30:00+00:00 should be 00:30:00 EAT");

		t.equal(moment("1956-12-31T21:29:59+00:00").tz("Africa/Mogadishu").zone(), -150, "1956-12-31T21:29:59+00:00 should be -150 minutes offset in BEAT");
		t.equal(moment("1956-12-31T21:30:00+00:00").tz("Africa/Mogadishu").zone(), -180, "1956-12-31T21:30:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
var moment = require("../../index");

exports["Asia/Brunei"] = {

	"1926" : function (t) {
		t.equal(moment("1926-02-28T16:20:19+00:00").tz("Asia/Brunei").format("HH:mm:ss"), "23:59:59", "1926-02-28T16:20:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1926-02-28T16:20:20+00:00").tz("Asia/Brunei").format("HH:mm:ss"), "23:50:20", "1926-02-28T16:20:20+00:00 should be 23:50:20 BNT");

		t.equal(moment("1926-02-28T16:20:19+00:00").tz("Asia/Brunei").zone(), -27580 / 60, "1926-02-28T16:20:19+00:00 should be -27580 / 60 minutes offset in LMT");
		t.equal(moment("1926-02-28T16:20:20+00:00").tz("Asia/Brunei").zone(), -450, "1926-02-28T16:20:20+00:00 should be -450 minutes offset in BNT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-12-31T16:29:59+00:00").tz("Asia/Brunei").format("HH:mm:ss"), "23:59:59", "1932-12-31T16:29:59+00:00 should be 23:59:59 BNT");
		t.equal(moment("1932-12-31T16:30:00+00:00").tz("Asia/Brunei").format("HH:mm:ss"), "00:30:00", "1932-12-31T16:30:00+00:00 should be 00:30:00 BNT");

		t.equal(moment("1932-12-31T16:29:59+00:00").tz("Asia/Brunei").zone(), -450, "1932-12-31T16:29:59+00:00 should be -450 minutes offset in BNT");
		t.equal(moment("1932-12-31T16:30:00+00:00").tz("Asia/Brunei").zone(), -480, "1932-12-31T16:30:00+00:00 should be -480 minutes offset in BNT");

		t.done();
	}
};
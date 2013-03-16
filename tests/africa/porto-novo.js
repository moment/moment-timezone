var moment = require("../../moment-timezone");

exports["Africa/Porto-Novo"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T23:49:31+00:00").tz("Africa/Porto-Novo").format("HH:mm:ss"), "23:59:59", "1911-12-31T23:49:31+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T23:49:32+00:00").tz("Africa/Porto-Novo").format("HH:mm:ss"), "23:49:32", "1911-12-31T23:49:32+00:00 should be 23:49:32 GMT");

		t.equal(moment("1911-12-31T23:49:31+00:00").tz("Africa/Porto-Novo").zone(), -10, "1911-12-31T23:49:31+00:00 should be -10 minutes offset in LMT");
		t.equal(moment("1911-12-31T23:49:32+00:00").tz("Africa/Porto-Novo").zone(), 0, "1911-12-31T23:49:32+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-02-25T23:59:59+00:00").tz("Africa/Porto-Novo").format("HH:mm:ss"), "23:59:59", "1934-02-25T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1934-02-26T00:00:00+00:00").tz("Africa/Porto-Novo").format("HH:mm:ss"), "01:00:00", "1934-02-26T00:00:00+00:00 should be 01:00:00 WAT");

		t.equal(moment("1934-02-25T23:59:59+00:00").tz("Africa/Porto-Novo").zone(), 0, "1934-02-25T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1934-02-26T00:00:00+00:00").tz("Africa/Porto-Novo").zone(), -60, "1934-02-26T00:00:00+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
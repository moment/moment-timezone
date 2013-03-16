var moment = require("../../moment-timezone");

exports["Africa/Bissau"] = {

	"1911" : function (t) {
		t.equal(moment("1911-05-26T01:02:19+00:00").tz("Africa/Bissau").format("HH:mm:ss"), "23:59:59", "1911-05-26T01:02:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-05-26T01:02:20+00:00").tz("Africa/Bissau").format("HH:mm:ss"), "00:02:20", "1911-05-26T01:02:20+00:00 should be 00:02:20 WAT");

		t.equal(moment("1911-05-26T01:02:19+00:00").tz("Africa/Bissau").zone(), 62, "1911-05-26T01:02:19+00:00 should be 62 minutes offset in LMT");
		t.equal(moment("1911-05-26T01:02:20+00:00").tz("Africa/Bissau").zone(), 60, "1911-05-26T01:02:20+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-01-01T00:59:59+00:00").tz("Africa/Bissau").format("HH:mm:ss"), "23:59:59", "1975-01-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1975-01-01T01:00:00+00:00").tz("Africa/Bissau").format("HH:mm:ss"), "01:00:00", "1975-01-01T01:00:00+00:00 should be 01:00:00 GMT");

		t.equal(moment("1975-01-01T00:59:59+00:00").tz("Africa/Bissau").zone(), 60, "1975-01-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1975-01-01T01:00:00+00:00").tz("Africa/Bissau").zone(), 0, "1975-01-01T01:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
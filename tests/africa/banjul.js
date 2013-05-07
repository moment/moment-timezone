var moment = require("../../moment-timezone");

exports["Africa/Banjul"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T01:06:35+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "23:59:59", "1912-01-01T01:06:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T01:06:36+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "00:00:00", "1912-01-01T01:06:36+00:00 should be 00:00:00 BMT");

		t.equal(moment("1912-01-01T01:06:35+00:00").tz("Africa/Banjul").zone(), 3996 / 60, "1912-01-01T01:06:35+00:00 should be 3996 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-01T01:06:36+00:00").tz("Africa/Banjul").zone(), 3996 / 60, "1912-01-01T01:06:36+00:00 should be 3996 / 60 minutes offset in BMT");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-01-01T01:06:35+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "23:59:59", "1935-01-01T01:06:35+00:00 should be 23:59:59 BMT");
		t.equal(moment("1935-01-01T01:06:36+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "00:06:36", "1935-01-01T01:06:36+00:00 should be 00:06:36 WAT");

		t.equal(moment("1935-01-01T01:06:35+00:00").tz("Africa/Banjul").zone(), 3996 / 60, "1935-01-01T01:06:35+00:00 should be 3996 / 60 minutes offset in BMT");
		t.equal(moment("1935-01-01T01:06:36+00:00").tz("Africa/Banjul").zone(), 60, "1935-01-01T01:06:36+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-01-01T00:59:59+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "23:59:59", "1964-01-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1964-01-01T01:00:00+00:00").tz("Africa/Banjul").format("HH:mm:ss"), "01:00:00", "1964-01-01T01:00:00+00:00 should be 01:00:00 GMT");

		t.equal(moment("1964-01-01T00:59:59+00:00").tz("Africa/Banjul").zone(), 60, "1964-01-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1964-01-01T01:00:00+00:00").tz("Africa/Banjul").zone(), 0, "1964-01-01T01:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
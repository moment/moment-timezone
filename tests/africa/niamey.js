var moment = require("../../moment-timezone");

exports["Africa/Niamey"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T23:51:31+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "23:59:59", "1911-12-31T23:51:31+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T23:51:32+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "22:51:32", "1911-12-31T23:51:32+00:00 should be 22:51:32 WAT");

		t.equal(moment("1911-12-31T23:51:31+00:00").tz("Africa/Niamey").zone(), -508 / 60, "1911-12-31T23:51:31+00:00 should be -508 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T23:51:32+00:00").tz("Africa/Niamey").zone(), 60, "1911-12-31T23:51:32+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-02-26T00:59:59+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "23:59:59", "1934-02-26T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1934-02-26T01:00:00+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "01:00:00", "1934-02-26T01:00:00+00:00 should be 01:00:00 GMT");

		t.equal(moment("1934-02-26T00:59:59+00:00").tz("Africa/Niamey").zone(), 60, "1934-02-26T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1934-02-26T01:00:00+00:00").tz("Africa/Niamey").zone(), 0, "1934-02-26T01:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-12-31T23:59:59+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "23:59:59", "1959-12-31T23:59:59+00:00 should be 23:59:59 GMT");

		t.equal(moment("1959-12-31T23:59:59+00:00").tz("Africa/Niamey").zone(), 0, "1959-12-31T23:59:59+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-01-01T00:00:00+00:00").tz("Africa/Niamey").format("HH:mm:ss"), "01:00:00", "1960-01-01T00:00:00+00:00 should be 01:00:00 WAT");

		t.equal(moment("1960-01-01T00:00:00+00:00").tz("Africa/Niamey").zone(), -60, "1960-01-01T00:00:00+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
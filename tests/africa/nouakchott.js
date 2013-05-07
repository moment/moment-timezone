var moment = require("../../moment-timezone");

exports["Africa/Nouakchott"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T01:03:47+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "23:59:59", "1912-01-01T01:03:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T01:03:48+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "01:03:48", "1912-01-01T01:03:48+00:00 should be 01:03:48 GMT");

		t.equal(moment("1912-01-01T01:03:47+00:00").tz("Africa/Nouakchott").zone(), 3828 / 60, "1912-01-01T01:03:47+00:00 should be 3828 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-01T01:03:48+00:00").tz("Africa/Nouakchott").zone(), 0, "1912-01-01T01:03:48+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-02-25T23:59:59+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "23:59:59", "1934-02-25T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1934-02-26T00:00:00+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "23:00:00", "1934-02-26T00:00:00+00:00 should be 23:00:00 WAT");

		t.equal(moment("1934-02-25T23:59:59+00:00").tz("Africa/Nouakchott").zone(), 0, "1934-02-25T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1934-02-26T00:00:00+00:00").tz("Africa/Nouakchott").zone(), 60, "1934-02-26T00:00:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-11-28T00:59:59+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "23:59:59", "1960-11-28T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1960-11-28T01:00:00+00:00").tz("Africa/Nouakchott").format("HH:mm:ss"), "01:00:00", "1960-11-28T01:00:00+00:00 should be 01:00:00 GMT");

		t.equal(moment("1960-11-28T00:59:59+00:00").tz("Africa/Nouakchott").zone(), 60, "1960-11-28T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1960-11-28T01:00:00+00:00").tz("Africa/Nouakchott").zone(), 0, "1960-11-28T01:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
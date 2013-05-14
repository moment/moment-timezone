var moment = require("../../index");

exports["Africa/Nairobi"] = {

	"1928" : function (t) {
		t.equal(moment("1928-06-30T21:32:43+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "23:59:59", "1928-06-30T21:32:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1928-06-30T21:32:44+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "00:32:44", "1928-06-30T21:32:44+00:00 should be 00:32:44 EAT");

		t.equal(moment("1928-06-30T21:32:43+00:00").tz("Africa/Nairobi").zone(), -8836 / 60, "1928-06-30T21:32:43+00:00 should be -8836 / 60 minutes offset in LMT");
		t.equal(moment("1928-06-30T21:32:44+00:00").tz("Africa/Nairobi").zone(), -180, "1928-06-30T21:32:44+00:00 should be -180 minutes offset in EAT");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-12-31T20:59:59+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "23:59:59", "1929-12-31T20:59:59+00:00 should be 23:59:59 EAT");
		t.equal(moment("1929-12-31T21:00:00+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "23:30:00", "1929-12-31T21:00:00+00:00 should be 23:30:00 BEAT");

		t.equal(moment("1929-12-31T20:59:59+00:00").tz("Africa/Nairobi").zone(), -180, "1929-12-31T20:59:59+00:00 should be -180 minutes offset in EAT");
		t.equal(moment("1929-12-31T21:00:00+00:00").tz("Africa/Nairobi").zone(), -150, "1929-12-31T21:00:00+00:00 should be -150 minutes offset in BEAT");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-12-31T21:29:59+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "23:59:59", "1939-12-31T21:29:59+00:00 should be 23:59:59 BEAT");
		t.equal(moment("1939-12-31T21:30:00+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "00:15:00", "1939-12-31T21:30:00+00:00 should be 00:15:00 BEAUT");

		t.equal(moment("1939-12-31T21:29:59+00:00").tz("Africa/Nairobi").zone(), -150, "1939-12-31T21:29:59+00:00 should be -150 minutes offset in BEAT");
		t.equal(moment("1939-12-31T21:30:00+00:00").tz("Africa/Nairobi").zone(), -165, "1939-12-31T21:30:00+00:00 should be -165 minutes offset in BEAUT");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-12-31T21:14:59+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "23:59:59", "1959-12-31T21:14:59+00:00 should be 23:59:59 BEAUT");
		t.equal(moment("1959-12-31T21:15:00+00:00").tz("Africa/Nairobi").format("HH:mm:ss"), "00:15:00", "1959-12-31T21:15:00+00:00 should be 00:15:00 EAT");

		t.equal(moment("1959-12-31T21:14:59+00:00").tz("Africa/Nairobi").zone(), -165, "1959-12-31T21:14:59+00:00 should be -165 minutes offset in BEAUT");
		t.equal(moment("1959-12-31T21:15:00+00:00").tz("Africa/Nairobi").zone(), -180, "1959-12-31T21:15:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
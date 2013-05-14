var moment = require("../../index");

exports["America/Guyana"] = {

	"1915" : function (t) {
		t.equal(moment("1915-03-01T03:52:39+00:00").tz("America/Guyana").format("HH:mm:ss"), "23:59:59", "1915-03-01T03:52:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1915-03-01T03:52:40+00:00").tz("America/Guyana").format("HH:mm:ss"), "00:07:40", "1915-03-01T03:52:40+00:00 should be 00:07:40 GBGT");

		t.equal(moment("1915-03-01T03:52:39+00:00").tz("America/Guyana").zone(), 13960 / 60, "1915-03-01T03:52:39+00:00 should be 13960 / 60 minutes offset in LMT");
		t.equal(moment("1915-03-01T03:52:40+00:00").tz("America/Guyana").zone(), 225, "1915-03-01T03:52:40+00:00 should be 225 minutes offset in GBGT");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-05-26T03:44:59+00:00").tz("America/Guyana").format("HH:mm:ss"), "23:59:59", "1966-05-26T03:44:59+00:00 should be 23:59:59 GBGT");
		t.equal(moment("1966-05-26T03:45:00+00:00").tz("America/Guyana").format("HH:mm:ss"), "00:00:00", "1966-05-26T03:45:00+00:00 should be 00:00:00 GYT");

		t.equal(moment("1966-05-26T03:44:59+00:00").tz("America/Guyana").zone(), 225, "1966-05-26T03:44:59+00:00 should be 225 minutes offset in GBGT");
		t.equal(moment("1966-05-26T03:45:00+00:00").tz("America/Guyana").zone(), 225, "1966-05-26T03:45:00+00:00 should be 225 minutes offset in GYT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-07-31T03:44:59+00:00").tz("America/Guyana").format("HH:mm:ss"), "23:59:59", "1975-07-31T03:44:59+00:00 should be 23:59:59 GYT");
		t.equal(moment("1975-07-31T03:45:00+00:00").tz("America/Guyana").format("HH:mm:ss"), "00:45:00", "1975-07-31T03:45:00+00:00 should be 00:45:00 GYT");

		t.equal(moment("1975-07-31T03:44:59+00:00").tz("America/Guyana").zone(), 225, "1975-07-31T03:44:59+00:00 should be 225 minutes offset in GYT");
		t.equal(moment("1975-07-31T03:45:00+00:00").tz("America/Guyana").zone(), 180, "1975-07-31T03:45:00+00:00 should be 180 minutes offset in GYT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-01-01T02:59:59+00:00").tz("America/Guyana").format("HH:mm:ss"), "23:59:59", "1991-01-01T02:59:59+00:00 should be 23:59:59 GYT");
		t.equal(moment("1991-01-01T03:00:00+00:00").tz("America/Guyana").format("HH:mm:ss"), "23:00:00", "1991-01-01T03:00:00+00:00 should be 23:00:00 GYT");

		t.equal(moment("1991-01-01T02:59:59+00:00").tz("America/Guyana").zone(), 180, "1991-01-01T02:59:59+00:00 should be 180 minutes offset in GYT");
		t.equal(moment("1991-01-01T03:00:00+00:00").tz("America/Guyana").zone(), 240, "1991-01-01T03:00:00+00:00 should be 240 minutes offset in GYT");

		t.done();
	}
};
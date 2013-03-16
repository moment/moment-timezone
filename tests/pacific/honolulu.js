var moment = require("../../moment-timezone");

exports["Pacific/Honolulu"] = {

	"1933" : function (t) {
		t.equal(moment("1933-04-30T12:29:59+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "01:59:59", "1933-04-30T12:29:59+00:00 should be 01:59:59 HST");
		t.equal(moment("1933-04-30T12:30:00+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "03:00:00", "1933-04-30T12:30:00+00:00 should be 03:00:00 HDT");
		t.equal(moment("1933-05-21T21:29:59+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "11:59:59", "1933-05-21T21:29:59+00:00 should be 11:59:59 HDT");
		t.equal(moment("1933-05-21T21:30:00+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "11:00:00", "1933-05-21T21:30:00+00:00 should be 11:00:00 HST");

		t.equal(moment("1933-04-30T12:29:59+00:00").tz("Pacific/Honolulu").zone(), 630, "1933-04-30T12:29:59+00:00 should be 630 minutes offset in HST");
		t.equal(moment("1933-04-30T12:30:00+00:00").tz("Pacific/Honolulu").zone(), 570, "1933-04-30T12:30:00+00:00 should be 570 minutes offset in HDT");
		t.equal(moment("1933-05-21T21:29:59+00:00").tz("Pacific/Honolulu").zone(), 570, "1933-05-21T21:29:59+00:00 should be 570 minutes offset in HDT");
		t.equal(moment("1933-05-21T21:30:00+00:00").tz("Pacific/Honolulu").zone(), 630, "1933-05-21T21:30:00+00:00 should be 630 minutes offset in HST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T12:29:59+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "01:59:59", "1942-02-09T12:29:59+00:00 should be 01:59:59 HST");
		t.equal(moment("1942-02-09T12:30:00+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "03:00:00", "1942-02-09T12:30:00+00:00 should be 03:00:00 HDT");

		t.equal(moment("1942-02-09T12:29:59+00:00").tz("Pacific/Honolulu").zone(), 630, "1942-02-09T12:29:59+00:00 should be 630 minutes offset in HST");
		t.equal(moment("1942-02-09T12:30:00+00:00").tz("Pacific/Honolulu").zone(), 570, "1942-02-09T12:30:00+00:00 should be 570 minutes offset in HDT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-30T11:29:59+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "01:59:59", "1945-09-30T11:29:59+00:00 should be 01:59:59 HDT");
		t.equal(moment("1945-09-30T11:30:00+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "01:00:00", "1945-09-30T11:30:00+00:00 should be 01:00:00 HST");

		t.equal(moment("1945-09-30T11:29:59+00:00").tz("Pacific/Honolulu").zone(), 570, "1945-09-30T11:29:59+00:00 should be 570 minutes offset in HDT");
		t.equal(moment("1945-09-30T11:30:00+00:00").tz("Pacific/Honolulu").zone(), 630, "1945-09-30T11:30:00+00:00 should be 630 minutes offset in HST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-06-08T12:29:59+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "01:59:59", "1947-06-08T12:29:59+00:00 should be 01:59:59 HST");
		t.equal(moment("1947-06-08T12:30:00+00:00").tz("Pacific/Honolulu").format("HH:mm:ss"), "02:30:00", "1947-06-08T12:30:00+00:00 should be 02:30:00 HST");

		t.equal(moment("1947-06-08T12:29:59+00:00").tz("Pacific/Honolulu").zone(), 630, "1947-06-08T12:29:59+00:00 should be 630 minutes offset in HST");
		t.equal(moment("1947-06-08T12:30:00+00:00").tz("Pacific/Honolulu").zone(), 600, "1947-06-08T12:30:00+00:00 should be 600 minutes offset in HST");

		t.done();
	}
};
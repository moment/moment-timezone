var moment = require("../../moment-timezone");

exports["Pacific/Tongatapu"] = {

	"1940" : function (t) {
		t.equal(moment("1940-12-31T11:39:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "23:59:59", "1940-12-31T11:39:59+00:00 should be 23:59:59 TOT");
		t.equal(moment("1940-12-31T11:40:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "00:40:00", "1940-12-31T11:40:00+00:00 should be 00:40:00 TOT");

		t.equal(moment("1940-12-31T11:39:59+00:00").tz("Pacific/Tongatapu").zone(), -740, "1940-12-31T11:39:59+00:00 should be -740 minutes offset in TOT");
		t.equal(moment("1940-12-31T11:40:00+00:00").tz("Pacific/Tongatapu").zone(), -780, "1940-12-31T11:40:00+00:00 should be -780 minutes offset in TOT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-10-06T12:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:59:59", "1999-10-06T12:59:59+00:00 should be 01:59:59 TOT");
		t.equal(moment("1999-10-06T13:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "03:00:00", "1999-10-06T13:00:00+00:00 should be 03:00:00 TOST");

		t.equal(moment("1999-10-06T12:59:59+00:00").tz("Pacific/Tongatapu").zone(), -780, "1999-10-06T12:59:59+00:00 should be -780 minutes offset in TOT");
		t.equal(moment("1999-10-06T13:00:00+00:00").tz("Pacific/Tongatapu").zone(), -840, "1999-10-06T13:00:00+00:00 should be -840 minutes offset in TOST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-18T12:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "02:59:59", "2000-03-18T12:59:59+00:00 should be 02:59:59 TOST");
		t.equal(moment("2000-03-18T13:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "02:00:00", "2000-03-18T13:00:00+00:00 should be 02:00:00 TOT");
		t.equal(moment("2000-11-04T12:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:59:59", "2000-11-04T12:59:59+00:00 should be 01:59:59 TOT");
		t.equal(moment("2000-11-04T13:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "03:00:00", "2000-11-04T13:00:00+00:00 should be 03:00:00 TOST");

		t.equal(moment("2000-03-18T12:59:59+00:00").tz("Pacific/Tongatapu").zone(), -840, "2000-03-18T12:59:59+00:00 should be -840 minutes offset in TOST");
		t.equal(moment("2000-03-18T13:00:00+00:00").tz("Pacific/Tongatapu").zone(), -780, "2000-03-18T13:00:00+00:00 should be -780 minutes offset in TOT");
		t.equal(moment("2000-11-04T12:59:59+00:00").tz("Pacific/Tongatapu").zone(), -780, "2000-11-04T12:59:59+00:00 should be -780 minutes offset in TOT");
		t.equal(moment("2000-11-04T13:00:00+00:00").tz("Pacific/Tongatapu").zone(), -840, "2000-11-04T13:00:00+00:00 should be -840 minutes offset in TOST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-01-27T11:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:59:59", "2001-01-27T11:59:59+00:00 should be 01:59:59 TOST");
		t.equal(moment("2001-01-27T12:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:00:00", "2001-01-27T12:00:00+00:00 should be 01:00:00 TOT");
		t.equal(moment("2001-11-03T12:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:59:59", "2001-11-03T12:59:59+00:00 should be 01:59:59 TOT");
		t.equal(moment("2001-11-03T13:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "03:00:00", "2001-11-03T13:00:00+00:00 should be 03:00:00 TOST");

		t.equal(moment("2001-01-27T11:59:59+00:00").tz("Pacific/Tongatapu").zone(), -840, "2001-01-27T11:59:59+00:00 should be -840 minutes offset in TOST");
		t.equal(moment("2001-01-27T12:00:00+00:00").tz("Pacific/Tongatapu").zone(), -780, "2001-01-27T12:00:00+00:00 should be -780 minutes offset in TOT");
		t.equal(moment("2001-11-03T12:59:59+00:00").tz("Pacific/Tongatapu").zone(), -780, "2001-11-03T12:59:59+00:00 should be -780 minutes offset in TOT");
		t.equal(moment("2001-11-03T13:00:00+00:00").tz("Pacific/Tongatapu").zone(), -840, "2001-11-03T13:00:00+00:00 should be -840 minutes offset in TOST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-01-26T11:59:59+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:59:59", "2002-01-26T11:59:59+00:00 should be 01:59:59 TOST");
		t.equal(moment("2002-01-26T12:00:00+00:00").tz("Pacific/Tongatapu").format("HH:mm:ss"), "01:00:00", "2002-01-26T12:00:00+00:00 should be 01:00:00 TOT");

		t.equal(moment("2002-01-26T11:59:59+00:00").tz("Pacific/Tongatapu").zone(), -840, "2002-01-26T11:59:59+00:00 should be -840 minutes offset in TOST");
		t.equal(moment("2002-01-26T12:00:00+00:00").tz("Pacific/Tongatapu").zone(), -780, "2002-01-26T12:00:00+00:00 should be -780 minutes offset in TOT");

		t.done();
	}
};
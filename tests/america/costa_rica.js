var moment = require("../../index");

exports["America/Costa_Rica"] = {

	"1921" : function (t) {
		t.equal(moment("1921-01-15T05:36:12+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1921-01-15T05:36:12+00:00 should be 23:59:59 SJMT");
		t.equal(moment("1921-01-15T05:36:13+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:36:13", "1921-01-15T05:36:13+00:00 should be 23:36:13 CST");

		t.equal(moment("1921-01-15T05:36:12+00:00").tz("America/Costa_Rica").zone(), 20173 / 60, "1921-01-15T05:36:12+00:00 should be 20173 / 60 minutes offset in SJMT");
		t.equal(moment("1921-01-15T05:36:13+00:00").tz("America/Costa_Rica").zone(), 360, "1921-01-15T05:36:13+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-02-25T05:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1979-02-25T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1979-02-25T06:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "01:00:00", "1979-02-25T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1979-06-03T04:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1979-06-03T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1979-06-03T05:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:00:00", "1979-06-03T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1979-02-25T05:59:59+00:00").tz("America/Costa_Rica").zone(), 360, "1979-02-25T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1979-02-25T06:00:00+00:00").tz("America/Costa_Rica").zone(), 300, "1979-02-25T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1979-06-03T04:59:59+00:00").tz("America/Costa_Rica").zone(), 300, "1979-06-03T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1979-06-03T05:00:00+00:00").tz("America/Costa_Rica").zone(), 360, "1979-06-03T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-02-24T05:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1980-02-24T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1980-02-24T06:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "01:00:00", "1980-02-24T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1980-06-01T04:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1980-06-01T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1980-06-01T05:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:00:00", "1980-06-01T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1980-02-24T05:59:59+00:00").tz("America/Costa_Rica").zone(), 360, "1980-02-24T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1980-02-24T06:00:00+00:00").tz("America/Costa_Rica").zone(), 300, "1980-02-24T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1980-06-01T04:59:59+00:00").tz("America/Costa_Rica").zone(), 300, "1980-06-01T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1980-06-01T05:00:00+00:00").tz("America/Costa_Rica").zone(), 360, "1980-06-01T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-01-19T05:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1991-01-19T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1991-01-19T06:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "01:00:00", "1991-01-19T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1991-07-01T04:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1991-07-01T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1991-07-01T05:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:00:00", "1991-07-01T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1991-01-19T05:59:59+00:00").tz("America/Costa_Rica").zone(), 360, "1991-01-19T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1991-01-19T06:00:00+00:00").tz("America/Costa_Rica").zone(), 300, "1991-01-19T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1991-07-01T04:59:59+00:00").tz("America/Costa_Rica").zone(), 300, "1991-07-01T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1991-07-01T05:00:00+00:00").tz("America/Costa_Rica").zone(), 360, "1991-07-01T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-18T05:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1992-01-18T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1992-01-18T06:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "01:00:00", "1992-01-18T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1992-03-15T04:59:59+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:59:59", "1992-03-15T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1992-03-15T05:00:00+00:00").tz("America/Costa_Rica").format("HH:mm:ss"), "23:00:00", "1992-03-15T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1992-01-18T05:59:59+00:00").tz("America/Costa_Rica").zone(), 360, "1992-01-18T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1992-01-18T06:00:00+00:00").tz("America/Costa_Rica").zone(), 300, "1992-01-18T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1992-03-15T04:59:59+00:00").tz("America/Costa_Rica").zone(), 300, "1992-03-15T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1992-03-15T05:00:00+00:00").tz("America/Costa_Rica").zone(), 360, "1992-03-15T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["America/Tegucigalpa"] = {

	"1921" : function (t) {
		t.equal(moment("1921-04-01T05:48:51+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "1921-04-01T05:48:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1921-04-01T05:48:52+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:48:52", "1921-04-01T05:48:52+00:00 should be 23:48:52 CST");

		t.equal(moment("1921-04-01T05:48:51+00:00").tz("America/Tegucigalpa").zone(), 348, "1921-04-01T05:48:51+00:00 should be 348 minutes offset in LMT");
		t.equal(moment("1921-04-01T05:48:52+00:00").tz("America/Tegucigalpa").zone(), 360, "1921-04-01T05:48:52+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-05-03T05:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "1987-05-03T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1987-05-03T06:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "01:00:00", "1987-05-03T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1987-09-27T04:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "1987-09-27T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1987-09-27T05:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:00:00", "1987-09-27T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1987-05-03T05:59:59+00:00").tz("America/Tegucigalpa").zone(), 360, "1987-05-03T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1987-05-03T06:00:00+00:00").tz("America/Tegucigalpa").zone(), 300, "1987-05-03T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1987-09-27T04:59:59+00:00").tz("America/Tegucigalpa").zone(), 300, "1987-09-27T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1987-09-27T05:00:00+00:00").tz("America/Tegucigalpa").zone(), 360, "1987-09-27T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-05-01T05:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "1988-05-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1988-05-01T06:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "01:00:00", "1988-05-01T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1988-09-25T04:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "1988-09-25T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1988-09-25T05:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:00:00", "1988-09-25T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1988-05-01T05:59:59+00:00").tz("America/Tegucigalpa").zone(), 360, "1988-05-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1988-05-01T06:00:00+00:00").tz("America/Tegucigalpa").zone(), 300, "1988-05-01T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1988-09-25T04:59:59+00:00").tz("America/Tegucigalpa").zone(), 300, "1988-09-25T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1988-09-25T05:00:00+00:00").tz("America/Tegucigalpa").zone(), 360, "1988-09-25T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-05-07T05:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "2006-05-07T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("2006-05-07T06:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "01:00:00", "2006-05-07T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("2006-08-07T04:59:59+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:59:59", "2006-08-07T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("2006-08-07T05:00:00+00:00").tz("America/Tegucigalpa").format("HH:mm:ss"), "23:00:00", "2006-08-07T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("2006-05-07T05:59:59+00:00").tz("America/Tegucigalpa").zone(), 360, "2006-05-07T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2006-05-07T06:00:00+00:00").tz("America/Tegucigalpa").zone(), 300, "2006-05-07T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-08-07T04:59:59+00:00").tz("America/Tegucigalpa").zone(), 300, "2006-08-07T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-08-07T05:00:00+00:00").tz("America/Tegucigalpa").zone(), 360, "2006-08-07T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
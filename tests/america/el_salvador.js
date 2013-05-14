var moment = require("../../index");

exports["America/El_Salvador"] = {

	"1921" : function (t) {
		t.equal(moment("1921-01-01T05:56:47+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:59:59", "1921-01-01T05:56:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1921-01-01T05:56:48+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:56:48", "1921-01-01T05:56:48+00:00 should be 23:56:48 CST");

		t.equal(moment("1921-01-01T05:56:47+00:00").tz("America/El_Salvador").zone(), 21408 / 60, "1921-01-01T05:56:47+00:00 should be 21408 / 60 minutes offset in LMT");
		t.equal(moment("1921-01-01T05:56:48+00:00").tz("America/El_Salvador").zone(), 360, "1921-01-01T05:56:48+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-05-03T05:59:59+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:59:59", "1987-05-03T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1987-05-03T06:00:00+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "01:00:00", "1987-05-03T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1987-09-27T04:59:59+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:59:59", "1987-09-27T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1987-09-27T05:00:00+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:00:00", "1987-09-27T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1987-05-03T05:59:59+00:00").tz("America/El_Salvador").zone(), 360, "1987-05-03T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1987-05-03T06:00:00+00:00").tz("America/El_Salvador").zone(), 300, "1987-05-03T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1987-09-27T04:59:59+00:00").tz("America/El_Salvador").zone(), 300, "1987-09-27T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1987-09-27T05:00:00+00:00").tz("America/El_Salvador").zone(), 360, "1987-09-27T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-05-01T05:59:59+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:59:59", "1988-05-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1988-05-01T06:00:00+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "01:00:00", "1988-05-01T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1988-09-25T04:59:59+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:59:59", "1988-09-25T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1988-09-25T05:00:00+00:00").tz("America/El_Salvador").format("HH:mm:ss"), "23:00:00", "1988-09-25T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1988-05-01T05:59:59+00:00").tz("America/El_Salvador").zone(), 360, "1988-05-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1988-05-01T06:00:00+00:00").tz("America/El_Salvador").zone(), 300, "1988-05-01T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1988-09-25T04:59:59+00:00").tz("America/El_Salvador").zone(), 300, "1988-09-25T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1988-09-25T05:00:00+00:00").tz("America/El_Salvador").zone(), 360, "1988-09-25T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
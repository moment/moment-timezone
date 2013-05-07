var moment = require("../../moment-timezone");

exports["America/Guatemala"] = {

	"1918" : function (t) {
		t.equal(moment("1918-10-05T06:02:03+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1918-10-05T06:02:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1918-10-05T06:02:04+00:00").tz("America/Guatemala").format("HH:mm:ss"), "00:02:04", "1918-10-05T06:02:04+00:00 should be 00:02:04 CST");

		t.equal(moment("1918-10-05T06:02:03+00:00").tz("America/Guatemala").zone(), 21724 / 60, "1918-10-05T06:02:03+00:00 should be 21724 / 60 minutes offset in LMT");
		t.equal(moment("1918-10-05T06:02:04+00:00").tz("America/Guatemala").zone(), 360, "1918-10-05T06:02:04+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-11-25T05:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1973-11-25T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1973-11-25T06:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "01:00:00", "1973-11-25T06:00:00+00:00 should be 01:00:00 CDT");

		t.equal(moment("1973-11-25T05:59:59+00:00").tz("America/Guatemala").zone(), 360, "1973-11-25T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1973-11-25T06:00:00+00:00").tz("America/Guatemala").zone(), 300, "1973-11-25T06:00:00+00:00 should be 300 minutes offset in CDT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-02-24T04:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1974-02-24T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1974-02-24T05:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:00:00", "1974-02-24T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1974-02-24T04:59:59+00:00").tz("America/Guatemala").zone(), 300, "1974-02-24T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1974-02-24T05:00:00+00:00").tz("America/Guatemala").zone(), 360, "1974-02-24T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-05-21T05:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1983-05-21T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1983-05-21T06:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "01:00:00", "1983-05-21T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1983-09-22T04:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1983-09-22T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1983-09-22T05:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:00:00", "1983-09-22T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1983-05-21T05:59:59+00:00").tz("America/Guatemala").zone(), 360, "1983-05-21T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1983-05-21T06:00:00+00:00").tz("America/Guatemala").zone(), 300, "1983-05-21T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1983-09-22T04:59:59+00:00").tz("America/Guatemala").zone(), 300, "1983-09-22T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1983-09-22T05:00:00+00:00").tz("America/Guatemala").zone(), 360, "1983-09-22T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-23T05:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1991-03-23T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1991-03-23T06:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "01:00:00", "1991-03-23T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1991-09-07T04:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "1991-09-07T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1991-09-07T05:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:00:00", "1991-09-07T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1991-03-23T05:59:59+00:00").tz("America/Guatemala").zone(), 360, "1991-03-23T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1991-03-23T06:00:00+00:00").tz("America/Guatemala").zone(), 300, "1991-03-23T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1991-09-07T04:59:59+00:00").tz("America/Guatemala").zone(), 300, "1991-09-07T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1991-09-07T05:00:00+00:00").tz("America/Guatemala").zone(), 360, "1991-09-07T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-30T05:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "2006-04-30T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("2006-04-30T06:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "01:00:00", "2006-04-30T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("2006-10-01T04:59:59+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:59:59", "2006-10-01T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("2006-10-01T05:00:00+00:00").tz("America/Guatemala").format("HH:mm:ss"), "23:00:00", "2006-10-01T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("2006-04-30T05:59:59+00:00").tz("America/Guatemala").zone(), 360, "2006-04-30T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2006-04-30T06:00:00+00:00").tz("America/Guatemala").zone(), 300, "2006-04-30T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-01T04:59:59+00:00").tz("America/Guatemala").zone(), 300, "2006-10-01T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-01T05:00:00+00:00").tz("America/Guatemala").zone(), 360, "2006-10-01T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
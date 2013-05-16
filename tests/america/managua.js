var moment = require("../../index");

exports["America/Managua"] = {

	"1934" : function (t) {
		t.equal(moment("1934-06-23T05:45:11+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1934-06-23T05:45:11+00:00 should be 23:59:59 MMT");
		t.equal(moment("1934-06-23T05:45:12+00:00").tz("America/Managua").format("HH:mm:ss"), "23:45:12", "1934-06-23T05:45:12+00:00 should be 23:45:12 CST");

		t.equal(moment("1934-06-23T05:45:11+00:00").tz("America/Managua").zone(), 20712 / 60, "1934-06-23T05:45:11+00:00 should be 20712 / 60 minutes offset in MMT");
		t.equal(moment("1934-06-23T05:45:12+00:00").tz("America/Managua").zone(), 360, "1934-06-23T05:45:12+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-05-01T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1973-05-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1973-05-01T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "01:00:00", "1973-05-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1973-05-01T05:59:59+00:00").tz("America/Managua").zone(), 360, "1973-05-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1973-05-01T06:00:00+00:00").tz("America/Managua").zone(), 300, "1973-05-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-16T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1975-02-16T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1975-02-16T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "1975-02-16T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1975-02-16T04:59:59+00:00").tz("America/Managua").zone(), 300, "1975-02-16T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1975-02-16T05:00:00+00:00").tz("America/Managua").zone(), 360, "1975-02-16T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-18T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1979-03-18T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1979-03-18T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "01:00:00", "1979-03-18T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1979-06-25T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1979-06-25T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1979-06-25T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "1979-06-25T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1979-03-18T05:59:59+00:00").tz("America/Managua").zone(), 360, "1979-03-18T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1979-03-18T06:00:00+00:00").tz("America/Managua").zone(), 300, "1979-03-18T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1979-06-25T04:59:59+00:00").tz("America/Managua").zone(), 300, "1979-06-25T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1979-06-25T05:00:00+00:00").tz("America/Managua").zone(), 360, "1979-06-25T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-16T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1980-03-16T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1980-03-16T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "01:00:00", "1980-03-16T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1980-06-23T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1980-06-23T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1980-06-23T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "1980-06-23T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1980-03-16T05:59:59+00:00").tz("America/Managua").zone(), 360, "1980-03-16T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1980-03-16T06:00:00+00:00").tz("America/Managua").zone(), 300, "1980-03-16T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1980-06-23T04:59:59+00:00").tz("America/Managua").zone(), 300, "1980-06-23T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1980-06-23T05:00:00+00:00").tz("America/Managua").zone(), 360, "1980-06-23T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-01T09:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "03:59:59", "1992-01-01T09:59:59+00:00 should be 03:59:59 CST");
		t.equal(moment("1992-01-01T10:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "05:00:00", "1992-01-01T10:00:00+00:00 should be 05:00:00 EST");
		t.equal(moment("1992-09-24T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1992-09-24T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1992-09-24T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "1992-09-24T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1992-01-01T09:59:59+00:00").tz("America/Managua").zone(), 360, "1992-01-01T09:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1992-01-01T10:00:00+00:00").tz("America/Managua").zone(), 300, "1992-01-01T10:00:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1992-09-24T04:59:59+00:00").tz("America/Managua").zone(), 300, "1992-09-24T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1992-09-24T05:00:00+00:00").tz("America/Managua").zone(), 360, "1992-09-24T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-01-01T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1993-01-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1993-01-01T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "01:00:00", "1993-01-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1993-01-01T05:59:59+00:00").tz("America/Managua").zone(), 360, "1993-01-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1993-01-01T06:00:00+00:00").tz("America/Managua").zone(), 300, "1993-01-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-01-01T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "1997-01-01T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1997-01-01T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "1997-01-01T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1997-01-01T04:59:59+00:00").tz("America/Managua").zone(), 300, "1997-01-01T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1997-01-01T05:00:00+00:00").tz("America/Managua").zone(), 360, "1997-01-01T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-10T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "2005-04-10T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("2005-04-10T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "01:00:00", "2005-04-10T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("2005-10-02T04:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "23:59:59", "2005-10-02T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("2005-10-02T05:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "23:00:00", "2005-10-02T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("2005-04-10T05:59:59+00:00").tz("America/Managua").zone(), 360, "2005-04-10T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2005-04-10T06:00:00+00:00").tz("America/Managua").zone(), 300, "2005-04-10T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2005-10-02T04:59:59+00:00").tz("America/Managua").zone(), 300, "2005-10-02T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2005-10-02T05:00:00+00:00").tz("America/Managua").zone(), 360, "2005-10-02T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-30T07:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "01:59:59", "2006-04-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2006-04-30T08:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "03:00:00", "2006-04-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2006-10-01T05:59:59+00:00").tz("America/Managua").format("HH:mm:ss"), "00:59:59", "2006-10-01T05:59:59+00:00 should be 00:59:59 CDT");
		t.equal(moment("2006-10-01T06:00:00+00:00").tz("America/Managua").format("HH:mm:ss"), "00:00:00", "2006-10-01T06:00:00+00:00 should be 00:00:00 CST");

		t.equal(moment("2006-04-30T07:59:59+00:00").tz("America/Managua").zone(), 360, "2006-04-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2006-04-30T08:00:00+00:00").tz("America/Managua").zone(), 300, "2006-04-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-01T05:59:59+00:00").tz("America/Managua").zone(), 300, "2006-10-01T05:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-01T06:00:00+00:00").tz("America/Managua").zone(), 360, "2006-10-01T06:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
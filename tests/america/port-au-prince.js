var moment = require("../../index");

exports["America/Port-au-Prince"] = {

	"1917" : function (t) {
		t.equal(moment("1917-01-24T16:48:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "11:59:59", "1917-01-24T16:48:59+00:00 should be 11:59:59 PPMT");
		t.equal(moment("1917-01-24T16:49:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "11:49:00", "1917-01-24T16:49:00+00:00 should be 11:49:00 EST");

		t.equal(moment("1917-01-24T16:48:59+00:00").tz("America/Port-au-Prince").zone(), 289, "1917-01-24T16:48:59+00:00 should be 289 minutes offset in PPMT");
		t.equal(moment("1917-01-24T16:49:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1917-01-24T16:49:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-05-08T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1983-05-08T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1983-05-08T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1983-05-08T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("1983-10-30T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1983-10-30T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1983-10-30T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "1983-10-30T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1983-05-08T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1983-05-08T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1983-05-08T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1983-05-08T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1983-10-30T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1983-10-30T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1983-10-30T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1983-10-30T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1984-04-29T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1984-04-29T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1984-04-29T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("1984-10-28T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1984-10-28T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1984-10-28T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "1984-10-28T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1984-04-29T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1984-04-29T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1984-04-29T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1984-04-29T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1984-10-28T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1984-10-28T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1984-10-28T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1984-10-28T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1985-04-28T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1985-04-28T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1985-04-28T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("1985-10-27T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1985-10-27T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1985-10-27T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "1985-10-27T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1985-04-28T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1985-04-28T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1985-04-28T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1985-04-28T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1985-10-27T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1985-10-27T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1985-10-27T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1985-10-27T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1986-04-27T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1986-04-27T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1986-04-27T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("1986-10-26T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1986-10-26T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1986-10-26T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "1986-10-26T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1986-04-27T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1986-04-27T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1986-04-27T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1986-04-27T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1986-10-26T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1986-10-26T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1986-10-26T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1986-10-26T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-26T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1987-04-26T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1987-04-26T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1987-04-26T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "1987-10-25T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "1987-10-25T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1987-04-26T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1987-04-26T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1987-04-26T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1987-04-26T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1987-10-25T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1987-10-25T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1988-04-03T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1988-04-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1988-04-03T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1988-10-30T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1988-10-30T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1988-10-30T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1988-10-30T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1988-04-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1988-04-03T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1988-04-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1988-04-03T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1988-10-30T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1988-10-30T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1988-10-30T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1988-10-30T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1989-04-02T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1989-04-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1989-04-02T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1989-10-29T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1989-10-29T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1989-10-29T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1989-10-29T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1989-04-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1989-04-02T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1989-04-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1989-04-02T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1989-10-29T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1989-10-29T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1989-10-29T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1989-10-29T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1990-04-01T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1990-04-01T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1990-04-01T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1990-10-28T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1990-10-28T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1990-10-28T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1990-10-28T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1990-04-01T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1990-04-01T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1990-04-01T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1990-04-01T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1990-10-28T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1990-10-28T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1990-10-28T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1990-10-28T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1991-04-07T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1991-04-07T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1991-04-07T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1991-10-27T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1991-10-27T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1991-10-27T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1991-10-27T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1991-04-07T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1991-04-07T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1991-04-07T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1991-04-07T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1991-10-27T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1991-10-27T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1991-10-27T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1991-10-27T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1992-04-05T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1992-04-05T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1992-04-05T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1992-10-25T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1992-10-25T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1992-10-25T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1992-10-25T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1992-04-05T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1992-04-05T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1992-04-05T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1992-04-05T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1992-10-25T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1992-10-25T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1992-10-25T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1992-10-25T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1993-04-04T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1993-04-04T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1993-04-04T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1993-10-31T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1993-10-31T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1993-10-31T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1993-10-31T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1993-04-04T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1993-04-04T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1993-04-04T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1993-04-04T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1993-10-31T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1993-10-31T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1993-10-31T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1993-10-31T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1994-04-03T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1994-04-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1994-04-03T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1994-10-30T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1994-10-30T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1994-10-30T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1994-10-30T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1994-04-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1994-04-03T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1994-04-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1994-04-03T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1994-10-30T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1994-10-30T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1994-10-30T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1994-10-30T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1995-04-02T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1995-04-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1995-04-02T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1995-10-29T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1995-10-29T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1995-10-29T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1995-10-29T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1995-04-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1995-04-02T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1995-04-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1995-04-02T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1995-10-29T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1995-10-29T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1995-10-29T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1995-10-29T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1996-04-07T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1996-04-07T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1996-04-07T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1996-10-27T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1996-10-27T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1996-10-27T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1996-10-27T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1996-04-07T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1996-04-07T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1996-04-07T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1996-04-07T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1996-10-27T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1996-10-27T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1996-10-27T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1996-10-27T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "00:59:59", "1997-04-06T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("1997-04-06T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "02:00:00", "1997-04-06T06:00:00+00:00 should be 02:00:00 EDT");
		t.equal(moment("1997-10-26T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "1997-10-26T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1997-10-26T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "1997-10-26T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1997-04-06T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "1997-04-06T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1997-04-06T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "1997-04-06T06:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1997-10-26T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "1997-10-26T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1997-10-26T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "1997-10-26T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "2005-04-03T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("2005-04-03T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2005-04-03T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("2005-10-30T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "2005-10-30T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("2005-10-30T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "2005-10-30T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("2005-04-03T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2005-04-03T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2005-04-03T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2005-04-03T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2005-10-30T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2005-10-30T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2005-10-30T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2005-10-30T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T04:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "2006-04-02T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("2006-04-02T05:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2006-04-02T05:00:00+00:00 should be 01:00:00 EDT");
		t.equal(moment("2006-10-29T03:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:59:59", "2006-10-29T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("2006-10-29T04:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "23:00:00", "2006-10-29T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("2006-04-02T04:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2006-04-02T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2006-04-02T05:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2006-04-02T05:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2006-10-29T03:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2006-10-29T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2006-10-29T04:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2006-10-29T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2012-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2012-03-11T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2012-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2012-11-04T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2012-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2012-11-04T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2012-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2012-03-11T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2012-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2012-03-11T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2012-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2012-11-04T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2012-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2012-11-04T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2012-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2013-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2013-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2013-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2013-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2013-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2013-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2013-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2013-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2014-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2014-03-09T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2014-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2014-11-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2014-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2014-11-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2014-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2014-03-09T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2014-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2014-03-09T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2014-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2014-11-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2014-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2014-11-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2014-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2015-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2015-03-08T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2015-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2015-11-01T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2015-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2015-11-01T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2015-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2015-03-08T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2015-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2015-03-08T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2015-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2015-11-01T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2015-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2015-11-01T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2015-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2016-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2016-03-13T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2016-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2016-11-06T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2016-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2016-11-06T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2016-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2016-03-13T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2016-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2016-03-13T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2016-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2016-11-06T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2016-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2016-11-06T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2016-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2017-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2017-03-12T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2017-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2017-11-05T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2017-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2017-11-05T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2017-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2017-03-12T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2017-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2017-03-12T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2017-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2017-11-05T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2017-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2017-11-05T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2017-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2018-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2018-03-11T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2018-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2018-11-04T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2018-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2018-11-04T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2018-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2018-03-11T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2018-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2018-03-11T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2018-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2018-11-04T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2018-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2018-11-04T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2018-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2019-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2019-03-10T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2019-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2019-11-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2019-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2019-11-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2019-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2019-03-10T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2019-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2019-03-10T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2019-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2019-11-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2019-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2019-11-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2019-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2020-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2020-03-08T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2020-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2020-11-01T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2020-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2020-11-01T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2020-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2020-03-08T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2020-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2020-03-08T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2020-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2020-11-01T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2020-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2020-11-01T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2020-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2021-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2021-03-14T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2021-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2021-11-07T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2021-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2021-11-07T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2021-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2021-03-14T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2021-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2021-03-14T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2021-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2021-11-07T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2021-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2021-11-07T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2021-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2022-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2022-03-13T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2022-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2022-11-06T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2022-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2022-11-06T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2022-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2022-03-13T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2022-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2022-03-13T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2022-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2022-11-06T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2022-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2022-11-06T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2022-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2023-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2023-03-12T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2023-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2023-11-05T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2023-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2023-11-05T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2023-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2023-03-12T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2023-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2023-03-12T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2023-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2023-11-05T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2023-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2023-11-05T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2023-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2024-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2024-03-10T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2024-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2024-11-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2024-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2024-11-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2024-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2024-03-10T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2024-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2024-03-10T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2024-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2024-11-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2024-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2024-11-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2024-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2025-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2025-03-09T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2025-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2025-11-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2025-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2025-11-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2025-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2025-03-09T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2025-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2025-03-09T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2025-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2025-11-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2025-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2025-11-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2025-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2026-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2026-03-08T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2026-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2026-11-01T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2026-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2026-11-01T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2026-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2026-03-08T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2026-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2026-03-08T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2026-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2026-11-01T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2026-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2026-11-01T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2026-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2027-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2027-03-14T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2027-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2027-11-07T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2027-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2027-11-07T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2027-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2027-03-14T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2027-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2027-03-14T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2027-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2027-11-07T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2027-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2027-11-07T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2027-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2028-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2028-03-12T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2028-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2028-11-05T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2028-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2028-11-05T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2028-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2028-03-12T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2028-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2028-03-12T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2028-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2028-11-05T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2028-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2028-11-05T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2028-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2029-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2029-03-11T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2029-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2029-11-04T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2029-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2029-11-04T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2029-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2029-03-11T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2029-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2029-03-11T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2029-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2029-11-04T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2029-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2029-11-04T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2029-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2030-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2030-03-10T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2030-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2030-11-03T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2030-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2030-11-03T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2030-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2030-03-10T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2030-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2030-03-10T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2030-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2030-11-03T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2030-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2030-11-03T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2030-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2031-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2031-03-09T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2031-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2031-11-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2031-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2031-11-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2031-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2031-03-09T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2031-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2031-03-09T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2031-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2031-11-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2031-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2031-11-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2031-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2032-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2032-03-14T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2032-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2032-11-07T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2032-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2032-11-07T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2032-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2032-03-14T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2032-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2032-03-14T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2032-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2032-11-07T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2032-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2032-11-07T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2032-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2033-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2033-03-13T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2033-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2033-11-06T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2033-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2033-11-06T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2033-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2033-03-13T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2033-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2033-03-13T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2033-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2033-11-06T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2033-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2033-11-06T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2033-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2034-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2034-03-12T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2034-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2034-11-05T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2034-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2034-11-05T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2034-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2034-03-12T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2034-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2034-03-12T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2034-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2034-11-05T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2034-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2034-11-05T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2034-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2035-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2035-03-11T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2035-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2035-11-04T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2035-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2035-11-04T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2035-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2035-03-11T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2035-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2035-03-11T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2035-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2035-11-04T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2035-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2035-11-04T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2035-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2036-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2036-03-09T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2036-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2036-11-02T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2036-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2036-11-02T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2036-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2036-03-09T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2036-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2036-03-09T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2036-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2036-11-02T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2036-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2036-11-02T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2036-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T06:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2037-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2037-03-08T07:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "03:00:00", "2037-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2037-11-01T05:59:59+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:59:59", "2037-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2037-11-01T06:00:00+00:00").tz("America/Port-au-Prince").format("HH:mm:ss"), "01:00:00", "2037-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2037-03-08T06:59:59+00:00").tz("America/Port-au-Prince").zone(), 300, "2037-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2037-03-08T07:00:00+00:00").tz("America/Port-au-Prince").zone(), 240, "2037-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2037-11-01T05:59:59+00:00").tz("America/Port-au-Prince").zone(), 240, "2037-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2037-11-01T06:00:00+00:00").tz("America/Port-au-Prince").zone(), 300, "2037-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};
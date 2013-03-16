var moment = require("../../moment-timezone");

exports["Asia/Baghdad"] = {

	"1917" : function (t) {
		t.equal(moment("1917-12-31T21:02:23+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1917-12-31T21:02:23+00:00 should be 23:59:59 BMT");
		t.equal(moment("1917-12-31T21:02:24+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:02:24", "1917-12-31T21:02:24+00:00 should be 00:02:24 AST");

		t.equal(moment("1917-12-31T21:02:23+00:00").tz("Asia/Baghdad").zone(), -177, "1917-12-31T21:02:23+00:00 should be -177 minutes offset in BMT");
		t.equal(moment("1917-12-31T21:02:24+00:00").tz("Asia/Baghdad").zone(), -180, "1917-12-31T21:02:24+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-30T20:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1982-04-30T20:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1982-04-30T21:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1982-04-30T21:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1982-09-30T19:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:00:00", "1982-09-30T20:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1982-04-30T20:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1982-04-30T20:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1982-04-30T21:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1982-04-30T21:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1982-09-30T19:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1982-09-30T20:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-30T20:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1983-03-30T20:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1983-03-30T21:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1983-03-30T21:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1983-09-30T19:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:00:00", "1983-09-30T20:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1983-03-30T20:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1983-03-30T20:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1983-03-30T21:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1983-03-30T21:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1983-09-30T19:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1983-09-30T20:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1984-03-31T20:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1984-03-31T21:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1984-09-30T19:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1984-09-30T19:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1984-09-30T20:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:00:00", "1984-09-30T20:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1984-03-31T20:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1984-03-31T21:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1984-09-30T19:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1984-09-30T19:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1984-09-30T20:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1984-09-30T20:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-31T20:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "23:59:59", "1985-03-31T20:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1985-03-31T21:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1985-03-31T21:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1985-09-28T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1985-09-28T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1985-03-31T20:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1985-03-31T20:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1985-03-31T21:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1985-03-31T21:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1985-09-28T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1985-09-28T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:59:59", "1986-03-29T21:59:59+00:00 should be 00:59:59 AST");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:00:00", "1986-03-29T22:00:00+00:00 should be 02:00:00 ADT");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1986-09-27T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1986-09-27T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1986-03-29T21:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1986-03-29T22:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1986-09-27T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1986-09-27T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:59:59", "1987-03-28T21:59:59+00:00 should be 00:59:59 AST");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:00:00", "1987-03-28T22:00:00+00:00 should be 02:00:00 ADT");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1987-09-26T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1987-09-26T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1987-03-28T21:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1987-03-28T22:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1987-09-26T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1987-09-26T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:59:59", "1988-03-26T21:59:59+00:00 should be 00:59:59 AST");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:00:00", "1988-03-26T22:00:00+00:00 should be 02:00:00 ADT");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1988-09-24T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1988-09-24T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1988-03-26T21:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1988-03-26T22:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1988-09-24T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1988-09-24T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:59:59", "1989-03-25T21:59:59+00:00 should be 00:59:59 AST");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:00:00", "1989-03-25T22:00:00+00:00 should be 02:00:00 ADT");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1989-09-23T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1989-09-23T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1989-03-25T21:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1989-03-25T22:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1989-09-23T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1989-09-23T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "00:59:59", "1990-03-24T21:59:59+00:00 should be 00:59:59 AST");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:00:00", "1990-03-24T22:00:00+00:00 should be 02:00:00 ADT");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:59:59", "1990-09-29T21:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "01:00:00", "1990-09-29T22:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1990-03-24T21:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1990-03-24T22:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1990-09-29T21:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1990-09-29T22:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1991-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1991-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1991-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1991-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1991-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1991-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1991-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1991-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1991-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1991-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1991-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1991-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1991-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1991-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1991-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1992-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1992-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1992-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1992-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1992-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1992-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1992-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1992-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1992-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1992-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1992-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1992-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1992-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1992-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1992-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1993-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1993-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1993-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1993-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1993-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1993-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1993-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1993-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1993-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1993-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1993-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1993-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1993-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1993-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1993-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1994-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1994-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1994-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1994-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1994-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1994-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1994-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1994-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1994-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1994-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1994-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1994-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1994-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1994-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1994-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1995-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1995-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1995-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1995-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1995-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1995-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1995-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1995-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1995-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1995-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1995-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1995-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1995-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1995-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1995-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1996-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1996-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1996-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1996-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1996-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1996-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1996-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1996-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1996-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1996-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1996-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1996-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1996-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1996-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1996-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1997-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1997-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1997-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1997-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1997-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1997-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1997-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1997-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1997-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1997-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1997-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1997-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1997-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1997-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1997-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1998-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1998-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1998-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1998-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1998-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1998-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1998-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1998-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1998-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1998-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1998-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1998-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1998-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1998-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1998-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "1999-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("1999-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "1999-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("1999-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "1999-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("1999-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "1999-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("1999-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "1999-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("1999-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "1999-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1999-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "1999-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("1999-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "1999-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2000-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2000-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2000-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2000-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2000-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2000-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2000-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2000-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2000-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2000-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2000-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2000-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2000-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2000-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2000-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2001-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2001-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2001-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2001-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2001-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2001-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2001-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2001-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2001-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2001-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2001-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2001-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2001-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2001-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2001-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2002-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2002-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2002-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2002-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2002-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2002-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2002-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2002-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2002-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2002-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2002-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2002-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2002-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2002-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2002-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2003-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2003-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2003-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2003-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2003-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2003-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2003-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2003-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2003-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2003-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2003-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2003-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2003-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2003-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2003-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2004-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2004-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2004-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2004-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2004-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2004-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2004-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2004-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2004-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2004-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2004-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2004-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2004-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2004-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2004-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2005-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2005-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2005-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2005-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2005-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2005-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2005-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2005-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2005-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2005-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2005-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2005-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2005-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2005-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2005-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2006-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2006-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2006-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2006-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2006-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2006-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2006-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2006-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2006-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2006-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2006-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2006-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2006-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2006-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2006-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-31T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "02:59:59", "2007-03-31T23:59:59+00:00 should be 02:59:59 AST");
		t.equal(moment("2007-04-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "04:00:00", "2007-04-01T00:00:00+00:00 should be 04:00:00 ADT");
		t.equal(moment("2007-09-30T23:59:59+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:59:59", "2007-09-30T23:59:59+00:00 should be 03:59:59 ADT");
		t.equal(moment("2007-10-01T00:00:00+00:00").tz("Asia/Baghdad").format("HH:mm:ss"), "03:00:00", "2007-10-01T00:00:00+00:00 should be 03:00:00 AST");

		t.equal(moment("2007-03-31T23:59:59+00:00").tz("Asia/Baghdad").zone(), -180, "2007-03-31T23:59:59+00:00 should be -180 minutes offset in AST");
		t.equal(moment("2007-04-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -240, "2007-04-01T00:00:00+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2007-09-30T23:59:59+00:00").tz("Asia/Baghdad").zone(), -240, "2007-09-30T23:59:59+00:00 should be -240 minutes offset in ADT");
		t.equal(moment("2007-10-01T00:00:00+00:00").tz("Asia/Baghdad").zone(), -180, "2007-10-01T00:00:00+00:00 should be -180 minutes offset in AST");

		t.done();
	}
};
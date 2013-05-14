var moment = require("../../index");

exports["Asia/Tehran"] = {

	"1915" : function (t) {
		t.equal(moment("1915-12-31T20:34:15+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1915-12-31T20:34:15+00:00 should be 23:59:59 LMT");
		t.equal(moment("1915-12-31T20:34:16+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "00:00:00", "1915-12-31T20:34:16+00:00 should be 00:00:00 TMT");

		t.equal(moment("1915-12-31T20:34:15+00:00").tz("Asia/Tehran").zone(), -12344 / 60, "1915-12-31T20:34:15+00:00 should be -12344 / 60 minutes offset in LMT");
		t.equal(moment("1915-12-31T20:34:16+00:00").tz("Asia/Tehran").zone(), -12344 / 60, "1915-12-31T20:34:16+00:00 should be -12344 / 60 minutes offset in TMT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-12-31T20:34:15+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1945-12-31T20:34:15+00:00 should be 23:59:59 TMT");
		t.equal(moment("1945-12-31T20:34:16+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "00:04:16", "1945-12-31T20:34:16+00:00 should be 00:04:16 IRST");

		t.equal(moment("1945-12-31T20:34:15+00:00").tz("Asia/Tehran").zone(), -12344 / 60, "1945-12-31T20:34:15+00:00 should be -12344 / 60 minutes offset in TMT");
		t.equal(moment("1945-12-31T20:34:16+00:00").tz("Asia/Tehran").zone(), -210, "1945-12-31T20:34:16+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-10-31T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1977-10-31T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1977-10-31T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "00:30:00", "1977-10-31T20:30:00+00:00 should be 00:30:00 IRST");

		t.equal(moment("1977-10-31T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1977-10-31T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1977-10-31T20:30:00+00:00").tz("Asia/Tehran").zone(), -240, "1977-10-31T20:30:00+00:00 should be -240 minutes offset in IRST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-20T19:59:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1978-03-20T19:59:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1978-03-20T20:00:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1978-03-20T20:00:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1978-10-20T18:59:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1978-10-20T18:59:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1978-10-20T19:00:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1978-10-20T19:00:00+00:00 should be 23:00:00 IRST");
		t.equal(moment("1978-12-31T19:59:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1978-12-31T19:59:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1978-12-31T20:00:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:30:00", "1978-12-31T20:00:00+00:00 should be 23:30:00 IRST");

		t.equal(moment("1978-03-20T19:59:59+00:00").tz("Asia/Tehran").zone(), -240, "1978-03-20T19:59:59+00:00 should be -240 minutes offset in IRST");
		t.equal(moment("1978-03-20T20:00:00+00:00").tz("Asia/Tehran").zone(), -300, "1978-03-20T20:00:00+00:00 should be -300 minutes offset in IRDT");
		t.equal(moment("1978-10-20T18:59:59+00:00").tz("Asia/Tehran").zone(), -300, "1978-10-20T18:59:59+00:00 should be -300 minutes offset in IRDT");
		t.equal(moment("1978-10-20T19:00:00+00:00").tz("Asia/Tehran").zone(), -240, "1978-10-20T19:00:00+00:00 should be -240 minutes offset in IRST");
		t.equal(moment("1978-12-31T19:59:59+00:00").tz("Asia/Tehran").zone(), -240, "1978-12-31T19:59:59+00:00 should be -240 minutes offset in IRST");
		t.equal(moment("1978-12-31T20:00:00+00:00").tz("Asia/Tehran").zone(), -210, "1978-12-31T20:00:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1979-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1979-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1979-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1979-09-18T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1979-09-18T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1979-09-18T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1979-09-18T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1979-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1979-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1979-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1979-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1979-09-18T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1979-09-18T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1979-09-18T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1979-09-18T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1980-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1980-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1980-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1980-09-22T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1980-09-22T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1980-09-22T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1980-09-22T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1980-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1980-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1980-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1980-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1980-09-22T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1980-09-22T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1980-09-22T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1980-09-22T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-05-02T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1991-05-02T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1991-05-02T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1991-05-02T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1991-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1991-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1991-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1991-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1991-05-02T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1991-05-02T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1991-05-02T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1991-05-02T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1991-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1991-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1991-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1991-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1992-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1992-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1992-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1992-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1992-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1992-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1992-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1992-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1992-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1992-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1992-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1992-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1992-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1992-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1992-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1993-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1993-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1993-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1993-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1993-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1993-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1993-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1993-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1993-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1993-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1993-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1993-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1993-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1993-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1993-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1994-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1994-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1994-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1994-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1994-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1994-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1994-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1994-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1994-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1994-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1994-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1994-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1994-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1994-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1994-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1995-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1995-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1995-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1995-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1995-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1995-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1995-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1995-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1995-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1995-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1995-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1995-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1995-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1995-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1995-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1996-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1996-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1996-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1996-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1996-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1996-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1996-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1996-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1996-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1996-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1996-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1996-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1996-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1996-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1996-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1997-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1997-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1997-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1997-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1997-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1997-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1997-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1997-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1997-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1997-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1997-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1997-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1997-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1997-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1997-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1998-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1998-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1998-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1998-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1998-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1998-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1998-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1998-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1998-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1998-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1998-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1998-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1998-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1998-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1998-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1999-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("1999-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "1999-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("1999-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "1999-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("1999-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "1999-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("1999-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "1999-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("1999-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "1999-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1999-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "1999-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("1999-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "1999-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2000-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2000-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2000-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2000-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2000-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2000-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2000-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2000-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2000-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2000-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2000-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2000-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2000-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2000-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2000-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2001-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2001-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2001-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2001-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2001-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2001-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2001-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2001-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2001-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2001-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2001-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2001-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2001-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2001-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2001-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2002-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2002-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2002-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2002-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2002-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2002-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2002-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2002-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2002-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2002-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2002-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2002-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2002-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2002-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2002-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2003-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2003-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2003-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2003-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2003-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2003-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2003-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2003-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2003-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2003-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2003-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2003-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2003-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2003-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2003-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2004-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2004-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2004-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2004-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2004-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2004-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2004-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2004-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2004-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2004-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2004-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2004-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2004-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2004-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2004-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2005-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2005-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2005-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2005-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2005-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2005-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2005-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2005-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2005-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2005-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2005-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2005-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2005-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2005-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2005-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2008-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2008-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2008-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2008-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2008-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2008-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2008-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2008-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2008-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2008-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2008-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2008-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2008-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2008-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2008-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2009-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2009-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2009-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2009-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2009-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2009-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2009-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2009-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2009-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2009-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2009-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2009-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2009-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2009-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2009-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2010-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2010-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2010-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2010-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2010-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2010-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2010-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2010-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2010-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2010-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2010-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2010-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2010-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2010-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2010-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2011-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2011-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2011-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2011-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2011-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2011-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2011-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2011-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2011-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2011-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2011-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2011-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2011-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2011-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2011-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2012-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2012-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2012-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2012-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2012-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2012-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2012-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2012-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2012-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2012-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2012-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2012-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2012-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2012-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2012-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2013-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2013-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2013-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2013-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2013-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2013-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2013-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2013-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2014-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2014-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2014-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2014-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2014-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2014-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2014-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2014-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2014-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2014-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2014-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2014-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2014-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2014-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2014-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2015-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2015-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2015-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2015-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2015-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2015-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2015-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2015-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2015-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2015-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2015-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2015-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2015-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2015-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2015-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2016-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2016-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2016-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2016-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2016-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2016-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2016-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2016-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2016-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2016-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2016-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2016-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2016-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2016-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2016-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2017-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2017-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2017-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2017-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2017-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2017-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2017-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2017-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2017-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2017-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2017-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2017-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2017-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2017-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2017-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2018-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2018-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2018-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2018-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2018-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2018-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2018-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2018-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2018-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2018-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2018-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2018-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2018-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2018-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2018-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2019-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2019-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2019-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2019-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2019-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2019-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2019-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2019-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2019-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2019-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2019-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2019-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2019-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2019-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2019-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2020-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2020-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2020-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2020-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2020-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2020-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2020-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2020-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2020-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2020-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2020-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2020-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2020-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2020-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2020-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2021-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2021-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2021-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2021-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2021-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2021-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2021-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2021-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2021-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2021-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2021-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2021-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2021-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2021-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2021-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2022-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2022-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2022-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2022-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2022-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2022-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2022-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2022-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2022-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2022-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2022-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2022-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2022-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2022-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2022-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2023-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2023-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2023-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2023-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2023-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2023-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2023-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2023-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2023-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2023-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2023-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2023-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2023-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2023-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2023-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2024-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2024-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2024-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2024-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2024-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2024-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2024-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2024-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2024-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2024-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2024-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2024-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2024-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2024-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2024-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2025-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2025-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2025-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2025-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2025-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2025-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2025-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2025-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2025-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2025-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2025-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2025-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2025-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2025-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2025-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2026-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2026-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2026-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2026-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2026-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2026-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2026-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2026-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2026-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2026-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2026-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2026-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2026-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2026-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2026-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2027-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2027-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2027-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2027-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2027-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2027-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2027-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2027-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2027-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2027-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2027-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2027-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2027-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2027-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2027-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2028-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2028-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2028-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2028-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2028-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2028-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2028-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2028-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2028-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2028-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2028-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2028-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2028-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2028-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2028-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2029-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2029-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2029-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2029-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2029-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2029-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2029-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2029-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2029-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2029-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2029-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2029-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2029-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2029-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2029-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2030-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2030-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2030-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2030-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2030-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2030-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2030-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2030-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2030-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2030-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2030-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2030-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2030-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2030-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2030-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2031-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2031-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2031-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2031-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2031-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2031-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2031-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2031-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2031-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2031-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2031-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2031-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2031-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2031-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2031-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2032-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2032-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2032-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2032-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2032-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2032-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2032-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2032-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2032-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2032-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2032-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2032-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2032-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2032-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2032-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2033-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2033-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2033-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2033-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2033-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2033-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2033-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2033-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2033-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2033-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2033-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2033-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2033-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2033-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2033-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2034-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2034-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2034-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2034-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2034-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2034-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2034-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2034-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2034-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2034-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2034-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2034-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2034-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2034-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2034-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2035-03-21T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2035-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2035-03-21T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2035-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2035-09-21T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2035-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2035-09-21T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2035-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2035-03-21T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2035-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2035-03-21T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2035-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2035-09-21T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2035-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2035-09-21T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2036-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2036-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2036-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2036-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2036-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2036-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2036-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2036-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2036-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2036-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2036-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2036-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2036-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2036-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2036-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2037-03-20T20:29:59+00:00 should be 23:59:59 IRST");
		t.equal(moment("2037-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2037-03-20T20:30:00+00:00 should be 01:00:00 IRDT");
		t.equal(moment("2037-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2037-09-20T19:29:59+00:00 should be 23:59:59 IRDT");
		t.equal(moment("2037-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2037-09-20T19:30:00+00:00 should be 23:00:00 IRST");

		t.equal(moment("2037-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2037-03-20T20:29:59+00:00 should be -210 minutes offset in IRST");
		t.equal(moment("2037-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2037-03-20T20:30:00+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2037-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2037-09-20T19:29:59+00:00 should be -270 minutes offset in IRDT");
		t.equal(moment("2037-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2037-09-20T19:30:00+00:00 should be -210 minutes offset in IRST");

		t.done();
	}
};
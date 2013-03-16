var moment = require("../../moment-timezone");

exports["America/Miquelon"] = {

	"1911" : function (t) {
		t.equal(moment("1911-05-15T03:44:39+00:00").tz("America/Miquelon").format("HH:mm:ss"), "23:59:59", "1911-05-15T03:44:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-05-15T03:44:40+00:00").tz("America/Miquelon").format("HH:mm:ss"), "23:44:40", "1911-05-15T03:44:40+00:00 should be 23:44:40 AST");

		t.equal(moment("1911-05-15T03:44:39+00:00").tz("America/Miquelon").zone(), 224, "1911-05-15T03:44:39+00:00 should be 224 minutes offset in LMT");
		t.equal(moment("1911-05-15T03:44:40+00:00").tz("America/Miquelon").zone(), 240, "1911-05-15T03:44:40+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-05-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "23:59:59", "1980-05-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1980-05-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1980-05-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1980-05-01T03:59:59+00:00").tz("America/Miquelon").zone(), 240, "1980-05-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1980-05-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1980-05-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1987-04-05T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1987-04-05T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1987-04-05T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1987-10-25T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1987-10-25T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1987-04-05T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1987-04-05T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1987-04-05T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1987-04-05T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1987-10-25T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1987-10-25T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1988-04-03T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1988-04-03T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1988-04-03T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1988-10-30T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1988-10-30T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1988-10-30T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1988-10-30T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1988-04-03T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1988-04-03T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1988-04-03T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1988-04-03T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1988-10-30T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1988-10-30T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1988-10-30T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1988-10-30T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1989-04-02T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1989-04-02T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1989-04-02T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1989-10-29T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1989-10-29T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1989-10-29T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1989-10-29T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1989-04-02T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1989-04-02T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1989-04-02T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1989-04-02T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1989-10-29T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1989-10-29T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1989-10-29T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1989-10-29T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1990-04-01T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1990-04-01T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1990-04-01T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1990-10-28T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1990-10-28T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1990-10-28T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1990-10-28T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1990-04-01T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1990-04-01T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1990-04-01T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1990-04-01T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1990-10-28T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1990-10-28T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1990-10-28T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1990-10-28T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1991-04-07T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1991-04-07T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1991-04-07T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1991-10-27T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1991-10-27T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1991-10-27T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1991-10-27T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1991-04-07T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1991-04-07T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1991-04-07T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1991-04-07T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1991-10-27T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1991-10-27T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1991-10-27T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1991-10-27T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1992-04-05T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1992-04-05T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1992-04-05T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1992-10-25T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1992-10-25T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1992-10-25T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1992-10-25T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1992-04-05T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1992-04-05T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1992-04-05T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1992-04-05T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1992-10-25T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1992-10-25T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1992-10-25T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1992-10-25T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1993-04-04T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1993-04-04T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1993-04-04T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1993-10-31T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1993-10-31T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1993-10-31T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1993-10-31T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1993-04-04T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1993-04-04T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1993-04-04T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1993-04-04T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1993-10-31T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1993-10-31T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1993-10-31T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1993-10-31T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1994-04-03T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1994-04-03T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1994-04-03T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1994-10-30T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1994-10-30T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1994-10-30T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1994-10-30T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1994-04-03T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1994-04-03T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1994-04-03T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1994-04-03T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1994-10-30T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1994-10-30T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1994-10-30T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1994-10-30T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1995-04-02T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1995-04-02T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1995-04-02T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1995-10-29T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1995-10-29T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1995-10-29T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1995-10-29T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1995-04-02T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1995-04-02T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1995-04-02T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1995-04-02T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1995-10-29T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1995-10-29T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1995-10-29T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1995-10-29T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1996-04-07T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1996-04-07T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1996-04-07T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1996-10-27T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1996-10-27T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1996-10-27T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1996-10-27T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1996-04-07T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1996-04-07T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1996-04-07T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1996-04-07T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1996-10-27T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1996-10-27T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1996-10-27T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1996-10-27T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1997-04-06T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1997-04-06T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1997-04-06T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1997-10-26T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1997-10-26T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1997-10-26T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1997-10-26T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1997-04-06T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1997-04-06T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1997-04-06T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1997-04-06T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1997-10-26T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1997-10-26T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1997-10-26T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1997-10-26T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1998-04-05T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1998-04-05T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1998-04-05T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1998-10-25T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1998-10-25T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1998-10-25T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1998-10-25T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1998-04-05T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1998-04-05T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1998-04-05T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1998-04-05T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1998-10-25T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1998-10-25T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1998-10-25T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1998-10-25T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1999-04-04T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("1999-04-04T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "1999-04-04T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("1999-10-31T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "1999-10-31T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("1999-10-31T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "1999-10-31T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("1999-04-04T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "1999-04-04T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("1999-04-04T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "1999-04-04T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1999-10-31T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "1999-10-31T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("1999-10-31T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "1999-10-31T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2000-04-02T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2000-04-02T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2000-04-02T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2000-10-29T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2000-10-29T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2000-10-29T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2000-10-29T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2000-04-02T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2000-04-02T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2000-04-02T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2000-04-02T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2000-10-29T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2000-10-29T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2000-10-29T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2000-10-29T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2001-04-01T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2001-04-01T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2001-04-01T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2001-10-28T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2001-10-28T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2001-10-28T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2001-10-28T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2001-04-01T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2001-04-01T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2001-04-01T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2001-04-01T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2001-10-28T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2001-10-28T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2001-10-28T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2001-10-28T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2002-04-07T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2002-04-07T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2002-04-07T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2002-10-27T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2002-10-27T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2002-10-27T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2002-10-27T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2002-04-07T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2002-04-07T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2002-04-07T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2002-04-07T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2002-10-27T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2002-10-27T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2002-10-27T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2002-10-27T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2003-04-06T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2003-04-06T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2003-04-06T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2003-10-26T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2003-10-26T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2003-10-26T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2003-10-26T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2003-04-06T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2003-04-06T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2003-04-06T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2003-04-06T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2003-10-26T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2003-10-26T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2003-10-26T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2003-10-26T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2004-04-04T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2004-04-04T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2004-04-04T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2004-10-31T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2004-10-31T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2004-10-31T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2004-10-31T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2004-04-04T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2004-04-04T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2004-04-04T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2004-04-04T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2004-10-31T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2004-10-31T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2004-10-31T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2004-10-31T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2005-04-03T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2005-04-03T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2005-04-03T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2005-10-30T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2005-10-30T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2005-10-30T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2005-10-30T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2005-04-03T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2005-04-03T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2005-04-03T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2005-04-03T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2005-10-30T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2005-10-30T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2005-10-30T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2005-10-30T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2006-04-02T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2006-04-02T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2006-04-02T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2006-10-29T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2006-10-29T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2006-10-29T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2006-10-29T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2006-04-02T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2006-04-02T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2006-04-02T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2006-04-02T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2006-10-29T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2006-10-29T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2006-10-29T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2006-10-29T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2007-03-11T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2007-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2007-03-11T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2007-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2007-11-04T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2007-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2007-11-04T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2007-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2007-03-11T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2007-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2007-03-11T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2007-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2007-11-04T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2007-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2007-11-04T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2008-03-09T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2008-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2008-03-09T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2008-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2008-11-02T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2008-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2008-11-02T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2008-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2008-03-09T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2008-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2008-03-09T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2008-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2008-11-02T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2008-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2008-11-02T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2009-03-08T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2009-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2009-03-08T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2009-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2009-11-01T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2009-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2009-11-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2009-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2009-03-08T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2009-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2009-03-08T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2009-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2009-11-01T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2009-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2009-11-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2010-03-14T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2010-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2010-03-14T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2010-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2010-11-07T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2010-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2010-11-07T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2010-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2010-03-14T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2010-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2010-03-14T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2010-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2010-11-07T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2010-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2010-11-07T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2011-03-13T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2011-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2011-03-13T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2011-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2011-11-06T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2011-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2011-11-06T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2011-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2011-03-13T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2011-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2011-03-13T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2011-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2011-11-06T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2011-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2011-11-06T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2012-03-11T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2012-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2012-03-11T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2012-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2012-11-04T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2012-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2012-11-04T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2012-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2012-03-11T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2012-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2012-03-11T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2012-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2012-11-04T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2012-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2012-11-04T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2013-03-10T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2013-03-10T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2013-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2013-11-03T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2013-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2013-11-03T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2013-03-10T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2013-03-10T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2013-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2013-11-03T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2013-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2013-11-03T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2014-03-09T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2014-03-09T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2014-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2014-11-02T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2014-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2014-11-02T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2014-03-09T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2014-03-09T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2014-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2014-11-02T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2014-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2014-11-02T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2015-03-08T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2015-03-08T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2015-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2015-11-01T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2015-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2015-11-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2015-03-08T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2015-03-08T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2015-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2015-11-01T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2015-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2015-11-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2016-03-13T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2016-03-13T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2016-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2016-11-06T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2016-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2016-11-06T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2016-03-13T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2016-03-13T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2016-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2016-11-06T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2016-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2016-11-06T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2017-03-12T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2017-03-12T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2017-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2017-11-05T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2017-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2017-11-05T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2017-03-12T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2017-03-12T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2017-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2017-11-05T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2017-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2017-11-05T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2018-03-11T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2018-03-11T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2018-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2018-11-04T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2018-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2018-11-04T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2018-03-11T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2018-03-11T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2018-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2018-11-04T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2018-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2018-11-04T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2019-03-10T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2019-03-10T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2019-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2019-11-03T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2019-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2019-11-03T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2019-03-10T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2019-03-10T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2019-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2019-11-03T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2019-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2019-11-03T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2020-03-08T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2020-03-08T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2020-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2020-11-01T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2020-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2020-11-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2020-03-08T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2020-03-08T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2020-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2020-11-01T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2020-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2020-11-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2021-03-14T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2021-03-14T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2021-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2021-11-07T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2021-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2021-11-07T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2021-03-14T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2021-03-14T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2021-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2021-11-07T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2021-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2021-11-07T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2022-03-13T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2022-03-13T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2022-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2022-11-06T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2022-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2022-11-06T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2022-03-13T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2022-03-13T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2022-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2022-11-06T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2022-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2022-11-06T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2023-03-12T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2023-03-12T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2023-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2023-11-05T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2023-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2023-11-05T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2023-03-12T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2023-03-12T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2023-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2023-11-05T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2023-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2023-11-05T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2024-03-10T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2024-03-10T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2024-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2024-11-03T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2024-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2024-11-03T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2024-03-10T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2024-03-10T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2024-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2024-11-03T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2024-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2024-11-03T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2025-03-09T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2025-03-09T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2025-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2025-11-02T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2025-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2025-11-02T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2025-03-09T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2025-03-09T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2025-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2025-11-02T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2025-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2025-11-02T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2026-03-08T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2026-03-08T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2026-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2026-11-01T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2026-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2026-11-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2026-03-08T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2026-03-08T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2026-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2026-11-01T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2026-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2026-11-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2027-03-14T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2027-03-14T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2027-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2027-11-07T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2027-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2027-11-07T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2027-03-14T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2027-03-14T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2027-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2027-11-07T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2027-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2027-11-07T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2028-03-12T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2028-03-12T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2028-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2028-11-05T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2028-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2028-11-05T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2028-03-12T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2028-03-12T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2028-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2028-11-05T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2028-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2028-11-05T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2029-03-11T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2029-03-11T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2029-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2029-11-04T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2029-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2029-11-04T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2029-03-11T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2029-03-11T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2029-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2029-11-04T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2029-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2029-11-04T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2030-03-10T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2030-03-10T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2030-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2030-11-03T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2030-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2030-11-03T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2030-03-10T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2030-03-10T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2030-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2030-11-03T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2030-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2030-11-03T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2031-03-09T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2031-03-09T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2031-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2031-11-02T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2031-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2031-11-02T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2031-03-09T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2031-03-09T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2031-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2031-11-02T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2031-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2031-11-02T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2032-03-14T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2032-03-14T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2032-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2032-11-07T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2032-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2032-11-07T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2032-03-14T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2032-03-14T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2032-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2032-11-07T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2032-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2032-11-07T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2033-03-13T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2033-03-13T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2033-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2033-11-06T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2033-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2033-11-06T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2033-03-13T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2033-03-13T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2033-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2033-11-06T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2033-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2033-11-06T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2034-03-12T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2034-03-12T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2034-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2034-11-05T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2034-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2034-11-05T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2034-03-12T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2034-03-12T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2034-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2034-11-05T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2034-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2034-11-05T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2035-03-11T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2035-03-11T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2035-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2035-11-04T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2035-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2035-11-04T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2035-03-11T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2035-03-11T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2035-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2035-11-04T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2035-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2035-11-04T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2036-03-09T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2036-03-09T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2036-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2036-11-02T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2036-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2036-11-02T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2036-03-09T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2036-03-09T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2036-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2036-11-02T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2036-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2036-11-02T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2037-03-08T04:59:59+00:00 should be 01:59:59 PMST");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2037-03-08T05:00:00+00:00 should be 03:00:00 PMDT");
		t.equal(moment("2037-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2037-11-01T03:59:59+00:00 should be 01:59:59 PMDT");
		t.equal(moment("2037-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2037-11-01T04:00:00+00:00 should be 01:00:00 PMST");

		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2037-03-08T04:59:59+00:00 should be 180 minutes offset in PMST");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2037-03-08T05:00:00+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2037-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2037-11-01T03:59:59+00:00 should be 120 minutes offset in PMDT");
		t.equal(moment("2037-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2037-11-01T04:00:00+00:00 should be 180 minutes offset in PMST");

		t.done();
	}
};
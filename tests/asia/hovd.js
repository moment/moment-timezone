var moment = require("../../index");

exports["Asia/Hovd"] = {

	"1905" : function (t) {
		t.equal(moment("1905-07-31T17:53:23+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1905-07-31T17:53:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1905-07-31T17:53:24+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:53:24", "1905-07-31T17:53:24+00:00 should be 23:53:24 HOVT");

		t.equal(moment("1905-07-31T17:53:23+00:00").tz("Asia/Hovd").zone(), -21996 / 60, "1905-07-31T17:53:23+00:00 should be -21996 / 60 minutes offset in LMT");
		t.equal(moment("1905-07-31T17:53:24+00:00").tz("Asia/Hovd").zone(), -360, "1905-07-31T17:53:24+00:00 should be -360 minutes offset in HOVT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-12-31T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1977-12-31T17:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1977-12-31T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1977-12-31T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("1977-12-31T17:59:59+00:00").tz("Asia/Hovd").zone(), -360, "1977-12-31T17:59:59+00:00 should be -360 minutes offset in HOVT");
		t.equal(moment("1977-12-31T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1977-12-31T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1983-03-31T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1983-03-31T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1983-03-31T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1983-09-30T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1983-09-30T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1983-09-30T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1983-09-30T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1983-03-31T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1983-03-31T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1983-03-31T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1983-03-31T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1983-09-30T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1983-09-30T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1983-09-30T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1983-09-30T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1984-03-31T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1984-03-31T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1984-03-31T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1984-09-29T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1984-09-29T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1984-09-29T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1984-09-29T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1984-03-31T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1984-03-31T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1984-03-31T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1984-03-31T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1984-09-29T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1984-09-29T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1984-09-29T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1984-09-29T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1985-03-30T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1985-03-30T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1985-03-30T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1985-09-28T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1985-09-28T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1985-09-28T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1985-09-28T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1985-03-30T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1985-03-30T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1985-03-30T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1985-03-30T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1985-09-28T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1985-09-28T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1985-09-28T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1985-09-28T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1986-03-29T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1986-03-29T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1986-03-29T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1986-09-27T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1986-09-27T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1986-09-27T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1986-09-27T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1986-03-29T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1986-03-29T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1986-03-29T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1986-03-29T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1986-09-27T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1986-09-27T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1986-09-27T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1986-09-27T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1987-03-28T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1987-03-28T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1987-03-28T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1987-09-26T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1987-09-26T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1987-09-26T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1987-09-26T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1987-03-28T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1987-03-28T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1987-03-28T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1987-03-28T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1987-09-26T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1987-09-26T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1987-09-26T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1987-09-26T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1988-03-26T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1988-03-26T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1988-03-26T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1988-09-24T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1988-09-24T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1988-09-24T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1988-09-24T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1988-03-26T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1988-03-26T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1988-03-26T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1988-03-26T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1988-09-24T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1988-09-24T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1988-09-24T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1988-09-24T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1989-03-25T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1989-03-25T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1989-03-25T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1989-09-23T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1989-09-23T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1989-09-23T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1989-09-23T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1989-03-25T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1989-03-25T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1989-03-25T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1989-03-25T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1989-09-23T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1989-09-23T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1989-09-23T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1989-09-23T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1990-03-24T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1990-03-24T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1990-03-24T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1990-09-29T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1990-09-29T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1990-09-29T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1990-09-29T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1990-03-24T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1990-03-24T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1990-03-24T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1990-03-24T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1990-09-29T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1990-09-29T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1990-09-29T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1990-09-29T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1991-03-30T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1991-03-30T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1991-03-30T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1991-09-28T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1991-09-28T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1991-09-28T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1991-09-28T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1991-03-30T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1991-03-30T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1991-03-30T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1991-03-30T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1991-09-28T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1991-09-28T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1991-09-28T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1991-09-28T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1992-03-28T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1992-03-28T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1992-03-28T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1992-09-26T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1992-09-26T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1992-09-26T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1992-09-26T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1992-03-28T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1992-03-28T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1992-03-28T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1992-03-28T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1992-09-26T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1992-09-26T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1992-09-26T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1992-09-26T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1993-03-27T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1993-03-27T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1993-03-27T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1993-09-25T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1993-09-25T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1993-09-25T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1993-09-25T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1993-03-27T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1993-03-27T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1993-03-27T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1993-03-27T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1993-09-25T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1993-09-25T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1993-09-25T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1993-09-25T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1994-03-26T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1994-03-26T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1994-03-26T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1994-09-24T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1994-09-24T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1994-09-24T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1994-09-24T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1994-03-26T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1994-03-26T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1994-03-26T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1994-03-26T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1994-09-24T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1994-09-24T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1994-09-24T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1994-09-24T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1995-03-25T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1995-03-25T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1995-03-25T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1995-09-23T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1995-09-23T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1995-09-23T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1995-09-23T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1995-03-25T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1995-03-25T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1995-03-25T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1995-03-25T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1995-09-23T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1995-09-23T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1995-09-23T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1995-09-23T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1996-03-30T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1996-03-30T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1996-03-30T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1996-09-28T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1996-09-28T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1996-09-28T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1996-09-28T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1996-03-30T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1996-03-30T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1996-03-30T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1996-03-30T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1996-09-28T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1996-09-28T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1996-09-28T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1996-09-28T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1997-03-29T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1997-03-29T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1997-03-29T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1997-09-27T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1997-09-27T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1997-09-27T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1997-09-27T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1997-03-29T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1997-03-29T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1997-03-29T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1997-03-29T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1997-09-27T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1997-09-27T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1997-09-27T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1997-09-27T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T16:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1998-03-28T16:59:59+00:00 should be 23:59:59 HOVT");
		t.equal(moment("1998-03-28T17:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "1998-03-28T17:00:00+00:00 should be 01:00:00 HOVST");
		t.equal(moment("1998-09-26T15:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:59:59", "1998-09-26T15:59:59+00:00 should be 23:59:59 HOVST");
		t.equal(moment("1998-09-26T16:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "23:00:00", "1998-09-26T16:00:00+00:00 should be 23:00:00 HOVT");

		t.equal(moment("1998-03-28T16:59:59+00:00").tz("Asia/Hovd").zone(), -420, "1998-03-28T16:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("1998-03-28T17:00:00+00:00").tz("Asia/Hovd").zone(), -480, "1998-03-28T17:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1998-09-26T15:59:59+00:00").tz("Asia/Hovd").zone(), -480, "1998-09-26T15:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("1998-09-26T16:00:00+00:00").tz("Asia/Hovd").zone(), -420, "1998-09-26T16:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-27T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2001-04-27T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2001-04-27T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2001-04-27T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2001-09-28T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2001-09-28T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2001-09-28T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2001-09-28T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2001-04-27T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2001-04-27T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2001-04-27T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2001-04-27T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2001-09-28T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2001-09-28T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2001-09-28T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2001-09-28T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-29T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2002-03-29T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2002-03-29T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2002-03-29T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2002-09-27T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2002-09-27T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2002-09-27T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2002-09-27T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2002-03-29T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2002-03-29T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2002-03-29T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2002-03-29T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2002-09-27T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2002-09-27T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2002-09-27T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2002-09-27T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-28T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2003-03-28T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2003-03-28T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2003-03-28T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2003-09-26T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2003-09-26T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2003-09-26T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2003-09-26T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2003-03-28T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2003-03-28T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2003-03-28T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2003-03-28T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2003-09-26T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2003-09-26T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2003-09-26T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2003-09-26T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-26T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2004-03-26T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2004-03-26T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2004-03-26T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2004-09-24T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2004-09-24T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2004-09-24T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2004-09-24T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2004-03-26T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2004-03-26T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2004-03-26T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2004-03-26T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2004-09-24T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2004-09-24T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2004-09-24T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2004-09-24T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-25T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2005-03-25T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2005-03-25T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2005-03-25T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2005-09-23T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2005-09-23T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2005-09-23T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2005-09-23T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2005-03-25T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2005-03-25T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2005-03-25T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2005-03-25T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2005-09-23T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2005-09-23T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2005-09-23T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2005-09-23T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-24T18:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2006-03-24T18:59:59+00:00 should be 01:59:59 HOVT");
		t.equal(moment("2006-03-24T19:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "03:00:00", "2006-03-24T19:00:00+00:00 should be 03:00:00 HOVST");
		t.equal(moment("2006-09-29T17:59:59+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:59:59", "2006-09-29T17:59:59+00:00 should be 01:59:59 HOVST");
		t.equal(moment("2006-09-29T18:00:00+00:00").tz("Asia/Hovd").format("HH:mm:ss"), "01:00:00", "2006-09-29T18:00:00+00:00 should be 01:00:00 HOVT");

		t.equal(moment("2006-03-24T18:59:59+00:00").tz("Asia/Hovd").zone(), -420, "2006-03-24T18:59:59+00:00 should be -420 minutes offset in HOVT");
		t.equal(moment("2006-03-24T19:00:00+00:00").tz("Asia/Hovd").zone(), -480, "2006-03-24T19:00:00+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2006-09-29T17:59:59+00:00").tz("Asia/Hovd").zone(), -480, "2006-09-29T17:59:59+00:00 should be -480 minutes offset in HOVST");
		t.equal(moment("2006-09-29T18:00:00+00:00").tz("Asia/Hovd").zone(), -420, "2006-09-29T18:00:00+00:00 should be -420 minutes offset in HOVT");

		t.done();
	}
};
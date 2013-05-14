var moment = require("../../index");

exports["Asia/Chongqing"] = {

	"1927" : function (t) {
		t.equal(moment("1927-12-31T16:53:39+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1927-12-31T16:53:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1927-12-31T16:53:40+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:53:40", "1927-12-31T16:53:40+00:00 should be 23:53:40 LONT");

		t.equal(moment("1927-12-31T16:53:39+00:00").tz("Asia/Chongqing").zone(), -25580 / 60, "1927-12-31T16:53:39+00:00 should be -25580 / 60 minutes offset in LMT");
		t.equal(moment("1927-12-31T16:53:40+00:00").tz("Asia/Chongqing").zone(), -420, "1927-12-31T16:53:40+00:00 should be -420 minutes offset in LONT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-30T16:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1980-04-30T16:59:59+00:00 should be 23:59:59 LONT");
		t.equal(moment("1980-04-30T17:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1980-04-30T17:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1980-04-30T16:59:59+00:00").tz("Asia/Chongqing").zone(), -420, "1980-04-30T16:59:59+00:00 should be -420 minutes offset in LONT");
		t.equal(moment("1980-04-30T17:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1980-04-30T17:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-05-03T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1986-05-03T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1986-05-03T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1986-05-03T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1986-09-13T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1986-09-13T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1986-09-13T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1986-09-13T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1986-05-03T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1986-05-03T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1986-05-03T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1986-05-03T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1986-09-13T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1986-09-13T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1986-09-13T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1986-09-13T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-11T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1987-04-11T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1987-04-11T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1987-04-11T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1987-09-12T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1987-09-12T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1987-09-12T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1987-09-12T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1987-04-11T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1987-04-11T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1987-04-11T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1987-04-11T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1987-09-12T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1987-09-12T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1987-09-12T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1987-09-12T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-09T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1988-04-09T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1988-04-09T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1988-04-09T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1988-09-10T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1988-09-10T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1988-09-10T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1988-09-10T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1988-04-09T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1988-04-09T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1988-04-09T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1988-04-09T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1988-09-10T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1988-09-10T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1988-09-10T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1988-09-10T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-15T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1989-04-15T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1989-04-15T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1989-04-15T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1989-09-16T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1989-09-16T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1989-09-16T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1989-09-16T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1989-04-15T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1989-04-15T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1989-04-15T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1989-04-15T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1989-09-16T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1989-09-16T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1989-09-16T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1989-09-16T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-14T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1990-04-14T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1990-04-14T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1990-04-14T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1990-09-15T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1990-09-15T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1990-09-15T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1990-09-15T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1990-04-14T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1990-04-14T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1990-04-14T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1990-04-14T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1990-09-15T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1990-09-15T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1990-09-15T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1990-09-15T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-13T15:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1991-04-13T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1991-04-13T16:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "01:00:00", "1991-04-13T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1991-09-14T14:59:59+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:59:59", "1991-09-14T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1991-09-14T15:00:00+00:00").tz("Asia/Chongqing").format("HH:mm:ss"), "23:00:00", "1991-09-14T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1991-04-13T15:59:59+00:00").tz("Asia/Chongqing").zone(), -480, "1991-04-13T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1991-04-13T16:00:00+00:00").tz("Asia/Chongqing").zone(), -540, "1991-04-13T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1991-09-14T14:59:59+00:00").tz("Asia/Chongqing").zone(), -540, "1991-09-14T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1991-09-14T15:00:00+00:00").tz("Asia/Chongqing").zone(), -480, "1991-09-14T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	}
};
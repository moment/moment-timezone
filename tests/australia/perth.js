var moment = require("../../moment-timezone");

exports["Australia/Perth"] = {

	"1916" : function (t) {
		t.equal(moment("1916-12-31T16:00:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "00:00:59", "1916-12-31T16:00:59+00:00 should be 00:00:59 WST");
		t.equal(moment("1916-12-31T16:01:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:01:00", "1916-12-31T16:01:00+00:00 should be 01:01:00 WST");

		t.equal(moment("1916-12-31T16:00:59+00:00").tz("Australia/Perth").zone(), -480, "1916-12-31T16:00:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1916-12-31T16:01:00+00:00").tz("Australia/Perth").zone(), -540, "1916-12-31T16:01:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T16:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1917-03-24T16:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1917-03-24T17:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:00:00", "1917-03-24T17:00:00+00:00 should be 01:00:00 WST");

		t.equal(moment("1917-03-24T16:59:59+00:00").tz("Australia/Perth").zone(), -540, "1917-03-24T16:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1917-03-24T17:00:00+00:00").tz("Australia/Perth").zone(), -480, "1917-03-24T17:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-12-31T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1941-12-31T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1941-12-31T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "1941-12-31T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("1941-12-31T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "1941-12-31T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1941-12-31T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "1941-12-31T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-28T16:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1942-03-28T16:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1942-03-28T17:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:00:00", "1942-03-28T17:00:00+00:00 should be 01:00:00 WST");
		t.equal(moment("1942-09-26T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1942-09-26T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1942-09-26T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "1942-09-26T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("1942-03-28T16:59:59+00:00").tz("Australia/Perth").zone(), -540, "1942-03-28T16:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1942-03-28T17:00:00+00:00").tz("Australia/Perth").zone(), -480, "1942-03-28T17:00:00+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1942-09-26T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "1942-09-26T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1942-09-26T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "1942-09-26T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-27T16:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1943-03-27T16:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1943-03-27T17:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:00:00", "1943-03-27T17:00:00+00:00 should be 01:00:00 WST");

		t.equal(moment("1943-03-27T16:59:59+00:00").tz("Australia/Perth").zone(), -540, "1943-03-27T16:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1943-03-27T17:00:00+00:00").tz("Australia/Perth").zone(), -480, "1943-03-27T17:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-10-26T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1974-10-26T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1974-10-26T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "1974-10-26T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("1974-10-26T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "1974-10-26T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1974-10-26T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "1974-10-26T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-01T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "1975-03-01T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("1975-03-01T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "1975-03-01T18:00:00+00:00 should be 02:00:00 WST");

		t.equal(moment("1975-03-01T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "1975-03-01T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1975-03-01T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "1975-03-01T18:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-10-29T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1983-10-29T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1983-10-29T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "1983-10-29T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("1983-10-29T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "1983-10-29T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1983-10-29T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "1983-10-29T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "1984-03-03T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("1984-03-03T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "1984-03-03T18:00:00+00:00 should be 02:00:00 WST");

		t.equal(moment("1984-03-03T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "1984-03-03T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1984-03-03T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "1984-03-03T18:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-11-16T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "1991-11-16T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("1991-11-16T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "1991-11-16T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("1991-11-16T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "1991-11-16T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("1991-11-16T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "1991-11-16T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-29T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "1992-02-29T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("1992-02-29T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "1992-02-29T18:00:00+00:00 should be 02:00:00 WST");

		t.equal(moment("1992-02-29T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "1992-02-29T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("1992-02-29T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "1992-02-29T18:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-12-02T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "2006-12-02T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("2006-12-02T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "2006-12-02T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("2006-12-02T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "2006-12-02T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2006-12-02T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "2006-12-02T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "2007-03-24T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2007-03-24T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "2007-03-24T18:00:00+00:00 should be 02:00:00 WST");
		t.equal(moment("2007-10-27T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "2007-10-27T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("2007-10-27T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "2007-10-27T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("2007-03-24T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "2007-03-24T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("2007-03-24T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "2007-03-24T18:00:00+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2007-10-27T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "2007-10-27T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2007-10-27T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "2007-10-27T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "2008-03-29T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2008-03-29T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "2008-03-29T18:00:00+00:00 should be 02:00:00 WST");
		t.equal(moment("2008-10-25T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "01:59:59", "2008-10-25T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("2008-10-25T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "03:00:00", "2008-10-25T18:00:00+00:00 should be 03:00:00 WST");

		t.equal(moment("2008-03-29T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "2008-03-29T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("2008-03-29T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "2008-03-29T18:00:00+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2008-10-25T17:59:59+00:00").tz("Australia/Perth").zone(), -480, "2008-10-25T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2008-10-25T18:00:00+00:00").tz("Australia/Perth").zone(), -540, "2008-10-25T18:00:00+00:00 should be -540 minutes offset in WST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T17:59:59+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:59:59", "2009-03-28T17:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2009-03-28T18:00:00+00:00").tz("Australia/Perth").format("HH:mm:ss"), "02:00:00", "2009-03-28T18:00:00+00:00 should be 02:00:00 WST");

		t.equal(moment("2009-03-28T17:59:59+00:00").tz("Australia/Perth").zone(), -540, "2009-03-28T17:59:59+00:00 should be -540 minutes offset in WST");
		t.equal(moment("2009-03-28T18:00:00+00:00").tz("Australia/Perth").zone(), -480, "2009-03-28T18:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	}
};
var moment = require("../../index");

exports["Australia/Lindeman"] = {

	"1916" : function (t) {
		t.equal(moment("1916-12-31T14:00:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "00:00:59", "1916-12-31T14:00:59+00:00 should be 00:00:59 EST");
		t.equal(moment("1916-12-31T14:01:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:01:00", "1916-12-31T14:01:00+00:00 should be 01:01:00 EST");

		t.equal(moment("1916-12-31T14:00:59+00:00").tz("Australia/Lindeman").zone(), -600, "1916-12-31T14:00:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1916-12-31T14:01:00+00:00").tz("Australia/Lindeman").zone(), -660, "1916-12-31T14:01:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1917-03-24T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:00:00", "1917-03-24T15:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1917-03-24T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1917-03-24T15:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-12-31T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1941-12-31T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1941-12-31T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1941-12-31T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1941-12-31T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1941-12-31T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1941-12-31T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1941-12-31T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-28T14:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1942-03-28T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1942-03-28T15:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:00:00", "1942-03-28T15:00:00+00:00 should be 01:00:00 EST");
		t.equal(moment("1942-09-26T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1942-09-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1942-09-26T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1942-09-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1942-03-28T14:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1942-03-28T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1942-03-28T15:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1942-03-28T15:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1942-09-26T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1942-09-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1942-09-26T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1942-09-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-27T14:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1943-03-27T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1943-03-27T15:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:00:00", "1943-03-27T15:00:00+00:00 should be 01:00:00 EST");
		t.equal(moment("1943-10-02T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1943-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1943-10-02T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1943-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1943-03-27T14:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1943-03-27T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1943-03-27T15:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1943-03-27T15:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1943-10-02T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1943-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1943-10-02T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1943-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-25T14:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1944-03-25T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1944-03-25T15:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:00:00", "1944-03-25T15:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1944-03-25T14:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1944-03-25T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1944-03-25T15:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1944-03-25T15:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1971-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1971-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1971-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1971-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1972-02-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1972-02-26T16:00:00+00:00 should be 02:00:00 EST");

		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1972-02-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1972-02-26T16:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1989-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1989-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1989-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1989-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-03T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1990-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1990-03-03T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1990-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1990-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1990-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1990-03-03T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1990-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1990-03-03T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1990-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1990-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1990-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-02T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1991-03-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1991-03-02T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1991-03-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1991-10-26T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1991-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1991-10-26T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1991-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1991-03-02T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1991-03-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1991-03-02T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1991-03-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-26T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1991-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-26T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1991-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-29T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1992-02-29T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1992-02-29T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1992-02-29T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1992-10-24T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1992-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1992-10-24T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1992-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1992-02-29T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1992-02-29T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1992-02-29T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1992-02-29T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-24T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1992-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-24T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1992-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-06T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1993-03-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1993-03-06T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1993-03-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1993-10-30T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "01:59:59", "1993-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1993-10-30T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "03:00:00", "1993-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1993-03-06T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1993-03-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1993-03-06T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1993-03-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-30T15:59:59+00:00").tz("Australia/Lindeman").zone(), -600, "1993-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-30T16:00:00+00:00").tz("Australia/Lindeman").zone(), -660, "1993-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-05T15:59:59+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:59:59", "1994-03-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1994-03-05T16:00:00+00:00").tz("Australia/Lindeman").format("HH:mm:ss"), "02:00:00", "1994-03-05T16:00:00+00:00 should be 02:00:00 EST");

		t.equal(moment("1994-03-05T15:59:59+00:00").tz("Australia/Lindeman").zone(), -660, "1994-03-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1994-03-05T16:00:00+00:00").tz("Australia/Lindeman").zone(), -600, "1994-03-05T16:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	}
};
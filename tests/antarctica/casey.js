var moment = require("../../index");

exports["Antarctica/Casey"] = {

	"1968" : function (t) {
		t.equal(moment("1968-12-31T23:59:59+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "23:59:59", "1968-12-31T23:59:59+00:00 should be 23:59:59 zzz");

		t.equal(moment("1968-12-31T23:59:59+00:00").tz("Antarctica/Casey").zone(), 0, "1968-12-31T23:59:59+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-01-01T00:00:00+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "08:00:00", "1969-01-01T00:00:00+00:00 should be 08:00:00 WST");

		t.equal(moment("1969-01-01T00:00:00+00:00").tz("Antarctica/Casey").zone(), -480, "1969-01-01T00:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-10-17T17:59:59+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "01:59:59", "2009-10-17T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("2009-10-17T18:00:00+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "05:00:00", "2009-10-17T18:00:00+00:00 should be 05:00:00 CAST");

		t.equal(moment("2009-10-17T17:59:59+00:00").tz("Antarctica/Casey").zone(), -480, "2009-10-17T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2009-10-17T18:00:00+00:00").tz("Antarctica/Casey").zone(), -660, "2009-10-17T18:00:00+00:00 should be -660 minutes offset in CAST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-04T14:59:59+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "01:59:59", "2010-03-04T14:59:59+00:00 should be 01:59:59 CAST");
		t.equal(moment("2010-03-04T15:00:00+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "23:00:00", "2010-03-04T15:00:00+00:00 should be 23:00:00 WST");

		t.equal(moment("2010-03-04T14:59:59+00:00").tz("Antarctica/Casey").zone(), -660, "2010-03-04T14:59:59+00:00 should be -660 minutes offset in CAST");
		t.equal(moment("2010-03-04T15:00:00+00:00").tz("Antarctica/Casey").zone(), -480, "2010-03-04T15:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-10-27T17:59:59+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "01:59:59", "2011-10-27T17:59:59+00:00 should be 01:59:59 WST");
		t.equal(moment("2011-10-27T18:00:00+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "05:00:00", "2011-10-27T18:00:00+00:00 should be 05:00:00 CAST");

		t.equal(moment("2011-10-27T17:59:59+00:00").tz("Antarctica/Casey").zone(), -480, "2011-10-27T17:59:59+00:00 should be -480 minutes offset in WST");
		t.equal(moment("2011-10-27T18:00:00+00:00").tz("Antarctica/Casey").zone(), -660, "2011-10-27T18:00:00+00:00 should be -660 minutes offset in CAST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-02-21T16:59:59+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "03:59:59", "2012-02-21T16:59:59+00:00 should be 03:59:59 CAST");
		t.equal(moment("2012-02-21T17:00:00+00:00").tz("Antarctica/Casey").format("HH:mm:ss"), "01:00:00", "2012-02-21T17:00:00+00:00 should be 01:00:00 WST");

		t.equal(moment("2012-02-21T16:59:59+00:00").tz("Antarctica/Casey").zone(), -660, "2012-02-21T16:59:59+00:00 should be -660 minutes offset in CAST");
		t.equal(moment("2012-02-21T17:00:00+00:00").tz("Antarctica/Casey").zone(), -480, "2012-02-21T17:00:00+00:00 should be -480 minutes offset in WST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Antarctica/Davis"] = {

	"1957" : function (t) {
		t.equal(moment("1957-01-12T23:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "23:59:59", "1957-01-12T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1957-01-13T00:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "07:00:00", "1957-01-13T00:00:00+00:00 should be 07:00:00 DAVT");

		t.equal(moment("1957-01-12T23:59:59+00:00").tz("Antarctica/Davis").zone(), 0, "1957-01-12T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1957-01-13T00:00:00+00:00").tz("Antarctica/Davis").zone(), -420, "1957-01-13T00:00:00+00:00 should be -420 minutes offset in DAVT");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-10-31T16:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "23:59:59", "1964-10-31T16:59:59+00:00 should be 23:59:59 DAVT");
		t.equal(moment("1964-10-31T17:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "17:00:00", "1964-10-31T17:00:00+00:00 should be 17:00:00 zzz");

		t.equal(moment("1964-10-31T16:59:59+00:00").tz("Antarctica/Davis").zone(), -420, "1964-10-31T16:59:59+00:00 should be -420 minutes offset in DAVT");
		t.equal(moment("1964-10-31T17:00:00+00:00").tz("Antarctica/Davis").zone(), 0, "1964-10-31T17:00:00+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-01-31T23:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "23:59:59", "1969-01-31T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1969-02-01T00:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "07:00:00", "1969-02-01T00:00:00+00:00 should be 07:00:00 DAVT");

		t.equal(moment("1969-01-31T23:59:59+00:00").tz("Antarctica/Davis").zone(), 0, "1969-01-31T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1969-02-01T00:00:00+00:00").tz("Antarctica/Davis").zone(), -420, "1969-02-01T00:00:00+00:00 should be -420 minutes offset in DAVT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-10-17T18:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "01:59:59", "2009-10-17T18:59:59+00:00 should be 01:59:59 DAVT");
		t.equal(moment("2009-10-17T19:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "00:00:00", "2009-10-17T19:00:00+00:00 should be 00:00:00 DAVT");

		t.equal(moment("2009-10-17T18:59:59+00:00").tz("Antarctica/Davis").zone(), -420, "2009-10-17T18:59:59+00:00 should be -420 minutes offset in DAVT");
		t.equal(moment("2009-10-17T19:00:00+00:00").tz("Antarctica/Davis").zone(), -300, "2009-10-17T19:00:00+00:00 should be -300 minutes offset in DAVT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-10T19:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "00:59:59", "2010-03-10T19:59:59+00:00 should be 00:59:59 DAVT");
		t.equal(moment("2010-03-10T20:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "03:00:00", "2010-03-10T20:00:00+00:00 should be 03:00:00 DAVT");

		t.equal(moment("2010-03-10T19:59:59+00:00").tz("Antarctica/Davis").zone(), -300, "2010-03-10T19:59:59+00:00 should be -300 minutes offset in DAVT");
		t.equal(moment("2010-03-10T20:00:00+00:00").tz("Antarctica/Davis").zone(), -420, "2010-03-10T20:00:00+00:00 should be -420 minutes offset in DAVT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-10-27T18:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "01:59:59", "2011-10-27T18:59:59+00:00 should be 01:59:59 DAVT");
		t.equal(moment("2011-10-27T19:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "00:00:00", "2011-10-27T19:00:00+00:00 should be 00:00:00 DAVT");

		t.equal(moment("2011-10-27T18:59:59+00:00").tz("Antarctica/Davis").zone(), -420, "2011-10-27T18:59:59+00:00 should be -420 minutes offset in DAVT");
		t.equal(moment("2011-10-27T19:00:00+00:00").tz("Antarctica/Davis").zone(), -300, "2011-10-27T19:00:00+00:00 should be -300 minutes offset in DAVT");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-02-21T19:59:59+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "00:59:59", "2012-02-21T19:59:59+00:00 should be 00:59:59 DAVT");
		t.equal(moment("2012-02-21T20:00:00+00:00").tz("Antarctica/Davis").format("HH:mm:ss"), "03:00:00", "2012-02-21T20:00:00+00:00 should be 03:00:00 DAVT");

		t.equal(moment("2012-02-21T19:59:59+00:00").tz("Antarctica/Davis").zone(), -300, "2012-02-21T19:59:59+00:00 should be -300 minutes offset in DAVT");
		t.equal(moment("2012-02-21T20:00:00+00:00").tz("Antarctica/Davis").zone(), -420, "2012-02-21T20:00:00+00:00 should be -420 minutes offset in DAVT");

		t.done();
	}
};
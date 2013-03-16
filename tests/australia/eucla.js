var moment = require("../../moment-timezone");

exports["Australia/Eucla"] = {

	"1916" : function (t) {
		t.equal(moment("1916-12-31T15:15:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "00:00:59", "1916-12-31T15:15:59+00:00 should be 00:00:59 CWST");
		t.equal(moment("1916-12-31T15:16:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:01:00", "1916-12-31T15:16:00+00:00 should be 01:01:00 CWST");

		t.equal(moment("1916-12-31T15:15:59+00:00").tz("Australia/Eucla").zone(), -525, "1916-12-31T15:15:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1916-12-31T15:16:00+00:00").tz("Australia/Eucla").zone(), -585, "1916-12-31T15:16:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T16:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1917-03-24T16:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1917-03-24T16:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:00:00", "1917-03-24T16:15:00+00:00 should be 01:00:00 CWST");

		t.equal(moment("1917-03-24T16:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1917-03-24T16:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1917-03-24T16:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1917-03-24T16:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-12-31T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1941-12-31T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1941-12-31T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "1941-12-31T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("1941-12-31T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "1941-12-31T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1941-12-31T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "1941-12-31T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-28T16:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1942-03-28T16:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1942-03-28T16:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:00:00", "1942-03-28T16:15:00+00:00 should be 01:00:00 CWST");
		t.equal(moment("1942-09-26T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1942-09-26T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1942-09-26T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "1942-09-26T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("1942-03-28T16:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1942-03-28T16:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1942-03-28T16:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1942-03-28T16:15:00+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1942-09-26T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "1942-09-26T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1942-09-26T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "1942-09-26T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-27T16:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1943-03-27T16:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1943-03-27T16:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:00:00", "1943-03-27T16:15:00+00:00 should be 01:00:00 CWST");

		t.equal(moment("1943-03-27T16:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1943-03-27T16:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1943-03-27T16:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1943-03-27T16:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-10-26T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1974-10-26T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1974-10-26T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "1974-10-26T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("1974-10-26T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "1974-10-26T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1974-10-26T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "1974-10-26T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-01T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "1975-03-01T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("1975-03-01T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "1975-03-01T17:15:00+00:00 should be 02:00:00 CWST");

		t.equal(moment("1975-03-01T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1975-03-01T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1975-03-01T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1975-03-01T17:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-10-29T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1983-10-29T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1983-10-29T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "1983-10-29T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("1983-10-29T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "1983-10-29T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1983-10-29T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "1983-10-29T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "1984-03-03T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("1984-03-03T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "1984-03-03T17:15:00+00:00 should be 02:00:00 CWST");

		t.equal(moment("1984-03-03T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1984-03-03T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1984-03-03T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1984-03-03T17:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-11-16T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "1991-11-16T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("1991-11-16T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "1991-11-16T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("1991-11-16T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "1991-11-16T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("1991-11-16T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "1991-11-16T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-29T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "1992-02-29T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("1992-02-29T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "1992-02-29T17:15:00+00:00 should be 02:00:00 CWST");

		t.equal(moment("1992-02-29T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "1992-02-29T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("1992-02-29T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "1992-02-29T17:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-12-02T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "2006-12-02T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("2006-12-02T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "2006-12-02T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("2006-12-02T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "2006-12-02T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("2006-12-02T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "2006-12-02T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "2007-03-24T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("2007-03-24T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "2007-03-24T17:15:00+00:00 should be 02:00:00 CWST");
		t.equal(moment("2007-10-27T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "2007-10-27T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("2007-10-27T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "2007-10-27T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("2007-03-24T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "2007-03-24T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("2007-03-24T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "2007-03-24T17:15:00+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("2007-10-27T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "2007-10-27T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("2007-10-27T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "2007-10-27T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "2008-03-29T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("2008-03-29T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "2008-03-29T17:15:00+00:00 should be 02:00:00 CWST");
		t.equal(moment("2008-10-25T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "01:59:59", "2008-10-25T17:14:59+00:00 should be 01:59:59 CWST");
		t.equal(moment("2008-10-25T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "03:00:00", "2008-10-25T17:15:00+00:00 should be 03:00:00 CWST");

		t.equal(moment("2008-03-29T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "2008-03-29T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("2008-03-29T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "2008-03-29T17:15:00+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("2008-10-25T17:14:59+00:00").tz("Australia/Eucla").zone(), -525, "2008-10-25T17:14:59+00:00 should be -525 minutes offset in CWST");
		t.equal(moment("2008-10-25T17:15:00+00:00").tz("Australia/Eucla").zone(), -585, "2008-10-25T17:15:00+00:00 should be -585 minutes offset in CWST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T17:14:59+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:59:59", "2009-03-28T17:14:59+00:00 should be 02:59:59 CWST");
		t.equal(moment("2009-03-28T17:15:00+00:00").tz("Australia/Eucla").format("HH:mm:ss"), "02:00:00", "2009-03-28T17:15:00+00:00 should be 02:00:00 CWST");

		t.equal(moment("2009-03-28T17:14:59+00:00").tz("Australia/Eucla").zone(), -585, "2009-03-28T17:14:59+00:00 should be -585 minutes offset in CWST");
		t.equal(moment("2009-03-28T17:15:00+00:00").tz("Australia/Eucla").zone(), -525, "2009-03-28T17:15:00+00:00 should be -525 minutes offset in CWST");

		t.done();
	}
};
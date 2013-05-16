var moment = require("../../index");

exports["America/Santo_Domingo"] = {

	"1933" : function (t) {
		t.equal(moment("1933-04-01T16:39:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "11:59:59", "1933-04-01T16:39:59+00:00 should be 11:59:59 SDMT");
		t.equal(moment("1933-04-01T16:40:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "11:40:00", "1933-04-01T16:40:00+00:00 should be 11:40:00 EST");

		t.equal(moment("1933-04-01T16:39:59+00:00").tz("America/Santo_Domingo").zone(), 280, "1933-04-01T16:39:59+00:00 should be 280 minutes offset in SDMT");
		t.equal(moment("1933-04-01T16:40:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1933-04-01T16:40:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-10-30T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1966-10-30T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1966-10-30T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "01:00:00", "1966-10-30T05:00:00+00:00 should be 01:00:00 EDT");

		t.equal(moment("1966-10-30T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1966-10-30T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1966-10-30T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 240, "1966-10-30T05:00:00+00:00 should be 240 minutes offset in EDT");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-02-28T03:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1967-02-28T03:59:59+00:00 should be 23:59:59 EDT");
		t.equal(moment("1967-02-28T04:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:00:00", "1967-02-28T04:00:00+00:00 should be 23:00:00 EST");

		t.equal(moment("1967-02-28T03:59:59+00:00").tz("America/Santo_Domingo").zone(), 240, "1967-02-28T03:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1967-02-28T04:00:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1967-02-28T04:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-10-26T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1969-10-26T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1969-10-26T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:30:00", "1969-10-26T05:00:00+00:00 should be 00:30:00 EHDT");

		t.equal(moment("1969-10-26T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1969-10-26T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1969-10-26T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 270, "1969-10-26T05:00:00+00:00 should be 270 minutes offset in EHDT");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-02-21T04:29:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1970-02-21T04:29:59+00:00 should be 23:59:59 EHDT");
		t.equal(moment("1970-02-21T04:30:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:30:00", "1970-02-21T04:30:00+00:00 should be 23:30:00 EST");
		t.equal(moment("1970-10-25T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1970-10-25T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1970-10-25T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:30:00", "1970-10-25T05:00:00+00:00 should be 00:30:00 EHDT");

		t.equal(moment("1970-02-21T04:29:59+00:00").tz("America/Santo_Domingo").zone(), 270, "1970-02-21T04:29:59+00:00 should be 270 minutes offset in EHDT");
		t.equal(moment("1970-02-21T04:30:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1970-02-21T04:30:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1970-10-25T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1970-10-25T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1970-10-25T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 270, "1970-10-25T05:00:00+00:00 should be 270 minutes offset in EHDT");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-01-20T04:29:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1971-01-20T04:29:59+00:00 should be 23:59:59 EHDT");
		t.equal(moment("1971-01-20T04:30:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:30:00", "1971-01-20T04:30:00+00:00 should be 23:30:00 EST");
		t.equal(moment("1971-10-31T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1971-10-31T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1971-10-31T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:30:00", "1971-10-31T05:00:00+00:00 should be 00:30:00 EHDT");

		t.equal(moment("1971-01-20T04:29:59+00:00").tz("America/Santo_Domingo").zone(), 270, "1971-01-20T04:29:59+00:00 should be 270 minutes offset in EHDT");
		t.equal(moment("1971-01-20T04:30:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1971-01-20T04:30:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1971-10-31T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1971-10-31T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1971-10-31T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 270, "1971-10-31T05:00:00+00:00 should be 270 minutes offset in EHDT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-01-21T04:29:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1972-01-21T04:29:59+00:00 should be 23:59:59 EHDT");
		t.equal(moment("1972-01-21T04:30:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:30:00", "1972-01-21T04:30:00+00:00 should be 23:30:00 EST");
		t.equal(moment("1972-10-29T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1972-10-29T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1972-10-29T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:30:00", "1972-10-29T05:00:00+00:00 should be 00:30:00 EHDT");

		t.equal(moment("1972-01-21T04:29:59+00:00").tz("America/Santo_Domingo").zone(), 270, "1972-01-21T04:29:59+00:00 should be 270 minutes offset in EHDT");
		t.equal(moment("1972-01-21T04:30:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1972-01-21T04:30:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1972-10-29T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1972-10-29T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1972-10-29T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 270, "1972-10-29T05:00:00+00:00 should be 270 minutes offset in EHDT");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-01-21T04:29:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1973-01-21T04:29:59+00:00 should be 23:59:59 EHDT");
		t.equal(moment("1973-01-21T04:30:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:30:00", "1973-01-21T04:30:00+00:00 should be 23:30:00 EST");
		t.equal(moment("1973-10-28T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1973-10-28T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1973-10-28T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:30:00", "1973-10-28T05:00:00+00:00 should be 00:30:00 EHDT");

		t.equal(moment("1973-01-21T04:29:59+00:00").tz("America/Santo_Domingo").zone(), 270, "1973-01-21T04:29:59+00:00 should be 270 minutes offset in EHDT");
		t.equal(moment("1973-01-21T04:30:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1973-01-21T04:30:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1973-10-28T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1973-10-28T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1973-10-28T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 270, "1973-10-28T05:00:00+00:00 should be 270 minutes offset in EHDT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-21T04:29:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1974-01-21T04:29:59+00:00 should be 23:59:59 EHDT");
		t.equal(moment("1974-01-21T04:30:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:30:00", "1974-01-21T04:30:00+00:00 should be 23:30:00 EST");
		t.equal(moment("1974-10-27T04:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "23:59:59", "1974-10-27T04:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1974-10-27T05:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "01:00:00", "1974-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1974-01-21T04:29:59+00:00").tz("America/Santo_Domingo").zone(), 270, "1974-01-21T04:29:59+00:00 should be 270 minutes offset in EHDT");
		t.equal(moment("1974-01-21T04:30:00+00:00").tz("America/Santo_Domingo").zone(), 300, "1974-01-21T04:30:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1974-10-27T04:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "1974-10-27T04:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1974-10-27T05:00:00+00:00").tz("America/Santo_Domingo").zone(), 240, "1974-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-10-29T05:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "01:59:59", "2000-10-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2000-10-29T06:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "01:00:00", "2000-10-29T06:00:00+00:00 should be 01:00:00 EST");
		t.equal(moment("2000-12-03T05:59:59+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "00:59:59", "2000-12-03T05:59:59+00:00 should be 00:59:59 EST");
		t.equal(moment("2000-12-03T06:00:00+00:00").tz("America/Santo_Domingo").format("HH:mm:ss"), "02:00:00", "2000-12-03T06:00:00+00:00 should be 02:00:00 AST");

		t.equal(moment("2000-10-29T05:59:59+00:00").tz("America/Santo_Domingo").zone(), 240, "2000-10-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2000-10-29T06:00:00+00:00").tz("America/Santo_Domingo").zone(), 300, "2000-10-29T06:00:00+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2000-12-03T05:59:59+00:00").tz("America/Santo_Domingo").zone(), 300, "2000-12-03T05:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2000-12-03T06:00:00+00:00").tz("America/Santo_Domingo").zone(), 240, "2000-12-03T06:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
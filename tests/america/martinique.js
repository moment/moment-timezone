var moment = require("../../index");

exports["America/Martinique"] = {

	"1911" : function (t) {
		t.equal(moment("1911-05-01T04:04:19+00:00").tz("America/Martinique").format("HH:mm:ss"), "23:59:59", "1911-05-01T04:04:19+00:00 should be 23:59:59 FFMT");
		t.equal(moment("1911-05-01T04:04:20+00:00").tz("America/Martinique").format("HH:mm:ss"), "00:04:20", "1911-05-01T04:04:20+00:00 should be 00:04:20 AST");

		t.equal(moment("1911-05-01T04:04:19+00:00").tz("America/Martinique").zone(), 14660 / 60, "1911-05-01T04:04:19+00:00 should be 14660 / 60 minutes offset in FFMT");
		t.equal(moment("1911-05-01T04:04:20+00:00").tz("America/Martinique").zone(), 240, "1911-05-01T04:04:20+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-06T03:59:59+00:00").tz("America/Martinique").format("HH:mm:ss"), "23:59:59", "1980-04-06T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1980-04-06T04:00:00+00:00").tz("America/Martinique").format("HH:mm:ss"), "01:00:00", "1980-04-06T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1980-09-28T02:59:59+00:00").tz("America/Martinique").format("HH:mm:ss"), "23:59:59", "1980-09-28T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1980-09-28T03:00:00+00:00").tz("America/Martinique").format("HH:mm:ss"), "23:00:00", "1980-09-28T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1980-04-06T03:59:59+00:00").tz("America/Martinique").zone(), 240, "1980-04-06T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1980-04-06T04:00:00+00:00").tz("America/Martinique").zone(), 180, "1980-04-06T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-09-28T02:59:59+00:00").tz("America/Martinique").zone(), 180, "1980-09-28T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-09-28T03:00:00+00:00").tz("America/Martinique").zone(), 240, "1980-09-28T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
var moment = require("../../index");

exports["Indian/Antananarivo"] = {

	"1911" : function (t) {
		t.equal(moment("1911-06-30T20:49:55+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "23:59:59", "1911-06-30T20:49:55+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-06-30T20:49:56+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "23:49:56", "1911-06-30T20:49:56+00:00 should be 23:49:56 EAT");

		t.equal(moment("1911-06-30T20:49:55+00:00").tz("Indian/Antananarivo").zone(), -11404 / 60, "1911-06-30T20:49:55+00:00 should be -11404 / 60 minutes offset in LMT");
		t.equal(moment("1911-06-30T20:49:56+00:00").tz("Indian/Antananarivo").zone(), -180, "1911-06-30T20:49:56+00:00 should be -180 minutes offset in EAT");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-02-27T19:59:59+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "22:59:59", "1954-02-27T19:59:59+00:00 should be 22:59:59 EAT");
		t.equal(moment("1954-02-27T20:00:00+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "00:00:00", "1954-02-27T20:00:00+00:00 should be 00:00:00 EAST");
		t.equal(moment("1954-05-29T19:59:59+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "23:59:59", "1954-05-29T19:59:59+00:00 should be 23:59:59 EAST");
		t.equal(moment("1954-05-29T20:00:00+00:00").tz("Indian/Antananarivo").format("HH:mm:ss"), "23:00:00", "1954-05-29T20:00:00+00:00 should be 23:00:00 EAT");

		t.equal(moment("1954-02-27T19:59:59+00:00").tz("Indian/Antananarivo").zone(), -180, "1954-02-27T19:59:59+00:00 should be -180 minutes offset in EAT");
		t.equal(moment("1954-02-27T20:00:00+00:00").tz("Indian/Antananarivo").zone(), -240, "1954-02-27T20:00:00+00:00 should be -240 minutes offset in EAST");
		t.equal(moment("1954-05-29T19:59:59+00:00").tz("Indian/Antananarivo").zone(), -240, "1954-05-29T19:59:59+00:00 should be -240 minutes offset in EAST");
		t.equal(moment("1954-05-29T20:00:00+00:00").tz("Indian/Antananarivo").zone(), -180, "1954-05-29T20:00:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
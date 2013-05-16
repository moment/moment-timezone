var moment = require("../../index");

exports["America/Bogota"] = {

	"1914" : function (t) {
		t.equal(moment("1914-11-23T04:56:15+00:00").tz("America/Bogota").format("HH:mm:ss"), "23:59:59", "1914-11-23T04:56:15+00:00 should be 23:59:59 BMT");
		t.equal(moment("1914-11-23T04:56:16+00:00").tz("America/Bogota").format("HH:mm:ss"), "23:56:16", "1914-11-23T04:56:16+00:00 should be 23:56:16 COT");

		t.equal(moment("1914-11-23T04:56:15+00:00").tz("America/Bogota").zone(), 17776 / 60, "1914-11-23T04:56:15+00:00 should be 17776 / 60 minutes offset in BMT");
		t.equal(moment("1914-11-23T04:56:16+00:00").tz("America/Bogota").zone(), 300, "1914-11-23T04:56:16+00:00 should be 300 minutes offset in COT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-05-03T04:59:59+00:00").tz("America/Bogota").format("HH:mm:ss"), "23:59:59", "1992-05-03T04:59:59+00:00 should be 23:59:59 COT");
		t.equal(moment("1992-05-03T05:00:00+00:00").tz("America/Bogota").format("HH:mm:ss"), "01:00:00", "1992-05-03T05:00:00+00:00 should be 01:00:00 COST");

		t.equal(moment("1992-05-03T04:59:59+00:00").tz("America/Bogota").zone(), 300, "1992-05-03T04:59:59+00:00 should be 300 minutes offset in COT");
		t.equal(moment("1992-05-03T05:00:00+00:00").tz("America/Bogota").zone(), 240, "1992-05-03T05:00:00+00:00 should be 240 minutes offset in COST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T03:59:59+00:00").tz("America/Bogota").format("HH:mm:ss"), "23:59:59", "1993-04-04T03:59:59+00:00 should be 23:59:59 COST");
		t.equal(moment("1993-04-04T04:00:00+00:00").tz("America/Bogota").format("HH:mm:ss"), "23:00:00", "1993-04-04T04:00:00+00:00 should be 23:00:00 COT");

		t.equal(moment("1993-04-04T03:59:59+00:00").tz("America/Bogota").zone(), 240, "1993-04-04T03:59:59+00:00 should be 240 minutes offset in COST");
		t.equal(moment("1993-04-04T04:00:00+00:00").tz("America/Bogota").zone(), 300, "1993-04-04T04:00:00+00:00 should be 300 minutes offset in COT");

		t.done();
	}
};
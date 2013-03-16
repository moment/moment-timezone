var moment = require("../../moment-timezone");

exports["America/Puerto_Rico"] = {

	"1942" : function (t) {
		t.equal(moment("1942-05-03T03:59:59+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "23:59:59", "1942-05-03T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1942-05-03T04:00:00+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "01:00:00", "1942-05-03T04:00:00+00:00 should be 01:00:00 AWT");

		t.equal(moment("1942-05-03T03:59:59+00:00").tz("America/Puerto_Rico").zone(), 240, "1942-05-03T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1942-05-03T04:00:00+00:00").tz("America/Puerto_Rico").zone(), 180, "1942-05-03T04:00:00+00:00 should be 180 minutes offset in AWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "19:59:59", "1945-08-14T22:59:59+00:00 should be 19:59:59 AWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "20:00:00", "1945-08-14T23:00:00+00:00 should be 20:00:00 APT");
		t.equal(moment("1945-09-30T04:59:59+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "01:59:59", "1945-09-30T04:59:59+00:00 should be 01:59:59 APT");
		t.equal(moment("1945-09-30T05:00:00+00:00").tz("America/Puerto_Rico").format("HH:mm:ss"), "01:00:00", "1945-09-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Puerto_Rico").zone(), 180, "1945-08-14T22:59:59+00:00 should be 180 minutes offset in AWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Puerto_Rico").zone(), 180, "1945-08-14T23:00:00+00:00 should be 180 minutes offset in APT");
		t.equal(moment("1945-09-30T04:59:59+00:00").tz("America/Puerto_Rico").zone(), 180, "1945-09-30T04:59:59+00:00 should be 180 minutes offset in APT");
		t.equal(moment("1945-09-30T05:00:00+00:00").tz("America/Puerto_Rico").zone(), 240, "1945-09-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
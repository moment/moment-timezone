var moment = require("../../index");

exports["America/Cayenne"] = {

	"1911" : function (t) {
		t.equal(moment("1911-07-01T03:29:19+00:00").tz("America/Cayenne").format("HH:mm:ss"), "23:59:59", "1911-07-01T03:29:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-07-01T03:29:20+00:00").tz("America/Cayenne").format("HH:mm:ss"), "23:29:20", "1911-07-01T03:29:20+00:00 should be 23:29:20 GFT");

		t.equal(moment("1911-07-01T03:29:19+00:00").tz("America/Cayenne").zone(), 12560 / 60, "1911-07-01T03:29:19+00:00 should be 12560 / 60 minutes offset in LMT");
		t.equal(moment("1911-07-01T03:29:20+00:00").tz("America/Cayenne").zone(), 240, "1911-07-01T03:29:20+00:00 should be 240 minutes offset in GFT");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-10-01T03:59:59+00:00").tz("America/Cayenne").format("HH:mm:ss"), "23:59:59", "1967-10-01T03:59:59+00:00 should be 23:59:59 GFT");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("America/Cayenne").format("HH:mm:ss"), "01:00:00", "1967-10-01T04:00:00+00:00 should be 01:00:00 GFT");

		t.equal(moment("1967-10-01T03:59:59+00:00").tz("America/Cayenne").zone(), 240, "1967-10-01T03:59:59+00:00 should be 240 minutes offset in GFT");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("America/Cayenne").zone(), 180, "1967-10-01T04:00:00+00:00 should be 180 minutes offset in GFT");

		t.done();
	}
};
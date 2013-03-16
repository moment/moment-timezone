var moment = require("../../moment-timezone");

exports["America/Panama"] = {

	"1908" : function (t) {
		t.equal(moment("1908-04-22T05:19:35+00:00").tz("America/Panama").format("HH:mm:ss"), "23:59:59", "1908-04-22T05:19:35+00:00 should be 23:59:59 CMT");
		t.equal(moment("1908-04-22T05:19:36+00:00").tz("America/Panama").format("HH:mm:ss"), "00:19:36", "1908-04-22T05:19:36+00:00 should be 00:19:36 EST");

		t.equal(moment("1908-04-22T05:19:35+00:00").tz("America/Panama").zone(), 319, "1908-04-22T05:19:35+00:00 should be 319 minutes offset in CMT");
		t.equal(moment("1908-04-22T05:19:36+00:00").tz("America/Panama").zone(), 300, "1908-04-22T05:19:36+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};
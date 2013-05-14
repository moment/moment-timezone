var moment = require("../../index");

exports["America/Cayman"] = {

	"1912" : function (t) {
		t.equal(moment("1912-02-01T05:07:11+00:00").tz("America/Cayman").format("HH:mm:ss"), "23:59:59", "1912-02-01T05:07:11+00:00 should be 23:59:59 KMT");
		t.equal(moment("1912-02-01T05:07:12+00:00").tz("America/Cayman").format("HH:mm:ss"), "00:07:12", "1912-02-01T05:07:12+00:00 should be 00:07:12 EST");

		t.equal(moment("1912-02-01T05:07:11+00:00").tz("America/Cayman").zone(), 18432 / 60, "1912-02-01T05:07:11+00:00 should be 18432 / 60 minutes offset in KMT");
		t.equal(moment("1912-02-01T05:07:12+00:00").tz("America/Cayman").zone(), 300, "1912-02-01T05:07:12+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};
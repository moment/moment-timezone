var moment = require("../../moment-timezone");

exports["Indian/Chagos"] = {

	"1906" : function (t) {
		t.equal(moment("1906-12-31T19:10:19+00:00").tz("Indian/Chagos").format("HH:mm:ss"), "23:59:59", "1906-12-31T19:10:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1906-12-31T19:10:20+00:00").tz("Indian/Chagos").format("HH:mm:ss"), "00:10:20", "1906-12-31T19:10:20+00:00 should be 00:10:20 IOT");

		t.equal(moment("1906-12-31T19:10:19+00:00").tz("Indian/Chagos").zone(), -17380 / 60, "1906-12-31T19:10:19+00:00 should be -17380 / 60 minutes offset in LMT");
		t.equal(moment("1906-12-31T19:10:20+00:00").tz("Indian/Chagos").zone(), -300, "1906-12-31T19:10:20+00:00 should be -300 minutes offset in IOT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-12-31T18:59:59+00:00").tz("Indian/Chagos").format("HH:mm:ss"), "23:59:59", "1995-12-31T18:59:59+00:00 should be 23:59:59 IOT");
		t.equal(moment("1995-12-31T19:00:00+00:00").tz("Indian/Chagos").format("HH:mm:ss"), "01:00:00", "1995-12-31T19:00:00+00:00 should be 01:00:00 IOT");

		t.equal(moment("1995-12-31T18:59:59+00:00").tz("Indian/Chagos").zone(), -300, "1995-12-31T18:59:59+00:00 should be -300 minutes offset in IOT");
		t.equal(moment("1995-12-31T19:00:00+00:00").tz("Indian/Chagos").zone(), -360, "1995-12-31T19:00:00+00:00 should be -360 minutes offset in IOT");

		t.done();
	}
};
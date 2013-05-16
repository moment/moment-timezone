var moment = require("../../index");

exports["Indian/Maldives"] = {

	"1959" : function (t) {
		t.equal(moment("1959-12-31T19:05:59+00:00").tz("Indian/Maldives").format("HH:mm:ss"), "23:59:59", "1959-12-31T19:05:59+00:00 should be 23:59:59 MMT");
		t.equal(moment("1959-12-31T19:06:00+00:00").tz("Indian/Maldives").format("HH:mm:ss"), "00:06:00", "1959-12-31T19:06:00+00:00 should be 00:06:00 MVT");

		t.equal(moment("1959-12-31T19:05:59+00:00").tz("Indian/Maldives").zone(), -294, "1959-12-31T19:05:59+00:00 should be -294 minutes offset in MMT");
		t.equal(moment("1959-12-31T19:06:00+00:00").tz("Indian/Maldives").zone(), -300, "1959-12-31T19:06:00+00:00 should be -300 minutes offset in MVT");

		t.done();
	}
};
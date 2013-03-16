var moment = require("../../moment-timezone");

exports["Antarctica/Vostok"] = {

	"1957" : function (t) {
		t.equal(moment("1957-12-15T23:59:59+00:00").tz("Antarctica/Vostok").format("HH:mm:ss"), "23:59:59", "1957-12-15T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1957-12-16T00:00:00+00:00").tz("Antarctica/Vostok").format("HH:mm:ss"), "06:00:00", "1957-12-16T00:00:00+00:00 should be 06:00:00 VOST");

		t.equal(moment("1957-12-15T23:59:59+00:00").tz("Antarctica/Vostok").zone(), 0, "1957-12-15T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1957-12-16T00:00:00+00:00").tz("Antarctica/Vostok").zone(), -360, "1957-12-16T00:00:00+00:00 should be -360 minutes offset in VOST");

		t.done();
	}
};
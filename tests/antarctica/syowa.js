var moment = require("../../moment-timezone");

exports["Antarctica/Syowa"] = {

	"1957" : function (t) {
		t.equal(moment("1957-01-28T23:59:59+00:00").tz("Antarctica/Syowa").format("HH:mm:ss"), "23:59:59", "1957-01-28T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1957-01-29T00:00:00+00:00").tz("Antarctica/Syowa").format("HH:mm:ss"), "03:00:00", "1957-01-29T00:00:00+00:00 should be 03:00:00 SYOT");

		t.equal(moment("1957-01-28T23:59:59+00:00").tz("Antarctica/Syowa").zone(), 0, "1957-01-28T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1957-01-29T00:00:00+00:00").tz("Antarctica/Syowa").zone(), -180, "1957-01-29T00:00:00+00:00 should be -180 minutes offset in SYOT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Indian/Mayotte"] = {

	"1911" : function (t) {
		t.equal(moment("1911-06-30T20:59:03+00:00").tz("Indian/Mayotte").format("HH:mm:ss"), "23:59:59", "1911-06-30T20:59:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-06-30T20:59:04+00:00").tz("Indian/Mayotte").format("HH:mm:ss"), "23:59:04", "1911-06-30T20:59:04+00:00 should be 23:59:04 EAT");

		t.equal(moment("1911-06-30T20:59:03+00:00").tz("Indian/Mayotte").zone(), -10856 / 60, "1911-06-30T20:59:03+00:00 should be -10856 / 60 minutes offset in LMT");
		t.equal(moment("1911-06-30T20:59:04+00:00").tz("Indian/Mayotte").zone(), -180, "1911-06-30T20:59:04+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
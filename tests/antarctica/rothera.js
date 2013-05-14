var moment = require("../../index");

exports["Antarctica/Rothera"] = {

	"1976" : function (t) {
		t.equal(moment("1976-11-30T23:59:59+00:00").tz("Antarctica/Rothera").format("HH:mm:ss"), "23:59:59", "1976-11-30T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1976-12-01T00:00:00+00:00").tz("Antarctica/Rothera").format("HH:mm:ss"), "21:00:00", "1976-12-01T00:00:00+00:00 should be 21:00:00 ROTT");

		t.equal(moment("1976-11-30T23:59:59+00:00").tz("Antarctica/Rothera").zone(), 0, "1976-11-30T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1976-12-01T00:00:00+00:00").tz("Antarctica/Rothera").zone(), 180, "1976-12-01T00:00:00+00:00 should be 180 minutes offset in ROTT");

		t.done();
	}
};
var moment = require("../../index");

exports["Indian/Kerguelen"] = {

	"1949" : function (t) {
		t.equal(moment("1949-12-31T23:59:59+00:00").tz("Indian/Kerguelen").format("HH:mm:ss"), "23:59:59", "1949-12-31T23:59:59+00:00 should be 23:59:59 zzz");

		t.equal(moment("1949-12-31T23:59:59+00:00").tz("Indian/Kerguelen").zone(), 0, "1949-12-31T23:59:59+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-01-01T00:00:00+00:00").tz("Indian/Kerguelen").format("HH:mm:ss"), "05:00:00", "1950-01-01T00:00:00+00:00 should be 05:00:00 TFT");

		t.equal(moment("1950-01-01T00:00:00+00:00").tz("Indian/Kerguelen").zone(), -300, "1950-01-01T00:00:00+00:00 should be -300 minutes offset in TFT");

		t.done();
	}
};
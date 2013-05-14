var moment = require("../../index");

exports["Pacific/Galapagos"] = {

	"1931" : function (t) {
		t.equal(moment("1931-01-01T05:58:23+00:00").tz("Pacific/Galapagos").format("HH:mm:ss"), "23:59:59", "1931-01-01T05:58:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1931-01-01T05:58:24+00:00").tz("Pacific/Galapagos").format("HH:mm:ss"), "00:58:24", "1931-01-01T05:58:24+00:00 should be 00:58:24 ECT");

		t.equal(moment("1931-01-01T05:58:23+00:00").tz("Pacific/Galapagos").zone(), 21504 / 60, "1931-01-01T05:58:23+00:00 should be 21504 / 60 minutes offset in LMT");
		t.equal(moment("1931-01-01T05:58:24+00:00").tz("Pacific/Galapagos").zone(), 300, "1931-01-01T05:58:24+00:00 should be 300 minutes offset in ECT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-01-01T04:59:59+00:00").tz("Pacific/Galapagos").format("HH:mm:ss"), "23:59:59", "1986-01-01T04:59:59+00:00 should be 23:59:59 ECT");
		t.equal(moment("1986-01-01T05:00:00+00:00").tz("Pacific/Galapagos").format("HH:mm:ss"), "23:00:00", "1986-01-01T05:00:00+00:00 should be 23:00:00 GALT");

		t.equal(moment("1986-01-01T04:59:59+00:00").tz("Pacific/Galapagos").zone(), 300, "1986-01-01T04:59:59+00:00 should be 300 minutes offset in ECT");
		t.equal(moment("1986-01-01T05:00:00+00:00").tz("Pacific/Galapagos").zone(), 360, "1986-01-01T05:00:00+00:00 should be 360 minutes offset in GALT");

		t.done();
	}
};
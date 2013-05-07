var moment = require("../../moment-timezone");

exports["Africa/Ndjamena"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T22:59:47+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "23:59:59", "1911-12-31T22:59:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T22:59:48+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "23:59:48", "1911-12-31T22:59:48+00:00 should be 23:59:48 WAT");

		t.equal(moment("1911-12-31T22:59:47+00:00").tz("Africa/Ndjamena").zone(), -3612 / 60, "1911-12-31T22:59:47+00:00 should be -3612 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T22:59:48+00:00").tz("Africa/Ndjamena").zone(), -60, "1911-12-31T22:59:48+00:00 should be -60 minutes offset in WAT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-10-13T22:59:59+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "23:59:59", "1979-10-13T22:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1979-10-13T23:00:00+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "01:00:00", "1979-10-13T23:00:00+00:00 should be 01:00:00 WAST");

		t.equal(moment("1979-10-13T22:59:59+00:00").tz("Africa/Ndjamena").zone(), -60, "1979-10-13T22:59:59+00:00 should be -60 minutes offset in WAT");
		t.equal(moment("1979-10-13T23:00:00+00:00").tz("Africa/Ndjamena").zone(), -120, "1979-10-13T23:00:00+00:00 should be -120 minutes offset in WAST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-07T21:59:59+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "23:59:59", "1980-03-07T21:59:59+00:00 should be 23:59:59 WAST");
		t.equal(moment("1980-03-07T22:00:00+00:00").tz("Africa/Ndjamena").format("HH:mm:ss"), "23:00:00", "1980-03-07T22:00:00+00:00 should be 23:00:00 WAT");

		t.equal(moment("1980-03-07T21:59:59+00:00").tz("Africa/Ndjamena").zone(), -120, "1980-03-07T21:59:59+00:00 should be -120 minutes offset in WAST");
		t.equal(moment("1980-03-07T22:00:00+00:00").tz("Africa/Ndjamena").zone(), -60, "1980-03-07T22:00:00+00:00 should be -60 minutes offset in WAT");

		t.done();
	}
};
var moment = require("../../index");

exports["Atlantic/Cape_Verde"] = {

	"1907" : function (t) {
		t.equal(moment("1907-01-01T01:34:03+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "23:59:59", "1907-01-01T01:34:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1907-01-01T01:34:04+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "23:34:04", "1907-01-01T01:34:04+00:00 should be 23:34:04 CVT");

		t.equal(moment("1907-01-01T01:34:03+00:00").tz("Atlantic/Cape_Verde").zone(), 5644 / 60, "1907-01-01T01:34:03+00:00 should be 5644 / 60 minutes offset in LMT");
		t.equal(moment("1907-01-01T01:34:04+00:00").tz("Atlantic/Cape_Verde").zone(), 120, "1907-01-01T01:34:04+00:00 should be 120 minutes offset in CVT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-09-01T01:59:59+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "23:59:59", "1942-09-01T01:59:59+00:00 should be 23:59:59 CVT");
		t.equal(moment("1942-09-01T02:00:00+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "01:00:00", "1942-09-01T02:00:00+00:00 should be 01:00:00 CVST");

		t.equal(moment("1942-09-01T01:59:59+00:00").tz("Atlantic/Cape_Verde").zone(), 120, "1942-09-01T01:59:59+00:00 should be 120 minutes offset in CVT");
		t.equal(moment("1942-09-01T02:00:00+00:00").tz("Atlantic/Cape_Verde").zone(), 60, "1942-09-01T02:00:00+00:00 should be 60 minutes offset in CVST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-10-15T00:59:59+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "23:59:59", "1945-10-15T00:59:59+00:00 should be 23:59:59 CVST");
		t.equal(moment("1945-10-15T01:00:00+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "23:00:00", "1945-10-15T01:00:00+00:00 should be 23:00:00 CVT");

		t.equal(moment("1945-10-15T00:59:59+00:00").tz("Atlantic/Cape_Verde").zone(), 60, "1945-10-15T00:59:59+00:00 should be 60 minutes offset in CVST");
		t.equal(moment("1945-10-15T01:00:00+00:00").tz("Atlantic/Cape_Verde").zone(), 120, "1945-10-15T01:00:00+00:00 should be 120 minutes offset in CVT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-11-25T03:59:59+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "01:59:59", "1975-11-25T03:59:59+00:00 should be 01:59:59 CVT");
		t.equal(moment("1975-11-25T04:00:00+00:00").tz("Atlantic/Cape_Verde").format("HH:mm:ss"), "03:00:00", "1975-11-25T04:00:00+00:00 should be 03:00:00 CVT");

		t.equal(moment("1975-11-25T03:59:59+00:00").tz("Atlantic/Cape_Verde").zone(), 120, "1975-11-25T03:59:59+00:00 should be 120 minutes offset in CVT");
		t.equal(moment("1975-11-25T04:00:00+00:00").tz("Atlantic/Cape_Verde").zone(), 60, "1975-11-25T04:00:00+00:00 should be 60 minutes offset in CVT");

		t.done();
	}
};
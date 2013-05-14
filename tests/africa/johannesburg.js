var moment = require("../../index");

exports["Africa/Johannesburg"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T22:29:59+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "23:59:59", "1903-02-28T22:29:59+00:00 should be 23:59:59 SAST");
		t.equal(moment("1903-02-28T22:30:00+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "00:30:00", "1903-02-28T22:30:00+00:00 should be 00:30:00 SAST");

		t.equal(moment("1903-02-28T22:29:59+00:00").tz("Africa/Johannesburg").zone(), -90, "1903-02-28T22:29:59+00:00 should be -90 minutes offset in SAST");
		t.equal(moment("1903-02-28T22:30:00+00:00").tz("Africa/Johannesburg").zone(), -120, "1903-02-28T22:30:00+00:00 should be -120 minutes offset in SAST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-09-19T23:59:59+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:59:59", "1942-09-19T23:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1942-09-20T00:00:00+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "03:00:00", "1942-09-20T00:00:00+00:00 should be 03:00:00 SAST");

		t.equal(moment("1942-09-19T23:59:59+00:00").tz("Africa/Johannesburg").zone(), -120, "1942-09-19T23:59:59+00:00 should be -120 minutes offset in SAST");
		t.equal(moment("1942-09-20T00:00:00+00:00").tz("Africa/Johannesburg").zone(), -180, "1942-09-20T00:00:00+00:00 should be -180 minutes offset in SAST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-20T22:59:59+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:59:59", "1943-03-20T22:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1943-03-20T23:00:00+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:00:00", "1943-03-20T23:00:00+00:00 should be 01:00:00 SAST");
		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:59:59", "1943-09-18T23:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "03:00:00", "1943-09-19T00:00:00+00:00 should be 03:00:00 SAST");

		t.equal(moment("1943-03-20T22:59:59+00:00").tz("Africa/Johannesburg").zone(), -180, "1943-03-20T22:59:59+00:00 should be -180 minutes offset in SAST");
		t.equal(moment("1943-03-20T23:00:00+00:00").tz("Africa/Johannesburg").zone(), -120, "1943-03-20T23:00:00+00:00 should be -120 minutes offset in SAST");
		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Johannesburg").zone(), -120, "1943-09-18T23:59:59+00:00 should be -120 minutes offset in SAST");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Johannesburg").zone(), -180, "1943-09-19T00:00:00+00:00 should be -180 minutes offset in SAST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:59:59", "1944-03-18T22:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Johannesburg").format("HH:mm:ss"), "01:00:00", "1944-03-18T23:00:00+00:00 should be 01:00:00 SAST");

		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Johannesburg").zone(), -180, "1944-03-18T22:59:59+00:00 should be -180 minutes offset in SAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Johannesburg").zone(), -120, "1944-03-18T23:00:00+00:00 should be -120 minutes offset in SAST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Africa/Maseru"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T22:09:59+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "23:59:59", "1903-02-28T22:09:59+00:00 should be 23:59:59 LMT");
		t.equal(moment("1903-02-28T22:10:00+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "00:10:00", "1903-02-28T22:10:00+00:00 should be 00:10:00 SAST");

		t.equal(moment("1903-02-28T22:09:59+00:00").tz("Africa/Maseru").zone(), -110, "1903-02-28T22:09:59+00:00 should be -110 minutes offset in LMT");
		t.equal(moment("1903-02-28T22:10:00+00:00").tz("Africa/Maseru").zone(), -120, "1903-02-28T22:10:00+00:00 should be -120 minutes offset in SAST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "01:59:59", "1943-09-18T23:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "03:00:00", "1943-09-19T00:00:00+00:00 should be 03:00:00 SAST");

		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Maseru").zone(), -120, "1943-09-18T23:59:59+00:00 should be -120 minutes offset in SAST");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Maseru").zone(), -180, "1943-09-19T00:00:00+00:00 should be -180 minutes offset in SAST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "01:59:59", "1944-03-18T22:59:59+00:00 should be 01:59:59 SAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Maseru").format("HH:mm:ss"), "01:00:00", "1944-03-18T23:00:00+00:00 should be 01:00:00 SAST");

		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Maseru").zone(), -180, "1944-03-18T22:59:59+00:00 should be -180 minutes offset in SAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Maseru").zone(), -120, "1944-03-18T23:00:00+00:00 should be -120 minutes offset in SAST");

		t.done();
	}
};
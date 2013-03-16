var moment = require("../../moment-timezone");

exports["Africa/Gaborone"] = {

	"1903" : function (t) {
		t.equal(moment("1903-02-28T22:29:59+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "23:59:59", "1903-02-28T22:29:59+00:00 should be 23:59:59 SAST");
		t.equal(moment("1903-02-28T22:30:00+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "00:30:00", "1903-02-28T22:30:00+00:00 should be 00:30:00 CAT");

		t.equal(moment("1903-02-28T22:29:59+00:00").tz("Africa/Gaborone").zone(), -90, "1903-02-28T22:29:59+00:00 should be -90 minutes offset in SAST");
		t.equal(moment("1903-02-28T22:30:00+00:00").tz("Africa/Gaborone").zone(), -120, "1903-02-28T22:30:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "01:59:59", "1943-09-18T23:59:59+00:00 should be 01:59:59 CAT");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "03:00:00", "1943-09-19T00:00:00+00:00 should be 03:00:00 CAST");

		t.equal(moment("1943-09-18T23:59:59+00:00").tz("Africa/Gaborone").zone(), -120, "1943-09-18T23:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1943-09-19T00:00:00+00:00").tz("Africa/Gaborone").zone(), -180, "1943-09-19T00:00:00+00:00 should be -180 minutes offset in CAST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "01:59:59", "1944-03-18T22:59:59+00:00 should be 01:59:59 CAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Gaborone").format("HH:mm:ss"), "01:00:00", "1944-03-18T23:00:00+00:00 should be 01:00:00 CAT");

		t.equal(moment("1944-03-18T22:59:59+00:00").tz("Africa/Gaborone").zone(), -180, "1944-03-18T22:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1944-03-18T23:00:00+00:00").tz("Africa/Gaborone").zone(), -120, "1944-03-18T23:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	}
};
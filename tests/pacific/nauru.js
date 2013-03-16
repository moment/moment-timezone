var moment = require("../../moment-timezone");

exports["Pacific/Nauru"] = {

	"1921" : function (t) {
		t.equal(moment("1921-01-14T12:52:19+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "23:59:59", "1921-01-14T12:52:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1921-01-14T12:52:20+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "00:22:20", "1921-01-14T12:52:20+00:00 should be 00:22:20 NRT");

		t.equal(moment("1921-01-14T12:52:19+00:00").tz("Pacific/Nauru").zone(), -667, "1921-01-14T12:52:19+00:00 should be -667 minutes offset in LMT");
		t.equal(moment("1921-01-14T12:52:20+00:00").tz("Pacific/Nauru").zone(), -690, "1921-01-14T12:52:20+00:00 should be -690 minutes offset in NRT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-14T12:29:59+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "23:59:59", "1942-03-14T12:29:59+00:00 should be 23:59:59 NRT");
		t.equal(moment("1942-03-14T12:30:00+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "21:30:00", "1942-03-14T12:30:00+00:00 should be 21:30:00 JST");

		t.equal(moment("1942-03-14T12:29:59+00:00").tz("Pacific/Nauru").zone(), -690, "1942-03-14T12:29:59+00:00 should be -690 minutes offset in NRT");
		t.equal(moment("1942-03-14T12:30:00+00:00").tz("Pacific/Nauru").zone(), -540, "1942-03-14T12:30:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-08-14T14:59:59+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "23:59:59", "1944-08-14T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1944-08-14T15:00:00+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "02:30:00", "1944-08-14T15:00:00+00:00 should be 02:30:00 NRT");

		t.equal(moment("1944-08-14T14:59:59+00:00").tz("Pacific/Nauru").zone(), -540, "1944-08-14T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1944-08-14T15:00:00+00:00").tz("Pacific/Nauru").zone(), -690, "1944-08-14T15:00:00+00:00 should be -690 minutes offset in NRT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-30T12:29:59+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "23:59:59", "1979-04-30T12:29:59+00:00 should be 23:59:59 NRT");
		t.equal(moment("1979-04-30T12:30:00+00:00").tz("Pacific/Nauru").format("HH:mm:ss"), "00:30:00", "1979-04-30T12:30:00+00:00 should be 00:30:00 NRT");

		t.equal(moment("1979-04-30T12:29:59+00:00").tz("Pacific/Nauru").zone(), -690, "1979-04-30T12:29:59+00:00 should be -690 minutes offset in NRT");
		t.equal(moment("1979-04-30T12:30:00+00:00").tz("Pacific/Nauru").zone(), -720, "1979-04-30T12:30:00+00:00 should be -720 minutes offset in NRT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Pacific/Midway"] = {

	"1956" : function (t) {
		t.equal(moment("1956-06-03T10:59:59+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "23:59:59", "1956-06-03T10:59:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1956-06-03T11:00:00+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "01:00:00", "1956-06-03T11:00:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1956-09-02T09:59:59+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "23:59:59", "1956-09-02T09:59:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1956-09-02T10:00:00+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "23:00:00", "1956-09-02T10:00:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1956-06-03T10:59:59+00:00").tz("Pacific/Midway").zone(), 660, "1956-06-03T10:59:59+00:00 should be 660 minutes offset in NST");
		t.equal(moment("1956-06-03T11:00:00+00:00").tz("Pacific/Midway").zone(), 600, "1956-06-03T11:00:00+00:00 should be 600 minutes offset in NDT");
		t.equal(moment("1956-09-02T09:59:59+00:00").tz("Pacific/Midway").zone(), 600, "1956-09-02T09:59:59+00:00 should be 600 minutes offset in NDT");
		t.equal(moment("1956-09-02T10:00:00+00:00").tz("Pacific/Midway").zone(), 660, "1956-09-02T10:00:00+00:00 should be 660 minutes offset in NST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-01T10:59:59+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "23:59:59", "1967-04-01T10:59:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "00:00:00", "1967-04-01T11:00:00+00:00 should be 00:00:00 BST");

		t.equal(moment("1967-04-01T10:59:59+00:00").tz("Pacific/Midway").zone(), 660, "1967-04-01T10:59:59+00:00 should be 660 minutes offset in NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("Pacific/Midway").zone(), 660, "1967-04-01T11:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-11-30T10:59:59+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "23:59:59", "1983-11-30T10:59:59+00:00 should be 23:59:59 BST");
		t.equal(moment("1983-11-30T11:00:00+00:00").tz("Pacific/Midway").format("HH:mm:ss"), "00:00:00", "1983-11-30T11:00:00+00:00 should be 00:00:00 SST");

		t.equal(moment("1983-11-30T10:59:59+00:00").tz("Pacific/Midway").zone(), 660, "1983-11-30T10:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1983-11-30T11:00:00+00:00").tz("Pacific/Midway").zone(), 660, "1983-11-30T11:00:00+00:00 should be 660 minutes offset in SST");

		t.done();
	}
};
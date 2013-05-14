var moment = require("../../index");

exports["Australia/Darwin"] = {

	"1916" : function (t) {
		t.equal(moment("1916-12-31T14:30:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "00:00:59", "1916-12-31T14:30:59+00:00 should be 00:00:59 CST");
		t.equal(moment("1916-12-31T14:31:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:01:00", "1916-12-31T14:31:00+00:00 should be 01:01:00 CST");

		t.equal(moment("1916-12-31T14:30:59+00:00").tz("Australia/Darwin").zone(), -570, "1916-12-31T14:30:59+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1916-12-31T14:31:00+00:00").tz("Australia/Darwin").zone(), -630, "1916-12-31T14:31:00+00:00 should be -630 minutes offset in CST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T15:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1917-03-24T15:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1917-03-24T15:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:00:00", "1917-03-24T15:30:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1917-03-24T15:29:59+00:00").tz("Australia/Darwin").zone(), -630, "1917-03-24T15:29:59+00:00 should be -630 minutes offset in CST");
		t.equal(moment("1917-03-24T15:30:00+00:00").tz("Australia/Darwin").zone(), -570, "1917-03-24T15:30:00+00:00 should be -570 minutes offset in CST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-12-31T16:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1941-12-31T16:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1941-12-31T16:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "03:00:00", "1941-12-31T16:30:00+00:00 should be 03:00:00 CST");

		t.equal(moment("1941-12-31T16:29:59+00:00").tz("Australia/Darwin").zone(), -570, "1941-12-31T16:29:59+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1941-12-31T16:30:00+00:00").tz("Australia/Darwin").zone(), -630, "1941-12-31T16:30:00+00:00 should be -630 minutes offset in CST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-28T15:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1942-03-28T15:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1942-03-28T15:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:00:00", "1942-03-28T15:30:00+00:00 should be 01:00:00 CST");
		t.equal(moment("1942-09-26T16:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1942-09-26T16:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1942-09-26T16:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "03:00:00", "1942-09-26T16:30:00+00:00 should be 03:00:00 CST");

		t.equal(moment("1942-03-28T15:29:59+00:00").tz("Australia/Darwin").zone(), -630, "1942-03-28T15:29:59+00:00 should be -630 minutes offset in CST");
		t.equal(moment("1942-03-28T15:30:00+00:00").tz("Australia/Darwin").zone(), -570, "1942-03-28T15:30:00+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1942-09-26T16:29:59+00:00").tz("Australia/Darwin").zone(), -570, "1942-09-26T16:29:59+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1942-09-26T16:30:00+00:00").tz("Australia/Darwin").zone(), -630, "1942-09-26T16:30:00+00:00 should be -630 minutes offset in CST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-27T15:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1943-03-27T15:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1943-03-27T15:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:00:00", "1943-03-27T15:30:00+00:00 should be 01:00:00 CST");
		t.equal(moment("1943-10-02T16:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1943-10-02T16:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1943-10-02T16:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "03:00:00", "1943-10-02T16:30:00+00:00 should be 03:00:00 CST");

		t.equal(moment("1943-03-27T15:29:59+00:00").tz("Australia/Darwin").zone(), -630, "1943-03-27T15:29:59+00:00 should be -630 minutes offset in CST");
		t.equal(moment("1943-03-27T15:30:00+00:00").tz("Australia/Darwin").zone(), -570, "1943-03-27T15:30:00+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1943-10-02T16:29:59+00:00").tz("Australia/Darwin").zone(), -570, "1943-10-02T16:29:59+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1943-10-02T16:30:00+00:00").tz("Australia/Darwin").zone(), -630, "1943-10-02T16:30:00+00:00 should be -630 minutes offset in CST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-25T15:29:59+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:59:59", "1944-03-25T15:29:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1944-03-25T15:30:00+00:00").tz("Australia/Darwin").format("HH:mm:ss"), "01:00:00", "1944-03-25T15:30:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1944-03-25T15:29:59+00:00").tz("Australia/Darwin").zone(), -630, "1944-03-25T15:29:59+00:00 should be -630 minutes offset in CST");
		t.equal(moment("1944-03-25T15:30:00+00:00").tz("Australia/Darwin").zone(), -570, "1944-03-25T15:30:00+00:00 should be -570 minutes offset in CST");

		t.done();
	}
};
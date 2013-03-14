var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Adelaide 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Adelaide").zone(), -630, "2013-01-01T00:00:00+00:00 should be -630 minutes offset");
		test.equal(moment("2013-04-06T16:29:59+00:00").tz("Australia/Adelaide").zone(), -630, "2013-04-06T16:29:59+00:00 should be -630 minutes offset");
		test.equal(moment("2013-04-06T16:30:00+00:00").tz("Australia/Adelaide").zone(), -570, "2013-04-06T16:30:00+00:00 should be -570 minutes offset");
		test.equal(moment("2013-10-05T16:29:59+00:00").tz("Australia/Adelaide").zone(), -570, "2013-10-05T16:29:59+00:00 should be -570 minutes offset");
		test.equal(moment("2013-10-05T16:30:00+00:00").tz("Australia/Adelaide").zone(), -630, "2013-10-05T16:30:00+00:00 should be -630 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Adelaide").zone(), -630, "2013-12-31T23:59:59+00:00 should be -630 minutes offset");

		test.done();
	},

	"Australia/Adelaide 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Adelaide").format("HH:mm"), "10:30", "2013-01-01T00:00:00+00:00 should be 10:30 in Australia/Adelaide");
		test.equal(moment("2013-04-06T16:29:59+00:00").tz("Australia/Adelaide").format("HH:mm"), "02:59", "2013-04-06T16:29:59+00:00 should be 02:59 in Australia/Adelaide");
		test.equal(moment("2013-04-06T16:30:00+00:00").tz("Australia/Adelaide").format("HH:mm"), "02:00", "2013-04-06T16:30:00+00:00 should be 02:00 in Australia/Adelaide");
		test.equal(moment("2013-10-05T16:29:59+00:00").tz("Australia/Adelaide").format("HH:mm"), "01:59", "2013-10-05T16:29:59+00:00 should be 01:59 in Australia/Adelaide");
		test.equal(moment("2013-10-05T16:30:00+00:00").tz("Australia/Adelaide").format("HH:mm"), "03:00", "2013-10-05T16:30:00+00:00 should be 03:00 in Australia/Adelaide");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Adelaide").format("HH:mm"), "10:29", "2013-12-31T23:59:59+00:00 should be 10:29 in Australia/Adelaide");

		test.done();
	}
};
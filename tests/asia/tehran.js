var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Tehran 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Tehran").zone(), -210, "2013-01-01T00:00:00+00:00 should be -210 minutes offset");
		test.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2013-03-21T20:29:59+00:00 should be -210 minutes offset");
		test.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2013-03-21T20:30:00+00:00 should be -270 minutes offset");
		test.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2013-09-21T19:29:59+00:00 should be -270 minutes offset");
		test.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2013-09-21T19:30:00+00:00 should be -210 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Tehran").zone(), -210, "2013-12-31T23:59:59+00:00 should be -210 minutes offset");

		test.done();
	},

	"Asia/Tehran 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Tehran").format("HH:mm"), "03:30", "2013-01-01T00:00:00+00:00 should be 03:30 in Asia/Tehran");
		test.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm"), "23:59", "2013-03-21T20:29:59+00:00 should be 23:59 in Asia/Tehran");
		test.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm"), "01:00", "2013-03-21T20:30:00+00:00 should be 01:00 in Asia/Tehran");
		test.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm"), "23:59", "2013-09-21T19:29:59+00:00 should be 23:59 in Asia/Tehran");
		test.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm"), "23:00", "2013-09-21T19:30:00+00:00 should be 23:00 in Asia/Tehran");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Tehran").format("HH:mm"), "03:29", "2013-12-31T23:59:59+00:00 should be 03:29 in Asia/Tehran");

		test.done();
	}
};
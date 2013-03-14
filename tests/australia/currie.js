var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Currie 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Currie").zone(), -660, "2013-01-01T00:00:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2013-04-06T15:59:59+00:00 should be -660 minutes offset");
		test.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2013-04-06T16:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2013-10-05T15:59:59+00:00 should be -600 minutes offset");
		test.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2013-10-05T16:00:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Currie").zone(), -660, "2013-12-31T23:59:59+00:00 should be -660 minutes offset");

		test.done();
	},

	"Australia/Currie 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Currie").format("HH:mm"), "11:00", "2013-01-01T00:00:00+00:00 should be 11:00 in Australia/Currie");
		test.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm"), "02:59", "2013-04-06T15:59:59+00:00 should be 02:59 in Australia/Currie");
		test.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm"), "02:00", "2013-04-06T16:00:00+00:00 should be 02:00 in Australia/Currie");
		test.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm"), "01:59", "2013-10-05T15:59:59+00:00 should be 01:59 in Australia/Currie");
		test.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm"), "03:00", "2013-10-05T16:00:00+00:00 should be 03:00 in Australia/Currie");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Currie").format("HH:mm"), "10:59", "2013-12-31T23:59:59+00:00 should be 10:59 in Australia/Currie");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Jerusalem 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-01-01T00:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-28T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-03-28T23:59:59+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-29T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2013-03-29T00:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-05T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2013-10-05T22:59:59+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-05T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-10-05T23:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Asia/Jerusalem 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm"), "02:00", "2013-01-01T00:00:00+00:00 should be 02:00 in Asia/Jerusalem");
		test.equal(moment("2013-03-28T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm"), "01:59", "2013-03-28T23:59:59+00:00 should be 01:59 in Asia/Jerusalem");
		test.equal(moment("2013-03-29T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm"), "03:00", "2013-03-29T00:00:00+00:00 should be 03:00 in Asia/Jerusalem");
		test.equal(moment("2013-10-05T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm"), "01:59", "2013-10-05T22:59:59+00:00 should be 01:59 in Asia/Jerusalem");
		test.equal(moment("2013-10-05T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm"), "01:00", "2013-10-05T23:00:00+00:00 should be 01:00 in Asia/Jerusalem");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Asia/Jerusalem");

		test.done();
	}
};
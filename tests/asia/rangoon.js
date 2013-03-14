var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Rangoon 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Rangoon").zone(), -390, "2013-01-01T00:00:00+00:00 should be -390 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Rangoon").zone(), -390, "2013-12-31T23:59:59+00:00 should be -390 minutes offset");

		test.done();
	},

	"Asia/Rangoon 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Rangoon").format("HH:mm"), "06:30", "2013-01-01T00:00:00+00:00 should be 06:30 in Asia/Rangoon");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Rangoon").format("HH:mm"), "06:29", "2013-12-31T23:59:59+00:00 should be 06:29 in Asia/Rangoon");

		test.done();
	}
};
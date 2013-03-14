var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Dubai 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Dubai").zone(), -240, "2013-01-01T00:00:00+00:00 should be -240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Dubai").zone(), -240, "2013-12-31T23:59:59+00:00 should be -240 minutes offset");

		test.done();
	},

	"Asia/Dubai 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Dubai").format("HH:mm"), "04:00", "2013-01-01T00:00:00+00:00 should be 04:00 in Asia/Dubai");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Dubai").format("HH:mm"), "03:59", "2013-12-31T23:59:59+00:00 should be 03:59 in Asia/Dubai");

		test.done();
	}
};
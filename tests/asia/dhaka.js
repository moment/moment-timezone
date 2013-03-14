var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Dhaka 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Dhaka").zone(), -360, "2013-01-01T00:00:00+00:00 should be -360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Dhaka").zone(), -360, "2013-12-31T23:59:59+00:00 should be -360 minutes offset");

		test.done();
	},

	"Asia/Dhaka 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Dhaka").format("HH:mm"), "06:00", "2013-01-01T00:00:00+00:00 should be 06:00 in Asia/Dhaka");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Dhaka").format("HH:mm"), "05:59", "2013-12-31T23:59:59+00:00 should be 05:59 in Asia/Dhaka");

		test.done();
	}
};
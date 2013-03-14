var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Kathmandu 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kathmandu").zone(), -345, "2013-01-01T00:00:00+00:00 should be -345 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kathmandu").zone(), -345, "2013-12-31T23:59:59+00:00 should be -345 minutes offset");

		test.done();
	},

	"Asia/Kathmandu 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kathmandu").format("HH:mm"), "05:45", "2013-01-01T00:00:00+00:00 should be 05:45 in Asia/Kathmandu");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kathmandu").format("HH:mm"), "05:44", "2013-12-31T23:59:59+00:00 should be 05:44 in Asia/Kathmandu");

		test.done();
	}
};
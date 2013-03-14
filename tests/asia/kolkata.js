var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Kolkata 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kolkata").zone(), -330, "2013-01-01T00:00:00+00:00 should be -330 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kolkata").zone(), -330, "2013-12-31T23:59:59+00:00 should be -330 minutes offset");

		test.done();
	},

	"Asia/Kolkata 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kolkata").format("HH:mm"), "05:30", "2013-01-01T00:00:00+00:00 should be 05:30 in Asia/Kolkata");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kolkata").format("HH:mm"), "05:29", "2013-12-31T23:59:59+00:00 should be 05:29 in Asia/Kolkata");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Hong_Kong 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "2013-01-01T00:00:00+00:00 should be -480 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "2013-12-31T23:59:59+00:00 should be -480 minutes offset");

		test.done();
	},

	"Asia/Hong_Kong 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Hong_Kong").format("HH:mm"), "08:00", "2013-01-01T00:00:00+00:00 should be 08:00 in Asia/Hong_Kong");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Hong_Kong").format("HH:mm"), "07:59", "2013-12-31T23:59:59+00:00 should be 07:59 in Asia/Hong_Kong");

		test.done();
	}
};
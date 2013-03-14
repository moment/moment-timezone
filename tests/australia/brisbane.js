var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Brisbane 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Brisbane").zone(), -600, "2013-01-01T00:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Brisbane").zone(), -600, "2013-12-31T23:59:59+00:00 should be -600 minutes offset");

		test.done();
	},

	"Australia/Brisbane 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Brisbane").format("HH:mm"), "10:00", "2013-01-01T00:00:00+00:00 should be 10:00 in Australia/Brisbane");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Brisbane").format("HH:mm"), "09:59", "2013-12-31T23:59:59+00:00 should be 09:59 in Australia/Brisbane");

		test.done();
	}
};
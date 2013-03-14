var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Darwin 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Darwin").zone(), -570, "2013-01-01T00:00:00+00:00 should be -570 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Darwin").zone(), -570, "2013-12-31T23:59:59+00:00 should be -570 minutes offset");

		test.done();
	},

	"Australia/Darwin 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Darwin").format("HH:mm"), "09:30", "2013-01-01T00:00:00+00:00 should be 09:30 in Australia/Darwin");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Darwin").format("HH:mm"), "09:29", "2013-12-31T23:59:59+00:00 should be 09:29 in Australia/Darwin");

		test.done();
	}
};
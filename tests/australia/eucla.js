var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Eucla 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Eucla").zone(), -525, "2013-01-01T00:00:00+00:00 should be -525 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Eucla").zone(), -525, "2013-12-31T23:59:59+00:00 should be -525 minutes offset");

		test.done();
	},

	"Australia/Eucla 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Eucla").format("HH:mm"), "08:45", "2013-01-01T00:00:00+00:00 should be 08:45 in Australia/Eucla");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Eucla").format("HH:mm"), "08:44", "2013-12-31T23:59:59+00:00 should be 08:44 in Australia/Eucla");

		test.done();
	}
};
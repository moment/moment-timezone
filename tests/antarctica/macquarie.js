var moment = require("../../moment-timezone");

exports.rules = {
	"Antarctica/Macquarie 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2013-01-01T00:00:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2013-12-31T23:59:59+00:00 should be -660 minutes offset");

		test.done();
	},

	"Antarctica/Macquarie 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm"), "11:00", "2013-01-01T00:00:00+00:00 should be 11:00 in Antarctica/Macquarie");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm"), "10:59", "2013-12-31T23:59:59+00:00 should be 10:59 in Antarctica/Macquarie");

		test.done();
	}
};
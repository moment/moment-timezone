var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/Canary 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Canary").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("Atlantic/Canary").zone(), 0, "2013-03-31T00:59:59+00:00 should be 0 minutes offset");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("Atlantic/Canary").zone(), -60, "2013-03-31T01:00:00+00:00 should be -60 minutes offset");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("Atlantic/Canary").zone(), -60, "2013-10-27T00:59:59+00:00 should be -60 minutes offset");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("Atlantic/Canary").zone(), 0, "2013-10-27T01:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Canary").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Atlantic/Canary 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Canary").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Atlantic/Canary");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("Atlantic/Canary").format("HH:mm"), "00:59", "2013-03-31T00:59:59+00:00 should be 00:59 in Atlantic/Canary");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("Atlantic/Canary").format("HH:mm"), "02:00", "2013-03-31T01:00:00+00:00 should be 02:00 in Atlantic/Canary");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("Atlantic/Canary").format("HH:mm"), "01:59", "2013-10-27T00:59:59+00:00 should be 01:59 in Atlantic/Canary");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("Atlantic/Canary").format("HH:mm"), "01:00", "2013-10-27T01:00:00+00:00 should be 01:00 in Atlantic/Canary");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Canary").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Atlantic/Canary");

		test.done();
	}
};
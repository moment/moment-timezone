var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/Bermuda 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Bermuda").zone(), 240, "2013-01-01T00:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-03-10T05:59:59+00:00").tz("Atlantic/Bermuda").zone(), 240, "2013-03-10T05:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-03-10T06:00:00+00:00").tz("Atlantic/Bermuda").zone(), 180, "2013-03-10T06:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-11-03T04:59:59+00:00").tz("Atlantic/Bermuda").zone(), 180, "2013-11-03T04:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-11-03T05:00:00+00:00").tz("Atlantic/Bermuda").zone(), 240, "2013-11-03T05:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Bermuda").zone(), 240, "2013-12-31T23:59:59+00:00 should be 240 minutes offset");

		test.done();
	},

	"Atlantic/Bermuda 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "20:00", "2013-01-01T00:00:00+00:00 should be 20:00 in Atlantic/Bermuda");
		test.equal(moment("2013-03-10T05:59:59+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "01:59", "2013-03-10T05:59:59+00:00 should be 01:59 in Atlantic/Bermuda");
		test.equal(moment("2013-03-10T06:00:00+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "03:00", "2013-03-10T06:00:00+00:00 should be 03:00 in Atlantic/Bermuda");
		test.equal(moment("2013-11-03T04:59:59+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "01:59", "2013-11-03T04:59:59+00:00 should be 01:59 in Atlantic/Bermuda");
		test.equal(moment("2013-11-03T05:00:00+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "01:00", "2013-11-03T05:00:00+00:00 should be 01:00 in Atlantic/Bermuda");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Bermuda").format("HH:mm"), "19:59", "2013-12-31T23:59:59+00:00 should be 19:59 in Atlantic/Bermuda");

		test.done();
	}
};
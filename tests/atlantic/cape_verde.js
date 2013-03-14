var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/Cape_Verde 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Cape_Verde").zone(), 60, "2013-01-01T00:00:00+00:00 should be 60 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Cape_Verde").zone(), 60, "2013-12-31T23:59:59+00:00 should be 60 minutes offset");

		test.done();
	},

	"Atlantic/Cape_Verde 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Cape_Verde").format("HH:mm"), "23:00", "2013-01-01T00:00:00+00:00 should be 23:00 in Atlantic/Cape_Verde");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Cape_Verde").format("HH:mm"), "22:59", "2013-12-31T23:59:59+00:00 should be 22:59 in Atlantic/Cape_Verde");

		test.done();
	}
};
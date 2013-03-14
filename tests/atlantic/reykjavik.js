var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/Reykjavik 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Atlantic/Reykjavik 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Atlantic/Reykjavik");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Atlantic/Reykjavik");

		test.done();
	}
};
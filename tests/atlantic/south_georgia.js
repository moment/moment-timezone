var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/South_Georgia 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/South_Georgia").zone(), 120, "2013-01-01T00:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/South_Georgia").zone(), 120, "2013-12-31T23:59:59+00:00 should be 120 minutes offset");

		test.done();
	},

	"Atlantic/South_Georgia 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/South_Georgia").format("HH:mm"), "22:00", "2013-01-01T00:00:00+00:00 should be 22:00 in Atlantic/South_Georgia");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/South_Georgia").format("HH:mm"), "21:59", "2013-12-31T23:59:59+00:00 should be 21:59 in Atlantic/South_Georgia");

		test.done();
	}
};
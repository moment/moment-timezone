var moment = require("../../moment-timezone");

exports.rules = {
	"Atlantic/Stanley 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Stanley").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Stanley").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"Atlantic/Stanley 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Atlantic/Stanley").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in Atlantic/Stanley");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Atlantic/Stanley").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in Atlantic/Stanley");

		test.done();
	}
};
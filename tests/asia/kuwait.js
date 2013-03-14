var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Kuwait 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kuwait").zone(), -180, "2013-01-01T00:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kuwait").zone(), -180, "2013-12-31T23:59:59+00:00 should be -180 minutes offset");

		test.done();
	},

	"Asia/Kuwait 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kuwait").format("HH:mm"), "03:00", "2013-01-01T00:00:00+00:00 should be 03:00 in Asia/Kuwait");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kuwait").format("HH:mm"), "02:59", "2013-12-31T23:59:59+00:00 should be 02:59 in Asia/Kuwait");

		test.done();
	}
};
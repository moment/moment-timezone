var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Gaza 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Gaza").zone(), -120, "2013-01-01T00:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Gaza").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Asia/Gaza 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Gaza").format("HH:mm"), "02:00", "2013-01-01T00:00:00+00:00 should be 02:00 in Asia/Gaza");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Gaza").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Asia/Gaza");

		test.done();
	}
};
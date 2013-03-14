var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Seoul 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Seoul").zone(), -540, "2013-01-01T00:00:00+00:00 should be -540 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Seoul").zone(), -540, "2013-12-31T23:59:59+00:00 should be -540 minutes offset");

		test.done();
	},

	"Asia/Seoul 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Seoul").format("HH:mm"), "09:00", "2013-01-01T00:00:00+00:00 should be 09:00 in Asia/Seoul");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Seoul").format("HH:mm"), "08:59", "2013-12-31T23:59:59+00:00 should be 08:59 in Asia/Seoul");

		test.done();
	}
};
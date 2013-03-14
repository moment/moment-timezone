var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Ho_Chi_Minh 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Ho_Chi_Minh").zone(), -420, "2013-01-01T00:00:00+00:00 should be -420 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Ho_Chi_Minh").zone(), -420, "2013-12-31T23:59:59+00:00 should be -420 minutes offset");

		test.done();
	},

	"Asia/Ho_Chi_Minh 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Ho_Chi_Minh").format("HH:mm"), "07:00", "2013-01-01T00:00:00+00:00 should be 07:00 in Asia/Ho_Chi_Minh");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Ho_Chi_Minh").format("HH:mm"), "06:59", "2013-12-31T23:59:59+00:00 should be 06:59 in Asia/Ho_Chi_Minh");

		test.done();
	}
};
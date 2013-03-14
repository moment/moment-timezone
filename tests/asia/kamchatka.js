var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Kamchatka 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2013-01-01T00:00:00+00:00 should be -720 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2013-12-31T23:59:59+00:00 should be -720 minutes offset");

		test.done();
	},

	"Asia/Kamchatka 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm"), "12:00", "2013-01-01T00:00:00+00:00 should be 12:00 in Asia/Kamchatka");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm"), "11:59", "2013-12-31T23:59:59+00:00 should be 11:59 in Asia/Kamchatka");

		test.done();
	}
};
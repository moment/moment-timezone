var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Kabul 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kabul").zone(), -270, "2013-01-01T00:00:00+00:00 should be -270 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kabul").zone(), -270, "2013-12-31T23:59:59+00:00 should be -270 minutes offset");

		test.done();
	},

	"Asia/Kabul 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Kabul").format("HH:mm"), "04:30", "2013-01-01T00:00:00+00:00 should be 04:30 in Asia/Kabul");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Kabul").format("HH:mm"), "04:29", "2013-12-31T23:59:59+00:00 should be 04:29 in Asia/Kabul");

		test.done();
	}
};
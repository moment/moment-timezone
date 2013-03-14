var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Baku 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2013-01-01T00:00:00+00:00 should be -240 minutes offset");
		test.equal(moment("2013-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2013-03-30T23:59:59+00:00 should be -240 minutes offset");
		test.equal(moment("2013-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2013-03-31T00:00:00+00:00 should be -300 minutes offset");
		test.equal(moment("2013-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2013-10-26T23:59:59+00:00 should be -300 minutes offset");
		test.equal(moment("2013-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2013-10-27T00:00:00+00:00 should be -240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2013-12-31T23:59:59+00:00 should be -240 minutes offset");

		test.done();
	},

	"Asia/Baku 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Baku").format("HH:mm"), "04:00", "2013-01-01T00:00:00+00:00 should be 04:00 in Asia/Baku");
		test.equal(moment("2013-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm"), "03:59", "2013-03-30T23:59:59+00:00 should be 03:59 in Asia/Baku");
		test.equal(moment("2013-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm"), "05:00", "2013-03-31T00:00:00+00:00 should be 05:00 in Asia/Baku");
		test.equal(moment("2013-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm"), "04:59", "2013-10-26T23:59:59+00:00 should be 04:59 in Asia/Baku");
		test.equal(moment("2013-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm"), "04:00", "2013-10-27T00:00:00+00:00 should be 04:00 in Asia/Baku");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Baku").format("HH:mm"), "03:59", "2013-12-31T23:59:59+00:00 should be 03:59 in Asia/Baku");

		test.done();
	}
};
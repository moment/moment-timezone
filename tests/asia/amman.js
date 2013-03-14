var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Amman 2013 offset" : function (test) {
		test.expect(4);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Amman").zone(), -180, "2013-01-01T00:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-24T21:59:59+00:00").tz("Asia/Amman").zone(), -180, "2013-10-24T21:59:59+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-24T22:00:00+00:00").tz("Asia/Amman").zone(), -120, "2013-10-24T22:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Amman").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Asia/Amman 2013 format" : function (test) {
		test.expect(4);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Amman").format("HH:mm"), "03:00", "2013-01-01T00:00:00+00:00 should be 03:00 in Asia/Amman");
		test.equal(moment("2013-10-24T21:59:59+00:00").tz("Asia/Amman").format("HH:mm"), "00:59", "2013-10-24T21:59:59+00:00 should be 00:59 in Asia/Amman");
		test.equal(moment("2013-10-24T22:00:00+00:00").tz("Asia/Amman").format("HH:mm"), "00:00", "2013-10-24T22:00:00+00:00 should be 00:00 in Asia/Amman");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Amman").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Asia/Amman");

		test.done();
	}
};
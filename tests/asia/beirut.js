var moment = require("../../moment-timezone");

exports.rules = {
	"Asia/Beirut 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2013-01-01T00:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-30T21:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2013-03-30T21:59:59+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-30T22:00:00+00:00").tz("Asia/Beirut").zone(), -180, "2013-03-30T22:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-26T20:59:59+00:00").tz("Asia/Beirut").zone(), -180, "2013-10-26T20:59:59+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-26T21:00:00+00:00").tz("Asia/Beirut").zone(), -120, "2013-10-26T21:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Beirut").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Asia/Beirut 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Asia/Beirut").format("HH:mm"), "02:00", "2013-01-01T00:00:00+00:00 should be 02:00 in Asia/Beirut");
		test.equal(moment("2013-03-30T21:59:59+00:00").tz("Asia/Beirut").format("HH:mm"), "23:59", "2013-03-30T21:59:59+00:00 should be 23:59 in Asia/Beirut");
		test.equal(moment("2013-03-30T22:00:00+00:00").tz("Asia/Beirut").format("HH:mm"), "01:00", "2013-03-30T22:00:00+00:00 should be 01:00 in Asia/Beirut");
		test.equal(moment("2013-10-26T20:59:59+00:00").tz("Asia/Beirut").format("HH:mm"), "23:59", "2013-10-26T20:59:59+00:00 should be 23:59 in Asia/Beirut");
		test.equal(moment("2013-10-26T21:00:00+00:00").tz("Asia/Beirut").format("HH:mm"), "23:00", "2013-10-26T21:00:00+00:00 should be 23:00 in Asia/Beirut");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Asia/Beirut").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Asia/Beirut");

		test.done();
	}
};
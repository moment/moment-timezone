var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/Douala 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Douala").zone(), -60, "2013-01-01T00:00:00+00:00 should be -60 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Douala").zone(), -60, "2013-12-31T23:59:59+00:00 should be -60 minutes offset");

		test.done();
	},

	"Africa/Douala 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Douala").format("HH:mm"), "01:00", "2013-01-01T00:00:00+00:00 should be 01:00 in Africa/Douala");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Douala").format("HH:mm"), "00:59", "2013-12-31T23:59:59+00:00 should be 00:59 in Africa/Douala");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Wake 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Wake").zone(), -720, "2013-01-01T00:00:00+00:00 should be -720 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Wake").zone(), -720, "2013-12-31T23:59:59+00:00 should be -720 minutes offset");

		test.done();
	},

	"Pacific/Wake 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Wake").format("HH:mm"), "12:00", "2013-01-01T00:00:00+00:00 should be 12:00 in Pacific/Wake");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Wake").format("HH:mm"), "11:59", "2013-12-31T23:59:59+00:00 should be 11:59 in Pacific/Wake");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Rarotonga 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "2013-01-01T00:00:00+00:00 should be 600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "2013-12-31T23:59:59+00:00 should be 600 minutes offset");

		test.done();
	},

	"Pacific/Rarotonga 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm"), "14:00", "2013-01-01T00:00:00+00:00 should be 14:00 in Pacific/Rarotonga");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm"), "13:59", "2013-12-31T23:59:59+00:00 should be 13:59 in Pacific/Rarotonga");

		test.done();
	}
};
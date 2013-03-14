var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Majuro 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Majuro").zone(), -720, "2013-01-01T00:00:00+00:00 should be -720 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Majuro").zone(), -720, "2013-12-31T23:59:59+00:00 should be -720 minutes offset");

		test.done();
	},

	"Pacific/Majuro 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Majuro").format("HH:mm"), "12:00", "2013-01-01T00:00:00+00:00 should be 12:00 in Pacific/Majuro");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Majuro").format("HH:mm"), "11:59", "2013-12-31T23:59:59+00:00 should be 11:59 in Pacific/Majuro");

		test.done();
	}
};
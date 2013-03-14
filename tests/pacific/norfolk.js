var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Norfolk 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Norfolk").zone(), -690, "2013-01-01T00:00:00+00:00 should be -690 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Norfolk").zone(), -690, "2013-12-31T23:59:59+00:00 should be -690 minutes offset");

		test.done();
	},

	"Pacific/Norfolk 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Norfolk").format("HH:mm"), "11:30", "2013-01-01T00:00:00+00:00 should be 11:30 in Pacific/Norfolk");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Norfolk").format("HH:mm"), "11:29", "2013-12-31T23:59:59+00:00 should be 11:29 in Pacific/Norfolk");

		test.done();
	}
};
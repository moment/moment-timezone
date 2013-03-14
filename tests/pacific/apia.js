var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Apia 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2013-01-01T00:00:00+00:00 should be -840 minutes offset");
		test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2013-04-06T13:59:59+00:00 should be -840 minutes offset");
		test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2013-04-06T14:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2013-09-28T13:59:59+00:00 should be -780 minutes offset");
		test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2013-09-28T14:00:00+00:00 should be -840 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2013-12-31T23:59:59+00:00 should be -840 minutes offset");

		test.done();
	},

	"Pacific/Apia 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Apia").format("HH:mm"), "14:00", "2013-01-01T00:00:00+00:00 should be 14:00 in Pacific/Apia");
		test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm"), "03:59", "2013-04-06T13:59:59+00:00 should be 03:59 in Pacific/Apia");
		test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm"), "03:00", "2013-04-06T14:00:00+00:00 should be 03:00 in Pacific/Apia");
		test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm"), "02:59", "2013-09-28T13:59:59+00:00 should be 02:59 in Pacific/Apia");
		test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm"), "04:00", "2013-09-28T14:00:00+00:00 should be 04:00 in Pacific/Apia");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Apia").format("HH:mm"), "13:59", "2013-12-31T23:59:59+00:00 should be 13:59 in Pacific/Apia");

		test.done();
	}
};
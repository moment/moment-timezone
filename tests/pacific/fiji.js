var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Fiji 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2013-01-01T00:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-01-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2013-01-19T13:59:59+00:00 should be -780 minutes offset");
		test.equal(moment("2013-01-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2013-01-19T14:00:00+00:00 should be -720 minutes offset");
		test.equal(moment("2013-10-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2013-10-19T13:59:59+00:00 should be -720 minutes offset");
		test.equal(moment("2013-10-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2013-10-19T14:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2013-12-31T23:59:59+00:00 should be -780 minutes offset");

		test.done();
	},

	"Pacific/Fiji 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Fiji").format("HH:mm"), "13:00", "2013-01-01T00:00:00+00:00 should be 13:00 in Pacific/Fiji");
		test.equal(moment("2013-01-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm"), "02:59", "2013-01-19T13:59:59+00:00 should be 02:59 in Pacific/Fiji");
		test.equal(moment("2013-01-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm"), "02:00", "2013-01-19T14:00:00+00:00 should be 02:00 in Pacific/Fiji");
		test.equal(moment("2013-10-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm"), "01:59", "2013-10-19T13:59:59+00:00 should be 01:59 in Pacific/Fiji");
		test.equal(moment("2013-10-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm"), "03:00", "2013-10-19T14:00:00+00:00 should be 03:00 in Pacific/Fiji");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Fiji").format("HH:mm"), "12:59", "2013-12-31T23:59:59+00:00 should be 12:59 in Pacific/Fiji");

		test.done();
	}
};
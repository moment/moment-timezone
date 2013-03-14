var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Auckland 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2013-01-01T00:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2013-04-06T13:59:59+00:00 should be -780 minutes offset");
		test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Auckland").zone(), -720, "2013-04-06T14:00:00+00:00 should be -720 minutes offset");
		test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Auckland").zone(), -720, "2013-09-28T13:59:59+00:00 should be -720 minutes offset");
		test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Auckland").zone(), -780, "2013-09-28T14:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Auckland").zone(), -780, "2013-12-31T23:59:59+00:00 should be -780 minutes offset");

		test.done();
	},

	"Pacific/Auckland 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Auckland").format("HH:mm"), "13:00", "2013-01-01T00:00:00+00:00 should be 13:00 in Pacific/Auckland");
		test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm"), "02:59", "2013-04-06T13:59:59+00:00 should be 02:59 in Pacific/Auckland");
		test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm"), "02:00", "2013-04-06T14:00:00+00:00 should be 02:00 in Pacific/Auckland");
		test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Auckland").format("HH:mm"), "01:59", "2013-09-28T13:59:59+00:00 should be 01:59 in Pacific/Auckland");
		test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Auckland").format("HH:mm"), "03:00", "2013-09-28T14:00:00+00:00 should be 03:00 in Pacific/Auckland");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Auckland").format("HH:mm"), "12:59", "2013-12-31T23:59:59+00:00 should be 12:59 in Pacific/Auckland");

		test.done();
	}
};
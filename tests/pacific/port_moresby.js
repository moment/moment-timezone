var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Port_Moresby 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Port_Moresby").zone(), -600, "2013-01-01T00:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Port_Moresby").zone(), -600, "2013-12-31T23:59:59+00:00 should be -600 minutes offset");

		test.done();
	},

	"Pacific/Port_Moresby 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Port_Moresby").format("HH:mm"), "10:00", "2013-01-01T00:00:00+00:00 should be 10:00 in Pacific/Port_Moresby");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Port_Moresby").format("HH:mm"), "09:59", "2013-12-31T23:59:59+00:00 should be 09:59 in Pacific/Port_Moresby");

		test.done();
	}
};
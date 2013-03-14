var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Easter 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2013-01-01T00:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-04-28T02:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2013-04-28T02:59:59+00:00 should be 300 minutes offset");
		test.equal(moment("2013-04-28T03:00:00+00:00").tz("Pacific/Easter").zone(), 360, "2013-04-28T03:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-09-08T03:59:59+00:00").tz("Pacific/Easter").zone(), 360, "2013-09-08T03:59:59+00:00 should be 360 minutes offset");
		test.equal(moment("2013-09-08T04:00:00+00:00").tz("Pacific/Easter").zone(), 300, "2013-09-08T04:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Easter").zone(), 300, "2013-12-31T23:59:59+00:00 should be 300 minutes offset");

		test.done();
	},

	"Pacific/Easter 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Easter").format("HH:mm"), "19:00", "2013-01-01T00:00:00+00:00 should be 19:00 in Pacific/Easter");
		test.equal(moment("2013-04-28T02:59:59+00:00").tz("Pacific/Easter").format("HH:mm"), "21:59", "2013-04-28T02:59:59+00:00 should be 21:59 in Pacific/Easter");
		test.equal(moment("2013-04-28T03:00:00+00:00").tz("Pacific/Easter").format("HH:mm"), "21:00", "2013-04-28T03:00:00+00:00 should be 21:00 in Pacific/Easter");
		test.equal(moment("2013-09-08T03:59:59+00:00").tz("Pacific/Easter").format("HH:mm"), "21:59", "2013-09-08T03:59:59+00:00 should be 21:59 in Pacific/Easter");
		test.equal(moment("2013-09-08T04:00:00+00:00").tz("Pacific/Easter").format("HH:mm"), "23:00", "2013-09-08T04:00:00+00:00 should be 23:00 in Pacific/Easter");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Easter").format("HH:mm"), "18:59", "2013-12-31T23:59:59+00:00 should be 18:59 in Pacific/Easter");

		test.done();
	}
};
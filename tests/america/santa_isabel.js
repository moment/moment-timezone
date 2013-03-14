var moment = require("../../moment-timezone");

exports.rules = {
	"America/Santa_Isabel 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-01-01T00:00:00+00:00 should be 480 minutes offset");
		test.equal(moment("2013-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-04-07T09:59:59+00:00 should be 480 minutes offset");
		test.equal(moment("2013-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2013-04-07T10:00:00+00:00 should be 420 minutes offset");
		test.equal(moment("2013-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2013-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(moment("2013-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-10-27T09:00:00+00:00 should be 480 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-12-31T23:59:59+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Santa_Isabel 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm"), "16:00", "2013-01-01T00:00:00+00:00 should be 16:00 in America/Santa_Isabel");
		test.equal(moment("2013-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm"), "01:59", "2013-04-07T09:59:59+00:00 should be 01:59 in America/Santa_Isabel");
		test.equal(moment("2013-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm"), "03:00", "2013-04-07T10:00:00+00:00 should be 03:00 in America/Santa_Isabel");
		test.equal(moment("2013-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm"), "01:59", "2013-10-27T08:59:59+00:00 should be 01:59 in America/Santa_Isabel");
		test.equal(moment("2013-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm"), "01:00", "2013-10-27T09:00:00+00:00 should be 01:00 in America/Santa_Isabel");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm"), "15:59", "2013-12-31T23:59:59+00:00 should be 15:59 in America/Santa_Isabel");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/Casablanca 2013 offset" : function (test) {
		test.expect(10);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-04-28T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2013-04-28T01:59:59+00:00 should be 0 minutes offset");
		test.equal(moment("2013-04-28T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2013-04-28T02:00:00+00:00 should be -60 minutes offset");
		test.equal(moment("2013-07-09T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2013-07-09T01:59:59+00:00 should be -60 minutes offset");
		test.equal(moment("2013-07-09T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2013-07-09T02:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-08-08T01:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2013-08-08T01:59:59+00:00 should be 0 minutes offset");
		test.equal(moment("2013-08-08T02:00:00+00:00").tz("Africa/Casablanca").zone(), -60, "2013-08-08T02:00:00+00:00 should be -60 minutes offset");
		test.equal(moment("2013-09-29T01:59:59+00:00").tz("Africa/Casablanca").zone(), -60, "2013-09-29T01:59:59+00:00 should be -60 minutes offset");
		test.equal(moment("2013-09-29T02:00:00+00:00").tz("Africa/Casablanca").zone(), 0, "2013-09-29T02:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Casablanca").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Africa/Casablanca 2013 format" : function (test) {
		test.expect(10);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Casablanca").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Africa/Casablanca");
		test.equal(moment("2013-04-28T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm"), "01:59", "2013-04-28T01:59:59+00:00 should be 01:59 in Africa/Casablanca");
		test.equal(moment("2013-04-28T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm"), "03:00", "2013-04-28T02:00:00+00:00 should be 03:00 in Africa/Casablanca");
		test.equal(moment("2013-07-09T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm"), "02:59", "2013-07-09T01:59:59+00:00 should be 02:59 in Africa/Casablanca");
		test.equal(moment("2013-07-09T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm"), "02:00", "2013-07-09T02:00:00+00:00 should be 02:00 in Africa/Casablanca");
		test.equal(moment("2013-08-08T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm"), "01:59", "2013-08-08T01:59:59+00:00 should be 01:59 in Africa/Casablanca");
		test.equal(moment("2013-08-08T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm"), "03:00", "2013-08-08T02:00:00+00:00 should be 03:00 in Africa/Casablanca");
		test.equal(moment("2013-09-29T01:59:59+00:00").tz("Africa/Casablanca").format("HH:mm"), "02:59", "2013-09-29T01:59:59+00:00 should be 02:59 in Africa/Casablanca");
		test.equal(moment("2013-09-29T02:00:00+00:00").tz("Africa/Casablanca").format("HH:mm"), "02:00", "2013-09-29T02:00:00+00:00 should be 02:00 in Africa/Casablanca");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Casablanca").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Africa/Casablanca");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Antarctica/Palmer 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-04-28T02:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-04-28T02:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-04-28T03:00:00+00:00").tz("Antarctica/Palmer").zone(), 240, "2013-04-28T03:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-09-08T03:59:59+00:00").tz("Antarctica/Palmer").zone(), 240, "2013-09-08T03:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-09-08T04:00:00+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-09-08T04:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Palmer").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"Antarctica/Palmer 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in Antarctica/Palmer");
		test.equal(moment("2013-04-28T02:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm"), "23:59", "2013-04-28T02:59:59+00:00 should be 23:59 in Antarctica/Palmer");
		test.equal(moment("2013-04-28T03:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm"), "23:00", "2013-04-28T03:00:00+00:00 should be 23:00 in Antarctica/Palmer");
		test.equal(moment("2013-09-08T03:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm"), "23:59", "2013-09-08T03:59:59+00:00 should be 23:59 in Antarctica/Palmer");
		test.equal(moment("2013-09-08T04:00:00+00:00").tz("Antarctica/Palmer").format("HH:mm"), "01:00", "2013-09-08T04:00:00+00:00 should be 01:00 in Antarctica/Palmer");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Palmer").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in Antarctica/Palmer");

		test.done();
	}
};
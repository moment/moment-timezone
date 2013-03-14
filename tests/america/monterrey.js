var moment = require("../../moment-timezone");

exports.rules = {
	"America/Monterrey 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Monterrey").zone(), 360, "2013-01-01T00:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-04-07T07:59:59+00:00").tz("America/Monterrey").zone(), 360, "2013-04-07T07:59:59+00:00 should be 360 minutes offset");
		test.equal(moment("2013-04-07T08:00:00+00:00").tz("America/Monterrey").zone(), 300, "2013-04-07T08:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-10-27T06:59:59+00:00").tz("America/Monterrey").zone(), 300, "2013-10-27T06:59:59+00:00 should be 300 minutes offset");
		test.equal(moment("2013-10-27T07:00:00+00:00").tz("America/Monterrey").zone(), 360, "2013-10-27T07:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Monterrey").zone(), 360, "2013-12-31T23:59:59+00:00 should be 360 minutes offset");

		test.done();
	},

	"America/Monterrey 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Monterrey").format("HH:mm"), "18:00", "2013-01-01T00:00:00+00:00 should be 18:00 in America/Monterrey");
		test.equal(moment("2013-04-07T07:59:59+00:00").tz("America/Monterrey").format("HH:mm"), "01:59", "2013-04-07T07:59:59+00:00 should be 01:59 in America/Monterrey");
		test.equal(moment("2013-04-07T08:00:00+00:00").tz("America/Monterrey").format("HH:mm"), "03:00", "2013-04-07T08:00:00+00:00 should be 03:00 in America/Monterrey");
		test.equal(moment("2013-10-27T06:59:59+00:00").tz("America/Monterrey").format("HH:mm"), "01:59", "2013-10-27T06:59:59+00:00 should be 01:59 in America/Monterrey");
		test.equal(moment("2013-10-27T07:00:00+00:00").tz("America/Monterrey").format("HH:mm"), "01:00", "2013-10-27T07:00:00+00:00 should be 01:00 in America/Monterrey");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Monterrey").format("HH:mm"), "17:59", "2013-12-31T23:59:59+00:00 should be 17:59 in America/Monterrey");

		test.done();
	}
};
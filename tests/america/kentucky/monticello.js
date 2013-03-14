var moment = require("../../moment-timezone");

exports.rules = {
	"America/Kentucky/Monticello 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Kentucky/Monticello").zone(), 300, "2013-01-01T00:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Kentucky/Monticello").zone(), 300, "2013-03-10T06:59:59+00:00 should be 300 minutes offset");
		test.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Kentucky/Monticello").zone(), 240, "2013-03-10T07:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Kentucky/Monticello").zone(), 240, "2013-11-03T05:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Kentucky/Monticello").zone(), 300, "2013-11-03T06:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Kentucky/Monticello").zone(), 300, "2013-12-31T23:59:59+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/Kentucky/Monticello 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "19:00", "2013-01-01T00:00:00+00:00 should be 19:00 in America/Kentucky/Monticello");
		test.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "01:59", "2013-03-10T06:59:59+00:00 should be 01:59 in America/Kentucky/Monticello");
		test.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "03:00", "2013-03-10T07:00:00+00:00 should be 03:00 in America/Kentucky/Monticello");
		test.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "01:59", "2013-11-03T05:59:59+00:00 should be 01:59 in America/Kentucky/Monticello");
		test.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "01:00", "2013-11-03T06:00:00+00:00 should be 01:00 in America/Kentucky/Monticello");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Kentucky/Monticello").format("HH:mm"), "18:59", "2013-12-31T23:59:59+00:00 should be 18:59 in America/Kentucky/Monticello");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"America/Godthab 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Godthab").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("America/Godthab").zone(), 180, "2013-03-31T00:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("America/Godthab").zone(), 120, "2013-03-31T01:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("America/Godthab").zone(), 120, "2013-10-27T00:59:59+00:00 should be 120 minutes offset");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("America/Godthab").zone(), 180, "2013-10-27T01:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Godthab").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"America/Godthab 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Godthab").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in America/Godthab");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("America/Godthab").format("HH:mm"), "21:59", "2013-03-31T00:59:59+00:00 should be 21:59 in America/Godthab");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("America/Godthab").format("HH:mm"), "23:00", "2013-03-31T01:00:00+00:00 should be 23:00 in America/Godthab");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("America/Godthab").format("HH:mm"), "22:59", "2013-10-27T00:59:59+00:00 should be 22:59 in America/Godthab");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("America/Godthab").format("HH:mm"), "22:00", "2013-10-27T01:00:00+00:00 should be 22:00 in America/Godthab");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Godthab").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in America/Godthab");

		test.done();
	}
};
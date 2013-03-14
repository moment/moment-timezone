var moment = require("../../moment-timezone");

exports.rules = {
	"America/Scoresbysund 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Scoresbysund").zone(), 60, "2013-01-01T00:00:00+00:00 should be 60 minutes offset");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("America/Scoresbysund").zone(), 60, "2013-03-31T00:59:59+00:00 should be 60 minutes offset");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("America/Scoresbysund").zone(), 0, "2013-03-31T01:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("America/Scoresbysund").zone(), 0, "2013-10-27T00:59:59+00:00 should be 0 minutes offset");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("America/Scoresbysund").zone(), 60, "2013-10-27T01:00:00+00:00 should be 60 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Scoresbysund").zone(), 60, "2013-12-31T23:59:59+00:00 should be 60 minutes offset");

		test.done();
	},

	"America/Scoresbysund 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Scoresbysund").format("HH:mm"), "23:00", "2013-01-01T00:00:00+00:00 should be 23:00 in America/Scoresbysund");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("America/Scoresbysund").format("HH:mm"), "23:59", "2013-03-31T00:59:59+00:00 should be 23:59 in America/Scoresbysund");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("America/Scoresbysund").format("HH:mm"), "01:00", "2013-03-31T01:00:00+00:00 should be 01:00 in America/Scoresbysund");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("America/Scoresbysund").format("HH:mm"), "00:59", "2013-10-27T00:59:59+00:00 should be 00:59 in America/Scoresbysund");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("America/Scoresbysund").format("HH:mm"), "00:00", "2013-10-27T01:00:00+00:00 should be 00:00 in America/Scoresbysund");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Scoresbysund").format("HH:mm"), "22:59", "2013-12-31T23:59:59+00:00 should be 22:59 in America/Scoresbysund");

		test.done();
	}
};
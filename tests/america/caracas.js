var moment = require("../../moment-timezone");

exports.rules = {
	"America/Caracas 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Caracas").zone(), 270, "2013-01-01T00:00:00+00:00 should be 270 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Caracas").zone(), 270, "2013-12-31T23:59:59+00:00 should be 270 minutes offset");

		test.done();
	},

	"America/Caracas 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Caracas").format("HH:mm"), "19:30", "2013-01-01T00:00:00+00:00 should be 19:30 in America/Caracas");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Caracas").format("HH:mm"), "19:29", "2013-12-31T23:59:59+00:00 should be 19:29 in America/Caracas");

		test.done();
	}
};
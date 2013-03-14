var moment = require("../../moment-timezone");

exports.rules = {
	"America/Noronha 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Noronha").zone(), 120, "2013-01-01T00:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Noronha").zone(), 120, "2013-12-31T23:59:59+00:00 should be 120 minutes offset");

		test.done();
	},

	"America/Noronha 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Noronha").format("HH:mm"), "22:00", "2013-01-01T00:00:00+00:00 should be 22:00 in America/Noronha");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Noronha").format("HH:mm"), "21:59", "2013-12-31T23:59:59+00:00 should be 21:59 in America/Noronha");

		test.done();
	}
};
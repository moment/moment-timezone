var moment = require("../../moment-timezone");

exports.rules = {
	"America/Argentina/Salta 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Argentina/Salta").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Argentina/Salta").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"America/Argentina/Salta 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Argentina/Salta").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in America/Argentina/Salta");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Argentina/Salta").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in America/Argentina/Salta");

		test.done();
	}
};
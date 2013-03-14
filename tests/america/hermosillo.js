var moment = require("../../moment-timezone");

exports.rules = {
	"America/Hermosillo 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Hermosillo").zone(), 420, "2013-01-01T00:00:00+00:00 should be 420 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Hermosillo").zone(), 420, "2013-12-31T23:59:59+00:00 should be 420 minutes offset");

		test.done();
	},

	"America/Hermosillo 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Hermosillo").format("HH:mm"), "17:00", "2013-01-01T00:00:00+00:00 should be 17:00 in America/Hermosillo");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Hermosillo").format("HH:mm"), "16:59", "2013-12-31T23:59:59+00:00 should be 16:59 in America/Hermosillo");

		test.done();
	}
};
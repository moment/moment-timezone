var moment = require("../../moment-timezone");

exports.rules = {
	"America/Costa_Rica 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Costa_Rica").zone(), 360, "2013-01-01T00:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Costa_Rica").zone(), 360, "2013-12-31T23:59:59+00:00 should be 360 minutes offset");

		test.done();
	},

	"America/Costa_Rica 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Costa_Rica").format("HH:mm"), "18:00", "2013-01-01T00:00:00+00:00 should be 18:00 in America/Costa_Rica");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Costa_Rica").format("HH:mm"), "17:59", "2013-12-31T23:59:59+00:00 should be 17:59 in America/Costa_Rica");

		test.done();
	}
};
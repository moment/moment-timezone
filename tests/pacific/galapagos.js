var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Galapagos 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Galapagos").zone(), 360, "2013-01-01T00:00:00+00:00 should be 360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Galapagos").zone(), 360, "2013-12-31T23:59:59+00:00 should be 360 minutes offset");

		test.done();
	},

	"Pacific/Galapagos 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Galapagos").format("HH:mm"), "18:00", "2013-01-01T00:00:00+00:00 should be 18:00 in Pacific/Galapagos");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Galapagos").format("HH:mm"), "17:59", "2013-12-31T23:59:59+00:00 should be 17:59 in Pacific/Galapagos");

		test.done();
	}
};
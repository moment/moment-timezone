var moment = require("../../moment-timezone");

exports.rules = {
	"Indian/Chagos 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Chagos").zone(), -360, "2013-01-01T00:00:00+00:00 should be -360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Chagos").zone(), -360, "2013-12-31T23:59:59+00:00 should be -360 minutes offset");

		test.done();
	},

	"Indian/Chagos 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Chagos").format("HH:mm"), "06:00", "2013-01-01T00:00:00+00:00 should be 06:00 in Indian/Chagos");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Chagos").format("HH:mm"), "05:59", "2013-12-31T23:59:59+00:00 should be 05:59 in Indian/Chagos");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Europe/Volgograd 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Volgograd").zone(), -240, "2013-01-01T00:00:00+00:00 should be -240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Volgograd").zone(), -240, "2013-12-31T23:59:59+00:00 should be -240 minutes offset");

		test.done();
	},

	"Europe/Volgograd 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Volgograd").format("HH:mm"), "04:00", "2013-01-01T00:00:00+00:00 should be 04:00 in Europe/Volgograd");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Volgograd").format("HH:mm"), "03:59", "2013-12-31T23:59:59+00:00 should be 03:59 in Europe/Volgograd");

		test.done();
	}
};
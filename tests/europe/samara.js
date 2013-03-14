var moment = require("../../moment-timezone");

exports.rules = {
	"Europe/Samara 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Samara").zone(), -240, "2013-01-01T00:00:00+00:00 should be -240 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Samara").zone(), -240, "2013-12-31T23:59:59+00:00 should be -240 minutes offset");

		test.done();
	},

	"Europe/Samara 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Samara").format("HH:mm"), "04:00", "2013-01-01T00:00:00+00:00 should be 04:00 in Europe/Samara");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Samara").format("HH:mm"), "03:59", "2013-12-31T23:59:59+00:00 should be 03:59 in Europe/Samara");

		test.done();
	}
};
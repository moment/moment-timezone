var moment = require("../../moment-timezone");

exports.rules = {
	"Antarctica/Vostok 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Vostok").zone(), -360, "2013-01-01T00:00:00+00:00 should be -360 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Vostok").zone(), -360, "2013-12-31T23:59:59+00:00 should be -360 minutes offset");

		test.done();
	},

	"Antarctica/Vostok 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/Vostok").format("HH:mm"), "06:00", "2013-01-01T00:00:00+00:00 should be 06:00 in Antarctica/Vostok");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/Vostok").format("HH:mm"), "05:59", "2013-12-31T23:59:59+00:00 should be 05:59 in Antarctica/Vostok");

		test.done();
	}
};
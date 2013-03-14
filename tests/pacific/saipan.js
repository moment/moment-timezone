var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Saipan 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Saipan").zone(), -600, "2013-01-01T00:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Saipan").zone(), -600, "2013-12-31T23:59:59+00:00 should be -600 minutes offset");

		test.done();
	},

	"Pacific/Saipan 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Saipan").format("HH:mm"), "10:00", "2013-01-01T00:00:00+00:00 should be 10:00 in Pacific/Saipan");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Saipan").format("HH:mm"), "09:59", "2013-12-31T23:59:59+00:00 should be 09:59 in Pacific/Saipan");

		test.done();
	}
};
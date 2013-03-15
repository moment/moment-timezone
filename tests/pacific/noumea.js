var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Noumea 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Noumea").zone(), -660, "2013-01-01T00:00:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Noumea").zone(), -660, "2013-12-31T23:59:59+00:00 should be -660 minutes offset");

		test.done();
	},

	"Pacific/Noumea 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Noumea").format("HH:mm"), "11:00", "2013-01-01T00:00:00+00:00 should be 11:00 in Pacific/Noumea");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Noumea").format("HH:mm"), "10:59", "2013-12-31T23:59:59+00:00 should be 10:59 in Pacific/Noumea");

		test.done();
	}
};
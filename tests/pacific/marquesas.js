var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Marquesas 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Marquesas").zone(), 570, "2013-01-01T00:00:00+00:00 should be 570 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Marquesas").zone(), 570, "2013-12-31T23:59:59+00:00 should be 570 minutes offset");

		test.done();
	},

	"Pacific/Marquesas 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Marquesas").format("HH:mm"), "14:30", "2013-01-01T00:00:00+00:00 should be 14:30 in Pacific/Marquesas");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Marquesas").format("HH:mm"), "14:29", "2013-12-31T23:59:59+00:00 should be 14:29 in Pacific/Marquesas");

		test.done();
	}
};
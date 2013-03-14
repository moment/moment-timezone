var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Pitcairn 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Pitcairn").zone(), 480, "2013-01-01T00:00:00+00:00 should be 480 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Pitcairn").zone(), 480, "2013-12-31T23:59:59+00:00 should be 480 minutes offset");

		test.done();
	},

	"Pacific/Pitcairn 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Pitcairn").format("HH:mm"), "16:00", "2013-01-01T00:00:00+00:00 should be 16:00 in Pacific/Pitcairn");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Pitcairn").format("HH:mm"), "15:59", "2013-12-31T23:59:59+00:00 should be 15:59 in Pacific/Pitcairn");

		test.done();
	}
};
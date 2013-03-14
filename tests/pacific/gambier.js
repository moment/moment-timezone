var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Gambier 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Gambier").zone(), 540, "2013-01-01T00:00:00+00:00 should be 540 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Gambier").zone(), 540, "2013-12-31T23:59:59+00:00 should be 540 minutes offset");

		test.done();
	},

	"Pacific/Gambier 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Gambier").format("HH:mm"), "15:00", "2013-01-01T00:00:00+00:00 should be 15:00 in Pacific/Gambier");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Gambier").format("HH:mm"), "14:59", "2013-12-31T23:59:59+00:00 should be 14:59 in Pacific/Gambier");

		test.done();
	}
};
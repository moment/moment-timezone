var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/Nouakchott 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Nouakchott").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Nouakchott").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Africa/Nouakchott 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/Nouakchott").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Africa/Nouakchott");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/Nouakchott").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Africa/Nouakchott");

		test.done();
	}
};
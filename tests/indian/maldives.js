var moment = require("../../moment-timezone");

exports.rules = {
	"Indian/Maldives 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Maldives").zone(), -300, "2013-01-01T00:00:00+00:00 should be -300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Maldives").zone(), -300, "2013-12-31T23:59:59+00:00 should be -300 minutes offset");

		test.done();
	},

	"Indian/Maldives 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Maldives").format("HH:mm"), "05:00", "2013-01-01T00:00:00+00:00 should be 05:00 in Indian/Maldives");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Maldives").format("HH:mm"), "04:59", "2013-12-31T23:59:59+00:00 should be 04:59 in Indian/Maldives");

		test.done();
	}
};
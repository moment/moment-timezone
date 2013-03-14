var moment = require("../../moment-timezone");

exports.rules = {
	"Indian/Cocos 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Cocos").zone(), -390, "2013-01-01T00:00:00+00:00 should be -390 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Cocos").zone(), -390, "2013-12-31T23:59:59+00:00 should be -390 minutes offset");

		test.done();
	},

	"Indian/Cocos 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Indian/Cocos").format("HH:mm"), "06:30", "2013-01-01T00:00:00+00:00 should be 06:30 in Indian/Cocos");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Indian/Cocos").format("HH:mm"), "06:29", "2013-12-31T23:59:59+00:00 should be 06:29 in Indian/Cocos");

		test.done();
	}
};
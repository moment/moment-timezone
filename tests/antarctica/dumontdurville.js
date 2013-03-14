var moment = require("../../moment-timezone");

exports.rules = {
	"Antarctica/DumontDUrville 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").zone(), -600, "2013-01-01T00:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").zone(), -600, "2013-12-31T23:59:59+00:00 should be -600 minutes offset");

		test.done();
	},

	"Antarctica/DumontDUrville 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Antarctica/DumontDUrville").format("HH:mm"), "10:00", "2013-01-01T00:00:00+00:00 should be 10:00 in Antarctica/DumontDUrville");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Antarctica/DumontDUrville").format("HH:mm"), "09:59", "2013-12-31T23:59:59+00:00 should be 09:59 in Antarctica/DumontDUrville");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Chatham 2013 offset" : function (test) {
		// test.expect(6);

		// test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2013-01-01T00:00:00+00:00 should be -825 minutes offset");
		// test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2013-04-06T13:59:59+00:00 should be -825 minutes offset");
		// test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Chatham").zone(), -765, "2013-04-06T14:00:00+00:00 should be -765 minutes offset");
		// test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Chatham").zone(), -765, "2013-09-28T13:59:59+00:00 should be -765 minutes offset");
		// test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Chatham").zone(), -825, "2013-09-28T14:00:00+00:00 should be -825 minutes offset");
		// test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Chatham").zone(), -825, "2013-12-31T23:59:59+00:00 should be -825 minutes offset");

		test.done();
	},

	"Pacific/Chatham 2013 format" : function (test) {
		test.expect(3);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Chatham").format("HH:mm"), "13:45", "2013-01-01T00:00:00+00:00 should be 13:45 in Pacific/Chatham");
		test.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm"), "03:44", "2013-04-06T13:59:59+00:00 should be 03:44 in Pacific/Chatham");
		test.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm"), "02:45", "2013-04-06T14:00:00+00:00 should be 02:45 in Pacific/Chatham");
		// test.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Chatham").format("HH:mm"), "02:44", "2013-09-28T13:59:59+00:00 should be 02:44 in Pacific/Chatham");
		// test.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Chatham").format("HH:mm"), "03:45", "2013-09-28T14:00:00+00:00 should be 03:45 in Pacific/Chatham");
		// test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Chatham").format("HH:mm"), "13:44", "2013-12-31T23:59:59+00:00 should be 13:44 in Pacific/Chatham");

		test.done();
	}
};
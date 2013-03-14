var moment = require("../../moment-timezone");

exports.rules = {
	"America/Havana 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Havana").zone(), 300, "2013-01-01T00:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Havana").zone(), 300, "2013-03-10T04:59:59+00:00 should be 300 minutes offset");
		test.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Havana").zone(), 240, "2013-03-10T05:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Havana").zone(), 240, "2013-11-03T04:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Havana").zone(), 300, "2013-11-03T05:00:00+00:00 should be 300 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Havana").zone(), 300, "2013-12-31T23:59:59+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/Havana 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Havana").format("HH:mm"), "19:00", "2013-01-01T00:00:00+00:00 should be 19:00 in America/Havana");
		test.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Havana").format("HH:mm"), "23:59", "2013-03-10T04:59:59+00:00 should be 23:59 in America/Havana");
		test.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Havana").format("HH:mm"), "01:00", "2013-03-10T05:00:00+00:00 should be 01:00 in America/Havana");
		test.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Havana").format("HH:mm"), "00:59", "2013-11-03T04:59:59+00:00 should be 00:59 in America/Havana");
		test.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Havana").format("HH:mm"), "00:00", "2013-11-03T05:00:00+00:00 should be 00:00 in America/Havana");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Havana").format("HH:mm"), "18:59", "2013-12-31T23:59:59+00:00 should be 18:59 in America/Havana");

		test.done();
	}
};
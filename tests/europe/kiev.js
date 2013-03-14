var moment = require("../../moment-timezone");

exports.rules = {
	"Europe/Kiev 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Kiev").zone(), -120, "2013-01-01T00:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Kiev").zone(), -120, "2013-03-31T00:59:59+00:00 should be -120 minutes offset");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Kiev").zone(), -180, "2013-03-31T01:00:00+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Kiev").zone(), -180, "2013-10-27T00:59:59+00:00 should be -180 minutes offset");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Kiev").zone(), -120, "2013-10-27T01:00:00+00:00 should be -120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Kiev").zone(), -120, "2013-12-31T23:59:59+00:00 should be -120 minutes offset");

		test.done();
	},

	"Europe/Kiev 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Europe/Kiev").format("HH:mm"), "02:00", "2013-01-01T00:00:00+00:00 should be 02:00 in Europe/Kiev");
		test.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Kiev").format("HH:mm"), "02:59", "2013-03-31T00:59:59+00:00 should be 02:59 in Europe/Kiev");
		test.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Kiev").format("HH:mm"), "04:00", "2013-03-31T01:00:00+00:00 should be 04:00 in Europe/Kiev");
		test.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Kiev").format("HH:mm"), "03:59", "2013-10-27T00:59:59+00:00 should be 03:59 in Europe/Kiev");
		test.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Kiev").format("HH:mm"), "03:00", "2013-10-27T01:00:00+00:00 should be 03:00 in Europe/Kiev");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Europe/Kiev").format("HH:mm"), "01:59", "2013-12-31T23:59:59+00:00 should be 01:59 in Europe/Kiev");

		test.done();
	}
};
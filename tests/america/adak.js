var moment = require("../../moment-timezone");

exports.rules = {
	"America/Adak 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Adak").zone(), 600, "2013-01-01T00:00:00+00:00 should be 600 minutes offset");
		test.equal(moment("2013-03-10T11:59:59+00:00").tz("America/Adak").zone(), 600, "2013-03-10T11:59:59+00:00 should be 600 minutes offset");
		test.equal(moment("2013-03-10T12:00:00+00:00").tz("America/Adak").zone(), 540, "2013-03-10T12:00:00+00:00 should be 540 minutes offset");
		test.equal(moment("2013-11-03T10:59:59+00:00").tz("America/Adak").zone(), 540, "2013-11-03T10:59:59+00:00 should be 540 minutes offset");
		test.equal(moment("2013-11-03T11:00:00+00:00").tz("America/Adak").zone(), 600, "2013-11-03T11:00:00+00:00 should be 600 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Adak").zone(), 600, "2013-12-31T23:59:59+00:00 should be 600 minutes offset");

		test.done();
	},

	"America/Adak 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Adak").format("HH:mm"), "14:00", "2013-01-01T00:00:00+00:00 should be 14:00 in America/Adak");
		test.equal(moment("2013-03-10T11:59:59+00:00").tz("America/Adak").format("HH:mm"), "01:59", "2013-03-10T11:59:59+00:00 should be 01:59 in America/Adak");
		test.equal(moment("2013-03-10T12:00:00+00:00").tz("America/Adak").format("HH:mm"), "03:00", "2013-03-10T12:00:00+00:00 should be 03:00 in America/Adak");
		test.equal(moment("2013-11-03T10:59:59+00:00").tz("America/Adak").format("HH:mm"), "01:59", "2013-11-03T10:59:59+00:00 should be 01:59 in America/Adak");
		test.equal(moment("2013-11-03T11:00:00+00:00").tz("America/Adak").format("HH:mm"), "01:00", "2013-11-03T11:00:00+00:00 should be 01:00 in America/Adak");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Adak").format("HH:mm"), "13:59", "2013-12-31T23:59:59+00:00 should be 13:59 in America/Adak");

		test.done();
	}
};
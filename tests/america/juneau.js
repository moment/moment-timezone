var moment = require("../../moment-timezone");

exports.rules = {
	"America/Juneau 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Juneau").zone(), 540, "2013-01-01T00:00:00+00:00 should be 540 minutes offset");
		test.equal(moment("2013-03-10T10:59:59+00:00").tz("America/Juneau").zone(), 540, "2013-03-10T10:59:59+00:00 should be 540 minutes offset");
		test.equal(moment("2013-03-10T11:00:00+00:00").tz("America/Juneau").zone(), 480, "2013-03-10T11:00:00+00:00 should be 480 minutes offset");
		test.equal(moment("2013-11-03T09:59:59+00:00").tz("America/Juneau").zone(), 480, "2013-11-03T09:59:59+00:00 should be 480 minutes offset");
		test.equal(moment("2013-11-03T10:00:00+00:00").tz("America/Juneau").zone(), 540, "2013-11-03T10:00:00+00:00 should be 540 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Juneau").zone(), 540, "2013-12-31T23:59:59+00:00 should be 540 minutes offset");

		test.done();
	},

	"America/Juneau 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Juneau").format("HH:mm"), "15:00", "2013-01-01T00:00:00+00:00 should be 15:00 in America/Juneau");
		test.equal(moment("2013-03-10T10:59:59+00:00").tz("America/Juneau").format("HH:mm"), "01:59", "2013-03-10T10:59:59+00:00 should be 01:59 in America/Juneau");
		test.equal(moment("2013-03-10T11:00:00+00:00").tz("America/Juneau").format("HH:mm"), "03:00", "2013-03-10T11:00:00+00:00 should be 03:00 in America/Juneau");
		test.equal(moment("2013-11-03T09:59:59+00:00").tz("America/Juneau").format("HH:mm"), "01:59", "2013-11-03T09:59:59+00:00 should be 01:59 in America/Juneau");
		test.equal(moment("2013-11-03T10:00:00+00:00").tz("America/Juneau").format("HH:mm"), "01:00", "2013-11-03T10:00:00+00:00 should be 01:00 in America/Juneau");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Juneau").format("HH:mm"), "14:59", "2013-12-31T23:59:59+00:00 should be 14:59 in America/Juneau");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"America/St_Johns 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/St_Johns").zone(), 210, "2013-01-01T00:00:00+00:00 should be 210 minutes offset");
		test.equal(moment("2013-03-10T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2013-03-10T05:29:59+00:00 should be 210 minutes offset");
		test.equal(moment("2013-03-10T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2013-03-10T05:30:00+00:00 should be 150 minutes offset");
		test.equal(moment("2013-11-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2013-11-03T04:29:59+00:00 should be 150 minutes offset");
		test.equal(moment("2013-11-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2013-11-03T04:30:00+00:00 should be 210 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/St_Johns").zone(), 210, "2013-12-31T23:59:59+00:00 should be 210 minutes offset");

		test.done();
	},

	"America/St_Johns 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/St_Johns").format("HH:mm"), "20:30", "2013-01-01T00:00:00+00:00 should be 20:30 in America/St_Johns");
		test.equal(moment("2013-03-10T05:29:59+00:00").tz("America/St_Johns").format("HH:mm"), "01:59", "2013-03-10T05:29:59+00:00 should be 01:59 in America/St_Johns");
		test.equal(moment("2013-03-10T05:30:00+00:00").tz("America/St_Johns").format("HH:mm"), "03:00", "2013-03-10T05:30:00+00:00 should be 03:00 in America/St_Johns");
		test.equal(moment("2013-11-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm"), "01:59", "2013-11-03T04:29:59+00:00 should be 01:59 in America/St_Johns");
		test.equal(moment("2013-11-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm"), "01:00", "2013-11-03T04:30:00+00:00 should be 01:00 in America/St_Johns");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/St_Johns").format("HH:mm"), "20:29", "2013-12-31T23:59:59+00:00 should be 20:29 in America/St_Johns");

		test.done();
	}
};
var moment = require("../../moment-timezone");

exports.rules = {
	"America/Cuiaba 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2013-01-01T00:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2013-02-17T02:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2013-02-17T03:00:00+00:00 should be 240 minutes offset");
		test.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2013-10-20T03:59:59+00:00 should be 240 minutes offset");
		test.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2013-10-20T04:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2013-12-31T23:59:59+00:00 should be 180 minutes offset");

		test.done();
	},

	"America/Cuiaba 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Cuiaba").format("HH:mm"), "21:00", "2013-01-01T00:00:00+00:00 should be 21:00 in America/Cuiaba");
		test.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm"), "23:59", "2013-02-17T02:59:59+00:00 should be 23:59 in America/Cuiaba");
		test.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm"), "23:00", "2013-02-17T03:00:00+00:00 should be 23:00 in America/Cuiaba");
		test.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm"), "23:59", "2013-10-20T03:59:59+00:00 should be 23:59 in America/Cuiaba");
		test.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm"), "01:00", "2013-10-20T04:00:00+00:00 should be 01:00 in America/Cuiaba");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Cuiaba").format("HH:mm"), "20:59", "2013-12-31T23:59:59+00:00 should be 20:59 in America/Cuiaba");

		test.done();
	}
};
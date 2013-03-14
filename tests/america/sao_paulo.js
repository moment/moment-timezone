var moment = require("../../moment-timezone");

exports.rules = {
	"America/Sao_Paulo 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Sao_Paulo").zone(), 120, "2013-01-01T00:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-02-17T01:59:59+00:00").tz("America/Sao_Paulo").zone(), 120, "2013-02-17T01:59:59+00:00 should be 120 minutes offset");
		test.equal(moment("2013-02-17T02:00:00+00:00").tz("America/Sao_Paulo").zone(), 180, "2013-02-17T02:00:00+00:00 should be 180 minutes offset");
		test.equal(moment("2013-10-20T02:59:59+00:00").tz("America/Sao_Paulo").zone(), 180, "2013-10-20T02:59:59+00:00 should be 180 minutes offset");
		test.equal(moment("2013-10-20T03:00:00+00:00").tz("America/Sao_Paulo").zone(), 120, "2013-10-20T03:00:00+00:00 should be 120 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Sao_Paulo").zone(), 120, "2013-12-31T23:59:59+00:00 should be 120 minutes offset");

		test.done();
	},

	"America/Sao_Paulo 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("America/Sao_Paulo").format("HH:mm"), "22:00", "2013-01-01T00:00:00+00:00 should be 22:00 in America/Sao_Paulo");
		test.equal(moment("2013-02-17T01:59:59+00:00").tz("America/Sao_Paulo").format("HH:mm"), "23:59", "2013-02-17T01:59:59+00:00 should be 23:59 in America/Sao_Paulo");
		test.equal(moment("2013-02-17T02:00:00+00:00").tz("America/Sao_Paulo").format("HH:mm"), "23:00", "2013-02-17T02:00:00+00:00 should be 23:00 in America/Sao_Paulo");
		test.equal(moment("2013-10-20T02:59:59+00:00").tz("America/Sao_Paulo").format("HH:mm"), "23:59", "2013-10-20T02:59:59+00:00 should be 23:59 in America/Sao_Paulo");
		test.equal(moment("2013-10-20T03:00:00+00:00").tz("America/Sao_Paulo").format("HH:mm"), "01:00", "2013-10-20T03:00:00+00:00 should be 01:00 in America/Sao_Paulo");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("America/Sao_Paulo").format("HH:mm"), "21:59", "2013-12-31T23:59:59+00:00 should be 21:59 in America/Sao_Paulo");

		test.done();
	}
};
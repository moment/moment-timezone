var moment = require("../../moment-timezone");

exports.rules = {
	"Africa/El_Aaiun 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/El_Aaiun").zone(), 0, "2013-01-01T00:00:00+00:00 should be 0 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/El_Aaiun").zone(), 0, "2013-12-31T23:59:59+00:00 should be 0 minutes offset");

		test.done();
	},

	"Africa/El_Aaiun 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Africa/El_Aaiun").format("HH:mm"), "00:00", "2013-01-01T00:00:00+00:00 should be 00:00 in Africa/El_Aaiun");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Africa/El_Aaiun").format("HH:mm"), "23:59", "2013-12-31T23:59:59+00:00 should be 23:59 in Africa/El_Aaiun");

		test.done();
	}
};
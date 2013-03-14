var moment = require("../../moment-timezone");

exports.rules = {
	"Australia/Lord_Howe 2013 offset" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-01-01T00:00:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-04-06T14:59:59+00:00 should be -660 minutes offset");
		test.equal(moment("2013-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").zone(), -600, "2013-04-06T15:00:00+00:00 should be -600 minutes offset");
		test.equal(moment("2013-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").zone(), -600, "2013-10-05T15:29:59+00:00 should be -600 minutes offset");
		test.equal(moment("2013-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-10-05T15:30:00+00:00 should be -660 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Lord_Howe").zone(), -660, "2013-12-31T23:59:59+00:00 should be -660 minutes offset");

		test.done();
	},

	"Australia/Lord_Howe 2013 format" : function (test) {
		test.expect(6);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "11:00", "2013-01-01T00:00:00+00:00 should be 11:00 in Australia/Lord_Howe");
		test.equal(moment("2013-04-06T14:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "01:59", "2013-04-06T14:59:59+00:00 should be 01:59 in Australia/Lord_Howe");
		test.equal(moment("2013-04-06T15:00:00+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "01:00", "2013-04-06T15:00:00+00:00 should be 01:00 in Australia/Lord_Howe");
		test.equal(moment("2013-10-05T15:29:59+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "01:29", "2013-10-05T15:29:59+00:00 should be 01:29 in Australia/Lord_Howe");
		test.equal(moment("2013-10-05T15:30:00+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "02:30", "2013-10-05T15:30:00+00:00 should be 02:30 in Australia/Lord_Howe");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Australia/Lord_Howe").format("HH:mm"), "10:59", "2013-12-31T23:59:59+00:00 should be 10:59 in Australia/Lord_Howe");

		test.done();
	}
};
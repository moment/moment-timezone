var TZ = require("../../moment-timezone"),
	moment = require("moment");

exports.rules = {
	"America/Los_Angeles 1970" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1970-01-01T07:59:59+00:00")), 480, "1970-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1970-01-01T08:00:00+00:00")), 480, "1970-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1970-04-26T09:59:59+00:00")), 480, "1970-04-26T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1970-04-26T10:00:00+00:00")), 420, "1970-04-26T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1970-10-25T08:59:59+00:00")), 420, "1970-10-25T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1970-10-25T09:00:00+00:00")), 480, "1970-10-25T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1970 format" : function (test) {
		test.expect(6);

		test.equal(moment("1970-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1970-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1970-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1970-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1970-04-26T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1970-04-26T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1970-04-26T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1970-04-26T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1970-10-25T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1970-10-25T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1970-10-25T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1970-10-25T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1971" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1971-01-01T07:59:59+00:00")), 480, "1971-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1971-01-01T08:00:00+00:00")), 480, "1971-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1971-04-25T09:59:59+00:00")), 480, "1971-04-25T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1971-04-25T10:00:00+00:00")), 420, "1971-04-25T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1971-10-31T08:59:59+00:00")), 420, "1971-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1971-10-31T09:00:00+00:00")), 480, "1971-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1971 format" : function (test) {
		test.expect(6);

		test.equal(moment("1971-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1971-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1971-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1971-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1971-04-25T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1971-04-25T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1971-04-25T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1971-04-25T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1971-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1971-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1971-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1971-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1972" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1972-01-01T07:59:59+00:00")), 480, "1972-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1972-01-01T08:00:00+00:00")), 480, "1972-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1972-04-30T09:59:59+00:00")), 480, "1972-04-30T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1972-04-30T10:00:00+00:00")), 420, "1972-04-30T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1972-10-29T08:59:59+00:00")), 420, "1972-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1972-10-29T09:00:00+00:00")), 480, "1972-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1972 format" : function (test) {
		test.expect(6);

		test.equal(moment("1972-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1972-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1972-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1972-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1972-04-30T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1972-04-30T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1972-04-30T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1972-04-30T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1972-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1972-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1972-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1972-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1973" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1973-01-01T07:59:59+00:00")), 480, "1973-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1973-01-01T08:00:00+00:00")), 480, "1973-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1973-04-29T09:59:59+00:00")), 480, "1973-04-29T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1973-04-29T10:00:00+00:00")), 420, "1973-04-29T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1973-10-28T08:59:59+00:00")), 420, "1973-10-28T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1973-10-28T09:00:00+00:00")), 480, "1973-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1973 format" : function (test) {
		test.expect(6);

		test.equal(moment("1973-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1973-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1973-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1973-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1973-04-29T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1973-04-29T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1973-04-29T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1973-04-29T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1973-10-28T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1973-10-28T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1973-10-28T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1973-10-28T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1974" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1974-01-01T07:59:59+00:00")), 480, "1974-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1974-01-01T08:00:00+00:00")), 480, "1974-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T09:59:59+00:00")), 480, "1974-01-06T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T10:00:00+00:00")), 420, "1974-01-06T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1974-10-27T08:59:59+00:00")), 420, "1974-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1974-10-27T09:00:00+00:00")), 480, "1974-10-27T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1974 format" : function (test) {
		test.expect(6);

		test.equal(moment("1974-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1974-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1974-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1974-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1974-01-06T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1974-01-06T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1974-01-06T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1974-01-06T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1974-10-27T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1974-10-27T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1974-10-27T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1974-10-27T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1975" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1975-01-01T07:59:59+00:00")), 480, "1975-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1975-01-01T08:00:00+00:00")), 480, "1975-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1975-02-23T09:59:59+00:00")), 480, "1975-02-23T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1975-02-23T10:00:00+00:00")), 420, "1975-02-23T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1975-10-26T08:59:59+00:00")), 420, "1975-10-26T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1975-10-26T09:00:00+00:00")), 480, "1975-10-26T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1975 format" : function (test) {
		test.expect(6);

		test.equal(moment("1975-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1975-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1975-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1975-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1975-02-23T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1975-02-23T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1975-02-23T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1975-02-23T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1975-10-26T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1975-10-26T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1975-10-26T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1975-10-26T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1976" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1976-01-01T07:59:59+00:00")), 480, "1976-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1976-01-01T08:00:00+00:00")), 480, "1976-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1976-04-25T09:59:59+00:00")), 480, "1976-04-25T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1976-04-25T10:00:00+00:00")), 420, "1976-04-25T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1976-10-31T08:59:59+00:00")), 420, "1976-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1976-10-31T09:00:00+00:00")), 480, "1976-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1976 format" : function (test) {
		test.expect(6);

		test.equal(moment("1976-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1976-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1976-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1976-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1976-04-25T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1976-04-25T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1976-04-25T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1976-04-25T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1976-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1976-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1976-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1976-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1977" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1977-01-01T07:59:59+00:00")), 480, "1977-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1977-01-01T08:00:00+00:00")), 480, "1977-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1977-04-24T09:59:59+00:00")), 480, "1977-04-24T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1977-04-24T10:00:00+00:00")), 420, "1977-04-24T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1977-10-30T08:59:59+00:00")), 420, "1977-10-30T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1977-10-30T09:00:00+00:00")), 480, "1977-10-30T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1977 format" : function (test) {
		test.expect(6);

		test.equal(moment("1977-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1977-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1977-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1977-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1977-04-24T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1977-04-24T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1977-04-24T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1977-04-24T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1977-10-30T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1977-10-30T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1977-10-30T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1977-10-30T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1978" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1978-01-01T07:59:59+00:00")), 480, "1978-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1978-01-01T08:00:00+00:00")), 480, "1978-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1978-04-30T09:59:59+00:00")), 480, "1978-04-30T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1978-04-30T10:00:00+00:00")), 420, "1978-04-30T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1978-10-29T08:59:59+00:00")), 420, "1978-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1978-10-29T09:00:00+00:00")), 480, "1978-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1978 format" : function (test) {
		test.expect(6);

		test.equal(moment("1978-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1978-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1978-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1978-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1978-04-30T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1978-04-30T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1978-04-30T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1978-04-30T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1978-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1978-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1978-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1978-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1979" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1979-01-01T07:59:59+00:00")), 480, "1979-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1979-01-01T08:00:00+00:00")), 480, "1979-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1979-04-29T09:59:59+00:00")), 480, "1979-04-29T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1979-04-29T10:00:00+00:00")), 420, "1979-04-29T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1979-10-28T08:59:59+00:00")), 420, "1979-10-28T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1979-10-28T09:00:00+00:00")), 480, "1979-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1979 format" : function (test) {
		test.expect(6);

		test.equal(moment("1979-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1979-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1979-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1979-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1979-04-29T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1979-04-29T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1979-04-29T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1979-04-29T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1979-10-28T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1979-10-28T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1979-10-28T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1979-10-28T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1980" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1980-01-01T07:59:59+00:00")), 480, "1980-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1980-01-01T08:00:00+00:00")), 480, "1980-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1980-04-27T09:59:59+00:00")), 480, "1980-04-27T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1980-04-27T10:00:00+00:00")), 420, "1980-04-27T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1980-10-26T08:59:59+00:00")), 420, "1980-10-26T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1980-10-26T09:00:00+00:00")), 480, "1980-10-26T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1980 format" : function (test) {
		test.expect(6);

		test.equal(moment("1980-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1980-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1980-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1980-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1980-04-27T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1980-04-27T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1980-04-27T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1980-04-27T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1980-10-26T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1980-10-26T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1980-10-26T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1980-10-26T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1981" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1981-01-01T07:59:59+00:00")), 480, "1981-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1981-01-01T08:00:00+00:00")), 480, "1981-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1981-04-26T09:59:59+00:00")), 480, "1981-04-26T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1981-04-26T10:00:00+00:00")), 420, "1981-04-26T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1981-10-25T08:59:59+00:00")), 420, "1981-10-25T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1981-10-25T09:00:00+00:00")), 480, "1981-10-25T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1981 format" : function (test) {
		test.expect(6);

		test.equal(moment("1981-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1981-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1981-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1981-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1981-04-26T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1981-04-26T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1981-04-26T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1981-04-26T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1981-10-25T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1981-10-25T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1981-10-25T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1981-10-25T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1982" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1982-01-01T07:59:59+00:00")), 480, "1982-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1982-01-01T08:00:00+00:00")), 480, "1982-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1982-04-25T09:59:59+00:00")), 480, "1982-04-25T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1982-04-25T10:00:00+00:00")), 420, "1982-04-25T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1982-10-31T08:59:59+00:00")), 420, "1982-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1982-10-31T09:00:00+00:00")), 480, "1982-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1982 format" : function (test) {
		test.expect(6);

		test.equal(moment("1982-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1982-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1982-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1982-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1982-04-25T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1982-04-25T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1982-04-25T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1982-04-25T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1982-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1982-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1982-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1982-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1983" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1983-01-01T07:59:59+00:00")), 480, "1983-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1983-01-01T08:00:00+00:00")), 480, "1983-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1983-04-24T09:59:59+00:00")), 480, "1983-04-24T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1983-04-24T10:00:00+00:00")), 420, "1983-04-24T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1983-10-30T08:59:59+00:00")), 420, "1983-10-30T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1983-10-30T09:00:00+00:00")), 480, "1983-10-30T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1983 format" : function (test) {
		test.expect(6);

		test.equal(moment("1983-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1983-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1983-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1983-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1983-04-24T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1983-04-24T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1983-04-24T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1983-04-24T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1983-10-30T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1983-10-30T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1983-10-30T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1983-10-30T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1984" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1984-01-01T07:59:59+00:00")), 480, "1984-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1984-01-01T08:00:00+00:00")), 480, "1984-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1984-04-29T09:59:59+00:00")), 480, "1984-04-29T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1984-04-29T10:00:00+00:00")), 420, "1984-04-29T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1984-10-28T08:59:59+00:00")), 420, "1984-10-28T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1984-10-28T09:00:00+00:00")), 480, "1984-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1984 format" : function (test) {
		test.expect(6);

		test.equal(moment("1984-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1984-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1984-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1984-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1984-04-29T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1984-04-29T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1984-04-29T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1984-04-29T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1984-10-28T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1984-10-28T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1984-10-28T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1984-10-28T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1985" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1985-01-01T07:59:59+00:00")), 480, "1985-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1985-01-01T08:00:00+00:00")), 480, "1985-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1985-04-28T09:59:59+00:00")), 480, "1985-04-28T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1985-04-28T10:00:00+00:00")), 420, "1985-04-28T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1985-10-27T08:59:59+00:00")), 420, "1985-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1985-10-27T09:00:00+00:00")), 480, "1985-10-27T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1985 format" : function (test) {
		test.expect(6);

		test.equal(moment("1985-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1985-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1985-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1985-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1985-04-28T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1985-04-28T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1985-04-28T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1985-04-28T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1985-10-27T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1985-10-27T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1985-10-27T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1985-10-27T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1986" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1986-01-01T07:59:59+00:00")), 480, "1986-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1986-01-01T08:00:00+00:00")), 480, "1986-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1986-04-27T09:59:59+00:00")), 480, "1986-04-27T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1986-04-27T10:00:00+00:00")), 420, "1986-04-27T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1986-10-26T08:59:59+00:00")), 420, "1986-10-26T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1986-10-26T09:00:00+00:00")), 480, "1986-10-26T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1986 format" : function (test) {
		test.expect(6);

		test.equal(moment("1986-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1986-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1986-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1986-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1986-04-27T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1986-04-27T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1986-04-27T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1986-04-27T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1986-10-26T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1986-10-26T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1986-10-26T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1986-10-26T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1987" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1987-01-01T07:59:59+00:00")), 480, "1987-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1987-01-01T08:00:00+00:00")), 480, "1987-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1987-04-05T09:59:59+00:00")), 480, "1987-04-05T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1987-04-05T10:00:00+00:00")), 420, "1987-04-05T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1987-10-25T08:59:59+00:00")), 420, "1987-10-25T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1987-10-25T09:00:00+00:00")), 480, "1987-10-25T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1987 format" : function (test) {
		test.expect(6);

		test.equal(moment("1987-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1987-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1987-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1987-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1987-04-05T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1987-04-05T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1987-04-05T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1987-04-05T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1987-10-25T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1987-10-25T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1987-10-25T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1987-10-25T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1988" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1988-01-01T07:59:59+00:00")), 480, "1988-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1988-01-01T08:00:00+00:00")), 480, "1988-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1988-04-03T09:59:59+00:00")), 480, "1988-04-03T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1988-04-03T10:00:00+00:00")), 420, "1988-04-03T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1988-10-30T08:59:59+00:00")), 420, "1988-10-30T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1988-10-30T09:00:00+00:00")), 480, "1988-10-30T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1988 format" : function (test) {
		test.expect(6);

		test.equal(moment("1988-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1988-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1988-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1988-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1988-04-03T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1988-04-03T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1988-04-03T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1988-04-03T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1988-10-30T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1988-10-30T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1988-10-30T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1988-10-30T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1989" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1989-01-01T07:59:59+00:00")), 480, "1989-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1989-01-01T08:00:00+00:00")), 480, "1989-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1989-04-02T09:59:59+00:00")), 480, "1989-04-02T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1989-04-02T10:00:00+00:00")), 420, "1989-04-02T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1989-10-29T08:59:59+00:00")), 420, "1989-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1989-10-29T09:00:00+00:00")), 480, "1989-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1989 format" : function (test) {
		test.expect(6);

		test.equal(moment("1989-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1989-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1989-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1989-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1989-04-02T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1989-04-02T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1989-04-02T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1989-04-02T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1989-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1989-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1989-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1989-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1990" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1990-01-01T07:59:59+00:00")), 480, "1990-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1990-01-01T08:00:00+00:00")), 480, "1990-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1990-04-01T09:59:59+00:00")), 480, "1990-04-01T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1990-04-01T10:00:00+00:00")), 420, "1990-04-01T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1990-10-28T08:59:59+00:00")), 420, "1990-10-28T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1990-10-28T09:00:00+00:00")), 480, "1990-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1990 format" : function (test) {
		test.expect(6);

		test.equal(moment("1990-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1990-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1990-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1990-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1990-04-01T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1990-04-01T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1990-04-01T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1990-04-01T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1990-10-28T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1990-10-28T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1990-10-28T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1990-10-28T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1991" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1991-01-01T07:59:59+00:00")), 480, "1991-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1991-01-01T08:00:00+00:00")), 480, "1991-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1991-04-07T09:59:59+00:00")), 480, "1991-04-07T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1991-04-07T10:00:00+00:00")), 420, "1991-04-07T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1991-10-27T08:59:59+00:00")), 420, "1991-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1991-10-27T09:00:00+00:00")), 480, "1991-10-27T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1991 format" : function (test) {
		test.expect(6);

		test.equal(moment("1991-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1991-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1991-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1991-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1991-04-07T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1991-04-07T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1991-04-07T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1991-04-07T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1991-10-27T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1991-10-27T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1991-10-27T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1991-10-27T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1992" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1992-01-01T07:59:59+00:00")), 480, "1992-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1992-01-01T08:00:00+00:00")), 480, "1992-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1992-04-05T09:59:59+00:00")), 480, "1992-04-05T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1992-04-05T10:00:00+00:00")), 420, "1992-04-05T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1992-10-25T08:59:59+00:00")), 420, "1992-10-25T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1992-10-25T09:00:00+00:00")), 480, "1992-10-25T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1992 format" : function (test) {
		test.expect(6);

		test.equal(moment("1992-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1992-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1992-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1992-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1992-04-05T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1992-04-05T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1992-04-05T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1992-04-05T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1992-10-25T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1992-10-25T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1992-10-25T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1992-10-25T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1993" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1993-01-01T07:59:59+00:00")), 480, "1993-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1993-01-01T08:00:00+00:00")), 480, "1993-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1993-04-04T09:59:59+00:00")), 480, "1993-04-04T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1993-04-04T10:00:00+00:00")), 420, "1993-04-04T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1993-10-31T08:59:59+00:00")), 420, "1993-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1993-10-31T09:00:00+00:00")), 480, "1993-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1993 format" : function (test) {
		test.expect(6);

		test.equal(moment("1993-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1993-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1993-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1993-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1993-04-04T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1993-04-04T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1993-04-04T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1993-04-04T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1993-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1993-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1993-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1993-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1994" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1994-01-01T07:59:59+00:00")), 480, "1994-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1994-01-01T08:00:00+00:00")), 480, "1994-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1994-04-03T09:59:59+00:00")), 480, "1994-04-03T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1994-04-03T10:00:00+00:00")), 420, "1994-04-03T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1994-10-30T08:59:59+00:00")), 420, "1994-10-30T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1994-10-30T09:00:00+00:00")), 480, "1994-10-30T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1994 format" : function (test) {
		test.expect(6);

		test.equal(moment("1994-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1994-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1994-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1994-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1994-04-03T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1994-04-03T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1994-04-03T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1994-04-03T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1994-10-30T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1994-10-30T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1994-10-30T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1994-10-30T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1995" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1995-01-01T07:59:59+00:00")), 480, "1995-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1995-01-01T08:00:00+00:00")), 480, "1995-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1995-04-02T09:59:59+00:00")), 480, "1995-04-02T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1995-04-02T10:00:00+00:00")), 420, "1995-04-02T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1995-10-29T08:59:59+00:00")), 420, "1995-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1995-10-29T09:00:00+00:00")), 480, "1995-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1995 format" : function (test) {
		test.expect(6);

		test.equal(moment("1995-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1995-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1995-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1995-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1995-04-02T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1995-04-02T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1995-04-02T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1995-04-02T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1995-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1995-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1995-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1995-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1996" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1996-01-01T07:59:59+00:00")), 480, "1996-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1996-01-01T08:00:00+00:00")), 480, "1996-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1996-04-07T09:59:59+00:00")), 480, "1996-04-07T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1996-04-07T10:00:00+00:00")), 420, "1996-04-07T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1996-10-27T08:59:59+00:00")), 420, "1996-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1996-10-27T09:00:00+00:00")), 480, "1996-10-27T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1996 format" : function (test) {
		test.expect(6);

		test.equal(moment("1996-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1996-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1996-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1996-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1996-04-07T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1996-04-07T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1996-04-07T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1996-04-07T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1996-10-27T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1996-10-27T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1996-10-27T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1996-10-27T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1997" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1997-01-01T07:59:59+00:00")), 480, "1997-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1997-01-01T08:00:00+00:00")), 480, "1997-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1997-04-06T09:59:59+00:00")), 480, "1997-04-06T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1997-04-06T10:00:00+00:00")), 420, "1997-04-06T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1997-10-26T08:59:59+00:00")), 420, "1997-10-26T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1997-10-26T09:00:00+00:00")), 480, "1997-10-26T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1997 format" : function (test) {
		test.expect(6);

		test.equal(moment("1997-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1997-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1997-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1997-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1997-04-06T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1997-04-06T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1997-04-06T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1997-04-06T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1997-10-26T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1997-10-26T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1997-10-26T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1997-10-26T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1998" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1998-01-01T07:59:59+00:00")), 480, "1998-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1998-01-01T08:00:00+00:00")), 480, "1998-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1998-04-05T09:59:59+00:00")), 480, "1998-04-05T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1998-04-05T10:00:00+00:00")), 420, "1998-04-05T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1998-10-25T08:59:59+00:00")), 420, "1998-10-25T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1998-10-25T09:00:00+00:00")), 480, "1998-10-25T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1998 format" : function (test) {
		test.expect(6);

		test.equal(moment("1998-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1998-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1998-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1998-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1998-04-05T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1998-04-05T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1998-04-05T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1998-04-05T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1998-10-25T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1998-10-25T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1998-10-25T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1998-10-25T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 1999" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("1999-01-01T07:59:59+00:00")), 480, "1999-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1999-01-01T08:00:00+00:00")), 480, "1999-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1999-04-04T09:59:59+00:00")), 480, "1999-04-04T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("1999-04-04T10:00:00+00:00")), 420, "1999-04-04T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1999-10-31T08:59:59+00:00")), 420, "1999-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("1999-10-31T09:00:00+00:00")), 480, "1999-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 1999 format" : function (test) {
		test.expect(6);

		test.equal(moment("1999-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "1999-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("1999-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "1999-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("1999-04-04T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1999-04-04T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1999-04-04T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "1999-04-04T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("1999-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "1999-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("1999-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "1999-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2000" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2000-01-01T07:59:59+00:00")), 480, "2000-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2000-01-01T08:00:00+00:00")), 480, "2000-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2000-04-02T09:59:59+00:00")), 480, "2000-04-02T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2000-04-02T10:00:00+00:00")), 420, "2000-04-02T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2000-10-29T08:59:59+00:00")), 420, "2000-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2000-10-29T09:00:00+00:00")), 480, "2000-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2000 format" : function (test) {
		test.expect(6);

		test.equal(moment("2000-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2000-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2000-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2000-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2000-04-02T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2000-04-02T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2000-04-02T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2000-04-02T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2000-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2000-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2000-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2000-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2001" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2001-01-01T07:59:59+00:00")), 480, "2001-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2001-01-01T08:00:00+00:00")), 480, "2001-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2001-04-01T09:59:59+00:00")), 480, "2001-04-01T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2001-04-01T10:00:00+00:00")), 420, "2001-04-01T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2001-10-28T08:59:59+00:00")), 420, "2001-10-28T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2001-10-28T09:00:00+00:00")), 480, "2001-10-28T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2001 format" : function (test) {
		test.expect(6);

		test.equal(moment("2001-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2001-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2001-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2001-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2001-04-01T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2001-04-01T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2001-04-01T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2001-04-01T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2001-10-28T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2001-10-28T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2001-10-28T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2001-10-28T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2002" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2002-01-01T07:59:59+00:00")), 480, "2002-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2002-01-01T08:00:00+00:00")), 480, "2002-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2002-04-07T09:59:59+00:00")), 480, "2002-04-07T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2002-04-07T10:00:00+00:00")), 420, "2002-04-07T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2002-10-27T08:59:59+00:00")), 420, "2002-10-27T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2002-10-27T09:00:00+00:00")), 480, "2002-10-27T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2002 format" : function (test) {
		test.expect(6);

		test.equal(moment("2002-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2002-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2002-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2002-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2002-04-07T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2002-04-07T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2002-04-07T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2002-04-07T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2002-10-27T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2002-10-27T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2002-10-27T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2002-10-27T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2003" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2003-01-01T07:59:59+00:00")), 480, "2003-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2003-01-01T08:00:00+00:00")), 480, "2003-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2003-04-06T09:59:59+00:00")), 480, "2003-04-06T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2003-04-06T10:00:00+00:00")), 420, "2003-04-06T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2003-10-26T08:59:59+00:00")), 420, "2003-10-26T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2003-10-26T09:00:00+00:00")), 480, "2003-10-26T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2003 format" : function (test) {
		test.expect(6);

		test.equal(moment("2003-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2003-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2003-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2003-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2003-04-06T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2003-04-06T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2003-04-06T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2003-04-06T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2003-10-26T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2003-10-26T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2003-10-26T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2003-10-26T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2004" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2004-01-01T07:59:59+00:00")), 480, "2004-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2004-01-01T08:00:00+00:00")), 480, "2004-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2004-04-04T09:59:59+00:00")), 480, "2004-04-04T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2004-04-04T10:00:00+00:00")), 420, "2004-04-04T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2004-10-31T08:59:59+00:00")), 420, "2004-10-31T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2004-10-31T09:00:00+00:00")), 480, "2004-10-31T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2004 format" : function (test) {
		test.expect(6);

		test.equal(moment("2004-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2004-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2004-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2004-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2004-04-04T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2004-04-04T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2004-04-04T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2004-04-04T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2004-10-31T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2004-10-31T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2004-10-31T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2004-10-31T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2005" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2005-01-01T07:59:59+00:00")), 480, "2005-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2005-01-01T08:00:00+00:00")), 480, "2005-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2005-04-03T09:59:59+00:00")), 480, "2005-04-03T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2005-04-03T10:00:00+00:00")), 420, "2005-04-03T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2005-10-30T08:59:59+00:00")), 420, "2005-10-30T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2005-10-30T09:00:00+00:00")), 480, "2005-10-30T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2005 format" : function (test) {
		test.expect(6);

		test.equal(moment("2005-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2005-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2005-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2005-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2005-04-03T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2005-04-03T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2005-04-03T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2005-04-03T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2005-10-30T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2005-10-30T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2005-10-30T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2005-10-30T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2006" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2006-01-01T07:59:59+00:00")), 480, "2006-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2006-01-01T08:00:00+00:00")), 480, "2006-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2006-04-02T09:59:59+00:00")), 480, "2006-04-02T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2006-04-02T10:00:00+00:00")), 420, "2006-04-02T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2006-10-29T08:59:59+00:00")), 420, "2006-10-29T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2006-10-29T09:00:00+00:00")), 480, "2006-10-29T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2006 format" : function (test) {
		test.expect(6);

		test.equal(moment("2006-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2006-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2006-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2006-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2006-04-02T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2006-04-02T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2006-04-02T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2006-04-02T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2006-10-29T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2006-10-29T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2006-10-29T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2006-10-29T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2007" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2007-01-01T07:59:59+00:00")), 480, "2007-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2007-01-01T08:00:00+00:00")), 480, "2007-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2007-03-11T09:59:59+00:00")), 480, "2007-03-11T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2007-03-11T10:00:00+00:00")), 420, "2007-03-11T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2007-11-04T08:59:59+00:00")), 420, "2007-11-04T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2007-11-04T09:00:00+00:00")), 480, "2007-11-04T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2007 format" : function (test) {
		test.expect(6);

		test.equal(moment("2007-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2007-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2007-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2007-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2007-03-11T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2007-03-11T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2007-03-11T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2007-03-11T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2007-11-04T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2007-11-04T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2007-11-04T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2007-11-04T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2008" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2008-01-01T07:59:59+00:00")), 480, "2008-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2008-01-01T08:00:00+00:00")), 480, "2008-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2008-03-09T09:59:59+00:00")), 480, "2008-03-09T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2008-03-09T10:00:00+00:00")), 420, "2008-03-09T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2008-11-02T08:59:59+00:00")), 420, "2008-11-02T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2008-11-02T09:00:00+00:00")), 480, "2008-11-02T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2008 format" : function (test) {
		test.expect(6);

		test.equal(moment("2008-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2008-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2008-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2008-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2008-03-09T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2008-03-09T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2008-03-09T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2008-03-09T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2008-11-02T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2008-11-02T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2008-11-02T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2008-11-02T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2009" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2009-01-01T07:59:59+00:00")), 480, "2009-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2009-01-01T08:00:00+00:00")), 480, "2009-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2009-03-08T09:59:59+00:00")), 480, "2009-03-08T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2009-03-08T10:00:00+00:00")), 420, "2009-03-08T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2009-11-01T08:59:59+00:00")), 420, "2009-11-01T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2009-11-01T09:00:00+00:00")), 480, "2009-11-01T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2009 format" : function (test) {
		test.expect(6);

		test.equal(moment("2009-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2009-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2009-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2009-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2009-03-08T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2009-03-08T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2009-03-08T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2009-03-08T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2009-11-01T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2009-11-01T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2009-11-01T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2009-11-01T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2010" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2010-01-01T07:59:59+00:00")), 480, "2010-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2010-01-01T08:00:00+00:00")), 480, "2010-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2010-03-14T09:59:59+00:00")), 480, "2010-03-14T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2010-03-14T10:00:00+00:00")), 420, "2010-03-14T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2010-11-07T08:59:59+00:00")), 420, "2010-11-07T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2010-11-07T09:00:00+00:00")), 480, "2010-11-07T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2010 format" : function (test) {
		test.expect(6);

		test.equal(moment("2010-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2010-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2010-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2010-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2010-03-14T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2010-03-14T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2010-03-14T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2010-03-14T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2010-11-07T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2010-11-07T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2010-11-07T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2010-11-07T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

	"America/Los_Angeles 2011" : function (test) {
		var zone = TZ.getZoneSet("America/Los_Angeles");
		test.expect(6);

		test.equal(zone.offset(moment("2011-01-01T07:59:59+00:00")), 480, "2011-01-01T07:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2011-01-01T08:00:00+00:00")), 480, "2011-01-01T08:00:00+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2011-03-13T09:59:59+00:00")), 480, "2011-03-13T09:59:59+00:00 should be 480 minutes offset");
		test.equal(zone.offset(moment("2011-03-13T10:00:00+00:00")), 420, "2011-03-13T10:00:00+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2011-11-06T08:59:59+00:00")), 420, "2011-11-06T08:59:59+00:00 should be 420 minutes offset");
		test.equal(zone.offset(moment("2011-11-06T09:00:00+00:00")), 480, "2011-11-06T09:00:00+00:00 should be 480 minutes offset");

		test.done();
	},

	"America/Los_Angeles 2011 format" : function (test) {
		test.expect(6);

		test.equal(moment("2011-01-01T07:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "23:59", "2011-01-01T07:59:59+00:00 should be 23:59 in America/Los_Angeles");
		test.equal(moment("2011-01-01T08:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "00:00", "2011-01-01T08:00:00+00:00 should be 00:00 in America/Los_Angeles");
		test.equal(moment("2011-03-13T09:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2011-03-13T09:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2011-03-13T10:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "03:00", "2011-03-13T10:00:00+00:00 should be 03:00 in America/Los_Angeles");
		test.equal(moment("2011-11-06T08:59:59+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:59", "2011-11-06T08:59:59+00:00 should be 01:59 in America/Los_Angeles");
		test.equal(moment("2011-11-06T09:00:00+00:00").tz("America/Los_Angeles").format("HH:mm"), "01:00", "2011-11-06T09:00:00+00:00 should be 01:00 in America/Los_Angeles");

		test.done();
	},

    "America/New_York timezone format" : function (test) {
        test.expect(2);

        test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "Dec 31, 2010 8:59 PM PST", "2011-01-01T04:59:59+00:00 should be Dec 31, 2010 8:59 PM PST in America/Los_Angeles");
        test.equal(moment("2012-05-11T04:00:00+00:00").tz("America/Los_Angeles").format("MMM D, YYYY h:mm A z"), "May 10, 2012 9:00 PM PDT", "2011-01-01T04:59:59+00:00 should be May 10, 2012 9:00 PM PDT in America/Los_Angeles");

        test.done();
    }
};
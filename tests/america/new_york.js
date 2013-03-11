var moment = require("../../moment-timezone");

exports.rules = {
	"America/New_York 1970" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1970-01-01T04:59:59+00:00")), 300, "1970-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1970-01-01T05:00:00+00:00")), 300, "1970-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1970-04-26T06:59:59+00:00")), 300, "1970-04-26T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1970-04-26T07:00:00+00:00")), 240, "1970-04-26T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1970-10-25T05:59:59+00:00")), 240, "1970-10-25T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1970-10-25T06:00:00+00:00")), 300, "1970-10-25T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1970 format" : function (test) {
		test.expect(6);

		test.equal(moment("1970-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1970-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1970-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1970-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1970-04-26T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1970-04-26T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1970-04-26T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1970-04-26T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1970-10-25T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1970-10-25T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1970-10-25T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1970-10-25T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1971" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1971-01-01T04:59:59+00:00")), 300, "1971-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1971-01-01T05:00:00+00:00")), 300, "1971-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1971-04-25T06:59:59+00:00")), 300, "1971-04-25T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1971-04-25T07:00:00+00:00")), 240, "1971-04-25T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1971-10-31T05:59:59+00:00")), 240, "1971-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1971-10-31T06:00:00+00:00")), 300, "1971-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1971 format" : function (test) {
		test.expect(6);

		test.equal(moment("1971-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1971-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1971-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1971-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1971-04-25T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1971-04-25T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1971-04-25T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1971-04-25T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1971-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1971-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1971-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1971-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1972" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1972-01-01T04:59:59+00:00")), 300, "1972-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1972-01-01T05:00:00+00:00")), 300, "1972-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1972-04-30T06:59:59+00:00")), 300, "1972-04-30T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1972-04-30T07:00:00+00:00")), 240, "1972-04-30T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1972-10-29T05:59:59+00:00")), 240, "1972-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1972-10-29T06:00:00+00:00")), 300, "1972-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1972 format" : function (test) {
		test.expect(6);

		test.equal(moment("1972-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1972-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1972-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1972-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1972-04-30T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1972-04-30T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1972-04-30T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1972-04-30T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1972-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1972-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1972-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1972-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1973" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1973-01-01T04:59:59+00:00")), 300, "1973-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1973-01-01T05:00:00+00:00")), 300, "1973-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1973-04-29T06:59:59+00:00")), 300, "1973-04-29T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1973-04-29T07:00:00+00:00")), 240, "1973-04-29T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1973-10-28T05:59:59+00:00")), 240, "1973-10-28T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1973-10-28T06:00:00+00:00")), 300, "1973-10-28T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1973 format" : function (test) {
		test.expect(6);

		test.equal(moment("1973-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1973-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1973-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1973-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1973-04-29T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1973-04-29T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1973-04-29T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1973-04-29T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1973-10-28T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1973-10-28T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1973-10-28T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1973-10-28T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1974" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1974-01-01T04:59:59+00:00")), 300, "1974-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1974-01-01T05:00:00+00:00")), 300, "1974-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T06:59:59+00:00")), 300, "1974-01-06T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1974-01-06T07:00:00+00:00")), 240, "1974-01-06T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1974-10-27T05:59:59+00:00")), 240, "1974-10-27T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1974-10-27T06:00:00+00:00")), 300, "1974-10-27T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1974 format" : function (test) {
		test.expect(6);

		test.equal(moment("1974-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1974-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1974-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1974-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1974-01-06T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1974-01-06T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1974-01-06T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1974-01-06T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1974-10-27T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1974-10-27T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1974-10-27T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1974-10-27T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1975" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1975-01-01T04:59:59+00:00")), 300, "1975-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1975-01-01T05:00:00+00:00")), 300, "1975-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1975-02-23T06:59:59+00:00")), 300, "1975-02-23T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1975-02-23T07:00:00+00:00")), 240, "1975-02-23T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1975-10-26T05:59:59+00:00")), 240, "1975-10-26T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1975-10-26T06:00:00+00:00")), 300, "1975-10-26T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1975 format" : function (test) {
		test.expect(6);

		test.equal(moment("1975-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1975-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1975-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1975-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1975-02-23T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1975-02-23T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1975-02-23T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1975-02-23T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1975-10-26T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1975-10-26T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1975-10-26T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1975-10-26T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1976" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1976-01-01T04:59:59+00:00")), 300, "1976-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1976-01-01T05:00:00+00:00")), 300, "1976-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1976-04-25T06:59:59+00:00")), 300, "1976-04-25T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1976-04-25T07:00:00+00:00")), 240, "1976-04-25T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1976-10-31T05:59:59+00:00")), 240, "1976-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1976-10-31T06:00:00+00:00")), 300, "1976-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1976 format" : function (test) {
		test.expect(6);

		test.equal(moment("1976-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1976-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1976-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1976-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1976-04-25T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1976-04-25T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1976-04-25T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1976-04-25T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1976-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1976-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1976-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1976-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1977" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1977-01-01T04:59:59+00:00")), 300, "1977-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1977-01-01T05:00:00+00:00")), 300, "1977-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1977-04-24T06:59:59+00:00")), 300, "1977-04-24T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1977-04-24T07:00:00+00:00")), 240, "1977-04-24T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1977-10-30T05:59:59+00:00")), 240, "1977-10-30T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1977-10-30T06:00:00+00:00")), 300, "1977-10-30T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1977 format" : function (test) {
		test.expect(6);

		test.equal(moment("1977-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1977-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1977-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1977-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1977-04-24T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1977-04-24T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1977-04-24T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1977-04-24T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1977-10-30T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1977-10-30T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1977-10-30T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1977-10-30T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1978" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1978-01-01T04:59:59+00:00")), 300, "1978-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1978-01-01T05:00:00+00:00")), 300, "1978-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1978-04-30T06:59:59+00:00")), 300, "1978-04-30T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1978-04-30T07:00:00+00:00")), 240, "1978-04-30T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1978-10-29T05:59:59+00:00")), 240, "1978-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1978-10-29T06:00:00+00:00")), 300, "1978-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1978 format" : function (test) {
		test.expect(6);

		test.equal(moment("1978-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1978-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1978-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1978-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1978-04-30T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1978-04-30T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1978-04-30T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1978-04-30T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1978-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1978-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1978-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1978-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1979" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1979-01-01T04:59:59+00:00")), 300, "1979-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1979-01-01T05:00:00+00:00")), 300, "1979-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1979-04-29T06:59:59+00:00")), 300, "1979-04-29T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1979-04-29T07:00:00+00:00")), 240, "1979-04-29T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1979-10-28T05:59:59+00:00")), 240, "1979-10-28T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1979-10-28T06:00:00+00:00")), 300, "1979-10-28T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1979 format" : function (test) {
		test.expect(6);

		test.equal(moment("1979-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1979-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1979-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1979-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1979-04-29T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1979-04-29T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1979-04-29T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1979-04-29T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1979-10-28T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1979-10-28T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1979-10-28T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1979-10-28T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1980" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1980-01-01T04:59:59+00:00")), 300, "1980-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1980-01-01T05:00:00+00:00")), 300, "1980-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1980-04-27T06:59:59+00:00")), 300, "1980-04-27T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1980-04-27T07:00:00+00:00")), 240, "1980-04-27T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1980-10-26T05:59:59+00:00")), 240, "1980-10-26T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1980-10-26T06:00:00+00:00")), 300, "1980-10-26T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1980 format" : function (test) {
		test.expect(6);

		test.equal(moment("1980-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1980-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1980-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1980-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1980-04-27T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1980-04-27T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1980-04-27T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1980-04-27T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1980-10-26T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1980-10-26T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1980-10-26T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1980-10-26T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1981" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1981-01-01T04:59:59+00:00")), 300, "1981-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1981-01-01T05:00:00+00:00")), 300, "1981-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1981-04-26T06:59:59+00:00")), 300, "1981-04-26T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1981-04-26T07:00:00+00:00")), 240, "1981-04-26T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1981-10-25T05:59:59+00:00")), 240, "1981-10-25T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1981-10-25T06:00:00+00:00")), 300, "1981-10-25T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1981 format" : function (test) {
		test.expect(6);

		test.equal(moment("1981-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1981-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1981-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1981-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1981-04-26T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1981-04-26T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1981-04-26T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1981-04-26T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1981-10-25T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1981-10-25T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1981-10-25T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1981-10-25T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1982" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1982-01-01T04:59:59+00:00")), 300, "1982-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1982-01-01T05:00:00+00:00")), 300, "1982-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1982-04-25T06:59:59+00:00")), 300, "1982-04-25T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1982-04-25T07:00:00+00:00")), 240, "1982-04-25T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1982-10-31T05:59:59+00:00")), 240, "1982-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1982-10-31T06:00:00+00:00")), 300, "1982-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1982 format" : function (test) {
		test.expect(6);

		test.equal(moment("1982-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1982-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1982-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1982-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1982-04-25T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1982-04-25T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1982-04-25T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1982-04-25T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1982-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1982-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1982-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1982-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1983" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1983-01-01T04:59:59+00:00")), 300, "1983-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1983-01-01T05:00:00+00:00")), 300, "1983-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1983-04-24T06:59:59+00:00")), 300, "1983-04-24T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1983-04-24T07:00:00+00:00")), 240, "1983-04-24T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1983-10-30T05:59:59+00:00")), 240, "1983-10-30T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1983-10-30T06:00:00+00:00")), 300, "1983-10-30T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1983 format" : function (test) {
		test.expect(6);

		test.equal(moment("1983-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1983-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1983-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1983-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1983-04-24T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1983-04-24T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1983-04-24T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1983-04-24T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1983-10-30T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1983-10-30T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1983-10-30T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1983-10-30T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1984" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1984-01-01T04:59:59+00:00")), 300, "1984-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1984-01-01T05:00:00+00:00")), 300, "1984-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1984-04-29T06:59:59+00:00")), 300, "1984-04-29T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1984-04-29T07:00:00+00:00")), 240, "1984-04-29T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1984-10-28T05:59:59+00:00")), 240, "1984-10-28T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1984-10-28T06:00:00+00:00")), 300, "1984-10-28T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1984 format" : function (test) {
		test.expect(6);

		test.equal(moment("1984-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1984-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1984-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1984-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1984-04-29T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1984-04-29T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1984-04-29T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1984-04-29T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1984-10-28T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1984-10-28T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1984-10-28T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1984-10-28T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1985" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1985-01-01T04:59:59+00:00")), 300, "1985-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1985-01-01T05:00:00+00:00")), 300, "1985-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1985-04-28T06:59:59+00:00")), 300, "1985-04-28T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1985-04-28T07:00:00+00:00")), 240, "1985-04-28T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1985-10-27T05:59:59+00:00")), 240, "1985-10-27T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1985-10-27T06:00:00+00:00")), 300, "1985-10-27T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1985 format" : function (test) {
		test.expect(6);

		test.equal(moment("1985-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1985-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1985-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1985-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1985-04-28T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1985-04-28T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1985-04-28T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1985-04-28T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1985-10-27T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1985-10-27T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1985-10-27T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1985-10-27T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1986" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1986-01-01T04:59:59+00:00")), 300, "1986-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1986-01-01T05:00:00+00:00")), 300, "1986-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1986-04-27T06:59:59+00:00")), 300, "1986-04-27T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1986-04-27T07:00:00+00:00")), 240, "1986-04-27T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1986-10-26T05:59:59+00:00")), 240, "1986-10-26T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1986-10-26T06:00:00+00:00")), 300, "1986-10-26T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1986 format" : function (test) {
		test.expect(6);

		test.equal(moment("1986-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1986-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1986-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1986-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1986-04-27T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1986-04-27T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1986-04-27T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1986-04-27T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1986-10-26T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1986-10-26T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1986-10-26T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1986-10-26T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1987" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1987-01-01T04:59:59+00:00")), 300, "1987-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1987-01-01T05:00:00+00:00")), 300, "1987-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1987-04-05T06:59:59+00:00")), 300, "1987-04-05T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1987-04-05T07:00:00+00:00")), 240, "1987-04-05T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1987-10-25T05:59:59+00:00")), 240, "1987-10-25T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1987-10-25T06:00:00+00:00")), 300, "1987-10-25T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1987 format" : function (test) {
		test.expect(6);

		test.equal(moment("1987-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1987-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1987-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1987-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1987-04-05T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1987-04-05T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1987-04-05T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1987-04-05T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1987-10-25T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1987-10-25T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1987-10-25T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1987-10-25T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1988" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1988-01-01T04:59:59+00:00")), 300, "1988-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1988-01-01T05:00:00+00:00")), 300, "1988-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1988-04-03T06:59:59+00:00")), 300, "1988-04-03T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1988-04-03T07:00:00+00:00")), 240, "1988-04-03T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1988-10-30T05:59:59+00:00")), 240, "1988-10-30T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1988-10-30T06:00:00+00:00")), 300, "1988-10-30T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1988 format" : function (test) {
		test.expect(6);

		test.equal(moment("1988-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1988-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1988-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1988-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1988-04-03T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1988-04-03T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1988-04-03T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1988-04-03T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1988-10-30T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1988-10-30T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1988-10-30T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1988-10-30T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1989" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1989-01-01T04:59:59+00:00")), 300, "1989-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1989-01-01T05:00:00+00:00")), 300, "1989-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1989-04-02T06:59:59+00:00")), 300, "1989-04-02T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1989-04-02T07:00:00+00:00")), 240, "1989-04-02T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1989-10-29T05:59:59+00:00")), 240, "1989-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1989-10-29T06:00:00+00:00")), 300, "1989-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1989 format" : function (test) {
		test.expect(6);

		test.equal(moment("1989-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1989-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1989-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1989-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1989-04-02T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1989-04-02T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1989-04-02T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1989-04-02T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1989-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1989-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1989-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1989-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1990" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1990-01-01T04:59:59+00:00")), 300, "1990-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1990-01-01T05:00:00+00:00")), 300, "1990-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1990-04-01T06:59:59+00:00")), 300, "1990-04-01T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1990-04-01T07:00:00+00:00")), 240, "1990-04-01T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1990-10-28T05:59:59+00:00")), 240, "1990-10-28T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1990-10-28T06:00:00+00:00")), 300, "1990-10-28T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1990 format" : function (test) {
		test.expect(6);

		test.equal(moment("1990-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1990-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1990-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1990-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1990-04-01T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1990-04-01T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1990-04-01T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1990-04-01T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1990-10-28T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1990-10-28T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1990-10-28T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1990-10-28T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1991" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1991-01-01T04:59:59+00:00")), 300, "1991-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1991-01-01T05:00:00+00:00")), 300, "1991-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1991-04-07T06:59:59+00:00")), 300, "1991-04-07T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1991-04-07T07:00:00+00:00")), 240, "1991-04-07T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1991-10-27T05:59:59+00:00")), 240, "1991-10-27T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1991-10-27T06:00:00+00:00")), 300, "1991-10-27T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1991 format" : function (test) {
		test.expect(6);

		test.equal(moment("1991-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1991-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1991-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1991-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1991-04-07T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1991-04-07T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1991-04-07T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1991-04-07T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1991-10-27T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1991-10-27T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1991-10-27T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1991-10-27T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1992" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1992-01-01T04:59:59+00:00")), 300, "1992-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1992-01-01T05:00:00+00:00")), 300, "1992-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1992-04-05T06:59:59+00:00")), 300, "1992-04-05T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1992-04-05T07:00:00+00:00")), 240, "1992-04-05T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1992-10-25T05:59:59+00:00")), 240, "1992-10-25T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1992-10-25T06:00:00+00:00")), 300, "1992-10-25T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1992 format" : function (test) {
		test.expect(6);

		test.equal(moment("1992-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1992-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1992-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1992-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1992-04-05T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1992-04-05T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1992-04-05T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1992-04-05T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1992-10-25T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1992-10-25T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1992-10-25T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1992-10-25T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1993" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1993-01-01T04:59:59+00:00")), 300, "1993-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1993-01-01T05:00:00+00:00")), 300, "1993-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1993-04-04T06:59:59+00:00")), 300, "1993-04-04T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1993-04-04T07:00:00+00:00")), 240, "1993-04-04T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1993-10-31T05:59:59+00:00")), 240, "1993-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1993-10-31T06:00:00+00:00")), 300, "1993-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1993 format" : function (test) {
		test.expect(6);

		test.equal(moment("1993-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1993-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1993-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1993-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1993-04-04T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1993-04-04T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1993-04-04T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1993-04-04T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1993-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1993-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1993-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1993-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1994" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1994-01-01T04:59:59+00:00")), 300, "1994-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1994-01-01T05:00:00+00:00")), 300, "1994-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1994-04-03T06:59:59+00:00")), 300, "1994-04-03T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1994-04-03T07:00:00+00:00")), 240, "1994-04-03T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1994-10-30T05:59:59+00:00")), 240, "1994-10-30T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1994-10-30T06:00:00+00:00")), 300, "1994-10-30T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1994 format" : function (test) {
		test.expect(6);

		test.equal(moment("1994-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1994-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1994-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1994-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1994-04-03T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1994-04-03T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1994-04-03T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1994-04-03T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1994-10-30T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1994-10-30T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1994-10-30T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1994-10-30T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1995" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1995-01-01T04:59:59+00:00")), 300, "1995-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1995-01-01T05:00:00+00:00")), 300, "1995-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1995-04-02T06:59:59+00:00")), 300, "1995-04-02T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1995-04-02T07:00:00+00:00")), 240, "1995-04-02T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1995-10-29T05:59:59+00:00")), 240, "1995-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1995-10-29T06:00:00+00:00")), 300, "1995-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1995 format" : function (test) {
		test.expect(6);

		test.equal(moment("1995-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1995-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1995-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1995-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1995-04-02T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1995-04-02T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1995-04-02T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1995-04-02T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1995-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1995-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1995-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1995-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1996" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1996-01-01T04:59:59+00:00")), 300, "1996-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1996-01-01T05:00:00+00:00")), 300, "1996-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1996-04-07T06:59:59+00:00")), 300, "1996-04-07T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1996-04-07T07:00:00+00:00")), 240, "1996-04-07T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1996-10-27T05:59:59+00:00")), 240, "1996-10-27T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1996-10-27T06:00:00+00:00")), 300, "1996-10-27T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1996 format" : function (test) {
		test.expect(6);

		test.equal(moment("1996-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1996-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1996-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1996-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1996-04-07T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1996-04-07T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1996-04-07T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1996-04-07T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1996-10-27T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1996-10-27T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1996-10-27T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1996-10-27T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1997" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1997-01-01T04:59:59+00:00")), 300, "1997-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1997-01-01T05:00:00+00:00")), 300, "1997-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1997-04-06T06:59:59+00:00")), 300, "1997-04-06T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1997-04-06T07:00:00+00:00")), 240, "1997-04-06T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1997-10-26T05:59:59+00:00")), 240, "1997-10-26T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1997-10-26T06:00:00+00:00")), 300, "1997-10-26T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1997 format" : function (test) {
		test.expect(6);

		test.equal(moment("1997-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1997-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1997-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1997-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1997-04-06T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1997-04-06T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1997-04-06T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1997-04-06T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1997-10-26T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1997-10-26T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1997-10-26T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1997-10-26T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1998" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1998-01-01T04:59:59+00:00")), 300, "1998-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1998-01-01T05:00:00+00:00")), 300, "1998-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1998-04-05T06:59:59+00:00")), 300, "1998-04-05T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1998-04-05T07:00:00+00:00")), 240, "1998-04-05T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1998-10-25T05:59:59+00:00")), 240, "1998-10-25T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1998-10-25T06:00:00+00:00")), 300, "1998-10-25T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1998 format" : function (test) {
		test.expect(6);

		test.equal(moment("1998-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1998-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1998-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1998-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1998-04-05T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1998-04-05T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1998-04-05T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1998-04-05T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1998-10-25T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1998-10-25T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1998-10-25T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1998-10-25T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 1999" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("1999-01-01T04:59:59+00:00")), 300, "1999-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1999-01-01T05:00:00+00:00")), 300, "1999-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1999-04-04T06:59:59+00:00")), 300, "1999-04-04T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("1999-04-04T07:00:00+00:00")), 240, "1999-04-04T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1999-10-31T05:59:59+00:00")), 240, "1999-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("1999-10-31T06:00:00+00:00")), 300, "1999-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 1999 format" : function (test) {
		test.expect(6);

		test.equal(moment("1999-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "1999-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("1999-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "1999-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("1999-04-04T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1999-04-04T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1999-04-04T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "1999-04-04T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("1999-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "1999-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("1999-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "1999-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2000" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2000-01-01T04:59:59+00:00")), 300, "2000-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2000-01-01T05:00:00+00:00")), 300, "2000-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2000-04-02T06:59:59+00:00")), 300, "2000-04-02T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2000-04-02T07:00:00+00:00")), 240, "2000-04-02T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2000-10-29T05:59:59+00:00")), 240, "2000-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2000-10-29T06:00:00+00:00")), 300, "2000-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2000 format" : function (test) {
		test.expect(6);

		test.equal(moment("2000-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2000-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2000-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2000-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2000-04-02T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2000-04-02T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2000-04-02T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2000-04-02T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2000-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2000-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2000-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2000-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2001" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2001-01-01T04:59:59+00:00")), 300, "2001-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2001-01-01T05:00:00+00:00")), 300, "2001-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2001-04-01T06:59:59+00:00")), 300, "2001-04-01T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2001-04-01T07:00:00+00:00")), 240, "2001-04-01T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2001-10-28T05:59:59+00:00")), 240, "2001-10-28T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2001-10-28T06:00:00+00:00")), 300, "2001-10-28T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2001 format" : function (test) {
		test.expect(6);

		test.equal(moment("2001-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2001-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2001-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2001-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2001-04-01T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2001-04-01T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2001-04-01T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2001-04-01T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2001-10-28T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2001-10-28T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2001-10-28T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2001-10-28T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2002" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2002-01-01T04:59:59+00:00")), 300, "2002-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2002-01-01T05:00:00+00:00")), 300, "2002-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2002-04-07T06:59:59+00:00")), 300, "2002-04-07T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2002-04-07T07:00:00+00:00")), 240, "2002-04-07T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2002-10-27T05:59:59+00:00")), 240, "2002-10-27T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2002-10-27T06:00:00+00:00")), 300, "2002-10-27T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2002 format" : function (test) {
		test.expect(6);

		test.equal(moment("2002-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2002-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2002-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2002-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2002-04-07T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2002-04-07T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2002-04-07T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2002-04-07T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2002-10-27T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2002-10-27T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2002-10-27T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2002-10-27T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2003" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2003-01-01T04:59:59+00:00")), 300, "2003-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2003-01-01T05:00:00+00:00")), 300, "2003-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2003-04-06T06:59:59+00:00")), 300, "2003-04-06T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2003-04-06T07:00:00+00:00")), 240, "2003-04-06T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2003-10-26T05:59:59+00:00")), 240, "2003-10-26T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2003-10-26T06:00:00+00:00")), 300, "2003-10-26T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2003 format" : function (test) {
		test.expect(6);

		test.equal(moment("2003-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2003-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2003-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2003-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2003-04-06T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2003-04-06T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2003-04-06T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2003-04-06T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2003-10-26T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2003-10-26T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2003-10-26T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2003-10-26T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2004" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2004-01-01T04:59:59+00:00")), 300, "2004-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2004-01-01T05:00:00+00:00")), 300, "2004-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2004-04-04T06:59:59+00:00")), 300, "2004-04-04T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2004-04-04T07:00:00+00:00")), 240, "2004-04-04T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2004-10-31T05:59:59+00:00")), 240, "2004-10-31T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2004-10-31T06:00:00+00:00")), 300, "2004-10-31T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2004 format" : function (test) {
		test.expect(6);

		test.equal(moment("2004-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2004-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2004-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2004-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2004-04-04T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2004-04-04T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2004-04-04T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2004-04-04T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2004-10-31T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2004-10-31T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2004-10-31T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2004-10-31T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2005" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2005-01-01T04:59:59+00:00")), 300, "2005-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2005-01-01T05:00:00+00:00")), 300, "2005-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2005-04-03T06:59:59+00:00")), 300, "2005-04-03T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2005-04-03T07:00:00+00:00")), 240, "2005-04-03T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2005-10-30T05:59:59+00:00")), 240, "2005-10-30T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2005-10-30T06:00:00+00:00")), 300, "2005-10-30T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2005 format" : function (test) {
		test.expect(6);

		test.equal(moment("2005-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2005-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2005-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2005-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2005-04-03T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2005-04-03T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2005-04-03T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2005-04-03T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2005-10-30T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2005-10-30T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2005-10-30T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2005-10-30T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2006" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2006-01-01T04:59:59+00:00")), 300, "2006-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2006-01-01T05:00:00+00:00")), 300, "2006-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2006-04-02T06:59:59+00:00")), 300, "2006-04-02T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2006-04-02T07:00:00+00:00")), 240, "2006-04-02T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2006-10-29T05:59:59+00:00")), 240, "2006-10-29T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2006-10-29T06:00:00+00:00")), 300, "2006-10-29T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2006 format" : function (test) {
		test.expect(6);

		test.equal(moment("2006-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2006-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2006-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2006-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2006-04-02T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2006-04-02T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2006-04-02T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2006-04-02T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2006-10-29T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2006-10-29T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2006-10-29T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2006-10-29T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2007" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2007-01-01T04:59:59+00:00")), 300, "2007-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2007-01-01T05:00:00+00:00")), 300, "2007-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2007-03-11T06:59:59+00:00")), 300, "2007-03-11T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2007-03-11T07:00:00+00:00")), 240, "2007-03-11T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2007-11-04T05:59:59+00:00")), 240, "2007-11-04T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2007-11-04T06:00:00+00:00")), 300, "2007-11-04T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2007 format" : function (test) {
		test.expect(6);

		test.equal(moment("2007-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2007-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2007-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2007-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2007-03-11T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2007-03-11T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2007-03-11T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2007-03-11T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2007-11-04T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2007-11-04T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2007-11-04T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2007-11-04T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2008" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2008-01-01T04:59:59+00:00")), 300, "2008-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2008-01-01T05:00:00+00:00")), 300, "2008-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2008-03-09T06:59:59+00:00")), 300, "2008-03-09T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2008-03-09T07:00:00+00:00")), 240, "2008-03-09T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2008-11-02T05:59:59+00:00")), 240, "2008-11-02T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2008-11-02T06:00:00+00:00")), 300, "2008-11-02T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2008 format" : function (test) {
		test.expect(6);

		test.equal(moment("2008-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2008-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2008-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2008-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2008-03-09T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2008-03-09T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2008-03-09T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2008-03-09T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2008-11-02T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2008-11-02T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2008-11-02T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2008-11-02T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2009" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2009-01-01T04:59:59+00:00")), 300, "2009-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2009-01-01T05:00:00+00:00")), 300, "2009-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2009-03-08T06:59:59+00:00")), 300, "2009-03-08T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2009-03-08T07:00:00+00:00")), 240, "2009-03-08T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2009-11-01T05:59:59+00:00")), 240, "2009-11-01T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2009-11-01T06:00:00+00:00")), 300, "2009-11-01T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2009 format" : function (test) {
		test.expect(6);

		test.equal(moment("2009-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2009-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2009-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2009-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2009-03-08T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2009-03-08T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2009-03-08T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2009-03-08T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2009-11-01T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2009-11-01T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2009-11-01T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2009-11-01T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2010" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2010-01-01T04:59:59+00:00")), 300, "2010-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2010-01-01T05:00:00+00:00")), 300, "2010-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2010-03-14T06:59:59+00:00")), 300, "2010-03-14T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2010-03-14T07:00:00+00:00")), 240, "2010-03-14T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2010-11-07T05:59:59+00:00")), 240, "2010-11-07T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2010-11-07T06:00:00+00:00")), 300, "2010-11-07T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2010 format" : function (test) {
		test.expect(6);

		test.equal(moment("2010-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2010-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2010-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2010-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2010-03-14T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2010-03-14T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2010-03-14T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2010-03-14T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2010-11-07T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2010-11-07T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2010-11-07T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2010-11-07T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	},

	"America/New_York 2011" : function (test) {
		var zone = moment.tz.getZoneSet("America/New_York");
		test.expect(6);

		test.equal(zone.offset(moment("2011-01-01T04:59:59+00:00")), 300, "2011-01-01T04:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2011-01-01T05:00:00+00:00")), 300, "2011-01-01T05:00:00+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2011-03-13T06:59:59+00:00")), 300, "2011-03-13T06:59:59+00:00 should be 300 minutes offset");
		test.equal(zone.offset(moment("2011-03-13T07:00:00+00:00")), 240, "2011-03-13T07:00:00+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2011-11-06T05:59:59+00:00")), 240, "2011-11-06T05:59:59+00:00 should be 240 minutes offset");
		test.equal(zone.offset(moment("2011-11-06T06:00:00+00:00")), 300, "2011-11-06T06:00:00+00:00 should be 300 minutes offset");

		test.done();
	},

	"America/New_York 2011 format" : function (test) {
		test.expect(6);

		test.equal(moment("2011-01-01T04:59:59+00:00").tz("America/New_York").format("HH:mm"), "23:59", "2011-01-01T04:59:59+00:00 should be 23:59 in America/New_York");
		test.equal(moment("2011-01-01T05:00:00+00:00").tz("America/New_York").format("HH:mm"), "00:00", "2011-01-01T05:00:00+00:00 should be 00:00 in America/New_York");
		test.equal(moment("2011-03-13T06:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2011-03-13T06:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2011-03-13T07:00:00+00:00").tz("America/New_York").format("HH:mm"), "03:00", "2011-03-13T07:00:00+00:00 should be 03:00 in America/New_York");
		test.equal(moment("2011-11-06T05:59:59+00:00").tz("America/New_York").format("HH:mm"), "01:59", "2011-11-06T05:59:59+00:00 should be 01:59 in America/New_York");
		test.equal(moment("2011-11-06T06:00:00+00:00").tz("America/New_York").format("HH:mm"), "01:00", "2011-11-06T06:00:00+00:00 should be 01:00 in America/New_York");

		test.done();
	}
};
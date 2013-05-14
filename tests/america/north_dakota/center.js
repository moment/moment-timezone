var moment = require("../../../index");

exports["America/North_Dakota/Center"] = {

	"1918" : function (t) {
		t.equal(moment("1918-03-31T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1918-03-31T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1918-03-31T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1918-03-31T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1918-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1918-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1918-03-31T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1918-03-31T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1918-03-31T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1918-03-31T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1918-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1918-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-30T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1919-03-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1919-03-30T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1919-03-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1919-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1919-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1919-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1919-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1919-03-30T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1919-03-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1919-03-30T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1919-03-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1919-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1919-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1919-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1919-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1942-02-09T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1942-02-09T09:00:00+00:00 should be 03:00:00 MWT");

		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1942-02-09T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1942-02-09T09:00:00+00:00 should be 360 minutes offset in MWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "16:59:59", "1945-08-14T22:59:59+00:00 should be 16:59:59 MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "17:00:00", "1945-08-14T23:00:00+00:00 should be 17:00:00 MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1945-09-30T07:59:59+00:00 should be 01:59:59 MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1945-09-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1945-08-14T22:59:59+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1945-08-14T23:00:00+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1945-09-30T07:59:59+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1945-09-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1967-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1967-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1967-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1967-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1967-10-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1967-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1967-10-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1967-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1967-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1967-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1967-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1967-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1967-10-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1967-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1967-10-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-28T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1968-04-28T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1968-04-28T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1968-04-28T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1968-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1968-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1968-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1968-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1968-04-28T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1968-04-28T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1968-04-28T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1968-04-28T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1968-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1968-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1968-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1968-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1969-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1969-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1969-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1969-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1969-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1969-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1969-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1969-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1969-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1969-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1969-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1969-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1969-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1969-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1969-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1970-04-26T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1970-04-26T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1970-04-26T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1970-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1970-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1970-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1970-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1970-04-26T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1970-04-26T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1970-04-26T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1970-04-26T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1970-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1970-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1970-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1970-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1971-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1971-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1971-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1971-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1971-10-31T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1971-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1971-10-31T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1971-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1971-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1971-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1971-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1971-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1971-10-31T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1971-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1971-10-31T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1972-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1972-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1972-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1972-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1972-10-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1972-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1972-10-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1972-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1972-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1972-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1972-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1972-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1972-10-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1972-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1972-10-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1973-04-29T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1973-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1973-04-29T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1973-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1973-10-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1973-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1973-10-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1973-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1973-04-29T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1973-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1973-04-29T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1973-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1973-10-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1973-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1973-10-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-06T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1974-01-06T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1974-01-06T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1974-01-06T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1974-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1974-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1974-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1974-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1974-01-06T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1974-01-06T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1974-01-06T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1974-01-06T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1974-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1974-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1974-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1974-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-23T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1975-02-23T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1975-02-23T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1975-02-23T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1975-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1975-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1975-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1975-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1975-02-23T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1975-02-23T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1975-02-23T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1975-02-23T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1975-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1975-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1975-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1975-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1976-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1976-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1976-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1976-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1976-10-31T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1976-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1976-10-31T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1976-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1976-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1976-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1976-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1976-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1976-10-31T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1976-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1976-10-31T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1977-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1977-04-24T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1977-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1977-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1977-10-30T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1977-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1977-10-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1977-04-24T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1977-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1977-04-24T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1977-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1977-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1977-10-30T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1977-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1977-10-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1978-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1978-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1978-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1978-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1978-10-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1978-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1978-10-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1978-04-30T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1978-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1978-04-30T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1978-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1978-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1978-10-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1978-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1978-10-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1979-04-29T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1979-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1979-04-29T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1979-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1979-10-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1979-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1979-10-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1979-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1979-04-29T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1979-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1979-04-29T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1979-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1979-10-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1979-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1979-10-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1980-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1980-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1980-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1980-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1980-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1980-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1980-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1980-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1980-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1980-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1980-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1980-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1980-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1980-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1980-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1981-04-26T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1981-04-26T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1981-04-26T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1981-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1981-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1981-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1981-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1981-04-26T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1981-04-26T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1981-04-26T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1981-04-26T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1981-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1981-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1981-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1981-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1982-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1982-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1982-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1982-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1982-10-31T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1982-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1982-10-31T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1982-04-25T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1982-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1982-04-25T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1982-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1982-10-31T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1982-10-31T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1982-10-31T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1982-10-31T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1983-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1983-04-24T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1983-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1983-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1983-10-30T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1983-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1983-10-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1983-04-24T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1983-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1983-04-24T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1983-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1983-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1983-10-30T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1983-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1983-10-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1984-04-29T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1984-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1984-04-29T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1984-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1984-10-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1984-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1984-10-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1984-04-29T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1984-04-29T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1984-04-29T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1984-04-29T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1984-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1984-10-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1984-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1984-10-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1985-04-28T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1985-04-28T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1985-04-28T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1985-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1985-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1985-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1985-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1985-04-28T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1985-04-28T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1985-04-28T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1985-04-28T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1985-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1985-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1985-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1985-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1986-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1986-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1986-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1986-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1986-10-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1986-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1986-10-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1986-04-27T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1986-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1986-04-27T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1986-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1986-10-26T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1986-10-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1986-10-26T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1986-10-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1987-04-05T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1987-04-05T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1987-04-05T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1987-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1987-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1987-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1987-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1987-04-05T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1987-04-05T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1987-04-05T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1987-04-05T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1987-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1987-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1987-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1987-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1988-04-03T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1988-04-03T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1988-04-03T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1988-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1988-10-30T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1988-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1988-10-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1988-04-03T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1988-04-03T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1988-04-03T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1988-04-03T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1988-10-30T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1988-10-30T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1988-10-30T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1988-10-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1989-04-02T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1989-04-02T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1989-04-02T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1989-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1989-10-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1989-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1989-10-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1989-04-02T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1989-04-02T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1989-04-02T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1989-04-02T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1989-10-29T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1989-10-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1989-10-29T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1989-10-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1990-04-01T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1990-04-01T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1990-04-01T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1990-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1990-10-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1990-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1990-10-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1990-04-01T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1990-04-01T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1990-04-01T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1990-04-01T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1990-10-28T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1990-10-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1990-10-28T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1990-10-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1991-04-07T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1991-04-07T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1991-04-07T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1991-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1991-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1991-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1991-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1991-04-07T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1991-04-07T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1991-04-07T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1991-04-07T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1991-10-27T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1991-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1991-10-27T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 420, "1991-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T08:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1992-04-05T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1992-04-05T09:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1992-04-05T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1992-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1992-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1992-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "02:00:00", "1992-10-25T08:00:00+00:00 should be 02:00:00 CST");

		t.equal(moment("1992-04-05T08:59:59+00:00").tz("America/North_Dakota/Center").zone(), 420, "1992-04-05T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1992-04-05T09:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1992-04-05T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1992-10-25T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1992-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1992-10-25T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1992-10-25T08:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1993-04-04T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1993-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1993-04-04T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1993-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1993-10-31T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1993-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1993-10-31T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1993-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1993-04-04T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1993-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1993-04-04T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1993-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1993-10-31T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1993-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1993-10-31T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1994-04-03T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1994-04-03T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1994-04-03T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1994-10-30T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1994-10-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1994-10-30T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1994-10-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1994-04-03T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1994-04-03T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1994-04-03T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1994-04-03T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1994-10-30T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1994-10-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1994-10-30T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1994-10-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1995-04-02T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1995-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1995-04-02T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1995-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1995-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1995-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1995-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1995-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1995-04-02T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1995-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1995-04-02T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1995-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1995-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1995-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1995-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1996-04-07T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1996-04-07T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1996-04-07T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1996-10-27T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1996-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1996-10-27T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1996-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1996-04-07T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1996-04-07T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1996-04-07T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1996-04-07T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1996-10-27T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1996-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1996-10-27T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1996-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1997-04-06T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1997-04-06T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1997-04-06T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1997-10-26T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1997-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1997-10-26T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1997-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1997-04-06T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1997-04-06T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1997-04-06T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1997-04-06T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1997-10-26T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1997-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1997-10-26T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1997-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1998-04-05T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1998-04-05T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1998-04-05T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1998-10-25T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1998-10-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1998-10-25T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1998-10-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1998-04-05T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1998-04-05T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1998-04-05T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1998-04-05T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1998-10-25T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1998-10-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1998-10-25T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1998-10-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1999-04-04T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1999-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "1999-04-04T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1999-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "1999-10-31T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1999-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "1999-10-31T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1999-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "1999-04-04T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1999-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "1999-04-04T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1999-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "1999-10-31T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1999-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "1999-10-31T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2000-04-02T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2000-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2000-04-02T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2000-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2000-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2000-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2000-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2000-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2000-04-02T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2000-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2000-04-02T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2000-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2000-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2000-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2000-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2001-04-01T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2001-04-01T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2001-04-01T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2001-10-28T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2001-10-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2001-10-28T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2001-10-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2001-04-01T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2001-04-01T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2001-04-01T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2001-04-01T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2001-10-28T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2001-10-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2001-10-28T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2001-10-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2002-04-07T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2002-04-07T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2002-04-07T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2002-10-27T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2002-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2002-10-27T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2002-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2002-04-07T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2002-04-07T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2002-04-07T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2002-04-07T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2002-10-27T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2002-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2002-10-27T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2002-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2003-04-06T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2003-04-06T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2003-04-06T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2003-10-26T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2003-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2003-10-26T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2003-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2003-04-06T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2003-04-06T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2003-04-06T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2003-04-06T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2003-10-26T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2003-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2003-10-26T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2003-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2004-04-04T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2004-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2004-04-04T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2004-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2004-10-31T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2004-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2004-10-31T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2004-04-04T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2004-04-04T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2004-04-04T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2004-04-04T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2004-10-31T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2004-10-31T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2004-10-31T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2004-10-31T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2005-04-03T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2005-04-03T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2005-04-03T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2005-10-30T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2005-10-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2005-10-30T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2005-10-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2005-04-03T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2005-04-03T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2005-04-03T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2005-04-03T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2005-10-30T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2005-10-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2005-10-30T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2005-10-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2006-04-02T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2006-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2006-04-02T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2006-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2006-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2006-04-02T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2006-04-02T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2006-04-02T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2006-04-02T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2006-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2006-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2007-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2007-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2007-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2007-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2007-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2007-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2007-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2007-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2008-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2008-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2008-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2008-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2008-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2008-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2008-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2008-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2008-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2008-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2008-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2008-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2008-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2008-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2008-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2009-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2009-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2009-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2009-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2009-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2009-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2009-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2009-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2009-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2009-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2009-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2009-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2009-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2009-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2009-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2010-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2010-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2010-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2010-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2010-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2010-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2010-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2010-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2010-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2010-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2010-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2010-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2010-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2010-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2010-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2011-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2011-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2011-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2011-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2011-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2011-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2011-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2011-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2011-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2011-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2011-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2011-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2011-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2011-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2011-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2012-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2012-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2012-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2012-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2012-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2012-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2012-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2012-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2012-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2012-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2012-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2012-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2012-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2012-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2012-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2013-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2013-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2013-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2013-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2013-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2013-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2013-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2013-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2013-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2013-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2013-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2013-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2013-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2013-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2013-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2014-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2014-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2014-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2014-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2014-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2014-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2014-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2014-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2014-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2014-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2014-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2014-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2014-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2014-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2014-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2015-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2015-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2015-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2015-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2015-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2015-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2015-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2015-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2015-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2015-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2015-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2015-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2015-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2015-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2015-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2016-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2016-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2016-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2016-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2016-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2016-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2016-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2016-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2016-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2016-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2016-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2016-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2016-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2016-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2016-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2017-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2017-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2017-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2017-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2017-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2017-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2017-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2017-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2017-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2017-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2017-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2017-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2017-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2017-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2017-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2018-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2018-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2018-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2018-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2018-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2018-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2018-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2018-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2018-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2018-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2018-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2018-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2018-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2018-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2018-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2019-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2019-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2019-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2019-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2019-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2019-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2019-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2019-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2019-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2019-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2019-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2019-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2019-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2019-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2019-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2020-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2020-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2020-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2020-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2020-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2020-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2020-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2020-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2020-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2020-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2020-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2020-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2020-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2020-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2020-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2021-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2021-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2021-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2021-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2021-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2021-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2021-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2021-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2021-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2021-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2021-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2021-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2021-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2021-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2021-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2022-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2022-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2022-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2022-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2022-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2022-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2022-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2022-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2022-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2022-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2022-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2022-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2022-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2022-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2022-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2023-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2023-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2023-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2023-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2023-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2023-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2023-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2023-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2023-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2023-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2023-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2023-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2023-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2023-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2023-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2024-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2024-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2024-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2024-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2024-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2024-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2024-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2024-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2024-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2024-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2024-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2024-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2024-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2024-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2024-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2025-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2025-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2025-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2025-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2025-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2025-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2025-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2025-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2025-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2025-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2025-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2025-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2025-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2025-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2025-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2026-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2026-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2026-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2026-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2026-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2026-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2026-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2026-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2026-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2026-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2026-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2026-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2026-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2026-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2026-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2027-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2027-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2027-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2027-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2027-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2027-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2027-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2027-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2027-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2027-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2027-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2027-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2027-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2027-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2027-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2028-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2028-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2028-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2028-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2028-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2028-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2028-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2028-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2028-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2028-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2028-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2028-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2028-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2028-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2028-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2029-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2029-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2029-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2029-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2029-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2029-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2029-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2029-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2029-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2029-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2029-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2029-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2029-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2029-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2029-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2030-03-10T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2030-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2030-03-10T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2030-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2030-11-03T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2030-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2030-11-03T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2030-03-10T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2030-03-10T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2030-03-10T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2030-03-10T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2030-11-03T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2030-11-03T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2030-11-03T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2030-11-03T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2031-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2031-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2031-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2031-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2031-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2031-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2031-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2031-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2031-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2031-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2031-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2031-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2031-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2031-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2031-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2032-03-14T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2032-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2032-03-14T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2032-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2032-11-07T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2032-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2032-11-07T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2032-03-14T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2032-03-14T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2032-03-14T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2032-03-14T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2032-11-07T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2032-11-07T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2032-11-07T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2032-11-07T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2033-03-13T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2033-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2033-03-13T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2033-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2033-11-06T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2033-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2033-11-06T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2033-03-13T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2033-03-13T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2033-03-13T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2033-03-13T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2033-11-06T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2033-11-06T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2033-11-06T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2033-11-06T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2034-03-12T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2034-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2034-03-12T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2034-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2034-11-05T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2034-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2034-11-05T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2034-03-12T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2034-03-12T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2034-03-12T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2034-03-12T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2034-11-05T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2034-11-05T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2034-11-05T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2034-11-05T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2035-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2035-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2035-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2035-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2035-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2035-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2035-11-04T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2035-03-11T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2035-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2035-03-11T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2035-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2035-11-04T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2035-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2035-11-04T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2035-11-04T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2036-03-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2036-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2036-03-09T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2036-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2036-11-02T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2036-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2036-11-02T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2036-03-09T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2036-03-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2036-03-09T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2036-03-09T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2036-11-02T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2036-11-02T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2036-11-02T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2036-11-02T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2037-03-08T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2037-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "03:00:00", "2037-03-08T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2037-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:59:59", "2037-11-01T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2037-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").format("HH:mm:ss"), "01:00:00", "2037-11-01T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2037-03-08T07:59:59+00:00").tz("America/North_Dakota/Center").zone(), 360, "2037-03-08T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2037-03-08T08:00:00+00:00").tz("America/North_Dakota/Center").zone(), 300, "2037-03-08T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2037-11-01T06:59:59+00:00").tz("America/North_Dakota/Center").zone(), 300, "2037-11-01T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2037-11-01T07:00:00+00:00").tz("America/North_Dakota/Center").zone(), 360, "2037-11-01T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
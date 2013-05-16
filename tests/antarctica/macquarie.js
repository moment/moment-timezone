var moment = require("../../index");

exports["Antarctica/Macquarie"] = {

	"1916" : function (t) {
		t.equal(moment("1916-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1916-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1916-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1916-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1916-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1916-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1916-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1916-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1917-03-24T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:00:00", "1917-03-24T15:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1917-03-24T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1917-03-24T15:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-31T13:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "23:59:59", "1919-03-31T13:59:59+00:00 should be 23:59:59 EST");
		t.equal(moment("1919-03-31T14:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "14:00:00", "1919-03-31T14:00:00+00:00 should be 14:00:00 zzz");

		t.equal(moment("1919-03-31T13:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1919-03-31T13:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1919-03-31T14:00:00+00:00").tz("Antarctica/Macquarie").zone(), 0, "1919-03-31T14:00:00+00:00 should be 0 minutes offset in zzz");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-03-24T23:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "23:59:59", "1948-03-24T23:59:59+00:00 should be 23:59:59 zzz");
		t.equal(moment("1948-03-25T00:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "10:00:00", "1948-03-25T00:00:00+00:00 should be 10:00:00 EST");

		t.equal(moment("1948-03-24T23:59:59+00:00").tz("Antarctica/Macquarie").zone(), 0, "1948-03-24T23:59:59+00:00 should be 0 minutes offset in zzz");
		t.equal(moment("1948-03-25T00:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1948-03-25T00:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1967-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1967-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1967-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1967-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1967-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1967-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1967-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1968-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1968-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1968-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1968-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1968-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1968-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1968-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1968-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1968-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1968-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1968-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1968-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1968-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1968-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1968-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-03-08T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1969-03-08T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1969-03-08T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1969-03-08T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1969-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1969-10-25T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1969-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1969-10-25T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1969-03-08T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1969-03-08T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1969-03-08T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1969-03-08T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1969-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1969-10-25T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1969-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1969-10-25T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-03-07T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1970-03-07T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1970-03-07T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1970-03-07T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1970-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1970-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1970-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1970-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1970-03-07T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1970-03-07T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1970-03-07T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1970-03-07T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1970-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1970-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1970-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1970-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-03-13T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1971-03-13T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1971-03-13T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1971-03-13T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1971-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1971-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1971-03-13T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1971-03-13T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1971-03-13T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1971-03-13T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1971-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1971-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1972-02-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1972-02-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1972-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1972-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1972-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1972-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1972-02-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1972-02-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1972-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1972-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1972-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1972-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1973-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1973-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1973-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1973-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1973-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1973-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1973-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1973-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1973-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1973-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1973-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1973-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1973-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1973-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1973-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-02T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1974-03-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1974-03-02T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1974-03-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1974-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1974-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1974-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1974-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1974-03-02T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1974-03-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1974-03-02T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1974-03-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1974-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1974-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1974-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1974-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1975-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1975-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1975-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1975-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1975-10-25T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1975-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1975-10-25T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1975-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1975-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1975-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1975-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1975-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1975-10-25T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1975-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1975-10-25T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-06T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1976-03-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1976-03-06T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1976-03-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1976-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1976-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1976-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1976-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1976-03-06T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1976-03-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1976-03-06T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1976-03-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1976-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1976-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1976-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1976-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-05T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1977-03-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1977-03-05T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1977-03-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1977-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1977-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1977-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1977-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1977-03-05T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1977-03-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1977-03-05T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1977-03-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1977-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1977-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1977-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1977-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-04T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1978-03-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1978-03-04T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1978-03-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1978-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1978-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1978-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1978-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1978-03-04T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1978-03-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1978-03-04T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1978-03-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1978-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1978-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1978-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1978-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1979-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1979-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1979-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1979-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1979-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1979-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1979-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1979-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1979-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1979-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1979-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1979-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1979-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1979-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1979-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1980-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1980-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1980-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1980-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1980-10-25T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1980-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1980-10-25T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1980-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1980-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1980-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1980-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1980-10-25T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1980-10-25T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1980-10-25T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1980-10-25T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-02-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1981-02-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1981-02-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1981-02-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1981-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1981-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1981-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1981-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1981-02-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1981-02-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1981-02-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1981-02-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1981-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1981-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1981-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1981-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1982-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1982-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1982-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1982-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1982-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1982-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1982-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1982-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1982-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1982-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1982-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1982-10-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1982-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1982-10-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1982-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1983-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1983-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1983-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1983-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1983-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1983-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1983-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1983-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1983-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1983-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1983-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1983-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1983-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1983-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1983-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1984-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1984-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1984-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1984-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1984-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1984-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1984-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1984-03-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1984-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1984-03-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1984-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1984-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1984-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1984-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1984-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-02T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1985-03-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1985-03-02T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1985-03-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1985-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1985-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1985-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1985-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1985-03-02T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1985-03-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1985-03-02T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1985-03-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1985-10-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1985-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1985-10-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1985-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1986-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1986-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1986-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1986-10-18T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1986-10-18T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1986-10-18T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1986-10-18T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1986-03-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1986-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1986-03-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1986-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1986-10-18T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1986-10-18T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1986-10-18T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1986-10-18T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-14T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1987-03-14T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1987-03-14T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1987-03-14T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1987-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1987-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1987-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1987-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1987-03-14T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1987-03-14T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1987-03-14T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1987-03-14T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1987-10-24T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1987-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1987-10-24T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1987-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-19T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1988-03-19T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1988-03-19T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1988-03-19T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1988-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1988-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1988-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1988-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1988-03-19T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1988-03-19T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1988-03-19T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1988-03-19T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1988-10-29T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1988-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1988-10-29T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1988-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-18T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1989-03-18T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1989-03-18T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1989-03-18T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1989-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1989-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1989-03-18T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1989-03-18T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1989-03-18T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1989-03-18T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1989-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1989-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-17T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1990-03-17T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1990-03-17T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1990-03-17T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1990-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1990-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1990-03-17T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1990-03-17T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1990-03-17T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1990-03-17T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1990-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1990-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1991-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1991-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1991-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1991-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1991-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1991-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1991-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1991-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1991-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1991-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1991-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1991-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1991-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1992-03-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1992-03-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1992-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1992-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1992-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1992-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1992-03-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1992-03-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1992-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1992-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1993-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1993-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1993-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1993-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1993-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1993-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1993-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1993-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1993-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1993-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1993-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1993-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1993-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1994-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1994-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1994-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1994-10-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1994-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1994-10-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1994-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1994-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1994-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1994-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1994-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1994-10-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1994-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1994-10-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1994-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1995-03-25T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1995-03-25T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1995-03-25T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1995-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1995-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1995-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1995-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1995-03-25T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1995-03-25T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1995-03-25T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1995-03-25T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1995-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1995-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1995-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1995-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1996-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1996-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1996-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1996-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1996-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1996-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1996-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1996-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1996-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1996-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1996-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1996-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1996-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1996-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1996-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1997-03-29T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1997-03-29T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1997-03-29T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1997-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1997-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1997-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1997-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1997-03-29T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1997-03-29T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1997-03-29T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1997-03-29T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1997-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1997-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1997-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1997-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1998-03-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1998-03-28T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1998-03-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1998-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1998-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1998-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1998-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1998-03-28T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1998-03-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1998-03-28T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1998-03-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1998-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1998-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1998-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1998-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "1999-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1999-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "1999-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1999-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "1999-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1999-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "1999-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1999-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "1999-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1999-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "1999-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1999-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "1999-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1999-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "1999-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2000-03-25T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2000-03-25T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2000-03-25T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2000-08-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2000-08-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2000-08-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2000-08-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2000-03-25T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2000-03-25T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2000-03-25T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2000-03-25T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2000-08-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2000-08-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2000-08-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2000-08-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2001-03-24T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2001-03-24T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2001-03-24T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2001-10-06T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2001-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2001-10-06T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2001-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2001-03-24T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2001-03-24T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2001-03-24T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2001-03-24T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2001-10-06T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2001-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2001-10-06T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2001-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2002-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2002-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2002-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2002-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2002-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2002-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2002-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2002-03-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2002-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2002-03-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2002-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2002-10-05T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2002-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2002-10-05T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2002-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2003-03-29T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2003-03-29T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2003-03-29T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2003-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2003-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2003-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2003-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2003-03-29T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2003-03-29T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2003-03-29T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2003-03-29T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2003-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2003-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2003-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2003-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2004-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2004-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2004-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2004-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2004-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2004-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2004-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2004-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2004-10-02T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2004-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2004-10-02T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2004-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2005-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2005-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2005-10-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2005-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2005-10-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2005-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2005-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2005-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2005-10-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2005-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2005-10-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2005-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-01T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2006-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2006-04-01T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2006-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2006-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2006-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2006-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2006-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2006-04-01T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2006-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2006-04-01T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2006-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2006-09-30T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2006-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2006-09-30T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2006-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2007-03-24T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2007-03-24T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2007-10-06T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2007-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2007-10-06T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2007-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2007-03-24T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2007-03-24T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2007-10-06T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2007-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2007-10-06T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2007-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-05T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2008-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2008-04-05T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2008-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2008-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2008-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2008-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2008-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2008-04-05T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2008-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2008-04-05T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2008-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2008-10-04T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2008-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2008-10-04T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2008-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-04T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2009-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2009-04-04T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:00:00", "2009-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2009-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "01:59:59", "2009-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2009-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2009-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2009-04-04T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2009-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2009-04-04T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -600, "2009-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2009-10-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -600, "2009-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2009-10-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2009-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-03T15:59:59+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "02:59:59", "2010-04-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2010-04-03T16:00:00+00:00").tz("Antarctica/Macquarie").format("HH:mm:ss"), "03:00:00", "2010-04-03T16:00:00+00:00 should be 03:00:00 MIST");

		t.equal(moment("2010-04-03T15:59:59+00:00").tz("Antarctica/Macquarie").zone(), -660, "2010-04-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2010-04-03T16:00:00+00:00").tz("Antarctica/Macquarie").zone(), -660, "2010-04-03T16:00:00+00:00 should be -660 minutes offset in MIST");

		t.done();
	}
};
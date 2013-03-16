var moment = require("../../moment-timezone");

exports["Australia/Currie"] = {

	"1916" : function (t) {
		t.equal(moment("1916-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1916-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1916-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1916-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1916-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1916-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1916-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1916-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1917-03-24T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:00:00", "1917-03-24T15:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1917-03-24T14:59:59+00:00").tz("Australia/Currie").zone(), -660, "1917-03-24T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1917-03-24T15:00:00+00:00").tz("Australia/Currie").zone(), -600, "1917-03-24T15:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-12-31T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1941-12-31T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1941-12-31T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1941-12-31T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1941-12-31T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1941-12-31T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1941-12-31T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1941-12-31T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-28T14:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1942-03-28T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1942-03-28T15:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:00:00", "1942-03-28T15:00:00+00:00 should be 01:00:00 EST");
		t.equal(moment("1942-09-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1942-09-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1942-09-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1942-09-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1942-03-28T14:59:59+00:00").tz("Australia/Currie").zone(), -660, "1942-03-28T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1942-03-28T15:00:00+00:00").tz("Australia/Currie").zone(), -600, "1942-03-28T15:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1942-09-26T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1942-09-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1942-09-26T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1942-09-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-27T14:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1943-03-27T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1943-03-27T15:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:00:00", "1943-03-27T15:00:00+00:00 should be 01:00:00 EST");
		t.equal(moment("1943-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1943-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1943-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1943-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1943-03-27T14:59:59+00:00").tz("Australia/Currie").zone(), -660, "1943-03-27T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1943-03-27T15:00:00+00:00").tz("Australia/Currie").zone(), -600, "1943-03-27T15:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1943-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1943-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1943-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1943-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-25T14:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1944-03-25T14:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1944-03-25T15:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:00:00", "1944-03-25T15:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1944-03-25T14:59:59+00:00").tz("Australia/Currie").zone(), -660, "1944-03-25T14:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1944-03-25T15:00:00+00:00").tz("Australia/Currie").zone(), -600, "1944-03-25T15:00:00+00:00 should be -600 minutes offset in EST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1971-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1971-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1971-10-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1971-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1971-10-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1971-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1972-02-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1972-02-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1972-10-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1972-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1972-10-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1972-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1972-02-26T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1972-02-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1972-02-26T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1972-02-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1972-10-28T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1972-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1972-10-28T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1972-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-03-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1973-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1973-03-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1973-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1973-10-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1973-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1973-10-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1973-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1973-03-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1973-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1973-03-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1973-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1973-10-27T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1973-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1973-10-27T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1973-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1974-03-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1974-03-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1974-03-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1974-10-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1974-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1974-10-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1974-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1974-03-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1974-03-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1974-03-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1974-03-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1974-10-26T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1974-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1974-10-26T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1974-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1975-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1975-03-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1975-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1975-10-25T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1975-10-25T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1975-10-25T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1975-10-25T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1975-03-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1975-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1975-03-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1975-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1975-10-25T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1975-10-25T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1975-10-25T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1975-10-25T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1976-03-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1976-03-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1976-03-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1976-10-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1976-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1976-10-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1976-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1976-03-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1976-03-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1976-03-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1976-03-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1976-10-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1976-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1976-10-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1976-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1977-03-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1977-03-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1977-03-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1977-10-29T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1977-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1977-10-29T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1977-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1977-03-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1977-03-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1977-03-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1977-03-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1977-10-29T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1977-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1977-10-29T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1977-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1978-03-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1978-03-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1978-03-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1978-10-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1978-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1978-10-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1978-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1978-03-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1978-03-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1978-03-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1978-03-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1978-10-28T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1978-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1978-10-28T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1978-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1979-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1979-03-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1979-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1979-10-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1979-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1979-10-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1979-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1979-03-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1979-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1979-03-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1979-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1979-10-27T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1979-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1979-10-27T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1979-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1980-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1980-03-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1980-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1980-10-25T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1980-10-25T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1980-10-25T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1980-10-25T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1980-03-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1980-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1980-03-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1980-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1980-10-25T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1980-10-25T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1980-10-25T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1980-10-25T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-02-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1981-02-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1981-02-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1981-02-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1981-10-24T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1981-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1981-10-24T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1981-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1981-02-28T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1981-02-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1981-02-28T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1981-02-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1981-10-24T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1981-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1981-10-24T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1981-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1982-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1982-03-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1982-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1982-10-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1982-10-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1982-10-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1982-10-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1982-03-27T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1982-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1982-03-27T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1982-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1982-10-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1982-10-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1982-10-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1982-10-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1983-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1983-03-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1983-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1983-10-29T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1983-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1983-10-29T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1983-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1983-03-26T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1983-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1983-03-26T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1983-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1983-10-29T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1983-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1983-10-29T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1983-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1984-03-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1984-03-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1984-03-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1984-10-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1984-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1984-10-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1984-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1984-03-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1984-03-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1984-03-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1984-03-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1984-10-27T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1984-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1984-10-27T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1984-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1985-03-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1985-03-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1985-03-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1985-10-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1985-10-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1985-10-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1985-10-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1985-03-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1985-03-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1985-03-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1985-03-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1985-10-26T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1985-10-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1985-10-26T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1985-10-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1986-03-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1986-03-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1986-03-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1986-10-18T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1986-10-18T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1986-10-18T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1986-10-18T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1986-03-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1986-03-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1986-03-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1986-03-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1986-10-18T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1986-10-18T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1986-10-18T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1986-10-18T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-14T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1987-03-14T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1987-03-14T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1987-03-14T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1987-10-24T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1987-10-24T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1987-10-24T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1987-10-24T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1987-03-14T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1987-03-14T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1987-03-14T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1987-03-14T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1987-10-24T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1987-10-24T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1987-10-24T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1987-10-24T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-19T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1988-03-19T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1988-03-19T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1988-03-19T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1988-10-29T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1988-10-29T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1988-10-29T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1988-10-29T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1988-03-19T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1988-03-19T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1988-03-19T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1988-03-19T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1988-10-29T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1988-10-29T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1988-10-29T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1988-10-29T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-18T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1989-03-18T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1989-03-18T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1989-03-18T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1989-10-28T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1989-10-28T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1989-03-18T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1989-03-18T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1989-03-18T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1989-03-18T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1989-10-28T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1989-10-28T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1989-10-28T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1989-10-28T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-17T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1990-03-17T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1990-03-17T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1990-03-17T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1990-10-27T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1990-10-27T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1990-03-17T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1990-03-17T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1990-03-17T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1990-03-17T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1990-10-27T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1990-10-27T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1990-10-27T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1991-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1991-03-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1991-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1991-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1991-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1991-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1991-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1991-03-30T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1991-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1991-03-30T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1991-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1991-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1991-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1991-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1992-03-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1992-03-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1992-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1992-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1992-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1992-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1992-03-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1992-03-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1992-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1992-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1992-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1993-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1993-03-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1993-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1993-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1993-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1993-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1993-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1993-03-27T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1993-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1993-03-27T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1993-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1993-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1993-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1993-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1994-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1994-03-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1994-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1994-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1994-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1994-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1994-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1994-03-26T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1994-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1994-03-26T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1994-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1994-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1994-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1994-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1994-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1995-03-25T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1995-03-25T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1995-03-25T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1995-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1995-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1995-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1995-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1995-03-25T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1995-03-25T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1995-03-25T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1995-03-25T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1995-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1995-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1995-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1995-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1996-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1996-03-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1996-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1996-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1996-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1996-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1996-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1996-03-30T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1996-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1996-03-30T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1996-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1996-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1996-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1996-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1996-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1997-03-29T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1997-03-29T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1997-03-29T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1997-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1997-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1997-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1997-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1997-03-29T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1997-03-29T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1997-03-29T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1997-03-29T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1997-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1997-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1997-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1997-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1998-03-28T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1998-03-28T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1998-03-28T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1998-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1998-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1998-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1998-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1998-03-28T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1998-03-28T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1998-03-28T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1998-03-28T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1998-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1998-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1998-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1998-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "1999-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("1999-03-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "1999-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("1999-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "1999-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1999-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "1999-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1999-03-27T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "1999-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("1999-03-27T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "1999-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1999-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "1999-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("1999-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "1999-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2000-03-25T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2000-03-25T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2000-03-25T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2000-08-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2000-08-26T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2000-08-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2000-08-26T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2000-03-25T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2000-03-25T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2000-03-25T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2000-03-25T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2000-08-26T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2000-08-26T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2000-08-26T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2000-08-26T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2001-03-24T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2001-03-24T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2001-03-24T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2001-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2001-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2001-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2001-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2001-03-24T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2001-03-24T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2001-03-24T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2001-03-24T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2001-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2001-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2001-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2001-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2002-03-30T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2002-03-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2002-03-30T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2002-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2002-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2002-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2002-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2002-03-30T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2002-03-30T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2002-03-30T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2002-03-30T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2002-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2002-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2002-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2002-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2003-03-29T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2003-03-29T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2003-03-29T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2003-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2003-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2003-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2003-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2003-03-29T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2003-03-29T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2003-03-29T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2003-03-29T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2003-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2003-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2003-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2003-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2004-03-27T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2004-03-27T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2004-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2004-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2004-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2004-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2004-03-27T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2004-03-27T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2004-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2004-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2004-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2004-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2005-03-26T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2005-03-26T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2005-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2005-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2005-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2005-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2005-03-26T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2005-03-26T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2005-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2005-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2005-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2005-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2006-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2006-04-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2006-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2006-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2006-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2006-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2006-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2006-04-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2006-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2006-04-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2006-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2006-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2006-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2006-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2006-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2007-03-24T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2007-03-24T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2007-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2007-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2007-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2007-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2007-03-24T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2007-03-24T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2007-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2007-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2007-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2007-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2008-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2008-04-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2008-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2008-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2008-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2008-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2008-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2008-04-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2008-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2008-04-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2008-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2008-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2008-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2008-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2008-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2009-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2009-04-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2009-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2009-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2009-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2009-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2009-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2009-04-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2009-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2009-04-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2009-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2009-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2009-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2009-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2009-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2010-04-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2010-04-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2010-04-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2010-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2010-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2010-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2010-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2010-04-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2010-04-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2010-04-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2010-04-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2010-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2010-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2010-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2010-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2011-04-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2011-04-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2011-04-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2011-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2011-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2011-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2011-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2011-04-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2011-04-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2011-04-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2011-04-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2011-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2011-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2011-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2011-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-31T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2012-03-31T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2012-03-31T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2012-03-31T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2012-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2012-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2012-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2012-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2012-03-31T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2012-03-31T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2012-03-31T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2012-03-31T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2012-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2012-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2012-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2012-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2013-04-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2013-04-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2013-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2013-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2013-04-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2013-04-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2013-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2013-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2014-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2014-04-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2014-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2014-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2014-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2014-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2014-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2014-04-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2014-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2014-04-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2014-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2014-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2014-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2014-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2014-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2015-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2015-04-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2015-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2015-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2015-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2015-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2015-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2015-04-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2015-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2015-04-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2015-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2015-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2015-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2015-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2015-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2016-04-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2016-04-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2016-04-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2016-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2016-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2016-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2016-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2016-04-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2016-04-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2016-04-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2016-04-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2016-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2016-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2016-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2016-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2017-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2017-04-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2017-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2017-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2017-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2017-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2017-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2017-04-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2017-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2017-04-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2017-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2017-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2017-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2017-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2017-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2018-03-31T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2018-03-31T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2018-03-31T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2018-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2018-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2018-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2018-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2018-03-31T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2018-03-31T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2018-03-31T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2018-03-31T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2018-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2018-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2018-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2018-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2019-04-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2019-04-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2019-04-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2019-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2019-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2019-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2019-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2019-04-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2019-04-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2019-04-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2019-04-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2019-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2019-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2019-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2019-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2020-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2020-04-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2020-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2020-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2020-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2020-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2020-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2020-04-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2020-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2020-04-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2020-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2020-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2020-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2020-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2020-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2021-04-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2021-04-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2021-04-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2021-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2021-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2021-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2021-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2021-04-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2021-04-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2021-04-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2021-04-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2021-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2021-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2021-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2021-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2022-04-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2022-04-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2022-04-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2022-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2022-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2022-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2022-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2022-04-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2022-04-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2022-04-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2022-04-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2022-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2022-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2022-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2022-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2023-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2023-04-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2023-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2023-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2023-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2023-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2023-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2023-04-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2023-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2023-04-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2023-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2023-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2023-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2023-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2023-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2024-04-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2024-04-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2024-04-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2024-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2024-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2024-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2024-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2024-04-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2024-04-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2024-04-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2024-04-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2024-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2024-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2024-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2024-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2025-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2025-04-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2025-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2025-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2025-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2025-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2025-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2025-04-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2025-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2025-04-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2025-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2025-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2025-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2025-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2025-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2026-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2026-04-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2026-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2026-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2026-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2026-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2026-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2026-04-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2026-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2026-04-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2026-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2026-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2026-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2026-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2026-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2027-04-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2027-04-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2027-04-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2027-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2027-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2027-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2027-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2027-04-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2027-04-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2027-04-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2027-04-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2027-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2027-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2027-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2027-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2028-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2028-04-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2028-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2028-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2028-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2028-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2028-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2028-04-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2028-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2028-04-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2028-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2028-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2028-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2028-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2028-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2029-03-31T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2029-03-31T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2029-03-31T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2029-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2029-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2029-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2029-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2029-03-31T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2029-03-31T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2029-03-31T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2029-03-31T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2029-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2029-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2029-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2029-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2030-04-06T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2030-04-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2030-04-06T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2030-10-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2030-10-05T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2030-10-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2030-10-05T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2030-04-06T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2030-04-06T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2030-04-06T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2030-04-06T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2030-10-05T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2030-10-05T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2030-10-05T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2030-10-05T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2031-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2031-04-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2031-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2031-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2031-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2031-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2031-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2031-04-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2031-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2031-04-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2031-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2031-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2031-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2031-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2031-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2032-04-03T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2032-04-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2032-04-03T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2032-10-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2032-10-02T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2032-10-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2032-10-02T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2032-04-03T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2032-04-03T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2032-04-03T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2032-04-03T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2032-10-02T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2032-10-02T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2032-10-02T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2032-10-02T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2033-04-02T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2033-04-02T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2033-04-02T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2033-10-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2033-10-01T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2033-10-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2033-10-01T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2033-04-02T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2033-04-02T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2033-04-02T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2033-04-02T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2033-10-01T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2033-10-01T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2033-10-01T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2033-10-01T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2034-04-01T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2034-04-01T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2034-04-01T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2034-09-30T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2034-09-30T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2034-09-30T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2034-09-30T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2034-04-01T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2034-04-01T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2034-04-01T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2034-04-01T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2034-09-30T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2034-09-30T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2034-09-30T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2034-09-30T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2035-03-31T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2035-03-31T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2035-03-31T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2035-10-06T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2035-10-06T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2035-10-06T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2035-10-06T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2035-03-31T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2035-03-31T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2035-03-31T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2035-03-31T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2035-10-06T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2035-10-06T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2035-10-06T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2035-10-06T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2036-04-05T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2036-04-05T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2036-04-05T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2036-10-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2036-10-04T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2036-10-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2036-10-04T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2036-04-05T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2036-04-05T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2036-04-05T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2036-04-05T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2036-10-04T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2036-10-04T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2036-10-04T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2036-10-04T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:59:59", "2037-04-04T15:59:59+00:00 should be 02:59:59 EST");
		t.equal(moment("2037-04-04T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "02:00:00", "2037-04-04T16:00:00+00:00 should be 02:00:00 EST");
		t.equal(moment("2037-10-03T15:59:59+00:00").tz("Australia/Currie").format("HH:mm:ss"), "01:59:59", "2037-10-03T15:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2037-10-03T16:00:00+00:00").tz("Australia/Currie").format("HH:mm:ss"), "03:00:00", "2037-10-03T16:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("2037-04-04T15:59:59+00:00").tz("Australia/Currie").zone(), -660, "2037-04-04T15:59:59+00:00 should be -660 minutes offset in EST");
		t.equal(moment("2037-04-04T16:00:00+00:00").tz("Australia/Currie").zone(), -600, "2037-04-04T16:00:00+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2037-10-03T15:59:59+00:00").tz("Australia/Currie").zone(), -600, "2037-10-03T15:59:59+00:00 should be -600 minutes offset in EST");
		t.equal(moment("2037-10-03T16:00:00+00:00").tz("Australia/Currie").zone(), -660, "2037-10-03T16:00:00+00:00 should be -660 minutes offset in EST");

		t.done();
	}
};
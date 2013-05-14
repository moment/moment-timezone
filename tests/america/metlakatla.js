var moment = require("../../index");

exports["America/Metlakatla"] = {

	"1942" : function (t) {
		t.equal(moment("1942-02-09T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1942-02-09T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1942-02-09T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1942-02-09T10:00:00+00:00 should be 03:00:00 PWT");

		t.equal(moment("1942-02-09T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1942-02-09T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1942-02-09T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1942-02-09T10:00:00+00:00 should be 420 minutes offset in PWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "15:59:59", "1945-08-14T22:59:59+00:00 should be 15:59:59 PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "16:00:00", "1945-08-14T23:00:00+00:00 should be 16:00:00 PPT");
		t.equal(moment("1945-09-30T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1945-09-30T08:59:59+00:00 should be 01:59:59 PPT");
		t.equal(moment("1945-09-30T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1945-09-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1945-08-14T22:59:59+00:00 should be 420 minutes offset in PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1945-08-14T23:00:00+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-09-30T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1945-09-30T08:59:59+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-09-30T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1945-09-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1969-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1969-04-27T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1969-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1969-10-26T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1969-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1969-10-26T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1969-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1969-04-27T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1969-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1969-04-27T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1969-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1969-10-26T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1969-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1969-10-26T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1969-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1970-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1970-04-26T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1970-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1970-10-25T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1970-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1970-10-25T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1970-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1970-04-26T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1970-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1970-04-26T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1970-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1970-10-25T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1970-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1970-10-25T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1970-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1971-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1971-04-25T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1971-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1971-10-31T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1971-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1971-10-31T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1971-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1971-04-25T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1971-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1971-04-25T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1971-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1971-10-31T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1971-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1971-10-31T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1971-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1972-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1972-04-30T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1972-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1972-10-29T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1972-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1972-10-29T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1972-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1972-04-30T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1972-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1972-04-30T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1972-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1972-10-29T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1972-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1972-10-29T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1972-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1973-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1973-04-29T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1973-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1973-10-28T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1973-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1973-10-28T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1973-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1973-04-29T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1973-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1973-04-29T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1973-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1973-10-28T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1973-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1973-10-28T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1973-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-06T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1974-01-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1974-01-06T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1974-01-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1974-10-27T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1974-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1974-10-27T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1974-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1974-01-06T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1974-01-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1974-01-06T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1974-01-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1974-10-27T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1974-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1974-10-27T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1974-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-23T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1975-02-23T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1975-02-23T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1975-02-23T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1975-10-26T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1975-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1975-10-26T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1975-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1975-02-23T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1975-02-23T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1975-02-23T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1975-02-23T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1975-10-26T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1975-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1975-10-26T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1975-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1976-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1976-04-25T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1976-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1976-10-31T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1976-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1976-10-31T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1976-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1976-04-25T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1976-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1976-04-25T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1976-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1976-10-31T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1976-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1976-10-31T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1976-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1977-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1977-04-24T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1977-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1977-10-30T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1977-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1977-10-30T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1977-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1977-04-24T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1977-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1977-04-24T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1977-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1977-10-30T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1977-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1977-10-30T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1977-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1978-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1978-04-30T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1978-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1978-10-29T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1978-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1978-10-29T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1978-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1978-04-30T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1978-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1978-04-30T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1978-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1978-10-29T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1978-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1978-10-29T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1978-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1979-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1979-04-29T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1979-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1979-10-28T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1979-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1979-10-28T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1979-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1979-04-29T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1979-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1979-04-29T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1979-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1979-10-28T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1979-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1979-10-28T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1979-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1980-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1980-04-27T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1980-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1980-10-26T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1980-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1980-10-26T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1980-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1980-04-27T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1980-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1980-04-27T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1980-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1980-10-26T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1980-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1980-10-26T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1980-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1981-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1981-04-26T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1981-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1981-10-25T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1981-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1981-10-25T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1981-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1981-04-26T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1981-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1981-04-26T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1981-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1981-10-25T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1981-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1981-10-25T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1981-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1982-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1982-04-25T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1982-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1982-10-31T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1982-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1982-10-31T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1982-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1982-04-25T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1982-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1982-04-25T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1982-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1982-10-31T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1982-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1982-10-31T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1982-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T09:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1983-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1983-04-24T10:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "03:00:00", "1983-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1983-10-30T08:59:59+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:59:59", "1983-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1983-10-30T09:00:00+00:00").tz("America/Metlakatla").format("HH:mm:ss"), "01:00:00", "1983-10-30T09:00:00+00:00 should be 01:00:00 MeST");

		t.equal(moment("1983-04-24T09:59:59+00:00").tz("America/Metlakatla").zone(), 480, "1983-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1983-04-24T10:00:00+00:00").tz("America/Metlakatla").zone(), 420, "1983-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1983-10-30T08:59:59+00:00").tz("America/Metlakatla").zone(), 420, "1983-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1983-10-30T09:00:00+00:00").tz("America/Metlakatla").zone(), 480, "1983-10-30T09:00:00+00:00 should be 480 minutes offset in MeST");

		t.done();
	}
};
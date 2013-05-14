var moment = require("../../index");

exports["America/Adak"] = {

	"1942" : function (t) {
		t.equal(moment("1942-02-09T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1942-02-09T12:59:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1942-02-09T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1942-02-09T13:00:00+00:00 should be 03:00:00 NWT");

		t.equal(moment("1942-02-09T12:59:59+00:00").tz("America/Adak").zone(), 660, "1942-02-09T12:59:59+00:00 should be 660 minutes offset in NST");
		t.equal(moment("1942-02-09T13:00:00+00:00").tz("America/Adak").zone(), 600, "1942-02-09T13:00:00+00:00 should be 600 minutes offset in NWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "12:59:59", "1945-08-14T22:59:59+00:00 should be 12:59:59 NWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "13:00:00", "1945-08-14T23:00:00+00:00 should be 13:00:00 NPT");
		t.equal(moment("1945-09-30T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1945-09-30T11:59:59+00:00 should be 01:59:59 NPT");
		t.equal(moment("1945-09-30T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1945-09-30T12:00:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Adak").zone(), 600, "1945-08-14T22:59:59+00:00 should be 600 minutes offset in NWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Adak").zone(), 600, "1945-08-14T23:00:00+00:00 should be 600 minutes offset in NPT");
		t.equal(moment("1945-09-30T11:59:59+00:00").tz("America/Adak").zone(), 600, "1945-09-30T11:59:59+00:00 should be 600 minutes offset in NPT");
		t.equal(moment("1945-09-30T12:00:00+00:00").tz("America/Adak").zone(), 660, "1945-09-30T12:00:00+00:00 should be 660 minutes offset in NST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "23:59:59", "1967-04-01T10:59:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "00:00:00", "1967-04-01T11:00:00+00:00 should be 00:00:00 BST");

		t.equal(moment("1967-04-01T10:59:59+00:00").tz("America/Adak").zone(), 660, "1967-04-01T10:59:59+00:00 should be 660 minutes offset in NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("America/Adak").zone(), 660, "1967-04-01T11:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1969-04-27T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1969-04-27T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1969-04-27T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1969-10-26T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1969-10-26T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1969-10-26T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1969-10-26T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1969-04-27T12:59:59+00:00").tz("America/Adak").zone(), 660, "1969-04-27T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1969-04-27T13:00:00+00:00").tz("America/Adak").zone(), 600, "1969-04-27T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1969-10-26T11:59:59+00:00").tz("America/Adak").zone(), 600, "1969-10-26T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1969-10-26T12:00:00+00:00").tz("America/Adak").zone(), 660, "1969-10-26T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1970-04-26T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1970-04-26T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1970-04-26T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1970-10-25T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1970-10-25T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1970-10-25T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1970-10-25T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1970-04-26T12:59:59+00:00").tz("America/Adak").zone(), 660, "1970-04-26T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1970-04-26T13:00:00+00:00").tz("America/Adak").zone(), 600, "1970-04-26T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1970-10-25T11:59:59+00:00").tz("America/Adak").zone(), 600, "1970-10-25T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1970-10-25T12:00:00+00:00").tz("America/Adak").zone(), 660, "1970-10-25T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1971-04-25T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1971-04-25T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1971-04-25T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1971-10-31T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1971-10-31T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1971-10-31T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1971-10-31T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1971-04-25T12:59:59+00:00").tz("America/Adak").zone(), 660, "1971-04-25T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1971-04-25T13:00:00+00:00").tz("America/Adak").zone(), 600, "1971-04-25T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1971-10-31T11:59:59+00:00").tz("America/Adak").zone(), 600, "1971-10-31T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1971-10-31T12:00:00+00:00").tz("America/Adak").zone(), 660, "1971-10-31T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1972-04-30T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1972-04-30T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1972-04-30T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1972-10-29T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1972-10-29T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1972-10-29T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1972-10-29T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1972-04-30T12:59:59+00:00").tz("America/Adak").zone(), 660, "1972-04-30T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1972-04-30T13:00:00+00:00").tz("America/Adak").zone(), 600, "1972-04-30T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1972-10-29T11:59:59+00:00").tz("America/Adak").zone(), 600, "1972-10-29T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1972-10-29T12:00:00+00:00").tz("America/Adak").zone(), 660, "1972-10-29T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1973-04-29T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1973-04-29T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1973-04-29T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1973-10-28T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1973-10-28T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1973-10-28T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1973-10-28T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1973-04-29T12:59:59+00:00").tz("America/Adak").zone(), 660, "1973-04-29T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1973-04-29T13:00:00+00:00").tz("America/Adak").zone(), 600, "1973-04-29T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1973-10-28T11:59:59+00:00").tz("America/Adak").zone(), 600, "1973-10-28T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1973-10-28T12:00:00+00:00").tz("America/Adak").zone(), 660, "1973-10-28T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-06T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1974-01-06T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1974-01-06T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1974-01-06T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1974-10-27T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1974-10-27T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1974-10-27T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1974-10-27T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1974-01-06T12:59:59+00:00").tz("America/Adak").zone(), 660, "1974-01-06T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1974-01-06T13:00:00+00:00").tz("America/Adak").zone(), 600, "1974-01-06T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1974-10-27T11:59:59+00:00").tz("America/Adak").zone(), 600, "1974-10-27T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1974-10-27T12:00:00+00:00").tz("America/Adak").zone(), 660, "1974-10-27T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-23T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1975-02-23T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1975-02-23T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1975-02-23T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1975-10-26T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1975-10-26T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1975-10-26T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1975-10-26T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1975-02-23T12:59:59+00:00").tz("America/Adak").zone(), 660, "1975-02-23T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1975-02-23T13:00:00+00:00").tz("America/Adak").zone(), 600, "1975-02-23T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1975-10-26T11:59:59+00:00").tz("America/Adak").zone(), 600, "1975-10-26T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1975-10-26T12:00:00+00:00").tz("America/Adak").zone(), 660, "1975-10-26T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1976-04-25T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1976-04-25T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1976-04-25T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1976-10-31T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1976-10-31T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1976-10-31T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1976-10-31T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1976-04-25T12:59:59+00:00").tz("America/Adak").zone(), 660, "1976-04-25T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1976-04-25T13:00:00+00:00").tz("America/Adak").zone(), 600, "1976-04-25T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1976-10-31T11:59:59+00:00").tz("America/Adak").zone(), 600, "1976-10-31T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1976-10-31T12:00:00+00:00").tz("America/Adak").zone(), 660, "1976-10-31T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1977-04-24T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1977-04-24T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1977-04-24T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1977-10-30T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1977-10-30T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1977-10-30T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1977-10-30T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1977-04-24T12:59:59+00:00").tz("America/Adak").zone(), 660, "1977-04-24T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1977-04-24T13:00:00+00:00").tz("America/Adak").zone(), 600, "1977-04-24T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1977-10-30T11:59:59+00:00").tz("America/Adak").zone(), 600, "1977-10-30T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1977-10-30T12:00:00+00:00").tz("America/Adak").zone(), 660, "1977-10-30T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1978-04-30T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1978-04-30T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1978-04-30T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1978-10-29T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1978-10-29T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1978-10-29T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1978-10-29T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1978-04-30T12:59:59+00:00").tz("America/Adak").zone(), 660, "1978-04-30T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1978-04-30T13:00:00+00:00").tz("America/Adak").zone(), 600, "1978-04-30T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1978-10-29T11:59:59+00:00").tz("America/Adak").zone(), 600, "1978-10-29T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1978-10-29T12:00:00+00:00").tz("America/Adak").zone(), 660, "1978-10-29T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1979-04-29T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1979-04-29T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1979-04-29T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1979-10-28T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1979-10-28T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1979-10-28T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1979-10-28T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1979-04-29T12:59:59+00:00").tz("America/Adak").zone(), 660, "1979-04-29T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1979-04-29T13:00:00+00:00").tz("America/Adak").zone(), 600, "1979-04-29T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1979-10-28T11:59:59+00:00").tz("America/Adak").zone(), 600, "1979-10-28T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1979-10-28T12:00:00+00:00").tz("America/Adak").zone(), 660, "1979-10-28T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1980-04-27T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1980-04-27T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1980-04-27T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1980-10-26T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1980-10-26T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1980-10-26T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1980-10-26T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1980-04-27T12:59:59+00:00").tz("America/Adak").zone(), 660, "1980-04-27T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1980-04-27T13:00:00+00:00").tz("America/Adak").zone(), 600, "1980-04-27T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1980-10-26T11:59:59+00:00").tz("America/Adak").zone(), 600, "1980-10-26T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1980-10-26T12:00:00+00:00").tz("America/Adak").zone(), 660, "1980-10-26T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1981-04-26T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1981-04-26T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1981-04-26T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1981-10-25T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1981-10-25T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1981-10-25T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1981-10-25T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1981-04-26T12:59:59+00:00").tz("America/Adak").zone(), 660, "1981-04-26T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1981-04-26T13:00:00+00:00").tz("America/Adak").zone(), 600, "1981-04-26T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1981-10-25T11:59:59+00:00").tz("America/Adak").zone(), 600, "1981-10-25T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1981-10-25T12:00:00+00:00").tz("America/Adak").zone(), 660, "1981-10-25T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1982-04-25T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1982-04-25T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1982-04-25T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1982-10-31T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1982-10-31T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1982-10-31T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1982-10-31T12:00:00+00:00 should be 01:00:00 BST");

		t.equal(moment("1982-04-25T12:59:59+00:00").tz("America/Adak").zone(), 660, "1982-04-25T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1982-04-25T13:00:00+00:00").tz("America/Adak").zone(), 600, "1982-04-25T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1982-10-31T11:59:59+00:00").tz("America/Adak").zone(), 600, "1982-10-31T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1982-10-31T12:00:00+00:00").tz("America/Adak").zone(), 660, "1982-10-31T12:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T12:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1983-04-24T12:59:59+00:00 should be 01:59:59 BST");
		t.equal(moment("1983-04-24T13:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1983-04-24T13:00:00+00:00 should be 03:00:00 BDT");
		t.equal(moment("1983-10-30T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1983-10-30T11:59:59+00:00 should be 01:59:59 BDT");
		t.equal(moment("1983-10-30T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "02:00:00", "1983-10-30T12:00:00+00:00 should be 02:00:00 AHST");
		t.equal(moment("1983-11-30T09:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "23:59:59", "1983-11-30T09:59:59+00:00 should be 23:59:59 AHST");
		t.equal(moment("1983-11-30T10:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "00:00:00", "1983-11-30T10:00:00+00:00 should be 00:00:00 HAST");

		t.equal(moment("1983-04-24T12:59:59+00:00").tz("America/Adak").zone(), 660, "1983-04-24T12:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1983-04-24T13:00:00+00:00").tz("America/Adak").zone(), 600, "1983-04-24T13:00:00+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1983-10-30T11:59:59+00:00").tz("America/Adak").zone(), 600, "1983-10-30T11:59:59+00:00 should be 600 minutes offset in BDT");
		t.equal(moment("1983-10-30T12:00:00+00:00").tz("America/Adak").zone(), 600, "1983-10-30T12:00:00+00:00 should be 600 minutes offset in AHST");
		t.equal(moment("1983-11-30T09:59:59+00:00").tz("America/Adak").zone(), 600, "1983-11-30T09:59:59+00:00 should be 600 minutes offset in AHST");
		t.equal(moment("1983-11-30T10:00:00+00:00").tz("America/Adak").zone(), 600, "1983-11-30T10:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1984-04-29T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1984-04-29T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1984-04-29T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1984-10-28T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1984-10-28T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1984-10-28T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1984-10-28T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1984-04-29T11:59:59+00:00").tz("America/Adak").zone(), 600, "1984-04-29T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1984-04-29T12:00:00+00:00").tz("America/Adak").zone(), 540, "1984-04-29T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1984-10-28T10:59:59+00:00").tz("America/Adak").zone(), 540, "1984-10-28T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1984-10-28T11:00:00+00:00").tz("America/Adak").zone(), 600, "1984-10-28T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1985-04-28T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1985-04-28T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1985-04-28T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1985-10-27T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1985-10-27T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1985-10-27T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1985-10-27T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1985-04-28T11:59:59+00:00").tz("America/Adak").zone(), 600, "1985-04-28T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1985-04-28T12:00:00+00:00").tz("America/Adak").zone(), 540, "1985-04-28T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1985-10-27T10:59:59+00:00").tz("America/Adak").zone(), 540, "1985-10-27T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1985-10-27T11:00:00+00:00").tz("America/Adak").zone(), 600, "1985-10-27T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1986-04-27T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1986-04-27T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1986-04-27T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1986-10-26T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1986-10-26T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1986-10-26T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1986-10-26T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1986-04-27T11:59:59+00:00").tz("America/Adak").zone(), 600, "1986-04-27T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1986-04-27T12:00:00+00:00").tz("America/Adak").zone(), 540, "1986-04-27T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1986-10-26T10:59:59+00:00").tz("America/Adak").zone(), 540, "1986-10-26T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1986-10-26T11:00:00+00:00").tz("America/Adak").zone(), 600, "1986-10-26T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1987-04-05T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1987-04-05T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1987-04-05T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1987-10-25T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1987-10-25T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1987-10-25T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1987-10-25T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1987-04-05T11:59:59+00:00").tz("America/Adak").zone(), 600, "1987-04-05T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1987-04-05T12:00:00+00:00").tz("America/Adak").zone(), 540, "1987-04-05T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1987-10-25T10:59:59+00:00").tz("America/Adak").zone(), 540, "1987-10-25T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1987-10-25T11:00:00+00:00").tz("America/Adak").zone(), 600, "1987-10-25T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1988-04-03T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1988-04-03T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1988-04-03T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1988-10-30T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1988-10-30T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1988-10-30T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1988-10-30T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1988-04-03T11:59:59+00:00").tz("America/Adak").zone(), 600, "1988-04-03T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1988-04-03T12:00:00+00:00").tz("America/Adak").zone(), 540, "1988-04-03T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1988-10-30T10:59:59+00:00").tz("America/Adak").zone(), 540, "1988-10-30T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1988-10-30T11:00:00+00:00").tz("America/Adak").zone(), 600, "1988-10-30T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1989-04-02T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1989-04-02T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1989-04-02T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1989-10-29T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1989-10-29T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1989-10-29T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1989-10-29T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1989-04-02T11:59:59+00:00").tz("America/Adak").zone(), 600, "1989-04-02T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1989-04-02T12:00:00+00:00").tz("America/Adak").zone(), 540, "1989-04-02T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1989-10-29T10:59:59+00:00").tz("America/Adak").zone(), 540, "1989-10-29T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1989-10-29T11:00:00+00:00").tz("America/Adak").zone(), 600, "1989-10-29T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1990-04-01T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1990-04-01T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1990-04-01T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1990-10-28T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1990-10-28T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1990-10-28T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1990-10-28T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1990-04-01T11:59:59+00:00").tz("America/Adak").zone(), 600, "1990-04-01T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1990-04-01T12:00:00+00:00").tz("America/Adak").zone(), 540, "1990-04-01T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1990-10-28T10:59:59+00:00").tz("America/Adak").zone(), 540, "1990-10-28T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1990-10-28T11:00:00+00:00").tz("America/Adak").zone(), 600, "1990-10-28T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1991-04-07T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1991-04-07T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1991-04-07T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1991-10-27T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1991-10-27T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1991-10-27T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1991-10-27T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1991-04-07T11:59:59+00:00").tz("America/Adak").zone(), 600, "1991-04-07T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1991-04-07T12:00:00+00:00").tz("America/Adak").zone(), 540, "1991-04-07T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1991-10-27T10:59:59+00:00").tz("America/Adak").zone(), 540, "1991-10-27T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1991-10-27T11:00:00+00:00").tz("America/Adak").zone(), 600, "1991-10-27T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1992-04-05T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1992-04-05T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1992-04-05T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1992-10-25T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1992-10-25T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1992-10-25T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1992-10-25T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1992-04-05T11:59:59+00:00").tz("America/Adak").zone(), 600, "1992-04-05T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1992-04-05T12:00:00+00:00").tz("America/Adak").zone(), 540, "1992-04-05T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1992-10-25T10:59:59+00:00").tz("America/Adak").zone(), 540, "1992-10-25T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1992-10-25T11:00:00+00:00").tz("America/Adak").zone(), 600, "1992-10-25T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1993-04-04T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1993-04-04T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1993-04-04T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1993-10-31T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1993-10-31T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1993-10-31T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1993-10-31T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1993-04-04T11:59:59+00:00").tz("America/Adak").zone(), 600, "1993-04-04T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1993-04-04T12:00:00+00:00").tz("America/Adak").zone(), 540, "1993-04-04T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1993-10-31T10:59:59+00:00").tz("America/Adak").zone(), 540, "1993-10-31T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1993-10-31T11:00:00+00:00").tz("America/Adak").zone(), 600, "1993-10-31T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1994-04-03T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1994-04-03T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1994-04-03T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1994-10-30T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1994-10-30T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1994-10-30T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1994-10-30T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1994-04-03T11:59:59+00:00").tz("America/Adak").zone(), 600, "1994-04-03T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1994-04-03T12:00:00+00:00").tz("America/Adak").zone(), 540, "1994-04-03T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1994-10-30T10:59:59+00:00").tz("America/Adak").zone(), 540, "1994-10-30T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1994-10-30T11:00:00+00:00").tz("America/Adak").zone(), 600, "1994-10-30T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1995-04-02T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1995-04-02T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1995-04-02T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1995-10-29T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1995-10-29T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1995-10-29T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1995-10-29T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1995-04-02T11:59:59+00:00").tz("America/Adak").zone(), 600, "1995-04-02T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1995-04-02T12:00:00+00:00").tz("America/Adak").zone(), 540, "1995-04-02T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1995-10-29T10:59:59+00:00").tz("America/Adak").zone(), 540, "1995-10-29T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1995-10-29T11:00:00+00:00").tz("America/Adak").zone(), 600, "1995-10-29T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1996-04-07T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1996-04-07T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1996-04-07T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1996-10-27T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1996-10-27T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1996-10-27T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1996-10-27T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1996-04-07T11:59:59+00:00").tz("America/Adak").zone(), 600, "1996-04-07T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1996-04-07T12:00:00+00:00").tz("America/Adak").zone(), 540, "1996-04-07T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1996-10-27T10:59:59+00:00").tz("America/Adak").zone(), 540, "1996-10-27T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1996-10-27T11:00:00+00:00").tz("America/Adak").zone(), 600, "1996-10-27T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1997-04-06T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1997-04-06T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1997-04-06T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1997-10-26T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1997-10-26T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1997-10-26T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1997-10-26T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1997-04-06T11:59:59+00:00").tz("America/Adak").zone(), 600, "1997-04-06T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1997-04-06T12:00:00+00:00").tz("America/Adak").zone(), 540, "1997-04-06T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1997-10-26T10:59:59+00:00").tz("America/Adak").zone(), 540, "1997-10-26T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1997-10-26T11:00:00+00:00").tz("America/Adak").zone(), 600, "1997-10-26T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1998-04-05T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1998-04-05T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1998-04-05T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1998-10-25T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1998-10-25T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1998-10-25T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1998-10-25T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1998-04-05T11:59:59+00:00").tz("America/Adak").zone(), 600, "1998-04-05T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1998-04-05T12:00:00+00:00").tz("America/Adak").zone(), 540, "1998-04-05T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1998-10-25T10:59:59+00:00").tz("America/Adak").zone(), 540, "1998-10-25T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1998-10-25T11:00:00+00:00").tz("America/Adak").zone(), 600, "1998-10-25T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1999-04-04T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("1999-04-04T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "1999-04-04T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("1999-10-31T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "1999-10-31T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("1999-10-31T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "1999-10-31T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("1999-04-04T11:59:59+00:00").tz("America/Adak").zone(), 600, "1999-04-04T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("1999-04-04T12:00:00+00:00").tz("America/Adak").zone(), 540, "1999-04-04T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1999-10-31T10:59:59+00:00").tz("America/Adak").zone(), 540, "1999-10-31T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("1999-10-31T11:00:00+00:00").tz("America/Adak").zone(), 600, "1999-10-31T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2000-04-02T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2000-04-02T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2000-04-02T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2000-10-29T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2000-10-29T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2000-10-29T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2000-10-29T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2000-04-02T11:59:59+00:00").tz("America/Adak").zone(), 600, "2000-04-02T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2000-04-02T12:00:00+00:00").tz("America/Adak").zone(), 540, "2000-04-02T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2000-10-29T10:59:59+00:00").tz("America/Adak").zone(), 540, "2000-10-29T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2000-10-29T11:00:00+00:00").tz("America/Adak").zone(), 600, "2000-10-29T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2001-04-01T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2001-04-01T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2001-04-01T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2001-10-28T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2001-10-28T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2001-10-28T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2001-10-28T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2001-04-01T11:59:59+00:00").tz("America/Adak").zone(), 600, "2001-04-01T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2001-04-01T12:00:00+00:00").tz("America/Adak").zone(), 540, "2001-04-01T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2001-10-28T10:59:59+00:00").tz("America/Adak").zone(), 540, "2001-10-28T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2001-10-28T11:00:00+00:00").tz("America/Adak").zone(), 600, "2001-10-28T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2002-04-07T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2002-04-07T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2002-04-07T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2002-10-27T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2002-10-27T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2002-10-27T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2002-10-27T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2002-04-07T11:59:59+00:00").tz("America/Adak").zone(), 600, "2002-04-07T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2002-04-07T12:00:00+00:00").tz("America/Adak").zone(), 540, "2002-04-07T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2002-10-27T10:59:59+00:00").tz("America/Adak").zone(), 540, "2002-10-27T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2002-10-27T11:00:00+00:00").tz("America/Adak").zone(), 600, "2002-10-27T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2003-04-06T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2003-04-06T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2003-04-06T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2003-10-26T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2003-10-26T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2003-10-26T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2003-10-26T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2003-04-06T11:59:59+00:00").tz("America/Adak").zone(), 600, "2003-04-06T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2003-04-06T12:00:00+00:00").tz("America/Adak").zone(), 540, "2003-04-06T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2003-10-26T10:59:59+00:00").tz("America/Adak").zone(), 540, "2003-10-26T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2003-10-26T11:00:00+00:00").tz("America/Adak").zone(), 600, "2003-10-26T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2004-04-04T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2004-04-04T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2004-04-04T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2004-10-31T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2004-10-31T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2004-10-31T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2004-10-31T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2004-04-04T11:59:59+00:00").tz("America/Adak").zone(), 600, "2004-04-04T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2004-04-04T12:00:00+00:00").tz("America/Adak").zone(), 540, "2004-04-04T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2004-10-31T10:59:59+00:00").tz("America/Adak").zone(), 540, "2004-10-31T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2004-10-31T11:00:00+00:00").tz("America/Adak").zone(), 600, "2004-10-31T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2005-04-03T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2005-04-03T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2005-04-03T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2005-10-30T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2005-10-30T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2005-10-30T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2005-10-30T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2005-04-03T11:59:59+00:00").tz("America/Adak").zone(), 600, "2005-04-03T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2005-04-03T12:00:00+00:00").tz("America/Adak").zone(), 540, "2005-04-03T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2005-10-30T10:59:59+00:00").tz("America/Adak").zone(), 540, "2005-10-30T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2005-10-30T11:00:00+00:00").tz("America/Adak").zone(), 600, "2005-10-30T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2006-04-02T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2006-04-02T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2006-04-02T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2006-10-29T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2006-10-29T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2006-10-29T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2006-10-29T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2006-04-02T11:59:59+00:00").tz("America/Adak").zone(), 600, "2006-04-02T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2006-04-02T12:00:00+00:00").tz("America/Adak").zone(), 540, "2006-04-02T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2006-10-29T10:59:59+00:00").tz("America/Adak").zone(), 540, "2006-10-29T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2006-10-29T11:00:00+00:00").tz("America/Adak").zone(), 600, "2006-10-29T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2007-03-11T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2007-03-11T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2007-03-11T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2007-11-04T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2007-11-04T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2007-11-04T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2007-11-04T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2007-03-11T11:59:59+00:00").tz("America/Adak").zone(), 600, "2007-03-11T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2007-03-11T12:00:00+00:00").tz("America/Adak").zone(), 540, "2007-03-11T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2007-11-04T10:59:59+00:00").tz("America/Adak").zone(), 540, "2007-11-04T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2007-11-04T11:00:00+00:00").tz("America/Adak").zone(), 600, "2007-11-04T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2008-03-09T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2008-03-09T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2008-03-09T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2008-11-02T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2008-11-02T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2008-11-02T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2008-11-02T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2008-03-09T11:59:59+00:00").tz("America/Adak").zone(), 600, "2008-03-09T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2008-03-09T12:00:00+00:00").tz("America/Adak").zone(), 540, "2008-03-09T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2008-11-02T10:59:59+00:00").tz("America/Adak").zone(), 540, "2008-11-02T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2008-11-02T11:00:00+00:00").tz("America/Adak").zone(), 600, "2008-11-02T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2009-03-08T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2009-03-08T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2009-03-08T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2009-11-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2009-11-01T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2009-11-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2009-11-01T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2009-03-08T11:59:59+00:00").tz("America/Adak").zone(), 600, "2009-03-08T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2009-03-08T12:00:00+00:00").tz("America/Adak").zone(), 540, "2009-03-08T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2009-11-01T10:59:59+00:00").tz("America/Adak").zone(), 540, "2009-11-01T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2009-11-01T11:00:00+00:00").tz("America/Adak").zone(), 600, "2009-11-01T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2010-03-14T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2010-03-14T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2010-03-14T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2010-11-07T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2010-11-07T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2010-11-07T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2010-11-07T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2010-03-14T11:59:59+00:00").tz("America/Adak").zone(), 600, "2010-03-14T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2010-03-14T12:00:00+00:00").tz("America/Adak").zone(), 540, "2010-03-14T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2010-11-07T10:59:59+00:00").tz("America/Adak").zone(), 540, "2010-11-07T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2010-11-07T11:00:00+00:00").tz("America/Adak").zone(), 600, "2010-11-07T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2011-03-13T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2011-03-13T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2011-03-13T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2011-11-06T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2011-11-06T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2011-11-06T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2011-11-06T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2011-03-13T11:59:59+00:00").tz("America/Adak").zone(), 600, "2011-03-13T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2011-03-13T12:00:00+00:00").tz("America/Adak").zone(), 540, "2011-03-13T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2011-11-06T10:59:59+00:00").tz("America/Adak").zone(), 540, "2011-11-06T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2011-11-06T11:00:00+00:00").tz("America/Adak").zone(), 600, "2011-11-06T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2012-03-11T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2012-03-11T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2012-03-11T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2012-11-04T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2012-11-04T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2012-11-04T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2012-11-04T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2012-03-11T11:59:59+00:00").tz("America/Adak").zone(), 600, "2012-03-11T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2012-03-11T12:00:00+00:00").tz("America/Adak").zone(), 540, "2012-03-11T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2012-11-04T10:59:59+00:00").tz("America/Adak").zone(), 540, "2012-11-04T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2012-11-04T11:00:00+00:00").tz("America/Adak").zone(), 600, "2012-11-04T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2013-03-10T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2013-03-10T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2013-03-10T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2013-11-03T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2013-11-03T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2013-11-03T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2013-11-03T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2013-03-10T11:59:59+00:00").tz("America/Adak").zone(), 600, "2013-03-10T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2013-03-10T12:00:00+00:00").tz("America/Adak").zone(), 540, "2013-03-10T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2013-11-03T10:59:59+00:00").tz("America/Adak").zone(), 540, "2013-11-03T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2013-11-03T11:00:00+00:00").tz("America/Adak").zone(), 600, "2013-11-03T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2014-03-09T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2014-03-09T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2014-03-09T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2014-11-02T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2014-11-02T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2014-11-02T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2014-11-02T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2014-03-09T11:59:59+00:00").tz("America/Adak").zone(), 600, "2014-03-09T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2014-03-09T12:00:00+00:00").tz("America/Adak").zone(), 540, "2014-03-09T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2014-11-02T10:59:59+00:00").tz("America/Adak").zone(), 540, "2014-11-02T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2014-11-02T11:00:00+00:00").tz("America/Adak").zone(), 600, "2014-11-02T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2015-03-08T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2015-03-08T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2015-03-08T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2015-11-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2015-11-01T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2015-11-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2015-11-01T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2015-03-08T11:59:59+00:00").tz("America/Adak").zone(), 600, "2015-03-08T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2015-03-08T12:00:00+00:00").tz("America/Adak").zone(), 540, "2015-03-08T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2015-11-01T10:59:59+00:00").tz("America/Adak").zone(), 540, "2015-11-01T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2015-11-01T11:00:00+00:00").tz("America/Adak").zone(), 600, "2015-11-01T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2016-03-13T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2016-03-13T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2016-03-13T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2016-11-06T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2016-11-06T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2016-11-06T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2016-11-06T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2016-03-13T11:59:59+00:00").tz("America/Adak").zone(), 600, "2016-03-13T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2016-03-13T12:00:00+00:00").tz("America/Adak").zone(), 540, "2016-03-13T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2016-11-06T10:59:59+00:00").tz("America/Adak").zone(), 540, "2016-11-06T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2016-11-06T11:00:00+00:00").tz("America/Adak").zone(), 600, "2016-11-06T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2017-03-12T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2017-03-12T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2017-03-12T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2017-11-05T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2017-11-05T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2017-11-05T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2017-11-05T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2017-03-12T11:59:59+00:00").tz("America/Adak").zone(), 600, "2017-03-12T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2017-03-12T12:00:00+00:00").tz("America/Adak").zone(), 540, "2017-03-12T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2017-11-05T10:59:59+00:00").tz("America/Adak").zone(), 540, "2017-11-05T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2017-11-05T11:00:00+00:00").tz("America/Adak").zone(), 600, "2017-11-05T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2018-03-11T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2018-03-11T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2018-03-11T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2018-11-04T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2018-11-04T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2018-11-04T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2018-11-04T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2018-03-11T11:59:59+00:00").tz("America/Adak").zone(), 600, "2018-03-11T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2018-03-11T12:00:00+00:00").tz("America/Adak").zone(), 540, "2018-03-11T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2018-11-04T10:59:59+00:00").tz("America/Adak").zone(), 540, "2018-11-04T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2018-11-04T11:00:00+00:00").tz("America/Adak").zone(), 600, "2018-11-04T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2019-03-10T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2019-03-10T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2019-03-10T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2019-11-03T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2019-11-03T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2019-11-03T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2019-11-03T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2019-03-10T11:59:59+00:00").tz("America/Adak").zone(), 600, "2019-03-10T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2019-03-10T12:00:00+00:00").tz("America/Adak").zone(), 540, "2019-03-10T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2019-11-03T10:59:59+00:00").tz("America/Adak").zone(), 540, "2019-11-03T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2019-11-03T11:00:00+00:00").tz("America/Adak").zone(), 600, "2019-11-03T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2020-03-08T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2020-03-08T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2020-03-08T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2020-11-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2020-11-01T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2020-11-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2020-11-01T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2020-03-08T11:59:59+00:00").tz("America/Adak").zone(), 600, "2020-03-08T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2020-03-08T12:00:00+00:00").tz("America/Adak").zone(), 540, "2020-03-08T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2020-11-01T10:59:59+00:00").tz("America/Adak").zone(), 540, "2020-11-01T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2020-11-01T11:00:00+00:00").tz("America/Adak").zone(), 600, "2020-11-01T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2021-03-14T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2021-03-14T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2021-03-14T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2021-11-07T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2021-11-07T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2021-11-07T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2021-11-07T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2021-03-14T11:59:59+00:00").tz("America/Adak").zone(), 600, "2021-03-14T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2021-03-14T12:00:00+00:00").tz("America/Adak").zone(), 540, "2021-03-14T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2021-11-07T10:59:59+00:00").tz("America/Adak").zone(), 540, "2021-11-07T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2021-11-07T11:00:00+00:00").tz("America/Adak").zone(), 600, "2021-11-07T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2022-03-13T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2022-03-13T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2022-03-13T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2022-11-06T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2022-11-06T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2022-11-06T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2022-11-06T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2022-03-13T11:59:59+00:00").tz("America/Adak").zone(), 600, "2022-03-13T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2022-03-13T12:00:00+00:00").tz("America/Adak").zone(), 540, "2022-03-13T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2022-11-06T10:59:59+00:00").tz("America/Adak").zone(), 540, "2022-11-06T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2022-11-06T11:00:00+00:00").tz("America/Adak").zone(), 600, "2022-11-06T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2023-03-12T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2023-03-12T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2023-03-12T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2023-11-05T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2023-11-05T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2023-11-05T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2023-11-05T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2023-03-12T11:59:59+00:00").tz("America/Adak").zone(), 600, "2023-03-12T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2023-03-12T12:00:00+00:00").tz("America/Adak").zone(), 540, "2023-03-12T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2023-11-05T10:59:59+00:00").tz("America/Adak").zone(), 540, "2023-11-05T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2023-11-05T11:00:00+00:00").tz("America/Adak").zone(), 600, "2023-11-05T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2024-03-10T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2024-03-10T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2024-03-10T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2024-11-03T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2024-11-03T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2024-11-03T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2024-11-03T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2024-03-10T11:59:59+00:00").tz("America/Adak").zone(), 600, "2024-03-10T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2024-03-10T12:00:00+00:00").tz("America/Adak").zone(), 540, "2024-03-10T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2024-11-03T10:59:59+00:00").tz("America/Adak").zone(), 540, "2024-11-03T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2024-11-03T11:00:00+00:00").tz("America/Adak").zone(), 600, "2024-11-03T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2025-03-09T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2025-03-09T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2025-03-09T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2025-11-02T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2025-11-02T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2025-11-02T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2025-11-02T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2025-03-09T11:59:59+00:00").tz("America/Adak").zone(), 600, "2025-03-09T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2025-03-09T12:00:00+00:00").tz("America/Adak").zone(), 540, "2025-03-09T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2025-11-02T10:59:59+00:00").tz("America/Adak").zone(), 540, "2025-11-02T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2025-11-02T11:00:00+00:00").tz("America/Adak").zone(), 600, "2025-11-02T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2026-03-08T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2026-03-08T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2026-03-08T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2026-11-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2026-11-01T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2026-11-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2026-11-01T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2026-03-08T11:59:59+00:00").tz("America/Adak").zone(), 600, "2026-03-08T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2026-03-08T12:00:00+00:00").tz("America/Adak").zone(), 540, "2026-03-08T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2026-11-01T10:59:59+00:00").tz("America/Adak").zone(), 540, "2026-11-01T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2026-11-01T11:00:00+00:00").tz("America/Adak").zone(), 600, "2026-11-01T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2027-03-14T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2027-03-14T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2027-03-14T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2027-11-07T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2027-11-07T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2027-11-07T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2027-11-07T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2027-03-14T11:59:59+00:00").tz("America/Adak").zone(), 600, "2027-03-14T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2027-03-14T12:00:00+00:00").tz("America/Adak").zone(), 540, "2027-03-14T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2027-11-07T10:59:59+00:00").tz("America/Adak").zone(), 540, "2027-11-07T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2027-11-07T11:00:00+00:00").tz("America/Adak").zone(), 600, "2027-11-07T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2028-03-12T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2028-03-12T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2028-03-12T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2028-11-05T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2028-11-05T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2028-11-05T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2028-11-05T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2028-03-12T11:59:59+00:00").tz("America/Adak").zone(), 600, "2028-03-12T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2028-03-12T12:00:00+00:00").tz("America/Adak").zone(), 540, "2028-03-12T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2028-11-05T10:59:59+00:00").tz("America/Adak").zone(), 540, "2028-11-05T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2028-11-05T11:00:00+00:00").tz("America/Adak").zone(), 600, "2028-11-05T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2029-03-11T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2029-03-11T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2029-03-11T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2029-11-04T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2029-11-04T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2029-11-04T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2029-11-04T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2029-03-11T11:59:59+00:00").tz("America/Adak").zone(), 600, "2029-03-11T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2029-03-11T12:00:00+00:00").tz("America/Adak").zone(), 540, "2029-03-11T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2029-11-04T10:59:59+00:00").tz("America/Adak").zone(), 540, "2029-11-04T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2029-11-04T11:00:00+00:00").tz("America/Adak").zone(), 600, "2029-11-04T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2030-03-10T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2030-03-10T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2030-03-10T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2030-11-03T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2030-11-03T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2030-11-03T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2030-11-03T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2030-03-10T11:59:59+00:00").tz("America/Adak").zone(), 600, "2030-03-10T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2030-03-10T12:00:00+00:00").tz("America/Adak").zone(), 540, "2030-03-10T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2030-11-03T10:59:59+00:00").tz("America/Adak").zone(), 540, "2030-11-03T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2030-11-03T11:00:00+00:00").tz("America/Adak").zone(), 600, "2030-11-03T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2031-03-09T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2031-03-09T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2031-03-09T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2031-11-02T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2031-11-02T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2031-11-02T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2031-11-02T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2031-03-09T11:59:59+00:00").tz("America/Adak").zone(), 600, "2031-03-09T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2031-03-09T12:00:00+00:00").tz("America/Adak").zone(), 540, "2031-03-09T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2031-11-02T10:59:59+00:00").tz("America/Adak").zone(), 540, "2031-11-02T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2031-11-02T11:00:00+00:00").tz("America/Adak").zone(), 600, "2031-11-02T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2032-03-14T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2032-03-14T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2032-03-14T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2032-11-07T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2032-11-07T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2032-11-07T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2032-11-07T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2032-03-14T11:59:59+00:00").tz("America/Adak").zone(), 600, "2032-03-14T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2032-03-14T12:00:00+00:00").tz("America/Adak").zone(), 540, "2032-03-14T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2032-11-07T10:59:59+00:00").tz("America/Adak").zone(), 540, "2032-11-07T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2032-11-07T11:00:00+00:00").tz("America/Adak").zone(), 600, "2032-11-07T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2033-03-13T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2033-03-13T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2033-03-13T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2033-11-06T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2033-11-06T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2033-11-06T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2033-11-06T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2033-03-13T11:59:59+00:00").tz("America/Adak").zone(), 600, "2033-03-13T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2033-03-13T12:00:00+00:00").tz("America/Adak").zone(), 540, "2033-03-13T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2033-11-06T10:59:59+00:00").tz("America/Adak").zone(), 540, "2033-11-06T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2033-11-06T11:00:00+00:00").tz("America/Adak").zone(), 600, "2033-11-06T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2034-03-12T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2034-03-12T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2034-03-12T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2034-11-05T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2034-11-05T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2034-11-05T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2034-11-05T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2034-03-12T11:59:59+00:00").tz("America/Adak").zone(), 600, "2034-03-12T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2034-03-12T12:00:00+00:00").tz("America/Adak").zone(), 540, "2034-03-12T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2034-11-05T10:59:59+00:00").tz("America/Adak").zone(), 540, "2034-11-05T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2034-11-05T11:00:00+00:00").tz("America/Adak").zone(), 600, "2034-11-05T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2035-03-11T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2035-03-11T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2035-03-11T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2035-11-04T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2035-11-04T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2035-11-04T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2035-11-04T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2035-03-11T11:59:59+00:00").tz("America/Adak").zone(), 600, "2035-03-11T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2035-03-11T12:00:00+00:00").tz("America/Adak").zone(), 540, "2035-03-11T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2035-11-04T10:59:59+00:00").tz("America/Adak").zone(), 540, "2035-11-04T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2035-11-04T11:00:00+00:00").tz("America/Adak").zone(), 600, "2035-11-04T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2036-03-09T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2036-03-09T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2036-03-09T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2036-11-02T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2036-11-02T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2036-11-02T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2036-11-02T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2036-03-09T11:59:59+00:00").tz("America/Adak").zone(), 600, "2036-03-09T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2036-03-09T12:00:00+00:00").tz("America/Adak").zone(), 540, "2036-03-09T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2036-11-02T10:59:59+00:00").tz("America/Adak").zone(), 540, "2036-11-02T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2036-11-02T11:00:00+00:00").tz("America/Adak").zone(), 600, "2036-11-02T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T11:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2037-03-08T11:59:59+00:00 should be 01:59:59 HAST");
		t.equal(moment("2037-03-08T12:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "03:00:00", "2037-03-08T12:00:00+00:00 should be 03:00:00 HADT");
		t.equal(moment("2037-11-01T10:59:59+00:00").tz("America/Adak").format("HH:mm:ss"), "01:59:59", "2037-11-01T10:59:59+00:00 should be 01:59:59 HADT");
		t.equal(moment("2037-11-01T11:00:00+00:00").tz("America/Adak").format("HH:mm:ss"), "01:00:00", "2037-11-01T11:00:00+00:00 should be 01:00:00 HAST");

		t.equal(moment("2037-03-08T11:59:59+00:00").tz("America/Adak").zone(), 600, "2037-03-08T11:59:59+00:00 should be 600 minutes offset in HAST");
		t.equal(moment("2037-03-08T12:00:00+00:00").tz("America/Adak").zone(), 540, "2037-03-08T12:00:00+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2037-11-01T10:59:59+00:00").tz("America/Adak").zone(), 540, "2037-11-01T10:59:59+00:00 should be 540 minutes offset in HADT");
		t.equal(moment("2037-11-01T11:00:00+00:00").tz("America/Adak").zone(), 600, "2037-11-01T11:00:00+00:00 should be 600 minutes offset in HAST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["America/Jamaica"] = {

	"1912" : function (t) {
		t.equal(moment("1912-02-01T05:07:11+00:00").tz("America/Jamaica").format("HH:mm:ss"), "23:59:59", "1912-02-01T05:07:11+00:00 should be 23:59:59 KMT");
		t.equal(moment("1912-02-01T05:07:12+00:00").tz("America/Jamaica").format("HH:mm:ss"), "00:07:12", "1912-02-01T05:07:12+00:00 should be 00:07:12 EST");

		t.equal(moment("1912-02-01T05:07:11+00:00").tz("America/Jamaica").zone(), 307, "1912-02-01T05:07:11+00:00 should be 307 minutes offset in KMT");
		t.equal(moment("1912-02-01T05:07:12+00:00").tz("America/Jamaica").zone(), 300, "1912-02-01T05:07:12+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-28T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1974-04-28T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1974-04-28T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1974-04-28T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1974-10-27T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1974-10-27T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1974-10-27T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1974-10-27T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1974-04-28T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1974-04-28T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1974-04-28T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1974-04-28T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1974-10-27T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1974-10-27T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1974-10-27T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1974-10-27T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-23T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1975-02-23T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1975-02-23T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1975-02-23T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1975-10-26T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1975-10-26T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1975-10-26T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1975-10-26T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1975-02-23T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1975-02-23T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1975-02-23T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1975-02-23T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1975-10-26T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1975-10-26T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1975-10-26T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1975-10-26T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1976-04-25T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1976-04-25T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1976-04-25T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1976-10-31T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1976-10-31T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1976-10-31T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1976-10-31T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1976-04-25T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1976-04-25T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1976-04-25T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1976-04-25T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1976-10-31T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1976-10-31T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1976-10-31T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1976-10-31T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1977-04-24T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1977-04-24T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1977-04-24T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1977-10-30T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1977-10-30T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1977-10-30T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1977-10-30T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1977-04-24T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1977-04-24T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1977-04-24T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1977-04-24T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1977-10-30T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1977-10-30T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1977-10-30T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1977-10-30T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1978-04-30T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1978-04-30T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1978-04-30T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1978-10-29T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1978-10-29T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1978-10-29T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1978-10-29T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1978-04-30T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1978-04-30T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1978-04-30T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1978-04-30T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1978-10-29T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1978-10-29T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1978-10-29T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1978-10-29T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1979-04-29T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1979-04-29T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1979-04-29T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1979-10-28T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1979-10-28T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1979-10-28T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1979-10-28T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1979-04-29T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1979-04-29T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1979-04-29T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1979-04-29T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1979-10-28T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1979-10-28T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1979-10-28T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1979-10-28T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1980-04-27T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1980-04-27T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1980-04-27T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1980-10-26T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1980-10-26T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1980-10-26T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1980-10-26T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1980-04-27T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1980-04-27T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1980-04-27T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1980-04-27T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1980-10-26T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1980-10-26T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1980-10-26T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1980-10-26T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1981-04-26T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1981-04-26T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1981-04-26T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1981-10-25T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1981-10-25T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1981-10-25T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1981-10-25T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1981-04-26T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1981-04-26T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1981-04-26T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1981-04-26T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1981-10-25T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1981-10-25T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1981-10-25T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1981-10-25T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1982-04-25T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1982-04-25T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1982-04-25T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1982-10-31T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1982-10-31T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1982-10-31T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1982-10-31T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1982-04-25T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1982-04-25T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1982-04-25T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1982-04-25T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1982-10-31T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1982-10-31T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1982-10-31T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1982-10-31T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T06:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1983-04-24T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1983-04-24T07:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "03:00:00", "1983-04-24T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("1983-10-30T05:59:59+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:59:59", "1983-10-30T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("1983-10-30T06:00:00+00:00").tz("America/Jamaica").format("HH:mm:ss"), "01:00:00", "1983-10-30T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("1983-04-24T06:59:59+00:00").tz("America/Jamaica").zone(), 300, "1983-04-24T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1983-04-24T07:00:00+00:00").tz("America/Jamaica").zone(), 240, "1983-04-24T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1983-10-30T05:59:59+00:00").tz("America/Jamaica").zone(), 240, "1983-10-30T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("1983-10-30T06:00:00+00:00").tz("America/Jamaica").zone(), 300, "1983-10-30T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};
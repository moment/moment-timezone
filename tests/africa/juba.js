var moment = require("../../moment-timezone");

exports["Africa/Juba"] = {

	"1930" : function (t) {
		t.equal(moment("1930-12-31T21:53:35+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1930-12-31T21:53:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1930-12-31T21:53:36+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:53:36", "1930-12-31T21:53:36+00:00 should be 23:53:36 CAT");

		t.equal(moment("1930-12-31T21:53:35+00:00").tz("Africa/Juba").zone(), -7584 / 60, "1930-12-31T21:53:35+00:00 should be -7584 / 60 minutes offset in LMT");
		t.equal(moment("1930-12-31T21:53:36+00:00").tz("Africa/Juba").zone(), -120, "1930-12-31T21:53:36+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-30T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1970-04-30T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1970-04-30T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1970-04-30T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1970-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1970-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1970-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1970-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1970-04-30T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1970-04-30T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1970-04-30T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1970-04-30T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1970-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1970-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1970-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1970-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-29T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1971-04-29T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1971-04-29T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1971-04-29T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1971-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1971-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1971-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1971-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1971-04-29T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1971-04-29T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1971-04-29T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1971-04-29T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1971-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1971-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1971-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1971-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-29T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1972-04-29T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1972-04-29T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1972-04-29T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1972-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1972-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1972-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1972-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1972-04-29T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1972-04-29T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1972-04-29T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1972-04-29T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1972-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1972-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1972-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1972-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-28T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1973-04-28T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1973-04-28T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1973-04-28T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1973-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1973-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1973-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1973-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1973-04-28T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1973-04-28T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1973-04-28T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1973-04-28T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1973-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1973-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1973-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1973-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-27T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1974-04-27T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1974-04-27T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1974-04-27T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1974-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1974-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1974-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1974-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1974-04-27T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1974-04-27T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1974-04-27T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1974-04-27T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1974-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1974-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1974-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1974-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-26T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1975-04-26T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1975-04-26T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1975-04-26T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1975-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1975-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1975-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1975-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1975-04-26T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1975-04-26T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1975-04-26T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1975-04-26T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1975-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1975-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1975-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1975-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-24T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1976-04-24T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1976-04-24T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1976-04-24T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1976-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1976-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1976-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1976-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1976-04-24T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1976-04-24T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1976-04-24T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1976-04-24T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1976-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1976-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1976-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1976-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-23T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1977-04-23T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1977-04-23T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1977-04-23T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1977-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1977-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1977-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1977-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1977-04-23T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1977-04-23T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1977-04-23T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1977-04-23T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1977-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1977-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1977-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1977-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-29T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1978-04-29T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1978-04-29T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1978-04-29T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1978-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1978-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1978-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1978-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1978-04-29T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1978-04-29T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1978-04-29T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1978-04-29T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1978-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1978-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1978-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1978-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-28T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1979-04-28T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1979-04-28T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1979-04-28T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1979-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1979-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1979-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1979-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1979-04-28T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1979-04-28T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1979-04-28T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1979-04-28T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1979-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1979-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1979-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1979-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-26T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1980-04-26T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1980-04-26T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1980-04-26T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1980-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1980-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1980-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1980-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1980-04-26T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1980-04-26T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1980-04-26T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1980-04-26T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1980-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1980-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1980-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1980-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-25T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1981-04-25T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1981-04-25T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1981-04-25T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1981-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1981-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1981-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1981-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1981-04-25T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1981-04-25T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1981-04-25T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1981-04-25T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1981-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1981-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1981-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1981-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-24T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1982-04-24T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1982-04-24T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1982-04-24T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1982-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1982-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1982-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1982-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1982-04-24T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1982-04-24T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1982-04-24T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1982-04-24T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1982-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1982-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1982-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1982-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-23T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1983-04-23T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1983-04-23T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1983-04-23T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1983-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1983-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1983-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1983-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1983-04-23T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1983-04-23T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1983-04-23T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1983-04-23T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1983-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1983-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1983-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1983-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-28T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1984-04-28T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1984-04-28T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1984-04-28T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1984-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1984-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1984-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1984-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1984-04-28T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1984-04-28T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1984-04-28T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1984-04-28T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1984-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1984-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1984-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1984-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-27T21:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1985-04-27T21:59:59+00:00 should be 23:59:59 CAT");
		t.equal(moment("1985-04-27T22:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "01:00:00", "1985-04-27T22:00:00+00:00 should be 01:00:00 CAST");
		t.equal(moment("1985-10-14T20:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:59:59", "1985-10-14T20:59:59+00:00 should be 23:59:59 CAST");
		t.equal(moment("1985-10-14T21:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "23:00:00", "1985-10-14T21:00:00+00:00 should be 23:00:00 CAT");

		t.equal(moment("1985-04-27T21:59:59+00:00").tz("Africa/Juba").zone(), -120, "1985-04-27T21:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("1985-04-27T22:00:00+00:00").tz("Africa/Juba").zone(), -180, "1985-04-27T22:00:00+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1985-10-14T20:59:59+00:00").tz("Africa/Juba").zone(), -180, "1985-10-14T20:59:59+00:00 should be -180 minutes offset in CAST");
		t.equal(moment("1985-10-14T21:00:00+00:00").tz("Africa/Juba").zone(), -120, "1985-10-14T21:00:00+00:00 should be -120 minutes offset in CAT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-01-15T09:59:59+00:00").tz("Africa/Juba").format("HH:mm:ss"), "11:59:59", "2000-01-15T09:59:59+00:00 should be 11:59:59 CAT");
		t.equal(moment("2000-01-15T10:00:00+00:00").tz("Africa/Juba").format("HH:mm:ss"), "13:00:00", "2000-01-15T10:00:00+00:00 should be 13:00:00 EAT");

		t.equal(moment("2000-01-15T09:59:59+00:00").tz("Africa/Juba").zone(), -120, "2000-01-15T09:59:59+00:00 should be -120 minutes offset in CAT");
		t.equal(moment("2000-01-15T10:00:00+00:00").tz("Africa/Juba").zone(), -180, "2000-01-15T10:00:00+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
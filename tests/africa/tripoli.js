var moment = require("../../index");

exports["Africa/Tripoli"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T23:07:15+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1919-12-31T23:07:15+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T23:07:16+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:07:16", "1919-12-31T23:07:16+00:00 should be 00:07:16 CET");

		t.equal(moment("1919-12-31T23:07:15+00:00").tz("Africa/Tripoli").zone(), -3164 / 60, "1919-12-31T23:07:15+00:00 should be -3164 / 60 minutes offset in LMT");
		t.equal(moment("1919-12-31T23:07:16+00:00").tz("Africa/Tripoli").zone(), -60, "1919-12-31T23:07:16+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-10-14T00:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "1951-10-14T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1951-10-14T01:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "03:00:00", "1951-10-14T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1951-12-31T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1951-12-31T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1951-12-31T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1951-12-31T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1951-10-14T00:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1951-10-14T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1951-10-14T01:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1951-10-14T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1951-12-31T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1951-12-31T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1951-12-31T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1951-12-31T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-10-09T00:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "1953-10-09T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1953-10-09T01:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "03:00:00", "1953-10-09T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1953-12-31T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1953-12-31T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1953-12-31T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1953-12-31T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1953-10-09T00:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1953-10-09T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1953-10-09T01:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1953-10-09T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1953-12-31T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1953-12-31T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1953-12-31T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1953-12-31T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-09-29T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1955-09-29T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1955-09-29T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1955-09-29T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1955-12-31T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1955-12-31T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1955-12-31T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1955-12-31T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1955-09-29T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1955-09-29T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1955-09-29T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1955-09-29T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1955-12-31T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1955-12-31T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1955-12-31T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1955-12-31T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-12-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1958-12-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1958-12-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1958-12-31T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1958-12-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1958-12-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1958-12-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1958-12-31T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-12-31T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1981-12-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1981-12-31T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1981-12-31T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1981-12-31T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1981-12-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1981-12-31T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1981-12-31T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1982-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1982-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1982-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1982-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1982-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1982-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1982-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1982-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1982-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1982-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1982-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1982-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1982-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1982-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1982-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1983-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1983-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1983-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1983-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1983-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1983-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1983-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1983-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1983-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1983-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1983-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1983-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1983-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1983-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1983-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1984-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1984-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1984-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1984-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1984-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1984-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1984-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1984-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1984-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1984-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1984-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1984-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1984-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1984-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1984-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-05T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1985-04-05T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1985-04-05T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1985-04-05T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1985-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1985-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1985-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1985-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1985-04-05T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1985-04-05T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1985-04-05T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1985-04-05T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1985-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1985-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1985-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1985-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-03T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1986-04-03T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1986-04-03T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1986-04-03T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1986-10-02T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1986-10-02T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1986-10-02T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1986-10-02T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1986-04-03T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1986-04-03T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1986-04-03T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1986-04-03T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-10-02T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1986-10-02T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-10-02T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1986-10-02T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1987-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1987-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1987-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1987-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1987-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1987-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1987-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1987-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1987-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1987-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1987-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1987-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1987-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1988-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1988-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1988-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1988-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1988-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1988-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1988-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1988-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1988-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1988-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1988-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1988-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1988-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-31T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1989-03-31T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1989-03-31T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1989-03-31T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1989-09-30T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1989-09-30T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1989-09-30T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1989-09-30T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1989-03-31T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1989-03-31T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1989-03-31T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1989-03-31T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-30T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1989-09-30T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-30T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1989-09-30T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-05-03T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1990-05-03T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1990-05-03T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1990-05-03T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1990-05-03T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1990-05-03T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1990-05-03T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1990-05-03T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-09-29T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1996-09-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1996-09-29T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:00:00", "1996-09-29T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1996-09-29T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1996-09-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-09-29T22:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "1996-09-29T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-03T22:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1997-04-03T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1997-04-03T23:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "1997-04-03T23:00:00+00:00 should be 01:00:00 CEST");
		t.equal(moment("1997-10-03T21:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "23:59:59", "1997-10-03T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1997-10-03T22:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:00:00", "1997-10-03T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1997-04-03T22:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "1997-04-03T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1997-04-03T23:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1997-04-03T23:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-03T21:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "1997-10-03T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-03T22:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "1997-10-03T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-11-09T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2012-11-09T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2012-11-10T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2012-11-10T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2012-11-09T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2012-11-09T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2012-11-10T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2012-11-10T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2013-03-28T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2013-03-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2013-03-29T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2013-10-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2013-10-24T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2013-10-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2013-10-25T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2013-03-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2013-03-28T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2013-03-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2013-03-29T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2013-10-24T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2013-10-25T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2014-03-27T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2014-03-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2014-03-28T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2014-10-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2014-10-30T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2014-10-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2014-10-31T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2014-03-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2014-03-27T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2014-03-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2014-03-28T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2014-10-30T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2014-10-31T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2015-03-26T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2015-03-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2015-03-27T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2015-10-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2015-10-29T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2015-10-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2015-10-30T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2015-03-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2015-03-26T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2015-03-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2015-03-27T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2015-10-29T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2015-10-30T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2016-03-24T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2016-03-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2016-03-25T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2016-10-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2016-10-27T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2016-10-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2016-10-28T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2016-03-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2016-03-24T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2016-03-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2016-03-25T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2016-10-27T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2016-10-28T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2017-03-30T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2017-03-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2017-03-31T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2017-10-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2017-10-26T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2017-10-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2017-10-27T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2017-03-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2017-03-30T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2017-03-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2017-03-31T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2017-10-26T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2017-10-27T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2018-03-29T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2018-03-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2018-03-30T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2018-10-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2018-10-25T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2018-10-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2018-10-26T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2018-03-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2018-03-29T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2018-03-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2018-03-30T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2018-10-25T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2018-10-26T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2019-03-28T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2019-03-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2019-03-29T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2019-10-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2019-10-24T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2019-10-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2019-10-25T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2019-03-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2019-03-28T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2019-03-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2019-03-29T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2019-10-24T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2019-10-25T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2020-03-26T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2020-03-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2020-03-27T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2020-10-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2020-10-29T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2020-10-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2020-10-30T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2020-03-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2020-03-26T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2020-03-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2020-03-27T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2020-10-29T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2020-10-30T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2021-03-25T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2021-03-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2021-03-26T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2021-10-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2021-10-28T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2021-10-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2021-10-29T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2021-03-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2021-03-25T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2021-03-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2021-03-26T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2021-10-28T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2021-10-29T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2022-03-24T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2022-03-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2022-03-25T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2022-10-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2022-10-27T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2022-10-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2022-10-28T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2022-03-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2022-03-24T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2022-03-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2022-03-25T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2022-10-27T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2022-10-28T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2023-03-30T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2023-03-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2023-03-31T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2023-10-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2023-10-26T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2023-10-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2023-10-27T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2023-03-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2023-03-30T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2023-03-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2023-03-31T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2023-10-26T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2023-10-27T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2024-03-28T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2024-03-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2024-03-29T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2024-10-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2024-10-24T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2024-10-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2024-10-25T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2024-03-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2024-03-28T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2024-03-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2024-03-29T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2024-10-24T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2024-10-25T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2025-03-27T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2025-03-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2025-03-28T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2025-10-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2025-10-30T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2025-10-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2025-10-31T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2025-03-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2025-03-27T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2025-03-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2025-03-28T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2025-10-30T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2025-10-31T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2026-03-26T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2026-03-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2026-03-27T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2026-10-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2026-10-29T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2026-10-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2026-10-30T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2026-03-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2026-03-26T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2026-03-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2026-03-27T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2026-10-29T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2026-10-30T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2027-03-25T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2027-03-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2027-03-26T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2027-10-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2027-10-28T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2027-10-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2027-10-29T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2027-03-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2027-03-25T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2027-03-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2027-03-26T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2027-10-28T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2027-10-29T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2028-03-30T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2028-03-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2028-03-31T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2028-10-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2028-10-26T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2028-10-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2028-10-27T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2028-03-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2028-03-30T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2028-03-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2028-03-31T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2028-10-26T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2028-10-27T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2029-03-29T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2029-03-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2029-03-30T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2029-10-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2029-10-25T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2029-10-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2029-10-26T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2029-03-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2029-03-29T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2029-03-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2029-03-30T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2029-10-25T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2029-10-26T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2030-03-28T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2030-03-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2030-03-29T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2030-10-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2030-10-24T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2030-10-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2030-10-25T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2030-03-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2030-03-28T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2030-03-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2030-03-29T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2030-10-24T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2030-10-25T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2031-03-27T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2031-03-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2031-03-28T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2031-10-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2031-10-30T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2031-10-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2031-10-31T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2031-03-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2031-03-27T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2031-03-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2031-03-28T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2031-10-30T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2031-10-31T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2032-03-25T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2032-03-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2032-03-26T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2032-10-28T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2032-10-28T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2032-10-29T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2032-10-29T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2032-03-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2032-03-25T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2032-03-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2032-03-26T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-28T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2032-10-28T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-29T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2032-10-29T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-24T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2033-03-24T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2033-03-25T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2033-03-25T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2033-10-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2033-10-27T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2033-10-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2033-10-28T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2033-03-24T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2033-03-24T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2033-03-25T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2033-03-25T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2033-10-27T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2033-10-28T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2034-03-30T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2034-03-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2034-03-31T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2034-10-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2034-10-26T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2034-10-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2034-10-27T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2034-03-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2034-03-30T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2034-03-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2034-03-31T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2034-10-26T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2034-10-27T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2035-03-29T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2035-03-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2035-03-30T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2035-10-25T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2035-10-25T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2035-10-26T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2035-10-26T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2035-03-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2035-03-29T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2035-03-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2035-03-30T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-25T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2035-10-25T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-26T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2035-10-26T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-27T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2036-03-27T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2036-03-28T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2036-03-28T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2036-10-30T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2036-10-30T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2036-10-31T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2036-10-31T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2036-03-27T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2036-03-27T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2036-03-28T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2036-03-28T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-30T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2036-10-30T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-31T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2036-10-31T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-26T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "00:59:59", "2037-03-26T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("2037-03-27T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "02:00:00", "2037-03-27T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("2037-10-29T23:59:59+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:59:59", "2037-10-29T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("2037-10-30T00:00:00+00:00").tz("Africa/Tripoli").format("HH:mm:ss"), "01:00:00", "2037-10-30T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("2037-03-26T23:59:59+00:00").tz("Africa/Tripoli").zone(), -60, "2037-03-26T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2037-03-27T00:00:00+00:00").tz("Africa/Tripoli").zone(), -120, "2037-03-27T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-29T23:59:59+00:00").tz("Africa/Tripoli").zone(), -120, "2037-10-29T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-30T00:00:00+00:00").tz("Africa/Tripoli").zone(), -60, "2037-10-30T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	}
};
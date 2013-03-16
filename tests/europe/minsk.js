var moment = require("../../moment-timezone");

exports["Europe/Minsk"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T22:09:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1924-05-01T22:09:59+00:00 should be 23:59:59 MMT");
		t.equal(moment("1924-05-01T22:10:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "00:10:00", "1924-05-01T22:10:00+00:00 should be 00:10:00 EET");

		t.equal(moment("1924-05-01T22:09:59+00:00").tz("Europe/Minsk").zone(), -110, "1924-05-01T22:09:59+00:00 should be -110 minutes offset in MMT");
		t.equal(moment("1924-05-01T22:10:00+00:00").tz("Europe/Minsk").zone(), -120, "1924-05-01T22:10:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T21:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1930-06-20T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1930-06-20T22:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1930-06-20T22:00:00+00:00 should be 01:00:00 MSK");

		t.equal(moment("1930-06-20T21:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1930-06-20T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1930-06-20T22:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1930-06-20T22:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-06-27T20:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1941-06-27T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1941-06-27T21:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:00:00", "1941-06-27T21:00:00+00:00 should be 23:00:00 CEST");

		t.equal(moment("1941-06-27T20:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1941-06-27T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1941-06-27T21:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1941-06-27T21:00:00+00:00 should be -120 minutes offset in CEST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1942-11-02T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1942-11-02T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1942-11-02T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Europe/Minsk").zone(), -60, "1942-11-02T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1943-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1943-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1943-10-04T00:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1943-10-04T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1943-10-04T01:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1943-10-04T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Europe/Minsk").zone(), -60, "1943-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1943-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-04T00:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1943-10-04T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-04T01:00:00+00:00").tz("Europe/Minsk").zone(), -60, "1943-10-04T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1944-04-03T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1944-04-03T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1944-07-02T21:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1944-07-02T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1944-07-02T22:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1944-07-02T22:00:00+00:00 should be 01:00:00 MSK");

		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Europe/Minsk").zone(), -60, "1944-04-03T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1944-04-03T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-07-02T21:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1944-07-02T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-07-02T22:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1944-07-02T22:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T20:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1981-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1981-03-31T21:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1981-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1981-09-30T19:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1981-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1981-09-30T20:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:00:00", "1981-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1981-03-31T20:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1981-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1981-03-31T21:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1981-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1981-09-30T19:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1981-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1981-09-30T20:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1981-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T20:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1982-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1982-03-31T21:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1982-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1982-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:00:00", "1982-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1982-03-31T20:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1982-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1982-03-31T21:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1982-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1982-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1982-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T20:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1983-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1983-03-31T21:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1983-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1983-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:00:00", "1983-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1983-03-31T20:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1983-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1983-03-31T21:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1983-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1983-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1983-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1984-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1984-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1984-09-29T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1984-09-29T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1984-09-29T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1984-09-29T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1984-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1984-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1984-09-29T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1984-09-29T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1984-09-29T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1984-09-29T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1985-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1985-03-30T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1985-03-30T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1985-09-28T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1985-09-28T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1985-09-28T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1985-09-28T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1985-03-30T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1985-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1985-03-30T23:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1985-03-30T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1985-09-28T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1985-09-28T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1985-09-28T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1985-09-28T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1986-03-29T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1986-03-29T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1986-03-29T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1986-09-27T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1986-09-27T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1986-09-27T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1986-09-27T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1986-03-29T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1986-03-29T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1986-03-29T23:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1986-03-29T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1986-09-27T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1986-09-27T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1986-09-27T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1986-09-27T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1987-03-28T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1987-03-28T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1987-03-28T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1987-09-26T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1987-09-26T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1987-09-26T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1987-09-26T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1987-03-28T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1987-03-28T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1987-03-28T23:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1987-03-28T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1987-09-26T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1987-09-26T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1987-09-26T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1987-09-26T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1988-03-26T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1988-03-26T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1988-03-26T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1988-09-24T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1988-09-24T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1988-03-26T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1988-03-26T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1988-03-26T23:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1988-03-26T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1988-09-24T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1988-09-24T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1989-03-25T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1989-03-25T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1989-09-23T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1989-09-23T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1989-03-25T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Europe/Minsk").zone(), -240, "1989-03-25T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Europe/Minsk").zone(), -240, "1989-09-23T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1989-09-23T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1991-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1991-03-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1991-09-28T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1991-09-28T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1991-09-29T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1991-09-29T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1991-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1991-03-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-28T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1991-09-28T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-29T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1991-09-29T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T21:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "23:59:59", "1992-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1992-03-28T22:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:00:00", "1992-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1992-09-26T21:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "00:59:59", "1992-09-26T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1992-09-26T22:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "00:00:00", "1992-09-26T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1992-03-28T21:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1992-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-03-28T22:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1992-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-26T21:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1992-09-26T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-26T22:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1992-09-26T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1993-03-27T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1993-03-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1993-03-28T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1993-09-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1993-09-25T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1993-09-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1993-09-26T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1993-03-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1993-03-27T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1993-03-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1993-03-28T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1993-09-25T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1993-09-26T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1994-03-26T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1994-03-27T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1994-03-27T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1994-09-24T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1994-09-24T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1994-09-25T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1994-09-25T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1994-03-26T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1994-03-26T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1994-03-27T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1994-03-27T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-24T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1994-09-24T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-25T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1994-09-25T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1995-03-25T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1995-03-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1995-03-26T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1995-09-23T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1995-09-23T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1995-09-24T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1995-09-24T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1995-03-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1995-03-25T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1995-03-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1995-03-26T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-23T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1995-09-23T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-24T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1995-09-24T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1996-03-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1996-03-31T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1996-03-31T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1996-10-26T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1996-10-26T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1996-10-27T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1996-10-27T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1996-03-30T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1996-03-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-03-31T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1996-03-31T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-10-26T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1996-10-26T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-10-27T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1996-10-27T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1997-03-29T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1997-03-30T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1997-03-30T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1997-10-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1997-10-25T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1997-10-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1997-10-26T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1997-03-29T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1997-03-29T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-03-30T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1997-03-30T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-10-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1997-10-25T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-10-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1997-10-26T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1998-03-28T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1998-03-29T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1998-03-29T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1998-10-24T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1998-10-24T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1998-10-25T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1998-10-25T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1998-03-28T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1998-03-28T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-03-29T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1998-03-29T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-10-24T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1998-10-24T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-10-25T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1998-10-25T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "1999-03-27T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1999-03-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "1999-03-28T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1999-10-30T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "1999-10-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1999-10-31T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "1999-10-31T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1999-03-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "1999-03-27T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-03-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "1999-03-28T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-30T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "1999-10-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-31T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "1999-10-31T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2000-03-25T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2000-03-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2000-03-26T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2000-10-28T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2000-10-28T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2000-10-29T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2000-10-29T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2000-03-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2000-03-25T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-03-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2000-03-26T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-28T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2000-10-28T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-29T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2000-10-29T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2001-03-24T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2001-03-25T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2001-03-25T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2001-10-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2001-10-27T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2001-10-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2001-10-28T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2001-03-24T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2001-03-24T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-03-25T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2001-03-25T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2001-10-27T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2001-10-28T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2002-03-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2002-03-31T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2002-03-31T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2002-10-26T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2002-10-26T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2002-10-27T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2002-10-27T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2002-03-30T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2002-03-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-03-31T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2002-03-31T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-26T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2002-10-26T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-27T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2002-10-27T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2003-03-29T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2003-03-30T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2003-03-30T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2003-10-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2003-10-25T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2003-10-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2003-10-26T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2003-03-29T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2003-03-29T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-03-30T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2003-03-30T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2003-10-25T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2003-10-26T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2004-03-27T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2004-03-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2004-03-28T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2004-10-30T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2004-10-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2004-10-31T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2004-10-31T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2004-03-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2004-03-27T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-03-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2004-03-28T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-30T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2004-10-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-31T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2004-10-31T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2005-03-26T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2005-03-27T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2005-03-27T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2005-10-29T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2005-10-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2005-10-30T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2005-10-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2005-03-26T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2005-03-26T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-03-27T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2005-03-27T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-29T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2005-10-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-30T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2005-10-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2006-03-25T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2006-03-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2006-03-26T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2006-10-28T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2006-10-28T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2006-10-29T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2006-10-29T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2006-03-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2006-03-25T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-03-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2006-03-26T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-28T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2006-10-28T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-29T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2006-10-29T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2007-03-24T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2007-03-25T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2007-03-25T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2007-10-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2007-10-27T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2007-10-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2007-10-28T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2007-03-24T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2007-03-24T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-03-25T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2007-03-25T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2007-10-27T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2007-10-28T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2008-03-29T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2008-03-30T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2008-03-30T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2008-10-25T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2008-10-25T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2008-10-26T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2008-10-26T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2008-03-29T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2008-03-29T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-03-30T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2008-03-30T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-25T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2008-10-25T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-26T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2008-10-26T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2009-03-28T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2009-03-29T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2009-03-29T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2009-10-24T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2009-10-24T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2009-10-25T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2009-10-25T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2009-03-28T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2009-03-28T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-03-29T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2009-03-29T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-24T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2009-10-24T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-25T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2009-10-25T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2010-03-27T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2010-03-28T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2010-03-28T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("2010-10-30T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:59:59", "2010-10-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2010-10-31T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "02:00:00", "2010-10-31T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2010-03-27T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2010-03-27T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-03-28T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2010-03-28T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-30T23:59:59+00:00").tz("Europe/Minsk").zone(), -180, "2010-10-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-31T00:00:00+00:00").tz("Europe/Minsk").zone(), -120, "2010-10-31T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T23:59:59+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "01:59:59", "2011-03-26T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("2011-03-27T00:00:00+00:00").tz("Europe/Minsk").format("HH:mm:ss"), "03:00:00", "2011-03-27T00:00:00+00:00 should be 03:00:00 FET");

		t.equal(moment("2011-03-26T23:59:59+00:00").tz("Europe/Minsk").zone(), -120, "2011-03-26T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-03-27T00:00:00+00:00").tz("Europe/Minsk").zone(), -180, "2011-03-27T00:00:00+00:00 should be -180 minutes offset in FET");

		t.done();
	}
};
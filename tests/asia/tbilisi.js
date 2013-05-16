var moment = require("../../index");

exports["Asia/Tbilisi"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T21:00:43+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1924-05-01T21:00:43+00:00 should be 23:59:59 TBMT");
		t.equal(moment("1924-05-01T21:00:44+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "00:00:44", "1924-05-01T21:00:44+00:00 should be 00:00:44 TBIT");

		t.equal(moment("1924-05-01T21:00:43+00:00").tz("Asia/Tbilisi").zone(), -10756 / 60, "1924-05-01T21:00:43+00:00 should be -10756 / 60 minutes offset in TBMT");
		t.equal(moment("1924-05-01T21:00:44+00:00").tz("Asia/Tbilisi").zone(), -180, "1924-05-01T21:00:44+00:00 should be -180 minutes offset in TBIT");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-02-28T20:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1957-02-28T20:59:59+00:00 should be 23:59:59 TBIT");
		t.equal(moment("1957-02-28T21:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1957-02-28T21:00:00+00:00 should be 01:00:00 TBIT");

		t.equal(moment("1957-02-28T20:59:59+00:00").tz("Asia/Tbilisi").zone(), -180, "1957-02-28T20:59:59+00:00 should be -180 minutes offset in TBIT");
		t.equal(moment("1957-02-28T21:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1957-02-28T21:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1981-03-31T19:59:59+00:00 should be 23:59:59 TBIT");
		t.equal(moment("1981-03-31T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1981-03-31T20:00:00+00:00 should be 01:00:00 TBIST");
		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1981-09-30T18:59:59+00:00 should be 23:59:59 TBIST");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1981-09-30T19:00:00+00:00 should be 23:00:00 TBIT");

		t.equal(moment("1981-03-31T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1981-03-31T19:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1981-03-31T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1981-03-31T20:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1981-09-30T18:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1981-09-30T19:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1982-03-31T19:59:59+00:00 should be 23:59:59 TBIT");
		t.equal(moment("1982-03-31T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1982-03-31T20:00:00+00:00 should be 01:00:00 TBIST");
		t.equal(moment("1982-09-30T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1982-09-30T18:59:59+00:00 should be 23:59:59 TBIST");
		t.equal(moment("1982-09-30T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1982-09-30T19:00:00+00:00 should be 23:00:00 TBIT");

		t.equal(moment("1982-03-31T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1982-03-31T19:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1982-03-31T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1982-03-31T20:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1982-09-30T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1982-09-30T18:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1982-09-30T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1982-09-30T19:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1983-03-31T19:59:59+00:00 should be 23:59:59 TBIT");
		t.equal(moment("1983-03-31T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1983-03-31T20:00:00+00:00 should be 01:00:00 TBIST");
		t.equal(moment("1983-09-30T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1983-09-30T18:59:59+00:00 should be 23:59:59 TBIST");
		t.equal(moment("1983-09-30T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1983-09-30T19:00:00+00:00 should be 23:00:00 TBIT");

		t.equal(moment("1983-03-31T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1983-03-31T19:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1983-03-31T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1983-03-31T20:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1983-09-30T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1983-09-30T18:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1983-09-30T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1983-09-30T19:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1984-03-31T19:59:59+00:00 should be 23:59:59 TBIT");
		t.equal(moment("1984-03-31T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1984-03-31T20:00:00+00:00 should be 01:00:00 TBIST");
		t.equal(moment("1984-09-29T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1984-09-29T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1984-09-29T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1984-09-29T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1984-03-31T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1984-03-31T19:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1984-03-31T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1984-03-31T20:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1984-09-29T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1984-09-29T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1984-09-29T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1984-09-29T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1985-03-30T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1985-03-30T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1985-03-30T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1985-09-28T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1985-09-28T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1985-03-30T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1985-03-30T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1985-03-30T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1985-03-30T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1985-09-28T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1985-09-28T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1986-03-29T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1986-03-29T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1986-09-27T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1986-09-27T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1986-03-29T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1986-03-29T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1986-09-27T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1986-09-27T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1987-03-28T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1987-03-28T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1987-09-26T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1987-09-26T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1987-03-28T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1987-03-28T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1987-09-26T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1987-09-26T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1988-03-26T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1988-03-26T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1988-09-24T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1988-09-24T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1988-03-26T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1988-03-26T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1988-09-24T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1988-09-24T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1989-03-25T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1989-03-25T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1989-09-23T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1989-09-23T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1989-03-25T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1989-03-25T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1989-09-23T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1989-09-23T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1990-03-24T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "1990-03-24T22:00:00+00:00 should be 03:00:00 TBIST");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1990-09-29T21:59:59+00:00 should be 02:59:59 TBIST");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1990-09-29T22:00:00+00:00 should be 02:00:00 TBIT");

		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1990-03-24T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1990-03-24T22:00:00+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1990-09-29T21:59:59+00:00 should be -300 minutes offset in TBIST");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1990-09-29T22:00:00+00:00 should be -240 minutes offset in TBIT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T21:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "1991-03-30T21:59:59+00:00 should be 01:59:59 TBIT");
		t.equal(moment("1991-03-30T22:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1991-03-30T22:00:00+00:00 should be 02:00:00 TBIST");
		t.equal(moment("1991-04-08T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1991-04-08T19:59:59+00:00 should be 23:59:59 TBIST");
		t.equal(moment("1991-04-08T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "00:00:00", "1991-04-08T20:00:00+00:00 should be 00:00:00 GEST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "1991-09-28T22:59:59+00:00 should be 02:59:59 GEST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "1991-09-28T23:00:00+00:00 should be 02:00:00 GET");

		t.equal(moment("1991-03-30T21:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1991-03-30T21:59:59+00:00 should be -240 minutes offset in TBIT");
		t.equal(moment("1991-03-30T22:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1991-03-30T22:00:00+00:00 should be -240 minutes offset in TBIST");
		t.equal(moment("1991-04-08T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1991-04-08T19:59:59+00:00 should be -240 minutes offset in TBIST");
		t.equal(moment("1991-04-08T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1991-04-08T20:00:00+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1991-09-28T22:59:59+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Asia/Tbilisi").zone(), -180, "1991-09-28T23:00:00+00:00 should be -180 minutes offset in GET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T20:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1992-03-28T20:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1992-03-28T21:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1992-03-28T21:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1992-09-26T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1992-09-26T19:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1992-09-26T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1992-09-26T20:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1992-03-28T20:59:59+00:00").tz("Asia/Tbilisi").zone(), -180, "1992-03-28T20:59:59+00:00 should be -180 minutes offset in GET");
		t.equal(moment("1992-03-28T21:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1992-03-28T21:00:00+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1992-09-26T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1992-09-26T19:59:59+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1992-09-26T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -180, "1992-09-26T20:00:00+00:00 should be -180 minutes offset in GET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T20:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1993-03-27T20:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1993-03-27T21:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1993-03-27T21:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1993-09-25T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1993-09-25T19:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1993-09-25T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1993-09-25T20:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1993-03-27T20:59:59+00:00").tz("Asia/Tbilisi").zone(), -180, "1993-03-27T20:59:59+00:00 should be -180 minutes offset in GET");
		t.equal(moment("1993-03-27T21:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1993-03-27T21:00:00+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1993-09-25T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1993-09-25T19:59:59+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1993-09-25T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -180, "1993-09-25T20:00:00+00:00 should be -180 minutes offset in GET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T20:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1994-03-26T20:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1994-03-26T21:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1994-03-26T21:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1994-09-24T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1994-09-24T19:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1994-09-24T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "00:00:00", "1994-09-24T20:00:00+00:00 should be 00:00:00 GET");

		t.equal(moment("1994-03-26T20:59:59+00:00").tz("Asia/Tbilisi").zone(), -180, "1994-03-26T20:59:59+00:00 should be -180 minutes offset in GET");
		t.equal(moment("1994-03-26T21:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1994-03-26T21:00:00+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1994-09-24T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1994-09-24T19:59:59+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("1994-09-24T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1994-09-24T20:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1995-03-25T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1995-03-25T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1995-03-25T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1995-09-23T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1995-09-23T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1995-09-23T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1995-09-23T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1995-03-25T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1995-03-25T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("1995-03-25T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1995-03-25T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1995-09-23T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1995-09-23T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1995-09-23T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1995-09-23T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1996-03-30T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1996-03-30T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1996-03-30T20:00:00+00:00 should be 01:00:00 GEST");

		t.equal(moment("1996-03-30T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1996-03-30T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("1996-03-30T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1996-03-30T20:00:00+00:00 should be -300 minutes offset in GEST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-10-25T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1997-10-25T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1997-10-25T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1997-10-25T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1997-10-25T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1997-10-25T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1997-10-25T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1997-10-25T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1998-03-28T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1998-03-28T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1998-03-28T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1998-10-24T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1998-10-24T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1998-10-24T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1998-10-24T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1998-03-28T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1998-03-28T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("1998-03-28T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1998-03-28T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1998-10-24T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1998-10-24T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1998-10-24T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1998-10-24T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1999-03-27T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("1999-03-27T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "1999-03-27T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("1999-10-30T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "1999-10-30T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("1999-10-30T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "1999-10-30T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("1999-03-27T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "1999-03-27T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("1999-03-27T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "1999-03-27T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1999-10-30T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "1999-10-30T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("1999-10-30T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "1999-10-30T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2000-03-25T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("2000-03-25T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "2000-03-25T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("2000-10-28T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2000-10-28T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("2000-10-28T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "2000-10-28T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("2000-03-25T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2000-03-25T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("2000-03-25T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "2000-03-25T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2000-10-28T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "2000-10-28T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2000-10-28T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2000-10-28T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2001-03-24T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("2001-03-24T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "2001-03-24T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("2001-10-27T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2001-10-27T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("2001-10-27T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "2001-10-27T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("2001-03-24T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2001-03-24T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("2001-03-24T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "2001-03-24T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2001-10-27T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "2001-10-27T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2001-10-27T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2001-10-27T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2002-03-30T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("2002-03-30T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "2002-03-30T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("2002-10-26T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2002-10-26T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("2002-10-26T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "2002-10-26T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("2002-03-30T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2002-03-30T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("2002-03-30T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "2002-03-30T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2002-10-26T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "2002-10-26T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2002-10-26T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2002-10-26T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2003-03-29T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("2003-03-29T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "2003-03-29T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("2003-10-25T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2003-10-25T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("2003-10-25T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "2003-10-25T19:00:00+00:00 should be 23:00:00 GET");

		t.equal(moment("2003-03-29T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2003-03-29T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("2003-03-29T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "2003-03-29T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2003-10-25T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "2003-10-25T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2003-10-25T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2003-10-25T19:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T19:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2004-03-27T19:59:59+00:00 should be 23:59:59 GET");
		t.equal(moment("2004-03-27T20:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:00:00", "2004-03-27T20:00:00+00:00 should be 01:00:00 GEST");
		t.equal(moment("2004-06-26T18:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:59:59", "2004-06-26T18:59:59+00:00 should be 23:59:59 GEST");
		t.equal(moment("2004-06-26T19:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "23:00:00", "2004-06-26T19:00:00+00:00 should be 23:00:00 GEST");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:59:59", "2004-10-30T22:59:59+00:00 should be 02:59:59 GEST");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "02:00:00", "2004-10-30T23:00:00+00:00 should be 02:00:00 GET");

		t.equal(moment("2004-03-27T19:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2004-03-27T19:59:59+00:00 should be -240 minutes offset in GET");
		t.equal(moment("2004-03-27T20:00:00+00:00").tz("Asia/Tbilisi").zone(), -300, "2004-03-27T20:00:00+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2004-06-26T18:59:59+00:00").tz("Asia/Tbilisi").zone(), -300, "2004-06-26T18:59:59+00:00 should be -300 minutes offset in GEST");
		t.equal(moment("2004-06-26T19:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2004-06-26T19:00:00+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Asia/Tbilisi").zone(), -240, "2004-10-30T22:59:59+00:00 should be -240 minutes offset in GEST");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Asia/Tbilisi").zone(), -180, "2004-10-30T23:00:00+00:00 should be -180 minutes offset in GET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "01:59:59", "2005-03-26T22:59:59+00:00 should be 01:59:59 GET");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Asia/Tbilisi").format("HH:mm:ss"), "03:00:00", "2005-03-26T23:00:00+00:00 should be 03:00:00 GET");

		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Asia/Tbilisi").zone(), -180, "2005-03-26T22:59:59+00:00 should be -180 minutes offset in GET");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Asia/Tbilisi").zone(), -240, "2005-03-26T23:00:00+00:00 should be -240 minutes offset in GET");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Asia/Aqtau"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T20:38:55+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1924-05-01T20:38:55+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-05-01T20:38:56+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "00:38:56", "1924-05-01T20:38:56+00:00 should be 00:38:56 FORT");

		t.equal(moment("1924-05-01T20:38:55+00:00").tz("Asia/Aqtau").zone(), -12064 / 60, "1924-05-01T20:38:55+00:00 should be -12064 / 60 minutes offset in LMT");
		t.equal(moment("1924-05-01T20:38:56+00:00").tz("Asia/Aqtau").zone(), -240, "1924-05-01T20:38:56+00:00 should be -240 minutes offset in FORT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T19:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1930-06-20T19:59:59+00:00 should be 23:59:59 FORT");
		t.equal(moment("1930-06-20T20:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:00:00", "1930-06-20T20:00:00+00:00 should be 01:00:00 FORT");

		t.equal(moment("1930-06-20T19:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "1930-06-20T19:59:59+00:00 should be -240 minutes offset in FORT");
		t.equal(moment("1930-06-20T20:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1930-06-20T20:00:00+00:00 should be -300 minutes offset in FORT");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-12-31T18:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1962-12-31T18:59:59+00:00 should be 23:59:59 FORT");
		t.equal(moment("1962-12-31T19:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "00:00:00", "1962-12-31T19:00:00+00:00 should be 00:00:00 SHET");

		t.equal(moment("1962-12-31T18:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1962-12-31T18:59:59+00:00 should be -300 minutes offset in FORT");
		t.equal(moment("1962-12-31T19:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1962-12-31T19:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1981-09-30T18:59:59+00:00 should be 23:59:59 SHET");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:00:00", "1981-09-30T19:00:00+00:00 should be 01:00:00 SHET");

		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1981-09-30T18:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1981-09-30T19:00:00+00:00 should be -360 minutes offset in SHET");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1982-03-31T17:59:59+00:00 should be 23:59:59 SHET");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "00:00:00", "1982-03-31T18:00:00+00:00 should be 00:00:00 SHEST");
		t.equal(moment("1982-09-30T17:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1982-09-30T17:59:59+00:00 should be 23:59:59 SHEST");
		t.equal(moment("1982-09-30T18:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:00:00", "1982-09-30T18:00:00+00:00 should be 23:00:00 SHET");

		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1982-03-31T17:59:59+00:00 should be -360 minutes offset in SHET");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1982-03-31T18:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1982-09-30T17:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1982-09-30T17:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1982-09-30T18:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1982-09-30T18:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T18:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1983-03-31T18:59:59+00:00 should be 23:59:59 SHET");
		t.equal(moment("1983-03-31T19:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:00:00", "1983-03-31T19:00:00+00:00 should be 01:00:00 SHEST");
		t.equal(moment("1983-09-30T17:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1983-09-30T17:59:59+00:00 should be 23:59:59 SHEST");
		t.equal(moment("1983-09-30T18:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:00:00", "1983-09-30T18:00:00+00:00 should be 23:00:00 SHET");

		t.equal(moment("1983-03-31T18:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1983-03-31T18:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1983-03-31T19:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1983-03-31T19:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1983-09-30T17:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1983-09-30T17:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1983-09-30T18:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1983-09-30T18:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T18:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1984-03-31T18:59:59+00:00 should be 23:59:59 SHET");
		t.equal(moment("1984-03-31T19:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:00:00", "1984-03-31T19:00:00+00:00 should be 01:00:00 SHEST");
		t.equal(moment("1984-09-29T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1984-09-29T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1984-09-29T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1984-09-29T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1984-03-31T18:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1984-03-31T18:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1984-03-31T19:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1984-03-31T19:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1984-09-29T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1984-09-29T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1984-09-29T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1984-09-29T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1985-03-30T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1985-03-30T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1985-03-30T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1985-09-28T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1985-09-28T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1985-09-28T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1985-09-28T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1985-03-30T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1985-03-30T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1985-03-30T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1985-03-30T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1985-09-28T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1985-09-28T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1985-09-28T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1985-09-28T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1986-03-29T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1986-03-29T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1986-03-29T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1986-09-27T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1986-09-27T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1986-09-27T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1986-09-27T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1986-03-29T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1986-03-29T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1986-03-29T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1986-03-29T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1986-09-27T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1986-09-27T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1986-09-27T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1986-09-27T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1987-03-28T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1987-03-28T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1987-03-28T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1987-09-26T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1987-09-26T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1987-09-26T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1987-09-26T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1987-03-28T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1987-03-28T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1987-03-28T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1987-03-28T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1987-09-26T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1987-09-26T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1987-09-26T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1987-09-26T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1988-03-26T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1988-03-26T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1988-03-26T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1988-09-24T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1988-09-24T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1988-09-24T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1988-09-24T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1988-03-26T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1988-03-26T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1988-03-26T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1988-03-26T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1988-09-24T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1988-09-24T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1988-09-24T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1988-09-24T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1989-03-25T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1989-03-25T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1989-03-25T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1989-09-23T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1989-09-23T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1989-09-23T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1989-09-23T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1989-03-25T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1989-03-25T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1989-03-25T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1989-03-25T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1989-09-23T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1989-09-23T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1989-09-23T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1989-09-23T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1990-03-24T20:59:59+00:00 should be 01:59:59 SHET");
		t.equal(moment("1990-03-24T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1990-03-24T21:00:00+00:00 should be 03:00:00 SHEST");
		t.equal(moment("1990-09-29T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1990-09-29T20:59:59+00:00 should be 02:59:59 SHEST");
		t.equal(moment("1990-09-29T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1990-09-29T21:00:00+00:00 should be 02:00:00 SHET");

		t.equal(moment("1990-03-24T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1990-03-24T20:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1990-03-24T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1990-03-24T21:00:00+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1990-09-29T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1990-09-29T20:59:59+00:00 should be -360 minutes offset in SHEST");
		t.equal(moment("1990-09-29T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1990-09-29T21:00:00+00:00 should be -300 minutes offset in SHET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-12-15T18:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "1991-12-15T18:59:59+00:00 should be 23:59:59 SHET");
		t.equal(moment("1991-12-15T19:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "00:00:00", "1991-12-15T19:00:00+00:00 should be 00:00:00 AQTT");

		t.equal(moment("1991-12-15T18:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1991-12-15T18:59:59+00:00 should be -300 minutes offset in SHET");
		t.equal(moment("1991-12-15T19:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1991-12-15T19:00:00+00:00 should be -300 minutes offset in AQTT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T17:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "22:59:59", "1992-03-28T17:59:59+00:00 should be 22:59:59 AQTT");
		t.equal(moment("1992-03-28T18:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "00:00:00", "1992-03-28T18:00:00+00:00 should be 00:00:00 AQTST");
		t.equal(moment("1992-09-26T16:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "22:59:59", "1992-09-26T16:59:59+00:00 should be 22:59:59 AQTST");
		t.equal(moment("1992-09-26T17:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "22:00:00", "1992-09-26T17:00:00+00:00 should be 22:00:00 AQTT");

		t.equal(moment("1992-03-28T17:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1992-03-28T17:59:59+00:00 should be -300 minutes offset in AQTT");
		t.equal(moment("1992-03-28T18:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1992-03-28T18:00:00+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1992-09-26T16:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1992-09-26T16:59:59+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1992-09-26T17:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1992-09-26T17:00:00+00:00 should be -300 minutes offset in AQTT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1993-03-27T20:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1993-03-27T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1993-03-27T21:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1993-09-25T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1993-09-25T20:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1993-09-25T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1993-09-25T21:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1993-03-27T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1993-03-27T20:59:59+00:00 should be -300 minutes offset in AQTT");
		t.equal(moment("1993-03-27T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1993-03-27T21:00:00+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1993-09-25T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1993-09-25T20:59:59+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1993-09-25T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1993-09-25T21:00:00+00:00 should be -300 minutes offset in AQTT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1994-03-26T20:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1994-03-26T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1994-03-26T21:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1994-09-24T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1994-09-24T20:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1994-09-24T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1994-09-24T21:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1994-03-26T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1994-03-26T20:59:59+00:00 should be -300 minutes offset in AQTT");
		t.equal(moment("1994-03-26T21:00:00+00:00").tz("Asia/Aqtau").zone(), -360, "1994-03-26T21:00:00+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1994-09-24T20:59:59+00:00").tz("Asia/Aqtau").zone(), -360, "1994-09-24T20:59:59+00:00 should be -360 minutes offset in AQTST");
		t.equal(moment("1994-09-24T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1994-09-24T21:00:00+00:00 should be -300 minutes offset in AQTT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T20:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1995-03-25T20:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1995-03-25T21:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1995-03-25T21:00:00+00:00 should be 02:00:00 AQTST");
		t.equal(moment("1995-09-23T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1995-09-23T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1995-09-23T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1995-09-23T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1995-03-25T20:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1995-03-25T20:59:59+00:00 should be -300 minutes offset in AQTT");
		t.equal(moment("1995-03-25T21:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1995-03-25T21:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1995-09-23T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1995-09-23T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1995-09-23T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "1995-09-23T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1996-03-30T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1996-03-30T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1996-03-30T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1996-10-26T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1996-10-26T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1996-10-26T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1996-10-26T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1996-03-30T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "1996-03-30T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("1996-03-30T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1996-03-30T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1996-10-26T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1996-10-26T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1996-10-26T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "1996-10-26T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1997-03-29T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1997-03-29T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1997-03-29T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1997-10-25T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1997-10-25T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1997-10-25T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1997-10-25T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1997-03-29T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "1997-03-29T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("1997-03-29T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1997-03-29T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1997-10-25T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1997-10-25T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1997-10-25T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "1997-10-25T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1998-03-28T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1998-03-28T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1998-03-28T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1998-10-24T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1998-10-24T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1998-10-24T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1998-10-24T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1998-03-28T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "1998-03-28T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("1998-03-28T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1998-03-28T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1998-10-24T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1998-10-24T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1998-10-24T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "1998-10-24T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "1999-03-27T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("1999-03-27T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "1999-03-27T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("1999-10-30T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "1999-10-30T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("1999-10-30T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "1999-10-30T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("1999-03-27T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "1999-03-27T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("1999-03-27T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "1999-03-27T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1999-10-30T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "1999-10-30T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("1999-10-30T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "1999-10-30T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "2000-03-25T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("2000-03-25T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "2000-03-25T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("2000-10-28T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "2000-10-28T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("2000-10-28T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "2000-10-28T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("2000-03-25T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2000-03-25T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2000-03-25T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2000-03-25T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2000-10-28T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "2000-10-28T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2000-10-28T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "2000-10-28T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "2001-03-24T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("2001-03-24T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "2001-03-24T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("2001-10-27T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "2001-10-27T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("2001-10-27T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "2001-10-27T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("2001-03-24T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2001-03-24T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2001-03-24T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2001-03-24T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2001-10-27T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "2001-10-27T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2001-10-27T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "2001-10-27T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "2002-03-30T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("2002-03-30T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "2002-03-30T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("2002-10-26T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "2002-10-26T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("2002-10-26T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "2002-10-26T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("2002-03-30T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2002-03-30T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2002-03-30T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2002-03-30T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2002-10-26T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "2002-10-26T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2002-10-26T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "2002-10-26T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "2003-03-29T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("2003-03-29T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "2003-03-29T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("2003-10-25T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "2003-10-25T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("2003-10-25T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "2003-10-25T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("2003-03-29T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2003-03-29T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2003-03-29T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2003-03-29T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2003-10-25T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "2003-10-25T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2003-10-25T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "2003-10-25T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:59:59", "2004-03-27T21:59:59+00:00 should be 01:59:59 AQTT");
		t.equal(moment("2004-03-27T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "03:00:00", "2004-03-27T22:00:00+00:00 should be 03:00:00 AQTST");
		t.equal(moment("2004-10-30T21:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:59:59", "2004-10-30T21:59:59+00:00 should be 02:59:59 AQTST");
		t.equal(moment("2004-10-30T22:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "02:00:00", "2004-10-30T22:00:00+00:00 should be 02:00:00 AQTT");

		t.equal(moment("2004-03-27T21:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2004-03-27T21:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2004-03-27T22:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2004-03-27T22:00:00+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2004-10-30T21:59:59+00:00").tz("Asia/Aqtau").zone(), -300, "2004-10-30T21:59:59+00:00 should be -300 minutes offset in AQTST");
		t.equal(moment("2004-10-30T22:00:00+00:00").tz("Asia/Aqtau").zone(), -240, "2004-10-30T22:00:00+00:00 should be -240 minutes offset in AQTT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-14T19:59:59+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "23:59:59", "2005-03-14T19:59:59+00:00 should be 23:59:59 AQTT");
		t.equal(moment("2005-03-14T20:00:00+00:00").tz("Asia/Aqtau").format("HH:mm:ss"), "01:00:00", "2005-03-14T20:00:00+00:00 should be 01:00:00 AQTT");

		t.equal(moment("2005-03-14T19:59:59+00:00").tz("Asia/Aqtau").zone(), -240, "2005-03-14T19:59:59+00:00 should be -240 minutes offset in AQTT");
		t.equal(moment("2005-03-14T20:00:00+00:00").tz("Asia/Aqtau").zone(), -300, "2005-03-14T20:00:00+00:00 should be -300 minutes offset in AQTT");

		t.done();
	}
};
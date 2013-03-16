var moment = require("../../moment-timezone");

exports["Asia/Samarkand"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T19:32:47+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1924-05-01T19:32:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-05-01T19:32:48+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:32:48", "1924-05-01T19:32:48+00:00 should be 23:32:48 SAMT");

		t.equal(moment("1924-05-01T19:32:47+00:00").tz("Asia/Samarkand").zone(), -267, "1924-05-01T19:32:47+00:00 should be -267 minutes offset in LMT");
		t.equal(moment("1924-05-01T19:32:48+00:00").tz("Asia/Samarkand").zone(), -240, "1924-05-01T19:32:48+00:00 should be -240 minutes offset in SAMT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T19:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1930-06-20T19:59:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1930-06-20T20:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:00:00", "1930-06-20T20:00:00+00:00 should be 01:00:00 SAMT");

		t.equal(moment("1930-06-20T19:59:59+00:00").tz("Asia/Samarkand").zone(), -240, "1930-06-20T19:59:59+00:00 should be -240 minutes offset in SAMT");
		t.equal(moment("1930-06-20T20:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1930-06-20T20:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T18:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1981-03-31T18:59:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1981-03-31T19:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:00:00", "1981-03-31T19:00:00+00:00 should be 01:00:00 SAMST");
		t.equal(moment("1981-09-30T17:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1981-09-30T17:59:59+00:00 should be 23:59:59 SAMST");
		t.equal(moment("1981-09-30T18:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "00:00:00", "1981-09-30T18:00:00+00:00 should be 00:00:00 TAST");

		t.equal(moment("1981-03-31T18:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1981-03-31T18:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1981-03-31T19:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1981-03-31T19:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1981-09-30T17:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1981-09-30T17:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1981-09-30T18:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1981-09-30T18:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1982-03-31T17:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "00:00:00", "1982-03-31T18:00:00+00:00 should be 00:00:00 SAMST");
		t.equal(moment("1982-09-30T17:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1982-09-30T17:59:59+00:00 should be 23:59:59 SAMST");
		t.equal(moment("1982-09-30T18:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:00:00", "1982-09-30T18:00:00+00:00 should be 23:00:00 SAMT");

		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1982-03-31T17:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1982-03-31T18:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1982-09-30T17:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1982-09-30T17:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1982-09-30T18:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1982-09-30T18:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T18:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1983-03-31T18:59:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1983-03-31T19:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:00:00", "1983-03-31T19:00:00+00:00 should be 01:00:00 SAMST");
		t.equal(moment("1983-09-30T17:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1983-09-30T17:59:59+00:00 should be 23:59:59 SAMST");
		t.equal(moment("1983-09-30T18:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:00:00", "1983-09-30T18:00:00+00:00 should be 23:00:00 SAMT");

		t.equal(moment("1983-03-31T18:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1983-03-31T18:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1983-03-31T19:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1983-03-31T19:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1983-09-30T17:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1983-09-30T17:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1983-09-30T18:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1983-09-30T18:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T18:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1984-03-31T18:59:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1984-03-31T19:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:00:00", "1984-03-31T19:00:00+00:00 should be 01:00:00 SAMST");
		t.equal(moment("1984-09-29T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1984-09-29T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1984-09-29T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1984-09-29T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1984-03-31T18:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1984-03-31T18:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1984-03-31T19:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1984-03-31T19:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1984-09-29T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1984-09-29T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1984-09-29T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1984-09-29T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1985-03-30T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1985-03-30T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1985-03-30T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1985-09-28T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1985-09-28T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1985-09-28T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1985-09-28T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1985-03-30T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1985-03-30T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1985-03-30T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1985-03-30T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1985-09-28T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1985-09-28T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1985-09-28T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1985-09-28T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1986-03-29T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1986-03-29T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1986-03-29T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1986-09-27T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1986-09-27T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1986-09-27T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1986-09-27T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1986-03-29T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1986-03-29T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1986-03-29T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1986-03-29T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1986-09-27T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1986-09-27T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1986-09-27T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1986-09-27T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1987-03-28T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1987-03-28T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1987-03-28T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1987-09-26T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1987-09-26T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1987-09-26T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1987-09-26T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1987-03-28T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1987-03-28T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1987-03-28T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1987-03-28T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1987-09-26T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1987-09-26T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1987-09-26T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1987-09-26T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1988-03-26T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1988-03-26T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1988-03-26T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1988-09-24T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1988-09-24T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1988-09-24T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1988-09-24T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1988-03-26T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1988-03-26T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1988-03-26T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1988-03-26T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1988-09-24T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1988-09-24T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1988-09-24T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1988-09-24T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1989-03-25T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1989-03-25T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1989-03-25T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1989-09-23T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1989-09-23T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1989-09-23T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1989-09-23T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1989-03-25T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1989-03-25T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1989-03-25T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1989-03-25T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1989-09-23T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1989-09-23T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1989-09-23T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1989-09-23T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1990-03-24T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1990-03-24T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1990-03-24T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1990-09-29T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1990-09-29T20:59:59+00:00 should be 02:59:59 SAMST");
		t.equal(moment("1990-09-29T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1990-09-29T21:00:00+00:00 should be 02:00:00 SAMT");

		t.equal(moment("1990-03-24T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1990-03-24T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1990-03-24T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1990-03-24T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1990-09-29T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1990-09-29T20:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1990-09-29T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1990-09-29T21:00:00+00:00 should be -300 minutes offset in SAMT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "01:59:59", "1991-03-30T20:59:59+00:00 should be 01:59:59 SAMT");
		t.equal(moment("1991-03-30T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "03:00:00", "1991-03-30T21:00:00+00:00 should be 03:00:00 SAMST");
		t.equal(moment("1991-08-31T17:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "23:59:59", "1991-08-31T17:59:59+00:00 should be 23:59:59 SAMST");
		t.equal(moment("1991-08-31T18:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "00:00:00", "1991-08-31T18:00:00+00:00 should be 00:00:00 UZST");
		t.equal(moment("1991-09-28T20:59:59+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:59:59", "1991-09-28T20:59:59+00:00 should be 02:59:59 UZST");
		t.equal(moment("1991-09-28T21:00:00+00:00").tz("Asia/Samarkand").format("HH:mm:ss"), "02:00:00", "1991-09-28T21:00:00+00:00 should be 02:00:00 UZT");

		t.equal(moment("1991-03-30T20:59:59+00:00").tz("Asia/Samarkand").zone(), -300, "1991-03-30T20:59:59+00:00 should be -300 minutes offset in SAMT");
		t.equal(moment("1991-03-30T21:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1991-03-30T21:00:00+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1991-08-31T17:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1991-08-31T17:59:59+00:00 should be -360 minutes offset in SAMST");
		t.equal(moment("1991-08-31T18:00:00+00:00").tz("Asia/Samarkand").zone(), -360, "1991-08-31T18:00:00+00:00 should be -360 minutes offset in UZST");
		t.equal(moment("1991-09-28T20:59:59+00:00").tz("Asia/Samarkand").zone(), -360, "1991-09-28T20:59:59+00:00 should be -360 minutes offset in UZST");
		t.equal(moment("1991-09-28T21:00:00+00:00").tz("Asia/Samarkand").zone(), -300, "1991-09-28T21:00:00+00:00 should be -300 minutes offset in UZT");

		t.done();
	}
};
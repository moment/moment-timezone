var moment = require("../../index");

exports["Asia/Tashkent"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T19:22:47+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1924-05-01T19:22:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-05-01T19:22:48+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "00:22:48", "1924-05-01T19:22:48+00:00 should be 00:22:48 TAST");

		t.equal(moment("1924-05-01T19:22:47+00:00").tz("Asia/Tashkent").zone(), -16632 / 60, "1924-05-01T19:22:47+00:00 should be -16632 / 60 minutes offset in LMT");
		t.equal(moment("1924-05-01T19:22:48+00:00").tz("Asia/Tashkent").zone(), -300, "1924-05-01T19:22:48+00:00 should be -300 minutes offset in TAST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T18:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1930-06-20T18:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1930-06-20T19:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:00:00", "1930-06-20T19:00:00+00:00 should be 01:00:00 TAST");

		t.equal(moment("1930-06-20T18:59:59+00:00").tz("Asia/Tashkent").zone(), -300, "1930-06-20T18:59:59+00:00 should be -300 minutes offset in TAST");
		t.equal(moment("1930-06-20T19:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1930-06-20T19:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T17:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1981-03-31T17:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1981-03-31T18:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:00:00", "1981-03-31T18:00:00+00:00 should be 01:00:00 TASST");
		t.equal(moment("1981-09-30T16:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1981-09-30T16:59:59+00:00 should be 23:59:59 TASST");
		t.equal(moment("1981-09-30T17:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:00:00", "1981-09-30T17:00:00+00:00 should be 23:00:00 TAST");

		t.equal(moment("1981-03-31T17:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1981-03-31T17:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1981-03-31T18:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1981-03-31T18:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1981-09-30T16:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1981-09-30T16:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1981-09-30T17:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1981-09-30T17:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1982-03-31T17:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:00:00", "1982-03-31T18:00:00+00:00 should be 01:00:00 TASST");
		t.equal(moment("1982-09-30T16:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1982-09-30T16:59:59+00:00 should be 23:59:59 TASST");
		t.equal(moment("1982-09-30T17:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:00:00", "1982-09-30T17:00:00+00:00 should be 23:00:00 TAST");

		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1982-03-31T17:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1982-03-31T18:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1982-09-30T16:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1982-09-30T16:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1982-09-30T17:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1982-09-30T17:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T17:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1983-03-31T17:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1983-03-31T18:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:00:00", "1983-03-31T18:00:00+00:00 should be 01:00:00 TASST");
		t.equal(moment("1983-09-30T16:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1983-09-30T16:59:59+00:00 should be 23:59:59 TASST");
		t.equal(moment("1983-09-30T17:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:00:00", "1983-09-30T17:00:00+00:00 should be 23:00:00 TAST");

		t.equal(moment("1983-03-31T17:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1983-03-31T17:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1983-03-31T18:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1983-03-31T18:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1983-09-30T16:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1983-09-30T16:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1983-09-30T17:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1983-09-30T17:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T17:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1984-03-31T17:59:59+00:00 should be 23:59:59 TAST");
		t.equal(moment("1984-03-31T18:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:00:00", "1984-03-31T18:00:00+00:00 should be 01:00:00 TASST");
		t.equal(moment("1984-09-29T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1984-09-29T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1984-09-29T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1984-09-29T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1984-03-31T17:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1984-03-31T17:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1984-03-31T18:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1984-03-31T18:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1984-09-29T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1984-09-29T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1984-09-29T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1984-09-29T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1985-03-30T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1985-03-30T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1985-03-30T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1985-09-28T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1985-09-28T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1985-09-28T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1985-09-28T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1985-03-30T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1985-03-30T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1985-03-30T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1985-03-30T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1985-09-28T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1985-09-28T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1985-09-28T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1985-09-28T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1986-03-29T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1986-03-29T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1986-03-29T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1986-09-27T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1986-09-27T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1986-09-27T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1986-09-27T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1986-03-29T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1986-03-29T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1986-03-29T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1986-03-29T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1986-09-27T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1986-09-27T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1986-09-27T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1986-09-27T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1987-03-28T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1987-03-28T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1987-03-28T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1987-09-26T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1987-09-26T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1987-09-26T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1987-09-26T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1987-03-28T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1987-03-28T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1987-03-28T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1987-03-28T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1987-09-26T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1987-09-26T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1987-09-26T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1987-09-26T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1988-03-26T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1988-03-26T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1988-03-26T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1988-09-24T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1988-09-24T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1988-09-24T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1988-09-24T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1988-03-26T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1988-03-26T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1988-03-26T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1988-03-26T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1988-09-24T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1988-09-24T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1988-09-24T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1988-09-24T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1989-03-25T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1989-03-25T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1989-03-25T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1989-09-23T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1989-09-23T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1989-09-23T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1989-09-23T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1989-03-25T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1989-03-25T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1989-03-25T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1989-03-25T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1989-09-23T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1989-09-23T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1989-09-23T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1989-09-23T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1990-03-24T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1990-03-24T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "03:00:00", "1990-03-24T20:00:00+00:00 should be 03:00:00 TASST");
		t.equal(moment("1990-09-29T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1990-09-29T19:59:59+00:00 should be 02:59:59 TASST");
		t.equal(moment("1990-09-29T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1990-09-29T20:00:00+00:00 should be 02:00:00 TAST");

		t.equal(moment("1990-03-24T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1990-03-24T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1990-03-24T20:00:00+00:00").tz("Asia/Tashkent").zone(), -420, "1990-03-24T20:00:00+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1990-09-29T19:59:59+00:00").tz("Asia/Tashkent").zone(), -420, "1990-09-29T19:59:59+00:00 should be -420 minutes offset in TASST");
		t.equal(moment("1990-09-29T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1990-09-29T20:00:00+00:00 should be -360 minutes offset in TAST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T19:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "01:59:59", "1991-03-30T19:59:59+00:00 should be 01:59:59 TAST");
		t.equal(moment("1991-03-30T20:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1991-03-30T20:00:00+00:00 should be 02:00:00 TASST");
		t.equal(moment("1991-08-31T17:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "23:59:59", "1991-08-31T17:59:59+00:00 should be 23:59:59 TASST");
		t.equal(moment("1991-08-31T18:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "00:00:00", "1991-08-31T18:00:00+00:00 should be 00:00:00 UZST");
		t.equal(moment("1991-09-28T20:59:59+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:59:59", "1991-09-28T20:59:59+00:00 should be 02:59:59 UZST");
		t.equal(moment("1991-09-28T21:00:00+00:00").tz("Asia/Tashkent").format("HH:mm:ss"), "02:00:00", "1991-09-28T21:00:00+00:00 should be 02:00:00 UZT");

		t.equal(moment("1991-03-30T19:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1991-03-30T19:59:59+00:00 should be -360 minutes offset in TAST");
		t.equal(moment("1991-03-30T20:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1991-03-30T20:00:00+00:00 should be -360 minutes offset in TASST");
		t.equal(moment("1991-08-31T17:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1991-08-31T17:59:59+00:00 should be -360 minutes offset in TASST");
		t.equal(moment("1991-08-31T18:00:00+00:00").tz("Asia/Tashkent").zone(), -360, "1991-08-31T18:00:00+00:00 should be -360 minutes offset in UZST");
		t.equal(moment("1991-09-28T20:59:59+00:00").tz("Asia/Tashkent").zone(), -360, "1991-09-28T20:59:59+00:00 should be -360 minutes offset in UZST");
		t.equal(moment("1991-09-28T21:00:00+00:00").tz("Asia/Tashkent").zone(), -300, "1991-09-28T21:00:00+00:00 should be -300 minutes offset in UZT");

		t.done();
	}
};
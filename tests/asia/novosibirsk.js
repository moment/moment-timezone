var moment = require("../../index");

exports["Asia/Novosibirsk"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-14T00:28:19+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "05:59:59", "1919-12-14T00:28:19+00:00 should be 05:59:59 LMT");
		t.equal(moment("1919-12-14T00:28:20+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "06:28:20", "1919-12-14T00:28:20+00:00 should be 06:28:20 NOVT");

		t.equal(moment("1919-12-14T00:28:19+00:00").tz("Asia/Novosibirsk").zone(), -19900 / 60, "1919-12-14T00:28:19+00:00 should be -19900 / 60 minutes offset in LMT");
		t.equal(moment("1919-12-14T00:28:20+00:00").tz("Asia/Novosibirsk").zone(), -360, "1919-12-14T00:28:20+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T17:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1930-06-20T17:59:59+00:00 should be 23:59:59 NOVT");
		t.equal(moment("1930-06-20T18:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:00:00", "1930-06-20T18:00:00+00:00 should be 01:00:00 NOVT");

		t.equal(moment("1930-06-20T17:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1930-06-20T17:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1930-06-20T18:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1930-06-20T18:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1981-03-31T16:59:59+00:00 should be 23:59:59 NOVT");
		t.equal(moment("1981-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:00:00", "1981-03-31T17:00:00+00:00 should be 01:00:00 NOVST");
		t.equal(moment("1981-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1981-09-30T15:59:59+00:00 should be 23:59:59 NOVST");
		t.equal(moment("1981-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:00:00", "1981-09-30T16:00:00+00:00 should be 23:00:00 NOVT");

		t.equal(moment("1981-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1981-03-31T16:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1981-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1981-03-31T17:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1981-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1981-09-30T15:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1981-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1981-09-30T16:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1982-03-31T16:59:59+00:00 should be 23:59:59 NOVT");
		t.equal(moment("1982-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:00:00", "1982-03-31T17:00:00+00:00 should be 01:00:00 NOVST");
		t.equal(moment("1982-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1982-09-30T15:59:59+00:00 should be 23:59:59 NOVST");
		t.equal(moment("1982-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:00:00", "1982-09-30T16:00:00+00:00 should be 23:00:00 NOVT");

		t.equal(moment("1982-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1982-03-31T16:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1982-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1982-03-31T17:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1982-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1982-09-30T15:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1982-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1982-09-30T16:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1983-03-31T16:59:59+00:00 should be 23:59:59 NOVT");
		t.equal(moment("1983-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:00:00", "1983-03-31T17:00:00+00:00 should be 01:00:00 NOVST");
		t.equal(moment("1983-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1983-09-30T15:59:59+00:00 should be 23:59:59 NOVST");
		t.equal(moment("1983-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:00:00", "1983-09-30T16:00:00+00:00 should be 23:00:00 NOVT");

		t.equal(moment("1983-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1983-03-31T16:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1983-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1983-03-31T17:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1983-09-30T15:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1983-09-30T15:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1983-09-30T16:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1983-09-30T16:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1984-03-31T16:59:59+00:00 should be 23:59:59 NOVT");
		t.equal(moment("1984-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:00:00", "1984-03-31T17:00:00+00:00 should be 01:00:00 NOVST");
		t.equal(moment("1984-09-29T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1984-09-29T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1984-09-29T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1984-09-29T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1984-03-31T16:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1984-03-31T16:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1984-03-31T17:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1984-03-31T17:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1984-09-29T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1984-09-29T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1984-09-29T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1984-09-29T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1985-03-30T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1985-03-30T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1985-03-30T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1985-09-28T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1985-09-28T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1985-09-28T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1985-09-28T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1985-03-30T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1985-03-30T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1985-03-30T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1985-03-30T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1985-09-28T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1985-09-28T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1985-09-28T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1985-09-28T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1986-03-29T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1986-03-29T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1986-03-29T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1986-09-27T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1986-09-27T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1986-09-27T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1986-09-27T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1986-03-29T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1986-03-29T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1986-03-29T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1986-03-29T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1986-09-27T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1986-09-27T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1986-09-27T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1986-09-27T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1987-03-28T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1987-03-28T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1987-03-28T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1987-09-26T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1987-09-26T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1987-09-26T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1987-09-26T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1987-03-28T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1987-03-28T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1987-03-28T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1987-03-28T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1987-09-26T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1987-09-26T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1987-09-26T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1987-09-26T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1988-03-26T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1988-03-26T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1988-03-26T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1988-09-24T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1988-09-24T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1988-09-24T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1988-09-24T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1988-03-26T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1988-03-26T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1988-03-26T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1988-03-26T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1988-09-24T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1988-09-24T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1988-09-24T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1988-09-24T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1989-03-25T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1989-03-25T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1989-03-25T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1989-09-23T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1989-09-23T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1989-09-23T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1989-09-23T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1989-03-25T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1989-03-25T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1989-03-25T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1989-03-25T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1989-09-23T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1989-09-23T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1989-09-23T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1989-09-23T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1990-03-24T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1990-03-24T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1990-03-24T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1990-09-29T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1990-09-29T18:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1990-09-29T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1990-09-29T19:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1990-03-24T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1990-03-24T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1990-03-24T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1990-03-24T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1990-09-29T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1990-09-29T18:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1990-09-29T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1990-09-29T19:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1991-03-30T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1991-03-30T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1991-03-30T19:00:00+00:00 should be 02:00:00 NOVST");
		t.equal(moment("1991-09-28T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1991-09-28T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1991-09-28T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1991-09-28T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1991-03-30T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1991-03-30T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1991-03-30T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1991-03-30T19:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1991-09-28T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1991-09-28T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1991-09-28T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1991-09-28T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-18T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1992-01-18T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1992-01-18T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1992-01-18T20:00:00+00:00 should be 03:00:00 NOVT");
		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "22:59:59", "1992-03-28T15:59:59+00:00 should be 22:59:59 NOVT");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "00:00:00", "1992-03-28T16:00:00+00:00 should be 00:00:00 NOVST");
		t.equal(moment("1992-09-26T14:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "22:59:59", "1992-09-26T14:59:59+00:00 should be 22:59:59 NOVST");
		t.equal(moment("1992-09-26T15:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "22:00:00", "1992-09-26T15:00:00+00:00 should be 22:00:00 NOVT");

		t.equal(moment("1992-01-18T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1992-01-18T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1992-01-18T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1992-01-18T20:00:00+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1992-03-28T15:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1992-03-28T15:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1992-03-28T16:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1992-03-28T16:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1992-09-26T14:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1992-09-26T14:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1992-09-26T15:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1992-09-26T15:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T18:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1993-03-27T18:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1993-03-27T19:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1993-03-27T19:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1993-05-22T15:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:59:59", "1993-05-22T15:59:59+00:00 should be 23:59:59 NOVST");
		t.equal(moment("1993-05-22T16:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "23:00:00", "1993-05-22T16:00:00+00:00 should be 23:00:00 NOVST");
		t.equal(moment("1993-09-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1993-09-25T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1993-09-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1993-09-25T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1993-03-27T18:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1993-03-27T18:59:59+00:00 should be -420 minutes offset in NOVT");
		t.equal(moment("1993-03-27T19:00:00+00:00").tz("Asia/Novosibirsk").zone(), -480, "1993-03-27T19:00:00+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1993-05-22T15:59:59+00:00").tz("Asia/Novosibirsk").zone(), -480, "1993-05-22T15:59:59+00:00 should be -480 minutes offset in NOVST");
		t.equal(moment("1993-05-22T16:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1993-05-22T16:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1993-09-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1993-09-25T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1993-09-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1993-09-25T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1994-03-26T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1994-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1994-03-26T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1994-09-24T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1994-09-24T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1994-09-24T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1994-09-24T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1994-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1994-03-26T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1994-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1994-03-26T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1994-09-24T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1994-09-24T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1994-09-24T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1994-09-24T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1995-03-25T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1995-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1995-03-25T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1995-09-23T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1995-09-23T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1995-09-23T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1995-09-23T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1995-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1995-03-25T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1995-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1995-03-25T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1995-09-23T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1995-09-23T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1995-09-23T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1995-09-23T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1996-03-30T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1996-03-30T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1996-03-30T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1996-10-26T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1996-10-26T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1996-10-26T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1996-10-26T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1996-03-30T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1996-03-30T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1996-03-30T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1996-03-30T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1996-10-26T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1996-10-26T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1996-10-26T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1996-10-26T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1997-03-29T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1997-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1997-03-29T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1997-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1997-10-25T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1997-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1997-10-25T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1997-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1997-03-29T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1997-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1997-03-29T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1997-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1997-10-25T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1997-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1997-10-25T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1998-03-28T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1998-03-28T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1998-03-28T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1998-10-24T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1998-10-24T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1998-10-24T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1998-10-24T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1998-03-28T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1998-03-28T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1998-03-28T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1998-03-28T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1998-10-24T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1998-10-24T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1998-10-24T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1998-10-24T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "1999-03-27T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("1999-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "1999-03-27T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("1999-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "1999-10-30T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("1999-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "1999-10-30T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("1999-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "1999-03-27T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("1999-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "1999-03-27T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1999-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "1999-10-30T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("1999-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "1999-10-30T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2000-03-25T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2000-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2000-03-25T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2000-10-28T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2000-10-28T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2000-10-28T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2000-10-28T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2000-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2000-03-25T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2000-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2000-03-25T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2000-10-28T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2000-10-28T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2000-10-28T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2000-10-28T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2001-03-24T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2001-03-24T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2001-03-24T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2001-10-27T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2001-10-27T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2001-10-27T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2001-10-27T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2001-03-24T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2001-03-24T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2001-03-24T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2001-03-24T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2001-10-27T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2001-10-27T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2001-10-27T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2001-10-27T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2002-03-30T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2002-03-30T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2002-03-30T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2002-10-26T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2002-10-26T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2002-10-26T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2002-10-26T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2002-03-30T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2002-03-30T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2002-03-30T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2002-03-30T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2002-10-26T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2002-10-26T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2002-10-26T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2002-10-26T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2003-03-29T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2003-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2003-03-29T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2003-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2003-10-25T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2003-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2003-10-25T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2003-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2003-03-29T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2003-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2003-03-29T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2003-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2003-10-25T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2003-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2003-10-25T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2004-03-27T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2004-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2004-03-27T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2004-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2004-10-30T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2004-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2004-10-30T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2004-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2004-03-27T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2004-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2004-03-27T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2004-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2004-10-30T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2004-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2004-10-30T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2005-03-26T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2005-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2005-03-26T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2005-10-29T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2005-10-29T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2005-10-29T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2005-10-29T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2005-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2005-03-26T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2005-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2005-03-26T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2005-10-29T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2005-10-29T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2005-10-29T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2005-10-29T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2006-03-25T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2006-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2006-03-25T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2006-10-28T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2006-10-28T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2006-10-28T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2006-10-28T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2006-03-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2006-03-25T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2006-03-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2006-03-25T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2006-10-28T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2006-10-28T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2006-10-28T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2006-10-28T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2007-03-24T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2007-03-24T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2007-03-24T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2007-10-27T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2007-10-27T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2007-10-27T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2007-10-27T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2007-03-24T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2007-03-24T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2007-03-24T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2007-03-24T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2007-10-27T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2007-10-27T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2007-10-27T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2007-10-27T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2008-03-29T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2008-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2008-03-29T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2008-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2008-10-25T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2008-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2008-10-25T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2008-03-29T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2008-03-29T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2008-03-29T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2008-03-29T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2008-10-25T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2008-10-25T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2008-10-25T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2008-10-25T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2009-03-28T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2009-03-28T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2009-03-28T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2009-10-24T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2009-10-24T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2009-10-24T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2009-10-24T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2009-03-28T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2009-03-28T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2009-03-28T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2009-03-28T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2009-10-24T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2009-10-24T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2009-10-24T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2009-10-24T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2010-03-27T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2010-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2010-03-27T20:00:00+00:00 should be 03:00:00 NOVST");
		t.equal(moment("2010-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:59:59", "2010-10-30T19:59:59+00:00 should be 02:59:59 NOVST");
		t.equal(moment("2010-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "02:00:00", "2010-10-30T20:00:00+00:00 should be 02:00:00 NOVT");

		t.equal(moment("2010-03-27T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2010-03-27T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2010-03-27T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2010-03-27T20:00:00+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2010-10-30T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -420, "2010-10-30T19:59:59+00:00 should be -420 minutes offset in NOVST");
		t.equal(moment("2010-10-30T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -360, "2010-10-30T20:00:00+00:00 should be -360 minutes offset in NOVT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "01:59:59", "2011-03-26T19:59:59+00:00 should be 01:59:59 NOVT");
		t.equal(moment("2011-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").format("HH:mm:ss"), "03:00:00", "2011-03-26T20:00:00+00:00 should be 03:00:00 NOVT");

		t.equal(moment("2011-03-26T19:59:59+00:00").tz("Asia/Novosibirsk").zone(), -360, "2011-03-26T19:59:59+00:00 should be -360 minutes offset in NOVT");
		t.equal(moment("2011-03-26T20:00:00+00:00").tz("Asia/Novosibirsk").zone(), -420, "2011-03-26T20:00:00+00:00 should be -420 minutes offset in NOVT");

		t.done();
	}
};
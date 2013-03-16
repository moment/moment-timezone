var moment = require("../../moment-timezone");

exports["Asia/Khandyga"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-14T14:57:46+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1919-12-14T14:57:46+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-14T14:57:47+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "22:57:47", "1919-12-14T14:57:47+00:00 should be 22:57:47 YAKT");

		t.equal(moment("1919-12-14T14:57:46+00:00").tz("Asia/Khandyga").zone(), -542, "1919-12-14T14:57:46+00:00 should be -542 minutes offset in LMT");
		t.equal(moment("1919-12-14T14:57:47+00:00").tz("Asia/Khandyga").zone(), -480, "1919-12-14T14:57:47+00:00 should be -480 minutes offset in YAKT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1930-06-20T15:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("1930-06-20T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "1930-06-20T16:00:00+00:00 should be 01:00:00 YAKT");

		t.equal(moment("1930-06-20T15:59:59+00:00").tz("Asia/Khandyga").zone(), -480, "1930-06-20T15:59:59+00:00 should be -480 minutes offset in YAKT");
		t.equal(moment("1930-06-20T16:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1930-06-20T16:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T14:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1981-03-31T14:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("1981-03-31T15:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "1981-03-31T15:00:00+00:00 should be 01:00:00 YAKST");
		t.equal(moment("1981-09-30T13:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1981-09-30T13:59:59+00:00 should be 23:59:59 YAKST");
		t.equal(moment("1981-09-30T14:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:00:00", "1981-09-30T14:00:00+00:00 should be 23:00:00 YAKT");

		t.equal(moment("1981-03-31T14:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1981-03-31T14:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1981-03-31T15:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1981-03-31T15:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1981-09-30T13:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1981-09-30T13:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1981-09-30T14:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1981-09-30T14:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T14:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1982-03-31T14:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("1982-03-31T15:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "1982-03-31T15:00:00+00:00 should be 01:00:00 YAKST");
		t.equal(moment("1982-09-30T13:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1982-09-30T13:59:59+00:00 should be 23:59:59 YAKST");
		t.equal(moment("1982-09-30T14:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:00:00", "1982-09-30T14:00:00+00:00 should be 23:00:00 YAKT");

		t.equal(moment("1982-03-31T14:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1982-03-31T14:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1982-03-31T15:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1982-03-31T15:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1982-09-30T13:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1982-09-30T13:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1982-09-30T14:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1982-09-30T14:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T14:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1983-03-31T14:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("1983-03-31T15:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "1983-03-31T15:00:00+00:00 should be 01:00:00 YAKST");
		t.equal(moment("1983-09-30T13:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1983-09-30T13:59:59+00:00 should be 23:59:59 YAKST");
		t.equal(moment("1983-09-30T14:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:00:00", "1983-09-30T14:00:00+00:00 should be 23:00:00 YAKT");

		t.equal(moment("1983-03-31T14:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1983-03-31T14:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1983-03-31T15:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1983-03-31T15:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1983-09-30T13:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1983-09-30T13:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1983-09-30T14:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1983-09-30T14:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T14:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "1984-03-31T14:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("1984-03-31T15:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "1984-03-31T15:00:00+00:00 should be 01:00:00 YAKST");
		t.equal(moment("1984-09-29T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1984-09-29T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1984-09-29T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1984-09-29T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1984-03-31T14:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1984-03-31T14:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1984-03-31T15:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1984-03-31T15:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1984-09-29T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1984-09-29T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1984-09-29T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1984-09-29T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1985-03-30T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1985-03-30T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1985-03-30T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1985-09-28T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1985-09-28T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1985-09-28T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1985-09-28T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1985-03-30T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1985-03-30T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1985-03-30T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1985-03-30T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1985-09-28T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1985-09-28T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1985-09-28T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1985-09-28T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1986-03-29T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1986-03-29T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1986-03-29T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1986-09-27T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1986-09-27T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1986-09-27T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1986-09-27T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1986-03-29T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1986-03-29T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1986-03-29T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1986-03-29T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1986-09-27T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1986-09-27T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1986-09-27T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1986-09-27T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1987-03-28T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1987-03-28T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1987-03-28T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1987-09-26T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1987-09-26T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1987-09-26T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1987-09-26T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1987-03-28T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1987-03-28T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1987-03-28T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1987-03-28T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1987-09-26T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1987-09-26T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1987-09-26T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1987-09-26T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1988-03-26T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1988-03-26T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1988-03-26T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1988-09-24T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1988-09-24T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1988-09-24T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1988-09-24T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1988-03-26T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1988-03-26T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1988-03-26T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1988-03-26T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1988-09-24T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1988-09-24T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1988-09-24T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1988-09-24T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1989-03-25T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1989-03-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1989-03-25T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1989-09-23T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1989-09-23T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1989-09-23T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1989-09-23T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1989-03-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1989-03-25T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1989-03-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1989-03-25T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1989-09-23T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1989-09-23T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1989-09-23T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1989-09-23T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1990-03-24T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1990-03-24T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1990-03-24T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1990-09-29T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1990-09-29T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1990-09-29T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1990-09-29T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1990-03-24T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1990-03-24T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1990-03-24T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1990-03-24T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1990-09-29T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1990-09-29T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1990-09-29T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1990-09-29T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1991-03-30T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1991-03-30T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1991-03-30T17:00:00+00:00 should be 02:00:00 YAKST");
		t.equal(moment("1991-09-28T17:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1991-09-28T17:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1991-09-28T18:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1991-09-28T18:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1991-03-30T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1991-03-30T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1991-03-30T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1991-03-30T17:00:00+00:00 should be -540 minutes offset in YAKST");
		t.equal(moment("1991-09-28T17:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1991-09-28T17:59:59+00:00 should be -540 minutes offset in YAKST");
		t.equal(moment("1991-09-28T18:00:00+00:00").tz("Asia/Khandyga").zone(), -480, "1991-09-28T18:00:00+00:00 should be -480 minutes offset in YAKT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-18T17:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1992-01-18T17:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1992-01-18T18:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1992-01-18T18:00:00+00:00 should be 03:00:00 YAKT");
		t.equal(moment("1992-03-28T13:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "22:59:59", "1992-03-28T13:59:59+00:00 should be 22:59:59 YAKT");
		t.equal(moment("1992-03-28T14:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "00:00:00", "1992-03-28T14:00:00+00:00 should be 00:00:00 YAKST");
		t.equal(moment("1992-09-26T12:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "22:59:59", "1992-09-26T12:59:59+00:00 should be 22:59:59 YAKST");
		t.equal(moment("1992-09-26T13:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "22:00:00", "1992-09-26T13:00:00+00:00 should be 22:00:00 YAKT");

		t.equal(moment("1992-01-18T17:59:59+00:00").tz("Asia/Khandyga").zone(), -480, "1992-01-18T17:59:59+00:00 should be -480 minutes offset in YAKT");
		t.equal(moment("1992-01-18T18:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1992-01-18T18:00:00+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1992-03-28T13:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1992-03-28T13:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1992-03-28T14:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1992-03-28T14:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1992-09-26T12:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1992-09-26T12:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1992-09-26T13:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1992-09-26T13:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1993-03-27T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1993-03-27T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1993-03-27T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1993-09-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1993-09-25T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1993-09-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1993-09-25T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1993-03-27T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1993-03-27T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1993-03-27T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1993-03-27T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1993-09-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1993-09-25T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1993-09-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1993-09-25T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1994-03-26T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1994-03-26T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1994-03-26T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1994-09-24T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1994-09-24T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1994-09-24T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1994-09-24T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1994-03-26T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1994-03-26T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1994-03-26T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1994-03-26T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1994-09-24T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1994-09-24T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1994-09-24T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1994-09-24T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1995-03-25T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1995-03-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1995-03-25T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1995-09-23T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1995-09-23T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1995-09-23T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1995-09-23T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1995-03-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1995-03-25T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1995-03-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1995-03-25T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1995-09-23T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1995-09-23T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1995-09-23T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1995-09-23T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1996-03-30T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1996-03-30T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1996-03-30T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1996-10-26T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1996-10-26T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1996-10-26T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1996-10-26T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1996-03-30T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1996-03-30T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1996-03-30T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1996-03-30T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1996-10-26T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1996-10-26T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1996-10-26T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1996-10-26T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1997-03-29T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1997-03-29T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1997-03-29T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1997-10-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1997-10-25T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1997-10-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1997-10-25T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1997-03-29T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1997-03-29T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1997-03-29T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1997-03-29T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1997-10-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1997-10-25T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1997-10-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1997-10-25T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1998-03-28T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1998-03-28T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1998-03-28T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1998-10-24T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1998-10-24T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1998-10-24T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1998-10-24T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1998-03-28T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1998-03-28T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1998-03-28T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1998-03-28T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1998-10-24T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1998-10-24T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1998-10-24T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1998-10-24T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "1999-03-27T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("1999-03-27T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "1999-03-27T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("1999-10-30T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "1999-10-30T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("1999-10-30T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "1999-10-30T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("1999-03-27T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "1999-03-27T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("1999-03-27T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "1999-03-27T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1999-10-30T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "1999-10-30T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("1999-10-30T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "1999-10-30T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2000-03-25T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("2000-03-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2000-03-25T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("2000-10-28T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2000-10-28T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("2000-10-28T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2000-10-28T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("2000-03-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "2000-03-25T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2000-03-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2000-03-25T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2000-10-28T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2000-10-28T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2000-10-28T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "2000-10-28T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2001-03-24T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("2001-03-24T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2001-03-24T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("2001-10-27T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2001-10-27T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("2001-10-27T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2001-10-27T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("2001-03-24T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "2001-03-24T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2001-03-24T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2001-03-24T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2001-10-27T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2001-10-27T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2001-10-27T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "2001-10-27T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2002-03-30T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("2002-03-30T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2002-03-30T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("2002-10-26T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2002-10-26T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("2002-10-26T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2002-10-26T17:00:00+00:00 should be 02:00:00 YAKT");

		t.equal(moment("2002-03-30T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "2002-03-30T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2002-03-30T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2002-03-30T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2002-10-26T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2002-10-26T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2002-10-26T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "2002-10-26T17:00:00+00:00 should be -540 minutes offset in YAKT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2003-03-29T16:59:59+00:00 should be 01:59:59 YAKT");
		t.equal(moment("2003-03-29T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2003-03-29T17:00:00+00:00 should be 03:00:00 YAKST");
		t.equal(moment("2003-10-25T16:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2003-10-25T16:59:59+00:00 should be 02:59:59 YAKST");
		t.equal(moment("2003-10-25T17:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2003-10-25T17:00:00+00:00 should be 02:00:00 YAKT");
		t.equal(moment("2003-12-31T14:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "2003-12-31T14:59:59+00:00 should be 23:59:59 YAKT");
		t.equal(moment("2003-12-31T15:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:00:00", "2003-12-31T15:00:00+00:00 should be 01:00:00 VLAT");

		t.equal(moment("2003-03-29T16:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "2003-03-29T16:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2003-03-29T17:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2003-03-29T17:00:00+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2003-10-25T16:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2003-10-25T16:59:59+00:00 should be -600 minutes offset in YAKST");
		t.equal(moment("2003-10-25T17:00:00+00:00").tz("Asia/Khandyga").zone(), -540, "2003-10-25T17:00:00+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2003-12-31T14:59:59+00:00").tz("Asia/Khandyga").zone(), -540, "2003-12-31T14:59:59+00:00 should be -540 minutes offset in YAKT");
		t.equal(moment("2003-12-31T15:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2003-12-31T15:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2004-03-27T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2004-03-27T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2004-10-30T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2004-10-30T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2004-10-30T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2004-10-30T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2004-03-27T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2004-03-27T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2004-03-27T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2004-03-27T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2004-10-30T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2004-10-30T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2004-10-30T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2004-10-30T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2005-03-26T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2005-03-26T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2005-10-29T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2005-10-29T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2005-10-29T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2005-10-29T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2005-03-26T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2005-03-26T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2005-03-26T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2005-03-26T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2005-10-29T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2005-10-29T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2005-10-29T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2005-10-29T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2006-03-25T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2006-03-25T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2006-03-25T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2006-10-28T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2006-10-28T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2006-10-28T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2006-10-28T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2006-03-25T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2006-03-25T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2006-03-25T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2006-03-25T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2006-10-28T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2006-10-28T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2006-10-28T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2006-10-28T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2007-03-24T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2007-03-24T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2007-10-27T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2007-10-27T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2007-10-27T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2007-10-27T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2007-03-24T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2007-03-24T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2007-03-24T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2007-03-24T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2007-10-27T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2007-10-27T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2007-10-27T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2007-10-27T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2008-03-29T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2008-03-29T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2008-03-29T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2008-10-25T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2008-10-25T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2008-10-25T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2008-10-25T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2008-03-29T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2008-03-29T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2008-03-29T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2008-03-29T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2008-10-25T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2008-10-25T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2008-10-25T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2008-10-25T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2009-03-28T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2009-03-28T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2009-03-28T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2009-10-24T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2009-10-24T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2009-10-24T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2009-10-24T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2009-03-28T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2009-03-28T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2009-03-28T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2009-03-28T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2009-10-24T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2009-10-24T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2009-10-24T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2009-10-24T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2010-03-27T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2010-03-27T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2010-03-27T16:00:00+00:00 should be 03:00:00 VLAST");
		t.equal(moment("2010-10-30T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:59:59", "2010-10-30T15:59:59+00:00 should be 02:59:59 VLAST");
		t.equal(moment("2010-10-30T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "02:00:00", "2010-10-30T16:00:00+00:00 should be 02:00:00 VLAT");

		t.equal(moment("2010-03-27T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2010-03-27T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2010-03-27T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2010-03-27T16:00:00+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2010-10-30T15:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2010-10-30T15:59:59+00:00 should be -660 minutes offset in VLAST");
		t.equal(moment("2010-10-30T16:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2010-10-30T16:00:00+00:00 should be -600 minutes offset in VLAT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T15:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "01:59:59", "2011-03-26T15:59:59+00:00 should be 01:59:59 VLAT");
		t.equal(moment("2011-03-26T16:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "03:00:00", "2011-03-26T16:00:00+00:00 should be 03:00:00 VLAT");
		t.equal(moment("2011-09-12T12:59:59+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:59:59", "2011-09-12T12:59:59+00:00 should be 23:59:59 VLAT");
		t.equal(moment("2011-09-12T13:00:00+00:00").tz("Asia/Khandyga").format("HH:mm:ss"), "23:00:00", "2011-09-12T13:00:00+00:00 should be 23:00:00 YAKT");

		t.equal(moment("2011-03-26T15:59:59+00:00").tz("Asia/Khandyga").zone(), -600, "2011-03-26T15:59:59+00:00 should be -600 minutes offset in VLAT");
		t.equal(moment("2011-03-26T16:00:00+00:00").tz("Asia/Khandyga").zone(), -660, "2011-03-26T16:00:00+00:00 should be -660 minutes offset in VLAT");
		t.equal(moment("2011-09-12T12:59:59+00:00").tz("Asia/Khandyga").zone(), -660, "2011-09-12T12:59:59+00:00 should be -660 minutes offset in VLAT");
		t.equal(moment("2011-09-12T13:00:00+00:00").tz("Asia/Khandyga").zone(), -600, "2011-09-12T13:00:00+00:00 should be -600 minutes offset in YAKT");

		t.done();
	}
};
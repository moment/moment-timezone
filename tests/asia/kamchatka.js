var moment = require("../../moment-timezone");

exports["Asia/Kamchatka"] = {

	"1922" : function (t) {
		t.equal(moment("1922-11-09T13:25:23+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1922-11-09T13:25:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1922-11-09T13:25:24+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "00:25:24", "1922-11-09T13:25:24+00:00 should be 00:25:24 PETT");

		t.equal(moment("1922-11-09T13:25:23+00:00").tz("Asia/Kamchatka").zone(), -38076 / 60, "1922-11-09T13:25:23+00:00 should be -38076 / 60 minutes offset in LMT");
		t.equal(moment("1922-11-09T13:25:24+00:00").tz("Asia/Kamchatka").zone(), -660, "1922-11-09T13:25:24+00:00 should be -660 minutes offset in PETT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T12:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1930-06-20T12:59:59+00:00 should be 23:59:59 PETT");
		t.equal(moment("1930-06-20T13:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:00:00", "1930-06-20T13:00:00+00:00 should be 01:00:00 PETT");

		t.equal(moment("1930-06-20T12:59:59+00:00").tz("Asia/Kamchatka").zone(), -660, "1930-06-20T12:59:59+00:00 should be -660 minutes offset in PETT");
		t.equal(moment("1930-06-20T13:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1930-06-20T13:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T11:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1981-03-31T11:59:59+00:00 should be 23:59:59 PETT");
		t.equal(moment("1981-03-31T12:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:00:00", "1981-03-31T12:00:00+00:00 should be 01:00:00 PETST");
		t.equal(moment("1981-09-30T10:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1981-09-30T10:59:59+00:00 should be 23:59:59 PETST");
		t.equal(moment("1981-09-30T11:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:00:00", "1981-09-30T11:00:00+00:00 should be 23:00:00 PETT");

		t.equal(moment("1981-03-31T11:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1981-03-31T11:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1981-03-31T12:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1981-03-31T12:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1981-09-30T10:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1981-09-30T10:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1981-09-30T11:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1981-09-30T11:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T11:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1982-03-31T11:59:59+00:00 should be 23:59:59 PETT");
		t.equal(moment("1982-03-31T12:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:00:00", "1982-03-31T12:00:00+00:00 should be 01:00:00 PETST");
		t.equal(moment("1982-09-30T10:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1982-09-30T10:59:59+00:00 should be 23:59:59 PETST");
		t.equal(moment("1982-09-30T11:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:00:00", "1982-09-30T11:00:00+00:00 should be 23:00:00 PETT");

		t.equal(moment("1982-03-31T11:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1982-03-31T11:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1982-03-31T12:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1982-03-31T12:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1982-09-30T10:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1982-09-30T10:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1982-09-30T11:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1982-09-30T11:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T11:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1983-03-31T11:59:59+00:00 should be 23:59:59 PETT");
		t.equal(moment("1983-03-31T12:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:00:00", "1983-03-31T12:00:00+00:00 should be 01:00:00 PETST");
		t.equal(moment("1983-09-30T10:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1983-09-30T10:59:59+00:00 should be 23:59:59 PETST");
		t.equal(moment("1983-09-30T11:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:00:00", "1983-09-30T11:00:00+00:00 should be 23:00:00 PETT");

		t.equal(moment("1983-03-31T11:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1983-03-31T11:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1983-03-31T12:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1983-03-31T12:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1983-09-30T10:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1983-09-30T10:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1983-09-30T11:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1983-09-30T11:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T11:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "23:59:59", "1984-03-31T11:59:59+00:00 should be 23:59:59 PETT");
		t.equal(moment("1984-03-31T12:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:00:00", "1984-03-31T12:00:00+00:00 should be 01:00:00 PETST");
		t.equal(moment("1984-09-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1984-09-29T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1984-09-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1984-09-29T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1984-03-31T11:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1984-03-31T11:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1984-03-31T12:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1984-03-31T12:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1984-09-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1984-09-29T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1984-09-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1984-09-29T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1985-03-30T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1985-03-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1985-03-30T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1985-09-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1985-09-28T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1985-09-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1985-09-28T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1985-03-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1985-03-30T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1985-03-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1985-03-30T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1985-09-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1985-09-28T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1985-09-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1985-09-28T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1986-03-29T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1986-03-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1986-03-29T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1986-09-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1986-09-27T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1986-09-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1986-09-27T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1986-03-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1986-03-29T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1986-03-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1986-03-29T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1986-09-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1986-09-27T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1986-09-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1986-09-27T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1987-03-28T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1987-03-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1987-03-28T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1987-09-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1987-09-26T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1987-09-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1987-09-26T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1987-03-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1987-03-28T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1987-03-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1987-03-28T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1987-09-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1987-09-26T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1987-09-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1987-09-26T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1988-03-26T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1988-03-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1988-03-26T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1988-09-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1988-09-24T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1988-09-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1988-09-24T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1988-03-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1988-03-26T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1988-03-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1988-03-26T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1988-09-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1988-09-24T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1988-09-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1988-09-24T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1989-03-25T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1989-03-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1989-03-25T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1989-09-23T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1989-09-23T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1989-09-23T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1989-09-23T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1989-03-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1989-03-25T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1989-03-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1989-03-25T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1989-09-23T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1989-09-23T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1989-09-23T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1989-09-23T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1990-03-24T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1990-03-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1990-03-24T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1990-09-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1990-09-29T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1990-09-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1990-09-29T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1990-03-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1990-03-24T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1990-03-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1990-03-24T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1990-09-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1990-09-29T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1990-09-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1990-09-29T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1991-03-30T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1991-03-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1991-03-30T14:00:00+00:00 should be 02:00:00 PETST");
		t.equal(moment("1991-09-28T14:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1991-09-28T14:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1991-09-28T15:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1991-09-28T15:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1991-03-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1991-03-30T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1991-03-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1991-03-30T14:00:00+00:00 should be -720 minutes offset in PETST");
		t.equal(moment("1991-09-28T14:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1991-09-28T14:59:59+00:00 should be -720 minutes offset in PETST");
		t.equal(moment("1991-09-28T15:00:00+00:00").tz("Asia/Kamchatka").zone(), -660, "1991-09-28T15:00:00+00:00 should be -660 minutes offset in PETT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-18T14:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1992-01-18T14:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1992-01-18T15:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1992-01-18T15:00:00+00:00 should be 03:00:00 PETT");
		t.equal(moment("1992-03-28T10:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "22:59:59", "1992-03-28T10:59:59+00:00 should be 22:59:59 PETT");
		t.equal(moment("1992-03-28T11:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "00:00:00", "1992-03-28T11:00:00+00:00 should be 00:00:00 PETST");
		t.equal(moment("1992-09-26T09:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "22:59:59", "1992-09-26T09:59:59+00:00 should be 22:59:59 PETST");
		t.equal(moment("1992-09-26T10:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "22:00:00", "1992-09-26T10:00:00+00:00 should be 22:00:00 PETT");

		t.equal(moment("1992-01-18T14:59:59+00:00").tz("Asia/Kamchatka").zone(), -660, "1992-01-18T14:59:59+00:00 should be -660 minutes offset in PETT");
		t.equal(moment("1992-01-18T15:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1992-01-18T15:00:00+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1992-03-28T10:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1992-03-28T10:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1992-03-28T11:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1992-03-28T11:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1992-09-26T09:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1992-09-26T09:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1992-09-26T10:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1992-09-26T10:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1993-03-27T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1993-03-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1993-03-27T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1993-09-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1993-09-25T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1993-09-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1993-09-25T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1993-03-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1993-03-27T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1993-03-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1993-03-27T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1993-09-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1993-09-25T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1993-09-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1993-09-25T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1994-03-26T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1994-03-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1994-03-26T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1994-09-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1994-09-24T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1994-09-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1994-09-24T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1994-03-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1994-03-26T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1994-03-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1994-03-26T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1994-09-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1994-09-24T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1994-09-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1994-09-24T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1995-03-25T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1995-03-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1995-03-25T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1995-09-23T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1995-09-23T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1995-09-23T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1995-09-23T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1995-03-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1995-03-25T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1995-03-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1995-03-25T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1995-09-23T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1995-09-23T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1995-09-23T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1995-09-23T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1996-03-30T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1996-03-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1996-03-30T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1996-10-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1996-10-26T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1996-10-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1996-10-26T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1996-03-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1996-03-30T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1996-03-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1996-03-30T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1996-10-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1996-10-26T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1996-10-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1996-10-26T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1997-03-29T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1997-03-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1997-03-29T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1997-10-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1997-10-25T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1997-10-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1997-10-25T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1997-03-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1997-03-29T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1997-03-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1997-03-29T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1997-10-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1997-10-25T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1997-10-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1997-10-25T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1998-03-28T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1998-03-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1998-03-28T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1998-10-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1998-10-24T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1998-10-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1998-10-24T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1998-03-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1998-03-28T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1998-03-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1998-03-28T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1998-10-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1998-10-24T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1998-10-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1998-10-24T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "1999-03-27T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("1999-03-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "1999-03-27T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("1999-10-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "1999-10-30T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("1999-10-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "1999-10-30T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("1999-03-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "1999-03-27T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("1999-03-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "1999-03-27T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1999-10-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "1999-10-30T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("1999-10-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "1999-10-30T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2000-03-25T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2000-03-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2000-03-25T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2000-10-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2000-10-28T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2000-10-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2000-10-28T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2000-03-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2000-03-25T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2000-03-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2000-03-25T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2000-10-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2000-10-28T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2000-10-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2000-10-28T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2001-03-24T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2001-03-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2001-03-24T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2001-10-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2001-10-27T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2001-10-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2001-10-27T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2001-03-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2001-03-24T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2001-03-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2001-03-24T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2001-10-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2001-10-27T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2001-10-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2001-10-27T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2002-03-30T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2002-03-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2002-03-30T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2002-10-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2002-10-26T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2002-10-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2002-10-26T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2002-03-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2002-03-30T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2002-03-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2002-03-30T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2002-10-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2002-10-26T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2002-10-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2002-10-26T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2003-03-29T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2003-03-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2003-03-29T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2003-10-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2003-10-25T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2003-10-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2003-10-25T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2003-03-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2003-03-29T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2003-03-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2003-03-29T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2003-10-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2003-10-25T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2003-10-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2003-10-25T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2004-03-27T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2004-03-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2004-03-27T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2004-10-30T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2004-10-30T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2004-10-30T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2004-10-30T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2004-03-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2004-03-27T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2004-03-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2004-03-27T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2004-10-30T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2004-10-30T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2004-10-30T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2004-10-30T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2005-03-26T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2005-03-26T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2005-03-26T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2005-10-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2005-10-29T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2005-10-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2005-10-29T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2005-03-26T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2005-03-26T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2005-03-26T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2005-03-26T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2005-10-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2005-10-29T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2005-10-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2005-10-29T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2006-03-25T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2006-03-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2006-03-25T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2006-10-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2006-10-28T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2006-10-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2006-10-28T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2006-03-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2006-03-25T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2006-03-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2006-03-25T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2006-10-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2006-10-28T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2006-10-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2006-10-28T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2007-03-24T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2007-03-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2007-03-24T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2007-10-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2007-10-27T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2007-10-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2007-10-27T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2007-03-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2007-03-24T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2007-03-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2007-03-24T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2007-10-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2007-10-27T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2007-10-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2007-10-27T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2008-03-29T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2008-03-29T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2008-03-29T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2008-10-25T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2008-10-25T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2008-10-25T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2008-10-25T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2008-03-29T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2008-03-29T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2008-03-29T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2008-03-29T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2008-10-25T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2008-10-25T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2008-10-25T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2008-10-25T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2009-03-28T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2009-03-28T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2009-03-28T14:00:00+00:00 should be 03:00:00 PETST");
		t.equal(moment("2009-10-24T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2009-10-24T13:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2009-10-24T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2009-10-24T14:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2009-03-28T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2009-03-28T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2009-03-28T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -780, "2009-03-28T14:00:00+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2009-10-24T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -780, "2009-10-24T13:59:59+00:00 should be -780 minutes offset in PETST");
		t.equal(moment("2009-10-24T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2009-10-24T14:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T13:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2010-03-27T13:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2010-03-27T14:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2010-03-27T14:00:00+00:00 should be 02:00:00 PETST");
		t.equal(moment("2010-10-30T14:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:59:59", "2010-10-30T14:59:59+00:00 should be 02:59:59 PETST");
		t.equal(moment("2010-10-30T15:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "02:00:00", "2010-10-30T15:00:00+00:00 should be 02:00:00 PETT");

		t.equal(moment("2010-03-27T13:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2010-03-27T13:59:59+00:00 should be -720 minutes offset in PETT");
		t.equal(moment("2010-03-27T14:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2010-03-27T14:00:00+00:00 should be -720 minutes offset in PETST");
		t.equal(moment("2010-10-30T14:59:59+00:00").tz("Asia/Kamchatka").zone(), -720, "2010-10-30T14:59:59+00:00 should be -720 minutes offset in PETST");
		t.equal(moment("2010-10-30T15:00:00+00:00").tz("Asia/Kamchatka").zone(), -660, "2010-10-30T15:00:00+00:00 should be -660 minutes offset in PETT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T14:59:59+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "01:59:59", "2011-03-26T14:59:59+00:00 should be 01:59:59 PETT");
		t.equal(moment("2011-03-26T15:00:00+00:00").tz("Asia/Kamchatka").format("HH:mm:ss"), "03:00:00", "2011-03-26T15:00:00+00:00 should be 03:00:00 PETT");

		t.equal(moment("2011-03-26T14:59:59+00:00").tz("Asia/Kamchatka").zone(), -660, "2011-03-26T14:59:59+00:00 should be -660 minutes offset in PETT");
		t.equal(moment("2011-03-26T15:00:00+00:00").tz("Asia/Kamchatka").zone(), -720, "2011-03-26T15:00:00+00:00 should be -720 minutes offset in PETT");

		t.done();
	}
};
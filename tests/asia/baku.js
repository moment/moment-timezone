var moment = require("../../moment-timezone");

exports["Asia/Baku"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T20:40:35+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1924-05-01T20:40:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-05-01T20:40:36+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:40:36", "1924-05-01T20:40:36+00:00 should be 23:40:36 BAKT");

		t.equal(moment("1924-05-01T20:40:35+00:00").tz("Asia/Baku").zone(), -199, "1924-05-01T20:40:35+00:00 should be -199 minutes offset in LMT");
		t.equal(moment("1924-05-01T20:40:36+00:00").tz("Asia/Baku").zone(), -180, "1924-05-01T20:40:36+00:00 should be -180 minutes offset in BAKT");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-02-28T20:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1957-02-28T20:59:59+00:00 should be 23:59:59 BAKT");
		t.equal(moment("1957-02-28T21:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:00:00", "1957-02-28T21:00:00+00:00 should be 01:00:00 BAKT");

		t.equal(moment("1957-02-28T20:59:59+00:00").tz("Asia/Baku").zone(), -180, "1957-02-28T20:59:59+00:00 should be -180 minutes offset in BAKT");
		t.equal(moment("1957-02-28T21:00:00+00:00").tz("Asia/Baku").zone(), -240, "1957-02-28T21:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1981-03-31T19:59:59+00:00 should be 23:59:59 BAKT");
		t.equal(moment("1981-03-31T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:00:00", "1981-03-31T20:00:00+00:00 should be 01:00:00 BAKST");
		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1981-09-30T18:59:59+00:00 should be 23:59:59 BAKST");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:00:00", "1981-09-30T19:00:00+00:00 should be 23:00:00 BAKT");

		t.equal(moment("1981-03-31T19:59:59+00:00").tz("Asia/Baku").zone(), -240, "1981-03-31T19:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1981-03-31T20:00:00+00:00").tz("Asia/Baku").zone(), -300, "1981-03-31T20:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1981-09-30T18:59:59+00:00").tz("Asia/Baku").zone(), -300, "1981-09-30T18:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1981-09-30T19:00:00+00:00").tz("Asia/Baku").zone(), -240, "1981-09-30T19:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1982-03-31T19:59:59+00:00 should be 23:59:59 BAKT");
		t.equal(moment("1982-03-31T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:00:00", "1982-03-31T20:00:00+00:00 should be 01:00:00 BAKST");
		t.equal(moment("1982-09-30T18:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1982-09-30T18:59:59+00:00 should be 23:59:59 BAKST");
		t.equal(moment("1982-09-30T19:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:00:00", "1982-09-30T19:00:00+00:00 should be 23:00:00 BAKT");

		t.equal(moment("1982-03-31T19:59:59+00:00").tz("Asia/Baku").zone(), -240, "1982-03-31T19:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1982-03-31T20:00:00+00:00").tz("Asia/Baku").zone(), -300, "1982-03-31T20:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1982-09-30T18:59:59+00:00").tz("Asia/Baku").zone(), -300, "1982-09-30T18:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1982-09-30T19:00:00+00:00").tz("Asia/Baku").zone(), -240, "1982-09-30T19:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1983-03-31T19:59:59+00:00 should be 23:59:59 BAKT");
		t.equal(moment("1983-03-31T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:00:00", "1983-03-31T20:00:00+00:00 should be 01:00:00 BAKST");
		t.equal(moment("1983-09-30T18:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1983-09-30T18:59:59+00:00 should be 23:59:59 BAKST");
		t.equal(moment("1983-09-30T19:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:00:00", "1983-09-30T19:00:00+00:00 should be 23:00:00 BAKT");

		t.equal(moment("1983-03-31T19:59:59+00:00").tz("Asia/Baku").zone(), -240, "1983-03-31T19:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1983-03-31T20:00:00+00:00").tz("Asia/Baku").zone(), -300, "1983-03-31T20:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1983-09-30T18:59:59+00:00").tz("Asia/Baku").zone(), -300, "1983-09-30T18:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1983-09-30T19:00:00+00:00").tz("Asia/Baku").zone(), -240, "1983-09-30T19:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1984-03-31T19:59:59+00:00 should be 23:59:59 BAKT");
		t.equal(moment("1984-03-31T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:00:00", "1984-03-31T20:00:00+00:00 should be 01:00:00 BAKST");
		t.equal(moment("1984-09-29T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1984-09-29T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1984-09-29T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1984-09-29T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1984-03-31T19:59:59+00:00").tz("Asia/Baku").zone(), -240, "1984-03-31T19:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1984-03-31T20:00:00+00:00").tz("Asia/Baku").zone(), -300, "1984-03-31T20:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1984-09-29T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1984-09-29T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1984-09-29T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1984-09-29T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1985-03-30T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1985-03-30T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1985-03-30T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1985-09-28T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1985-09-28T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1985-03-30T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1985-03-30T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1985-03-30T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1985-03-30T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1985-09-28T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1985-09-28T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1985-09-28T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1985-09-28T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1986-03-29T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1986-03-29T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1986-09-27T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1986-09-27T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1986-03-29T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1986-03-29T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1986-03-29T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1986-03-29T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1986-09-27T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1986-09-27T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1986-09-27T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1986-09-27T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1987-03-28T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1987-03-28T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1987-09-26T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1987-09-26T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1987-03-28T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1987-03-28T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1987-03-28T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1987-03-28T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1987-09-26T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1987-09-26T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1987-09-26T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1987-09-26T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1988-03-26T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1988-03-26T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1988-09-24T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1988-09-24T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1988-03-26T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1988-03-26T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1988-03-26T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1988-03-26T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1988-09-24T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1988-09-24T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1988-09-24T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1988-09-24T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1989-03-25T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1989-03-25T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1989-09-23T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1989-09-23T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1989-03-25T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1989-03-25T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1989-03-25T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1989-03-25T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1989-09-23T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1989-09-23T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1989-09-23T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1989-09-23T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1990-03-24T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:00:00", "1990-03-24T22:00:00+00:00 should be 03:00:00 BAKST");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1990-09-29T21:59:59+00:00 should be 02:59:59 BAKST");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1990-09-29T22:00:00+00:00 should be 02:00:00 BAKT");

		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1990-03-24T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Baku").zone(), -300, "1990-03-24T22:00:00+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1990-09-29T21:59:59+00:00").tz("Asia/Baku").zone(), -300, "1990-09-29T21:59:59+00:00 should be -300 minutes offset in BAKST");
		t.equal(moment("1990-09-29T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1990-09-29T22:00:00+00:00 should be -240 minutes offset in BAKT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T21:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "01:59:59", "1991-03-30T21:59:59+00:00 should be 01:59:59 BAKT");
		t.equal(moment("1991-03-30T22:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1991-03-30T22:00:00+00:00 should be 02:00:00 BAKST");
		t.equal(moment("1991-08-29T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:59:59", "1991-08-29T19:59:59+00:00 should be 23:59:59 BAKST");
		t.equal(moment("1991-08-29T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "00:00:00", "1991-08-29T20:00:00+00:00 should be 00:00:00 AZST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:59:59", "1991-09-28T22:59:59+00:00 should be 02:59:59 AZST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "02:00:00", "1991-09-28T23:00:00+00:00 should be 02:00:00 AZT");

		t.equal(moment("1991-03-30T21:59:59+00:00").tz("Asia/Baku").zone(), -240, "1991-03-30T21:59:59+00:00 should be -240 minutes offset in BAKT");
		t.equal(moment("1991-03-30T22:00:00+00:00").tz("Asia/Baku").zone(), -240, "1991-03-30T22:00:00+00:00 should be -240 minutes offset in BAKST");
		t.equal(moment("1991-08-29T19:59:59+00:00").tz("Asia/Baku").zone(), -240, "1991-08-29T19:59:59+00:00 should be -240 minutes offset in BAKST");
		t.equal(moment("1991-08-29T20:00:00+00:00").tz("Asia/Baku").zone(), -240, "1991-08-29T20:00:00+00:00 should be -240 minutes offset in AZST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Asia/Baku").zone(), -240, "1991-09-28T22:59:59+00:00 should be -240 minutes offset in AZST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Asia/Baku").zone(), -180, "1991-09-28T23:00:00+00:00 should be -180 minutes offset in AZT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T19:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "22:59:59", "1992-03-28T19:59:59+00:00 should be 22:59:59 AZT");
		t.equal(moment("1992-03-28T20:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "00:00:00", "1992-03-28T20:00:00+00:00 should be 00:00:00 AZST");
		t.equal(moment("1992-09-26T18:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "22:59:59", "1992-09-26T18:59:59+00:00 should be 22:59:59 AZST");
		t.equal(moment("1992-09-26T19:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "23:00:00", "1992-09-26T19:00:00+00:00 should be 23:00:00 AZT");

		t.equal(moment("1992-03-28T19:59:59+00:00").tz("Asia/Baku").zone(), -180, "1992-03-28T19:59:59+00:00 should be -180 minutes offset in AZT");
		t.equal(moment("1992-03-28T20:00:00+00:00").tz("Asia/Baku").zone(), -240, "1992-03-28T20:00:00+00:00 should be -240 minutes offset in AZST");
		t.equal(moment("1992-09-26T18:59:59+00:00").tz("Asia/Baku").zone(), -240, "1992-09-26T18:59:59+00:00 should be -240 minutes offset in AZST");
		t.equal(moment("1992-09-26T19:00:00+00:00").tz("Asia/Baku").zone(), -240, "1992-09-26T19:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "1996-03-31T00:59:59+00:00 should be 04:59:59 AZT");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "06:00:00", "1996-03-31T01:00:00+00:00 should be 06:00:00 AZST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:59:59", "1996-10-27T00:59:59+00:00 should be 05:59:59 AZST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "1996-10-27T01:00:00+00:00 should be 05:00:00 AZT");

		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Asia/Baku").zone(), -240, "1996-03-31T00:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Asia/Baku").zone(), -300, "1996-03-31T01:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Asia/Baku").zone(), -300, "1996-10-27T00:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Asia/Baku").zone(), -240, "1996-10-27T01:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "1997-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("1997-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "1997-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("1997-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "1997-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("1997-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "1997-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("1997-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "1997-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("1997-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "1997-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1997-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "1997-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1997-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "1997-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "1998-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("1998-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "1998-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("1998-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "1998-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("1998-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "1998-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("1998-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "1998-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("1998-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "1998-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1998-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "1998-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1998-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "1998-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "1999-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("1999-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "1999-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("1999-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "1999-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("1999-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "1999-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("1999-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "1999-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("1999-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "1999-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1999-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "1999-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("1999-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "1999-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2000-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2000-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2000-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2000-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2000-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2000-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2000-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2000-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2000-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2000-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2000-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2000-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2000-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2000-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2000-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2001-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2001-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2001-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2001-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2001-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2001-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2001-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2001-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2001-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2001-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2001-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2001-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2001-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2001-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2001-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2002-03-30T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2002-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2002-03-31T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2002-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2002-10-26T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2002-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2002-10-27T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2002-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2002-03-30T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2002-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2002-03-31T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2002-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2002-10-26T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2002-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2002-10-27T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2003-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2003-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2003-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2003-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2003-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2003-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2003-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2003-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2003-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2003-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2003-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2003-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2003-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2003-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2003-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2004-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2004-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2004-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2004-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2004-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2004-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2004-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2004-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2004-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2004-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2004-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2004-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2004-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2004-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2004-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2005-03-26T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2005-03-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2005-03-27T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2005-10-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2005-10-29T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2005-10-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2005-10-30T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2005-03-26T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2005-03-26T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2005-03-27T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2005-03-27T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2005-10-29T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2005-10-29T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2005-10-30T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2005-10-30T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2006-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2006-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2006-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2006-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2006-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2006-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2006-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2006-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2006-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2006-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2006-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2006-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2006-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2006-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2006-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2007-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2007-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2007-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2007-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2007-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2007-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2007-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2007-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2007-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2007-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2007-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2007-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2007-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2007-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2007-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2008-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2008-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2008-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2008-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2008-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2008-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2008-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2008-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2008-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2008-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2008-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2008-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2008-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2008-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2008-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2009-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2009-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2009-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2009-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2009-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2009-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2009-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2009-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2009-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2009-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2009-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2009-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2009-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2009-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2009-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2010-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2010-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2010-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2010-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2010-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2010-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2010-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2010-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2010-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2010-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2010-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2010-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2010-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2010-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2010-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2011-03-26T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2011-03-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2011-03-27T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2011-10-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2011-10-29T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2011-10-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2011-10-30T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2011-03-26T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2011-03-26T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2011-03-27T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2011-03-27T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2011-10-29T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2011-10-29T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2011-10-30T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2011-10-30T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2012-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2012-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2012-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2012-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2012-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2012-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2012-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2012-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2012-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2012-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2012-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2012-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2012-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2012-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2012-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2013-03-30T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2013-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2013-03-31T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2013-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2013-10-26T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2013-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2013-10-27T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2013-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2013-03-30T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2013-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2013-03-31T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2013-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2013-10-26T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2013-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2013-10-27T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2014-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2014-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2014-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2014-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2014-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2014-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2014-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2014-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2014-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2014-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2014-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2014-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2014-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2014-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2014-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2015-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2015-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2015-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2015-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2015-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2015-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2015-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2015-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2015-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2015-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2015-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2015-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2015-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2015-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2015-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2016-03-26T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2016-03-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2016-03-27T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2016-10-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2016-10-29T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2016-10-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2016-10-30T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2016-03-26T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2016-03-26T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2016-03-27T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2016-03-27T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2016-10-29T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2016-10-29T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2016-10-30T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2016-10-30T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2017-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2017-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2017-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2017-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2017-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2017-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2017-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2017-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2017-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2017-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2017-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2017-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2017-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2017-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2017-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2018-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2018-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2018-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2018-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2018-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2018-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2018-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2018-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2018-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2018-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2018-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2018-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2018-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2018-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2018-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2019-03-30T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2019-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2019-03-31T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2019-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2019-10-26T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2019-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2019-10-27T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2019-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2019-03-30T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2019-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2019-03-31T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2019-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2019-10-26T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2019-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2019-10-27T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2020-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2020-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2020-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2020-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2020-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2020-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2020-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2020-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2020-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2020-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2020-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2020-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2020-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2020-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2020-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2021-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2021-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2021-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2021-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2021-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2021-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2021-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2021-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2021-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2021-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2021-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2021-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2021-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2021-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2021-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2022-03-26T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2022-03-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2022-03-27T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2022-10-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2022-10-29T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2022-10-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2022-10-30T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2022-03-26T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2022-03-26T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2022-03-27T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2022-03-27T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2022-10-29T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2022-10-29T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2022-10-30T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2022-10-30T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2023-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2023-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2023-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2023-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2023-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2023-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2023-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2023-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2023-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2023-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2023-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2023-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2023-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2023-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2023-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2024-03-30T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2024-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2024-03-31T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2024-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2024-10-26T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2024-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2024-10-27T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2024-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2024-03-30T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2024-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2024-03-31T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2024-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2024-10-26T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2024-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2024-10-27T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2025-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2025-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2025-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2025-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2025-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2025-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2025-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2025-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2025-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2025-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2025-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2025-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2025-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2025-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2025-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2026-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2026-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2026-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2026-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2026-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2026-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2026-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2026-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2026-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2026-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2026-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2026-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2026-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2026-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2026-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2027-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2027-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2027-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2027-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2027-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2027-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2027-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2027-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2027-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2027-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2027-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2027-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2027-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2027-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2027-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2028-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2028-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2028-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2028-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2028-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2028-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2028-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2028-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2028-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2028-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2028-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2028-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2028-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2028-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2028-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2029-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2029-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2029-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2029-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2029-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2029-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2029-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2029-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2029-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2029-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2029-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2029-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2029-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2029-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2029-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2030-03-30T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2030-03-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2030-03-31T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2030-10-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2030-10-26T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2030-10-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2030-10-27T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2030-03-30T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2030-03-30T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2030-03-31T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2030-03-31T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2030-10-26T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2030-10-26T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2030-10-27T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2030-10-27T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2031-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2031-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2031-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2031-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2031-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2031-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2031-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2031-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2031-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2031-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2031-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2031-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2031-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2031-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2031-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2032-03-27T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2032-03-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2032-03-28T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2032-10-30T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2032-10-30T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2032-10-31T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2032-10-31T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2032-03-27T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2032-03-27T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2032-03-28T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2032-03-28T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2032-10-30T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2032-10-30T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2032-10-31T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2032-10-31T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-26T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2033-03-26T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2033-03-27T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2033-03-27T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2033-10-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2033-10-29T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2033-10-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2033-10-30T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2033-03-26T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2033-03-26T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2033-03-27T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2033-03-27T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2033-10-29T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2033-10-29T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2033-10-30T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2033-10-30T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2034-03-25T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2034-03-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2034-03-26T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2034-10-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2034-10-28T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2034-10-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2034-10-29T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2034-03-25T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2034-03-25T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2034-03-26T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2034-03-26T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2034-10-28T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2034-10-28T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2034-10-29T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2034-10-29T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2035-03-24T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2035-03-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2035-03-25T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2035-10-27T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2035-10-27T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2035-10-28T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2035-10-28T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2035-03-24T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2035-03-24T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2035-03-25T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2035-03-25T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2035-10-27T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2035-10-27T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2035-10-28T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2035-10-28T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-29T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2036-03-29T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2036-03-30T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2036-03-30T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2036-10-25T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2036-10-25T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2036-10-26T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2036-10-26T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2036-03-29T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2036-03-29T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2036-03-30T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2036-03-30T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2036-10-25T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2036-10-25T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2036-10-26T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2036-10-26T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-28T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "03:59:59", "2037-03-28T23:59:59+00:00 should be 03:59:59 AZT");
		t.equal(moment("2037-03-29T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "05:00:00", "2037-03-29T00:00:00+00:00 should be 05:00:00 AZST");
		t.equal(moment("2037-10-24T23:59:59+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:59:59", "2037-10-24T23:59:59+00:00 should be 04:59:59 AZST");
		t.equal(moment("2037-10-25T00:00:00+00:00").tz("Asia/Baku").format("HH:mm:ss"), "04:00:00", "2037-10-25T00:00:00+00:00 should be 04:00:00 AZT");

		t.equal(moment("2037-03-28T23:59:59+00:00").tz("Asia/Baku").zone(), -240, "2037-03-28T23:59:59+00:00 should be -240 minutes offset in AZT");
		t.equal(moment("2037-03-29T00:00:00+00:00").tz("Asia/Baku").zone(), -300, "2037-03-29T00:00:00+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2037-10-24T23:59:59+00:00").tz("Asia/Baku").zone(), -300, "2037-10-24T23:59:59+00:00 should be -300 minutes offset in AZST");
		t.equal(moment("2037-10-25T00:00:00+00:00").tz("Asia/Baku").zone(), -240, "2037-10-25T00:00:00+00:00 should be -240 minutes offset in AZT");

		t.done();
	}
};
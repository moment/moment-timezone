var moment = require("../../moment-timezone");

exports["Asia/Bishkek"] = {

	"1924" : function (t) {
		t.equal(moment("1924-05-01T19:01:35+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1924-05-01T19:01:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1924-05-01T19:01:36+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "00:01:36", "1924-05-01T19:01:36+00:00 should be 00:01:36 FRUT");

		t.equal(moment("1924-05-01T19:01:35+00:00").tz("Asia/Bishkek").zone(), -17904 / 60, "1924-05-01T19:01:35+00:00 should be -17904 / 60 minutes offset in LMT");
		t.equal(moment("1924-05-01T19:01:36+00:00").tz("Asia/Bishkek").zone(), -300, "1924-05-01T19:01:36+00:00 should be -300 minutes offset in FRUT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1930-06-20T18:59:59+00:00 should be 23:59:59 FRUT");
		t.equal(moment("1930-06-20T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1930-06-20T19:00:00+00:00 should be 01:00:00 FRUT");

		t.equal(moment("1930-06-20T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1930-06-20T18:59:59+00:00 should be -300 minutes offset in FRUT");
		t.equal(moment("1930-06-20T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1930-06-20T19:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1981-03-31T17:59:59+00:00 should be 23:59:59 FRUT");
		t.equal(moment("1981-03-31T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1981-03-31T18:00:00+00:00 should be 01:00:00 FRUST");
		t.equal(moment("1981-09-30T16:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1981-09-30T16:59:59+00:00 should be 23:59:59 FRUST");
		t.equal(moment("1981-09-30T17:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1981-09-30T17:00:00+00:00 should be 23:00:00 FRUT");

		t.equal(moment("1981-03-31T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1981-03-31T17:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1981-03-31T18:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1981-03-31T18:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1981-09-30T16:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1981-09-30T16:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1981-09-30T17:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1981-09-30T17:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1982-03-31T17:59:59+00:00 should be 23:59:59 FRUT");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1982-03-31T18:00:00+00:00 should be 01:00:00 FRUST");
		t.equal(moment("1982-09-30T16:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1982-09-30T16:59:59+00:00 should be 23:59:59 FRUST");
		t.equal(moment("1982-09-30T17:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1982-09-30T17:00:00+00:00 should be 23:00:00 FRUT");

		t.equal(moment("1982-03-31T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1982-03-31T17:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1982-03-31T18:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1982-03-31T18:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1982-09-30T16:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1982-09-30T16:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1982-09-30T17:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1982-09-30T17:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1983-03-31T17:59:59+00:00 should be 23:59:59 FRUT");
		t.equal(moment("1983-03-31T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1983-03-31T18:00:00+00:00 should be 01:00:00 FRUST");
		t.equal(moment("1983-09-30T16:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1983-09-30T16:59:59+00:00 should be 23:59:59 FRUST");
		t.equal(moment("1983-09-30T17:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1983-09-30T17:00:00+00:00 should be 23:00:00 FRUT");

		t.equal(moment("1983-03-31T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1983-03-31T17:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1983-03-31T18:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1983-03-31T18:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1983-09-30T16:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1983-09-30T16:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1983-09-30T17:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1983-09-30T17:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1984-03-31T17:59:59+00:00 should be 23:59:59 FRUT");
		t.equal(moment("1984-03-31T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1984-03-31T18:00:00+00:00 should be 01:00:00 FRUST");
		t.equal(moment("1984-09-29T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1984-09-29T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1984-09-29T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1984-09-29T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1984-03-31T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1984-03-31T17:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1984-03-31T18:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1984-03-31T18:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1984-09-29T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1984-09-29T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1984-09-29T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1984-09-29T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1985-03-30T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1985-03-30T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1985-03-30T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1985-09-28T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1985-09-28T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1985-09-28T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1985-09-28T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1985-03-30T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1985-03-30T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1985-03-30T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1985-03-30T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1985-09-28T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1985-09-28T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1985-09-28T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1985-09-28T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1986-03-29T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1986-03-29T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1986-03-29T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1986-09-27T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1986-09-27T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1986-09-27T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1986-09-27T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1986-03-29T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1986-03-29T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1986-03-29T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1986-03-29T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1986-09-27T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1986-09-27T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1986-09-27T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1986-09-27T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1987-03-28T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1987-03-28T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1987-03-28T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1987-09-26T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1987-09-26T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1987-09-26T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1987-09-26T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1987-03-28T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1987-03-28T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1987-03-28T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1987-03-28T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1987-09-26T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1987-09-26T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1987-09-26T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1987-09-26T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1988-03-26T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1988-03-26T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1988-03-26T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1988-09-24T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1988-09-24T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1988-09-24T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1988-09-24T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1988-03-26T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1988-03-26T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1988-03-26T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1988-03-26T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1988-09-24T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1988-09-24T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1988-09-24T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1988-09-24T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1989-03-25T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1989-03-25T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1989-03-25T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1989-09-23T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1989-09-23T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1989-09-23T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1989-09-23T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1989-03-25T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1989-03-25T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1989-03-25T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1989-03-25T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1989-09-23T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1989-09-23T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1989-09-23T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1989-09-23T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1990-03-24T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1990-03-24T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:00:00", "1990-03-24T20:00:00+00:00 should be 03:00:00 FRUST");
		t.equal(moment("1990-09-29T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:59:59", "1990-09-29T19:59:59+00:00 should be 02:59:59 FRUST");
		t.equal(moment("1990-09-29T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1990-09-29T20:00:00+00:00 should be 02:00:00 FRUT");

		t.equal(moment("1990-03-24T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1990-03-24T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1990-03-24T20:00:00+00:00").tz("Asia/Bishkek").zone(), -420, "1990-03-24T20:00:00+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1990-09-29T19:59:59+00:00").tz("Asia/Bishkek").zone(), -420, "1990-09-29T19:59:59+00:00 should be -420 minutes offset in FRUST");
		t.equal(moment("1990-09-29T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1990-09-29T20:00:00+00:00 should be -360 minutes offset in FRUT");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1991-03-30T19:59:59+00:00 should be 01:59:59 FRUT");
		t.equal(moment("1991-03-30T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:00:00", "1991-03-30T20:00:00+00:00 should be 02:00:00 FRUST");
		t.equal(moment("1991-08-30T19:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:59:59", "1991-08-30T19:59:59+00:00 should be 01:59:59 FRUST");
		t.equal(moment("1991-08-30T20:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1991-08-30T20:00:00+00:00 should be 01:00:00 KGT");

		t.equal(moment("1991-03-30T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1991-03-30T19:59:59+00:00 should be -360 minutes offset in FRUT");
		t.equal(moment("1991-03-30T20:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1991-03-30T20:00:00+00:00 should be -360 minutes offset in FRUST");
		t.equal(moment("1991-08-30T19:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1991-08-30T19:59:59+00:00 should be -360 minutes offset in FRUST");
		t.equal(moment("1991-08-30T20:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1991-08-30T20:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-11T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1992-04-11T18:59:59+00:00 should be 23:59:59 KGT");
		t.equal(moment("1992-04-11T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1992-04-11T19:00:00+00:00 should be 01:00:00 KGST");
		t.equal(moment("1992-09-26T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1992-09-26T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("1992-09-26T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1992-09-26T18:00:00+00:00 should be 23:00:00 KGT");

		t.equal(moment("1992-04-11T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1992-04-11T18:59:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1992-04-11T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1992-04-11T19:00:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1992-09-26T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1992-09-26T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1992-09-26T18:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1992-09-26T18:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-10T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1993-04-10T18:59:59+00:00 should be 23:59:59 KGT");
		t.equal(moment("1993-04-10T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1993-04-10T19:00:00+00:00 should be 01:00:00 KGST");
		t.equal(moment("1993-09-25T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1993-09-25T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("1993-09-25T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1993-09-25T18:00:00+00:00 should be 23:00:00 KGT");

		t.equal(moment("1993-04-10T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1993-04-10T18:59:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1993-04-10T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1993-04-10T19:00:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1993-09-25T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1993-09-25T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1993-09-25T18:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1993-09-25T18:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-09T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1994-04-09T18:59:59+00:00 should be 23:59:59 KGT");
		t.equal(moment("1994-04-09T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1994-04-09T19:00:00+00:00 should be 01:00:00 KGST");
		t.equal(moment("1994-09-24T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1994-09-24T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("1994-09-24T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1994-09-24T18:00:00+00:00 should be 23:00:00 KGT");

		t.equal(moment("1994-04-09T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1994-04-09T18:59:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1994-04-09T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1994-04-09T19:00:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1994-09-24T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1994-09-24T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1994-09-24T18:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1994-09-24T18:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-08T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1995-04-08T18:59:59+00:00 should be 23:59:59 KGT");
		t.equal(moment("1995-04-08T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1995-04-08T19:00:00+00:00 should be 01:00:00 KGST");
		t.equal(moment("1995-09-23T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1995-09-23T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("1995-09-23T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1995-09-23T18:00:00+00:00 should be 23:00:00 KGT");

		t.equal(moment("1995-04-08T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1995-04-08T18:59:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1995-04-08T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1995-04-08T19:00:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1995-09-23T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1995-09-23T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1995-09-23T18:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1995-09-23T18:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-06T18:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1996-04-06T18:59:59+00:00 should be 23:59:59 KGT");
		t.equal(moment("1996-04-06T19:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:00:00", "1996-04-06T19:00:00+00:00 should be 01:00:00 KGST");
		t.equal(moment("1996-09-28T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "1996-09-28T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("1996-09-28T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:00:00", "1996-09-28T18:00:00+00:00 should be 23:00:00 KGT");

		t.equal(moment("1996-04-06T18:59:59+00:00").tz("Asia/Bishkek").zone(), -300, "1996-04-06T18:59:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1996-04-06T19:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "1996-04-06T19:00:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1996-09-28T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "1996-09-28T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1996-09-28T18:00:00+00:00").tz("Asia/Bishkek").zone(), -300, "1996-09-28T18:00:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1997-03-29T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("1997-03-29T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "1997-03-29T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("1997-10-25T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1997-10-25T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("1997-10-25T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "1997-10-25T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("1997-03-29T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "1997-03-29T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1997-03-29T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "1997-03-29T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1997-10-25T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "1997-10-25T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1997-10-25T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "1997-10-25T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1998-03-28T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("1998-03-28T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "1998-03-28T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("1998-10-24T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1998-10-24T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("1998-10-24T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "1998-10-24T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("1998-03-28T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "1998-03-28T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1998-03-28T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "1998-03-28T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1998-10-24T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "1998-10-24T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1998-10-24T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "1998-10-24T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1999-03-27T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("1999-03-27T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "1999-03-27T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("1999-10-30T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "1999-10-30T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("1999-10-30T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "1999-10-30T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("1999-03-27T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "1999-03-27T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("1999-03-27T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "1999-03-27T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1999-10-30T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "1999-10-30T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("1999-10-30T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "1999-10-30T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2000-03-25T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2000-03-25T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2000-03-25T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2000-10-28T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2000-10-28T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("2000-10-28T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "2000-10-28T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("2000-03-25T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2000-03-25T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2000-03-25T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2000-03-25T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2000-10-28T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "2000-10-28T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2000-10-28T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "2000-10-28T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2001-03-24T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2001-03-24T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2001-03-24T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2001-10-27T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2001-10-27T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("2001-10-27T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "2001-10-27T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("2001-03-24T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2001-03-24T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2001-03-24T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2001-03-24T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2001-10-27T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "2001-10-27T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2001-10-27T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "2001-10-27T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2002-03-30T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2002-03-30T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2002-03-30T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2002-10-26T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2002-10-26T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("2002-10-26T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "2002-10-26T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("2002-03-30T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2002-03-30T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2002-03-30T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2002-03-30T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2002-10-26T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "2002-10-26T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2002-10-26T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "2002-10-26T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2003-03-29T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2003-03-29T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2003-03-29T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2003-10-25T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2003-10-25T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("2003-10-25T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "2003-10-25T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("2003-03-29T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2003-03-29T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2003-03-29T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2003-03-29T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2003-10-25T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "2003-10-25T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2003-10-25T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "2003-10-25T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2004-03-27T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2004-03-27T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2004-03-27T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2004-10-30T20:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2004-10-30T20:29:59+00:00 should be 02:29:59 KGST");
		t.equal(moment("2004-10-30T20:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "01:30:00", "2004-10-30T20:30:00+00:00 should be 01:30:00 KGT");

		t.equal(moment("2004-03-27T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2004-03-27T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2004-03-27T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2004-03-27T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2004-10-30T20:29:59+00:00").tz("Asia/Bishkek").zone(), -360, "2004-10-30T20:29:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2004-10-30T20:30:00+00:00").tz("Asia/Bishkek").zone(), -300, "2004-10-30T20:30:00+00:00 should be -300 minutes offset in KGT");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T21:29:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "02:29:59", "2005-03-26T21:29:59+00:00 should be 02:29:59 KGT");
		t.equal(moment("2005-03-26T21:30:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "03:30:00", "2005-03-26T21:30:00+00:00 should be 03:30:00 KGST");
		t.equal(moment("2005-08-11T17:59:59+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "23:59:59", "2005-08-11T17:59:59+00:00 should be 23:59:59 KGST");
		t.equal(moment("2005-08-11T18:00:00+00:00").tz("Asia/Bishkek").format("HH:mm:ss"), "00:00:00", "2005-08-11T18:00:00+00:00 should be 00:00:00 KGT");

		t.equal(moment("2005-03-26T21:29:59+00:00").tz("Asia/Bishkek").zone(), -300, "2005-03-26T21:29:59+00:00 should be -300 minutes offset in KGT");
		t.equal(moment("2005-03-26T21:30:00+00:00").tz("Asia/Bishkek").zone(), -360, "2005-03-26T21:30:00+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2005-08-11T17:59:59+00:00").tz("Asia/Bishkek").zone(), -360, "2005-08-11T17:59:59+00:00 should be -360 minutes offset in KGST");
		t.equal(moment("2005-08-11T18:00:00+00:00").tz("Asia/Bishkek").zone(), -360, "2005-08-11T18:00:00+00:00 should be -360 minutes offset in KGT");

		t.done();
	}
};
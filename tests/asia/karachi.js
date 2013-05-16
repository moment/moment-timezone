var moment = require("../../index");

exports["Asia/Karachi"] = {

	"1906" : function (t) {
		t.equal(moment("1906-12-31T19:31:47+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "1906-12-31T19:31:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1906-12-31T19:31:48+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "01:01:48", "1906-12-31T19:31:48+00:00 should be 01:01:48 IST");

		t.equal(moment("1906-12-31T19:31:47+00:00").tz("Asia/Karachi").zone(), -16092 / 60, "1906-12-31T19:31:47+00:00 should be -16092 / 60 minutes offset in LMT");
		t.equal(moment("1906-12-31T19:31:48+00:00").tz("Asia/Karachi").zone(), -330, "1906-12-31T19:31:48+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "1942-08-31T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "01:00:00", "1942-08-31T18:30:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Karachi").zone(), -330, "1942-08-31T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Karachi").zone(), -390, "1942-08-31T18:30:00+00:00 should be -390 minutes offset in IST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-10-14T17:29:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "1945-10-14T17:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1945-10-14T17:30:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:00:00", "1945-10-14T17:30:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1945-10-14T17:29:59+00:00").tz("Asia/Karachi").zone(), -390, "1945-10-14T17:29:59+00:00 should be -390 minutes offset in IST");
		t.equal(moment("1945-10-14T17:30:00+00:00").tz("Asia/Karachi").zone(), -330, "1945-10-14T17:30:00+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-09-29T18:29:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "1951-09-29T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1951-09-29T18:30:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:30:00", "1951-09-29T18:30:00+00:00 should be 23:30:00 KART");

		t.equal(moment("1951-09-29T18:29:59+00:00").tz("Asia/Karachi").zone(), -330, "1951-09-29T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1951-09-29T18:30:00+00:00").tz("Asia/Karachi").zone(), -300, "1951-09-29T18:30:00+00:00 should be -300 minutes offset in KART");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-03-25T18:59:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "1971-03-25T18:59:59+00:00 should be 23:59:59 KART");
		t.equal(moment("1971-03-25T19:00:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "00:00:00", "1971-03-25T19:00:00+00:00 should be 00:00:00 PKT");

		t.equal(moment("1971-03-25T18:59:59+00:00").tz("Asia/Karachi").zone(), -300, "1971-03-25T18:59:59+00:00 should be -300 minutes offset in KART");
		t.equal(moment("1971-03-25T19:00:00+00:00").tz("Asia/Karachi").zone(), -300, "1971-03-25T19:00:00+00:00 should be -300 minutes offset in PKT");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-06T19:00:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "00:00:59", "2002-04-06T19:00:59+00:00 should be 00:00:59 PKT");
		t.equal(moment("2002-04-06T19:01:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "01:01:00", "2002-04-06T19:01:00+00:00 should be 01:01:00 PKST");
		t.equal(moment("2002-10-05T18:00:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "00:00:59", "2002-10-05T18:00:59+00:00 should be 00:00:59 PKST");
		t.equal(moment("2002-10-05T18:01:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:01:00", "2002-10-05T18:01:00+00:00 should be 23:01:00 PKT");

		t.equal(moment("2002-04-06T19:00:59+00:00").tz("Asia/Karachi").zone(), -300, "2002-04-06T19:00:59+00:00 should be -300 minutes offset in PKT");
		t.equal(moment("2002-04-06T19:01:00+00:00").tz("Asia/Karachi").zone(), -360, "2002-04-06T19:01:00+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2002-10-05T18:00:59+00:00").tz("Asia/Karachi").zone(), -360, "2002-10-05T18:00:59+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2002-10-05T18:01:00+00:00").tz("Asia/Karachi").zone(), -300, "2002-10-05T18:01:00+00:00 should be -300 minutes offset in PKT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-05-31T18:59:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "2008-05-31T18:59:59+00:00 should be 23:59:59 PKT");
		t.equal(moment("2008-05-31T19:00:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "01:00:00", "2008-05-31T19:00:00+00:00 should be 01:00:00 PKST");
		t.equal(moment("2008-10-31T17:59:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "2008-10-31T17:59:59+00:00 should be 23:59:59 PKST");
		t.equal(moment("2008-10-31T18:00:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:00:00", "2008-10-31T18:00:00+00:00 should be 23:00:00 PKT");

		t.equal(moment("2008-05-31T18:59:59+00:00").tz("Asia/Karachi").zone(), -300, "2008-05-31T18:59:59+00:00 should be -300 minutes offset in PKT");
		t.equal(moment("2008-05-31T19:00:00+00:00").tz("Asia/Karachi").zone(), -360, "2008-05-31T19:00:00+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2008-10-31T17:59:59+00:00").tz("Asia/Karachi").zone(), -360, "2008-10-31T17:59:59+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2008-10-31T18:00:00+00:00").tz("Asia/Karachi").zone(), -300, "2008-10-31T18:00:00+00:00 should be -300 minutes offset in PKT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-14T18:59:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "2009-04-14T18:59:59+00:00 should be 23:59:59 PKT");
		t.equal(moment("2009-04-14T19:00:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "01:00:00", "2009-04-14T19:00:00+00:00 should be 01:00:00 PKST");
		t.equal(moment("2009-10-31T17:59:59+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:59:59", "2009-10-31T17:59:59+00:00 should be 23:59:59 PKST");
		t.equal(moment("2009-10-31T18:00:00+00:00").tz("Asia/Karachi").format("HH:mm:ss"), "23:00:00", "2009-10-31T18:00:00+00:00 should be 23:00:00 PKT");

		t.equal(moment("2009-04-14T18:59:59+00:00").tz("Asia/Karachi").zone(), -300, "2009-04-14T18:59:59+00:00 should be -300 minutes offset in PKT");
		t.equal(moment("2009-04-14T19:00:00+00:00").tz("Asia/Karachi").zone(), -360, "2009-04-14T19:00:00+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2009-10-31T17:59:59+00:00").tz("Asia/Karachi").zone(), -360, "2009-10-31T17:59:59+00:00 should be -360 minutes offset in PKST");
		t.equal(moment("2009-10-31T18:00:00+00:00").tz("Asia/Karachi").zone(), -300, "2009-10-31T18:00:00+00:00 should be -300 minutes offset in PKT");

		t.done();
	}
};
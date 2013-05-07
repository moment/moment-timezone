var moment = require("../../moment-timezone");

exports["Asia/Dhaka"] = {

	"1941" : function (t) {
		t.equal(moment("1941-09-30T18:06:39+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:59:59", "1941-09-30T18:06:39+00:00 should be 23:59:59 HMT");
		t.equal(moment("1941-09-30T18:06:40+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "00:36:40", "1941-09-30T18:06:40+00:00 should be 00:36:40 BURT");

		t.equal(moment("1941-09-30T18:06:39+00:00").tz("Asia/Dhaka").zone(), -21200 / 60, "1941-09-30T18:06:39+00:00 should be -21200 / 60 minutes offset in HMT");
		t.equal(moment("1941-09-30T18:06:40+00:00").tz("Asia/Dhaka").zone(), -390, "1941-09-30T18:06:40+00:00 should be -390 minutes offset in BURT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-05-14T17:29:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:59:59", "1942-05-14T17:29:59+00:00 should be 23:59:59 BURT");
		t.equal(moment("1942-05-14T17:30:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:00:00", "1942-05-14T17:30:00+00:00 should be 23:00:00 IST");
		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:59:59", "1942-08-31T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "01:00:00", "1942-08-31T18:30:00+00:00 should be 01:00:00 BURT");

		t.equal(moment("1942-05-14T17:29:59+00:00").tz("Asia/Dhaka").zone(), -390, "1942-05-14T17:29:59+00:00 should be -390 minutes offset in BURT");
		t.equal(moment("1942-05-14T17:30:00+00:00").tz("Asia/Dhaka").zone(), -330, "1942-05-14T17:30:00+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Dhaka").zone(), -330, "1942-08-31T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Dhaka").zone(), -390, "1942-08-31T18:30:00+00:00 should be -390 minutes offset in BURT");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-09-29T17:29:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:59:59", "1951-09-29T17:29:59+00:00 should be 23:59:59 BURT");
		t.equal(moment("1951-09-29T17:30:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:30:00", "1951-09-29T17:30:00+00:00 should be 23:30:00 DACT");

		t.equal(moment("1951-09-29T17:29:59+00:00").tz("Asia/Dhaka").zone(), -390, "1951-09-29T17:29:59+00:00 should be -390 minutes offset in BURT");
		t.equal(moment("1951-09-29T17:30:00+00:00").tz("Asia/Dhaka").zone(), -360, "1951-09-29T17:30:00+00:00 should be -360 minutes offset in DACT");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-03-25T17:59:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:59:59", "1971-03-25T17:59:59+00:00 should be 23:59:59 DACT");
		t.equal(moment("1971-03-25T18:00:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "00:00:00", "1971-03-25T18:00:00+00:00 should be 00:00:00 BDT");

		t.equal(moment("1971-03-25T17:59:59+00:00").tz("Asia/Dhaka").zone(), -360, "1971-03-25T17:59:59+00:00 should be -360 minutes offset in DACT");
		t.equal(moment("1971-03-25T18:00:00+00:00").tz("Asia/Dhaka").zone(), -360, "1971-03-25T18:00:00+00:00 should be -360 minutes offset in BDT");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-06-19T16:59:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "22:59:59", "2009-06-19T16:59:59+00:00 should be 22:59:59 BDT");
		t.equal(moment("2009-06-19T17:00:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "00:00:00", "2009-06-19T17:00:00+00:00 should be 00:00:00 BDST");
		t.equal(moment("2009-12-31T16:58:59+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "23:58:59", "2009-12-31T16:58:59+00:00 should be 23:58:59 BDST");
		t.equal(moment("2009-12-31T16:59:00+00:00").tz("Asia/Dhaka").format("HH:mm:ss"), "22:59:00", "2009-12-31T16:59:00+00:00 should be 22:59:00 BDT");

		t.equal(moment("2009-06-19T16:59:59+00:00").tz("Asia/Dhaka").zone(), -360, "2009-06-19T16:59:59+00:00 should be -360 minutes offset in BDT");
		t.equal(moment("2009-06-19T17:00:00+00:00").tz("Asia/Dhaka").zone(), -420, "2009-06-19T17:00:00+00:00 should be -420 minutes offset in BDST");
		t.equal(moment("2009-12-31T16:58:59+00:00").tz("Asia/Dhaka").zone(), -420, "2009-12-31T16:58:59+00:00 should be -420 minutes offset in BDST");
		t.equal(moment("2009-12-31T16:59:00+00:00").tz("Asia/Dhaka").zone(), -360, "2009-12-31T16:59:00+00:00 should be -360 minutes offset in BDT");

		t.done();
	}
};
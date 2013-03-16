var moment = require("../../moment-timezone");

exports["Asia/Kolkata"] = {

	"1941" : function (t) {
		t.equal(moment("1941-09-30T18:06:39+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:59:59", "1941-09-30T18:06:39+00:00 should be 23:59:59 HMT");
		t.equal(moment("1941-09-30T18:06:40+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "00:36:40", "1941-09-30T18:06:40+00:00 should be 00:36:40 BURT");

		t.equal(moment("1941-09-30T18:06:39+00:00").tz("Asia/Kolkata").zone(), -353, "1941-09-30T18:06:39+00:00 should be -353 minutes offset in HMT");
		t.equal(moment("1941-09-30T18:06:40+00:00").tz("Asia/Kolkata").zone(), -390, "1941-09-30T18:06:40+00:00 should be -390 minutes offset in BURT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-05-14T17:29:59+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:59:59", "1942-05-14T17:29:59+00:00 should be 23:59:59 BURT");
		t.equal(moment("1942-05-14T17:30:00+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:00:00", "1942-05-14T17:30:00+00:00 should be 23:00:00 IST");
		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:59:59", "1942-08-31T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "01:00:00", "1942-08-31T18:30:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1942-05-14T17:29:59+00:00").tz("Asia/Kolkata").zone(), -390, "1942-05-14T17:29:59+00:00 should be -390 minutes offset in BURT");
		t.equal(moment("1942-05-14T17:30:00+00:00").tz("Asia/Kolkata").zone(), -330, "1942-05-14T17:30:00+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-08-31T18:29:59+00:00").tz("Asia/Kolkata").zone(), -330, "1942-08-31T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-08-31T18:30:00+00:00").tz("Asia/Kolkata").zone(), -390, "1942-08-31T18:30:00+00:00 should be -390 minutes offset in IST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-10-14T17:29:59+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:59:59", "1945-10-14T17:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1945-10-14T17:30:00+00:00").tz("Asia/Kolkata").format("HH:mm:ss"), "23:00:00", "1945-10-14T17:30:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1945-10-14T17:29:59+00:00").tz("Asia/Kolkata").zone(), -390, "1945-10-14T17:29:59+00:00 should be -390 minutes offset in IST");
		t.equal(moment("1945-10-14T17:30:00+00:00").tz("Asia/Kolkata").zone(), -330, "1945-10-14T17:30:00+00:00 should be -330 minutes offset in IST");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Asia/Pyongyang"] = {

	"1904" : function (t) {
		t.equal(moment("1904-11-30T15:29:59+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:59:59", "1904-11-30T15:29:59+00:00 should be 23:59:59 KST");
		t.equal(moment("1904-11-30T15:30:00+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "00:30:00", "1904-11-30T15:30:00+00:00 should be 00:30:00 KST");

		t.equal(moment("1904-11-30T15:29:59+00:00").tz("Asia/Pyongyang").zone(), -510, "1904-11-30T15:29:59+00:00 should be -510 minutes offset in KST");
		t.equal(moment("1904-11-30T15:30:00+00:00").tz("Asia/Pyongyang").zone(), -540, "1904-11-30T15:30:00+00:00 should be -540 minutes offset in KST");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-12-31T14:59:59+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:59:59", "1927-12-31T14:59:59+00:00 should be 23:59:59 KST");
		t.equal(moment("1927-12-31T15:00:00+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:30:00", "1927-12-31T15:00:00+00:00 should be 23:30:00 KST");

		t.equal(moment("1927-12-31T14:59:59+00:00").tz("Asia/Pyongyang").zone(), -540, "1927-12-31T14:59:59+00:00 should be -540 minutes offset in KST");
		t.equal(moment("1927-12-31T15:00:00+00:00").tz("Asia/Pyongyang").zone(), -510, "1927-12-31T15:00:00+00:00 should be -510 minutes offset in KST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-12-31T15:29:59+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:59:59", "1931-12-31T15:29:59+00:00 should be 23:59:59 KST");
		t.equal(moment("1931-12-31T15:30:00+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "00:30:00", "1931-12-31T15:30:00+00:00 should be 00:30:00 KST");

		t.equal(moment("1931-12-31T15:29:59+00:00").tz("Asia/Pyongyang").zone(), -510, "1931-12-31T15:29:59+00:00 should be -510 minutes offset in KST");
		t.equal(moment("1931-12-31T15:30:00+00:00").tz("Asia/Pyongyang").zone(), -540, "1931-12-31T15:30:00+00:00 should be -540 minutes offset in KST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-03-20T14:59:59+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:59:59", "1954-03-20T14:59:59+00:00 should be 23:59:59 KST");
		t.equal(moment("1954-03-20T15:00:00+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:00:00", "1954-03-20T15:00:00+00:00 should be 23:00:00 KST");

		t.equal(moment("1954-03-20T14:59:59+00:00").tz("Asia/Pyongyang").zone(), -540, "1954-03-20T14:59:59+00:00 should be -540 minutes offset in KST");
		t.equal(moment("1954-03-20T15:00:00+00:00").tz("Asia/Pyongyang").zone(), -480, "1954-03-20T15:00:00+00:00 should be -480 minutes offset in KST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-08-09T15:59:59+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "23:59:59", "1961-08-09T15:59:59+00:00 should be 23:59:59 KST");
		t.equal(moment("1961-08-09T16:00:00+00:00").tz("Asia/Pyongyang").format("HH:mm:ss"), "01:00:00", "1961-08-09T16:00:00+00:00 should be 01:00:00 KST");

		t.equal(moment("1961-08-09T15:59:59+00:00").tz("Asia/Pyongyang").zone(), -480, "1961-08-09T15:59:59+00:00 should be -480 minutes offset in KST");
		t.equal(moment("1961-08-09T16:00:00+00:00").tz("Asia/Pyongyang").zone(), -540, "1961-08-09T16:00:00+00:00 should be -540 minutes offset in KST");

		t.done();
	}
};
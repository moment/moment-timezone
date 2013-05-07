var moment = require("../../moment-timezone");

exports["Asia/Dili"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T15:37:39+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:59:59", "1911-12-31T15:37:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T15:37:40+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:37:40", "1911-12-31T15:37:40+00:00 should be 23:37:40 TLT");

		t.equal(moment("1911-12-31T15:37:39+00:00").tz("Asia/Dili").zone(), -30140 / 60, "1911-12-31T15:37:39+00:00 should be -30140 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T15:37:40+00:00").tz("Asia/Dili").zone(), -480, "1911-12-31T15:37:40+00:00 should be -480 minutes offset in TLT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-21T14:59:59+00:00").tz("Asia/Dili").format("HH:mm:ss"), "22:59:59", "1942-02-21T14:59:59+00:00 should be 22:59:59 TLT");
		t.equal(moment("1942-02-21T15:00:00+00:00").tz("Asia/Dili").format("HH:mm:ss"), "00:00:00", "1942-02-21T15:00:00+00:00 should be 00:00:00 JST");

		t.equal(moment("1942-02-21T14:59:59+00:00").tz("Asia/Dili").zone(), -480, "1942-02-21T14:59:59+00:00 should be -480 minutes offset in TLT");
		t.equal(moment("1942-02-21T15:00:00+00:00").tz("Asia/Dili").zone(), -540, "1942-02-21T15:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:59:59", "1945-09-22T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Dili").format("HH:mm:ss"), "00:00:00", "1945-09-22T15:00:00+00:00 should be 00:00:00 TLT");

		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Dili").zone(), -540, "1945-09-22T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Dili").zone(), -540, "1945-09-22T15:00:00+00:00 should be -540 minutes offset in TLT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-05-02T14:59:59+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:59:59", "1976-05-02T14:59:59+00:00 should be 23:59:59 TLT");
		t.equal(moment("1976-05-02T15:00:00+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:00:00", "1976-05-02T15:00:00+00:00 should be 23:00:00 CIT");

		t.equal(moment("1976-05-02T14:59:59+00:00").tz("Asia/Dili").zone(), -540, "1976-05-02T14:59:59+00:00 should be -540 minutes offset in TLT");
		t.equal(moment("1976-05-02T15:00:00+00:00").tz("Asia/Dili").zone(), -480, "1976-05-02T15:00:00+00:00 should be -480 minutes offset in CIT");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-09-16T15:59:59+00:00").tz("Asia/Dili").format("HH:mm:ss"), "23:59:59", "2000-09-16T15:59:59+00:00 should be 23:59:59 CIT");
		t.equal(moment("2000-09-16T16:00:00+00:00").tz("Asia/Dili").format("HH:mm:ss"), "01:00:00", "2000-09-16T16:00:00+00:00 should be 01:00:00 TLT");

		t.equal(moment("2000-09-16T15:59:59+00:00").tz("Asia/Dili").zone(), -480, "2000-09-16T15:59:59+00:00 should be -480 minutes offset in CIT");
		t.equal(moment("2000-09-16T16:00:00+00:00").tz("Asia/Dili").zone(), -540, "2000-09-16T16:00:00+00:00 should be -540 minutes offset in TLT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Asia/Makassar"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T16:02:23+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "23:59:59", "1919-12-31T16:02:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T16:02:24+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "00:00:00", "1919-12-31T16:02:24+00:00 should be 00:00:00 MMT");

		t.equal(moment("1919-12-31T16:02:23+00:00").tz("Asia/Makassar").zone(), -28656 / 60, "1919-12-31T16:02:23+00:00 should be -28656 / 60 minutes offset in LMT");
		t.equal(moment("1919-12-31T16:02:24+00:00").tz("Asia/Makassar").zone(), -28656 / 60, "1919-12-31T16:02:24+00:00 should be -28656 / 60 minutes offset in MMT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-10-31T16:02:23+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "23:59:59", "1932-10-31T16:02:23+00:00 should be 23:59:59 MMT");
		t.equal(moment("1932-10-31T16:02:24+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "00:02:24", "1932-10-31T16:02:24+00:00 should be 00:02:24 CIT");

		t.equal(moment("1932-10-31T16:02:23+00:00").tz("Asia/Makassar").zone(), -28656 / 60, "1932-10-31T16:02:23+00:00 should be -28656 / 60 minutes offset in MMT");
		t.equal(moment("1932-10-31T16:02:24+00:00").tz("Asia/Makassar").zone(), -480, "1932-10-31T16:02:24+00:00 should be -480 minutes offset in CIT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-08T15:59:59+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "23:59:59", "1942-02-08T15:59:59+00:00 should be 23:59:59 CIT");
		t.equal(moment("1942-02-08T16:00:00+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "01:00:00", "1942-02-08T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1942-02-08T15:59:59+00:00").tz("Asia/Makassar").zone(), -480, "1942-02-08T15:59:59+00:00 should be -480 minutes offset in CIT");
		t.equal(moment("1942-02-08T16:00:00+00:00").tz("Asia/Makassar").zone(), -540, "1942-02-08T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "23:59:59", "1945-09-22T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Makassar").format("HH:mm:ss"), "23:00:00", "1945-09-22T15:00:00+00:00 should be 23:00:00 CIT");

		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Makassar").zone(), -540, "1945-09-22T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Makassar").zone(), -480, "1945-09-22T15:00:00+00:00 should be -480 minutes offset in CIT");

		t.done();
	}
};
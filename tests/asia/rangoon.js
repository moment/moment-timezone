var moment = require("../../moment-timezone");

exports["Asia/Rangoon"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T17:35:19+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "23:59:59", "1919-12-31T17:35:19+00:00 should be 23:59:59 RMT");
		t.equal(moment("1919-12-31T17:35:20+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "00:05:20", "1919-12-31T17:35:20+00:00 should be 00:05:20 BURT");

		t.equal(moment("1919-12-31T17:35:19+00:00").tz("Asia/Rangoon").zone(), -384, "1919-12-31T17:35:19+00:00 should be -384 minutes offset in RMT");
		t.equal(moment("1919-12-31T17:35:20+00:00").tz("Asia/Rangoon").zone(), -390, "1919-12-31T17:35:20+00:00 should be -390 minutes offset in BURT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-04-30T17:29:59+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "23:59:59", "1942-04-30T17:29:59+00:00 should be 23:59:59 BURT");
		t.equal(moment("1942-04-30T17:30:00+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "02:30:00", "1942-04-30T17:30:00+00:00 should be 02:30:00 JST");

		t.equal(moment("1942-04-30T17:29:59+00:00").tz("Asia/Rangoon").zone(), -390, "1942-04-30T17:29:59+00:00 should be -390 minutes offset in BURT");
		t.equal(moment("1942-04-30T17:30:00+00:00").tz("Asia/Rangoon").zone(), -540, "1942-04-30T17:30:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-05-02T14:59:59+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "23:59:59", "1945-05-02T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-05-02T15:00:00+00:00").tz("Asia/Rangoon").format("HH:mm:ss"), "21:30:00", "1945-05-02T15:00:00+00:00 should be 21:30:00 MMT");

		t.equal(moment("1945-05-02T14:59:59+00:00").tz("Asia/Rangoon").zone(), -540, "1945-05-02T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-05-02T15:00:00+00:00").tz("Asia/Rangoon").zone(), -390, "1945-05-02T15:00:00+00:00 should be -390 minutes offset in MMT");

		t.done();
	}
};
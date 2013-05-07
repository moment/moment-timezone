var moment = require("../../moment-timezone");

exports["Asia/Kuala_Lumpur"] = {

	"1905" : function (t) {
		t.equal(moment("1905-05-31T17:04:34+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1905-05-31T17:04:34+00:00 should be 23:59:59 SMT");
		t.equal(moment("1905-05-31T17:04:35+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "00:04:35", "1905-05-31T17:04:35+00:00 should be 00:04:35 MALT");

		t.equal(moment("1905-05-31T17:04:34+00:00").tz("Asia/Kuala_Lumpur").zone(), -24925 / 60, "1905-05-31T17:04:34+00:00 should be -24925 / 60 minutes offset in SMT");
		t.equal(moment("1905-05-31T17:04:35+00:00").tz("Asia/Kuala_Lumpur").zone(), -420, "1905-05-31T17:04:35+00:00 should be -420 minutes offset in MALT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-12-31T16:59:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1932-12-31T16:59:59+00:00 should be 23:59:59 MALT");
		t.equal(moment("1932-12-31T17:00:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "00:20:00", "1932-12-31T17:00:00+00:00 should be 00:20:00 MALST");

		t.equal(moment("1932-12-31T16:59:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -420, "1932-12-31T16:59:59+00:00 should be -420 minutes offset in MALT");
		t.equal(moment("1932-12-31T17:00:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -440, "1932-12-31T17:00:00+00:00 should be -440 minutes offset in MALST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-12-31T16:39:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1935-12-31T16:39:59+00:00 should be 23:59:59 MALST");
		t.equal(moment("1935-12-31T16:40:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "00:00:00", "1935-12-31T16:40:00+00:00 should be 00:00:00 MALT");

		t.equal(moment("1935-12-31T16:39:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -440, "1935-12-31T16:39:59+00:00 should be -440 minutes offset in MALST");
		t.equal(moment("1935-12-31T16:40:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -440, "1935-12-31T16:40:00+00:00 should be -440 minutes offset in MALT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-08-31T16:39:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1941-08-31T16:39:59+00:00 should be 23:59:59 MALT");
		t.equal(moment("1941-08-31T16:40:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "00:10:00", "1941-08-31T16:40:00+00:00 should be 00:10:00 MALT");

		t.equal(moment("1941-08-31T16:39:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -440, "1941-08-31T16:39:59+00:00 should be -440 minutes offset in MALT");
		t.equal(moment("1941-08-31T16:40:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -450, "1941-08-31T16:40:00+00:00 should be -450 minutes offset in MALT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-15T16:29:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1942-02-15T16:29:59+00:00 should be 23:59:59 MALT");
		t.equal(moment("1942-02-15T16:30:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "01:30:00", "1942-02-15T16:30:00+00:00 should be 01:30:00 JST");

		t.equal(moment("1942-02-15T16:29:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -450, "1942-02-15T16:29:59+00:00 should be -450 minutes offset in MALT");
		t.equal(moment("1942-02-15T16:30:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -540, "1942-02-15T16:30:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-11T14:59:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1945-09-11T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-11T15:00:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "22:30:00", "1945-09-11T15:00:00+00:00 should be 22:30:00 MALT");

		t.equal(moment("1945-09-11T14:59:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -540, "1945-09-11T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-11T15:00:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -450, "1945-09-11T15:00:00+00:00 should be -450 minutes offset in MALT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-12-31T16:29:59+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "23:59:59", "1981-12-31T16:29:59+00:00 should be 23:59:59 MALT");
		t.equal(moment("1981-12-31T16:30:00+00:00").tz("Asia/Kuala_Lumpur").format("HH:mm:ss"), "00:30:00", "1981-12-31T16:30:00+00:00 should be 00:30:00 MYT");

		t.equal(moment("1981-12-31T16:29:59+00:00").tz("Asia/Kuala_Lumpur").zone(), -450, "1981-12-31T16:29:59+00:00 should be -450 minutes offset in MALT");
		t.equal(moment("1981-12-31T16:30:00+00:00").tz("Asia/Kuala_Lumpur").zone(), -480, "1981-12-31T16:30:00+00:00 should be -480 minutes offset in MYT");

		t.done();
	}
};
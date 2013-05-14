var moment = require("../../index");

exports["Asia/Pontianak"] = {

	"1908" : function (t) {
		t.equal(moment("1908-04-30T16:42:39+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1908-04-30T16:42:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1908-04-30T16:42:40+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "00:00:00", "1908-04-30T16:42:40+00:00 should be 00:00:00 PMT");

		t.equal(moment("1908-04-30T16:42:39+00:00").tz("Asia/Pontianak").zone(), -26240 / 60, "1908-04-30T16:42:39+00:00 should be -26240 / 60 minutes offset in LMT");
		t.equal(moment("1908-04-30T16:42:40+00:00").tz("Asia/Pontianak").zone(), -26240 / 60, "1908-04-30T16:42:40+00:00 should be -26240 / 60 minutes offset in PMT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-10-31T16:42:39+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1932-10-31T16:42:39+00:00 should be 23:59:59 PMT");
		t.equal(moment("1932-10-31T16:42:40+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "00:12:40", "1932-10-31T16:42:40+00:00 should be 00:12:40 WIT");

		t.equal(moment("1932-10-31T16:42:39+00:00").tz("Asia/Pontianak").zone(), -26240 / 60, "1932-10-31T16:42:39+00:00 should be -26240 / 60 minutes offset in PMT");
		t.equal(moment("1932-10-31T16:42:40+00:00").tz("Asia/Pontianak").zone(), -450, "1932-10-31T16:42:40+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-01-28T16:29:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1942-01-28T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1942-01-28T16:30:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "01:30:00", "1942-01-28T16:30:00+00:00 should be 01:30:00 JST");

		t.equal(moment("1942-01-28T16:29:59+00:00").tz("Asia/Pontianak").zone(), -450, "1942-01-28T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1942-01-28T16:30:00+00:00").tz("Asia/Pontianak").zone(), -540, "1942-01-28T16:30:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1945-09-22T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "22:30:00", "1945-09-22T15:00:00+00:00 should be 22:30:00 WIT");

		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Pontianak").zone(), -540, "1945-09-22T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Pontianak").zone(), -450, "1945-09-22T15:00:00+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-30T16:29:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1948-04-30T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1948-04-30T16:30:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "00:30:00", "1948-04-30T16:30:00+00:00 should be 00:30:00 WIT");

		t.equal(moment("1948-04-30T16:29:59+00:00").tz("Asia/Pontianak").zone(), -450, "1948-04-30T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1948-04-30T16:30:00+00:00").tz("Asia/Pontianak").zone(), -480, "1948-04-30T16:30:00+00:00 should be -480 minutes offset in WIT");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1950-04-30T15:59:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:30:00", "1950-04-30T16:00:00+00:00 should be 23:30:00 WIT");

		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Pontianak").zone(), -480, "1950-04-30T15:59:59+00:00 should be -480 minutes offset in WIT");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Pontianak").zone(), -450, "1950-04-30T16:00:00+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-31T16:29:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1963-12-31T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1963-12-31T16:30:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "00:30:00", "1963-12-31T16:30:00+00:00 should be 00:30:00 CIT");

		t.equal(moment("1963-12-31T16:29:59+00:00").tz("Asia/Pontianak").zone(), -450, "1963-12-31T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1963-12-31T16:30:00+00:00").tz("Asia/Pontianak").zone(), -480, "1963-12-31T16:30:00+00:00 should be -480 minutes offset in CIT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-12-31T15:59:59+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:59:59", "1987-12-31T15:59:59+00:00 should be 23:59:59 CIT");
		t.equal(moment("1987-12-31T16:00:00+00:00").tz("Asia/Pontianak").format("HH:mm:ss"), "23:00:00", "1987-12-31T16:00:00+00:00 should be 23:00:00 WIT");

		t.equal(moment("1987-12-31T15:59:59+00:00").tz("Asia/Pontianak").zone(), -480, "1987-12-31T15:59:59+00:00 should be -480 minutes offset in CIT");
		t.equal(moment("1987-12-31T16:00:00+00:00").tz("Asia/Pontianak").zone(), -420, "1987-12-31T16:00:00+00:00 should be -420 minutes offset in WIT");

		t.done();
	}
};
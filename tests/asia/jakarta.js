var moment = require("../../moment-timezone");

exports["Asia/Jakarta"] = {

	"1923" : function (t) {
		t.equal(moment("1923-12-31T16:39:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:47:11", "1923-12-31T16:39:59+00:00 should be 23:47:11 JMT");
		t.equal(moment("1923-12-31T16:40:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "00:00:00", "1923-12-31T16:40:00+00:00 should be 00:00:00 JAVT");

		t.equal(moment("1923-12-31T16:39:59+00:00").tz("Asia/Jakarta").zone(), -427, "1923-12-31T16:39:59+00:00 should be -427 minutes offset in JMT");
		t.equal(moment("1923-12-31T16:40:00+00:00").tz("Asia/Jakarta").zone(), -440, "1923-12-31T16:40:00+00:00 should be -440 minutes offset in JAVT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-10-31T16:39:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1932-10-31T16:39:59+00:00 should be 23:59:59 JAVT");
		t.equal(moment("1932-10-31T16:40:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "00:10:00", "1932-10-31T16:40:00+00:00 should be 00:10:00 WIT");

		t.equal(moment("1932-10-31T16:39:59+00:00").tz("Asia/Jakarta").zone(), -440, "1932-10-31T16:39:59+00:00 should be -440 minutes offset in JAVT");
		t.equal(moment("1932-10-31T16:40:00+00:00").tz("Asia/Jakarta").zone(), -450, "1932-10-31T16:40:00+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-22T16:29:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1942-03-22T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1942-03-22T16:30:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "01:30:00", "1942-03-22T16:30:00+00:00 should be 01:30:00 JST");

		t.equal(moment("1942-03-22T16:29:59+00:00").tz("Asia/Jakarta").zone(), -450, "1942-03-22T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1942-03-22T16:30:00+00:00").tz("Asia/Jakarta").zone(), -540, "1942-03-22T16:30:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1945-09-22T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "22:30:00", "1945-09-22T15:00:00+00:00 should be 22:30:00 WIT");

		t.equal(moment("1945-09-22T14:59:59+00:00").tz("Asia/Jakarta").zone(), -540, "1945-09-22T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-22T15:00:00+00:00").tz("Asia/Jakarta").zone(), -450, "1945-09-22T15:00:00+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-30T16:29:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1948-04-30T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1948-04-30T16:30:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "00:30:00", "1948-04-30T16:30:00+00:00 should be 00:30:00 WIT");

		t.equal(moment("1948-04-30T16:29:59+00:00").tz("Asia/Jakarta").zone(), -450, "1948-04-30T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1948-04-30T16:30:00+00:00").tz("Asia/Jakarta").zone(), -480, "1948-04-30T16:30:00+00:00 should be -480 minutes offset in WIT");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1950-04-30T15:59:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:30:00", "1950-04-30T16:00:00+00:00 should be 23:30:00 WIT");

		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Jakarta").zone(), -480, "1950-04-30T15:59:59+00:00 should be -480 minutes offset in WIT");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Jakarta").zone(), -450, "1950-04-30T16:00:00+00:00 should be -450 minutes offset in WIT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-31T16:29:59+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:59:59", "1963-12-31T16:29:59+00:00 should be 23:59:59 WIT");
		t.equal(moment("1963-12-31T16:30:00+00:00").tz("Asia/Jakarta").format("HH:mm:ss"), "23:30:00", "1963-12-31T16:30:00+00:00 should be 23:30:00 WIT");

		t.equal(moment("1963-12-31T16:29:59+00:00").tz("Asia/Jakarta").zone(), -450, "1963-12-31T16:29:59+00:00 should be -450 minutes offset in WIT");
		t.equal(moment("1963-12-31T16:30:00+00:00").tz("Asia/Jakarta").zone(), -420, "1963-12-31T16:30:00+00:00 should be -420 minutes offset in WIT");

		t.done();
	}
};
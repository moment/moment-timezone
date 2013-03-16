var moment = require("../../moment-timezone");

exports["Asia/Vientiane"] = {

	"1906" : function (t) {
		t.equal(moment("1906-06-08T17:09:35+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "23:59:59", "1906-06-08T17:09:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1906-06-08T17:09:36+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "00:15:56", "1906-06-08T17:09:36+00:00 should be 00:15:56 SMT");

		t.equal(moment("1906-06-08T17:09:35+00:00").tz("Asia/Vientiane").zone(), -410, "1906-06-08T17:09:35+00:00 should be -410 minutes offset in LMT");
		t.equal(moment("1906-06-08T17:09:36+00:00").tz("Asia/Vientiane").zone(), -426, "1906-06-08T17:09:36+00:00 should be -426 minutes offset in SMT");

		t.done();
	},

	"1911" : function (t) {
		t.equal(moment("1911-03-10T16:54:39+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "00:00:59", "1911-03-10T16:54:39+00:00 should be 00:00:59 SMT");
		t.equal(moment("1911-03-10T16:54:40+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "23:54:40", "1911-03-10T16:54:40+00:00 should be 23:54:40 ICT");

		t.equal(moment("1911-03-10T16:54:39+00:00").tz("Asia/Vientiane").zone(), -426, "1911-03-10T16:54:39+00:00 should be -426 minutes offset in SMT");
		t.equal(moment("1911-03-10T16:54:40+00:00").tz("Asia/Vientiane").zone(), -420, "1911-03-10T16:54:40+00:00 should be -420 minutes offset in ICT");

		t.done();
	},

	"1912" : function (t) {
		t.equal(moment("1912-04-30T16:59:59+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "23:59:59", "1912-04-30T16:59:59+00:00 should be 23:59:59 ICT");
		t.equal(moment("1912-04-30T17:00:00+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "01:00:00", "1912-04-30T17:00:00+00:00 should be 01:00:00 ICT");

		t.equal(moment("1912-04-30T16:59:59+00:00").tz("Asia/Vientiane").zone(), -420, "1912-04-30T16:59:59+00:00 should be -420 minutes offset in ICT");
		t.equal(moment("1912-04-30T17:00:00+00:00").tz("Asia/Vientiane").zone(), -480, "1912-04-30T17:00:00+00:00 should be -480 minutes offset in ICT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-04-30T15:59:59+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "23:59:59", "1931-04-30T15:59:59+00:00 should be 23:59:59 ICT");
		t.equal(moment("1931-04-30T16:00:00+00:00").tz("Asia/Vientiane").format("HH:mm:ss"), "23:00:00", "1931-04-30T16:00:00+00:00 should be 23:00:00 ICT");

		t.equal(moment("1931-04-30T15:59:59+00:00").tz("Asia/Vientiane").zone(), -480, "1931-04-30T15:59:59+00:00 should be -480 minutes offset in ICT");
		t.equal(moment("1931-04-30T16:00:00+00:00").tz("Asia/Vientiane").zone(), -420, "1931-04-30T16:00:00+00:00 should be -420 minutes offset in ICT");

		t.done();
	}
};
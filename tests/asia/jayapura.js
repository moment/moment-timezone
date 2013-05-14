var moment = require("../../index");

exports["Asia/Jayapura"] = {

	"1932" : function (t) {
		t.equal(moment("1932-10-31T14:37:11+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "23:59:59", "1932-10-31T14:37:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1932-10-31T14:37:12+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "23:37:12", "1932-10-31T14:37:12+00:00 should be 23:37:12 EIT");

		t.equal(moment("1932-10-31T14:37:11+00:00").tz("Asia/Jayapura").zone(), -33768 / 60, "1932-10-31T14:37:11+00:00 should be -33768 / 60 minutes offset in LMT");
		t.equal(moment("1932-10-31T14:37:12+00:00").tz("Asia/Jayapura").zone(), -540, "1932-10-31T14:37:12+00:00 should be -540 minutes offset in EIT");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-08-31T14:59:59+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "23:59:59", "1944-08-31T14:59:59+00:00 should be 23:59:59 EIT");
		t.equal(moment("1944-08-31T15:00:00+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "00:30:00", "1944-08-31T15:00:00+00:00 should be 00:30:00 CST");

		t.equal(moment("1944-08-31T14:59:59+00:00").tz("Asia/Jayapura").zone(), -540, "1944-08-31T14:59:59+00:00 should be -540 minutes offset in EIT");
		t.equal(moment("1944-08-31T15:00:00+00:00").tz("Asia/Jayapura").zone(), -570, "1944-08-31T15:00:00+00:00 should be -570 minutes offset in CST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-31T14:29:59+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "23:59:59", "1963-12-31T14:29:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1963-12-31T14:30:00+00:00").tz("Asia/Jayapura").format("HH:mm:ss"), "23:30:00", "1963-12-31T14:30:00+00:00 should be 23:30:00 EIT");

		t.equal(moment("1963-12-31T14:29:59+00:00").tz("Asia/Jayapura").zone(), -570, "1963-12-31T14:29:59+00:00 should be -570 minutes offset in CST");
		t.equal(moment("1963-12-31T14:30:00+00:00").tz("Asia/Jayapura").zone(), -540, "1963-12-31T14:30:00+00:00 should be -540 minutes offset in EIT");

		t.done();
	}
};
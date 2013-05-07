var moment = require("../../moment-timezone");

exports["Asia/Kathmandu"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T18:18:43+00:00").tz("Asia/Kathmandu").format("HH:mm:ss"), "23:59:59", "1919-12-31T18:18:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T18:18:44+00:00").tz("Asia/Kathmandu").format("HH:mm:ss"), "23:48:44", "1919-12-31T18:18:44+00:00 should be 23:48:44 IST");

		t.equal(moment("1919-12-31T18:18:43+00:00").tz("Asia/Kathmandu").zone(), -20476 / 60, "1919-12-31T18:18:43+00:00 should be -20476 / 60 minutes offset in LMT");
		t.equal(moment("1919-12-31T18:18:44+00:00").tz("Asia/Kathmandu").zone(), -330, "1919-12-31T18:18:44+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-12-31T18:29:59+00:00").tz("Asia/Kathmandu").format("HH:mm:ss"), "23:59:59", "1985-12-31T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1985-12-31T18:30:00+00:00").tz("Asia/Kathmandu").format("HH:mm:ss"), "00:15:00", "1985-12-31T18:30:00+00:00 should be 00:15:00 NPT");

		t.equal(moment("1985-12-31T18:29:59+00:00").tz("Asia/Kathmandu").zone(), -330, "1985-12-31T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1985-12-31T18:30:00+00:00").tz("Asia/Kathmandu").zone(), -345, "1985-12-31T18:30:00+00:00 should be -345 minutes offset in NPT");

		t.done();
	}
};
var moment = require("../../index");

exports["Asia/Thimphu"] = {

	"1947" : function (t) {
		t.equal(moment("1947-08-14T18:01:23+00:00").tz("Asia/Thimphu").format("HH:mm:ss"), "23:59:59", "1947-08-14T18:01:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1947-08-14T18:01:24+00:00").tz("Asia/Thimphu").format("HH:mm:ss"), "23:31:24", "1947-08-14T18:01:24+00:00 should be 23:31:24 IST");

		t.equal(moment("1947-08-14T18:01:23+00:00").tz("Asia/Thimphu").zone(), -21516 / 60, "1947-08-14T18:01:23+00:00 should be -21516 / 60 minutes offset in LMT");
		t.equal(moment("1947-08-14T18:01:24+00:00").tz("Asia/Thimphu").zone(), -330, "1947-08-14T18:01:24+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-09-30T18:29:59+00:00").tz("Asia/Thimphu").format("HH:mm:ss"), "23:59:59", "1987-09-30T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1987-09-30T18:30:00+00:00").tz("Asia/Thimphu").format("HH:mm:ss"), "00:30:00", "1987-09-30T18:30:00+00:00 should be 00:30:00 BTT");

		t.equal(moment("1987-09-30T18:29:59+00:00").tz("Asia/Thimphu").zone(), -330, "1987-09-30T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1987-09-30T18:30:00+00:00").tz("Asia/Thimphu").zone(), -360, "1987-09-30T18:30:00+00:00 should be -360 minutes offset in BTT");

		t.done();
	}
};
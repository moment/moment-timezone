var moment = require("../../moment-timezone");

exports["Asia/Colombo"] = {

	"1905" : function (t) {
		t.equal(moment("1905-12-31T18:40:27+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "23:59:59", "1905-12-31T18:40:27+00:00 should be 23:59:59 MMT");
		t.equal(moment("1905-12-31T18:40:28+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:10:28", "1905-12-31T18:40:28+00:00 should be 00:10:28 IST");

		t.equal(moment("1905-12-31T18:40:27+00:00").tz("Asia/Colombo").zone(), -319, "1905-12-31T18:40:27+00:00 should be -319 minutes offset in MMT");
		t.equal(moment("1905-12-31T18:40:28+00:00").tz("Asia/Colombo").zone(), -330, "1905-12-31T18:40:28+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-01-04T18:29:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "23:59:59", "1942-01-04T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1942-01-04T18:30:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:30:00", "1942-01-04T18:30:00+00:00 should be 00:30:00 IHST");
		t.equal(moment("1942-08-31T17:59:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "23:59:59", "1942-08-31T17:59:59+00:00 should be 23:59:59 IHST");
		t.equal(moment("1942-08-31T18:00:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:30:00", "1942-08-31T18:00:00+00:00 should be 00:30:00 IST");

		t.equal(moment("1942-01-04T18:29:59+00:00").tz("Asia/Colombo").zone(), -330, "1942-01-04T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1942-01-04T18:30:00+00:00").tz("Asia/Colombo").zone(), -360, "1942-01-04T18:30:00+00:00 should be -360 minutes offset in IHST");
		t.equal(moment("1942-08-31T17:59:59+00:00").tz("Asia/Colombo").zone(), -360, "1942-08-31T17:59:59+00:00 should be -360 minutes offset in IHST");
		t.equal(moment("1942-08-31T18:00:00+00:00").tz("Asia/Colombo").zone(), -390, "1942-08-31T18:00:00+00:00 should be -390 minutes offset in IST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-10-15T19:29:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "01:59:59", "1945-10-15T19:29:59+00:00 should be 01:59:59 IST");
		t.equal(moment("1945-10-15T19:30:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "01:00:00", "1945-10-15T19:30:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1945-10-15T19:29:59+00:00").tz("Asia/Colombo").zone(), -390, "1945-10-15T19:29:59+00:00 should be -390 minutes offset in IST");
		t.equal(moment("1945-10-15T19:30:00+00:00").tz("Asia/Colombo").zone(), -330, "1945-10-15T19:30:00+00:00 should be -330 minutes offset in IST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-05-24T18:29:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "23:59:59", "1996-05-24T18:29:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1996-05-24T18:30:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "01:00:00", "1996-05-24T18:30:00+00:00 should be 01:00:00 LKT");
		t.equal(moment("1996-10-25T17:59:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:29:59", "1996-10-25T17:59:59+00:00 should be 00:29:59 LKT");
		t.equal(moment("1996-10-25T18:00:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:00:00", "1996-10-25T18:00:00+00:00 should be 00:00:00 LKT");

		t.equal(moment("1996-05-24T18:29:59+00:00").tz("Asia/Colombo").zone(), -330, "1996-05-24T18:29:59+00:00 should be -330 minutes offset in IST");
		t.equal(moment("1996-05-24T18:30:00+00:00").tz("Asia/Colombo").zone(), -390, "1996-05-24T18:30:00+00:00 should be -390 minutes offset in LKT");
		t.equal(moment("1996-10-25T17:59:59+00:00").tz("Asia/Colombo").zone(), -390, "1996-10-25T17:59:59+00:00 should be -390 minutes offset in LKT");
		t.equal(moment("1996-10-25T18:00:00+00:00").tz("Asia/Colombo").zone(), -360, "1996-10-25T18:00:00+00:00 should be -360 minutes offset in LKT");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-14T18:29:59+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:29:59", "2006-04-14T18:29:59+00:00 should be 00:29:59 LKT");
		t.equal(moment("2006-04-14T18:30:00+00:00").tz("Asia/Colombo").format("HH:mm:ss"), "00:00:00", "2006-04-14T18:30:00+00:00 should be 00:00:00 IST");

		t.equal(moment("2006-04-14T18:29:59+00:00").tz("Asia/Colombo").zone(), -360, "2006-04-14T18:29:59+00:00 should be -360 minutes offset in LKT");
		t.equal(moment("2006-04-14T18:30:00+00:00").tz("Asia/Colombo").zone(), -330, "2006-04-14T18:30:00+00:00 should be -330 minutes offset in IST");

		t.done();
	}
};
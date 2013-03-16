var moment = require("../../moment-timezone");

exports["Asia/Kabul"] = {

	"1944" : function (t) {
		t.equal(moment("1944-12-31T19:59:59+00:00").tz("Asia/Kabul").format("HH:mm:ss"), "23:59:59", "1944-12-31T19:59:59+00:00 should be 23:59:59 AFT");
		t.equal(moment("1944-12-31T20:00:00+00:00").tz("Asia/Kabul").format("HH:mm:ss"), "00:30:00", "1944-12-31T20:00:00+00:00 should be 00:30:00 AFT");

		t.equal(moment("1944-12-31T19:59:59+00:00").tz("Asia/Kabul").zone(), -240, "1944-12-31T19:59:59+00:00 should be -240 minutes offset in AFT");
		t.equal(moment("1944-12-31T20:00:00+00:00").tz("Asia/Kabul").zone(), -270, "1944-12-31T20:00:00+00:00 should be -270 minutes offset in AFT");

		t.done();
	}
};
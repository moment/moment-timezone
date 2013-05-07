var moment = require("../../moment-timezone");

exports["Indian/Mahe"] = {

	"1906" : function (t) {
		t.equal(moment("1906-05-31T20:18:11+00:00").tz("Indian/Mahe").format("HH:mm:ss"), "23:59:59", "1906-05-31T20:18:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1906-05-31T20:18:12+00:00").tz("Indian/Mahe").format("HH:mm:ss"), "00:18:12", "1906-05-31T20:18:12+00:00 should be 00:18:12 SCT");

		t.equal(moment("1906-05-31T20:18:11+00:00").tz("Indian/Mahe").zone(), -13308 / 60, "1906-05-31T20:18:11+00:00 should be -13308 / 60 minutes offset in LMT");
		t.equal(moment("1906-05-31T20:18:12+00:00").tz("Indian/Mahe").zone(), -240, "1906-05-31T20:18:12+00:00 should be -240 minutes offset in SCT");

		t.done();
	}
};
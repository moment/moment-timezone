var moment = require("../../moment-timezone");

exports["Indian/Reunion"] = {

	"1911" : function (t) {
		t.equal(moment("1911-05-31T20:18:07+00:00").tz("Indian/Reunion").format("HH:mm:ss"), "23:59:59", "1911-05-31T20:18:07+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-05-31T20:18:08+00:00").tz("Indian/Reunion").format("HH:mm:ss"), "00:18:08", "1911-05-31T20:18:08+00:00 should be 00:18:08 RET");

		t.equal(moment("1911-05-31T20:18:07+00:00").tz("Indian/Reunion").zone(), -13312 / 60, "1911-05-31T20:18:07+00:00 should be -13312 / 60 minutes offset in LMT");
		t.equal(moment("1911-05-31T20:18:08+00:00").tz("Indian/Reunion").zone(), -240, "1911-05-31T20:18:08+00:00 should be -240 minutes offset in RET");

		t.done();
	}
};
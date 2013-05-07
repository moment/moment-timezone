var moment = require("../../moment-timezone");

exports["Indian/Comoro"] = {

	"1911" : function (t) {
		t.equal(moment("1911-06-30T21:06:55+00:00").tz("Indian/Comoro").format("HH:mm:ss"), "23:59:59", "1911-06-30T21:06:55+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-06-30T21:06:56+00:00").tz("Indian/Comoro").format("HH:mm:ss"), "00:06:56", "1911-06-30T21:06:56+00:00 should be 00:06:56 EAT");

		t.equal(moment("1911-06-30T21:06:55+00:00").tz("Indian/Comoro").zone(), -10384 / 60, "1911-06-30T21:06:55+00:00 should be -10384 / 60 minutes offset in LMT");
		t.equal(moment("1911-06-30T21:06:56+00:00").tz("Indian/Comoro").zone(), -180, "1911-06-30T21:06:56+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
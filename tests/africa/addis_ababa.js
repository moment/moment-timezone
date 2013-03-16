var moment = require("../../moment-timezone");

exports["Africa/Addis_Ababa"] = {

	"1936" : function (t) {
		t.equal(moment("1936-05-04T21:24:39+00:00").tz("Africa/Addis_Ababa").format("HH:mm:ss"), "23:59:59", "1936-05-04T21:24:39+00:00 should be 23:59:59 ADMT");
		t.equal(moment("1936-05-04T21:24:40+00:00").tz("Africa/Addis_Ababa").format("HH:mm:ss"), "00:24:40", "1936-05-04T21:24:40+00:00 should be 00:24:40 EAT");

		t.equal(moment("1936-05-04T21:24:39+00:00").tz("Africa/Addis_Ababa").zone(), -155, "1936-05-04T21:24:39+00:00 should be -155 minutes offset in ADMT");
		t.equal(moment("1936-05-04T21:24:40+00:00").tz("Africa/Addis_Ababa").zone(), -180, "1936-05-04T21:24:40+00:00 should be -180 minutes offset in EAT");

		t.done();
	}
};
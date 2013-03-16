var moment = require("../../moment-timezone");

exports["America/Guayaquil"] = {

	"1931" : function (t) {
		t.equal(moment("1931-01-01T05:13:59+00:00").tz("America/Guayaquil").format("HH:mm:ss"), "23:59:59", "1931-01-01T05:13:59+00:00 should be 23:59:59 QMT");
		t.equal(moment("1931-01-01T05:14:00+00:00").tz("America/Guayaquil").format("HH:mm:ss"), "00:14:00", "1931-01-01T05:14:00+00:00 should be 00:14:00 ECT");

		t.equal(moment("1931-01-01T05:13:59+00:00").tz("America/Guayaquil").zone(), 314, "1931-01-01T05:13:59+00:00 should be 314 minutes offset in QMT");
		t.equal(moment("1931-01-01T05:14:00+00:00").tz("America/Guayaquil").zone(), 300, "1931-01-01T05:14:00+00:00 should be 300 minutes offset in ECT");

		t.done();
	}
};
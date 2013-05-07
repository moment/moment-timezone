var moment = require("../../moment-timezone");

exports["America/Caracas"] = {

	"1912" : function (t) {
		t.equal(moment("1912-02-12T04:27:39+00:00").tz("America/Caracas").format("HH:mm:ss"), "23:59:59", "1912-02-12T04:27:39+00:00 should be 23:59:59 CMT");
		t.equal(moment("1912-02-12T04:27:40+00:00").tz("America/Caracas").format("HH:mm:ss"), "23:57:40", "1912-02-12T04:27:40+00:00 should be 23:57:40 VET");

		t.equal(moment("1912-02-12T04:27:39+00:00").tz("America/Caracas").zone(), 16060 / 60, "1912-02-12T04:27:39+00:00 should be 16060 / 60 minutes offset in CMT");
		t.equal(moment("1912-02-12T04:27:40+00:00").tz("America/Caracas").zone(), 270, "1912-02-12T04:27:40+00:00 should be 270 minutes offset in VET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Caracas").format("HH:mm:ss"), "23:59:59", "1965-01-01T04:29:59+00:00 should be 23:59:59 VET");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Caracas").format("HH:mm:ss"), "00:30:00", "1965-01-01T04:30:00+00:00 should be 00:30:00 VET");

		t.equal(moment("1965-01-01T04:29:59+00:00").tz("America/Caracas").zone(), 270, "1965-01-01T04:29:59+00:00 should be 270 minutes offset in VET");
		t.equal(moment("1965-01-01T04:30:00+00:00").tz("America/Caracas").zone(), 240, "1965-01-01T04:30:00+00:00 should be 240 minutes offset in VET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-12-09T06:59:59+00:00").tz("America/Caracas").format("HH:mm:ss"), "02:59:59", "2007-12-09T06:59:59+00:00 should be 02:59:59 VET");
		t.equal(moment("2007-12-09T07:00:00+00:00").tz("America/Caracas").format("HH:mm:ss"), "02:30:00", "2007-12-09T07:00:00+00:00 should be 02:30:00 VET");

		t.equal(moment("2007-12-09T06:59:59+00:00").tz("America/Caracas").zone(), 240, "2007-12-09T06:59:59+00:00 should be 240 minutes offset in VET");
		t.equal(moment("2007-12-09T07:00:00+00:00").tz("America/Caracas").zone(), 270, "2007-12-09T07:00:00+00:00 should be 270 minutes offset in VET");

		t.done();
	}
};
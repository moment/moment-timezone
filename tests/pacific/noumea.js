var moment = require("../../index");

exports["Pacific/Noumea"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-12T12:54:11+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:59:59", "1912-01-12T12:54:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-12T12:54:12+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:54:12", "1912-01-12T12:54:12+00:00 should be 23:54:12 NCT");

		t.equal(moment("1912-01-12T12:54:11+00:00").tz("Pacific/Noumea").zone(), -39948 / 60, "1912-01-12T12:54:11+00:00 should be -39948 / 60 minutes offset in LMT");
		t.equal(moment("1912-01-12T12:54:12+00:00").tz("Pacific/Noumea").zone(), -660, "1912-01-12T12:54:12+00:00 should be -660 minutes offset in NCT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-12-03T12:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:59:59", "1977-12-03T12:59:59+00:00 should be 23:59:59 NCT");
		t.equal(moment("1977-12-03T13:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "01:00:00", "1977-12-03T13:00:00+00:00 should be 01:00:00 NCST");

		t.equal(moment("1977-12-03T12:59:59+00:00").tz("Pacific/Noumea").zone(), -660, "1977-12-03T12:59:59+00:00 should be -660 minutes offset in NCT");
		t.equal(moment("1977-12-03T13:00:00+00:00").tz("Pacific/Noumea").zone(), -720, "1977-12-03T13:00:00+00:00 should be -720 minutes offset in NCST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-02-26T11:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:59:59", "1978-02-26T11:59:59+00:00 should be 23:59:59 NCST");
		t.equal(moment("1978-02-26T12:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:00:00", "1978-02-26T12:00:00+00:00 should be 23:00:00 NCT");
		t.equal(moment("1978-12-02T12:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:59:59", "1978-12-02T12:59:59+00:00 should be 23:59:59 NCT");
		t.equal(moment("1978-12-02T13:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "01:00:00", "1978-12-02T13:00:00+00:00 should be 01:00:00 NCST");

		t.equal(moment("1978-02-26T11:59:59+00:00").tz("Pacific/Noumea").zone(), -720, "1978-02-26T11:59:59+00:00 should be -720 minutes offset in NCST");
		t.equal(moment("1978-02-26T12:00:00+00:00").tz("Pacific/Noumea").zone(), -660, "1978-02-26T12:00:00+00:00 should be -660 minutes offset in NCT");
		t.equal(moment("1978-12-02T12:59:59+00:00").tz("Pacific/Noumea").zone(), -660, "1978-12-02T12:59:59+00:00 should be -660 minutes offset in NCT");
		t.equal(moment("1978-12-02T13:00:00+00:00").tz("Pacific/Noumea").zone(), -720, "1978-12-02T13:00:00+00:00 should be -720 minutes offset in NCST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-02-26T11:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:59:59", "1979-02-26T11:59:59+00:00 should be 23:59:59 NCST");
		t.equal(moment("1979-02-26T12:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "23:00:00", "1979-02-26T12:00:00+00:00 should be 23:00:00 NCT");

		t.equal(moment("1979-02-26T11:59:59+00:00").tz("Pacific/Noumea").zone(), -720, "1979-02-26T11:59:59+00:00 should be -720 minutes offset in NCST");
		t.equal(moment("1979-02-26T12:00:00+00:00").tz("Pacific/Noumea").zone(), -660, "1979-02-26T12:00:00+00:00 should be -660 minutes offset in NCT");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-11-30T14:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "01:59:59", "1996-11-30T14:59:59+00:00 should be 01:59:59 NCT");
		t.equal(moment("1996-11-30T15:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "03:00:00", "1996-11-30T15:00:00+00:00 should be 03:00:00 NCST");

		t.equal(moment("1996-11-30T14:59:59+00:00").tz("Pacific/Noumea").zone(), -660, "1996-11-30T14:59:59+00:00 should be -660 minutes offset in NCT");
		t.equal(moment("1996-11-30T15:00:00+00:00").tz("Pacific/Noumea").zone(), -720, "1996-11-30T15:00:00+00:00 should be -720 minutes offset in NCST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-01T14:59:59+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "02:59:59", "1997-03-01T14:59:59+00:00 should be 02:59:59 NCST");
		t.equal(moment("1997-03-01T15:00:00+00:00").tz("Pacific/Noumea").format("HH:mm:ss"), "02:00:00", "1997-03-01T15:00:00+00:00 should be 02:00:00 NCT");

		t.equal(moment("1997-03-01T14:59:59+00:00").tz("Pacific/Noumea").zone(), -720, "1997-03-01T14:59:59+00:00 should be -720 minutes offset in NCST");
		t.equal(moment("1997-03-01T15:00:00+00:00").tz("Pacific/Noumea").zone(), -660, "1997-03-01T15:00:00+00:00 should be -660 minutes offset in NCT");

		t.done();
	}
};
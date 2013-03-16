var moment = require("../../moment-timezone");

exports["Pacific/Niue"] = {

	"1951" : function (t) {
		t.equal(moment("1951-01-01T11:19:59+00:00").tz("Pacific/Niue").format("HH:mm:ss"), "23:59:59", "1951-01-01T11:19:59+00:00 should be 23:59:59 NUT");
		t.equal(moment("1951-01-01T11:20:00+00:00").tz("Pacific/Niue").format("HH:mm:ss"), "23:50:00", "1951-01-01T11:20:00+00:00 should be 23:50:00 NUT");

		t.equal(moment("1951-01-01T11:19:59+00:00").tz("Pacific/Niue").zone(), 680, "1951-01-01T11:19:59+00:00 should be 680 minutes offset in NUT");
		t.equal(moment("1951-01-01T11:20:00+00:00").tz("Pacific/Niue").zone(), 690, "1951-01-01T11:20:00+00:00 should be 690 minutes offset in NUT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-10-01T11:29:59+00:00").tz("Pacific/Niue").format("HH:mm:ss"), "23:59:59", "1978-10-01T11:29:59+00:00 should be 23:59:59 NUT");
		t.equal(moment("1978-10-01T11:30:00+00:00").tz("Pacific/Niue").format("HH:mm:ss"), "00:30:00", "1978-10-01T11:30:00+00:00 should be 00:30:00 NUT");

		t.equal(moment("1978-10-01T11:29:59+00:00").tz("Pacific/Niue").zone(), 690, "1978-10-01T11:29:59+00:00 should be 690 minutes offset in NUT");
		t.equal(moment("1978-10-01T11:30:00+00:00").tz("Pacific/Niue").zone(), 660, "1978-10-01T11:30:00+00:00 should be 660 minutes offset in NUT");

		t.done();
	}
};
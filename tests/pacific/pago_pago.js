var moment = require("../../moment-timezone");

exports["Pacific/Pago_Pago"] = {

	"1911" : function (t) {
		t.equal(moment("1911-01-01T11:22:47+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "23:59:59", "1911-01-01T11:22:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-01-01T11:22:48+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "23:52:48", "1911-01-01T11:22:48+00:00 should be 23:52:48 SAMT");

		t.equal(moment("1911-01-01T11:22:47+00:00").tz("Pacific/Pago_Pago").zone(), 682, "1911-01-01T11:22:47+00:00 should be 682 minutes offset in LMT");
		t.equal(moment("1911-01-01T11:22:48+00:00").tz("Pacific/Pago_Pago").zone(), 690, "1911-01-01T11:22:48+00:00 should be 690 minutes offset in SAMT");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-01-01T11:29:59+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "23:59:59", "1950-01-01T11:29:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1950-01-01T11:30:00+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "00:30:00", "1950-01-01T11:30:00+00:00 should be 00:30:00 NST");

		t.equal(moment("1950-01-01T11:29:59+00:00").tz("Pacific/Pago_Pago").zone(), 690, "1950-01-01T11:29:59+00:00 should be 690 minutes offset in SAMT");
		t.equal(moment("1950-01-01T11:30:00+00:00").tz("Pacific/Pago_Pago").zone(), 660, "1950-01-01T11:30:00+00:00 should be 660 minutes offset in NST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-01T10:59:59+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "23:59:59", "1967-04-01T10:59:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "00:00:00", "1967-04-01T11:00:00+00:00 should be 00:00:00 BST");

		t.equal(moment("1967-04-01T10:59:59+00:00").tz("Pacific/Pago_Pago").zone(), 660, "1967-04-01T10:59:59+00:00 should be 660 minutes offset in NST");
		t.equal(moment("1967-04-01T11:00:00+00:00").tz("Pacific/Pago_Pago").zone(), 660, "1967-04-01T11:00:00+00:00 should be 660 minutes offset in BST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-11-30T10:59:59+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "23:59:59", "1983-11-30T10:59:59+00:00 should be 23:59:59 BST");
		t.equal(moment("1983-11-30T11:00:00+00:00").tz("Pacific/Pago_Pago").format("HH:mm:ss"), "00:00:00", "1983-11-30T11:00:00+00:00 should be 00:00:00 SST");

		t.equal(moment("1983-11-30T10:59:59+00:00").tz("Pacific/Pago_Pago").zone(), 660, "1983-11-30T10:59:59+00:00 should be 660 minutes offset in BST");
		t.equal(moment("1983-11-30T11:00:00+00:00").tz("Pacific/Pago_Pago").zone(), 660, "1983-11-30T11:00:00+00:00 should be 660 minutes offset in SST");

		t.done();
	}
};
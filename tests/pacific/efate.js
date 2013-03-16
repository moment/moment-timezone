var moment = require("../../moment-timezone");

exports["Pacific/Efate"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-12T12:46:43+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1912-01-12T12:46:43+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-12T12:46:44+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:46:44", "1912-01-12T12:46:44+00:00 should be 23:46:44 VUT");

		t.equal(moment("1912-01-12T12:46:43+00:00").tz("Pacific/Efate").zone(), -673, "1912-01-12T12:46:43+00:00 should be -673 minutes offset in LMT");
		t.equal(moment("1912-01-12T12:46:44+00:00").tz("Pacific/Efate").zone(), -660, "1912-01-12T12:46:44+00:00 should be -660 minutes offset in VUT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-09-24T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1983-09-24T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1983-09-24T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1983-09-24T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1983-09-24T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1983-09-24T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1983-09-24T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1983-09-24T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-24T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1984-03-24T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1984-03-24T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1984-03-24T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1984-10-22T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1984-10-22T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1984-10-22T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1984-10-22T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1984-03-24T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1984-03-24T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1984-03-24T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1984-03-24T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1984-10-22T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1984-10-22T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1984-10-22T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1984-10-22T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-23T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1985-03-23T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1985-03-23T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1985-03-23T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1985-09-28T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1985-09-28T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1985-09-28T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1985-09-28T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1985-03-23T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1985-03-23T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1985-03-23T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1985-03-23T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1985-09-28T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1985-09-28T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1985-09-28T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1985-09-28T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-22T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1986-03-22T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1986-03-22T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1986-03-22T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1986-09-27T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1986-09-27T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1986-09-27T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1986-09-27T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1986-03-22T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1986-03-22T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1986-03-22T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1986-03-22T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1986-09-27T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1986-09-27T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1986-09-27T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1986-09-27T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1987-03-28T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1987-03-28T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1987-03-28T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1987-09-26T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1987-09-26T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1987-09-26T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1987-09-26T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1987-03-28T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1987-03-28T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1987-03-28T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1987-03-28T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1987-09-26T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1987-09-26T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1987-09-26T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1987-09-26T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1988-03-26T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1988-03-26T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1988-03-26T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1988-09-24T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1988-09-24T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1988-09-24T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1988-09-24T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1988-03-26T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1988-03-26T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1988-03-26T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1988-03-26T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1988-09-24T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1988-09-24T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1988-09-24T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1988-09-24T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1989-03-25T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1989-03-25T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1989-03-25T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1989-09-23T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1989-09-23T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1989-09-23T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1989-09-23T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1989-03-25T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1989-03-25T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1989-03-25T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1989-03-25T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1989-09-23T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1989-09-23T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1989-09-23T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1989-09-23T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1990-03-24T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1990-03-24T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1990-03-24T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1990-09-22T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1990-09-22T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1990-09-22T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1990-09-22T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1990-03-24T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1990-03-24T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1990-03-24T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1990-03-24T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1990-09-22T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1990-09-22T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1990-09-22T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1990-09-22T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-23T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1991-03-23T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1991-03-23T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1991-03-23T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1991-09-28T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1991-09-28T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1991-09-28T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1991-09-28T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1991-03-23T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1991-03-23T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1991-03-23T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1991-03-23T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1991-09-28T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1991-09-28T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1991-09-28T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1991-09-28T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-25T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1992-01-25T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1992-01-25T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1992-01-25T12:00:00+00:00 should be 23:00:00 VUT");
		t.equal(moment("1992-10-24T12:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1992-10-24T12:59:59+00:00 should be 23:59:59 VUT");
		t.equal(moment("1992-10-24T13:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "01:00:00", "1992-10-24T13:00:00+00:00 should be 01:00:00 VUST");

		t.equal(moment("1992-01-25T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1992-01-25T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1992-01-25T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1992-01-25T12:00:00+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1992-10-24T12:59:59+00:00").tz("Pacific/Efate").zone(), -660, "1992-10-24T12:59:59+00:00 should be -660 minutes offset in VUT");
		t.equal(moment("1992-10-24T13:00:00+00:00").tz("Pacific/Efate").zone(), -720, "1992-10-24T13:00:00+00:00 should be -720 minutes offset in VUST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-01-23T11:59:59+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:59:59", "1993-01-23T11:59:59+00:00 should be 23:59:59 VUST");
		t.equal(moment("1993-01-23T12:00:00+00:00").tz("Pacific/Efate").format("HH:mm:ss"), "23:00:00", "1993-01-23T12:00:00+00:00 should be 23:00:00 VUT");

		t.equal(moment("1993-01-23T11:59:59+00:00").tz("Pacific/Efate").zone(), -720, "1993-01-23T11:59:59+00:00 should be -720 minutes offset in VUST");
		t.equal(moment("1993-01-23T12:00:00+00:00").tz("Pacific/Efate").zone(), -660, "1993-01-23T12:00:00+00:00 should be -660 minutes offset in VUT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Pacific/Rarotonga"] = {

	"1978" : function (t) {
		t.equal(moment("1978-11-12T10:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1978-11-12T10:29:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1978-11-12T10:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "01:00:00", "1978-11-12T10:30:00+00:00 should be 01:00:00 CKHST");

		t.equal(moment("1978-11-12T10:29:59+00:00").tz("Pacific/Rarotonga").zone(), 630, "1978-11-12T10:29:59+00:00 should be 630 minutes offset in CKT");
		t.equal(moment("1978-11-12T10:30:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1978-11-12T10:30:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1979-03-04T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1979-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1979-03-04T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1979-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1979-10-28T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1979-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1979-10-28T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1979-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1979-03-04T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1979-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1979-03-04T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1979-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1979-10-28T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1979-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1979-10-28T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-02T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1980-03-02T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1980-03-02T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1980-03-02T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1980-10-26T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1980-10-26T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1980-10-26T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1980-10-26T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1980-03-02T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1980-03-02T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1980-03-02T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1980-03-02T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1980-10-26T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1980-10-26T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1980-10-26T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1980-10-26T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-01T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1981-03-01T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1981-03-01T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1981-03-01T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1981-10-25T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1981-10-25T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1981-10-25T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1981-10-25T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1981-03-01T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1981-03-01T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1981-03-01T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1981-03-01T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1981-10-25T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1981-10-25T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1981-10-25T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1981-10-25T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-07T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1982-03-07T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1982-03-07T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1982-03-07T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1982-10-31T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1982-10-31T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1982-10-31T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1982-10-31T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1982-03-07T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1982-03-07T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1982-03-07T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1982-03-07T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1982-10-31T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1982-10-31T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1982-10-31T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1982-10-31T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-06T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1983-03-06T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1983-03-06T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1983-03-06T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1983-10-30T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1983-10-30T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1983-10-30T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1983-10-30T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1983-03-06T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1983-03-06T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1983-03-06T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1983-03-06T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1983-10-30T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1983-10-30T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1983-10-30T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1983-10-30T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1984-03-04T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1984-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1984-03-04T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1984-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1984-10-28T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1984-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1984-10-28T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1984-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1984-03-04T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1984-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1984-03-04T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1984-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1984-10-28T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1984-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1984-10-28T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-03T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1985-03-03T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1985-03-03T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1985-03-03T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1985-10-27T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1985-10-27T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1985-10-27T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1985-10-27T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1985-03-03T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1985-03-03T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1985-03-03T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1985-03-03T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1985-10-27T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1985-10-27T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1985-10-27T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1985-10-27T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-02T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1986-03-02T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1986-03-02T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1986-03-02T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1986-10-26T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1986-10-26T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1986-10-26T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1986-10-26T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1986-03-02T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1986-03-02T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1986-03-02T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1986-03-02T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1986-10-26T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1986-10-26T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1986-10-26T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1986-10-26T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-01T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1987-03-01T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1987-03-01T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1987-03-01T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1987-10-25T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1987-10-25T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1987-10-25T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1987-10-25T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1987-03-01T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1987-03-01T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1987-03-01T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1987-03-01T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1987-10-25T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1987-10-25T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1987-10-25T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1987-10-25T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-06T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1988-03-06T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1988-03-06T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1988-03-06T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1988-10-30T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1988-10-30T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1988-10-30T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1988-10-30T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1988-03-06T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1988-03-06T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1988-03-06T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1988-03-06T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1988-10-30T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1988-10-30T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1988-10-30T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1988-10-30T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-05T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1989-03-05T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1989-03-05T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1989-03-05T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1989-10-29T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1989-10-29T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1989-10-29T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1989-10-29T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1989-03-05T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1989-03-05T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1989-03-05T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1989-03-05T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1989-10-29T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1989-10-29T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1989-10-29T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1989-10-29T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1990-03-04T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1990-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1990-03-04T09:30:00+00:00 should be 23:30:00 CKT");
		t.equal(moment("1990-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1990-10-28T09:59:59+00:00 should be 23:59:59 CKT");
		t.equal(moment("1990-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "00:30:00", "1990-10-28T10:00:00+00:00 should be 00:30:00 CKHST");

		t.equal(moment("1990-03-04T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1990-03-04T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1990-03-04T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1990-03-04T09:30:00+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1990-10-28T09:59:59+00:00").tz("Pacific/Rarotonga").zone(), 600, "1990-10-28T09:59:59+00:00 should be 600 minutes offset in CKT");
		t.equal(moment("1990-10-28T10:00:00+00:00").tz("Pacific/Rarotonga").zone(), 570, "1990-10-28T10:00:00+00:00 should be 570 minutes offset in CKHST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-03T09:29:59+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:59:59", "1991-03-03T09:29:59+00:00 should be 23:59:59 CKHST");
		t.equal(moment("1991-03-03T09:30:00+00:00").tz("Pacific/Rarotonga").format("HH:mm:ss"), "23:30:00", "1991-03-03T09:30:00+00:00 should be 23:30:00 CKT");

		t.equal(moment("1991-03-03T09:29:59+00:00").tz("Pacific/Rarotonga").zone(), 570, "1991-03-03T09:29:59+00:00 should be 570 minutes offset in CKHST");
		t.equal(moment("1991-03-03T09:30:00+00:00").tz("Pacific/Rarotonga").zone(), 600, "1991-03-03T09:30:00+00:00 should be 600 minutes offset in CKT");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["America/Lima"] = {

	"1908" : function (t) {
		t.equal(moment("1908-07-28T05:08:35+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1908-07-28T05:08:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1908-07-28T05:08:36+00:00").tz("America/Lima").format("HH:mm:ss"), "00:08:36", "1908-07-28T05:08:36+00:00 should be 00:08:36 PET");

		t.equal(moment("1908-07-28T05:08:35+00:00").tz("America/Lima").zone(), 18516 / 60, "1908-07-28T05:08:35+00:00 should be 18516 / 60 minutes offset in LMT");
		t.equal(moment("1908-07-28T05:08:36+00:00").tz("America/Lima").zone(), 300, "1908-07-28T05:08:36+00:00 should be 300 minutes offset in PET");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-01-01T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1938-01-01T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1938-01-01T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1938-01-01T05:00:00+00:00 should be 01:00:00 PEST");
		t.equal(moment("1938-04-01T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1938-04-01T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1938-04-01T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1938-04-01T04:00:00+00:00 should be 23:00:00 PET");
		t.equal(moment("1938-09-25T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1938-09-25T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1938-09-25T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1938-09-25T05:00:00+00:00 should be 01:00:00 PEST");

		t.equal(moment("1938-01-01T04:59:59+00:00").tz("America/Lima").zone(), 300, "1938-01-01T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1938-01-01T05:00:00+00:00").tz("America/Lima").zone(), 240, "1938-01-01T05:00:00+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1938-04-01T03:59:59+00:00").tz("America/Lima").zone(), 240, "1938-04-01T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1938-04-01T04:00:00+00:00").tz("America/Lima").zone(), 300, "1938-04-01T04:00:00+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1938-09-25T04:59:59+00:00").tz("America/Lima").zone(), 300, "1938-09-25T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1938-09-25T05:00:00+00:00").tz("America/Lima").zone(), 240, "1938-09-25T05:00:00+00:00 should be 240 minutes offset in PEST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-03-26T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1939-03-26T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1939-03-26T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1939-03-26T04:00:00+00:00 should be 23:00:00 PET");
		t.equal(moment("1939-09-24T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1939-09-24T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1939-09-24T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1939-09-24T05:00:00+00:00 should be 01:00:00 PEST");

		t.equal(moment("1939-03-26T03:59:59+00:00").tz("America/Lima").zone(), 240, "1939-03-26T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1939-03-26T04:00:00+00:00").tz("America/Lima").zone(), 300, "1939-03-26T04:00:00+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1939-09-24T04:59:59+00:00").tz("America/Lima").zone(), 300, "1939-09-24T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1939-09-24T05:00:00+00:00").tz("America/Lima").zone(), 240, "1939-09-24T05:00:00+00:00 should be 240 minutes offset in PEST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-03-24T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1940-03-24T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1940-03-24T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1940-03-24T04:00:00+00:00 should be 23:00:00 PET");

		t.equal(moment("1940-03-24T03:59:59+00:00").tz("America/Lima").zone(), 240, "1940-03-24T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1940-03-24T04:00:00+00:00").tz("America/Lima").zone(), 300, "1940-03-24T04:00:00+00:00 should be 300 minutes offset in PET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-01-01T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1986-01-01T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1986-01-01T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1986-01-01T05:00:00+00:00 should be 01:00:00 PEST");
		t.equal(moment("1986-04-01T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1986-04-01T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1986-04-01T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1986-04-01T04:00:00+00:00 should be 23:00:00 PET");

		t.equal(moment("1986-01-01T04:59:59+00:00").tz("America/Lima").zone(), 300, "1986-01-01T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1986-01-01T05:00:00+00:00").tz("America/Lima").zone(), 240, "1986-01-01T05:00:00+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1986-04-01T03:59:59+00:00").tz("America/Lima").zone(), 240, "1986-04-01T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1986-04-01T04:00:00+00:00").tz("America/Lima").zone(), 300, "1986-04-01T04:00:00+00:00 should be 300 minutes offset in PET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-01-01T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1987-01-01T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1987-01-01T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1987-01-01T05:00:00+00:00 should be 01:00:00 PEST");
		t.equal(moment("1987-04-01T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1987-04-01T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1987-04-01T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1987-04-01T04:00:00+00:00 should be 23:00:00 PET");

		t.equal(moment("1987-01-01T04:59:59+00:00").tz("America/Lima").zone(), 300, "1987-01-01T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1987-01-01T05:00:00+00:00").tz("America/Lima").zone(), 240, "1987-01-01T05:00:00+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1987-04-01T03:59:59+00:00").tz("America/Lima").zone(), 240, "1987-04-01T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1987-04-01T04:00:00+00:00").tz("America/Lima").zone(), 300, "1987-04-01T04:00:00+00:00 should be 300 minutes offset in PET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-01-01T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1990-01-01T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1990-01-01T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1990-01-01T05:00:00+00:00 should be 01:00:00 PEST");
		t.equal(moment("1990-04-01T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1990-04-01T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1990-04-01T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1990-04-01T04:00:00+00:00 should be 23:00:00 PET");

		t.equal(moment("1990-01-01T04:59:59+00:00").tz("America/Lima").zone(), 300, "1990-01-01T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1990-01-01T05:00:00+00:00").tz("America/Lima").zone(), 240, "1990-01-01T05:00:00+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1990-04-01T03:59:59+00:00").tz("America/Lima").zone(), 240, "1990-04-01T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1990-04-01T04:00:00+00:00").tz("America/Lima").zone(), 300, "1990-04-01T04:00:00+00:00 should be 300 minutes offset in PET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-01-01T04:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1994-01-01T04:59:59+00:00 should be 23:59:59 PET");
		t.equal(moment("1994-01-01T05:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "01:00:00", "1994-01-01T05:00:00+00:00 should be 01:00:00 PEST");
		t.equal(moment("1994-04-01T03:59:59+00:00").tz("America/Lima").format("HH:mm:ss"), "23:59:59", "1994-04-01T03:59:59+00:00 should be 23:59:59 PEST");
		t.equal(moment("1994-04-01T04:00:00+00:00").tz("America/Lima").format("HH:mm:ss"), "23:00:00", "1994-04-01T04:00:00+00:00 should be 23:00:00 PET");

		t.equal(moment("1994-01-01T04:59:59+00:00").tz("America/Lima").zone(), 300, "1994-01-01T04:59:59+00:00 should be 300 minutes offset in PET");
		t.equal(moment("1994-01-01T05:00:00+00:00").tz("America/Lima").zone(), 240, "1994-01-01T05:00:00+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1994-04-01T03:59:59+00:00").tz("America/Lima").zone(), 240, "1994-04-01T03:59:59+00:00 should be 240 minutes offset in PEST");
		t.equal(moment("1994-04-01T04:00:00+00:00").tz("America/Lima").zone(), 300, "1994-04-01T04:00:00+00:00 should be 300 minutes offset in PET");

		t.done();
	}
};
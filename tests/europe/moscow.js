var moment = require("../../index");

exports["Europe/Moscow"] = {

	"1916" : function (t) {
		t.equal(moment("1916-07-02T21:29:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1916-07-02T21:29:59+00:00 should be 23:59:59 MMT");
		t.equal(moment("1916-07-02T21:30:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:48", "1916-07-02T21:30:00+00:00 should be 00:00:48 MMT");

		t.equal(moment("1916-07-02T21:29:59+00:00").tz("Europe/Moscow").zone(), -150, "1916-07-02T21:29:59+00:00 should be -150 minutes offset in MMT");
		t.equal(moment("1916-07-02T21:30:00+00:00").tz("Europe/Moscow").zone(), -9048 / 60, "1916-07-02T21:30:00+00:00 should be -9048 / 60 minutes offset in MMT");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-07-01T20:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1917-07-01T20:29:11+00:00 should be 22:59:59 MMT");
		t.equal(moment("1917-07-01T20:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1917-07-01T20:29:12+00:00 should be 00:00:00 MST");
		t.equal(moment("1917-12-27T20:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1917-12-27T20:29:11+00:00 should be 23:59:59 MST");
		t.equal(moment("1917-12-27T20:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1917-12-27T20:29:12+00:00 should be 23:00:00 MMT");

		t.equal(moment("1917-07-01T20:29:11+00:00").tz("Europe/Moscow").zone(), -9048 / 60, "1917-07-01T20:29:11+00:00 should be -9048 / 60 minutes offset in MMT");
		t.equal(moment("1917-07-01T20:29:12+00:00").tz("Europe/Moscow").zone(), -12648 / 60, "1917-07-01T20:29:12+00:00 should be -12648 / 60 minutes offset in MST");
		t.equal(moment("1917-12-27T20:29:11+00:00").tz("Europe/Moscow").zone(), -12648 / 60, "1917-12-27T20:29:11+00:00 should be -12648 / 60 minutes offset in MST");
		t.equal(moment("1917-12-27T20:29:12+00:00").tz("Europe/Moscow").zone(), -9048 / 60, "1917-12-27T20:29:12+00:00 should be -9048 / 60 minutes offset in MMT");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-05-31T19:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "21:59:59", "1918-05-31T19:29:11+00:00 should be 21:59:59 MMT");
		t.equal(moment("1918-05-31T19:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1918-05-31T19:29:12+00:00 should be 00:00:00 MDST");
		t.equal(moment("1918-09-15T20:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:59:59", "1918-09-15T20:29:11+00:00 should be 00:59:59 MDST");
		t.equal(moment("1918-09-15T20:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1918-09-15T20:29:12+00:00 should be 00:00:00 MST");

		t.equal(moment("1918-05-31T19:29:11+00:00").tz("Europe/Moscow").zone(), -9048 / 60, "1918-05-31T19:29:11+00:00 should be -9048 / 60 minutes offset in MMT");
		t.equal(moment("1918-05-31T19:29:12+00:00").tz("Europe/Moscow").zone(), -16248 / 60, "1918-05-31T19:29:12+00:00 should be -16248 / 60 minutes offset in MDST");
		t.equal(moment("1918-09-15T20:29:11+00:00").tz("Europe/Moscow").zone(), -16248 / 60, "1918-09-15T20:29:11+00:00 should be -16248 / 60 minutes offset in MDST");
		t.equal(moment("1918-09-15T20:29:12+00:00").tz("Europe/Moscow").zone(), -12648 / 60, "1918-09-15T20:29:12+00:00 should be -12648 / 60 minutes offset in MST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-05-31T19:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1919-05-31T19:29:11+00:00 should be 22:59:59 MST");
		t.equal(moment("1919-05-31T19:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1919-05-31T19:29:12+00:00 should be 00:00:00 MDST");
		t.equal(moment("1919-06-30T21:29:11+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1919-06-30T21:29:11+00:00 should be 01:59:59 MDST");
		t.equal(moment("1919-06-30T21:29:12+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:29:12", "1919-06-30T21:29:12+00:00 should be 01:29:12 MSD");
		t.equal(moment("1919-08-15T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1919-08-15T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1919-08-15T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1919-08-15T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1919-05-31T19:29:11+00:00").tz("Europe/Moscow").zone(), -12648 / 60, "1919-05-31T19:29:11+00:00 should be -12648 / 60 minutes offset in MST");
		t.equal(moment("1919-05-31T19:29:12+00:00").tz("Europe/Moscow").zone(), -16248 / 60, "1919-05-31T19:29:12+00:00 should be -16248 / 60 minutes offset in MDST");
		t.equal(moment("1919-06-30T21:29:11+00:00").tz("Europe/Moscow").zone(), -16248 / 60, "1919-06-30T21:29:11+00:00 should be -16248 / 60 minutes offset in MDST");
		t.equal(moment("1919-06-30T21:29:12+00:00").tz("Europe/Moscow").zone(), -240, "1919-06-30T21:29:12+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1919-08-15T19:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1919-08-15T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1919-08-15T20:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1919-08-15T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-02-14T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1921-02-14T19:59:59+00:00 should be 22:59:59 MSK");
		t.equal(moment("1921-02-14T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1921-02-14T20:00:00+00:00 should be 00:00:00 MSD");
		t.equal(moment("1921-03-20T18:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1921-03-20T18:59:59+00:00 should be 22:59:59 MSD");
		t.equal(moment("1921-03-20T19:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1921-03-20T19:00:00+00:00 should be 00:00:00 MSD");
		t.equal(moment("1921-08-31T18:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1921-08-31T18:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1921-08-31T19:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1921-08-31T19:00:00+00:00 should be 23:00:00 MSD");
		t.equal(moment("1921-09-30T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1921-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1921-09-30T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1921-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1921-02-14T19:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1921-02-14T19:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1921-02-14T20:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1921-02-14T20:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1921-03-20T18:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1921-03-20T18:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1921-03-20T19:00:00+00:00").tz("Europe/Moscow").zone(), -300, "1921-03-20T19:00:00+00:00 should be -300 minutes offset in MSD");
		t.equal(moment("1921-08-31T18:59:59+00:00").tz("Europe/Moscow").zone(), -300, "1921-08-31T18:59:59+00:00 should be -300 minutes offset in MSD");
		t.equal(moment("1921-08-31T19:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1921-08-31T19:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1921-09-30T19:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1921-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1921-09-30T20:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1921-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-09-30T20:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1922-09-30T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1922-09-30T21:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1922-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1922-09-30T20:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1922-09-30T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1922-09-30T21:00:00+00:00").tz("Europe/Moscow").zone(), -120, "1922-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-06-20T21:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1930-06-20T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1930-06-20T22:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:00:00", "1930-06-20T22:00:00+00:00 should be 01:00:00 MSK");

		t.equal(moment("1930-06-20T21:59:59+00:00").tz("Europe/Moscow").zone(), -120, "1930-06-20T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1930-06-20T22:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1930-06-20T22:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-31T20:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1981-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1981-03-31T21:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:00:00", "1981-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1981-09-30T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1981-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1981-09-30T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1981-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1981-03-31T20:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1981-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1981-03-31T21:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1981-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1981-09-30T19:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1981-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1981-09-30T20:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1981-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-31T20:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1982-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1982-03-31T21:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:00:00", "1982-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1982-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1982-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1982-03-31T20:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1982-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1982-03-31T21:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1982-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1982-09-30T19:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1982-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1982-09-30T20:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1982-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-31T20:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1983-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1983-03-31T21:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:00:00", "1983-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1983-09-30T19:59:59+00:00 should be 23:59:59 MSD");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:00:00", "1983-09-30T20:00:00+00:00 should be 23:00:00 MSK");

		t.equal(moment("1983-03-31T20:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1983-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1983-03-31T21:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1983-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1983-09-30T19:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1983-09-30T19:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1983-09-30T20:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1983-09-30T20:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "23:59:59", "1984-03-31T20:59:59+00:00 should be 23:59:59 MSK");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:00:00", "1984-03-31T21:00:00+00:00 should be 01:00:00 MSD");
		t.equal(moment("1984-09-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1984-09-29T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1984-09-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1984-09-29T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1984-03-31T20:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1984-03-31T20:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1984-03-31T21:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1984-03-31T21:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1984-09-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1984-09-29T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1984-09-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1984-09-29T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1985-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1985-03-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1985-03-30T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1985-09-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1985-09-28T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1985-09-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1985-09-28T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1985-03-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1985-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1985-03-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1985-03-30T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1985-09-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1985-09-28T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1985-09-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1985-09-28T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1986-03-29T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1986-03-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1986-03-29T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1986-09-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1986-09-27T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1986-09-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1986-09-27T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1986-03-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1986-03-29T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1986-03-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1986-03-29T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1986-09-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1986-09-27T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1986-09-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1986-09-27T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1987-03-28T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1987-03-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1987-03-28T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1987-09-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1987-09-26T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1987-09-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1987-09-26T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1987-03-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1987-03-28T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1987-03-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1987-03-28T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1987-09-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1987-09-26T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1987-09-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1987-09-26T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1988-03-26T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1988-03-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1988-03-26T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1988-09-24T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1988-09-24T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1988-03-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1988-03-26T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1988-03-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1988-03-26T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1988-09-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1988-09-24T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1988-09-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1988-09-24T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1989-03-25T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1989-03-25T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1989-09-23T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1989-09-23T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1989-03-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1989-03-25T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1989-03-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1989-03-25T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1989-09-23T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1989-09-23T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1989-09-23T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1989-09-23T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1990-03-24T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1990-03-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1990-03-24T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1990-09-29T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1990-09-29T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1990-03-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1990-03-24T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1990-03-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1990-03-24T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1990-09-29T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1990-09-29T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1991-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1991-03-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1991-09-28T23:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1991-09-28T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1991-09-29T00:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1991-09-29T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1991-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1991-03-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-28T23:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1991-09-28T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-29T00:00:00+00:00").tz("Europe/Moscow").zone(), -120, "1991-09-29T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-01-18T23:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1992-01-18T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1992-01-19T00:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1992-01-19T00:00:00+00:00 should be 03:00:00 MSK");
		t.equal(moment("1992-03-28T19:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1992-03-28T19:59:59+00:00 should be 22:59:59 MSK");
		t.equal(moment("1992-03-28T20:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "00:00:00", "1992-03-28T20:00:00+00:00 should be 00:00:00 MSD");
		t.equal(moment("1992-09-26T18:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:59:59", "1992-09-26T18:59:59+00:00 should be 22:59:59 MSD");
		t.equal(moment("1992-09-26T19:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "22:00:00", "1992-09-26T19:00:00+00:00 should be 22:00:00 MSK");

		t.equal(moment("1992-01-18T23:59:59+00:00").tz("Europe/Moscow").zone(), -120, "1992-01-18T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-01-19T00:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1992-01-19T00:00:00+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1992-03-28T19:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1992-03-28T19:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1992-03-28T20:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1992-03-28T20:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1992-09-26T18:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1992-09-26T18:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1992-09-26T19:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1992-09-26T19:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1993-03-27T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1993-03-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1993-03-27T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1993-09-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1993-09-25T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1993-09-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1993-09-25T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1993-03-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1993-03-27T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1993-03-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1993-03-27T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1993-09-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1993-09-25T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1993-09-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1993-09-25T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1994-03-26T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1994-03-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1994-03-26T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1994-09-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1994-09-24T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1994-09-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1994-09-24T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1994-03-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1994-03-26T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1994-03-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1994-03-26T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1994-09-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1994-09-24T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1994-09-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1994-09-24T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1995-03-25T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1995-03-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1995-03-25T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1995-09-23T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1995-09-23T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1995-09-23T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1995-09-23T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1995-03-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1995-03-25T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1995-03-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1995-03-25T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1995-09-23T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1995-09-23T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1995-09-23T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1995-09-23T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1996-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1996-03-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1996-03-30T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1996-10-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1996-10-26T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1996-10-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1996-10-26T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1996-03-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1996-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1996-03-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1996-03-30T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1996-10-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1996-10-26T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1996-10-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1996-10-26T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1997-03-29T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1997-03-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1997-03-29T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1997-10-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1997-10-25T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1997-10-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1997-10-25T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1997-03-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1997-03-29T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1997-03-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1997-03-29T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1997-10-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1997-10-25T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1997-10-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1997-10-25T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1998-03-28T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1998-03-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1998-03-28T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1998-10-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1998-10-24T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1998-10-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1998-10-24T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1998-03-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1998-03-28T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1998-03-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1998-03-28T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1998-10-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1998-10-24T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1998-10-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1998-10-24T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "1999-03-27T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("1999-03-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "1999-03-27T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("1999-10-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "1999-10-30T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("1999-10-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "1999-10-30T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("1999-03-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "1999-03-27T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("1999-03-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "1999-03-27T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1999-10-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "1999-10-30T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("1999-10-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "1999-10-30T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2000-03-25T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2000-03-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2000-03-25T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2000-10-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2000-10-28T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2000-10-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2000-10-28T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2000-03-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2000-03-25T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2000-03-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2000-03-25T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2000-10-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2000-10-28T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2000-10-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2000-10-28T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2001-03-24T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2001-03-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2001-03-24T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2001-10-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2001-10-27T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2001-10-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2001-10-27T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2001-03-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2001-03-24T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2001-03-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2001-03-24T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2001-10-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2001-10-27T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2001-10-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2001-10-27T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2002-03-30T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2002-03-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2002-03-30T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2002-10-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2002-10-26T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2002-10-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2002-10-26T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2002-03-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2002-03-30T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2002-03-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2002-03-30T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2002-10-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2002-10-26T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2002-10-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2002-10-26T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2003-03-29T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2003-03-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2003-03-29T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2003-10-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2003-10-25T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2003-10-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2003-10-25T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2003-03-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2003-03-29T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2003-03-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2003-03-29T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2003-10-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2003-10-25T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2003-10-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2003-10-25T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2004-03-27T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2004-03-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2004-03-27T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2004-10-30T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2004-10-30T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2004-03-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2004-03-27T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2004-03-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2004-03-27T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2004-10-30T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2004-10-30T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2005-03-26T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2005-03-26T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2005-10-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2005-10-29T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2005-10-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2005-10-29T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2005-03-26T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2005-03-26T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2005-10-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2005-10-29T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2005-10-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2005-10-29T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2006-03-25T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2006-03-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2006-03-25T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2006-10-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2006-10-28T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2006-10-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2006-10-28T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2006-03-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2006-03-25T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2006-03-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2006-03-25T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2006-10-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2006-10-28T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2006-10-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2006-10-28T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2007-03-24T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2007-03-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2007-03-24T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2007-10-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2007-10-27T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2007-10-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2007-10-27T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2007-03-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2007-03-24T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2007-03-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2007-03-24T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2007-10-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2007-10-27T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2007-10-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2007-10-27T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-29T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2008-03-29T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2008-03-29T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2008-03-29T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2008-10-25T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2008-10-25T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2008-10-25T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2008-10-25T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2008-03-29T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2008-03-29T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2008-03-29T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2008-03-29T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2008-10-25T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2008-10-25T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2008-10-25T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2008-10-25T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-28T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2009-03-28T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2009-03-28T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2009-03-28T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2009-10-24T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2009-10-24T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2009-10-24T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2009-10-24T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2009-03-28T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2009-03-28T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2009-03-28T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2009-03-28T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2009-10-24T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2009-10-24T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2009-10-24T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2009-10-24T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-27T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2010-03-27T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2010-03-27T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2010-03-27T23:00:00+00:00 should be 03:00:00 MSD");
		t.equal(moment("2010-10-30T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:59:59", "2010-10-30T22:59:59+00:00 should be 02:59:59 MSD");
		t.equal(moment("2010-10-30T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "02:00:00", "2010-10-30T23:00:00+00:00 should be 02:00:00 MSK");

		t.equal(moment("2010-03-27T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2010-03-27T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2010-03-27T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2010-03-27T23:00:00+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2010-10-30T22:59:59+00:00").tz("Europe/Moscow").zone(), -240, "2010-10-30T22:59:59+00:00 should be -240 minutes offset in MSD");
		t.equal(moment("2010-10-30T23:00:00+00:00").tz("Europe/Moscow").zone(), -180, "2010-10-30T23:00:00+00:00 should be -180 minutes offset in MSK");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-26T22:59:59+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "01:59:59", "2011-03-26T22:59:59+00:00 should be 01:59:59 MSK");
		t.equal(moment("2011-03-26T23:00:00+00:00").tz("Europe/Moscow").format("HH:mm:ss"), "03:00:00", "2011-03-26T23:00:00+00:00 should be 03:00:00 MSK");

		t.equal(moment("2011-03-26T22:59:59+00:00").tz("Europe/Moscow").zone(), -180, "2011-03-26T22:59:59+00:00 should be -180 minutes offset in MSK");
		t.equal(moment("2011-03-26T23:00:00+00:00").tz("Europe/Moscow").zone(), -240, "2011-03-26T23:00:00+00:00 should be -240 minutes offset in MSK");

		t.done();
	}
};
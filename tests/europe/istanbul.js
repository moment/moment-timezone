var moment = require("../../index");

exports["Europe/Istanbul"] = {

	"1910" : function (t) {
		t.equal(moment("1910-09-30T22:03:03+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1910-09-30T22:03:03+00:00 should be 23:59:59 IMT");
		t.equal(moment("1910-09-30T22:03:04+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:03:04", "1910-09-30T22:03:04+00:00 should be 00:03:04 EET");

		t.equal(moment("1910-09-30T22:03:03+00:00").tz("Europe/Istanbul").zone(), -7016 / 60, "1910-09-30T22:03:03+00:00 should be -7016 / 60 minutes offset in IMT");
		t.equal(moment("1910-09-30T22:03:04+00:00").tz("Europe/Istanbul").zone(), -120, "1910-09-30T22:03:04+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1916" : function (t) {
		t.equal(moment("1916-04-30T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1916-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1916-04-30T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1916-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1916-09-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1916-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1916-09-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1916-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1916-04-30T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1916-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1916-04-30T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1916-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1916-09-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1916-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1916-09-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1916-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-03-27T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1920-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1920-03-27T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1920-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1920-10-24T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1920-10-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1920-10-24T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1920-10-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1920-03-27T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1920-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1920-03-27T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1920-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1920-10-24T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1920-10-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1920-10-24T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1920-10-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-04-02T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1921-04-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1921-04-02T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1921-04-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1921-10-02T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1921-10-02T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1921-10-02T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1921-10-02T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1921-04-02T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1921-04-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1921-04-02T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1921-04-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1921-10-02T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1921-10-02T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1921-10-02T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1921-10-02T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-03-25T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1922-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1922-03-25T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1922-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1922-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1922-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1922-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1922-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1922-03-25T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1922-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1922-03-25T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1922-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1922-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1922-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1922-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1922-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-05-12T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1924-05-12T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1924-05-12T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1924-05-12T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1924-09-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1924-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1924-09-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1924-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1924-05-12T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1924-05-12T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1924-05-12T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1924-05-12T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1924-09-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1924-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1924-09-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1924-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1925" : function (t) {
		t.equal(moment("1925-04-30T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1925-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1925-04-30T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1925-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1925-09-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1925-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1925-09-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1925-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1925-04-30T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1925-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1925-04-30T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1925-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1925-09-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1925-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1925-09-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1925-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-06-29T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1940-06-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1940-06-29T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1940-06-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1940-10-04T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1940-10-04T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1940-10-04T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1940-10-04T21:00:00+00:00 should be 23:00:00 EET");
		t.equal(moment("1940-11-30T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1940-11-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1940-11-30T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1940-11-30T22:00:00+00:00 should be 01:00:00 EEST");

		t.equal(moment("1940-06-29T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1940-06-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1940-06-29T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1940-06-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1940-10-04T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1940-10-04T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1940-10-04T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1940-10-04T21:00:00+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1940-11-30T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1940-11-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1940-11-30T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1940-11-30T22:00:00+00:00 should be -180 minutes offset in EEST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-09-20T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1941-09-20T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1941-09-20T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1941-09-20T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1941-09-20T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1941-09-20T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1941-09-20T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1941-09-20T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-31T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1942-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1942-03-31T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1942-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1942-10-31T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1942-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1942-10-31T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1942-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1942-03-31T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1942-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1942-03-31T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1942-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1942-10-31T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1942-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1942-10-31T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1942-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-01T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1945-04-01T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1945-04-01T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1945-04-01T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1945-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1945-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1945-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1945-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1945-04-01T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1945-04-01T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1945-04-01T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1945-04-01T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1945-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1945-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1945-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1945-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-05-31T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1946-05-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1946-05-31T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1946-05-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1946-09-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1946-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1946-09-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1946-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1946-05-31T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1946-05-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1946-05-31T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1946-05-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1946-09-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1946-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1946-09-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1946-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-19T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1947-04-19T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1947-04-19T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1947-04-19T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1947-10-04T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1947-10-04T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1947-10-04T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1947-10-04T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1947-04-19T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1947-04-19T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1947-04-19T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1947-04-19T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1947-10-04T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1947-10-04T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1947-10-04T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1947-10-04T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-17T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1948-04-17T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1948-04-17T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1948-04-17T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1948-10-02T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1948-10-02T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1948-10-02T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1948-10-02T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1948-04-17T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1948-04-17T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1948-04-17T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1948-04-17T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1948-10-02T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1948-10-02T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1948-10-02T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1948-10-02T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-09T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1949-04-09T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1949-04-09T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1949-04-09T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1949-10-01T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1949-10-01T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1949-10-01T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1949-10-01T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1949-04-09T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1949-04-09T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1949-04-09T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1949-04-09T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1949-10-01T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1949-10-01T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1949-10-01T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1949-10-01T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-18T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1950-04-18T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1950-04-18T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1950-04-18T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1950-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1950-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1950-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1950-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1950-04-18T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1950-04-18T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1950-04-18T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1950-04-18T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1950-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1950-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1950-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1950-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-21T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1951-04-21T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1951-04-21T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1951-04-21T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1951-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1951-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1951-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1951-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1951-04-21T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1951-04-21T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1951-04-21T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1951-04-21T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1951-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1951-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1951-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1951-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-07-14T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1962-07-14T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1962-07-14T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1962-07-14T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1962-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1962-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1962-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1962-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1962-07-14T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1962-07-14T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1962-07-14T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1962-07-14T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1962-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1962-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-05-14T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1964-05-14T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1964-05-14T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1964-05-14T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1964-09-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1964-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1964-09-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1964-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1964-05-14T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1964-05-14T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1964-05-14T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1964-05-14T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1964-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1964-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-05-02T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1970-05-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1970-05-02T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1970-05-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1970-10-03T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1970-10-03T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1970-10-03T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1970-10-03T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1970-05-02T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1970-05-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1970-05-02T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1970-05-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-10-03T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1970-10-03T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-10-03T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1970-10-03T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-05-01T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1971-05-01T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1971-05-01T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1971-05-01T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1971-10-02T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1971-10-02T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1971-10-02T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1971-10-02T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1971-05-01T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1971-05-01T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1971-05-01T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1971-05-01T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-10-02T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1971-10-02T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-10-02T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1971-10-02T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-05-06T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1972-05-06T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1972-05-06T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1972-05-06T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1972-10-07T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1972-10-07T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1972-10-07T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1972-10-07T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1972-05-06T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1972-05-06T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1972-05-06T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1972-05-06T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-10-07T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1972-10-07T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-10-07T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1972-10-07T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-06-02T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1973-06-02T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1973-06-02T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1973-06-02T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1973-11-03T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1973-11-03T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1973-11-04T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1973-11-04T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1973-06-02T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1973-06-02T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1973-06-02T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1973-06-02T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-11-03T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1973-11-03T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-11-04T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1973-11-04T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-30T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1974-03-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1974-03-31T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1974-03-31T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1974-11-03T01:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:59:59", "1974-11-03T01:59:59+00:00 should be 04:59:59 EEST");
		t.equal(moment("1974-11-03T02:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "1974-11-03T02:00:00+00:00 should be 04:00:00 EET");

		t.equal(moment("1974-03-30T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1974-03-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1974-03-31T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1974-03-31T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-11-03T01:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1974-11-03T01:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-11-03T02:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1974-11-03T02:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-29T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1975-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1975-03-29T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1975-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1975-10-25T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1975-10-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1975-10-25T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1975-10-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1975-03-29T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1975-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1975-03-29T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1975-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-10-25T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1975-10-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-10-25T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1975-10-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-05-31T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1976-05-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1976-05-31T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1976-05-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1976-10-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1976-10-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1976-10-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1976-10-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1976-05-31T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1976-05-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1976-05-31T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1976-05-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-10-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1976-10-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-10-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1976-10-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-02T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1977-04-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1977-04-02T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1977-04-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1977-10-15T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1977-10-15T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1977-10-15T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1977-10-15T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1977-04-02T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1977-04-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1977-04-02T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1977-04-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-10-15T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1977-10-15T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-10-15T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1977-10-15T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-01T21:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1978-04-01T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1978-04-01T22:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1978-04-01T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1978-10-14T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1978-10-14T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1978-10-14T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1978-10-14T21:00:00+00:00 should be 01:00:00 TRST");

		t.equal(moment("1978-04-01T21:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1978-04-01T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1978-04-01T22:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1978-04-01T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-10-14T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1978-10-14T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-10-14T21:00:00+00:00").tz("Europe/Istanbul").zone(), -240, "1978-10-14T21:00:00+00:00 should be -240 minutes offset in TRST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-10-14T19:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1979-10-14T19:59:59+00:00 should be 23:59:59 TRST");
		t.equal(moment("1979-10-14T20:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1979-10-14T20:00:00+00:00 should be 23:00:00 TRT");

		t.equal(moment("1979-10-14T19:59:59+00:00").tz("Europe/Istanbul").zone(), -240, "1979-10-14T19:59:59+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1979-10-14T20:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1979-10-14T20:00:00+00:00 should be -180 minutes offset in TRT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-05T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1980-04-05T23:59:59+00:00 should be 02:59:59 TRT");
		t.equal(moment("1980-04-06T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "1980-04-06T00:00:00+00:00 should be 04:00:00 TRST");
		t.equal(moment("1980-10-12T19:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1980-10-12T19:59:59+00:00 should be 23:59:59 TRST");
		t.equal(moment("1980-10-12T20:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1980-10-12T20:00:00+00:00 should be 23:00:00 TRT");

		t.equal(moment("1980-04-05T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1980-04-05T23:59:59+00:00 should be -180 minutes offset in TRT");
		t.equal(moment("1980-04-06T00:00:00+00:00").tz("Europe/Istanbul").zone(), -240, "1980-04-06T00:00:00+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1980-10-12T19:59:59+00:00").tz("Europe/Istanbul").zone(), -240, "1980-10-12T19:59:59+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1980-10-12T20:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1980-10-12T20:00:00+00:00 should be -180 minutes offset in TRT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-28T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1981-03-28T23:59:59+00:00 should be 02:59:59 TRT");
		t.equal(moment("1981-03-29T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "1981-03-29T00:00:00+00:00 should be 04:00:00 TRST");
		t.equal(moment("1981-10-11T19:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1981-10-11T19:59:59+00:00 should be 23:59:59 TRST");
		t.equal(moment("1981-10-11T20:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1981-10-11T20:00:00+00:00 should be 23:00:00 TRT");

		t.equal(moment("1981-03-28T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1981-03-28T23:59:59+00:00 should be -180 minutes offset in TRT");
		t.equal(moment("1981-03-29T00:00:00+00:00").tz("Europe/Istanbul").zone(), -240, "1981-03-29T00:00:00+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1981-10-11T19:59:59+00:00").tz("Europe/Istanbul").zone(), -240, "1981-10-11T19:59:59+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1981-10-11T20:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1981-10-11T20:00:00+00:00 should be -180 minutes offset in TRT");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-27T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1982-03-27T23:59:59+00:00 should be 02:59:59 TRT");
		t.equal(moment("1982-03-28T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "1982-03-28T00:00:00+00:00 should be 04:00:00 TRST");
		t.equal(moment("1982-10-10T19:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1982-10-10T19:59:59+00:00 should be 23:59:59 TRST");
		t.equal(moment("1982-10-10T20:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1982-10-10T20:00:00+00:00 should be 23:00:00 TRT");

		t.equal(moment("1982-03-27T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1982-03-27T23:59:59+00:00 should be -180 minutes offset in TRT");
		t.equal(moment("1982-03-28T00:00:00+00:00").tz("Europe/Istanbul").zone(), -240, "1982-03-28T00:00:00+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1982-10-10T19:59:59+00:00").tz("Europe/Istanbul").zone(), -240, "1982-10-10T19:59:59+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1982-10-10T20:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1982-10-10T20:00:00+00:00 should be -180 minutes offset in TRT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-07-30T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1983-07-30T20:59:59+00:00 should be 23:59:59 TRT");
		t.equal(moment("1983-07-30T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1983-07-30T21:00:00+00:00 should be 01:00:00 TRST");
		t.equal(moment("1983-10-01T19:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1983-10-01T19:59:59+00:00 should be 23:59:59 TRST");
		t.equal(moment("1983-10-01T20:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1983-10-01T20:00:00+00:00 should be 23:00:00 TRT");

		t.equal(moment("1983-07-30T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1983-07-30T20:59:59+00:00 should be -180 minutes offset in TRT");
		t.equal(moment("1983-07-30T21:00:00+00:00").tz("Europe/Istanbul").zone(), -240, "1983-07-30T21:00:00+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1983-10-01T19:59:59+00:00").tz("Europe/Istanbul").zone(), -240, "1983-10-01T19:59:59+00:00 should be -240 minutes offset in TRST");
		t.equal(moment("1983-10-01T20:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1983-10-01T20:00:00+00:00 should be -180 minutes offset in TRT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-19T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1985-04-19T20:59:59+00:00 should be 23:59:59 TRT");
		t.equal(moment("1985-04-19T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:00:00", "1985-04-19T21:00:00+00:00 should be 00:00:00 EEST");
		t.equal(moment("1985-09-27T20:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:59:59", "1985-09-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1985-09-27T21:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "23:00:00", "1985-09-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1985-04-19T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1985-04-19T20:59:59+00:00 should be -180 minutes offset in TRT");
		t.equal(moment("1985-04-19T21:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1985-04-19T21:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-09-27T20:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1985-09-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-09-27T21:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1985-09-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-29T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1986-03-29T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1986-03-30T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1986-03-30T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1986-09-27T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1986-09-27T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1986-09-28T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1986-09-28T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1986-03-29T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1986-03-29T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1986-03-30T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1986-03-30T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-09-27T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1986-09-27T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-09-28T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1986-09-28T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-28T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1987-03-28T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1987-03-29T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1987-03-29T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1987-09-26T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1987-09-26T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1987-09-27T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1987-09-27T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1987-03-28T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1987-03-28T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1987-03-29T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1987-03-29T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-09-26T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1987-09-26T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-09-27T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1987-09-27T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-26T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1988-03-26T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1988-03-27T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1988-03-27T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1988-09-24T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1988-09-24T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1988-09-25T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1988-09-25T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1988-03-26T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1988-03-26T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1988-03-27T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1988-03-27T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-09-24T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1988-09-24T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-09-25T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1988-09-25T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-25T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1989-03-25T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1989-03-26T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1989-03-26T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1989-09-23T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1989-09-23T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1989-09-24T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1989-09-24T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1989-03-25T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1989-03-25T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1989-03-26T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1989-03-26T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-09-23T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1989-09-23T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-09-24T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1989-09-24T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1990-03-24T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1990-03-25T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "1990-03-25T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1990-09-29T23:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "1990-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1990-09-30T00:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1990-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1990-03-24T23:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1990-03-24T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1990-03-25T00:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1990-03-25T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-09-29T23:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1990-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-09-30T00:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1990-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1991-03-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1991-03-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1991-09-28T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1991-09-28T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1991-03-30T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1991-03-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1991-03-30T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1991-03-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-28T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1991-09-28T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-28T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1991-09-28T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1992-03-28T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1992-03-28T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1992-03-28T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1992-09-26T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1992-09-26T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1992-09-26T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1992-09-26T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1992-03-28T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1992-03-28T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-03-28T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1992-03-28T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-26T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1992-09-26T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-26T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1992-09-26T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-27T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1993-03-27T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1993-03-27T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1993-03-27T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1993-09-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1993-09-25T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1993-09-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1993-09-25T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1993-03-27T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1993-03-27T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1993-03-27T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1993-03-27T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1993-09-25T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1993-09-25T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-26T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1994-03-26T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1994-03-26T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1994-03-26T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1994-09-24T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1994-09-24T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1994-09-24T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1994-09-24T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1994-03-26T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1994-03-26T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1994-03-26T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1994-03-26T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-24T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1994-09-24T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-24T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1994-09-24T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1995-03-25T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1995-03-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1995-03-25T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1995-09-23T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1995-09-23T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1995-09-23T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1995-09-23T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1995-03-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1995-03-25T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1995-03-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1995-03-25T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-23T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1995-09-23T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-23T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1995-09-23T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-30T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1996-03-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1996-03-30T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1996-03-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1996-10-26T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1996-10-26T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1996-10-26T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1996-10-26T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1996-03-30T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1996-03-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-03-30T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1996-03-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-10-26T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1996-10-26T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-10-26T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1996-10-26T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-29T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1997-03-29T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1997-03-29T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1997-03-29T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1997-10-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1997-10-25T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1997-10-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1997-10-25T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1997-03-29T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1997-03-29T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-03-29T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1997-03-29T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-10-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1997-10-25T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-10-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1997-10-25T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-28T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1998-03-28T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1998-03-28T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1998-03-28T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1998-10-24T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1998-10-24T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1998-10-24T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1998-10-24T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1998-03-28T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1998-03-28T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-03-28T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1998-03-28T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-10-24T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1998-10-24T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-10-24T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1998-10-24T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-27T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "1999-03-27T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1999-03-27T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "1999-03-27T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1999-10-30T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "1999-10-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1999-10-30T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "1999-10-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1999-03-27T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "1999-03-27T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-03-27T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "1999-03-27T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-30T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "1999-10-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-30T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "1999-10-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2000-03-25T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2000-03-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2000-03-25T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2000-10-28T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2000-10-28T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2000-10-28T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2000-10-28T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2000-03-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2000-03-25T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-03-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2000-03-25T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-28T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2000-10-28T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-28T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2000-10-28T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-24T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2001-03-24T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2001-03-24T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2001-03-24T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2001-10-27T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2001-10-27T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2001-10-27T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2001-10-27T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2001-03-24T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2001-03-24T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-03-24T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2001-03-24T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-27T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2001-10-27T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-27T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2001-10-27T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-30T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2002-03-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2002-03-30T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2002-03-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2002-10-26T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2002-10-26T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2002-10-26T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2002-10-26T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2002-03-30T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2002-03-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-03-30T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2002-03-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-26T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2002-10-26T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-26T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2002-10-26T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-29T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2003-03-29T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2003-03-29T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2003-03-29T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2003-10-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2003-10-25T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2003-10-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2003-10-25T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2003-03-29T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2003-03-29T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-03-29T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2003-03-29T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2003-10-25T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2003-10-25T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-27T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2004-03-27T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2004-03-27T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2004-03-27T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2004-10-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2004-10-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2004-03-27T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2004-03-27T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-03-27T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2004-03-27T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-30T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2004-10-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-10-30T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2004-10-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2005-03-26T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2005-03-26T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2005-10-29T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2005-10-29T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2005-10-29T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2005-10-29T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2005-03-26T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2005-03-26T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-03-26T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2005-03-26T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-29T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2005-10-29T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-29T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2005-10-29T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-25T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "00:59:59", "2006-03-25T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("2006-03-25T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:00:00", "2006-03-25T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("2006-10-28T22:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:59:59", "2006-10-28T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2006-10-28T23:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "01:00:00", "2006-10-28T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2006-03-25T22:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2006-03-25T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-03-25T23:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2006-03-25T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-28T22:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2006-10-28T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-10-28T23:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2006-10-28T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2007-03-25T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2007-03-25T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2007-10-28T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2007-10-28T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2007-03-25T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2007-03-25T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2007-10-28T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2007-10-28T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2008-03-30T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2008-03-30T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2008-10-26T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2008-10-26T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2008-03-30T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2008-03-30T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2008-10-26T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2008-10-26T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2009-03-29T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2009-03-29T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2009-10-25T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2009-10-25T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2009-03-29T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2009-03-29T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2009-10-25T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2009-10-25T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2010-03-28T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2010-03-28T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2010-10-31T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2010-10-31T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2010-03-28T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2010-03-28T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2010-10-31T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2010-10-31T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2011-03-28T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2011-03-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2011-03-28T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2011-10-30T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2011-10-30T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2011-03-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2011-03-28T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-03-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2011-03-28T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2011-10-30T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2011-10-30T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2012-03-25T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2012-03-25T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2012-10-28T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2012-10-28T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2012-03-25T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2012-03-25T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2012-10-28T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2012-10-28T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2013-03-31T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2013-03-31T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2013-10-27T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2013-10-27T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2013-03-31T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2013-03-31T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2013-10-27T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2013-10-27T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2014-03-30T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2014-03-30T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2014-10-26T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2014-10-26T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2014-03-30T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2014-03-30T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2014-10-26T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2014-10-26T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2015-03-29T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2015-03-29T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2015-10-25T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2015-10-25T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2015-03-29T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2015-03-29T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2015-10-25T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2015-10-25T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2016-03-27T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2016-03-27T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2016-10-30T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2016-10-30T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2016-03-27T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2016-03-27T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2016-10-30T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2016-10-30T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2017-03-26T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2017-03-26T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2017-10-29T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2017-10-29T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2017-03-26T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2017-03-26T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2017-10-29T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2017-10-29T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2018-03-25T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2018-03-25T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2018-10-28T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2018-10-28T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2018-03-25T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2018-03-25T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2018-10-28T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2018-10-28T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2019-03-31T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2019-03-31T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2019-10-27T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2019-10-27T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2019-03-31T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2019-03-31T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2019-10-27T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2019-10-27T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2020-03-29T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2020-03-29T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2020-10-25T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2020-10-25T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2020-03-29T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2020-03-29T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2020-10-25T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2020-10-25T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2021-03-28T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2021-03-28T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2021-10-31T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2021-10-31T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2021-03-28T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2021-03-28T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2021-10-31T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2021-10-31T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2022-03-27T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2022-03-27T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2022-10-30T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2022-10-30T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2022-03-27T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2022-03-27T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2022-10-30T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2022-10-30T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2023-03-26T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2023-03-26T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2023-10-29T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2023-10-29T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2023-03-26T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2023-03-26T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2023-10-29T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2023-10-29T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2024-03-31T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2024-03-31T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2024-10-27T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2024-10-27T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2024-03-31T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2024-03-31T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2024-10-27T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2024-10-27T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2025-03-30T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2025-03-30T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2025-10-26T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2025-10-26T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2025-03-30T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2025-03-30T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2025-10-26T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2025-10-26T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2026-03-29T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2026-03-29T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2026-10-25T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2026-10-25T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2026-03-29T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2026-03-29T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2026-10-25T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2026-10-25T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2027-03-28T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2027-03-28T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2027-10-31T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2027-10-31T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2027-03-28T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2027-03-28T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2027-10-31T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2027-10-31T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2028-03-26T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2028-03-26T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2028-10-29T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2028-10-29T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2028-03-26T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2028-03-26T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2028-10-29T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2028-10-29T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2029-03-25T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2029-03-25T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2029-10-28T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2029-10-28T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2029-03-25T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2029-03-25T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2029-10-28T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2029-10-28T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2030-03-31T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2030-03-31T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2030-10-27T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2030-10-27T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2030-03-31T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2030-03-31T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2030-10-27T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2030-10-27T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2031-03-30T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2031-03-30T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2031-10-26T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2031-10-26T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2031-03-30T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2031-03-30T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2031-10-26T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2031-10-26T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2032-03-28T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2032-03-28T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2032-10-31T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2032-10-31T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2032-03-28T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2032-03-28T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2032-10-31T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2032-10-31T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2033-03-27T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2033-03-27T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2033-10-30T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2033-10-30T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2033-03-27T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2033-03-27T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2033-10-30T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2033-10-30T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2034-03-26T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2034-03-26T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2034-10-29T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2034-10-29T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2034-03-26T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2034-03-26T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2034-10-29T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2034-10-29T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2035-03-25T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2035-03-25T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2035-10-28T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2035-10-28T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2035-03-25T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2035-03-25T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2035-10-28T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2035-10-28T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2036-03-30T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2036-03-30T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2036-10-26T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2036-10-26T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2036-03-30T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2036-03-30T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2036-10-26T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2036-10-26T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "02:59:59", "2037-03-29T00:59:59+00:00 should be 02:59:59 EET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "04:00:00", "2037-03-29T01:00:00+00:00 should be 04:00:00 EEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:59:59", "2037-10-25T00:59:59+00:00 should be 03:59:59 EEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Istanbul").format("HH:mm:ss"), "03:00:00", "2037-10-25T01:00:00+00:00 should be 03:00:00 EET");

		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Istanbul").zone(), -120, "2037-03-29T00:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Istanbul").zone(), -180, "2037-03-29T01:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Istanbul").zone(), -180, "2037-10-25T00:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Istanbul").zone(), -120, "2037-10-25T01:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	}
};
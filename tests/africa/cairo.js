var moment = require("../../moment-timezone");

exports["Africa/Cairo"] = {

	"1940" : function (t) {
		t.equal(moment("1940-07-14T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1940-07-14T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1940-07-14T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1940-07-14T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1940-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1940-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1940-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1940-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1940-07-14T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1940-07-14T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1940-07-14T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1940-07-14T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1940-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1940-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1940-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1940-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-04-14T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1941-04-14T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1941-04-14T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1941-04-14T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1941-09-15T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1941-09-15T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1941-09-15T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1941-09-15T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1941-04-14T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1941-04-14T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1941-04-14T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1941-04-14T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1941-09-15T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1941-09-15T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1941-09-15T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1941-09-15T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-31T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1942-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1942-03-31T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1942-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1942-10-26T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1942-10-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1942-10-26T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1942-10-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1942-03-31T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1942-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1942-03-31T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1942-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1942-10-26T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1942-10-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1942-10-26T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1942-10-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-31T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1943-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1943-03-31T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1943-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1943-10-31T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1943-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1943-10-31T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1943-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1943-03-31T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1943-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1943-03-31T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1943-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1943-10-31T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1943-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1943-10-31T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1943-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-31T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1944-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1944-03-31T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1944-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1944-10-31T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1944-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1944-10-31T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1944-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1944-03-31T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1944-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1944-03-31T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1944-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1944-10-31T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1944-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1944-10-31T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1944-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-15T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1945-04-15T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1945-04-15T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1945-04-15T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1945-10-31T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1945-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1945-10-31T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1945-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1945-04-15T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1945-04-15T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1945-04-15T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1945-04-15T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1945-10-31T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1945-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1945-10-31T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1945-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-05-09T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1957-05-09T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1957-05-09T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1957-05-09T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1957-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1957-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1957-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1957-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1957-05-09T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1957-05-09T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1957-05-09T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1957-05-09T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1957-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1957-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1957-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1957-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-30T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1958-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1958-04-30T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1958-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1958-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1958-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1958-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1958-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1958-04-30T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1958-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1958-04-30T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1958-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1958-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1958-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1958-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1958-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1959-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1959-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1959-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1959-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1959-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1959-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1959-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1959-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1959-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1959-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1959-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1959-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1959-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1959-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1959-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1960-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1960-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1960-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1960-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1960-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1960-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1960-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1960-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1960-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1960-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1960-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1960-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1960-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1960-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1960-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1961-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1961-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1961-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1961-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1961-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1961-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1961-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1961-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1961-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1961-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1961-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1961-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1961-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1961-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1961-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1962-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1962-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1962-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1962-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1962-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1962-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1962-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1962-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1962-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1962-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1962-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1962-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1962-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1963-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1963-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1963-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1963-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1963-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1963-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1963-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1963-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1963-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1963-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1963-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1963-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1963-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1964-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1964-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1964-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1964-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1964-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1964-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1964-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1964-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1964-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1964-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1964-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1964-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1964-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1965-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1965-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1965-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1965-09-29T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1965-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1965-09-30T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1965-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1965-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1965-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1965-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1965-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-29T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1965-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-30T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1965-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1966-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1966-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1966-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1966-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1966-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1966-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1966-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1966-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1966-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1966-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1966-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1966-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1966-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1967-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1967-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1967-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1967-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1967-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1967-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1967-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1967-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1967-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1967-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1967-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1967-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1967-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1968-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1968-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1968-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1968-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1968-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1968-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1968-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1968-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1968-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1968-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1968-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1968-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1968-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1968-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1968-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1969-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1969-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1969-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1969-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1969-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1969-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1969-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1969-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1969-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1969-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1969-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1969-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1969-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1969-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1969-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1970-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1970-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1970-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1970-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1970-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1970-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1970-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1970-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1970-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1970-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1970-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1970-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1970-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1971-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1971-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1971-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1971-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1971-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1971-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1971-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1971-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1971-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1971-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1971-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1971-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1971-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1972-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1972-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1972-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1972-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1972-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1972-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1972-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1972-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1972-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1972-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1972-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1972-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1972-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1973-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1973-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1973-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1973-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1973-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1973-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1973-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1973-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1973-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1973-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1973-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1973-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1973-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1974-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1974-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1974-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1974-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1974-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1974-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1974-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1974-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1974-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1974-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1974-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1974-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1974-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1975-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1975-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1975-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1975-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1975-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1975-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1975-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1975-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1975-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1975-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1975-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1975-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1975-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1976-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1976-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1976-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1976-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1976-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1976-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1976-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1976-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1976-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1976-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1976-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1976-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1976-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1977-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1977-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1977-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1977-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1977-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1977-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1977-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1977-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1977-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1977-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1977-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1977-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1977-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1978-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1978-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1978-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1978-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1978-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1978-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1978-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1978-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1978-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1978-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1978-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1978-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1978-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1979-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1979-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1979-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1979-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1979-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1979-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1979-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1979-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1979-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1979-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1979-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1979-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1979-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1979-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1979-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1980-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1980-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1980-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1980-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1980-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1980-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1980-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1980-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1980-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1980-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1980-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1980-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1980-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1980-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1980-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1981-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1981-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1981-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1981-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1981-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1981-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1981-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1981-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1981-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1981-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1981-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1981-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1981-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1981-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1981-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-07-24T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1982-07-24T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1982-07-24T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1982-07-24T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1982-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1982-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1982-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1982-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1982-07-24T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1982-07-24T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1982-07-24T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1982-07-24T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1982-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1982-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1982-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1982-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-07-11T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1983-07-11T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1983-07-11T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1983-07-11T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1983-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1983-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1983-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1983-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1983-07-11T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1983-07-11T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1983-07-11T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1983-07-11T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1983-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1983-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1983-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1983-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1984-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1984-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1984-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1984-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1984-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1984-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1984-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1984-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1984-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1984-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1984-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1984-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1984-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1984-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1984-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1985-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1985-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1985-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1985-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1985-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1985-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1985-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1985-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1985-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1985-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1985-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1985-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1985-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1985-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1986-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1986-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1986-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1986-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1986-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1986-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1986-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1986-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1986-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1986-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1986-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1986-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1986-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1987-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1987-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1987-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1987-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1987-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1987-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1987-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1987-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1987-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1987-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1987-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1987-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1987-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1988-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1988-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1988-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1988-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1988-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1988-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1988-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1988-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1988-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1988-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1988-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1988-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1988-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-05-05T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1989-05-05T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1989-05-05T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1989-05-05T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1989-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1989-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1989-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1989-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1989-05-05T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1989-05-05T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1989-05-05T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1989-05-05T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1989-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1989-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1990-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1990-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1990-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1990-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1990-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1990-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1990-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1990-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1990-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1990-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1990-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1990-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1990-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1991-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1991-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1991-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1991-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1991-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1991-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1991-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1991-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1991-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1991-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1991-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1991-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1991-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1992-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1992-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1992-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1992-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1992-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1992-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1992-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1992-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1992-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1992-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1992-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1992-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1993-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1993-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1993-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1993-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1993-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1993-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1993-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1993-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1993-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1993-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1993-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1993-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1993-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-30T22:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "00:59:59", "1994-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1994-04-30T23:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1994-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1994-09-30T23:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:59:59", "1994-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1994-10-01T00:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "02:00:00", "1994-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1994-04-30T22:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1994-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1994-04-30T23:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1994-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-30T23:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1994-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-10-01T00:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1994-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-27T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1995-04-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1995-04-27T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1995-04-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1995-09-28T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1995-09-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1995-09-28T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1995-09-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1995-04-27T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1995-04-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1995-04-27T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1995-04-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-28T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1995-09-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-28T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1995-09-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-25T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1996-04-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1996-04-25T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1996-04-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1996-09-26T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1996-09-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1996-09-26T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1996-09-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1996-04-25T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1996-04-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-04-25T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1996-04-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-26T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1996-09-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-26T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1996-09-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-24T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1997-04-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1997-04-24T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1997-04-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1997-09-25T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1997-09-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1997-09-25T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1997-09-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1997-04-24T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1997-04-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-04-24T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1997-04-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-25T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1997-09-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-25T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1997-09-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-23T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1998-04-23T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1998-04-23T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1998-04-23T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1998-09-24T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1998-09-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1998-09-24T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1998-09-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1998-04-23T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1998-04-23T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-04-23T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1998-04-23T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-24T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1998-09-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-24T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1998-09-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-29T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1999-04-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1999-04-29T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "1999-04-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1999-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "1999-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1999-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "1999-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1999-04-29T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "1999-04-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-04-29T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "1999-04-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "1999-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "1999-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-27T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2000-04-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2000-04-27T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2000-04-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2000-09-28T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2000-09-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2000-09-28T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2000-09-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2000-04-27T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2000-04-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-04-27T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2000-04-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-28T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2000-09-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-28T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2000-09-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-26T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2001-04-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2001-04-26T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2001-04-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2001-09-27T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2001-09-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2001-09-27T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2001-09-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2001-04-26T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2001-04-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-04-26T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2001-04-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-27T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2001-09-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-27T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2001-09-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-25T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2002-04-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2002-04-25T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2002-04-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2002-09-26T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2002-09-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2002-09-26T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2002-09-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2002-04-25T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2002-04-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-04-25T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2002-04-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-26T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2002-09-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-26T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2002-09-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-24T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2003-04-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2003-04-24T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2003-04-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2003-09-25T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2003-09-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2003-09-25T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2003-09-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2003-04-24T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2003-04-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-04-24T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2003-04-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-09-25T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2003-09-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-09-25T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2003-09-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-29T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2004-04-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2004-04-29T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2004-04-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2004-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2004-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2004-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2004-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2004-04-29T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2004-04-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-04-29T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2004-04-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2004-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2004-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-28T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2005-04-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2005-04-28T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2005-04-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2005-09-29T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2005-09-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2005-09-29T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2005-09-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2005-04-28T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2005-04-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-04-28T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2005-04-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-29T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2005-09-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-29T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2005-09-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-27T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2006-04-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2006-04-27T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2006-04-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2006-09-21T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2006-09-21T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2006-04-27T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2006-04-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-04-27T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2006-04-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2006-09-21T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2006-09-21T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-04-26T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2007-04-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2007-04-26T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2007-04-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2007-09-06T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2007-09-06T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2007-09-06T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2007-09-06T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2007-04-26T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2007-04-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-04-26T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2007-04-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-09-06T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2007-09-06T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-09-06T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2007-09-06T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-24T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2008-04-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2008-04-24T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2008-04-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2008-08-28T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2008-08-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2008-08-28T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2008-08-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2008-04-24T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2008-04-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-04-24T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2008-04-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-08-28T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2008-08-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-08-28T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2008-08-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-23T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2009-04-23T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2009-04-23T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2009-04-23T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2009-08-20T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2009-08-20T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2009-08-20T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2009-08-20T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2009-04-23T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2009-04-23T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-04-23T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2009-04-23T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-08-20T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2009-08-20T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-08-20T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2009-08-20T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-29T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2010-04-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2010-04-29T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2010-04-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2010-08-10T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2010-08-10T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2010-08-10T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2010-08-10T21:00:00+00:00 should be 23:00:00 EET");
		t.equal(moment("2010-09-09T21:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2010-09-09T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2010-09-09T22:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "01:00:00", "2010-09-09T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2010-09-30T20:59:59+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:59:59", "2010-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2010-09-30T21:00:00+00:00").tz("Africa/Cairo").format("HH:mm:ss"), "23:00:00", "2010-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2010-04-29T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2010-04-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-04-29T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2010-04-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-08-10T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2010-08-10T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-08-10T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2010-08-10T21:00:00+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-09-09T21:59:59+00:00").tz("Africa/Cairo").zone(), -120, "2010-09-09T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-09-09T22:00:00+00:00").tz("Africa/Cairo").zone(), -180, "2010-09-09T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-09-30T20:59:59+00:00").tz("Africa/Cairo").zone(), -180, "2010-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-09-30T21:00:00+00:00").tz("Africa/Cairo").zone(), -120, "2010-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	}
};
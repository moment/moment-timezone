var moment = require("../../index");

exports["Europe/Oslo"] = {

	"1916" : function (t) {
		t.equal(moment("1916-05-21T23:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "00:59:59", "1916-05-21T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("1916-05-22T00:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1916-05-22T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("1916-09-29T21:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "23:59:59", "1916-09-29T21:59:59+00:00 should be 23:59:59 CEST");
		t.equal(moment("1916-09-29T22:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "23:00:00", "1916-09-29T22:00:00+00:00 should be 23:00:00 CET");

		t.equal(moment("1916-05-21T23:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1916-05-21T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1916-05-22T00:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1916-05-22T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1916-09-29T21:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1916-09-29T21:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1916-09-29T22:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1916-09-29T22:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-08-10T21:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "22:59:59", "1940-08-10T21:59:59+00:00 should be 22:59:59 CET");
		t.equal(moment("1940-08-10T22:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "00:00:00", "1940-08-10T22:00:00+00:00 should be 00:00:00 CEST");

		t.equal(moment("1940-08-10T21:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1940-08-10T21:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1940-08-10T22:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1940-08-10T22:00:00+00:00 should be -120 minutes offset in CEST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1942-11-02T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1942-11-02T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1942-11-02T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1942-11-02T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1942-11-02T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1942-11-02T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1943-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1943-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1943-10-04T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1943-10-04T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1943-10-04T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1943-10-04T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1943-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1943-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1943-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1943-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-04T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1943-10-04T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1943-10-04T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1943-10-04T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1944-04-03T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1944-04-03T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1944-10-02T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1944-10-02T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1944-10-02T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1944-10-02T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1944-04-03T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1944-04-03T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-02T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1944-10-02T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-02T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1944-10-02T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1945-04-02T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1945-04-02T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1945-10-01T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1945-10-01T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1945-10-01T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1945-10-01T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1945-04-02T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1945-04-02T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-10-01T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1945-10-01T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-10-01T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1945-10-01T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-03-15T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1959-03-15T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1959-03-15T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1959-03-15T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1959-09-20T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1959-09-20T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1959-09-20T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1959-09-20T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1959-03-15T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1959-03-15T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1959-03-15T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1959-03-15T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1959-09-20T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1959-09-20T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1959-09-20T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1959-09-20T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-03-20T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1960-03-20T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1960-03-20T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1960-03-20T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1960-09-18T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1960-09-18T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1960-09-18T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1960-09-18T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1960-03-20T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1960-03-20T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1960-03-20T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1960-03-20T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1960-09-18T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1960-09-18T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1960-09-18T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1960-09-18T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-03-19T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1961-03-19T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1961-03-19T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1961-03-19T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1961-09-17T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1961-09-17T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1961-09-17T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1961-09-17T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1961-03-19T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1961-03-19T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1961-03-19T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1961-03-19T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1961-09-17T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1961-09-17T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1961-09-17T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1961-09-17T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-03-18T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1962-03-18T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1962-03-18T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1962-03-18T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1962-09-16T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1962-09-16T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1962-09-16T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1962-09-16T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1962-03-18T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1962-03-18T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1962-03-18T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1962-03-18T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1962-09-16T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1962-09-16T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1962-09-16T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1962-09-16T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-03-17T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1963-03-17T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1963-03-17T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1963-03-17T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1963-09-15T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1963-09-15T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1963-09-15T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1963-09-15T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1963-03-17T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1963-03-17T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1963-03-17T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1963-03-17T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1963-09-15T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1963-09-15T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1963-09-15T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1963-09-15T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-15T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1964-03-15T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1964-03-15T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1964-03-15T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1964-09-20T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1964-09-20T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1964-09-20T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1964-09-20T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1964-03-15T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1964-03-15T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1964-03-15T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1964-03-15T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1964-09-20T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1964-09-20T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1964-09-20T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1964-09-20T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1965-04-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1965-04-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1965-04-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1965-09-19T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1965-09-19T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1965-09-19T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1965-09-19T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1965-04-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1965-04-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1965-04-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1965-04-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1965-09-19T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1965-09-19T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1965-09-19T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1965-09-19T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-06T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1980-04-06T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1980-04-06T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1980-04-06T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1980-09-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1980-09-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1980-04-06T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1980-04-06T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1980-04-06T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1980-04-06T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1980-09-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1980-09-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1981-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1981-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1981-09-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1981-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1981-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1981-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1981-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1981-09-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1981-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1982-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1982-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1982-09-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1982-09-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1982-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1982-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1982-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1982-09-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1982-09-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1983-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1983-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1983-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1983-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1983-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1983-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1983-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1983-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1983-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1983-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1983-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1984-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1984-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1984-09-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1984-09-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1984-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1984-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1984-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1984-09-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1984-09-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1985-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1985-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1985-09-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1985-09-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1985-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1985-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1985-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1985-09-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1985-09-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1986-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1986-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1986-09-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1986-09-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1986-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1986-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1986-09-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1986-09-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1987-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1987-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1987-09-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1987-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1987-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1987-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1987-09-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1987-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1988-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1988-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1988-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1988-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1988-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1988-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1988-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1988-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1989-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1989-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1989-09-24T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1989-09-24T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1989-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1989-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1989-09-24T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1989-09-24T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1990-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1990-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1990-09-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1990-09-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1990-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1990-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1990-09-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1990-09-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1991-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1991-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1991-09-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1991-09-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1991-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1991-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1991-09-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1991-09-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1992-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1992-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1992-09-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1992-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1992-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1992-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1992-09-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1992-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1993-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1993-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1993-09-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1993-09-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1993-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1993-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1993-09-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1993-09-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1994-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1994-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1994-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1994-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1994-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1994-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1994-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1994-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1995-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1995-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1995-09-24T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1995-09-24T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1995-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1995-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1995-09-24T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1995-09-24T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1996-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1996-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1996-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1996-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1996-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1996-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1996-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1996-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1997-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1997-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1997-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1997-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1997-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1997-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1997-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1997-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1998-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1998-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1998-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1998-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1998-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1998-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1998-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1998-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "1999-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "1999-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "1999-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "1999-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "1999-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "1999-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "1999-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "1999-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2000-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2000-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2000-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2000-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2000-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2000-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2000-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2000-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2001-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2001-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2001-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2001-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2001-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2001-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2001-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2001-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2002-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2002-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2002-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2002-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2002-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2002-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2002-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2002-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2003-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2003-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2003-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2003-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2003-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2003-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2003-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2003-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2004-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2004-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2004-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2004-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2004-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2004-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2004-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2004-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2005-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2005-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2005-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2005-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2005-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2005-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2005-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2005-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2006-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2006-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2006-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2006-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2006-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2006-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2006-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2006-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2007-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2007-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2007-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2007-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2007-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2007-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2007-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2007-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2008-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2008-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2008-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2008-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2008-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2008-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2008-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2008-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2009-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2009-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2009-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2009-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2009-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2009-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2009-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2009-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2010-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2010-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2010-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2010-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2010-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2010-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2010-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2010-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2011-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2011-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2011-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2011-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2011-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2011-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2011-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2011-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2012-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2012-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2012-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2012-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2012-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2012-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2012-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2012-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2013-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2013-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2013-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2013-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2013-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2013-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2013-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2013-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2014-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2014-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2014-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2014-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2014-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2014-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2014-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2014-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2015-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2015-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2015-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2015-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2015-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2015-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2015-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2015-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2016-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2016-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2016-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2016-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2016-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2016-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2016-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2016-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2017-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2017-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2017-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2017-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2017-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2017-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2017-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2017-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2018-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2018-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2018-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2018-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2018-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2018-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2018-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2018-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2019-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2019-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2019-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2019-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2019-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2019-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2019-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2019-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2020-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2020-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2020-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2020-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2020-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2020-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2020-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2020-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2021-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2021-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2021-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2021-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2021-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2021-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2021-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2021-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2022-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2022-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2022-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2022-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2022-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2022-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2022-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2022-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2023-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2023-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2023-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2023-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2023-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2023-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2023-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2023-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2024-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2024-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2024-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2024-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2024-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2024-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2024-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2024-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2025-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2025-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2025-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2025-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2025-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2025-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2025-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2025-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2026-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2026-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2026-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2026-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2026-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2026-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2026-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2026-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2027-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2027-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2027-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2027-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2027-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2027-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2027-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2027-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2028-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2028-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2028-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2028-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2028-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2028-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2028-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2028-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2029-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2029-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2029-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2029-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2029-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2029-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2029-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2029-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2030-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2030-03-31T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2030-10-27T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2030-10-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2030-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2030-03-31T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2030-10-27T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2030-10-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2031-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2031-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2031-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2031-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2031-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2031-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2031-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2031-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2032-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2032-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2032-10-31T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2032-10-31T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2032-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2032-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2032-10-31T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2032-10-31T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2033-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2033-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2033-10-30T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2033-10-30T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2033-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2033-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2033-10-30T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2033-10-30T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2034-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2034-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2034-10-29T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2034-10-29T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2034-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2034-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2034-10-29T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2034-10-29T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2035-03-25T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2035-03-25T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2035-10-28T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2035-10-28T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2035-03-25T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2035-03-25T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2035-10-28T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2035-10-28T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2036-03-30T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2036-03-30T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2036-10-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2036-10-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2036-03-30T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2036-03-30T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2036-10-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2036-10-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "01:59:59", "2037-03-29T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "03:00:00", "2037-03-29T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:59:59", "2037-10-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Oslo").format("HH:mm:ss"), "02:00:00", "2037-10-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Oslo").zone(), -60, "2037-03-29T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Oslo").zone(), -120, "2037-03-29T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Oslo").zone(), -120, "2037-10-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Oslo").zone(), -60, "2037-10-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	}
};
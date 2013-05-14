var moment = require("../../index");

exports["Africa/Algiers"] = {

	"1911" : function (t) {
		t.equal(moment("1911-03-10T23:50:38+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1911-03-10T23:50:38+00:00 should be 23:59:59 PMT");
		t.equal(moment("1911-03-10T23:50:39+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:50:39", "1911-03-10T23:50:39+00:00 should be 23:50:39 WET");

		t.equal(moment("1911-03-10T23:50:38+00:00").tz("Africa/Algiers").zone(), -561 / 60, "1911-03-10T23:50:38+00:00 should be -561 / 60 minutes offset in PMT");
		t.equal(moment("1911-03-10T23:50:39+00:00").tz("Africa/Algiers").zone(), 0, "1911-03-10T23:50:39+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1916" : function (t) {
		t.equal(moment("1916-06-14T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1916-06-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1916-06-14T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1916-06-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1916-10-01T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1916-10-01T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1916-10-01T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1916-10-01T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1916-06-14T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1916-06-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1916-06-14T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1916-06-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1916-10-01T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1916-10-01T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1916-10-01T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1916-10-01T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-03-24T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1917-03-24T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1917-03-24T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1917-03-24T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1917-10-07T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1917-10-07T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1917-10-07T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1917-10-07T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1917-03-24T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1917-03-24T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1917-03-24T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1917-03-24T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1917-10-07T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1917-10-07T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1917-10-07T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1917-10-07T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-03-09T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1918-03-09T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1918-03-09T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1918-03-09T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1918-10-06T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1918-10-06T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1918-10-06T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1918-10-06T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1918-03-09T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1918-03-09T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1918-03-09T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1918-03-09T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-06T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1918-10-06T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-06T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1918-10-06T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-01T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1919-03-01T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1919-03-01T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1919-03-01T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1919-10-05T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1919-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1919-10-05T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1919-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1919-03-01T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1919-03-01T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1919-03-01T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1919-03-01T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1919-10-05T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1919-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1919-10-05T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1919-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-02-14T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1920-02-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1920-02-14T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1920-02-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1920-10-23T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1920-10-23T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1920-10-23T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1920-10-23T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1920-02-14T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1920-02-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1920-02-14T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1920-02-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1920-10-23T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1920-10-23T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1920-10-23T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1920-10-23T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-03-14T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1921-03-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1921-03-14T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1921-03-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1921-06-21T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1921-06-21T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1921-06-21T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1921-06-21T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1921-03-14T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1921-03-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1921-03-14T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1921-03-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1921-06-21T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1921-06-21T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1921-06-21T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1921-06-21T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-09-11T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1939-09-11T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1939-09-11T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1939-09-11T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1939-11-18T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:59:59", "1939-11-18T23:59:59+00:00 should be 00:59:59 WEST");
		t.equal(moment("1939-11-19T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1939-11-19T00:00:00+00:00 should be 00:00:00 WET");

		t.equal(moment("1939-09-11T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1939-09-11T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1939-09-11T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1939-09-11T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1939-11-18T23:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1939-11-18T23:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1939-11-19T00:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1939-11-19T00:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-02-25T01:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:59:59", "1940-02-25T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1940-02-25T02:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "03:00:00", "1940-02-25T02:00:00+00:00 should be 03:00:00 CET");

		t.equal(moment("1940-02-25T01:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1940-02-25T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1940-02-25T02:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1940-02-25T02:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:59:59", "1944-04-03T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "03:00:00", "1944-04-03T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1944-10-07T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:59:59", "1944-10-07T23:59:59+00:00 should be 01:59:59 CEST");
		t.equal(moment("1944-10-08T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1944-10-08T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("1944-04-03T00:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1944-04-03T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1944-04-03T01:00:00+00:00").tz("Africa/Algiers").zone(), -120, "1944-04-03T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-07T23:59:59+00:00").tz("Africa/Algiers").zone(), -120, "1944-10-07T23:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1944-10-08T00:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1944-10-08T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:59:59", "1945-04-02T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "03:00:00", "1945-04-02T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1945-09-15T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:59:59", "1945-09-15T22:59:59+00:00 should be 00:59:59 CEST");
		t.equal(moment("1945-09-15T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1945-09-15T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1945-04-02T00:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1945-04-02T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1945-04-02T01:00:00+00:00").tz("Africa/Algiers").zone(), -120, "1945-04-02T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-09-15T22:59:59+00:00").tz("Africa/Algiers").zone(), -120, "1945-09-15T22:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1945-09-15T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1945-09-15T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-10-06T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1946-10-06T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1946-10-06T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1946-10-06T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1946-10-06T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1946-10-06T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1946-10-06T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1946-10-06T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-01-28T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1956-01-28T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1956-01-29T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1956-01-29T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("1956-01-28T23:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1956-01-28T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1956-01-29T00:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1956-01-29T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-13T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1963-04-13T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1963-04-13T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1963-04-13T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1963-04-13T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1963-04-13T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1963-04-13T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1963-04-13T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "22:59:59", "1971-04-25T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1971-04-25T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1971-04-25T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1971-09-26T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1971-09-26T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1971-09-26T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1971-09-26T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1971-04-25T22:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1971-04-25T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1971-04-25T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1971-04-25T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1971-09-26T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1971-09-26T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1971-09-26T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1971-09-26T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-05-05T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1977-05-05T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1977-05-06T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1977-05-06T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1977-10-20T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1977-10-20T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1977-10-20T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:00:00", "1977-10-20T23:00:00+00:00 should be 00:00:00 CET");

		t.equal(moment("1977-05-05T23:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1977-05-05T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1977-05-06T00:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1977-05-06T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-10-20T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1977-10-20T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-10-20T23:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1977-10-20T23:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-23T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "00:59:59", "1978-03-23T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("1978-03-24T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "02:00:00", "1978-03-24T00:00:00+00:00 should be 02:00:00 CEST");
		t.equal(moment("1978-09-22T00:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "02:59:59", "1978-09-22T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1978-09-22T01:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "02:00:00", "1978-09-22T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1978-03-23T23:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1978-03-23T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1978-03-24T00:00:00+00:00").tz("Africa/Algiers").zone(), -120, "1978-03-24T00:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1978-09-22T00:59:59+00:00").tz("Africa/Algiers").zone(), -120, "1978-09-22T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1978-09-22T01:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1978-09-22T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-10-25T22:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1979-10-25T22:59:59+00:00 should be 23:59:59 CET");
		t.equal(moment("1979-10-25T23:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:00:00", "1979-10-25T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1979-10-25T22:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1979-10-25T22:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1979-10-25T23:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1979-10-25T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-24T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1980-04-24T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1980-04-25T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1980-04-25T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1980-10-31T00:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:59:59", "1980-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1980-10-31T01:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1980-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1980-04-24T23:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1980-04-24T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1980-04-25T00:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1980-04-25T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1980-10-31T00:59:59+00:00").tz("Africa/Algiers").zone(), -60, "1980-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1980-10-31T01:00:00+00:00").tz("Africa/Algiers").zone(), 0, "1980-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-30T23:59:59+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "23:59:59", "1981-04-30T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1981-05-01T00:00:00+00:00").tz("Africa/Algiers").format("HH:mm:ss"), "01:00:00", "1981-05-01T00:00:00+00:00 should be 01:00:00 CET");

		t.equal(moment("1981-04-30T23:59:59+00:00").tz("Africa/Algiers").zone(), 0, "1981-04-30T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1981-05-01T00:00:00+00:00").tz("Africa/Algiers").zone(), -60, "1981-05-01T00:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	}
};
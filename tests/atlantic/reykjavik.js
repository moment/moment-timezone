var moment = require("../../index");

exports["Atlantic/Reykjavik"] = {

	"1908" : function (t) {
		t.equal(moment("1908-01-01T01:27:47+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "23:59:59", "1908-01-01T01:27:47+00:00 should be 23:59:59 RMT");
		t.equal(moment("1908-01-01T01:27:48+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:27:48", "1908-01-01T01:27:48+00:00 should be 00:27:48 IST");

		t.equal(moment("1908-01-01T01:27:47+00:00").tz("Atlantic/Reykjavik").zone(), 5268 / 60, "1908-01-01T01:27:47+00:00 should be 5268 / 60 minutes offset in RMT");
		t.equal(moment("1908-01-01T01:27:48+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1908-01-01T01:27:48+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-02-19T23:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "22:59:59", "1917-02-19T23:59:59+00:00 should be 22:59:59 IST");
		t.equal(moment("1917-02-20T00:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:00:00", "1917-02-20T00:00:00+00:00 should be 00:00:00 ISST");
		t.equal(moment("1917-10-21T00:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1917-10-21T00:59:59+00:00 should be 00:59:59 ISST");
		t.equal(moment("1917-10-21T01:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:00:00", "1917-10-21T01:00:00+00:00 should be 00:00:00 IST");

		t.equal(moment("1917-02-19T23:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1917-02-19T23:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1917-02-20T00:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1917-02-20T00:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1917-10-21T00:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1917-10-21T00:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1917-10-21T01:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1917-10-21T01:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-02-19T23:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "22:59:59", "1918-02-19T23:59:59+00:00 should be 22:59:59 IST");
		t.equal(moment("1918-02-20T00:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:00:00", "1918-02-20T00:00:00+00:00 should be 00:00:00 ISST");
		t.equal(moment("1918-11-16T00:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1918-11-16T00:59:59+00:00 should be 00:59:59 ISST");
		t.equal(moment("1918-11-16T01:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:00:00", "1918-11-16T01:00:00+00:00 should be 00:00:00 IST");

		t.equal(moment("1918-02-19T23:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1918-02-19T23:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1918-02-20T00:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1918-02-20T00:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1918-11-16T00:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1918-11-16T00:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1918-11-16T01:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1918-11-16T01:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-04-29T23:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "22:59:59", "1939-04-29T23:59:59+00:00 should be 22:59:59 IST");
		t.equal(moment("1939-04-30T00:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:00:00", "1939-04-30T00:00:00+00:00 should be 00:00:00 ISST");
		t.equal(moment("1939-11-29T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1939-11-29T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1939-11-29T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1939-11-29T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1939-04-29T23:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1939-04-29T23:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1939-04-30T00:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1939-04-30T00:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1939-11-29T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1939-11-29T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1939-11-29T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1939-11-29T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-02-25T02:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1940-02-25T02:59:59+00:00 should be 01:59:59 IST");
		t.equal(moment("1940-02-25T03:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "03:00:00", "1940-02-25T03:00:00+00:00 should be 03:00:00 ISST");
		t.equal(moment("1940-11-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1940-11-03T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1940-11-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1940-11-03T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1940-02-25T02:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1940-02-25T02:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1940-02-25T03:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1940-02-25T03:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1940-11-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1940-11-03T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1940-11-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1940-11-03T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-03-02T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1941-03-02T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1941-03-02T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1941-03-02T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1941-11-02T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1941-11-02T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1941-11-02T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1941-11-02T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1941-03-02T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1941-03-02T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1941-03-02T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1941-03-02T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1941-11-02T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1941-11-02T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1941-11-02T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1941-11-02T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-08T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1942-03-08T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1942-03-08T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1942-03-08T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1942-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1942-10-25T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1942-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1942-10-25T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1942-03-08T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1942-03-08T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1942-03-08T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1942-03-08T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1942-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1942-10-25T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1942-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1942-10-25T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-07T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1943-03-07T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1943-03-07T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1943-03-07T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1943-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1943-10-24T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1943-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1943-10-24T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1943-03-07T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1943-03-07T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1943-03-07T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1943-03-07T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1943-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1943-10-24T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1943-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1943-10-24T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-05T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1944-03-05T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1944-03-05T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1944-03-05T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1944-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1944-10-22T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1944-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1944-10-22T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1944-03-05T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1944-03-05T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1944-03-05T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1944-03-05T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1944-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1944-10-22T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1944-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1944-10-22T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-03-04T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1945-03-04T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1945-03-04T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1945-03-04T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1945-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1945-10-28T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1945-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1945-10-28T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1945-03-04T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1945-03-04T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1945-03-04T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1945-03-04T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1945-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1945-10-28T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1945-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1945-10-28T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-03-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1946-03-03T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1946-03-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1946-03-03T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1946-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1946-10-27T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1946-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1946-10-27T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1946-03-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1946-03-03T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1946-03-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1946-03-03T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1946-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1946-10-27T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1946-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1946-10-27T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1947-04-06T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1947-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1947-04-06T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1947-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1947-10-26T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1947-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1947-10-26T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1947-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1947-04-06T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1947-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1947-04-06T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1947-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1947-10-26T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1947-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1947-10-26T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1948-04-04T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1948-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1948-04-04T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1948-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1948-10-24T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1948-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1948-10-24T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1948-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1948-04-04T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1948-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1948-04-04T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1948-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1948-10-24T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1948-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1948-10-24T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1949-04-03T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1949-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1949-04-03T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1949-10-30T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1949-10-30T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1949-10-30T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1949-10-30T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1949-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1949-04-03T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1949-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1949-04-03T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1949-10-30T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1949-10-30T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1949-10-30T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1949-10-30T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1950-04-02T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1950-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1950-04-02T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1950-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1950-10-22T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1950-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1950-10-22T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1950-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1950-04-02T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1950-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1950-04-02T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1950-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1950-10-22T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1950-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1950-10-22T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1951-04-01T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1951-04-01T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1951-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1951-10-28T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1951-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1951-10-28T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1951-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1951-04-01T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1951-04-01T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1951-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1951-10-28T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1951-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1951-10-28T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1952-04-06T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1952-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1952-04-06T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1952-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1952-10-26T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1952-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1952-10-26T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1952-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1952-04-06T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1952-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1952-04-06T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1952-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1952-10-26T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1952-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1952-10-26T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1953-04-05T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1953-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1953-04-05T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1953-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1953-10-25T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1953-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1953-10-25T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1953-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1953-04-05T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1953-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1953-04-05T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1953-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1953-10-25T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1953-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1953-10-25T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1954-04-04T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1954-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1954-04-04T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1954-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1954-10-24T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1954-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1954-10-24T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1954-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1954-04-04T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1954-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1954-04-04T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1954-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1954-10-24T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1954-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1954-10-24T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1955-04-03T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1955-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1955-04-03T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1955-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1955-10-23T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1955-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1955-10-23T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1955-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1955-04-03T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1955-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1955-04-03T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1955-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1955-10-23T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1955-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1955-10-23T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1956-04-01T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1956-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1956-04-01T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1956-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1956-10-28T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1956-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1956-10-28T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1956-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1956-04-01T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1956-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1956-04-01T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1956-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1956-10-28T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1956-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1956-10-28T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1957-04-07T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1957-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1957-04-07T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1957-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1957-10-27T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1957-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1957-10-27T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1957-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1957-04-07T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1957-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1957-04-07T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1957-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1957-10-27T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1957-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1957-10-27T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1958-04-06T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1958-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1958-04-06T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1958-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1958-10-26T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1958-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1958-10-26T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1958-04-06T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1958-04-06T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1958-04-06T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1958-04-06T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1958-10-26T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1958-10-26T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1958-10-26T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1958-10-26T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1959-04-05T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1959-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1959-04-05T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1959-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1959-10-25T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1959-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1959-10-25T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1959-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1959-04-05T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1959-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1959-04-05T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1959-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1959-10-25T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1959-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1959-10-25T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1960-04-03T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1960-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1960-04-03T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1960-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1960-10-23T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1960-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1960-10-23T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1960-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1960-04-03T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1960-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1960-04-03T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1960-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1960-10-23T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1960-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1960-10-23T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1961-04-02T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1961-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1961-04-02T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1961-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1961-10-22T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1961-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1961-10-22T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1961-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1961-04-02T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1961-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1961-04-02T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1961-10-22T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1961-10-22T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1961-10-22T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1961-10-22T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1962-04-01T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1962-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1962-04-01T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1962-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1962-10-28T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1962-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1962-10-28T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1962-04-01T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1962-04-01T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1962-04-01T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1962-04-01T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1962-10-28T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1962-10-28T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1962-10-28T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1962-10-28T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1963-04-07T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1963-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1963-04-07T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1963-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1963-10-27T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1963-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1963-10-27T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1963-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1963-04-07T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1963-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1963-04-07T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1963-10-27T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1963-10-27T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1963-10-27T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1963-10-27T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1964-04-05T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1964-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1964-04-05T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1964-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1964-10-25T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1964-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1964-10-25T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1964-04-05T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1964-04-05T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1964-04-05T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1964-04-05T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1964-10-25T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1964-10-25T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1964-10-25T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1964-10-25T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1965-04-04T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1965-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1965-04-04T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1965-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1965-10-24T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1965-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1965-10-24T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1965-04-04T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1965-04-04T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1965-04-04T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1965-04-04T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1965-10-24T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1965-10-24T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1965-10-24T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1965-10-24T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1966-04-03T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1966-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1966-04-03T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1966-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1966-10-23T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1966-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1966-10-23T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1966-04-03T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1966-04-03T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1966-04-03T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1966-04-03T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1966-10-23T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1966-10-23T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1966-10-23T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1966-10-23T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1967-04-02T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1967-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1967-04-02T02:00:00+00:00 should be 02:00:00 ISST");
		t.equal(moment("1967-10-29T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:59:59", "1967-10-29T01:59:59+00:00 should be 01:59:59 ISST");
		t.equal(moment("1967-10-29T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "01:00:00", "1967-10-29T02:00:00+00:00 should be 01:00:00 IST");

		t.equal(moment("1967-04-02T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1967-04-02T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1967-04-02T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1967-04-02T02:00:00+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1967-10-29T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1967-10-29T01:59:59+00:00 should be 0 minutes offset in ISST");
		t.equal(moment("1967-10-29T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1967-10-29T02:00:00+00:00 should be 60 minutes offset in IST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "00:59:59", "1968-04-07T01:59:59+00:00 should be 00:59:59 IST");
		t.equal(moment("1968-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").format("HH:mm:ss"), "02:00:00", "1968-04-07T02:00:00+00:00 should be 02:00:00 GMT");

		t.equal(moment("1968-04-07T01:59:59+00:00").tz("Atlantic/Reykjavik").zone(), 60, "1968-04-07T01:59:59+00:00 should be 60 minutes offset in IST");
		t.equal(moment("1968-04-07T02:00:00+00:00").tz("Atlantic/Reykjavik").zone(), 0, "1968-04-07T02:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
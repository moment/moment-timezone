var moment = require("../../../index");

exports["America/Indiana/Petersburg"] = {

	"1918" : function (t) {
		t.equal(moment("1918-03-31T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1918-03-31T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1918-03-31T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1918-03-31T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1918-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1918-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1918-03-31T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1918-03-31T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1918-03-31T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1918-03-31T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1918-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1918-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1918-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-03-30T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1919-03-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1919-03-30T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1919-03-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1919-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1919-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1919-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1919-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1919-03-30T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1919-03-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1919-03-30T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1919-03-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1919-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1919-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1919-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1919-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1942-02-09T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1942-02-09T08:00:00+00:00 should be 03:00:00 CWT");

		t.equal(moment("1942-02-09T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1942-02-09T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1942-02-09T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1942-02-09T08:00:00+00:00 should be 300 minutes offset in CWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "17:59:59", "1945-08-14T22:59:59+00:00 should be 17:59:59 CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "18:00:00", "1945-08-14T23:00:00+00:00 should be 18:00:00 CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1945-09-30T06:59:59+00:00 should be 01:59:59 CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1945-09-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1945-08-14T22:59:59+00:00 should be 300 minutes offset in CWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1945-08-14T23:00:00+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1945-09-30T06:59:59+00:00 should be 300 minutes offset in CPT");
		t.equal(moment("1945-09-30T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1945-09-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-05-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "23:59:59", "1955-05-01T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1955-05-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1955-05-01T06:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1955-09-25T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1955-09-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1955-09-25T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1955-09-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1955-05-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1955-05-01T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1955-05-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1955-05-01T06:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1955-09-25T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1955-09-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1955-09-25T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1955-09-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1956-04-29T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1956-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1956-04-29T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1956-09-30T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1956-09-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1956-09-30T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1956-09-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1956-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1956-04-29T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1956-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1956-04-29T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1956-09-30T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1956-09-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1956-09-30T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1956-09-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1957-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1957-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1957-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1957-09-29T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1957-09-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1957-09-29T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1957-09-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1957-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1957-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1957-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1957-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1957-09-29T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1957-09-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1957-09-29T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1957-09-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1958-04-27T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1958-04-27T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1958-04-27T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1958-09-28T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1958-09-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1958-09-28T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1958-09-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1958-04-27T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1958-04-27T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1958-04-27T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1958-04-27T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1958-09-28T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1958-09-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1958-09-28T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1958-09-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1959-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1959-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1959-04-26T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1959-09-27T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1959-09-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1959-09-27T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1959-09-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1959-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1959-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1959-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1959-04-26T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1959-09-27T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1959-09-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1959-09-27T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1959-09-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1960-04-24T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1960-04-24T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1960-04-24T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1960-09-25T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1960-09-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1960-09-25T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1960-09-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1960-04-24T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1960-04-24T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1960-04-24T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1960-04-24T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1960-09-25T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1960-09-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1960-09-25T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1960-09-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1961-04-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1961-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1961-04-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1961-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1961-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1961-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1961-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1961-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1961-04-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1961-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1961-04-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1961-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1961-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1961-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1961-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1962-04-29T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1962-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1962-04-29T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1962-10-28T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1962-10-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1962-10-28T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1962-10-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1962-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1962-04-29T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1962-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1962-04-29T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1962-10-28T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1962-10-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1962-10-28T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1962-10-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1963-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1963-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1963-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1963-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1963-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1963-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1963-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1963-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1963-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1963-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1963-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1963-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1963-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1963-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1963-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1964-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1964-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1964-04-26T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1964-10-25T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1964-10-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1964-10-25T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1964-10-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1964-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1964-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1964-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1964-04-26T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1964-10-25T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1964-10-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1964-10-25T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1964-10-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1965-04-25T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1965-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1965-04-25T08:00:00+00:00 should be 03:00:00 EST");

		t.equal(moment("1965-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1965-04-25T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1965-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1965-04-25T08:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-10-30T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1966-10-30T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("1966-10-30T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1966-10-30T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1966-10-30T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1966-10-30T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("1966-10-30T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1966-10-30T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1967-04-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1967-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1967-04-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1967-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1967-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1967-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1967-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1967-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1967-04-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1967-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1967-04-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1967-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1967-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1967-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1967-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1968-04-28T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1968-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1968-04-28T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1968-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1968-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1968-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1968-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1968-04-28T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1968-04-28T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1968-04-28T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1968-04-28T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1968-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1968-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1968-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1968-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1969-04-27T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1969-04-27T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1969-04-27T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1969-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1969-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1969-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1969-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1969-04-27T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1969-04-27T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1969-04-27T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1969-04-27T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1969-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1969-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1969-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1969-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1970-04-26T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1970-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1970-04-26T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1970-10-25T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1970-10-25T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1970-10-25T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1970-10-25T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1970-04-26T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1970-04-26T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1970-04-26T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1970-04-26T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1970-10-25T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1970-10-25T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1970-10-25T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1970-10-25T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1971-04-25T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1971-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1971-04-25T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1971-10-31T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1971-10-31T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1971-10-31T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1971-10-31T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1971-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1971-04-25T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1971-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1971-04-25T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1971-10-31T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1971-10-31T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1971-10-31T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1971-10-31T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1972-04-30T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1972-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1972-04-30T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1972-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1972-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1972-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1972-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1972-04-30T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1972-04-30T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1972-04-30T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1972-04-30T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1972-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1972-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1972-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1972-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1973-04-29T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1973-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1973-04-29T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1973-10-28T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1973-10-28T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1973-10-28T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1973-10-28T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1973-04-29T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1973-04-29T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1973-04-29T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1973-04-29T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1973-10-28T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1973-10-28T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1973-10-28T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1973-10-28T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-06T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1974-01-06T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1974-01-06T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1974-01-06T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1974-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1974-10-27T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1974-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1974-10-27T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1974-01-06T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1974-01-06T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1974-01-06T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1974-01-06T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1974-10-27T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1974-10-27T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1974-10-27T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1974-10-27T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-02-23T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1975-02-23T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1975-02-23T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1975-02-23T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1975-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1975-10-26T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1975-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1975-10-26T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1975-02-23T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1975-02-23T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1975-02-23T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1975-02-23T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1975-10-26T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1975-10-26T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1975-10-26T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1975-10-26T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1976-04-25T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1976-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1976-04-25T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1976-10-31T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1976-10-31T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1976-10-31T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "1976-10-31T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("1976-04-25T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1976-04-25T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1976-04-25T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1976-04-25T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1976-10-31T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1976-10-31T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1976-10-31T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1976-10-31T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1977-04-24T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("1977-04-24T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "1977-04-24T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("1977-10-30T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "1977-10-30T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("1977-10-30T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "02:00:00", "1977-10-30T07:00:00+00:00 should be 02:00:00 EST");

		t.equal(moment("1977-04-24T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "1977-04-24T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1977-04-24T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1977-04-24T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1977-10-30T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1977-10-30T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1977-10-30T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "1977-10-30T07:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2006-04-02T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2006-04-02T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "02:00:00", "2006-04-02T07:00:00+00:00 should be 02:00:00 CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2006-10-29T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2006-10-29T07:00:00+00:00 should be 01:00:00 CST");

		t.equal(moment("2006-04-02T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2006-04-02T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2006-04-02T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2006-04-02T07:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2006-10-29T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2006-10-29T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 360, "2006-10-29T07:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2007-03-11T07:59:59+00:00 should be 01:59:59 CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2007-03-11T08:00:00+00:00 should be 03:00:00 CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2007-11-04T06:59:59+00:00 should be 01:59:59 CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "02:00:00", "2007-11-04T07:00:00+00:00 should be 02:00:00 EST");

		t.equal(moment("2007-03-11T07:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 360, "2007-03-11T07:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("2007-03-11T08:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2007-03-11T08:00:00+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2007-11-04T06:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("2007-11-04T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2007-11-04T07:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2008-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2008-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2008-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2008-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2008-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2008-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2008-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2008-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2008-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2008-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2008-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2008-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2008-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2008-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2008-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2009-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2009-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2009-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2009-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2009-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2009-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2009-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2009-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2009-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2009-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2009-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2009-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2009-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2009-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2009-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2010-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2010-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2010-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2010-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2010-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2010-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2010-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2010-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2010-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2010-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2010-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2010-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2010-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2010-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2010-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2011-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2011-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2011-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2011-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2011-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2011-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2011-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2011-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2011-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2011-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2011-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2011-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2011-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2011-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2011-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2012-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2012-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2012-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2012-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2012-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2012-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2012-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2012-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2012-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2012-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2012-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2012-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2012-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2012-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2012-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2013-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2013-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2013-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2013-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2013-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2013-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2013-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2013-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2013-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2013-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2013-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2013-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2014-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2014-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2014-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2014-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2014-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2014-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2014-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2014-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2014-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2014-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2014-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2014-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2014-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2014-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2014-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2015-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2015-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2015-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2015-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2015-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2015-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2015-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2015-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2015-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2015-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2015-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2015-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2015-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2015-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2015-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2016-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2016-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2016-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2016-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2016-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2016-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2016-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2016-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2016-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2016-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2016-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2016-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2016-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2016-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2016-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2017-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2017-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2017-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2017-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2017-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2017-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2017-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2017-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2017-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2017-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2017-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2017-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2017-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2017-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2017-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2018-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2018-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2018-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2018-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2018-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2018-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2018-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2018-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2018-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2018-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2018-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2018-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2018-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2018-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2018-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2019-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2019-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2019-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2019-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2019-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2019-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2019-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2019-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2019-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2019-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2019-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2019-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2019-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2019-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2019-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2020-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2020-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2020-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2020-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2020-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2020-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2020-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2020-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2020-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2020-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2020-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2020-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2020-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2020-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2020-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2021-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2021-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2021-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2021-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2021-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2021-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2021-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2021-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2021-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2021-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2021-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2021-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2021-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2021-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2021-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2022-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2022-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2022-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2022-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2022-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2022-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2022-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2022-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2022-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2022-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2022-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2022-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2022-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2022-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2022-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2023-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2023-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2023-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2023-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2023-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2023-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2023-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2023-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2023-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2023-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2023-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2023-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2023-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2023-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2023-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2024-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2024-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2024-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2024-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2024-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2024-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2024-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2024-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2024-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2024-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2024-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2024-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2024-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2024-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2024-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2025-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2025-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2025-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2025-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2025-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2025-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2025-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2025-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2025-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2025-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2025-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2025-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2025-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2025-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2025-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2026-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2026-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2026-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2026-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2026-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2026-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2026-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2026-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2026-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2026-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2026-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2026-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2026-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2026-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2026-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2027-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2027-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2027-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2027-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2027-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2027-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2027-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2027-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2027-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2027-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2027-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2027-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2027-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2027-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2027-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2028-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2028-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2028-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2028-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2028-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2028-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2028-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2028-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2028-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2028-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2028-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2028-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2028-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2028-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2028-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2029-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2029-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2029-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2029-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2029-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2029-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2029-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2029-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2029-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2029-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2029-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2029-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2029-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2029-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2029-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2030-03-10T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2030-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2030-03-10T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2030-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2030-11-03T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2030-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2030-11-03T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2030-03-10T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2030-03-10T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2030-03-10T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2030-03-10T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2030-11-03T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2030-11-03T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2030-11-03T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2030-11-03T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2031-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2031-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2031-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2031-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2031-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2031-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2031-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2031-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2031-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2031-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2031-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2031-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2031-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2031-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2031-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2032-03-14T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2032-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2032-03-14T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2032-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2032-11-07T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2032-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2032-11-07T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2032-03-14T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2032-03-14T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2032-03-14T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2032-03-14T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2032-11-07T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2032-11-07T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2032-11-07T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2032-11-07T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2033-03-13T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2033-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2033-03-13T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2033-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2033-11-06T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2033-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2033-11-06T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2033-03-13T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2033-03-13T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2033-03-13T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2033-03-13T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2033-11-06T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2033-11-06T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2033-11-06T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2033-11-06T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2034-03-12T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2034-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2034-03-12T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2034-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2034-11-05T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2034-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2034-11-05T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2034-03-12T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2034-03-12T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2034-03-12T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2034-03-12T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2034-11-05T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2034-11-05T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2034-11-05T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2034-11-05T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2035-03-11T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2035-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2035-03-11T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2035-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2035-11-04T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2035-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2035-11-04T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2035-03-11T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2035-03-11T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2035-03-11T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2035-03-11T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2035-11-04T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2035-11-04T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2035-11-04T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2035-11-04T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2036-03-09T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2036-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2036-03-09T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2036-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2036-11-02T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2036-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2036-11-02T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2036-03-09T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2036-03-09T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2036-03-09T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2036-03-09T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2036-11-02T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2036-11-02T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2036-11-02T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2036-11-02T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2037-03-08T06:59:59+00:00 should be 01:59:59 EST");
		t.equal(moment("2037-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "03:00:00", "2037-03-08T07:00:00+00:00 should be 03:00:00 EDT");
		t.equal(moment("2037-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:59:59", "2037-11-01T05:59:59+00:00 should be 01:59:59 EDT");
		t.equal(moment("2037-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").format("HH:mm:ss"), "01:00:00", "2037-11-01T06:00:00+00:00 should be 01:00:00 EST");

		t.equal(moment("2037-03-08T06:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2037-03-08T06:59:59+00:00 should be 300 minutes offset in EST");
		t.equal(moment("2037-03-08T07:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2037-03-08T07:00:00+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2037-11-01T05:59:59+00:00").tz("America/Indiana/Petersburg").zone(), 240, "2037-11-01T05:59:59+00:00 should be 240 minutes offset in EDT");
		t.equal(moment("2037-11-01T06:00:00+00:00").tz("America/Indiana/Petersburg").zone(), 300, "2037-11-01T06:00:00+00:00 should be 300 minutes offset in EST");

		t.done();
	}
};
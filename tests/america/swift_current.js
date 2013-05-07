var moment = require("../../moment-timezone");

exports["America/Swift_Current"] = {

	"1905" : function (t) {
		t.equal(moment("1905-09-01T07:11:19+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "23:59:59", "1905-09-01T07:11:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1905-09-01T07:11:20+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "00:11:20", "1905-09-01T07:11:20+00:00 should be 00:11:20 MST");

		t.equal(moment("1905-09-01T07:11:19+00:00").tz("America/Swift_Current").zone(), 25880 / 60, "1905-09-01T07:11:19+00:00 should be 25880 / 60 minutes offset in LMT");
		t.equal(moment("1905-09-01T07:11:20+00:00").tz("America/Swift_Current").zone(), 420, "1905-09-01T07:11:20+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-04-14T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1918-04-14T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1918-04-14T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1918-04-14T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1918-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1918-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1918-04-14T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1918-04-14T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1918-04-14T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1918-04-14T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1918-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1918-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1942-02-09T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1942-02-09T09:00:00+00:00 should be 03:00:00 MWT");

		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1942-02-09T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1942-02-09T09:00:00+00:00 should be 360 minutes offset in MWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "16:59:59", "1945-08-14T22:59:59+00:00 should be 16:59:59 MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "17:00:00", "1945-08-14T23:00:00+00:00 should be 17:00:00 MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1945-09-30T07:59:59+00:00 should be 01:59:59 MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1945-09-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1945-08-14T22:59:59+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1945-08-14T23:00:00+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1945-09-30T07:59:59+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1945-09-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-28T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1946-04-28T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1946-04-28T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1946-04-28T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1946-10-13T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1946-10-13T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1946-10-13T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1946-10-13T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1946-04-28T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1946-04-28T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1946-04-28T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1946-04-28T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1946-10-13T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1946-10-13T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1946-10-13T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1946-10-13T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-27T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1947-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1947-04-27T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1947-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1947-09-28T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1947-09-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1947-09-28T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1947-09-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1947-04-27T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1947-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1947-04-27T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1947-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1947-09-28T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1947-09-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1947-09-28T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1947-09-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-25T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1948-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1948-04-25T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1948-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1948-09-26T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1948-09-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1948-09-26T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1948-09-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1948-04-25T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1948-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1948-04-25T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1948-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1948-09-26T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1948-09-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1948-09-26T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1948-09-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-24T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1949-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1949-04-24T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1949-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1949-09-25T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1949-09-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1949-09-25T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1949-09-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1949-04-24T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1949-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1949-04-24T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1949-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1949-09-25T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1949-09-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1949-09-25T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1949-09-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1957-04-28T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1957-04-28T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1957-04-28T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1957-10-27T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1957-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1957-10-27T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1957-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1957-04-28T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1957-04-28T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1957-04-28T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1957-04-28T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1957-10-27T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1957-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1957-10-27T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1957-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1959-04-26T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1959-04-26T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1959-04-26T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1959-10-25T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1959-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1959-10-25T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1959-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1959-04-26T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1959-04-26T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1959-04-26T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1959-04-26T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1959-10-25T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1959-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1959-10-25T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1959-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1960-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1960-04-24T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1960-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1960-09-25T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1960-09-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1960-09-25T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1960-09-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1960-04-24T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1960-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1960-04-24T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1960-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1960-09-25T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1960-09-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1960-09-25T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1960-09-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1961-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1961-04-30T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1961-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1961-09-24T07:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1961-09-24T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1961-09-24T08:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:00:00", "1961-09-24T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1961-04-30T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1961-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1961-04-30T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1961-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1961-09-24T07:59:59+00:00").tz("America/Swift_Current").zone(), 360, "1961-09-24T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1961-09-24T08:00:00+00:00").tz("America/Swift_Current").zone(), 420, "1961-09-24T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T08:59:59+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "01:59:59", "1972-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1972-04-30T09:00:00+00:00").tz("America/Swift_Current").format("HH:mm:ss"), "03:00:00", "1972-04-30T09:00:00+00:00 should be 03:00:00 CST");

		t.equal(moment("1972-04-30T08:59:59+00:00").tz("America/Swift_Current").zone(), 420, "1972-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1972-04-30T09:00:00+00:00").tz("America/Swift_Current").zone(), 360, "1972-04-30T09:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
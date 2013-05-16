var moment = require("../../index");

exports["America/Dawson_Creek"] = {

	"1918" : function (t) {
		t.equal(moment("1918-04-14T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1918-04-14T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1918-04-14T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1918-04-14T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1918-10-27T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1918-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1918-10-27T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1918-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1918-04-14T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1918-04-14T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1918-04-14T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1918-04-14T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1918-10-27T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1918-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1918-10-27T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1918-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1942-02-09T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1942-02-09T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1942-02-09T10:00:00+00:00 should be 03:00:00 PWT");

		t.equal(moment("1942-02-09T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1942-02-09T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1942-02-09T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1942-02-09T10:00:00+00:00 should be 420 minutes offset in PWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "15:59:59", "1945-08-14T22:59:59+00:00 should be 15:59:59 PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "16:00:00", "1945-08-14T23:00:00+00:00 should be 16:00:00 PPT");
		t.equal(moment("1945-09-30T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1945-09-30T08:59:59+00:00 should be 01:59:59 PPT");
		t.equal(moment("1945-09-30T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1945-09-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1945-08-14T22:59:59+00:00 should be 420 minutes offset in PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1945-08-14T23:00:00+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-09-30T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1945-09-30T08:59:59+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-09-30T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1945-09-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-27T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1947-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1947-04-27T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1947-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1947-09-28T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1947-09-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1947-09-28T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1947-09-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1947-04-27T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1947-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1947-04-27T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1947-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1947-09-28T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1947-09-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1947-09-28T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1947-09-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-25T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1948-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1948-04-25T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1948-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1948-09-26T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1948-09-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1948-09-26T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1948-09-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1948-04-25T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1948-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1948-04-25T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1948-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1948-09-26T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1948-09-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1948-09-26T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1948-09-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-24T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1949-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1949-04-24T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1949-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1949-09-25T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1949-09-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1949-09-25T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1949-09-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1949-04-24T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1949-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1949-04-24T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1949-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1949-09-25T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1949-09-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1949-09-25T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1949-09-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-30T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1950-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1950-04-30T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1950-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1950-09-24T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1950-09-24T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1950-09-24T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1950-09-24T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1950-04-30T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1950-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1950-04-30T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1950-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1950-09-24T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1950-09-24T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1950-09-24T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1950-09-24T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-29T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1951-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1951-04-29T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1951-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1951-09-30T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1951-09-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1951-09-30T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1951-09-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1951-04-29T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1951-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1951-04-29T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1951-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1951-09-30T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1951-09-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1951-09-30T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1951-09-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-27T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1952-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1952-04-27T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1952-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1952-09-28T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1952-09-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1952-09-28T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1952-09-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1952-04-27T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1952-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1952-04-27T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1952-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1952-09-28T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1952-09-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1952-09-28T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1952-09-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-26T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1953-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1953-04-26T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1953-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1953-09-27T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1953-09-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1953-09-27T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1953-09-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1953-04-26T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1953-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1953-04-26T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1953-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1953-09-27T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1953-09-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1953-09-27T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1953-09-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1954-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1954-04-25T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1954-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1954-09-26T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1954-09-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1954-09-26T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1954-09-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1954-04-25T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1954-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1954-04-25T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1954-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1954-09-26T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1954-09-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1954-09-26T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1954-09-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-24T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1955-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1955-04-24T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1955-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1955-09-25T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1955-09-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1955-09-25T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1955-09-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1955-04-24T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1955-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1955-04-24T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1955-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1955-09-25T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1955-09-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1955-09-25T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1955-09-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1956-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1956-04-29T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1956-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1956-09-30T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1956-09-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1956-09-30T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1956-09-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1956-04-29T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1956-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1956-04-29T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1956-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1956-09-30T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1956-09-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1956-09-30T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1956-09-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1957-04-28T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1957-04-28T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1957-04-28T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1957-09-29T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1957-09-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1957-09-29T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1957-09-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1957-04-28T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1957-04-28T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1957-04-28T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1957-04-28T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1957-09-29T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1957-09-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1957-09-29T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1957-09-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1958-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1958-04-27T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1958-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1958-09-28T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1958-09-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1958-09-28T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1958-09-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1958-04-27T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1958-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1958-04-27T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1958-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1958-09-28T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1958-09-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1958-09-28T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1958-09-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1959-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1959-04-26T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1959-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1959-09-27T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1959-09-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1959-09-27T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1959-09-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1959-04-26T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1959-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1959-04-26T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1959-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1959-09-27T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1959-09-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1959-09-27T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1959-09-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1960-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1960-04-24T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1960-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1960-09-25T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1960-09-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1960-09-25T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1960-09-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1960-04-24T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1960-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1960-04-24T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1960-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1960-09-25T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1960-09-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1960-09-25T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1960-09-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1961-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1961-04-30T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1961-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1961-09-24T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1961-09-24T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1961-09-24T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1961-09-24T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1961-04-30T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1961-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1961-04-30T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1961-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1961-09-24T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1961-09-24T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1961-09-24T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1961-09-24T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-29T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1962-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1962-04-29T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1962-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1962-10-28T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1962-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1962-10-28T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1962-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1962-04-29T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1962-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1962-04-29T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1962-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1962-10-28T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1962-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1962-10-28T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1962-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-28T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1963-04-28T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1963-04-28T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1963-04-28T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1963-10-27T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1963-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1963-10-27T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1963-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1963-04-28T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1963-04-28T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1963-04-28T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1963-04-28T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1963-10-27T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1963-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1963-10-27T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1963-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-26T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1964-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1964-04-26T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1964-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1964-10-25T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1964-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1964-10-25T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1964-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1964-04-26T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1964-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1964-04-26T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1964-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1964-10-25T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1964-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1964-10-25T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1964-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-25T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1965-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1965-04-25T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1965-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1965-10-31T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1965-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1965-10-31T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1965-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1965-04-25T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1965-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1965-04-25T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1965-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1965-10-31T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1965-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1965-10-31T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1965-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-24T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1966-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1966-04-24T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1966-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1966-10-30T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1966-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1966-10-30T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1966-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1966-04-24T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1966-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1966-04-24T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1966-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1966-10-30T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1966-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1966-10-30T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1966-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1967-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1967-04-30T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1967-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1967-10-29T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1967-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1967-10-29T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1967-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1967-04-30T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1967-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1967-04-30T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1967-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1967-10-29T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1967-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1967-10-29T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1967-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-28T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1968-04-28T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1968-04-28T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1968-04-28T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1968-10-27T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1968-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1968-10-27T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1968-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1968-04-28T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1968-04-28T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1968-04-28T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1968-04-28T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1968-10-27T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1968-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1968-10-27T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1968-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1969-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1969-04-27T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1969-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1969-10-26T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1969-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1969-10-26T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1969-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1969-04-27T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1969-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1969-04-27T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1969-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1969-10-26T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1969-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1969-10-26T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1969-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1970-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1970-04-26T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1970-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1970-10-25T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1970-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1970-10-25T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1970-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1970-04-26T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1970-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1970-04-26T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1970-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1970-10-25T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1970-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1970-10-25T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1970-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1971-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1971-04-25T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1971-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1971-10-31T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1971-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1971-10-31T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:00:00", "1971-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1971-04-25T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1971-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1971-04-25T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1971-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1971-10-31T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1971-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1971-10-31T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 480, "1971-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T09:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1972-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1972-04-30T10:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "03:00:00", "1972-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1972-08-30T08:59:59+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "01:59:59", "1972-08-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1972-08-30T09:00:00+00:00").tz("America/Dawson_Creek").format("HH:mm:ss"), "02:00:00", "1972-08-30T09:00:00+00:00 should be 02:00:00 MST");

		t.equal(moment("1972-04-30T09:59:59+00:00").tz("America/Dawson_Creek").zone(), 480, "1972-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1972-04-30T10:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1972-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1972-08-30T08:59:59+00:00").tz("America/Dawson_Creek").zone(), 420, "1972-08-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1972-08-30T09:00:00+00:00").tz("America/Dawson_Creek").zone(), 420, "1972-08-30T09:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	}
};
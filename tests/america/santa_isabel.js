var moment = require("../../index");

exports["America/Santa_Isabel"] = {

	"1922" : function (t) {
		t.equal(moment("1922-01-01T07:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "00:20:31", "1922-01-01T07:59:59+00:00 should be 00:20:31 LMT");
		t.equal(moment("1922-01-01T08:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1922-01-01T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1922-01-01T07:59:59+00:00").tz("America/Santa_Isabel").zone(), 27568 / 60, "1922-01-01T07:59:59+00:00 should be 27568 / 60 minutes offset in LMT");
		t.equal(moment("1922-01-01T08:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1922-01-01T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-01-01T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1924-01-01T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1924-01-01T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:00:00", "1924-01-01T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1924-01-01T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1924-01-01T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1924-01-01T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1924-01-01T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-06-11T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "22:59:59", "1927-06-11T06:59:59+00:00 should be 22:59:59 PST");
		t.equal(moment("1927-06-11T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "00:00:00", "1927-06-11T07:00:00+00:00 should be 00:00:00 MST");

		t.equal(moment("1927-06-11T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1927-06-11T06:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1927-06-11T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1927-06-11T07:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-11-15T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1930-11-15T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1930-11-15T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:00:00", "1930-11-15T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1930-11-15T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1930-11-15T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1930-11-15T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1930-11-15T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-04-01T07:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1931-04-01T07:59:59+00:00 should be 23:59:59 PST");
		t.equal(moment("1931-04-01T08:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1931-04-01T08:00:00+00:00 should be 01:00:00 PDT");
		t.equal(moment("1931-09-30T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1931-09-30T06:59:59+00:00 should be 23:59:59 PDT");
		t.equal(moment("1931-09-30T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:00:00", "1931-09-30T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1931-04-01T07:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1931-04-01T07:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1931-04-01T08:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1931-04-01T08:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1931-09-30T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1931-09-30T06:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1931-09-30T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1931-09-30T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-04-24T07:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1942-04-24T07:59:59+00:00 should be 23:59:59 PST");
		t.equal(moment("1942-04-24T08:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1942-04-24T08:00:00+00:00 should be 01:00:00 PWT");

		t.equal(moment("1942-04-24T07:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1942-04-24T07:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1942-04-24T08:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1942-04-24T08:00:00+00:00 should be 420 minutes offset in PWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "15:59:59", "1945-08-14T22:59:59+00:00 should be 15:59:59 PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "16:00:00", "1945-08-14T23:00:00+00:00 should be 16:00:00 PPT");
		t.equal(moment("1945-11-12T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1945-11-12T06:59:59+00:00 should be 23:59:59 PPT");
		t.equal(moment("1945-11-12T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:00:00", "1945-11-12T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1945-08-14T22:59:59+00:00 should be 420 minutes offset in PWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1945-08-14T23:00:00+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-11-12T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1945-11-12T06:59:59+00:00 should be 420 minutes offset in PPT");
		t.equal(moment("1945-11-12T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1945-11-12T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-05T07:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1948-04-05T07:59:59+00:00 should be 23:59:59 PST");
		t.equal(moment("1948-04-05T08:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1948-04-05T08:00:00+00:00 should be 01:00:00 PDT");

		t.equal(moment("1948-04-05T07:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1948-04-05T07:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1948-04-05T08:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1948-04-05T08:00:00+00:00 should be 420 minutes offset in PDT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-01-14T06:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:59:59", "1949-01-14T06:59:59+00:00 should be 23:59:59 PDT");
		t.equal(moment("1949-01-14T07:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "23:00:00", "1949-01-14T07:00:00+00:00 should be 23:00:00 PST");

		t.equal(moment("1949-01-14T06:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1949-01-14T06:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1949-01-14T07:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1949-01-14T07:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1954-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1954-04-25T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1954-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1954-09-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1954-09-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1954-09-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1954-09-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1954-04-25T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1954-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1954-04-25T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1954-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1954-09-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1954-09-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1954-09-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1954-09-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-24T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1955-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1955-04-24T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1955-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1955-09-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1955-09-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1955-09-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1955-09-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1955-04-24T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1955-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1955-04-24T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1955-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1955-09-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1955-09-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1955-09-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1955-09-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1956-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1956-04-29T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1956-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1956-09-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1956-09-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1956-09-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1956-09-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1956-04-29T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1956-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1956-04-29T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1956-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1956-09-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1956-09-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1956-09-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1956-09-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1957-04-28T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1957-04-28T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1957-04-28T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1957-09-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1957-09-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1957-09-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1957-09-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1957-04-28T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1957-04-28T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1957-04-28T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1957-04-28T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1957-09-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1957-09-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1957-09-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1957-09-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1958-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1958-04-27T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1958-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1958-09-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1958-09-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1958-09-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1958-09-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1958-04-27T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1958-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1958-04-27T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1958-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1958-09-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1958-09-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1958-09-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1958-09-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1959-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1959-04-26T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1959-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1959-09-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1959-09-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1959-09-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1959-09-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1959-04-26T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1959-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1959-04-26T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1959-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1959-09-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1959-09-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1959-09-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1959-09-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1960-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1960-04-24T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1960-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1960-09-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1960-09-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1960-09-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1960-09-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1960-04-24T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1960-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1960-04-24T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1960-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1960-09-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1960-09-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1960-09-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1960-09-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1976-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1976-04-25T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1976-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1976-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1976-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1976-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1976-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1976-04-25T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1976-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1976-04-25T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1976-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1976-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1976-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1976-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1976-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1977-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1977-04-24T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1977-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1977-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1977-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1977-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1977-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1977-04-24T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1977-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1977-04-24T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1977-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1977-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1977-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1977-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1977-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1978-04-30T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1978-04-30T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1978-04-30T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1978-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1978-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1978-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1978-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1978-04-30T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1978-04-30T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1978-04-30T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1978-04-30T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1978-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1978-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1978-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1978-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1979-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1979-04-29T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1979-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1979-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1979-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1979-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1979-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1979-04-29T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1979-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1979-04-29T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1979-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1979-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1979-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1979-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1979-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1980-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1980-04-27T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1980-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1980-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1980-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1980-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1980-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1980-04-27T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1980-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1980-04-27T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1980-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1980-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1980-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1980-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1980-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1981-04-26T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1981-04-26T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1981-04-26T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1981-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1981-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1981-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1981-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1981-04-26T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1981-04-26T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1981-04-26T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1981-04-26T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1981-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1981-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1981-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1981-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1982-04-25T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1982-04-25T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1982-04-25T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1982-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1982-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1982-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1982-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1982-04-25T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1982-04-25T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1982-04-25T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1982-04-25T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1982-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1982-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1982-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1982-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1983-04-24T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1983-04-24T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1983-04-24T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1983-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1983-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1983-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1983-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1983-04-24T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1983-04-24T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1983-04-24T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1983-04-24T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1983-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1983-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1983-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1983-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1984-04-29T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1984-04-29T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1984-04-29T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1984-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1984-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1984-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1984-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1984-04-29T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1984-04-29T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1984-04-29T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1984-04-29T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1984-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1984-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1984-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1984-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1985-04-28T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1985-04-28T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1985-04-28T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1985-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1985-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1985-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1985-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1985-04-28T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1985-04-28T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1985-04-28T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1985-04-28T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1985-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1985-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1985-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1985-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1986-04-27T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1986-04-27T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1986-04-27T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1986-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1986-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1986-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1986-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1986-04-27T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1986-04-27T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1986-04-27T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1986-04-27T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1986-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1986-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1986-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1986-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1987-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1987-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1987-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1987-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1987-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1987-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1987-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1987-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1987-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1987-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1987-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1987-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1987-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1987-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1987-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1988-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1988-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1988-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1988-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1988-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1988-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1988-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1988-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1988-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1988-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1988-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1988-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1988-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1988-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1988-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1989-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1989-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1989-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1989-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1989-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1989-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1989-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1989-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1989-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1989-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1989-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1989-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1989-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1989-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1989-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1990-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1990-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1990-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1990-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1990-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1990-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1990-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1990-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1990-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1990-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1990-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1990-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1990-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1990-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1990-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1991-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1991-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1991-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1991-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1991-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1991-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1991-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1991-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1991-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1991-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1991-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1991-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1991-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1991-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1991-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1992-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1992-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1992-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1992-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1992-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1992-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1992-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1992-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1992-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1992-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1992-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1992-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1992-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1992-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1992-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1993-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1993-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1993-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1993-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1993-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1993-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1993-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1993-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1993-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1993-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1993-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1993-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1993-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1993-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1993-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1994-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1994-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1994-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1994-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1994-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1994-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1994-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1994-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1994-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1994-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1994-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1994-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1994-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1994-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1994-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1995-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1995-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1995-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1995-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1995-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1995-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1995-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1995-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1995-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1995-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1995-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1995-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1995-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1995-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1995-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1996-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1996-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1996-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1996-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1996-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1996-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1996-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1996-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1996-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1996-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1996-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1996-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1996-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1996-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1996-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1997-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1997-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1997-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1997-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1997-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1997-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1997-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1997-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1997-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1997-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1997-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1997-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1997-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1997-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1997-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1998-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1998-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1998-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1998-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1998-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1998-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1998-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1998-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1998-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1998-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1998-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1998-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1998-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1998-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1998-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1999-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("1999-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "1999-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("1999-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "1999-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("1999-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "1999-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("1999-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "1999-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("1999-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "1999-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1999-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "1999-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("1999-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "1999-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2000-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2000-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2000-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2000-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2000-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2000-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2000-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2000-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2000-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2000-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2000-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2000-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2000-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2000-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2000-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2001-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2001-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2001-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2001-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2001-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2001-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2001-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2001-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2001-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2001-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2001-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2001-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2001-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2001-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2001-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2002-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2002-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2002-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2002-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2002-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2002-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2002-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2002-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2002-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2002-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2002-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2002-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2002-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2002-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2002-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2003-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2003-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2003-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2003-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2003-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2003-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2003-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2003-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2003-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2003-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2003-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2003-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2003-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2003-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2003-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2004-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2004-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2004-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2004-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2004-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2004-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2004-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2004-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2004-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2004-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2004-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2004-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2004-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2004-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2004-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2005-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2005-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2005-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2005-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2005-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2005-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2005-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2005-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2005-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2005-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2005-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2005-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2005-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2005-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2005-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2006-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2006-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2006-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2006-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2006-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2006-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2006-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2006-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2006-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2006-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2006-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2006-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2006-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2006-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2006-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2007-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2007-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2007-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2007-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2007-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2007-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2007-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2007-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2007-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2007-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2007-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2007-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2007-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2007-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2007-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2008-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2008-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2008-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2008-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2008-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2008-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2008-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2008-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2008-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2008-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2008-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2008-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2008-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2008-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2008-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2009-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2009-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2009-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2009-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2009-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2009-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2009-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2009-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2009-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2009-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2009-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2009-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2009-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2009-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2009-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2010-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2010-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2010-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2010-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2010-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2010-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2010-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2010-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2010-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2010-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2010-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2010-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2010-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2010-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2010-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2011-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2011-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2011-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2011-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2011-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2011-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2011-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2011-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2011-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2011-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2011-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2011-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2011-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2011-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2011-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2012-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2012-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2012-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2012-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2012-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2012-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2012-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2012-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2012-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2012-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2012-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2012-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2012-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2012-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2012-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2013-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2013-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2013-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2013-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2013-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2013-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2013-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2013-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2013-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2013-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2013-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2013-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2013-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2013-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2014-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2014-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2014-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2014-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2014-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2014-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2014-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2014-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2014-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2014-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2014-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2014-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2014-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2014-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2014-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2015-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2015-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2015-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2015-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2015-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2015-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2015-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2015-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2015-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2015-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2015-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2015-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2015-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2015-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2015-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2016-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2016-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2016-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2016-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2016-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2016-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2016-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2016-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2016-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2016-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2016-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2016-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2016-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2016-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2016-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2017-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2017-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2017-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2017-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2017-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2017-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2017-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2017-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2017-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2017-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2017-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2017-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2017-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2017-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2017-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2018-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2018-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2018-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2018-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2018-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2018-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2018-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2018-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2018-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2018-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2018-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2018-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2018-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2018-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2018-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2019-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2019-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2019-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2019-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2019-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2019-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2019-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2019-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2019-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2019-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2019-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2019-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2019-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2019-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2019-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2020-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2020-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2020-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2020-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2020-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2020-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2020-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2020-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2020-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2020-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2020-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2020-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2020-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2020-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2020-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2021-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2021-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2021-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2021-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2021-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2021-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2021-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2021-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2021-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2021-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2021-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2021-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2021-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2021-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2021-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2022-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2022-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2022-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2022-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2022-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2022-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2022-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2022-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2022-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2022-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2022-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2022-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2022-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2022-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2022-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2023-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2023-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2023-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2023-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2023-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2023-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2023-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2023-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2023-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2023-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2023-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2023-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2023-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2023-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2023-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2024-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2024-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2024-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2024-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2024-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2024-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2024-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2024-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2024-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2024-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2024-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2024-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2024-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2024-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2024-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2025-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2025-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2025-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2025-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2025-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2025-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2025-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2025-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2025-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2025-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2025-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2025-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2025-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2025-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2025-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2026-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2026-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2026-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2026-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2026-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2026-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2026-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2026-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2026-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2026-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2026-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2026-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2026-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2026-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2026-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2027-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2027-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2027-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2027-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2027-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2027-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2027-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2027-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2027-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2027-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2027-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2027-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2027-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2027-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2027-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2028-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2028-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2028-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2028-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2028-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2028-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2028-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2028-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2028-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2028-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2028-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2028-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2028-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2028-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2028-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2029-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2029-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2029-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2029-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2029-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2029-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2029-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2029-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2029-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2029-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2029-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2029-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2029-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2029-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2029-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-07T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2030-04-07T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2030-04-07T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2030-04-07T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2030-10-27T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2030-10-27T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2030-10-27T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2030-10-27T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2030-04-07T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2030-04-07T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2030-04-07T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2030-04-07T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2030-10-27T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2030-10-27T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2030-10-27T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2030-10-27T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2031-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2031-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2031-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2031-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2031-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2031-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2031-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2031-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2031-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2031-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2031-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2031-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2031-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2031-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2031-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-04T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2032-04-04T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2032-04-04T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2032-04-04T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2032-10-31T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2032-10-31T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2032-10-31T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2032-10-31T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2032-04-04T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2032-04-04T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2032-04-04T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2032-04-04T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2032-10-31T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2032-10-31T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2032-10-31T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2032-10-31T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-03T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2033-04-03T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2033-04-03T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2033-04-03T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2033-10-30T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2033-10-30T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2033-10-30T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2033-10-30T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2033-04-03T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2033-04-03T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2033-04-03T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2033-04-03T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2033-10-30T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2033-10-30T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2033-10-30T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2033-10-30T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-02T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2034-04-02T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2034-04-02T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2034-04-02T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2034-10-29T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2034-10-29T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2034-10-29T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2034-10-29T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2034-04-02T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2034-04-02T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2034-04-02T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2034-04-02T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2034-10-29T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2034-10-29T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2034-10-29T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2034-10-29T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-01T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2035-04-01T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2035-04-01T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2035-04-01T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2035-10-28T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2035-10-28T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2035-10-28T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2035-10-28T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2035-04-01T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2035-04-01T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2035-04-01T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2035-04-01T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2035-10-28T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2035-10-28T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2035-10-28T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2035-10-28T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-06T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2036-04-06T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2036-04-06T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2036-04-06T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2036-10-26T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2036-10-26T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2036-10-26T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2036-10-26T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2036-04-06T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2036-04-06T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2036-04-06T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2036-04-06T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2036-10-26T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2036-10-26T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2036-10-26T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2036-10-26T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-05T09:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2037-04-05T09:59:59+00:00 should be 01:59:59 PST");
		t.equal(moment("2037-04-05T10:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "03:00:00", "2037-04-05T10:00:00+00:00 should be 03:00:00 PDT");
		t.equal(moment("2037-10-25T08:59:59+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:59:59", "2037-10-25T08:59:59+00:00 should be 01:59:59 PDT");
		t.equal(moment("2037-10-25T09:00:00+00:00").tz("America/Santa_Isabel").format("HH:mm:ss"), "01:00:00", "2037-10-25T09:00:00+00:00 should be 01:00:00 PST");

		t.equal(moment("2037-04-05T09:59:59+00:00").tz("America/Santa_Isabel").zone(), 480, "2037-04-05T09:59:59+00:00 should be 480 minutes offset in PST");
		t.equal(moment("2037-04-05T10:00:00+00:00").tz("America/Santa_Isabel").zone(), 420, "2037-04-05T10:00:00+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2037-10-25T08:59:59+00:00").tz("America/Santa_Isabel").zone(), 420, "2037-10-25T08:59:59+00:00 should be 420 minutes offset in PDT");
		t.equal(moment("2037-10-25T09:00:00+00:00").tz("America/Santa_Isabel").zone(), 480, "2037-10-25T09:00:00+00:00 should be 480 minutes offset in PST");

		t.done();
	}
};
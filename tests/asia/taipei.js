var moment = require("../../index");

exports["Asia/Taipei"] = {

	"1945" : function (t) {
		t.equal(moment("1945-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1945-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1945-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1945-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1945-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1945-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1945-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1945-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1945-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1945-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1945-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1945-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1945-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1945-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1945-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1945-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1946-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1946-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1946-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1946-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1946-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1946-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1946-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1946-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1946-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1946-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1946-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1946-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1946-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1946-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1946-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1947-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1947-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1947-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1947-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1947-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1947-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1947-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1947-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1947-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1947-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1947-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1947-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1947-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1947-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1947-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1948-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1948-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1948-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1948-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1948-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1948-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1948-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1948-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1948-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1948-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1948-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1948-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1948-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1948-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1948-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1949-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1949-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1949-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1949-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1949-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1949-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1949-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1949-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1949-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1949-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1949-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1949-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1949-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1949-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1949-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1950-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1950-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1950-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1950-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1950-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1950-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1950-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1950-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1950-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1950-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1950-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1950-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1950-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1950-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-30T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1951-04-30T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1951-04-30T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1951-04-30T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1951-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1951-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1951-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1951-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1951-04-30T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1951-04-30T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1951-04-30T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1951-04-30T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1951-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1951-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1951-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1951-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-02-29T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1952-02-29T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1952-02-29T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1952-02-29T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1952-10-31T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1952-10-31T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1952-10-31T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1952-10-31T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1952-02-29T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1952-02-29T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1952-02-29T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1952-02-29T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1952-10-31T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1952-10-31T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1952-10-31T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1952-10-31T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1953-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1953-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1953-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1953-10-31T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1953-10-31T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1953-10-31T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1953-10-31T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1953-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1953-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1953-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1953-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1953-10-31T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1953-10-31T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1953-10-31T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1953-10-31T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1954-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1954-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1954-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1954-10-31T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1954-10-31T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1954-10-31T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1954-10-31T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1954-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1954-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1954-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1954-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1954-10-31T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1954-10-31T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1954-10-31T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1954-10-31T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1955-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1955-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1955-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1955-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1955-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1955-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1955-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1955-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1955-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1955-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1955-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1955-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1955-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1955-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1955-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1956-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1956-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1956-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1956-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1956-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1956-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1956-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1956-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1956-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1956-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1956-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1956-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1956-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1956-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1956-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1957-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1957-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1957-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1957-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1957-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1957-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1957-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1957-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1957-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1957-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1957-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1957-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1957-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1957-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1957-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1958-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1958-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1958-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1958-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1958-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1958-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1958-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1958-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1958-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1958-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1958-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1958-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1958-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1958-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1958-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1959-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1959-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1959-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1959-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1959-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1959-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1959-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1959-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1959-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1959-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1959-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1959-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1959-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1959-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1959-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-05-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1960-05-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1960-05-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1960-05-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1960-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1960-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1960-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1960-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1960-05-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1960-05-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1960-05-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1960-05-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1960-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1960-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1960-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1960-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-05-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1961-05-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1961-05-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1961-05-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1961-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1961-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1961-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1961-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1961-05-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1961-05-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1961-05-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1961-05-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1961-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1961-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1961-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1961-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1974-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1974-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1974-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1974-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1974-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1974-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1974-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1974-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1974-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1974-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1974-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1974-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1974-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1974-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1974-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-31T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1975-03-31T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1975-03-31T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1975-03-31T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1975-09-30T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1975-09-30T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1975-09-30T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1975-09-30T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1975-03-31T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1975-03-31T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1975-03-31T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1975-03-31T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1975-09-30T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1975-09-30T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1975-09-30T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1975-09-30T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-06-29T15:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1979-06-29T15:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1979-06-29T16:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "01:00:00", "1979-06-29T16:00:00+00:00 should be 01:00:00 CDT");
		t.equal(moment("1979-09-29T14:59:59+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:59:59", "1979-09-29T14:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1979-09-29T15:00:00+00:00").tz("Asia/Taipei").format("HH:mm:ss"), "23:00:00", "1979-09-29T15:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1979-06-29T15:59:59+00:00").tz("Asia/Taipei").zone(), -480, "1979-06-29T15:59:59+00:00 should be -480 minutes offset in CST");
		t.equal(moment("1979-06-29T16:00:00+00:00").tz("Asia/Taipei").zone(), -540, "1979-06-29T16:00:00+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1979-09-29T14:59:59+00:00").tz("Asia/Taipei").zone(), -540, "1979-09-29T14:59:59+00:00 should be -540 minutes offset in CDT");
		t.equal(moment("1979-09-29T15:00:00+00:00").tz("Asia/Taipei").zone(), -480, "1979-09-29T15:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	}
};
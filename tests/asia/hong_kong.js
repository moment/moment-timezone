var moment = require("../../index");

exports["Asia/Hong_Kong"] = {

	"1904" : function (t) {
		t.equal(moment("1904-10-29T16:23:17+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "23:59:59", "1904-10-29T16:23:17+00:00 should be 23:59:59 LMT");
		t.equal(moment("1904-10-29T16:23:18+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "00:23:18", "1904-10-29T16:23:18+00:00 should be 00:23:18 HKT");

		t.equal(moment("1904-10-29T16:23:17+00:00").tz("Asia/Hong_Kong").zone(), -27402 / 60, "1904-10-29T16:23:17+00:00 should be -27402 / 60 minutes offset in LMT");
		t.equal(moment("1904-10-29T16:23:18+00:00").tz("Asia/Hong_Kong").zone(), -480, "1904-10-29T16:23:18+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-03-31T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1941-03-31T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1941-03-31T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1941-03-31T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1941-09-29T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1941-09-29T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1941-09-29T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1941-09-29T18:30:00+00:00 should be 02:30:00 HKT");
		t.equal(moment("1941-12-24T15:59:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "23:59:59", "1941-12-24T15:59:59+00:00 should be 23:59:59 HKT");
		t.equal(moment("1941-12-24T16:00:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "01:00:00", "1941-12-24T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1941-03-31T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1941-03-31T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1941-03-31T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1941-03-31T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1941-09-29T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1941-09-29T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1941-09-29T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1941-09-29T18:30:00+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1941-12-24T15:59:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1941-12-24T15:59:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1941-12-24T16:00:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1941-12-24T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-14T14:59:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "23:59:59", "1945-09-14T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-14T15:00:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "23:00:00", "1945-09-14T15:00:00+00:00 should be 23:00:00 HKT");

		t.equal(moment("1945-09-14T14:59:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1945-09-14T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-14T15:00:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1945-09-14T15:00:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1946-04-19T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1946-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1946-04-19T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1946-11-30T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1946-11-30T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1946-11-30T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1946-11-30T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1946-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1946-04-19T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1946-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1946-04-19T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1946-11-30T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1946-11-30T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1946-11-30T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1946-11-30T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-12T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1947-04-12T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1947-04-12T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1947-04-12T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1947-12-29T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1947-12-29T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1947-12-29T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1947-12-29T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1947-04-12T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1947-04-12T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1947-04-12T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1947-04-12T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1947-12-29T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1947-12-29T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1947-12-29T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1947-12-29T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-05-01T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1948-05-01T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1948-05-01T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1948-05-01T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1948-10-30T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1948-10-30T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1948-10-30T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1948-10-30T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1948-05-01T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1948-05-01T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1948-05-01T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1948-05-01T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1948-10-30T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1948-10-30T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1948-10-30T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1948-10-30T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-02T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1949-04-02T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1949-04-02T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1949-04-02T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1949-10-29T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1949-10-29T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1949-10-29T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1949-10-29T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1949-04-02T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1949-04-02T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1949-04-02T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1949-04-02T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1949-10-29T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1949-10-29T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1949-10-29T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1949-10-29T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-01T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1950-04-01T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1950-04-01T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1950-04-01T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1950-10-28T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1950-10-28T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1950-10-28T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1950-10-28T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1950-04-01T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1950-04-01T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1950-04-01T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1950-04-01T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1950-10-28T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1950-10-28T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1950-10-28T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1950-10-28T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-03-31T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1951-03-31T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1951-03-31T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1951-03-31T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1951-10-27T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1951-10-27T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1951-10-27T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1951-10-27T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1951-03-31T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1951-03-31T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1951-03-31T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1951-03-31T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1951-10-27T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1951-10-27T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1951-10-27T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1951-10-27T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-05T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1952-04-05T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1952-04-05T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1952-04-05T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1952-10-24T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1952-10-24T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1952-10-24T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1952-10-24T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1952-04-05T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1952-04-05T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1952-04-05T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1952-04-05T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1952-10-24T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1952-10-24T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1952-10-24T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1952-10-24T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-04T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1953-04-04T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1953-04-04T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1953-04-04T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1953-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1953-10-31T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1953-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1953-10-31T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1953-04-04T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1953-04-04T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1953-04-04T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1953-04-04T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1953-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1953-10-31T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1953-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1953-10-31T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-03-20T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1954-03-20T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1954-03-20T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1954-03-20T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1954-10-30T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1954-10-30T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1954-10-30T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1954-10-30T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1954-03-20T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1954-03-20T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1954-03-20T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1954-03-20T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1954-10-30T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1954-10-30T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1954-10-30T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1954-10-30T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-03-19T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1955-03-19T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1955-03-19T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1955-03-19T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1955-11-05T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1955-11-05T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1955-11-05T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1955-11-05T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1955-03-19T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1955-03-19T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1955-03-19T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1955-03-19T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1955-11-05T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1955-11-05T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1955-11-05T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1955-11-05T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-03-17T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1956-03-17T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1956-03-17T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1956-03-17T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1956-11-03T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1956-11-03T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1956-11-03T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1956-11-03T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1956-03-17T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1956-03-17T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1956-03-17T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1956-03-17T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1956-11-03T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1956-11-03T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1956-11-03T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1956-11-03T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-03-23T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1957-03-23T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1957-03-23T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1957-03-23T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1957-11-02T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1957-11-02T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1957-11-02T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1957-11-02T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1957-03-23T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1957-03-23T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1957-03-23T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1957-03-23T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1957-11-02T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1957-11-02T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1957-11-02T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1957-11-02T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-03-22T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1958-03-22T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1958-03-22T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1958-03-22T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1958-11-01T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1958-11-01T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1958-11-01T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1958-11-01T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1958-03-22T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1958-03-22T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1958-03-22T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1958-03-22T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1958-11-01T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1958-11-01T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1958-11-01T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1958-11-01T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-03-21T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1959-03-21T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1959-03-21T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1959-03-21T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1959-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1959-10-31T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1959-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1959-10-31T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1959-03-21T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1959-03-21T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1959-03-21T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1959-03-21T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1959-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1959-10-31T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1959-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1959-10-31T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-03-19T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1960-03-19T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1960-03-19T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1960-03-19T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1960-11-05T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1960-11-05T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1960-11-05T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1960-11-05T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1960-03-19T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1960-03-19T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1960-03-19T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1960-03-19T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1960-11-05T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1960-11-05T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1960-11-05T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1960-11-05T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-03-18T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1961-03-18T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1961-03-18T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1961-03-18T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1961-11-04T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1961-11-04T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1961-11-04T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1961-11-04T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1961-03-18T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1961-03-18T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1961-03-18T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1961-03-18T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1961-11-04T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1961-11-04T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1961-11-04T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1961-11-04T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-03-17T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1962-03-17T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1962-03-17T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1962-03-17T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1962-11-03T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1962-11-03T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1962-11-03T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1962-11-03T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1962-03-17T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1962-03-17T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1962-03-17T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1962-03-17T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1962-11-03T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1962-11-03T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1962-11-03T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1962-11-03T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-03-23T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1963-03-23T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1963-03-23T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1963-03-23T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1963-11-02T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1963-11-02T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1963-11-02T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1963-11-02T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1963-03-23T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1963-03-23T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1963-03-23T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1963-03-23T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1963-11-02T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1963-11-02T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1963-11-02T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1963-11-02T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-21T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1964-03-21T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1964-03-21T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1964-03-21T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1964-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1964-10-31T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1964-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1964-10-31T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1964-03-21T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1964-03-21T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1964-03-21T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1964-03-21T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1964-10-31T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1964-10-31T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1964-10-31T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1964-10-31T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1965-04-17T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1965-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1965-04-17T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1965-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1965-10-16T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1965-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1965-10-16T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1965-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1965-04-17T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1965-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1965-04-17T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1965-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1965-10-16T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1965-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1965-10-16T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-16T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1966-04-16T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1966-04-16T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1966-04-16T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1966-10-15T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1966-10-15T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1966-10-15T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1966-10-15T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1966-04-16T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1966-04-16T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1966-04-16T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1966-04-16T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1966-10-15T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1966-10-15T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1966-10-15T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1966-10-15T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-15T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1967-04-15T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1967-04-15T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1967-04-15T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1967-10-21T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1967-10-21T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1967-10-21T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1967-10-21T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1967-04-15T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1967-04-15T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1967-04-15T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1967-04-15T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1967-10-21T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1967-10-21T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1967-10-21T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1967-10-21T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-20T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1968-04-20T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1968-04-20T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1968-04-20T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1968-10-19T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1968-10-19T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1968-10-19T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1968-10-19T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1968-04-20T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1968-04-20T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1968-04-20T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1968-04-20T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1968-10-19T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1968-10-19T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1968-10-19T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1968-10-19T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1969-04-19T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1969-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1969-04-19T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1969-10-18T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1969-10-18T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1969-10-18T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1969-10-18T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1969-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1969-04-19T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1969-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1969-04-19T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1969-10-18T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1969-10-18T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1969-10-18T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1969-10-18T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-18T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1970-04-18T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1970-04-18T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1970-04-18T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1970-10-17T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1970-10-17T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1970-10-17T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1970-10-17T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1970-04-18T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1970-04-18T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1970-04-18T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1970-04-18T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1970-10-17T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1970-10-17T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1970-10-17T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1970-10-17T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1971-04-17T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1971-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1971-04-17T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1971-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1971-10-16T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1971-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1971-10-16T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1971-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1971-04-17T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1971-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1971-04-17T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1971-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1971-10-16T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1971-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1971-10-16T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-15T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1972-04-15T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1972-04-15T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1972-04-15T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1972-10-21T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1972-10-21T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1972-10-21T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1972-10-21T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1972-04-15T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1972-04-15T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1972-04-15T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1972-04-15T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1972-10-21T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1972-10-21T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1972-10-21T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1972-10-21T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-21T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1973-04-21T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1973-04-21T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1973-04-21T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1973-10-20T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1973-10-20T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1973-10-20T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1973-10-20T18:30:00+00:00 should be 02:30:00 HKT");
		t.equal(moment("1973-12-29T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1973-12-29T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1973-12-29T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1973-12-29T19:30:00+00:00 should be 04:30:00 HKST");

		t.equal(moment("1973-04-21T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1973-04-21T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1973-04-21T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1973-04-21T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1973-10-20T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1973-10-20T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1973-10-20T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1973-10-20T18:30:00+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1973-12-29T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1973-12-29T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1973-12-29T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1973-12-29T19:30:00+00:00 should be -540 minutes offset in HKST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-10-19T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1974-10-19T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1974-10-19T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1974-10-19T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1974-10-19T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1974-10-19T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1974-10-19T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1974-10-19T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1975-04-19T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1975-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1975-04-19T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1975-10-18T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1975-10-18T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1975-10-18T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1975-10-18T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1975-04-19T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1975-04-19T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1975-04-19T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1975-04-19T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1975-10-18T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1975-10-18T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1975-10-18T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1975-10-18T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1976-04-17T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1976-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1976-04-17T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1976-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1976-10-16T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1976-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1976-10-16T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1976-04-17T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1976-04-17T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1976-04-17T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1976-04-17T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1976-10-16T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1976-10-16T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1976-10-16T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1976-10-16T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-05-12T19:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1979-05-12T19:29:59+00:00 should be 03:29:59 HKT");
		t.equal(moment("1979-05-12T19:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "04:30:00", "1979-05-12T19:30:00+00:00 should be 04:30:00 HKST");
		t.equal(moment("1979-10-20T18:29:59+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "03:29:59", "1979-10-20T18:29:59+00:00 should be 03:29:59 HKST");
		t.equal(moment("1979-10-20T18:30:00+00:00").tz("Asia/Hong_Kong").format("HH:mm:ss"), "02:30:00", "1979-10-20T18:30:00+00:00 should be 02:30:00 HKT");

		t.equal(moment("1979-05-12T19:29:59+00:00").tz("Asia/Hong_Kong").zone(), -480, "1979-05-12T19:29:59+00:00 should be -480 minutes offset in HKT");
		t.equal(moment("1979-05-12T19:30:00+00:00").tz("Asia/Hong_Kong").zone(), -540, "1979-05-12T19:30:00+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1979-10-20T18:29:59+00:00").tz("Asia/Hong_Kong").zone(), -540, "1979-10-20T18:29:59+00:00 should be -540 minutes offset in HKST");
		t.equal(moment("1979-10-20T18:30:00+00:00").tz("Asia/Hong_Kong").zone(), -480, "1979-10-20T18:30:00+00:00 should be -480 minutes offset in HKT");

		t.done();
	}
};
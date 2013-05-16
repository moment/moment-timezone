var moment = require("../../index");

exports["America/Santiago"] = {

	"1910" : function (t) {
		t.equal(moment("1910-01-01T04:42:45+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1910-01-01T04:42:45+00:00 should be 23:59:59 SMT");
		t.equal(moment("1910-01-01T04:42:46+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:42:46", "1910-01-01T04:42:46+00:00 should be 23:42:46 CLT");

		t.equal(moment("1910-01-01T04:42:45+00:00").tz("America/Santiago").zone(), 16966 / 60, "1910-01-01T04:42:45+00:00 should be 16966 / 60 minutes offset in SMT");
		t.equal(moment("1910-01-01T04:42:46+00:00").tz("America/Santiago").zone(), 300, "1910-01-01T04:42:46+00:00 should be 300 minutes offset in CLT");

		t.done();
	},

	"1916" : function (t) {
		t.equal(moment("1916-07-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1916-07-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1916-07-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "00:17:14", "1916-07-01T05:00:00+00:00 should be 00:17:14 SMT");

		t.equal(moment("1916-07-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1916-07-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1916-07-01T05:00:00+00:00").tz("America/Santiago").zone(), 16966 / 60, "1916-07-01T05:00:00+00:00 should be 16966 / 60 minutes offset in SMT");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-09-01T04:42:45+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1918-09-01T04:42:45+00:00 should be 23:59:59 SMT");
		t.equal(moment("1918-09-01T04:42:46+00:00").tz("America/Santiago").format("HH:mm:ss"), "00:42:46", "1918-09-01T04:42:46+00:00 should be 00:42:46 CLT");

		t.equal(moment("1918-09-01T04:42:45+00:00").tz("America/Santiago").zone(), 16966 / 60, "1918-09-01T04:42:45+00:00 should be 16966 / 60 minutes offset in SMT");
		t.equal(moment("1918-09-01T04:42:46+00:00").tz("America/Santiago").zone(), 240, "1918-09-01T04:42:46+00:00 should be 240 minutes offset in CLT");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-07-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1919-07-01T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1919-07-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:17:14", "1919-07-01T04:00:00+00:00 should be 23:17:14 SMT");

		t.equal(moment("1919-07-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1919-07-01T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1919-07-01T04:00:00+00:00").tz("America/Santiago").zone(), 16966 / 60, "1919-07-01T04:00:00+00:00 should be 16966 / 60 minutes offset in SMT");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-09-01T04:42:45+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1927-09-01T04:42:45+00:00 should be 23:59:59 SMT");
		t.equal(moment("1927-09-01T04:42:46+00:00").tz("America/Santiago").format("HH:mm:ss"), "00:42:46", "1927-09-01T04:42:46+00:00 should be 00:42:46 CLST");

		t.equal(moment("1927-09-01T04:42:45+00:00").tz("America/Santiago").zone(), 16966 / 60, "1927-09-01T04:42:45+00:00 should be 16966 / 60 minutes offset in SMT");
		t.equal(moment("1927-09-01T04:42:46+00:00").tz("America/Santiago").zone(), 240, "1927-09-01T04:42:46+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-04-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1928-04-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1928-04-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1928-04-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1928-09-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1928-09-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1928-09-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1928-09-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1928-04-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1928-04-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1928-04-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1928-04-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1928-09-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1928-09-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1928-09-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1928-09-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-04-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1929-04-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1929-04-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1929-04-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1929-09-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1929-09-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1929-09-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1929-09-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1929-04-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1929-04-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1929-04-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1929-04-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1929-09-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1929-09-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1929-09-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1929-09-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-04-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1930-04-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1930-04-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1930-04-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1930-09-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1930-09-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1930-09-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1930-09-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1930-04-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1930-04-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1930-04-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1930-04-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1930-09-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1930-09-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1930-09-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1930-09-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-04-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1931-04-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1931-04-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1931-04-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1931-09-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1931-09-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1931-09-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1931-09-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1931-04-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1931-04-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1931-04-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1931-04-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1931-09-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1931-09-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1931-09-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1931-09-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1932-04-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1932-04-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1932-04-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1932-09-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1932-09-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1932-09-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1932-09-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1932-04-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1932-04-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1932-04-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1932-04-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1932-09-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1932-09-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1932-09-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1932-09-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-06-01T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1942-06-01T03:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1942-06-01T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1942-06-01T04:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1942-08-01T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1942-08-01T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1942-08-01T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1942-08-01T05:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1942-06-01T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1942-06-01T03:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1942-06-01T04:00:00+00:00").tz("America/Santiago").zone(), 300, "1942-06-01T04:00:00+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1942-08-01T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1942-08-01T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1942-08-01T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1942-08-01T05:00:00+00:00 should be 240 minutes offset in CLST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-09-01T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "22:59:59", "1946-09-01T02:59:59+00:00 should be 22:59:59 CLST");
		t.equal(moment("1946-09-01T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "22:00:00", "1946-09-01T03:00:00+00:00 should be 22:00:00 CLT");

		t.equal(moment("1946-09-01T02:59:59+00:00").tz("America/Santiago").zone(), 240, "1946-09-01T02:59:59+00:00 should be 240 minutes offset in CLST");
		t.equal(moment("1946-09-01T03:00:00+00:00").tz("America/Santiago").zone(), 300, "1946-09-01T03:00:00+00:00 should be 300 minutes offset in CLT");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-05-22T04:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1947-05-22T04:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1947-05-22T05:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1947-05-22T05:00:00+00:00 should be 01:00:00 CLT");

		t.equal(moment("1947-05-22T04:59:59+00:00").tz("America/Santiago").zone(), 300, "1947-05-22T04:59:59+00:00 should be 300 minutes offset in CLT");
		t.equal(moment("1947-05-22T05:00:00+00:00").tz("America/Santiago").zone(), 240, "1947-05-22T05:00:00+00:00 should be 240 minutes offset in CLT");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-11-03T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1968-11-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1968-11-03T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1968-11-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1968-11-03T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1968-11-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1968-11-03T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1968-11-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-03-30T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1969-03-30T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1969-03-30T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1969-03-30T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1969-11-23T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1969-11-23T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1969-11-23T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1969-11-23T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1969-03-30T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1969-03-30T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1969-03-30T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1969-03-30T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1969-11-23T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1969-11-23T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1969-11-23T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1969-11-23T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-03-29T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1970-03-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1970-03-29T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1970-03-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1970-10-11T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1970-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1970-10-11T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1970-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1970-03-29T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1970-03-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1970-03-29T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1970-03-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1970-10-11T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1970-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1970-10-11T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1970-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-03-14T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1971-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1971-03-14T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1971-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1971-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1971-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1971-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1971-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1971-03-14T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1971-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1971-03-14T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1971-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1971-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1971-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1971-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1971-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1972-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1972-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1972-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1972-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1972-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1972-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1972-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1972-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1972-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1972-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1972-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1972-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1972-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1972-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1972-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-03-11T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1973-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1973-03-11T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1973-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1973-09-30T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1973-09-30T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1973-09-30T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1973-09-30T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1973-03-11T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1973-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1973-03-11T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1973-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1973-09-30T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1973-09-30T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1973-09-30T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1973-09-30T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-10T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1974-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1974-03-10T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1974-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1974-10-13T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1974-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1974-10-13T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1974-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1974-03-10T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1974-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1974-03-10T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1974-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1974-10-13T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1974-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1974-10-13T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1974-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-03-09T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1975-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1975-03-09T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1975-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1975-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1975-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1975-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1975-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1975-03-09T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1975-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1975-03-09T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1975-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1975-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1975-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1975-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1975-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-03-14T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1976-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1976-03-14T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1976-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1976-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1976-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1976-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1976-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1976-03-14T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1976-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1976-03-14T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1976-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1976-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1976-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1976-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1976-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-13T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1977-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1977-03-13T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1977-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1977-10-09T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1977-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1977-10-09T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1977-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1977-03-13T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1977-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1977-03-13T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1977-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1977-10-09T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1977-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1977-10-09T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1977-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1978-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1978-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1978-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1978-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1978-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1978-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1978-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1978-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1978-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1978-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1978-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1978-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1978-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1978-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1978-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-11T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1979-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1979-03-11T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1979-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1979-10-14T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1979-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1979-10-14T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1979-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1979-03-11T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1979-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1979-03-11T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1979-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1979-10-14T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1979-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1979-10-14T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1979-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-09T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1980-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1980-03-09T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1980-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1980-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1980-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1980-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1980-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1980-03-09T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1980-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1980-03-09T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1980-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1980-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1980-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1980-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1980-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-15T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1981-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1981-03-15T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1981-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1981-10-11T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1981-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1981-10-11T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1981-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1981-03-15T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1981-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1981-03-15T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1981-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1981-10-11T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1981-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1981-10-11T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1981-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-14T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1982-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1982-03-14T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1982-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1982-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1982-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1982-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1982-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1982-03-14T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1982-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1982-03-14T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1982-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1982-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1982-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1982-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1982-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-13T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1983-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1983-03-13T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1983-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1983-10-09T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1983-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1983-10-09T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1983-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1983-03-13T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1983-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1983-03-13T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1983-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1983-10-09T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1983-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1983-10-09T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1983-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-11T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1984-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1984-03-11T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1984-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1984-10-14T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1984-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1984-10-14T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1984-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1984-03-11T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1984-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1984-03-11T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1984-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1984-10-14T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1984-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1984-10-14T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1984-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-10T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1985-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1985-03-10T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1985-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1985-10-13T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1985-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1985-10-13T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1985-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1985-03-10T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1985-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1985-03-10T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1985-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1985-10-13T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1985-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1985-10-13T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1985-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-09T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1986-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1986-03-09T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1986-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1986-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1986-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1986-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1986-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1986-03-09T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1986-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1986-03-09T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1986-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1986-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1986-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1986-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1986-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1987-04-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1987-04-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1987-04-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1987-10-11T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1987-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1987-10-11T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1987-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1987-04-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1987-04-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1987-04-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1987-04-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1987-10-11T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1987-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1987-10-11T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1987-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-13T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1988-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1988-03-13T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1988-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1988-10-02T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1988-10-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1988-10-02T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1988-10-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1988-03-13T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1988-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1988-03-13T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1988-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1988-10-02T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1988-10-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1988-10-02T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1988-10-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1989-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1989-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1989-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1989-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1989-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1989-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1989-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1989-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1989-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1989-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1989-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-18T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1990-03-18T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1990-03-18T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1990-03-18T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1990-09-16T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1990-09-16T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1990-09-16T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1990-09-16T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1990-03-18T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1990-03-18T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1990-03-18T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1990-03-18T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1990-09-16T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1990-09-16T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1990-09-16T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1990-09-16T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-10T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1991-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1991-03-10T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1991-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1991-10-13T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1991-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1991-10-13T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1991-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1991-03-10T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1991-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1991-03-10T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1991-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1991-10-13T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1991-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1991-10-13T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1991-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-15T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1992-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1992-03-15T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1992-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1992-10-11T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1992-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1992-10-11T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1992-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1992-03-15T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1992-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1992-03-15T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1992-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1992-10-11T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1992-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1992-10-11T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1992-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-14T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1993-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1993-03-14T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1993-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1993-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1993-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1993-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1993-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1993-03-14T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1993-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1993-03-14T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1993-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1993-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1993-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1993-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1993-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-13T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1994-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1994-03-13T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1994-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1994-10-09T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1994-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1994-10-09T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1994-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1994-03-13T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1994-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1994-03-13T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1994-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1994-10-09T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1994-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1994-10-09T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1994-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1995-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1995-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1995-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1995-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1995-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1995-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1995-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1995-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1995-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1995-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1995-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-10T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1996-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1996-03-10T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1996-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1996-10-13T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1996-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1996-10-13T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1996-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1996-03-10T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1996-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1996-03-10T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1996-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1996-10-13T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1996-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1996-10-13T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1996-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1997-03-30T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1997-03-30T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1997-03-30T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1997-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1997-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1997-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1997-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1997-03-30T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1997-03-30T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1997-03-30T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1997-03-30T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1997-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1997-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1997-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1997-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-15T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1998-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1998-03-15T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1998-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1998-09-27T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1998-09-27T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1998-09-27T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1998-09-27T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1998-03-15T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1998-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1998-03-15T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1998-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1998-09-27T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1998-09-27T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1998-09-27T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1998-09-27T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1999-04-04T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("1999-04-04T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "1999-04-04T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("1999-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "1999-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("1999-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "1999-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("1999-04-04T02:59:59+00:00").tz("America/Santiago").zone(), 180, "1999-04-04T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("1999-04-04T03:00:00+00:00").tz("America/Santiago").zone(), 240, "1999-04-04T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1999-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "1999-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("1999-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "1999-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2000-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2000-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2000-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2000-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2000-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2000-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2000-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2000-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2000-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2000-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2000-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2000-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2000-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2000-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2000-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-11T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2001-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2001-03-11T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2001-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2001-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2001-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2001-03-11T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2001-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2001-03-11T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2001-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2001-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2001-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-10T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2002-03-10T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2002-03-10T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2002-03-10T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2002-10-13T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2002-10-13T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2002-10-13T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2002-10-13T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2002-03-10T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2002-03-10T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2002-03-10T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2002-03-10T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2002-10-13T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2002-10-13T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2002-10-13T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2002-10-13T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-09T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2003-03-09T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2003-03-09T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2003-03-09T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2003-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2003-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2003-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2003-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2003-03-09T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2003-03-09T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2003-03-09T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2003-03-09T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2003-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2003-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2003-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2003-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-14T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2004-03-14T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2004-03-14T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2004-03-14T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2004-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2004-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2004-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2004-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2004-03-14T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2004-03-14T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2004-03-14T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2004-03-14T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2004-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2004-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2004-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2004-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-13T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2005-03-13T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2005-03-13T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2005-10-09T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2005-10-09T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2005-10-09T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2005-10-09T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2005-03-13T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2005-03-13T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2005-03-13T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2005-03-13T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2005-10-09T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2005-10-09T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2005-10-09T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2005-10-09T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-12T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2006-03-12T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2006-03-12T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2006-10-15T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2006-10-15T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2006-03-12T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2006-03-12T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2006-03-12T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2006-03-12T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2006-10-15T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2006-10-15T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2006-10-15T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2006-10-15T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2007-03-11T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2007-03-11T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2007-10-14T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2007-10-14T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2007-03-11T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2007-03-11T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2007-03-11T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2007-03-11T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2007-10-14T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2007-10-14T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2008-03-30T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2008-03-30T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2008-03-30T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2008-10-12T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2008-10-12T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2008-10-12T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2008-10-12T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2008-03-30T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2008-03-30T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2008-03-30T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2008-03-30T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2008-10-12T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2008-10-12T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2008-10-12T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2008-10-12T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-15T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2009-03-15T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2009-03-15T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2009-03-15T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2009-10-11T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2009-10-11T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2009-10-11T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2009-10-11T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2009-03-15T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2009-03-15T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2009-03-15T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2009-03-15T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2009-10-11T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2009-10-11T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2009-10-11T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2009-10-11T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-04T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2010-04-04T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2010-04-04T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2010-04-04T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2010-10-10T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2010-10-10T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2010-10-10T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2010-10-10T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2010-04-04T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2010-04-04T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2010-04-04T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2010-04-04T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2010-10-10T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2010-10-10T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2010-10-10T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2010-10-10T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-05-08T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2011-05-08T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2011-05-08T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2011-05-08T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2011-08-21T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2011-08-21T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2011-08-21T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2011-08-21T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2011-05-08T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2011-05-08T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2011-05-08T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2011-05-08T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2011-08-21T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2011-08-21T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2011-08-21T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2011-08-21T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-04-29T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2012-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2012-04-29T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2012-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2012-09-02T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2012-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2012-09-02T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2012-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2012-04-29T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2012-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2012-04-29T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2012-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2012-09-02T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2012-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2012-09-02T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2012-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-28T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2013-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2013-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2013-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2013-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2013-04-28T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2013-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2013-04-28T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2013-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2013-09-08T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2013-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2013-09-08T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2013-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-27T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2014-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2014-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2014-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2014-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2014-04-27T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2014-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2014-04-27T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2014-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2014-09-07T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2014-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2014-09-07T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2014-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-26T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2015-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2015-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2015-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2015-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2015-04-26T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2015-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2015-04-26T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2015-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2015-09-06T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2015-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2015-09-06T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2015-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-24T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2016-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2016-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2016-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2016-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2016-04-24T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2016-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2016-04-24T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2016-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2016-09-04T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2016-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2016-09-04T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2016-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-23T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2017-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2017-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2017-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2017-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2017-04-23T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2017-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2017-04-23T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2017-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2017-09-03T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2017-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2017-09-03T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2017-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-04-29T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2018-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2018-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2018-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2018-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2018-04-29T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2018-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2018-04-29T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2018-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2018-09-02T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2018-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2018-09-02T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2018-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-28T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2019-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2019-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2019-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2019-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2019-04-28T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2019-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2019-04-28T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2019-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2019-09-08T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2019-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2019-09-08T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2019-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-26T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2020-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2020-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2020-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2020-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2020-04-26T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2020-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2020-04-26T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2020-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2020-09-06T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2020-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2020-09-06T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2020-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-25T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2021-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2021-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2021-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2021-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2021-04-25T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2021-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2021-04-25T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2021-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2021-09-05T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2021-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2021-09-05T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2021-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-24T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2022-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2022-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2022-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2022-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2022-04-24T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2022-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2022-04-24T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2022-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2022-09-04T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2022-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2022-09-04T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2022-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-23T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2023-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2023-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2023-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2023-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2023-04-23T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2023-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2023-04-23T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2023-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2023-09-03T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2023-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2023-09-03T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2023-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-28T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2024-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2024-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2024-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2024-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2024-04-28T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2024-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2024-04-28T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2024-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2024-09-08T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2024-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2024-09-08T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2024-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-27T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2025-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2025-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2025-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2025-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2025-04-27T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2025-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2025-04-27T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2025-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2025-09-07T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2025-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2025-09-07T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2025-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-26T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2026-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2026-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2026-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2026-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2026-04-26T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2026-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2026-04-26T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2026-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2026-09-06T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2026-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2026-09-06T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2026-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-25T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2027-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2027-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2027-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2027-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2027-04-25T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2027-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2027-04-25T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2027-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2027-09-05T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2027-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2027-09-05T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2027-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-23T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2028-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2028-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2028-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2028-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2028-04-23T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2028-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2028-04-23T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2028-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2028-09-03T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2028-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2028-09-03T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2028-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-04-29T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2029-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2029-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2029-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2029-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2029-04-29T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2029-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2029-04-29T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2029-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2029-09-02T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2029-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2029-09-02T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2029-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-28T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2030-04-28T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2030-04-28T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2030-09-08T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2030-09-08T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2030-04-28T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2030-04-28T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2030-04-28T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2030-04-28T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2030-09-08T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2030-09-08T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2030-09-08T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2030-09-08T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-27T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2031-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2031-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2031-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2031-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2031-04-27T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2031-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2031-04-27T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2031-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2031-09-07T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2031-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2031-09-07T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2031-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-25T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2032-04-25T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2032-04-25T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2032-09-05T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2032-09-05T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2032-04-25T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2032-04-25T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2032-04-25T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2032-04-25T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2032-09-05T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2032-09-05T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2032-09-05T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2032-09-05T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-24T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2033-04-24T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2033-04-24T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2033-09-04T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2033-09-04T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2033-04-24T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2033-04-24T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2033-04-24T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2033-04-24T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2033-09-04T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2033-09-04T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2033-09-04T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2033-09-04T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-23T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2034-04-23T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2034-04-23T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2034-09-03T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2034-09-03T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2034-04-23T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2034-04-23T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2034-04-23T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2034-04-23T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2034-09-03T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2034-09-03T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2034-09-03T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2034-09-03T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-04-29T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2035-04-29T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2035-04-29T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2035-09-02T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2035-09-02T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2035-04-29T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2035-04-29T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2035-04-29T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2035-04-29T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2035-09-02T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2035-09-02T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2035-09-02T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2035-09-02T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-27T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2036-04-27T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2036-04-27T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2036-09-07T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2036-09-07T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2036-04-27T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2036-04-27T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2036-04-27T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2036-04-27T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2036-09-07T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2036-09-07T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2036-09-07T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2036-09-07T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-26T02:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2037-04-26T02:59:59+00:00 should be 23:59:59 CLST");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:00:00", "2037-04-26T03:00:00+00:00 should be 23:00:00 CLT");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("America/Santiago").format("HH:mm:ss"), "23:59:59", "2037-09-06T03:59:59+00:00 should be 23:59:59 CLT");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("America/Santiago").format("HH:mm:ss"), "01:00:00", "2037-09-06T04:00:00+00:00 should be 01:00:00 CLST");

		t.equal(moment("2037-04-26T02:59:59+00:00").tz("America/Santiago").zone(), 180, "2037-04-26T02:59:59+00:00 should be 180 minutes offset in CLST");
		t.equal(moment("2037-04-26T03:00:00+00:00").tz("America/Santiago").zone(), 240, "2037-04-26T03:00:00+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2037-09-06T03:59:59+00:00").tz("America/Santiago").zone(), 240, "2037-09-06T03:59:59+00:00 should be 240 minutes offset in CLT");
		t.equal(moment("2037-09-06T04:00:00+00:00").tz("America/Santiago").zone(), 180, "2037-09-06T04:00:00+00:00 should be 180 minutes offset in CLST");

		t.done();
	}
};
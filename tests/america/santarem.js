var moment = require("../../index");

exports["America/Santarem"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T03:38:47+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1914-01-01T03:38:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T03:38:48+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:38:48", "1914-01-01T03:38:48+00:00 should be 23:38:48 AMT");

		t.equal(moment("1914-01-01T03:38:47+00:00").tz("America/Santarem").zone(), 13128 / 60, "1914-01-01T03:38:47+00:00 should be 13128 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T03:38:48+00:00").tz("America/Santarem").zone(), 240, "1914-01-01T03:38:48+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T14:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "10:59:59", "1931-10-03T14:59:59+00:00 should be 10:59:59 AMT");
		t.equal(moment("1931-10-03T15:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "12:00:00", "1931-10-03T15:00:00+00:00 should be 12:00:00 AMST");

		t.equal(moment("1931-10-03T14:59:59+00:00").tz("America/Santarem").zone(), 240, "1931-10-03T14:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1931-10-03T15:00:00+00:00").tz("America/Santarem").zone(), 180, "1931-10-03T15:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1932-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1932-04-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1932-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1932-10-03T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1932-10-03T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1932-10-03T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1932-10-03T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1932-04-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1932-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1932-04-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1932-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1932-10-03T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1932-10-03T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1932-10-03T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1932-10-03T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1933-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1933-04-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1933-04-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1933-04-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1933-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1933-04-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1933-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1949-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1949-12-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1949-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1949-12-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1949-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1949-12-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1949-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "00:59:59", "1950-04-16T03:59:59+00:00 should be 00:59:59 AMST");
		t.equal(moment("1950-04-16T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "00:00:00", "1950-04-16T04:00:00+00:00 should be 00:00:00 AMT");
		t.equal(moment("1950-12-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1950-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1950-12-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1950-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1950-04-16T03:59:59+00:00").tz("America/Santarem").zone(), 180, "1950-04-16T03:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1950-04-16T04:00:00+00:00").tz("America/Santarem").zone(), 240, "1950-04-16T04:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1950-12-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1950-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1950-12-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1950-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1951-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1951-04-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1951-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1951-12-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1951-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1951-12-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1951-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1951-04-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1951-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1951-04-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1951-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1951-12-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1951-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1951-12-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1951-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1952-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1952-04-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1952-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1952-12-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1952-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1952-12-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1952-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1952-04-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1952-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1952-04-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1952-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1952-12-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1952-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1952-12-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1952-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1953-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1953-03-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1953-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1953-03-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1953-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1953-03-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1953-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1963-12-09T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1963-12-09T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1963-12-09T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1963-12-09T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1963-12-09T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1963-12-09T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1963-12-09T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1964-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1964-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1964-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1964-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1965-01-31T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1965-01-31T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1965-01-31T04:00:00+00:00 should be 01:00:00 AMST");
		t.equal(moment("1965-03-31T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1965-03-31T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1965-03-31T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1965-03-31T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1965-12-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1965-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1965-12-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1965-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1965-01-31T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1965-01-31T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-01-31T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1965-01-31T04:00:00+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1965-03-31T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1965-03-31T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1965-03-31T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1965-03-31T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-12-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1965-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-12-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1965-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1966-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1966-03-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1966-11-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1966-11-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1966-11-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1966-11-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1966-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1966-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1966-11-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1966-11-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1966-11-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1966-11-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1967-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1967-03-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1967-03-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1967-11-01T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1967-11-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1967-11-01T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1967-11-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1967-03-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1967-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1967-03-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1967-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1967-11-01T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1967-11-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1967-11-01T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1967-11-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1968-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1968-03-01T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1968-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1968-03-01T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1968-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1968-03-01T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1968-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1985-11-02T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1985-11-02T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1985-11-02T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1985-11-02T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1985-11-02T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1985-11-02T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1985-11-02T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1986-03-15T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1986-03-15T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1986-03-15T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1986-10-25T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1986-10-25T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1986-10-25T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1986-10-25T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1986-03-15T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1986-03-15T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1986-03-15T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1986-03-15T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1986-10-25T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1986-10-25T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1986-10-25T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1986-10-25T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1987-02-14T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1987-02-14T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1987-02-14T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1987-10-25T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "1987-10-25T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1987-02-14T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1987-02-14T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1987-02-14T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1987-02-14T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Santarem").zone(), 240, "1987-10-25T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Santarem").zone(), 180, "1987-10-25T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T02:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "1988-02-07T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1988-02-07T03:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:00:00", "1988-02-07T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1988-02-07T02:59:59+00:00").tz("America/Santarem").zone(), 180, "1988-02-07T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1988-02-07T03:00:00+00:00").tz("America/Santarem").zone(), 240, "1988-02-07T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-06-24T03:59:59+00:00").tz("America/Santarem").format("HH:mm:ss"), "23:59:59", "2008-06-24T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2008-06-24T04:00:00+00:00").tz("America/Santarem").format("HH:mm:ss"), "01:00:00", "2008-06-24T04:00:00+00:00 should be 01:00:00 BRT");

		t.equal(moment("2008-06-24T03:59:59+00:00").tz("America/Santarem").zone(), 240, "2008-06-24T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2008-06-24T04:00:00+00:00").tz("America/Santarem").zone(), 180, "2008-06-24T04:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	}
};
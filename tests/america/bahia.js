var moment = require("../../index");

exports["America/Bahia"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T02:34:03+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1914-01-01T02:34:03+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T02:34:04+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:34:04", "1914-01-01T02:34:04+00:00 should be 23:34:04 BRT");

		t.equal(moment("1914-01-01T02:34:03+00:00").tz("America/Bahia").zone(), 9244 / 60, "1914-01-01T02:34:03+00:00 should be 9244 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T02:34:04+00:00").tz("America/Bahia").zone(), 180, "1914-01-01T02:34:04+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T13:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "10:59:59", "1931-10-03T13:59:59+00:00 should be 10:59:59 BRT");
		t.equal(moment("1931-10-03T14:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "12:00:00", "1931-10-03T14:00:00+00:00 should be 12:00:00 BRST");

		t.equal(moment("1931-10-03T13:59:59+00:00").tz("America/Bahia").zone(), 180, "1931-10-03T13:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1931-10-03T14:00:00+00:00").tz("America/Bahia").zone(), 120, "1931-10-03T14:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1932-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1932-04-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1932-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1932-10-03T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1932-10-03T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1932-10-03T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1932-10-03T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1932-04-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1932-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1932-04-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1932-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1932-10-03T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1932-10-03T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1932-10-03T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1932-10-03T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1933-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1933-04-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1933-04-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1933-04-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1933-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1933-04-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1933-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1949-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1949-12-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1949-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1949-12-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1949-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1949-12-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1949-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "00:59:59", "1950-04-16T02:59:59+00:00 should be 00:59:59 BRST");
		t.equal(moment("1950-04-16T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "00:00:00", "1950-04-16T03:00:00+00:00 should be 00:00:00 BRT");
		t.equal(moment("1950-12-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1950-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1950-12-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1950-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1950-04-16T02:59:59+00:00").tz("America/Bahia").zone(), 120, "1950-04-16T02:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1950-04-16T03:00:00+00:00").tz("America/Bahia").zone(), 180, "1950-04-16T03:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1950-12-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1950-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1950-12-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1950-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1951-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1951-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1951-12-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1951-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1951-12-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1951-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1951-04-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1951-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1951-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1951-12-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1951-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1951-12-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1951-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1952-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1952-04-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1952-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1952-12-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1952-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1952-12-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1952-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1952-04-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1952-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1952-04-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1952-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1952-12-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1952-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1952-12-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1952-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1953-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1953-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1953-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1953-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1953-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1953-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1953-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1963-12-09T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1963-12-09T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1963-12-09T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1963-12-09T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1963-12-09T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1963-12-09T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1963-12-09T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1964-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1964-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1964-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1964-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1964-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1964-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1964-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1965-01-31T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1965-01-31T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1965-01-31T03:00:00+00:00 should be 01:00:00 BRST");
		t.equal(moment("1965-03-31T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1965-03-31T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1965-03-31T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1965-03-31T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1965-12-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1965-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1965-12-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1965-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1965-01-31T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1965-01-31T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-01-31T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1965-01-31T03:00:00+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1965-03-31T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1965-03-31T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1965-03-31T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1965-03-31T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-12-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1965-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-12-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1965-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1966-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1966-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1966-03-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1966-11-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1966-11-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1966-11-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1966-11-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1966-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1966-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1966-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1966-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1966-11-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1966-11-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1966-11-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1966-11-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1967-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1967-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1967-03-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1967-11-01T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1967-11-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1967-11-01T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1967-11-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1967-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1967-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1967-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1967-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1967-11-01T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1967-11-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1967-11-01T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1967-11-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1968-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1968-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1968-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1968-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1968-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1968-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1968-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1985-11-02T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1985-11-02T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1985-11-02T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1985-11-02T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1985-11-02T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1985-11-02T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1985-11-02T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1986-03-15T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1986-03-15T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1986-03-15T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1986-10-25T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1986-10-25T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1986-10-25T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1986-10-25T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1986-03-15T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1986-03-15T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1986-03-15T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1986-03-15T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1986-10-25T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1986-10-25T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1986-10-25T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1986-10-25T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1987-02-14T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1987-02-14T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1987-02-14T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1987-10-25T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1987-10-25T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1987-10-25T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1987-10-25T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1987-02-14T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1987-02-14T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1987-02-14T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1987-02-14T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1987-10-25T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1987-10-25T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1987-10-25T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1987-10-25T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1988-02-07T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1988-02-07T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1988-02-07T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1988-10-16T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1988-10-16T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1988-10-16T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1988-10-16T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1988-02-07T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1988-02-07T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1988-02-07T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1988-02-07T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1988-10-16T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1988-10-16T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1988-10-16T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1988-10-16T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-01-29T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1989-01-29T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1989-01-29T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1989-01-29T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1989-10-15T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1989-10-15T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1989-10-15T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1989-10-15T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1989-01-29T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1989-01-29T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1989-01-29T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1989-01-29T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1989-10-15T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1989-10-15T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1989-10-15T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1989-10-15T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-02-11T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1990-02-11T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1990-02-11T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1990-02-11T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1990-10-21T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1990-10-21T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1990-02-11T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1990-02-11T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1990-02-11T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1990-02-11T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1990-10-21T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1990-10-21T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-02-17T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1991-02-17T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1991-02-17T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1991-02-17T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1991-10-20T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1991-10-20T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1991-10-20T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1991-10-20T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1991-02-17T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1991-02-17T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1991-02-17T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1991-02-17T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1991-10-20T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1991-10-20T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1991-10-20T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1991-10-20T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-09T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1992-02-09T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1992-02-09T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1992-02-09T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1992-10-25T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1992-10-25T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1992-10-25T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1992-10-25T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1992-02-09T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1992-02-09T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1992-02-09T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1992-02-09T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1992-10-25T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1992-10-25T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1992-10-25T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1992-10-25T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-01-31T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1993-01-31T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1993-01-31T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1993-01-31T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1993-10-17T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1993-10-17T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1993-10-17T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1993-10-17T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1993-01-31T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1993-01-31T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1993-01-31T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1993-01-31T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1993-10-17T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1993-10-17T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1993-10-17T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1993-10-17T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-02-20T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1994-02-20T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1994-02-20T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1994-02-20T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1994-10-16T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1994-10-16T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1994-10-16T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1994-10-16T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1994-02-20T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1994-02-20T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1994-02-20T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1994-02-20T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1994-10-16T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1994-10-16T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1994-10-16T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1994-10-16T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-02-19T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1995-02-19T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1995-02-19T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1995-02-19T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1995-10-15T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1995-10-15T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1995-10-15T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1995-10-15T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1995-02-19T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1995-02-19T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1995-02-19T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1995-02-19T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1995-10-15T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1995-10-15T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1995-10-15T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1995-10-15T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-02-11T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1996-02-11T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1996-02-11T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1996-02-11T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1996-10-06T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1996-10-06T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1996-10-06T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1996-10-06T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1996-02-11T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1996-02-11T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1996-02-11T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1996-02-11T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1996-10-06T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1996-10-06T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1996-10-06T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1996-10-06T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-02-16T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1997-02-16T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1997-02-16T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1997-02-16T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1997-10-06T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1997-10-06T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1997-10-06T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1997-10-06T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1997-02-16T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1997-02-16T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1997-02-16T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1997-02-16T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1997-10-06T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1997-10-06T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1997-10-06T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1997-10-06T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-01T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1998-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1998-03-01T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1998-03-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1998-10-11T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1998-10-11T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1998-10-11T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1998-10-11T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1998-03-01T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1998-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1998-03-01T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1998-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1998-10-11T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1998-10-11T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1998-10-11T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1998-10-11T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-02-21T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1999-02-21T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1999-02-21T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "1999-02-21T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1999-10-03T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "1999-10-03T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1999-10-03T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "1999-10-03T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1999-02-21T01:59:59+00:00").tz("America/Bahia").zone(), 120, "1999-02-21T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1999-02-21T02:00:00+00:00").tz("America/Bahia").zone(), 180, "1999-02-21T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1999-10-03T02:59:59+00:00").tz("America/Bahia").zone(), 180, "1999-10-03T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1999-10-03T03:00:00+00:00").tz("America/Bahia").zone(), 120, "1999-10-03T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-02-27T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2000-02-27T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("2000-02-27T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "2000-02-27T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("2000-10-08T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2000-10-08T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("2000-10-08T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "2000-10-08T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("2000-02-27T01:59:59+00:00").tz("America/Bahia").zone(), 120, "2000-02-27T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("2000-02-27T02:00:00+00:00").tz("America/Bahia").zone(), 180, "2000-02-27T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2000-10-08T02:59:59+00:00").tz("America/Bahia").zone(), 180, "2000-10-08T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2000-10-08T03:00:00+00:00").tz("America/Bahia").zone(), 120, "2000-10-08T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-02-18T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2001-02-18T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("2001-02-18T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "2001-02-18T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("2001-10-14T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2001-10-14T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("2001-10-14T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "2001-10-14T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("2001-02-18T01:59:59+00:00").tz("America/Bahia").zone(), 120, "2001-02-18T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("2001-02-18T02:00:00+00:00").tz("America/Bahia").zone(), 180, "2001-02-18T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2001-10-14T02:59:59+00:00").tz("America/Bahia").zone(), 180, "2001-10-14T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2001-10-14T03:00:00+00:00").tz("America/Bahia").zone(), 120, "2001-10-14T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-02-17T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2002-02-17T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("2002-02-17T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "2002-02-17T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("2002-11-03T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2002-11-03T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("2002-11-03T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "2002-11-03T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("2002-02-17T01:59:59+00:00").tz("America/Bahia").zone(), 120, "2002-02-17T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("2002-02-17T02:00:00+00:00").tz("America/Bahia").zone(), 180, "2002-02-17T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2002-11-03T02:59:59+00:00").tz("America/Bahia").zone(), 180, "2002-11-03T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2002-11-03T03:00:00+00:00").tz("America/Bahia").zone(), 120, "2002-11-03T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-02-16T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2003-02-16T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("2003-02-16T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "2003-02-16T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("2003-02-16T01:59:59+00:00").tz("America/Bahia").zone(), 120, "2003-02-16T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("2003-02-16T02:00:00+00:00").tz("America/Bahia").zone(), 180, "2003-02-16T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-10-16T02:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2011-10-16T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("2011-10-16T03:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "01:00:00", "2011-10-16T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("2011-10-16T02:59:59+00:00").tz("America/Bahia").zone(), 180, "2011-10-16T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("2011-10-16T03:00:00+00:00").tz("America/Bahia").zone(), 120, "2011-10-16T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-02-26T01:59:59+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:59:59", "2012-02-26T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("2012-02-26T02:00:00+00:00").tz("America/Bahia").format("HH:mm:ss"), "23:00:00", "2012-02-26T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("2012-02-26T01:59:59+00:00").tz("America/Bahia").zone(), 120, "2012-02-26T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("2012-02-26T02:00:00+00:00").tz("America/Bahia").zone(), 180, "2012-02-26T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	}
};
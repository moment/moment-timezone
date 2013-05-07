var moment = require("../../moment-timezone");

exports["America/Belem"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T03:13:55+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1914-01-01T03:13:55+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T03:13:56+00:00").tz("America/Belem").format("HH:mm:ss"), "00:13:56", "1914-01-01T03:13:56+00:00 should be 00:13:56 BRT");

		t.equal(moment("1914-01-01T03:13:55+00:00").tz("America/Belem").zone(), 11636 / 60, "1914-01-01T03:13:55+00:00 should be 11636 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T03:13:56+00:00").tz("America/Belem").zone(), 180, "1914-01-01T03:13:56+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T13:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "10:59:59", "1931-10-03T13:59:59+00:00 should be 10:59:59 BRT");
		t.equal(moment("1931-10-03T14:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "12:00:00", "1931-10-03T14:00:00+00:00 should be 12:00:00 BRST");

		t.equal(moment("1931-10-03T13:59:59+00:00").tz("America/Belem").zone(), 180, "1931-10-03T13:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1931-10-03T14:00:00+00:00").tz("America/Belem").zone(), 120, "1931-10-03T14:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1932-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1932-04-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1932-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1932-10-03T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1932-10-03T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1932-10-03T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1932-10-03T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1932-04-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1932-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1932-04-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1932-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1932-10-03T02:59:59+00:00").tz("America/Belem").zone(), 180, "1932-10-03T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1932-10-03T03:00:00+00:00").tz("America/Belem").zone(), 120, "1932-10-03T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1933-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1933-04-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1933-04-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1933-04-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1933-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1933-04-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1933-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1949-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1949-12-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1949-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1949-12-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1949-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1949-12-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1949-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "00:59:59", "1950-04-16T02:59:59+00:00 should be 00:59:59 BRST");
		t.equal(moment("1950-04-16T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "00:00:00", "1950-04-16T03:00:00+00:00 should be 00:00:00 BRT");
		t.equal(moment("1950-12-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1950-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1950-12-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1950-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1950-04-16T02:59:59+00:00").tz("America/Belem").zone(), 120, "1950-04-16T02:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1950-04-16T03:00:00+00:00").tz("America/Belem").zone(), 180, "1950-04-16T03:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1950-12-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1950-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1950-12-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1950-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1951-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1951-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1951-12-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1951-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1951-12-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1951-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1951-04-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1951-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1951-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1951-12-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1951-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1951-12-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1951-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1952-04-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1952-04-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1952-04-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1952-12-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1952-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1952-12-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1952-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1952-04-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1952-04-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1952-04-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1952-04-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1952-12-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1952-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1952-12-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1952-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1953-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1953-03-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1953-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1953-03-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1953-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1953-03-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1953-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1963-12-09T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1963-12-09T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1963-12-09T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1963-12-09T02:59:59+00:00").tz("America/Belem").zone(), 180, "1963-12-09T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1963-12-09T03:00:00+00:00").tz("America/Belem").zone(), 120, "1963-12-09T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1964-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1964-03-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1964-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1964-03-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1964-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1964-03-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1964-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1965-01-31T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1965-01-31T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1965-01-31T03:00:00+00:00 should be 01:00:00 BRST");
		t.equal(moment("1965-03-31T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1965-03-31T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1965-03-31T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1965-03-31T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1965-12-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1965-12-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1965-12-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1965-12-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1965-01-31T02:59:59+00:00").tz("America/Belem").zone(), 180, "1965-01-31T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-01-31T03:00:00+00:00").tz("America/Belem").zone(), 120, "1965-01-31T03:00:00+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1965-03-31T01:59:59+00:00").tz("America/Belem").zone(), 120, "1965-03-31T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1965-03-31T02:00:00+00:00").tz("America/Belem").zone(), 180, "1965-03-31T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-12-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1965-12-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1965-12-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1965-12-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1966-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1966-03-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1966-03-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1966-11-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1966-11-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1966-11-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1966-11-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1966-03-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1966-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1966-03-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1966-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1966-11-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1966-11-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1966-11-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1966-11-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1967-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1967-03-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1967-03-01T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1967-11-01T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1967-11-01T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1967-11-01T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1967-11-01T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1967-03-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1967-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1967-03-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1967-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1967-11-01T02:59:59+00:00").tz("America/Belem").zone(), 180, "1967-11-01T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1967-11-01T03:00:00+00:00").tz("America/Belem").zone(), 120, "1967-11-01T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1968-03-01T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1968-03-01T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1968-03-01T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1968-03-01T01:59:59+00:00").tz("America/Belem").zone(), 120, "1968-03-01T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1968-03-01T02:00:00+00:00").tz("America/Belem").zone(), 180, "1968-03-01T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1985-11-02T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1985-11-02T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1985-11-02T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1985-11-02T02:59:59+00:00").tz("America/Belem").zone(), 180, "1985-11-02T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1985-11-02T03:00:00+00:00").tz("America/Belem").zone(), 120, "1985-11-02T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1986-03-15T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1986-03-15T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1986-03-15T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1986-10-25T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1986-10-25T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1986-10-25T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1986-10-25T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1986-03-15T01:59:59+00:00").tz("America/Belem").zone(), 120, "1986-03-15T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1986-03-15T02:00:00+00:00").tz("America/Belem").zone(), 180, "1986-03-15T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1986-10-25T02:59:59+00:00").tz("America/Belem").zone(), 180, "1986-10-25T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1986-10-25T03:00:00+00:00").tz("America/Belem").zone(), 120, "1986-10-25T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1987-02-14T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1987-02-14T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1987-02-14T02:00:00+00:00 should be 23:00:00 BRT");
		t.equal(moment("1987-10-25T02:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1987-10-25T02:59:59+00:00 should be 23:59:59 BRT");
		t.equal(moment("1987-10-25T03:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "01:00:00", "1987-10-25T03:00:00+00:00 should be 01:00:00 BRST");

		t.equal(moment("1987-02-14T01:59:59+00:00").tz("America/Belem").zone(), 120, "1987-02-14T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1987-02-14T02:00:00+00:00").tz("America/Belem").zone(), 180, "1987-02-14T02:00:00+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1987-10-25T02:59:59+00:00").tz("America/Belem").zone(), 180, "1987-10-25T02:59:59+00:00 should be 180 minutes offset in BRT");
		t.equal(moment("1987-10-25T03:00:00+00:00").tz("America/Belem").zone(), 120, "1987-10-25T03:00:00+00:00 should be 120 minutes offset in BRST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T01:59:59+00:00").tz("America/Belem").format("HH:mm:ss"), "23:59:59", "1988-02-07T01:59:59+00:00 should be 23:59:59 BRST");
		t.equal(moment("1988-02-07T02:00:00+00:00").tz("America/Belem").format("HH:mm:ss"), "23:00:00", "1988-02-07T02:00:00+00:00 should be 23:00:00 BRT");

		t.equal(moment("1988-02-07T01:59:59+00:00").tz("America/Belem").zone(), 120, "1988-02-07T01:59:59+00:00 should be 120 minutes offset in BRST");
		t.equal(moment("1988-02-07T02:00:00+00:00").tz("America/Belem").zone(), 180, "1988-02-07T02:00:00+00:00 should be 180 minutes offset in BRT");

		t.done();
	}
};
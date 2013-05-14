var moment = require("../../index");

exports["America/Noronha"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T02:09:39+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1914-01-01T02:09:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T02:09:40+00:00").tz("America/Noronha").format("HH:mm:ss"), "00:09:40", "1914-01-01T02:09:40+00:00 should be 00:09:40 FNT");

		t.equal(moment("1914-01-01T02:09:39+00:00").tz("America/Noronha").zone(), 7780 / 60, "1914-01-01T02:09:39+00:00 should be 7780 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T02:09:40+00:00").tz("America/Noronha").zone(), 120, "1914-01-01T02:09:40+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T12:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "10:59:59", "1931-10-03T12:59:59+00:00 should be 10:59:59 FNT");
		t.equal(moment("1931-10-03T13:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "12:00:00", "1931-10-03T13:00:00+00:00 should be 12:00:00 FNST");

		t.equal(moment("1931-10-03T12:59:59+00:00").tz("America/Noronha").zone(), 120, "1931-10-03T12:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1931-10-03T13:00:00+00:00").tz("America/Noronha").zone(), 60, "1931-10-03T13:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1932-04-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1932-04-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1932-04-01T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1932-10-03T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1932-10-03T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1932-10-03T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1932-10-03T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1932-04-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1932-04-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1932-04-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1932-04-01T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1932-10-03T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1932-10-03T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1932-10-03T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1932-10-03T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1933-04-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1933-04-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1933-04-01T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("1933-04-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1933-04-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1933-04-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1933-04-01T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1949-12-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1949-12-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1949-12-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1949-12-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1949-12-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1949-12-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1949-12-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "00:59:59", "1950-04-16T01:59:59+00:00 should be 00:59:59 FNST");
		t.equal(moment("1950-04-16T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "00:00:00", "1950-04-16T02:00:00+00:00 should be 00:00:00 FNT");
		t.equal(moment("1950-12-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1950-12-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1950-12-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1950-12-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1950-04-16T01:59:59+00:00").tz("America/Noronha").zone(), 60, "1950-04-16T01:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1950-04-16T02:00:00+00:00").tz("America/Noronha").zone(), 120, "1950-04-16T02:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1950-12-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1950-12-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1950-12-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1950-12-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1951-04-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1951-04-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1951-04-01T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1951-12-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1951-12-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1951-12-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1951-12-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1951-04-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1951-04-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1951-04-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1951-04-01T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1951-12-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1951-12-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1951-12-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1951-12-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1952-04-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1952-04-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1952-04-01T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1952-12-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1952-12-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1952-12-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1952-12-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1952-04-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1952-04-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1952-04-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1952-04-01T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1952-12-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1952-12-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1952-12-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1952-12-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1953-03-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1953-03-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1953-03-01T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("1953-03-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1953-03-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1953-03-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1953-03-01T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1963-12-09T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1963-12-09T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1963-12-09T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1963-12-09T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1963-12-09T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1963-12-09T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1963-12-09T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1964-03-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1964-03-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1964-03-01T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("1964-03-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1964-03-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1964-03-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1964-03-01T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1965-01-31T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1965-01-31T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1965-01-31T02:00:00+00:00 should be 01:00:00 FNST");
		t.equal(moment("1965-03-31T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1965-03-31T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1965-03-31T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1965-03-31T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1965-12-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1965-12-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1965-12-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1965-12-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1965-01-31T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1965-01-31T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1965-01-31T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1965-01-31T02:00:00+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1965-03-31T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1965-03-31T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1965-03-31T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1965-03-31T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1965-12-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1965-12-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1965-12-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1965-12-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1966-03-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1966-03-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1966-03-01T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1966-11-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1966-11-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1966-11-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1966-11-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1966-03-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1966-03-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1966-03-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1966-03-01T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1966-11-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1966-11-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1966-11-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1966-11-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1967-03-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1967-03-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1967-03-01T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1967-11-01T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1967-11-01T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1967-11-01T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1967-11-01T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1967-03-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1967-03-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1967-03-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1967-03-01T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1967-11-01T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1967-11-01T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1967-11-01T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1967-11-01T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1968-03-01T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1968-03-01T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1968-03-01T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("1968-03-01T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1968-03-01T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1968-03-01T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1968-03-01T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1985-11-02T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1985-11-02T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1985-11-02T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1985-11-02T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1985-11-02T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1985-11-02T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1985-11-02T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1986-03-15T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1986-03-15T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1986-03-15T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1986-10-25T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1986-10-25T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1986-10-25T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1986-10-25T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1986-03-15T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1986-03-15T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1986-03-15T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1986-03-15T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1986-10-25T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1986-10-25T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1986-10-25T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1986-10-25T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1987-02-14T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1987-02-14T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1987-02-14T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1987-10-25T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1987-10-25T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1987-10-25T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1987-10-25T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1987-02-14T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1987-02-14T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1987-02-14T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1987-02-14T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1987-10-25T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1987-10-25T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1987-10-25T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1987-10-25T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1988-02-07T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1988-02-07T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1988-02-07T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1988-10-16T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1988-10-16T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1988-10-16T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1988-10-16T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1988-02-07T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1988-02-07T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1988-02-07T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1988-02-07T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1988-10-16T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1988-10-16T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1988-10-16T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1988-10-16T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-01-29T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1989-01-29T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1989-01-29T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1989-01-29T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("1989-10-15T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1989-10-15T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1989-10-15T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1989-10-15T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1989-01-29T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1989-01-29T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1989-01-29T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1989-01-29T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1989-10-15T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1989-10-15T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1989-10-15T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1989-10-15T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-02-11T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1990-02-11T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("1990-02-11T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "1990-02-11T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("1990-02-11T00:59:59+00:00").tz("America/Noronha").zone(), 60, "1990-02-11T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("1990-02-11T01:00:00+00:00").tz("America/Noronha").zone(), 120, "1990-02-11T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-10-03T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "1999-10-03T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("1999-10-03T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "1999-10-03T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("1999-10-03T01:59:59+00:00").tz("America/Noronha").zone(), 120, "1999-10-03T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("1999-10-03T02:00:00+00:00").tz("America/Noronha").zone(), 60, "1999-10-03T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-02-27T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "2000-02-27T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("2000-02-27T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "2000-02-27T01:00:00+00:00 should be 23:00:00 FNT");
		t.equal(moment("2000-10-08T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "2000-10-08T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("2000-10-08T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "2000-10-08T02:00:00+00:00 should be 01:00:00 FNST");
		t.equal(moment("2000-10-15T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "2000-10-15T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("2000-10-15T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "2000-10-15T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("2000-02-27T00:59:59+00:00").tz("America/Noronha").zone(), 60, "2000-02-27T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("2000-02-27T01:00:00+00:00").tz("America/Noronha").zone(), 120, "2000-02-27T01:00:00+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("2000-10-08T01:59:59+00:00").tz("America/Noronha").zone(), 120, "2000-10-08T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("2000-10-08T02:00:00+00:00").tz("America/Noronha").zone(), 60, "2000-10-08T02:00:00+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("2000-10-15T00:59:59+00:00").tz("America/Noronha").zone(), 60, "2000-10-15T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("2000-10-15T01:00:00+00:00").tz("America/Noronha").zone(), 120, "2000-10-15T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-10-14T01:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "2001-10-14T01:59:59+00:00 should be 23:59:59 FNT");
		t.equal(moment("2001-10-14T02:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "01:00:00", "2001-10-14T02:00:00+00:00 should be 01:00:00 FNST");

		t.equal(moment("2001-10-14T01:59:59+00:00").tz("America/Noronha").zone(), 120, "2001-10-14T01:59:59+00:00 should be 120 minutes offset in FNT");
		t.equal(moment("2001-10-14T02:00:00+00:00").tz("America/Noronha").zone(), 60, "2001-10-14T02:00:00+00:00 should be 60 minutes offset in FNST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-02-17T00:59:59+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:59:59", "2002-02-17T00:59:59+00:00 should be 23:59:59 FNST");
		t.equal(moment("2002-02-17T01:00:00+00:00").tz("America/Noronha").format("HH:mm:ss"), "23:00:00", "2002-02-17T01:00:00+00:00 should be 23:00:00 FNT");

		t.equal(moment("2002-02-17T00:59:59+00:00").tz("America/Noronha").zone(), 60, "2002-02-17T00:59:59+00:00 should be 60 minutes offset in FNST");
		t.equal(moment("2002-02-17T01:00:00+00:00").tz("America/Noronha").zone(), 120, "2002-02-17T01:00:00+00:00 should be 120 minutes offset in FNT");

		t.done();
	}
};
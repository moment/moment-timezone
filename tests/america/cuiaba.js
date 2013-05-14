var moment = require("../../index");

exports["America/Cuiaba"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T03:44:19+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1914-01-01T03:44:19+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T03:44:20+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:44:20", "1914-01-01T03:44:20+00:00 should be 23:44:20 AMT");

		t.equal(moment("1914-01-01T03:44:19+00:00").tz("America/Cuiaba").zone(), 13460 / 60, "1914-01-01T03:44:19+00:00 should be 13460 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T03:44:20+00:00").tz("America/Cuiaba").zone(), 240, "1914-01-01T03:44:20+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T14:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "10:59:59", "1931-10-03T14:59:59+00:00 should be 10:59:59 AMT");
		t.equal(moment("1931-10-03T15:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "12:00:00", "1931-10-03T15:00:00+00:00 should be 12:00:00 AMST");

		t.equal(moment("1931-10-03T14:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1931-10-03T14:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1931-10-03T15:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1931-10-03T15:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1932-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1932-04-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1932-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1932-10-03T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1932-10-03T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1932-10-03T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1932-10-03T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1932-04-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1932-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1932-04-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1932-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1932-10-03T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1932-10-03T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1932-10-03T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1932-10-03T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1933-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1933-04-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1933-04-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1933-04-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1933-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1933-04-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1933-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1949-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1949-12-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1949-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1949-12-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1949-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1949-12-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1949-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "00:59:59", "1950-04-16T03:59:59+00:00 should be 00:59:59 AMST");
		t.equal(moment("1950-04-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "00:00:00", "1950-04-16T04:00:00+00:00 should be 00:00:00 AMT");
		t.equal(moment("1950-12-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1950-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1950-12-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1950-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1950-04-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1950-04-16T03:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1950-04-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1950-04-16T04:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1950-12-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1950-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1950-12-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1950-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1951-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1951-04-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1951-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1951-12-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1951-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1951-12-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1951-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1951-04-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1951-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1951-04-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1951-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1951-12-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1951-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1951-12-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1951-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1952-04-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1952-04-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1952-04-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1952-12-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1952-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1952-12-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1952-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1952-04-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1952-04-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1952-04-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1952-04-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1952-12-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1952-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1952-12-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1952-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1953-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1953-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1953-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1953-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1953-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1953-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1953-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1963-12-09T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1963-12-09T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1963-12-09T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1963-12-09T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1963-12-09T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1963-12-09T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1963-12-09T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1964-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1964-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1964-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1964-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1965-01-31T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1965-01-31T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1965-01-31T04:00:00+00:00 should be 01:00:00 AMST");
		t.equal(moment("1965-03-31T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1965-03-31T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1965-03-31T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1965-03-31T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1965-12-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1965-12-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1965-12-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1965-12-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1965-01-31T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1965-01-31T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-01-31T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1965-01-31T04:00:00+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1965-03-31T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1965-03-31T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1965-03-31T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1965-03-31T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-12-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1965-12-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1965-12-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1965-12-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1966-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1966-03-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1966-11-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1966-11-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1966-11-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1966-11-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1966-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1966-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1966-11-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1966-11-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1966-11-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1966-11-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1967-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1967-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1967-03-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1967-11-01T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1967-11-01T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1967-11-01T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1967-11-01T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1967-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1967-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1967-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1967-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1967-11-01T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1967-11-01T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1967-11-01T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1967-11-01T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1968-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1968-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1968-03-01T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("1968-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1968-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1968-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1968-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1985-11-02T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1985-11-02T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1985-11-02T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1985-11-02T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1985-11-02T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1985-11-02T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1985-11-02T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1986-03-15T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1986-03-15T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1986-03-15T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1986-10-25T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1986-10-25T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1986-10-25T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1986-10-25T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1986-03-15T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1986-03-15T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1986-03-15T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1986-03-15T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1986-10-25T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1986-10-25T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1986-10-25T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1986-10-25T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1987-02-14T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1987-02-14T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1987-02-14T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1987-10-25T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1987-10-25T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1987-02-14T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1987-02-14T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1987-02-14T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1987-02-14T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1987-10-25T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1987-10-25T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1987-10-25T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1987-10-25T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1988-02-07T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1988-02-07T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1988-02-07T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1988-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1988-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1988-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1988-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1988-02-07T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1988-02-07T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1988-02-07T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1988-02-07T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1988-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1988-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1988-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1988-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-01-29T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1989-01-29T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1989-01-29T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1989-01-29T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1989-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1989-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1989-01-29T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1989-01-29T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1989-01-29T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1989-01-29T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1989-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1989-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1989-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1989-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-02-11T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1990-02-11T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1990-02-11T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1990-02-11T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1990-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1990-10-21T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1990-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1990-10-21T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1990-02-11T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1990-02-11T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1990-02-11T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1990-02-11T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1990-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1990-10-21T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1990-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1990-10-21T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1991-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1991-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1991-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1991-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1991-10-20T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1991-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1991-10-20T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1991-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1991-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1991-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1991-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1991-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1991-10-20T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1991-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1991-10-20T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-02-09T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1992-02-09T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1992-02-09T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1992-02-09T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1992-10-25T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1992-10-25T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1992-10-25T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1992-10-25T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1992-02-09T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1992-02-09T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1992-02-09T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1992-02-09T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1992-10-25T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1992-10-25T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1992-10-25T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1992-10-25T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-01-31T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1993-01-31T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1993-01-31T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1993-01-31T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1993-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1993-10-17T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1993-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1993-10-17T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1993-01-31T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1993-01-31T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1993-01-31T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1993-01-31T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1993-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1993-10-17T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1993-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1993-10-17T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1994-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1994-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1994-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1994-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1994-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1994-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1994-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1994-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1994-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1994-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1994-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1994-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1994-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1994-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1994-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-02-19T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1995-02-19T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1995-02-19T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1995-02-19T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1995-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1995-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1995-02-19T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1995-02-19T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1995-02-19T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1995-02-19T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1995-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1995-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1995-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1995-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-02-11T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1996-02-11T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1996-02-11T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1996-02-11T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1996-10-06T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1996-10-06T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1996-10-06T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1996-10-06T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1996-02-11T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1996-02-11T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1996-02-11T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1996-02-11T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1996-10-06T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1996-10-06T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1996-10-06T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1996-10-06T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1997-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1997-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1997-02-16T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1997-10-06T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1997-10-06T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1997-10-06T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1997-10-06T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1997-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1997-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1997-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1997-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1997-10-06T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1997-10-06T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1997-10-06T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1997-10-06T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-01T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1998-03-01T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1998-03-01T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1998-03-01T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1998-10-11T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1998-10-11T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1998-10-11T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1998-10-11T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1998-03-01T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1998-03-01T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1998-03-01T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1998-03-01T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1998-10-11T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1998-10-11T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1998-10-11T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1998-10-11T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1999-02-21T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("1999-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "1999-02-21T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("1999-10-03T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "1999-10-03T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("1999-10-03T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "1999-10-03T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("1999-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "1999-02-21T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("1999-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "1999-02-21T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1999-10-03T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "1999-10-03T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("1999-10-03T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "1999-10-03T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-02-27T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2000-02-27T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2000-02-27T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2000-02-27T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2000-10-08T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2000-10-08T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2000-10-08T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2000-10-08T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2000-02-27T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2000-02-27T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2000-02-27T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2000-02-27T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2000-10-08T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2000-10-08T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2000-10-08T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2000-10-08T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2001-02-18T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2001-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2001-02-18T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2001-10-14T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2001-10-14T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2001-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2001-02-18T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2001-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2001-02-18T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2001-10-14T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2001-10-14T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2001-10-14T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2001-10-14T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2002-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2002-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2002-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2002-11-03T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2002-11-03T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2002-11-03T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2002-11-03T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2002-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2002-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2002-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2002-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2002-11-03T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2002-11-03T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2002-11-03T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2002-11-03T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2003-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2003-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2003-02-16T03:00:00+00:00 should be 23:00:00 AMT");

		t.equal(moment("2003-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2003-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2003-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2003-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-11-02T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2004-11-02T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2004-11-02T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2004-11-02T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2004-11-02T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2004-11-02T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2004-11-02T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2004-11-02T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2005-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2005-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2005-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2005-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2005-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2005-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2005-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2005-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2005-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2005-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2005-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2005-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2005-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2005-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2005-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-02-19T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2006-02-19T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2006-02-19T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2006-02-19T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2006-11-05T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2006-11-05T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2006-11-05T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2006-11-05T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2006-02-19T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2006-02-19T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2006-02-19T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2006-02-19T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2006-11-05T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2006-11-05T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2006-11-05T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2006-11-05T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-02-25T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2007-02-25T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2007-02-25T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2007-02-25T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2007-10-14T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2007-10-14T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2007-02-25T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2007-02-25T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2007-02-25T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2007-02-25T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2007-10-14T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2007-10-14T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2007-10-14T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2007-10-14T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2008-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2008-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2008-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2008-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2008-10-19T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2008-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2008-10-19T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2008-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2008-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2008-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2008-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2008-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2008-10-19T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2008-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2008-10-19T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-02-15T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2009-02-15T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2009-02-15T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2009-02-15T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2009-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2009-10-18T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2009-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2009-10-18T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2009-02-15T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2009-02-15T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2009-02-15T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2009-02-15T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2009-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2009-10-18T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2009-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2009-10-18T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2010-02-21T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2010-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2010-02-21T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2010-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2010-10-17T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2010-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2010-10-17T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2010-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2010-02-21T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2010-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2010-02-21T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2010-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2010-10-17T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2010-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2010-10-17T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2011-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2011-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2011-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2011-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2011-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2011-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2011-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2011-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2011-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2011-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2011-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2011-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2011-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2011-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2011-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-02-26T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2012-02-26T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2012-02-26T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2012-02-26T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2012-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2012-10-21T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2012-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2012-10-21T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2012-02-26T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2012-02-26T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2012-02-26T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2012-02-26T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2012-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2012-10-21T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2012-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2012-10-21T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2013-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2013-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2013-10-20T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2013-10-20T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2013-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2013-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2013-10-20T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2013-10-20T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2014-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2014-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2014-02-16T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2014-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2014-10-19T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2014-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2014-10-19T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2014-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2014-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2014-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2014-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2014-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2014-10-19T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2014-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2014-10-19T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2015-02-22T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2015-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2015-02-22T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2015-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2015-10-18T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2015-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2015-10-18T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2015-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2015-02-22T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2015-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2015-02-22T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2015-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2015-10-18T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2015-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2015-10-18T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2016-02-21T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2016-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2016-02-21T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2016-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2016-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2016-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2016-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2016-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2016-02-21T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2016-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2016-02-21T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2016-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2016-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2016-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2016-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-02-19T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2017-02-19T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2017-02-19T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2017-02-19T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2017-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2017-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2017-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2017-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2017-02-19T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2017-02-19T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2017-02-19T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2017-02-19T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2017-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2017-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2017-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2017-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2018-02-18T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2018-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2018-02-18T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2018-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2018-10-21T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2018-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2018-10-21T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2018-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2018-02-18T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2018-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2018-02-18T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2018-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2018-10-21T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2018-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2018-10-21T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2019-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2019-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2019-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2019-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2019-10-20T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2019-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2019-10-20T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2019-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2019-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2019-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2019-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2019-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2019-10-20T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2019-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2019-10-20T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2020-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2020-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2020-02-16T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2020-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2020-10-18T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2020-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2020-10-18T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2020-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2020-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2020-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2020-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2020-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2020-10-18T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2020-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2020-10-18T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2021-02-21T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2021-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2021-02-21T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2021-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2021-10-17T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2021-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2021-10-17T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2021-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2021-02-21T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2021-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2021-02-21T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2021-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2021-10-17T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2021-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2021-10-17T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2022-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2022-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2022-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2022-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2022-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2022-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2022-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2022-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2022-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2022-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2022-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2022-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2022-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2022-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2022-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-02-26T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2023-02-26T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2023-02-26T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2023-02-26T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2023-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2023-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2023-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2023-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2023-02-26T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2023-02-26T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2023-02-26T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2023-02-26T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2023-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2023-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2023-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2023-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2024-02-18T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2024-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2024-02-18T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2024-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2024-10-20T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2024-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2024-10-20T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2024-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2024-02-18T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2024-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2024-02-18T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2024-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2024-10-20T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2024-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2024-10-20T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2025-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2025-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2025-02-16T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2025-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2025-10-19T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2025-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2025-10-19T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2025-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2025-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2025-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2025-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2025-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2025-10-19T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2025-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2025-10-19T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2026-02-22T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2026-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2026-02-22T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2026-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2026-10-18T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2026-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2026-10-18T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2026-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2026-02-22T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2026-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2026-02-22T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2026-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2026-10-18T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2026-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2026-10-18T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2027-02-21T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2027-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2027-02-21T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2027-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2027-10-17T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2027-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2027-10-17T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2027-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2027-02-21T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2027-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2027-02-21T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2027-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2027-10-17T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2027-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2027-10-17T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2028-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2028-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2028-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2028-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2028-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2028-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2028-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2028-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2028-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2028-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2028-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2028-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2028-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2028-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2028-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2029-02-18T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2029-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2029-02-18T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2029-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2029-10-21T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2029-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2029-10-21T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2029-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2029-02-18T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2029-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2029-02-18T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2029-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2029-10-21T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2029-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2029-10-21T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2030-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2030-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2030-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2030-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2030-10-20T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2030-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2030-10-20T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2030-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2030-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2030-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2030-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2030-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2030-10-20T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2030-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2030-10-20T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2031-02-16T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2031-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2031-02-16T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2031-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2031-10-19T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2031-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2031-10-19T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2031-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2031-02-16T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2031-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2031-02-16T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2031-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2031-10-19T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2031-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2031-10-19T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-02-15T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2032-02-15T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2032-02-15T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2032-02-15T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2032-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2032-10-17T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2032-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2032-10-17T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2032-02-15T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2032-02-15T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2032-02-15T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2032-02-15T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2032-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2032-10-17T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2032-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2032-10-17T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2033-02-20T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2033-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2033-02-20T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2033-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2033-10-16T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2033-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2033-10-16T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2033-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2033-02-20T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2033-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2033-02-20T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2033-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2033-10-16T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2033-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2033-10-16T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-02-26T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2034-02-26T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2034-02-26T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2034-02-26T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2034-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2034-10-15T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2034-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2034-10-15T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2034-02-26T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2034-02-26T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2034-02-26T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2034-02-26T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2034-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2034-10-15T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2034-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2034-10-15T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2035-02-18T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2035-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2035-02-18T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2035-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2035-10-21T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2035-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2035-10-21T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2035-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2035-02-18T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2035-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2035-02-18T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2035-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2035-10-21T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2035-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2035-10-21T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2036-02-17T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2036-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2036-02-17T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2036-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2036-10-19T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2036-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2036-10-19T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2036-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2036-02-17T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2036-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2036-02-17T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2036-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2036-10-19T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2036-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2036-10-19T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2037-02-22T02:59:59+00:00 should be 23:59:59 AMST");
		t.equal(moment("2037-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2037-02-22T03:00:00+00:00 should be 23:00:00 AMT");
		t.equal(moment("2037-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2037-10-18T03:59:59+00:00 should be 23:59:59 AMT");
		t.equal(moment("2037-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2037-10-18T04:00:00+00:00 should be 01:00:00 AMST");

		t.equal(moment("2037-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2037-02-22T02:59:59+00:00 should be 180 minutes offset in AMST");
		t.equal(moment("2037-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2037-02-22T03:00:00+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2037-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2037-10-18T03:59:59+00:00 should be 240 minutes offset in AMT");
		t.equal(moment("2037-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2037-10-18T04:00:00+00:00 should be 180 minutes offset in AMST");

		t.done();
	}
};
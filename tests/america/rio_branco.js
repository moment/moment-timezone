var moment = require("../../index");

exports["America/Rio_Branco"] = {

	"1914" : function (t) {
		t.equal(moment("1914-01-01T04:31:11+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1914-01-01T04:31:11+00:00 should be 23:59:59 LMT");
		t.equal(moment("1914-01-01T04:31:12+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:31:12", "1914-01-01T04:31:12+00:00 should be 23:31:12 ACT");

		t.equal(moment("1914-01-01T04:31:11+00:00").tz("America/Rio_Branco").zone(), 16272 / 60, "1914-01-01T04:31:11+00:00 should be 16272 / 60 minutes offset in LMT");
		t.equal(moment("1914-01-01T04:31:12+00:00").tz("America/Rio_Branco").zone(), 300, "1914-01-01T04:31:12+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-10-03T15:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "10:59:59", "1931-10-03T15:59:59+00:00 should be 10:59:59 ACT");
		t.equal(moment("1931-10-03T16:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "12:00:00", "1931-10-03T16:00:00+00:00 should be 12:00:00 ACST");

		t.equal(moment("1931-10-03T15:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1931-10-03T15:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1931-10-03T16:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1931-10-03T16:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1932-04-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1932-04-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1932-04-01T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1932-10-03T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1932-10-03T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1932-10-03T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1932-10-03T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1932-04-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1932-04-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1932-04-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1932-04-01T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1932-10-03T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1932-10-03T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1932-10-03T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1932-10-03T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1933-04-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1933-04-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1933-04-01T04:00:00+00:00 should be 23:00:00 ACT");

		t.equal(moment("1933-04-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1933-04-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1933-04-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1933-04-01T04:00:00+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-12-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1949-12-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1949-12-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1949-12-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1949-12-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1949-12-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1949-12-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1949-12-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-16T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "00:59:59", "1950-04-16T04:59:59+00:00 should be 00:59:59 ACST");
		t.equal(moment("1950-04-16T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "00:00:00", "1950-04-16T05:00:00+00:00 should be 00:00:00 ACT");
		t.equal(moment("1950-12-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1950-12-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1950-12-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1950-12-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1950-04-16T04:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1950-04-16T04:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1950-04-16T05:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1950-04-16T05:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1950-12-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1950-12-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1950-12-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1950-12-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1951-04-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1951-04-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1951-04-01T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1951-12-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1951-12-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1951-12-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1951-12-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1951-04-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1951-04-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1951-04-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1951-04-01T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1951-12-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1951-12-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1951-12-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1951-12-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1952-04-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1952-04-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1952-04-01T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1952-12-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1952-12-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1952-12-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1952-12-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1952-04-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1952-04-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1952-04-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1952-04-01T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1952-12-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1952-12-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1952-12-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1952-12-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-03-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1953-03-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1953-03-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1953-03-01T04:00:00+00:00 should be 23:00:00 ACT");

		t.equal(moment("1953-03-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1953-03-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1953-03-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1953-03-01T04:00:00+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-12-09T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1963-12-09T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1963-12-09T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1963-12-09T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1963-12-09T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1963-12-09T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1963-12-09T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1963-12-09T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1964-03-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1964-03-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1964-03-01T04:00:00+00:00 should be 23:00:00 ACT");

		t.equal(moment("1964-03-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1964-03-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1964-03-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1964-03-01T04:00:00+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-01-31T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1965-01-31T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1965-01-31T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1965-01-31T05:00:00+00:00 should be 01:00:00 ACST");
		t.equal(moment("1965-03-31T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1965-03-31T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1965-03-31T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1965-03-31T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1965-12-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1965-12-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1965-12-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1965-12-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1965-01-31T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1965-01-31T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1965-01-31T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1965-01-31T05:00:00+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1965-03-31T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1965-03-31T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1965-03-31T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1965-03-31T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1965-12-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1965-12-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1965-12-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1965-12-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1966-03-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1966-03-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1966-03-01T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1966-11-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1966-11-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1966-11-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1966-11-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1966-03-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1966-03-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1966-03-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1966-03-01T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1966-11-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1966-11-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1966-11-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1966-11-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-03-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1967-03-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1967-03-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1967-03-01T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1967-11-01T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1967-11-01T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1967-11-01T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1967-11-01T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1967-03-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1967-03-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1967-03-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1967-03-01T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1967-11-01T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1967-11-01T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1967-11-01T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1967-11-01T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-03-01T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1968-03-01T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1968-03-01T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1968-03-01T04:00:00+00:00 should be 23:00:00 ACT");

		t.equal(moment("1968-03-01T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1968-03-01T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1968-03-01T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1968-03-01T04:00:00+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-11-02T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1985-11-02T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1985-11-02T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1985-11-02T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1985-11-02T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1985-11-02T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1985-11-02T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1985-11-02T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-15T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1986-03-15T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1986-03-15T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1986-03-15T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1986-10-25T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1986-10-25T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1986-10-25T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1986-10-25T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1986-03-15T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1986-03-15T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1986-03-15T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1986-03-15T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1986-10-25T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1986-10-25T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1986-10-25T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1986-10-25T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-14T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1987-02-14T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1987-02-14T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1987-02-14T04:00:00+00:00 should be 23:00:00 ACT");
		t.equal(moment("1987-10-25T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1987-10-25T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("1987-10-25T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "1987-10-25T05:00:00+00:00 should be 01:00:00 ACST");

		t.equal(moment("1987-02-14T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1987-02-14T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1987-02-14T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1987-02-14T04:00:00+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1987-10-25T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "1987-10-25T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("1987-10-25T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "1987-10-25T05:00:00+00:00 should be 240 minutes offset in ACST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-02-07T03:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "1988-02-07T03:59:59+00:00 should be 23:59:59 ACST");
		t.equal(moment("1988-02-07T04:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:00:00", "1988-02-07T04:00:00+00:00 should be 23:00:00 ACT");

		t.equal(moment("1988-02-07T03:59:59+00:00").tz("America/Rio_Branco").zone(), 240, "1988-02-07T03:59:59+00:00 should be 240 minutes offset in ACST");
		t.equal(moment("1988-02-07T04:00:00+00:00").tz("America/Rio_Branco").zone(), 300, "1988-02-07T04:00:00+00:00 should be 300 minutes offset in ACT");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-06-24T04:59:59+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "23:59:59", "2008-06-24T04:59:59+00:00 should be 23:59:59 ACT");
		t.equal(moment("2008-06-24T05:00:00+00:00").tz("America/Rio_Branco").format("HH:mm:ss"), "01:00:00", "2008-06-24T05:00:00+00:00 should be 01:00:00 AMT");

		t.equal(moment("2008-06-24T04:59:59+00:00").tz("America/Rio_Branco").zone(), 300, "2008-06-24T04:59:59+00:00 should be 300 minutes offset in ACT");
		t.equal(moment("2008-06-24T05:00:00+00:00").tz("America/Rio_Branco").zone(), 240, "2008-06-24T05:00:00+00:00 should be 240 minutes offset in AMT");

		t.done();
	}
};
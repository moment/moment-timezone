var moment = require("../../moment-timezone");

exports["America/Halifax"] = {

	"1902" : function (t) {
		t.equal(moment("1902-06-15T04:14:23+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1902-06-15T04:14:23+00:00 should be 23:59:59 LMT");
		t.equal(moment("1902-06-15T04:14:24+00:00").tz("America/Halifax").format("HH:mm:ss"), "00:14:24", "1902-06-15T04:14:24+00:00 should be 00:14:24 AST");

		t.equal(moment("1902-06-15T04:14:23+00:00").tz("America/Halifax").zone(), 254, "1902-06-15T04:14:23+00:00 should be 254 minutes offset in LMT");
		t.equal(moment("1902-06-15T04:14:24+00:00").tz("America/Halifax").zone(), 240, "1902-06-15T04:14:24+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1916" : function (t) {
		t.equal(moment("1916-04-01T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1916-04-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1916-04-01T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1916-04-01T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1916-10-01T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1916-10-01T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1916-10-01T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1916-10-01T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1916-04-01T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1916-04-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1916-04-01T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1916-04-01T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1916-10-01T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1916-10-01T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1916-10-01T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1916-10-01T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-04-14T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1918-04-14T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1918-04-14T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1918-04-14T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1918-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1918-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1918-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1918-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1918-04-14T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1918-04-14T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1918-04-14T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1918-04-14T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1918-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1918-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1918-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1918-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-05-09T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1920-05-09T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1920-05-09T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1920-05-09T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1920-08-29T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1920-08-29T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1920-08-29T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1920-08-29T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1920-05-09T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1920-05-09T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1920-05-09T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1920-05-09T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1920-08-29T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1920-08-29T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1920-08-29T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1920-08-29T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-05-06T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1921-05-06T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1921-05-06T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1921-05-06T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1921-09-05T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1921-09-05T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1921-09-05T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1921-09-05T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1921-05-06T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1921-05-06T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1921-05-06T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1921-05-06T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1921-09-05T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1921-09-05T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1921-09-05T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1921-09-05T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-04-30T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1922-04-30T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1922-04-30T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1922-04-30T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1922-09-05T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1922-09-05T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1922-09-05T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1922-09-05T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1922-04-30T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1922-04-30T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1922-04-30T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1922-04-30T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1922-09-05T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1922-09-05T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1922-09-05T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1922-09-05T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1923" : function (t) {
		t.equal(moment("1923-05-06T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1923-05-06T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1923-05-06T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1923-05-06T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1923-09-04T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1923-09-04T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1923-09-04T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1923-09-04T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1923-05-06T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1923-05-06T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1923-05-06T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1923-05-06T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1923-09-04T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1923-09-04T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1923-09-04T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1923-09-04T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-05-04T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1924-05-04T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1924-05-04T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1924-05-04T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1924-09-15T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1924-09-15T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1924-09-15T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1924-09-15T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1924-05-04T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1924-05-04T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1924-05-04T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1924-05-04T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1924-09-15T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1924-09-15T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1924-09-15T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1924-09-15T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1925" : function (t) {
		t.equal(moment("1925-05-03T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1925-05-03T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1925-05-03T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1925-05-03T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1925-09-28T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1925-09-28T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1925-09-28T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1925-09-28T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1925-05-03T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1925-05-03T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1925-05-03T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1925-05-03T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1925-09-28T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1925-09-28T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1925-09-28T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1925-09-28T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-05-16T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1926-05-16T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1926-05-16T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1926-05-16T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1926-09-13T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1926-09-13T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1926-09-13T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1926-09-13T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1926-05-16T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1926-05-16T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1926-05-16T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1926-05-16T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1926-09-13T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1926-09-13T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1926-09-13T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1926-09-13T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-05-01T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1927-05-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1927-05-01T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1927-05-01T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1927-09-26T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1927-09-26T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1927-09-26T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1927-09-26T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1927-05-01T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1927-05-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1927-05-01T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1927-05-01T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1927-09-26T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1927-09-26T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1927-09-26T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1927-09-26T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-05-13T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1928-05-13T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1928-05-13T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1928-05-13T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1928-09-09T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1928-09-09T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1928-09-09T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1928-09-09T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1928-05-13T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1928-05-13T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1928-05-13T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1928-05-13T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1928-09-09T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1928-09-09T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1928-09-09T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1928-09-09T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-05-12T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1929-05-12T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1929-05-12T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1929-05-12T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1929-09-03T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1929-09-03T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1929-09-03T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1929-09-03T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1929-05-12T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1929-05-12T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1929-05-12T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1929-05-12T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1929-09-03T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1929-09-03T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1929-09-03T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1929-09-03T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-05-11T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1930-05-11T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1930-05-11T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1930-05-11T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1930-09-15T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1930-09-15T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1930-09-15T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1930-09-15T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1930-05-11T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1930-05-11T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1930-05-11T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1930-05-11T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1930-09-15T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1930-09-15T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1930-09-15T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1930-09-15T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-05-10T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1931-05-10T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1931-05-10T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1931-05-10T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1931-09-28T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1931-09-28T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1931-09-28T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1931-09-28T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1931-05-10T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1931-05-10T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1931-05-10T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1931-05-10T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1931-09-28T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1931-09-28T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1931-09-28T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1931-09-28T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-05-01T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1932-05-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1932-05-01T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1932-05-01T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1932-09-26T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1932-09-26T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1932-09-26T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1932-09-26T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1932-05-01T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1932-05-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1932-05-01T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1932-05-01T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1932-09-26T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1932-09-26T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1932-09-26T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1932-09-26T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-04-30T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1933-04-30T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1933-04-30T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1933-04-30T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1933-10-02T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1933-10-02T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1933-10-02T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1933-10-02T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1933-04-30T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1933-04-30T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1933-04-30T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1933-04-30T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1933-10-02T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1933-10-02T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1933-10-02T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1933-10-02T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-05-20T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1934-05-20T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1934-05-20T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1934-05-20T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1934-09-16T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1934-09-16T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1934-09-16T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1934-09-16T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1934-05-20T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1934-05-20T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1934-05-20T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1934-05-20T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1934-09-16T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1934-09-16T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1934-09-16T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1934-09-16T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-06-02T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1935-06-02T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1935-06-02T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1935-06-02T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1935-09-30T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1935-09-30T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1935-09-30T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1935-09-30T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1935-06-02T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1935-06-02T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1935-06-02T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1935-06-02T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1935-09-30T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1935-09-30T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1935-09-30T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1935-09-30T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-06-01T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1936-06-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1936-06-01T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1936-06-01T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1936-09-14T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1936-09-14T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1936-09-14T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1936-09-14T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1936-06-01T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1936-06-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1936-06-01T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1936-06-01T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1936-09-14T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1936-09-14T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1936-09-14T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1936-09-14T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-05-02T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1937-05-02T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1937-05-02T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1937-05-02T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1937-09-27T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1937-09-27T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1937-09-27T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1937-09-27T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1937-05-02T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1937-05-02T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1937-05-02T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1937-05-02T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1937-09-27T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1937-09-27T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1937-09-27T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1937-09-27T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-05-01T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1938-05-01T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1938-05-01T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1938-05-01T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1938-09-26T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1938-09-26T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1938-09-26T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1938-09-26T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1938-05-01T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1938-05-01T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1938-05-01T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1938-05-01T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1938-09-26T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1938-09-26T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1938-09-26T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1938-09-26T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-05-28T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1939-05-28T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1939-05-28T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1939-05-28T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1939-09-25T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1939-09-25T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1939-09-25T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1939-09-25T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1939-05-28T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1939-05-28T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1939-05-28T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1939-05-28T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1939-09-25T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1939-09-25T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1939-09-25T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1939-09-25T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-05-05T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1940-05-05T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1940-05-05T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1940-05-05T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1940-09-30T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1940-09-30T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1940-09-30T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1940-09-30T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1940-05-05T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1940-05-05T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1940-05-05T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1940-05-05T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1940-09-30T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1940-09-30T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1940-09-30T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1940-09-30T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-05-04T03:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1941-05-04T03:59:59+00:00 should be 23:59:59 AST");
		t.equal(moment("1941-05-04T04:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1941-05-04T04:00:00+00:00 should be 01:00:00 ADT");
		t.equal(moment("1941-09-29T02:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:59:59", "1941-09-29T02:59:59+00:00 should be 23:59:59 ADT");
		t.equal(moment("1941-09-29T03:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "23:00:00", "1941-09-29T03:00:00+00:00 should be 23:00:00 AST");

		t.equal(moment("1941-05-04T03:59:59+00:00").tz("America/Halifax").zone(), 240, "1941-05-04T03:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1941-05-04T04:00:00+00:00").tz("America/Halifax").zone(), 180, "1941-05-04T04:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1941-09-29T02:59:59+00:00").tz("America/Halifax").zone(), 180, "1941-09-29T02:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1941-09-29T03:00:00+00:00").tz("America/Halifax").zone(), 240, "1941-09-29T03:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1942-02-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1942-02-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1942-02-09T06:00:00+00:00 should be 03:00:00 AWT");

		t.equal(moment("1942-02-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1942-02-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1942-02-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1942-02-09T06:00:00+00:00 should be 180 minutes offset in AWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "19:59:59", "1945-08-14T22:59:59+00:00 should be 19:59:59 AWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "20:00:00", "1945-08-14T23:00:00+00:00 should be 20:00:00 APT");
		t.equal(moment("1945-09-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1945-09-30T04:59:59+00:00 should be 01:59:59 APT");
		t.equal(moment("1945-09-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1945-09-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Halifax").zone(), 180, "1945-08-14T22:59:59+00:00 should be 180 minutes offset in AWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Halifax").zone(), 180, "1945-08-14T23:00:00+00:00 should be 180 minutes offset in APT");
		t.equal(moment("1945-09-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1945-09-30T04:59:59+00:00 should be 180 minutes offset in APT");
		t.equal(moment("1945-09-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1945-09-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1946-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1946-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1946-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1946-09-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1946-09-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1946-09-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1946-09-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1946-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1946-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1946-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1946-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1946-09-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1946-09-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1946-09-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1946-09-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1947-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1947-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1947-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1947-09-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1947-09-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1947-09-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1947-09-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1947-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1947-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1947-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1947-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1947-09-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1947-09-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1947-09-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1947-09-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1948-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1948-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1948-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1948-09-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1948-09-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1948-09-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1948-09-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1948-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1948-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1948-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1948-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1948-09-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1948-09-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1948-09-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1948-09-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-24T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1949-04-24T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1949-04-24T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1949-04-24T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1949-09-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1949-09-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1949-09-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1949-09-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1949-04-24T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1949-04-24T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1949-04-24T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1949-04-24T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1949-09-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1949-09-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1949-09-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1949-09-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1951-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1951-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1951-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1951-09-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1951-09-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1951-09-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1951-09-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1951-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1951-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1951-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1951-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1951-09-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1951-09-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1951-09-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1951-09-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1952-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1952-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1952-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1952-09-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1952-09-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1952-09-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1952-09-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1952-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1952-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1952-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1952-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1952-09-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1952-09-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1952-09-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1952-09-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-26T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1953-04-26T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1953-04-26T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1953-04-26T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1953-09-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1953-09-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1953-09-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1953-09-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1953-04-26T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1953-04-26T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1953-04-26T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1953-04-26T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1953-09-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1953-09-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1953-09-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1953-09-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1954-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1954-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1954-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1954-09-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1954-09-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1954-09-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1954-09-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1954-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1954-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1954-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1954-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1954-09-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1954-09-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1954-09-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1954-09-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1956-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1956-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1956-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1956-09-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1956-09-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1956-09-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1956-09-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1956-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1956-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1956-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1956-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1956-09-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1956-09-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1956-09-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1956-09-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1957-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1957-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1957-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1957-09-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1957-09-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1957-09-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1957-09-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1957-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1957-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1957-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1957-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1957-09-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1957-09-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1957-09-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1957-09-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1958-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1958-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1958-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1958-09-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1958-09-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1958-09-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1958-09-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1958-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1958-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1958-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1958-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1958-09-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1958-09-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1958-09-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1958-09-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1959-04-26T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1959-04-26T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1959-04-26T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1959-09-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1959-09-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1959-09-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1959-09-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1959-04-26T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1959-04-26T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1959-04-26T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1959-04-26T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1959-09-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1959-09-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1959-09-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1959-09-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1962-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1962-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1962-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1962-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1962-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1962-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1962-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1962-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1962-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1962-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1962-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1962-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1962-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1962-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1962-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1963-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1963-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1963-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1963-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1963-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1963-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1963-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1963-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1963-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1963-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1963-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1963-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1963-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1963-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1963-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-26T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1964-04-26T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1964-04-26T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1964-04-26T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1964-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1964-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1964-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1964-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1964-04-26T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1964-04-26T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1964-04-26T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1964-04-26T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1964-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1964-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1964-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1964-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1965-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1965-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1965-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1965-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1965-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1965-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1965-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1965-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1965-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1965-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1965-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1965-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1965-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1965-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1965-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-24T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1966-04-24T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1966-04-24T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1966-04-24T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1966-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1966-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1966-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1966-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1966-04-24T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1966-04-24T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1966-04-24T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1966-04-24T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1966-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1966-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1966-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1966-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1967-04-30T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1967-04-30T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1967-04-30T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1967-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1967-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1967-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1967-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1967-04-30T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1967-04-30T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1967-04-30T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1967-04-30T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1967-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1967-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1967-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1967-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1968-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1968-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1968-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1968-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1968-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1968-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1968-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1968-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1968-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1968-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1968-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1968-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1968-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1968-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1968-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1969-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1969-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1969-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1969-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1969-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1969-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1969-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1969-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1969-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1969-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1969-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1969-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1969-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1969-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1969-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1970-04-26T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1970-04-26T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1970-04-26T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1970-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1970-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1970-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1970-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1970-04-26T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1970-04-26T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1970-04-26T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1970-04-26T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1970-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1970-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1970-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1970-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1971-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1971-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1971-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1971-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1971-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1971-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1971-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1971-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1971-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1971-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1971-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1971-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1971-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1971-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1971-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1972-04-30T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1972-04-30T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1972-04-30T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1972-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1972-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1972-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1972-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1972-04-30T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1972-04-30T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1972-04-30T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1972-04-30T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1972-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1972-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1972-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1972-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1973-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1973-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1973-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1973-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1973-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1973-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1973-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1973-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1973-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1973-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1973-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1973-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1973-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1973-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1973-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1974-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1974-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1974-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1974-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1974-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1974-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1974-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1974-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1974-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1974-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1974-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1974-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1974-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1974-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1974-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1975-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1975-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1975-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1975-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1975-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1975-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1975-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1975-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1975-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1975-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1975-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1975-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1975-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1975-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1975-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1976-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1976-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1976-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1976-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1976-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1976-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1976-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1976-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1976-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1976-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1976-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1976-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1976-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1976-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1976-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1977-04-24T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1977-04-24T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1977-04-24T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1977-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1977-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1977-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1977-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1977-04-24T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1977-04-24T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1977-04-24T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1977-04-24T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1977-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1977-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1977-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1977-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1978-04-30T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1978-04-30T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1978-04-30T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1978-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1978-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1978-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1978-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1978-04-30T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1978-04-30T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1978-04-30T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1978-04-30T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1978-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1978-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1978-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1978-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1979-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1979-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1979-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1979-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1979-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1979-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1979-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1979-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1979-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1979-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1979-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1979-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1979-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1979-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1979-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1980-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1980-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1980-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1980-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1980-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1980-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1980-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1980-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1980-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1980-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1980-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1980-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1980-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1980-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1981-04-26T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1981-04-26T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1981-04-26T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1981-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1981-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1981-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1981-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1981-04-26T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1981-04-26T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1981-04-26T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1981-04-26T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1981-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1981-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1981-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1981-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1982-04-25T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1982-04-25T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1982-04-25T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1982-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1982-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1982-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1982-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1982-04-25T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1982-04-25T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1982-04-25T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1982-04-25T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1982-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1982-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1982-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1982-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1983-04-24T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1983-04-24T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1983-04-24T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1983-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1983-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1983-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1983-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1983-04-24T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1983-04-24T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1983-04-24T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1983-04-24T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1983-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1983-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1983-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1983-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1984-04-29T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1984-04-29T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1984-04-29T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1984-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1984-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1984-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1984-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1984-04-29T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1984-04-29T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1984-04-29T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1984-04-29T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1984-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1984-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1984-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1984-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1985-04-28T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1985-04-28T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1985-04-28T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1985-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1985-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1985-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1985-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1985-04-28T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1985-04-28T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1985-04-28T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1985-04-28T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1985-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1985-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1985-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1985-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1986-04-27T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1986-04-27T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1986-04-27T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1986-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1986-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1986-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1986-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1986-04-27T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1986-04-27T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1986-04-27T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1986-04-27T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1986-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1986-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1986-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1986-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1987-04-05T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1987-04-05T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1987-04-05T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1987-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1987-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1987-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1987-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1987-04-05T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1987-04-05T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1987-04-05T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1987-04-05T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1987-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1987-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1987-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1987-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1988-04-03T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1988-04-03T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1988-04-03T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1988-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1988-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1988-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1988-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1988-04-03T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1988-04-03T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1988-04-03T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1988-04-03T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1988-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1988-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1988-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1988-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1989-04-02T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1989-04-02T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1989-04-02T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1989-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1989-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1989-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1989-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1989-04-02T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1989-04-02T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1989-04-02T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1989-04-02T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1989-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1989-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1989-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1989-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1990-04-01T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1990-04-01T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1990-04-01T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1990-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1990-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1990-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1990-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1990-04-01T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1990-04-01T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1990-04-01T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1990-04-01T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1990-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1990-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1990-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1990-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1991-04-07T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1991-04-07T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1991-04-07T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1991-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1991-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1991-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1991-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1991-04-07T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1991-04-07T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1991-04-07T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1991-04-07T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1991-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1991-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1991-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1991-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1992-04-05T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1992-04-05T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1992-04-05T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1992-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1992-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1992-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1992-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1992-04-05T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1992-04-05T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1992-04-05T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1992-04-05T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1992-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1992-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1992-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1992-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1993-04-04T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1993-04-04T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1993-04-04T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1993-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1993-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1993-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1993-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1993-04-04T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1993-04-04T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1993-04-04T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1993-04-04T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1993-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1993-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1993-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1993-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1994-04-03T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1994-04-03T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1994-04-03T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1994-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1994-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1994-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1994-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1994-04-03T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1994-04-03T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1994-04-03T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1994-04-03T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1994-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1994-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1994-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1994-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1995-04-02T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1995-04-02T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1995-04-02T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1995-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1995-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1995-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1995-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1995-04-02T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1995-04-02T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1995-04-02T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1995-04-02T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1995-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1995-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1995-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1995-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1996-04-07T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1996-04-07T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1996-04-07T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1996-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1996-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1996-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1996-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1996-04-07T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1996-04-07T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1996-04-07T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1996-04-07T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1996-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1996-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1996-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1996-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1997-04-06T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1997-04-06T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1997-04-06T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1997-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1997-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1997-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1997-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1997-04-06T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1997-04-06T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1997-04-06T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1997-04-06T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1997-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1997-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1997-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1997-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1998-04-05T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1998-04-05T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1998-04-05T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1998-10-25T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1998-10-25T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1998-10-25T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1998-10-25T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1998-04-05T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1998-04-05T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1998-04-05T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1998-04-05T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1998-10-25T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1998-10-25T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1998-10-25T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1998-10-25T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1999-04-04T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("1999-04-04T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "1999-04-04T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("1999-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "1999-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("1999-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "1999-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("1999-04-04T05:59:59+00:00").tz("America/Halifax").zone(), 240, "1999-04-04T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("1999-04-04T06:00:00+00:00").tz("America/Halifax").zone(), 180, "1999-04-04T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1999-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "1999-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("1999-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "1999-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2000-04-02T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2000-04-02T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2000-04-02T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2000-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2000-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2000-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2000-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2000-04-02T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2000-04-02T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2000-04-02T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2000-04-02T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2000-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2000-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2000-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2000-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2001-04-01T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2001-04-01T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2001-04-01T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2001-10-28T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2001-10-28T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2001-10-28T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2001-10-28T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2001-04-01T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2001-04-01T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2001-04-01T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2001-04-01T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2001-10-28T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2001-10-28T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2001-10-28T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2001-10-28T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2002-04-07T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2002-04-07T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2002-04-07T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2002-10-27T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2002-10-27T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2002-10-27T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2002-10-27T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2002-04-07T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2002-04-07T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2002-04-07T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2002-04-07T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2002-10-27T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2002-10-27T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2002-10-27T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2002-10-27T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2003-04-06T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2003-04-06T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2003-04-06T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2003-10-26T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2003-10-26T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2003-10-26T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2003-10-26T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2003-04-06T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2003-04-06T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2003-04-06T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2003-04-06T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2003-10-26T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2003-10-26T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2003-10-26T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2003-10-26T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2004-04-04T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2004-04-04T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2004-04-04T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2004-10-31T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2004-10-31T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2004-10-31T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2004-10-31T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2004-04-04T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2004-04-04T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2004-04-04T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2004-04-04T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2004-10-31T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2004-10-31T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2004-10-31T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2004-10-31T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2005-04-03T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2005-04-03T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2005-04-03T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2005-10-30T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2005-10-30T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2005-10-30T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2005-10-30T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2005-04-03T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2005-04-03T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2005-04-03T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2005-04-03T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2005-10-30T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2005-10-30T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2005-10-30T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2005-10-30T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2006-04-02T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2006-04-02T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2006-04-02T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2006-10-29T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2006-10-29T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2006-10-29T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2006-10-29T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2006-04-02T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2006-04-02T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2006-04-02T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2006-04-02T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2006-10-29T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2006-10-29T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2006-10-29T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2006-10-29T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2007-03-11T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2007-03-11T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2007-03-11T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2007-11-04T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2007-11-04T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2007-11-04T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2007-11-04T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2007-03-11T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2007-03-11T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2007-03-11T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2007-03-11T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2007-11-04T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2007-11-04T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2007-11-04T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2007-11-04T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2008-03-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2008-03-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2008-03-09T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2008-11-02T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2008-11-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2008-11-02T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2008-11-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2008-03-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2008-03-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2008-03-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2008-03-09T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2008-11-02T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2008-11-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2008-11-02T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2008-11-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2009-03-08T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2009-03-08T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2009-03-08T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2009-11-01T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2009-11-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2009-11-01T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2009-11-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2009-03-08T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2009-03-08T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2009-03-08T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2009-03-08T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2009-11-01T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2009-11-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2009-11-01T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2009-11-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2010-03-14T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2010-03-14T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2010-03-14T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2010-11-07T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2010-11-07T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2010-11-07T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2010-11-07T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2010-03-14T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2010-03-14T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2010-03-14T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2010-03-14T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2010-11-07T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2010-11-07T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2010-11-07T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2010-11-07T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2011-03-13T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2011-03-13T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2011-03-13T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2011-11-06T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2011-11-06T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2011-11-06T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2011-11-06T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2011-03-13T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2011-03-13T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2011-03-13T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2011-03-13T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2011-11-06T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2011-11-06T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2011-11-06T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2011-11-06T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2012-03-11T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2012-03-11T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2012-03-11T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2012-11-04T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2012-11-04T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2012-11-04T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2012-11-04T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2012-03-11T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2012-03-11T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2012-03-11T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2012-03-11T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2012-11-04T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2012-11-04T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2012-11-04T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2012-11-04T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2013-03-10T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2013-03-10T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2013-03-10T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2013-11-03T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2013-11-03T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2013-03-10T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2013-03-10T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2013-03-10T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2013-03-10T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2013-11-03T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2013-11-03T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2014-03-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2014-03-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2014-03-09T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2014-11-02T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2014-11-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2014-11-02T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2014-11-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2014-03-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2014-03-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2014-03-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2014-03-09T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2014-11-02T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2014-11-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2014-11-02T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2014-11-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2015-03-08T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2015-03-08T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2015-03-08T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2015-11-01T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2015-11-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2015-11-01T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2015-11-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2015-03-08T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2015-03-08T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2015-03-08T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2015-03-08T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2015-11-01T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2015-11-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2015-11-01T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2015-11-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2016-03-13T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2016-03-13T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2016-03-13T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2016-11-06T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2016-11-06T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2016-11-06T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2016-11-06T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2016-03-13T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2016-03-13T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2016-03-13T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2016-03-13T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2016-11-06T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2016-11-06T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2016-11-06T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2016-11-06T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2017-03-12T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2017-03-12T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2017-03-12T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2017-11-05T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2017-11-05T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2017-11-05T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2017-11-05T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2017-03-12T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2017-03-12T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2017-03-12T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2017-03-12T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2017-11-05T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2017-11-05T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2017-11-05T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2017-11-05T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2018-03-11T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2018-03-11T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2018-03-11T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2018-11-04T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2018-11-04T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2018-11-04T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2018-11-04T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2018-03-11T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2018-03-11T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2018-03-11T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2018-03-11T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2018-11-04T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2018-11-04T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2018-11-04T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2018-11-04T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2019-03-10T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2019-03-10T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2019-03-10T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2019-11-03T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2019-11-03T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2019-11-03T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2019-11-03T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2019-03-10T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2019-03-10T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2019-03-10T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2019-03-10T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2019-11-03T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2019-11-03T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2019-11-03T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2019-11-03T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2020-03-08T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2020-03-08T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2020-03-08T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2020-11-01T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2020-11-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2020-11-01T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2020-11-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2020-03-08T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2020-03-08T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2020-03-08T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2020-03-08T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2020-11-01T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2020-11-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2020-11-01T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2020-11-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2021-03-14T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2021-03-14T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2021-03-14T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2021-11-07T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2021-11-07T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2021-11-07T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2021-11-07T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2021-03-14T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2021-03-14T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2021-03-14T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2021-03-14T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2021-11-07T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2021-11-07T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2021-11-07T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2021-11-07T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2022-03-13T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2022-03-13T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2022-03-13T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2022-11-06T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2022-11-06T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2022-11-06T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2022-11-06T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2022-03-13T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2022-03-13T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2022-03-13T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2022-03-13T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2022-11-06T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2022-11-06T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2022-11-06T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2022-11-06T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2023-03-12T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2023-03-12T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2023-03-12T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2023-11-05T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2023-11-05T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2023-11-05T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2023-11-05T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2023-03-12T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2023-03-12T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2023-03-12T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2023-03-12T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2023-11-05T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2023-11-05T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2023-11-05T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2023-11-05T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2024-03-10T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2024-03-10T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2024-03-10T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2024-11-03T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2024-11-03T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2024-11-03T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2024-11-03T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2024-03-10T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2024-03-10T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2024-03-10T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2024-03-10T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2024-11-03T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2024-11-03T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2024-11-03T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2024-11-03T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2025-03-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2025-03-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2025-03-09T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2025-11-02T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2025-11-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2025-11-02T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2025-11-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2025-03-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2025-03-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2025-03-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2025-03-09T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2025-11-02T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2025-11-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2025-11-02T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2025-11-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2026-03-08T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2026-03-08T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2026-03-08T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2026-11-01T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2026-11-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2026-11-01T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2026-11-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2026-03-08T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2026-03-08T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2026-03-08T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2026-03-08T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2026-11-01T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2026-11-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2026-11-01T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2026-11-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2027-03-14T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2027-03-14T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2027-03-14T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2027-11-07T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2027-11-07T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2027-11-07T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2027-11-07T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2027-03-14T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2027-03-14T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2027-03-14T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2027-03-14T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2027-11-07T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2027-11-07T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2027-11-07T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2027-11-07T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2028-03-12T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2028-03-12T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2028-03-12T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2028-11-05T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2028-11-05T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2028-11-05T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2028-11-05T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2028-03-12T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2028-03-12T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2028-03-12T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2028-03-12T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2028-11-05T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2028-11-05T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2028-11-05T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2028-11-05T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2029-03-11T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2029-03-11T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2029-03-11T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2029-11-04T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2029-11-04T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2029-11-04T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2029-11-04T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2029-03-11T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2029-03-11T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2029-03-11T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2029-03-11T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2029-11-04T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2029-11-04T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2029-11-04T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2029-11-04T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2030-03-10T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2030-03-10T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2030-03-10T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2030-11-03T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2030-11-03T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2030-11-03T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2030-11-03T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2030-03-10T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2030-03-10T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2030-03-10T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2030-03-10T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2030-11-03T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2030-11-03T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2030-11-03T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2030-11-03T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2031-03-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2031-03-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2031-03-09T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2031-11-02T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2031-11-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2031-11-02T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2031-11-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2031-03-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2031-03-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2031-03-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2031-03-09T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2031-11-02T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2031-11-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2031-11-02T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2031-11-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2032-03-14T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2032-03-14T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2032-03-14T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2032-11-07T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2032-11-07T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2032-11-07T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2032-11-07T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2032-03-14T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2032-03-14T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2032-03-14T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2032-03-14T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2032-11-07T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2032-11-07T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2032-11-07T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2032-11-07T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2033-03-13T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2033-03-13T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2033-03-13T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2033-11-06T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2033-11-06T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2033-11-06T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2033-11-06T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2033-03-13T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2033-03-13T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2033-03-13T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2033-03-13T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2033-11-06T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2033-11-06T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2033-11-06T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2033-11-06T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2034-03-12T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2034-03-12T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2034-03-12T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2034-11-05T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2034-11-05T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2034-11-05T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2034-11-05T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2034-03-12T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2034-03-12T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2034-03-12T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2034-03-12T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2034-11-05T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2034-11-05T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2034-11-05T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2034-11-05T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2035-03-11T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2035-03-11T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2035-03-11T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2035-11-04T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2035-11-04T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2035-11-04T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2035-11-04T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2035-03-11T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2035-03-11T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2035-03-11T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2035-03-11T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2035-11-04T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2035-11-04T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2035-11-04T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2035-11-04T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2036-03-09T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2036-03-09T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2036-03-09T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2036-11-02T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2036-11-02T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2036-11-02T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2036-11-02T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2036-03-09T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2036-03-09T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2036-03-09T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2036-03-09T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2036-11-02T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2036-11-02T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2036-11-02T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2036-11-02T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T05:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2037-03-08T05:59:59+00:00 should be 01:59:59 AST");
		t.equal(moment("2037-03-08T06:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "03:00:00", "2037-03-08T06:00:00+00:00 should be 03:00:00 ADT");
		t.equal(moment("2037-11-01T04:59:59+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:59:59", "2037-11-01T04:59:59+00:00 should be 01:59:59 ADT");
		t.equal(moment("2037-11-01T05:00:00+00:00").tz("America/Halifax").format("HH:mm:ss"), "01:00:00", "2037-11-01T05:00:00+00:00 should be 01:00:00 AST");

		t.equal(moment("2037-03-08T05:59:59+00:00").tz("America/Halifax").zone(), 240, "2037-03-08T05:59:59+00:00 should be 240 minutes offset in AST");
		t.equal(moment("2037-03-08T06:00:00+00:00").tz("America/Halifax").zone(), 180, "2037-03-08T06:00:00+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2037-11-01T04:59:59+00:00").tz("America/Halifax").zone(), 180, "2037-11-01T04:59:59+00:00 should be 180 minutes offset in ADT");
		t.equal(moment("2037-11-01T05:00:00+00:00").tz("America/Halifax").zone(), 240, "2037-11-01T05:00:00+00:00 should be 240 minutes offset in AST");

		t.done();
	}
};
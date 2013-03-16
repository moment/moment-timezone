var moment = require("../../moment-timezone");

exports["Europe/Lisbon"] = {

	"1912" : function (t) {
		t.equal(moment("1912-01-01T00:36:31+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1912-01-01T00:36:31+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-01-01T00:36:32+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:36:32", "1912-01-01T00:36:32+00:00 should be 00:36:32 WET");

		t.equal(moment("1912-01-01T00:36:31+00:00").tz("Europe/Lisbon").zone(), 36, "1912-01-01T00:36:31+00:00 should be 36 minutes offset in LMT");
		t.equal(moment("1912-01-01T00:36:32+00:00").tz("Europe/Lisbon").zone(), 0, "1912-01-01T00:36:32+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1916" : function (t) {
		t.equal(moment("1916-06-17T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1916-06-17T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1916-06-17T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1916-06-17T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1916-10-31T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1916-10-31T23:59:59+00:00 should be 00:59:59 WEST");
		t.equal(moment("1916-11-01T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1916-11-01T00:00:00+00:00 should be 00:00:00 WET");

		t.equal(moment("1916-06-17T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1916-06-17T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1916-06-17T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1916-06-17T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1916-10-31T23:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1916-10-31T23:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1916-11-01T00:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1916-11-01T00:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1917" : function (t) {
		t.equal(moment("1917-02-28T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1917-02-28T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1917-02-28T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1917-02-28T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1917-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1917-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1917-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1917-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1917-02-28T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1917-02-28T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1917-02-28T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1917-02-28T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1917-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1917-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1917-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1917-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-03-01T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1918-03-01T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1918-03-01T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1918-03-01T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1918-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1918-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1918-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1918-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1918-03-01T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1918-03-01T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1918-03-01T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1918-03-01T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1918-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1918-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1918-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-02-28T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1919-02-28T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1919-02-28T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1919-02-28T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1919-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1919-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1919-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1919-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1919-02-28T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1919-02-28T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1919-02-28T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1919-02-28T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1919-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1919-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1919-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1919-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-02-29T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1920-02-29T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1920-02-29T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1920-02-29T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1920-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1920-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1920-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1920-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1920-02-29T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1920-02-29T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1920-02-29T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1920-02-29T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1920-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1920-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1920-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1920-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-02-28T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1921-02-28T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1921-02-28T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1921-02-28T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1921-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1921-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1921-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1921-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1921-02-28T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1921-02-28T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1921-02-28T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1921-02-28T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1921-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1921-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1921-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1921-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-04-16T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1924-04-16T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1924-04-16T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1924-04-16T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1924-10-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1924-10-14T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1924-10-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1924-10-14T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1924-04-16T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1924-04-16T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1924-04-16T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1924-04-16T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1924-10-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1924-10-14T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1924-10-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1924-10-14T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-04-17T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1926-04-17T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1926-04-17T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1926-04-17T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1926-10-02T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1926-10-02T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1926-10-02T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1926-10-02T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1926-04-17T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1926-04-17T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1926-04-17T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1926-04-17T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1926-10-02T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1926-10-02T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1926-10-02T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1926-10-02T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-04-09T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1927-04-09T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1927-04-09T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1927-04-09T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1927-10-01T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1927-10-01T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1927-10-01T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1927-10-01T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1927-04-09T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1927-04-09T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1927-04-09T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1927-04-09T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1927-10-01T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1927-10-01T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1927-10-01T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1927-10-01T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-04-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1928-04-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1928-04-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1928-04-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1928-10-06T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1928-10-06T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1928-10-06T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1928-10-06T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1928-04-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1928-04-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1928-04-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1928-04-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1928-10-06T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1928-10-06T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1928-10-06T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1928-10-06T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-04-20T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1929-04-20T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1929-04-20T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1929-04-20T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1929-10-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1929-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1929-10-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1929-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1929-04-20T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1929-04-20T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1929-04-20T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1929-04-20T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1929-10-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1929-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1929-10-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1929-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-04-18T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1931-04-18T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1931-04-18T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1931-04-18T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1931-10-03T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1931-10-03T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1931-10-03T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1931-10-03T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1931-04-18T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1931-04-18T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1931-04-18T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1931-04-18T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1931-10-03T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1931-10-03T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1931-10-03T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1931-10-03T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-04-02T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1932-04-02T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1932-04-02T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1932-04-02T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1932-10-01T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1932-10-01T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1932-10-01T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1932-10-01T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1932-04-02T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1932-04-02T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1932-04-02T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1932-04-02T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1932-10-01T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1932-10-01T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1932-10-01T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1932-10-01T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-04-07T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1934-04-07T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1934-04-07T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1934-04-07T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1934-10-06T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1934-10-06T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1934-10-06T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1934-10-06T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1934-04-07T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1934-04-07T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1934-04-07T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1934-04-07T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1934-10-06T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1934-10-06T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1934-10-06T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1934-10-06T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-03-30T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1935-03-30T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1935-03-30T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1935-03-30T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1935-10-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1935-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1935-10-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1935-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1935-03-30T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1935-03-30T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1935-03-30T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1935-03-30T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1935-10-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1935-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1935-10-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1935-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-04-18T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1936-04-18T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1936-04-18T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1936-04-18T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1936-10-03T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1936-10-03T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1936-10-03T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1936-10-03T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1936-04-18T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1936-04-18T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1936-04-18T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1936-04-18T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1936-10-03T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1936-10-03T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1936-10-03T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1936-10-03T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-04-03T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1937-04-03T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1937-04-03T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1937-04-03T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1937-10-02T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1937-10-02T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1937-10-02T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1937-10-02T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1937-04-03T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1937-04-03T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1937-04-03T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1937-04-03T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1937-10-02T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1937-10-02T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1937-10-02T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1937-10-02T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-03-26T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1938-03-26T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1938-03-26T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1938-03-26T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1938-10-01T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1938-10-01T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1938-10-01T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1938-10-01T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1938-03-26T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1938-03-26T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1938-03-26T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1938-03-26T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1938-10-01T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1938-10-01T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1938-10-01T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1938-10-01T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-04-15T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1939-04-15T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1939-04-15T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1939-04-15T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1939-11-18T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1939-11-18T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1939-11-18T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1939-11-18T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1939-04-15T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1939-04-15T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1939-04-15T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1939-04-15T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1939-11-18T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1939-11-18T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1939-11-18T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1939-11-18T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-02-24T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1940-02-24T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1940-02-24T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1940-02-24T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1940-10-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1940-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1940-10-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1940-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1940-02-24T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1940-02-24T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1940-02-24T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1940-02-24T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1940-10-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1940-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1940-10-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1940-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-04-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1941-04-05T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1941-04-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1941-04-05T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1941-10-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1941-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1941-10-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1941-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1941-04-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1941-04-05T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1941-04-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1941-04-05T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1941-10-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1941-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1941-10-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1941-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-03-14T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1942-03-14T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1942-03-14T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1942-03-14T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1942-04-25T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1942-04-25T21:59:59+00:00 should be 22:59:59 WEST");
		t.equal(moment("1942-04-25T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1942-04-25T22:00:00+00:00 should be 00:00:00 WEMT");
		t.equal(moment("1942-08-15T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1942-08-15T21:59:59+00:00 should be 23:59:59 WEMT");
		t.equal(moment("1942-08-15T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1942-08-15T22:00:00+00:00 should be 23:00:00 WEST");
		t.equal(moment("1942-10-24T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1942-10-24T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1942-10-24T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1942-10-24T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1942-03-14T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1942-03-14T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1942-03-14T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1942-03-14T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1942-04-25T21:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1942-04-25T21:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1942-04-25T22:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1942-04-25T22:00:00+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1942-08-15T21:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1942-08-15T21:59:59+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1942-08-15T22:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1942-08-15T22:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1942-10-24T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1942-10-24T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1942-10-24T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1942-10-24T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-13T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1943-03-13T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1943-03-13T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1943-03-13T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1943-04-17T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1943-04-17T21:59:59+00:00 should be 22:59:59 WEST");
		t.equal(moment("1943-04-17T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1943-04-17T22:00:00+00:00 should be 00:00:00 WEMT");
		t.equal(moment("1943-08-28T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1943-08-28T21:59:59+00:00 should be 23:59:59 WEMT");
		t.equal(moment("1943-08-28T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1943-08-28T22:00:00+00:00 should be 23:00:00 WEST");
		t.equal(moment("1943-10-30T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1943-10-30T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1943-10-30T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1943-10-30T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1943-03-13T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1943-03-13T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1943-03-13T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1943-03-13T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1943-04-17T21:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1943-04-17T21:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1943-04-17T22:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1943-04-17T22:00:00+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1943-08-28T21:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1943-08-28T21:59:59+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1943-08-28T22:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1943-08-28T22:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1943-10-30T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1943-10-30T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1943-10-30T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1943-10-30T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-11T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1944-03-11T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1944-03-11T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1944-03-11T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1944-04-22T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1944-04-22T21:59:59+00:00 should be 22:59:59 WEST");
		t.equal(moment("1944-04-22T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1944-04-22T22:00:00+00:00 should be 00:00:00 WEMT");
		t.equal(moment("1944-08-26T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1944-08-26T21:59:59+00:00 should be 23:59:59 WEMT");
		t.equal(moment("1944-08-26T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1944-08-26T22:00:00+00:00 should be 23:00:00 WEST");
		t.equal(moment("1944-10-28T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1944-10-28T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1944-10-28T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1944-10-28T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1944-03-11T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1944-03-11T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1944-03-11T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1944-03-11T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1944-04-22T21:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1944-04-22T21:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1944-04-22T22:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1944-04-22T22:00:00+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1944-08-26T21:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1944-08-26T21:59:59+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1944-08-26T22:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1944-08-26T22:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1944-10-28T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1944-10-28T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1944-10-28T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1944-10-28T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-03-10T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1945-03-10T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1945-03-10T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1945-03-10T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1945-04-21T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1945-04-21T21:59:59+00:00 should be 22:59:59 WEST");
		t.equal(moment("1945-04-21T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1945-04-21T22:00:00+00:00 should be 00:00:00 WEMT");
		t.equal(moment("1945-08-25T21:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1945-08-25T21:59:59+00:00 should be 23:59:59 WEMT");
		t.equal(moment("1945-08-25T22:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1945-08-25T22:00:00+00:00 should be 23:00:00 WEST");
		t.equal(moment("1945-10-27T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1945-10-27T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1945-10-27T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1945-10-27T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1945-03-10T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1945-03-10T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1945-03-10T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1945-03-10T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1945-04-21T21:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1945-04-21T21:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1945-04-21T22:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1945-04-21T22:00:00+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1945-08-25T21:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1945-08-25T21:59:59+00:00 should be -120 minutes offset in WEMT");
		t.equal(moment("1945-08-25T22:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1945-08-25T22:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1945-10-27T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1945-10-27T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1945-10-27T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1945-10-27T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-06T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "22:59:59", "1946-04-06T22:59:59+00:00 should be 22:59:59 WET");
		t.equal(moment("1946-04-06T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1946-04-06T23:00:00+00:00 should be 00:00:00 WEST");
		t.equal(moment("1946-10-05T22:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1946-10-05T22:59:59+00:00 should be 23:59:59 WEST");
		t.equal(moment("1946-10-05T23:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:00:00", "1946-10-05T23:00:00+00:00 should be 23:00:00 WET");

		t.equal(moment("1946-04-06T22:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1946-04-06T22:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1946-04-06T23:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1946-04-06T23:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1946-10-05T22:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1946-10-05T22:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1946-10-05T23:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1946-10-05T23:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-06T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1947-04-06T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1947-04-06T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1947-04-06T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1947-10-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1947-10-05T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1947-10-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1947-10-05T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1947-04-06T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1947-04-06T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1947-04-06T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1947-04-06T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1947-10-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1947-10-05T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1947-10-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1947-10-05T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1948-04-04T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1948-04-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1948-04-04T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1948-10-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1948-10-03T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1948-10-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1948-10-03T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1948-04-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1948-04-04T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1948-04-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1948-04-04T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1948-10-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1948-10-03T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1948-10-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1948-10-03T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1949-04-03T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1949-04-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1949-04-03T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1949-10-02T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1949-10-02T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1949-10-02T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1949-10-02T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1949-04-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1949-04-03T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1949-04-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1949-04-03T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1949-10-02T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1949-10-02T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1949-10-02T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1949-10-02T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-01T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1951-04-01T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1951-04-01T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1951-10-07T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1951-10-07T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1951-10-07T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1951-10-07T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1951-04-01T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1951-04-01T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1951-04-01T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1951-04-01T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1951-10-07T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1951-10-07T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1951-10-07T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1951-10-07T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-06T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1952-04-06T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1952-04-06T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1952-04-06T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1952-10-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1952-10-05T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1952-10-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1952-10-05T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1952-04-06T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1952-04-06T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1952-04-06T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1952-04-06T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1952-10-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1952-10-05T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1952-10-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1952-10-05T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1953-04-05T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1953-04-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1953-04-05T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1953-10-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1953-10-04T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1953-10-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1953-10-04T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1953-04-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1953-04-05T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1953-04-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1953-04-05T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1953-10-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1953-10-04T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1953-10-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1953-10-04T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1954-04-04T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1954-04-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1954-04-04T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1954-10-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1954-10-03T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1954-10-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1954-10-03T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1954-04-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1954-04-04T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1954-04-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1954-04-04T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1954-10-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1954-10-03T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1954-10-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1954-10-03T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1955-04-03T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1955-04-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1955-04-03T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1955-10-02T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1955-10-02T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1955-10-02T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1955-10-02T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1955-04-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1955-04-03T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1955-04-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1955-04-03T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1955-10-02T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1955-10-02T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1955-10-02T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1955-10-02T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-01T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1956-04-01T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1956-04-01T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1956-04-01T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1956-10-07T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1956-10-07T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1956-10-07T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1956-10-07T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1956-04-01T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1956-04-01T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1956-04-01T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1956-04-01T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1956-10-07T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1956-10-07T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1956-10-07T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1956-10-07T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-07T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1957-04-07T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1957-04-07T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1957-04-07T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1957-10-06T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1957-10-06T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1957-10-06T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1957-10-06T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1957-04-07T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1957-04-07T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1957-04-07T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1957-04-07T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1957-10-06T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1957-10-06T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1957-10-06T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1957-10-06T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-06T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1958-04-06T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1958-04-06T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1958-04-06T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1958-10-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1958-10-05T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1958-10-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1958-10-05T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1958-04-06T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1958-04-06T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1958-04-06T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1958-04-06T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1958-10-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1958-10-05T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1958-10-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1958-10-05T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1959-04-05T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1959-04-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1959-04-05T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1959-10-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1959-10-04T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1959-10-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1959-10-04T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1959-04-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1959-04-05T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1959-04-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1959-04-05T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1959-10-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1959-10-04T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1959-10-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1959-10-04T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1960-04-03T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1960-04-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1960-04-03T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1960-10-02T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1960-10-02T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1960-10-02T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1960-10-02T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1960-04-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1960-04-03T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1960-04-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1960-04-03T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1960-10-02T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1960-10-02T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1960-10-02T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1960-10-02T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-02T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1961-04-02T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1961-04-02T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1961-04-02T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1961-10-01T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1961-10-01T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1961-10-01T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1961-10-01T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1961-04-02T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1961-04-02T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1961-04-02T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1961-04-02T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1961-10-01T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1961-10-01T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1961-10-01T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1961-10-01T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-01T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1962-04-01T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1962-04-01T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1962-04-01T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1962-10-07T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1962-10-07T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1962-10-07T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1962-10-07T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1962-04-01T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1962-04-01T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1962-04-01T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1962-04-01T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1962-10-07T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1962-10-07T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1962-10-07T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1962-10-07T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-07T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1963-04-07T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1963-04-07T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1963-04-07T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1963-10-06T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1963-10-06T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1963-10-06T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1963-10-06T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1963-04-07T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1963-04-07T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1963-04-07T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1963-04-07T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1963-10-06T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1963-10-06T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1963-10-06T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1963-10-06T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-05T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1964-04-05T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1964-04-05T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1964-04-05T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1964-10-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1964-10-04T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1964-10-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1964-10-04T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1964-04-05T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1964-04-05T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1964-04-05T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1964-04-05T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1964-10-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1964-10-04T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1964-10-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1964-10-04T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-04T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1965-04-04T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1965-04-04T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1965-04-04T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1965-10-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1965-10-03T01:59:59+00:00 should be 02:59:59 WEST");
		t.equal(moment("1965-10-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1965-10-03T02:00:00+00:00 should be 02:00:00 WET");

		t.equal(moment("1965-04-04T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1965-04-04T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1965-04-04T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1965-04-04T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1965-10-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1965-10-03T01:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1965-10-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1965-10-03T02:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-03T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1966-04-03T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1966-04-03T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1966-04-03T02:00:00+00:00 should be 03:00:00 CET");

		t.equal(moment("1966-04-03T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1966-04-03T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1966-04-03T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1966-04-03T02:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-09-25T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1976-09-25T23:59:59+00:00 should be 00:59:59 CET");
		t.equal(moment("1976-09-26T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1976-09-26T00:00:00+00:00 should be 00:00:00 WET");

		t.equal(moment("1976-09-25T23:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1976-09-25T23:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1976-09-26T00:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1976-09-26T00:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-03-26T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1977-03-26T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1977-03-27T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1977-03-27T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1977-09-24T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1977-09-24T23:59:59+00:00 should be 00:59:59 WEST");
		t.equal(moment("1977-09-25T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1977-09-25T00:00:00+00:00 should be 00:00:00 WET");

		t.equal(moment("1977-03-26T23:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1977-03-26T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1977-03-27T00:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1977-03-27T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-09-24T23:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1977-09-24T23:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1977-09-25T00:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1977-09-25T00:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-01T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1978-04-01T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1978-04-02T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1978-04-02T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1978-09-30T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1978-09-30T23:59:59+00:00 should be 00:59:59 WEST");
		t.equal(moment("1978-10-01T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:00:00", "1978-10-01T00:00:00+00:00 should be 00:00:00 WET");

		t.equal(moment("1978-04-01T23:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1978-04-01T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1978-04-02T00:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1978-04-02T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1978-09-30T23:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1978-09-30T23:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1978-10-01T00:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1978-10-01T00:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-03-31T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1979-03-31T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1979-04-01T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1979-04-01T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1979-09-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1979-09-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1979-09-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1979-09-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1979-03-31T23:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1979-03-31T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1979-04-01T00:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1979-04-01T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1979-09-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1979-09-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1979-09-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1979-09-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-03-29T23:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "23:59:59", "1980-03-29T23:59:59+00:00 should be 23:59:59 WET");
		t.equal(moment("1980-03-30T00:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1980-03-30T00:00:00+00:00 should be 01:00:00 WEST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1980-09-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1980-09-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1980-03-29T23:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1980-03-29T23:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1980-03-30T00:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1980-03-30T00:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1980-09-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1980-09-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1980-09-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1980-09-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1981-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1981-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1981-09-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1981-09-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1981-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1981-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1981-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1981-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1981-09-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1981-09-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1981-09-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1981-09-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1982-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1982-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1982-09-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1982-09-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1982-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1982-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1982-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1982-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1982-09-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1982-09-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1982-09-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1982-09-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-03-27T01:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1983-03-27T01:59:59+00:00 should be 01:59:59 WET");
		t.equal(moment("1983-03-27T02:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1983-03-27T02:00:00+00:00 should be 03:00:00 WEST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1983-09-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1983-09-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1983-03-27T01:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1983-03-27T01:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1983-03-27T02:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1983-03-27T02:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1983-09-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1983-09-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1983-09-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1983-09-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1984-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1984-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1984-09-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1984-09-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1984-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1984-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1984-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1984-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1984-09-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1984-09-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1984-09-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1984-09-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1985-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1985-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1985-09-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1985-09-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1985-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1985-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1985-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1985-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1985-09-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1985-09-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1985-09-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1985-09-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1986-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1986-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1986-09-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1986-09-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1986-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1986-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1986-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1986-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1986-09-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1986-09-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1986-09-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1986-09-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1987-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1987-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1987-09-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1987-09-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1987-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1987-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1987-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1987-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1987-09-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1987-09-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1987-09-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1987-09-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1988-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1988-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1988-09-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1988-09-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1988-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1988-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1988-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1988-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1988-09-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1988-09-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1988-09-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1988-09-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1989-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1989-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1989-09-24T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1989-09-24T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1989-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1989-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1989-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1989-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1989-09-24T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1989-09-24T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1989-09-24T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1989-09-24T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1990-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1990-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1990-09-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1990-09-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1990-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1990-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1990-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1990-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1990-09-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1990-09-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1990-09-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1990-09-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1991-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1991-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1991-09-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1991-09-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1991-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1991-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1991-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1991-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1991-09-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1991-09-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1991-09-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1991-09-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1992-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1992-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1992-09-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1992-09-27T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1992-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1992-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1992-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1992-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1992-09-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1992-09-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1992-09-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1992-09-27T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1993-03-28T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1993-03-28T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1993-09-26T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1993-09-26T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1993-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1993-03-28T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1993-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1993-03-28T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1993-09-26T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1993-09-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1993-09-26T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1994-03-27T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1994-03-27T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1994-09-25T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1994-09-25T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1994-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1994-03-27T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1994-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1994-03-27T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1994-09-25T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1994-09-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1994-09-25T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1995-03-26T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "03:00:00", "1995-03-26T01:00:00+00:00 should be 03:00:00 CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:59:59", "1995-09-24T00:59:59+00:00 should be 02:59:59 CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1995-09-24T01:00:00+00:00 should be 02:00:00 CET");

		t.equal(moment("1995-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1995-03-26T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1995-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -120, "1995-03-26T01:00:00+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T00:59:59+00:00").tz("Europe/Lisbon").zone(), -120, "1995-09-24T00:59:59+00:00 should be -120 minutes offset in CEST");
		t.equal(moment("1995-09-24T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1995-09-24T01:00:00+00:00 should be -60 minutes offset in CET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1996-03-31T00:59:59+00:00 should be 01:59:59 CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1996-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1996-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1996-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1996-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1996-03-31T00:59:59+00:00 should be -60 minutes offset in CET");
		t.equal(moment("1996-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1996-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1996-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1996-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1996-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1996-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1997-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1997-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1997-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1997-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1997-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1997-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1997-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1997-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1997-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1997-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1997-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1997-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1998-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1998-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1998-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1998-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1998-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1998-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1998-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1998-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1998-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1998-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1998-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1998-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "1999-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "1999-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "1999-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "1999-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("1999-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "1999-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("1999-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "1999-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1999-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "1999-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("1999-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "1999-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2000-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2000-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2000-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2000-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2000-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2000-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2000-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2000-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2000-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2000-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2000-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2000-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2001-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2001-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2001-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2001-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2001-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2001-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2001-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2001-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2001-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2001-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2001-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2001-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2002-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2002-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2002-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2002-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2002-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2002-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2002-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2002-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2002-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2002-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2002-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2002-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2003-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2003-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2003-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2003-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2003-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2003-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2003-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2003-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2003-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2003-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2003-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2003-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2004-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2004-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2004-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2004-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2004-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2004-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2004-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2004-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2004-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2004-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2004-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2004-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2005-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2005-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2005-10-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2005-10-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2005-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2005-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2005-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2005-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2005-10-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2005-10-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2005-10-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2005-10-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2006-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2006-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2006-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2006-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2006-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2006-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2006-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2006-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2006-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2006-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2006-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2006-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2007-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2007-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2007-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2007-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2007-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2007-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2007-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2007-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2007-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2007-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2007-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2007-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2008-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2008-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2008-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2008-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2008-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2008-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2008-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2008-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2008-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2008-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2008-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2008-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2009-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2009-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2009-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2009-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2009-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2009-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2009-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2009-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2009-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2009-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2009-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2009-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2010-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2010-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2010-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2010-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2010-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2010-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2010-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2010-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2010-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2010-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2010-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2010-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2011-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2011-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2011-10-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2011-10-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2011-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2011-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2011-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2011-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2011-10-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2011-10-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2011-10-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2011-10-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2012-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2012-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2012-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2012-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2012-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2012-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2012-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2012-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2012-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2012-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2012-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2012-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2013-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2013-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2013-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2013-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2013-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2013-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2013-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2013-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2014-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2014-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2014-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2014-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2014-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2014-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2014-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2014-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2015-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2015-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2015-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2015-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2015-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2015-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2015-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2015-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2016-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2016-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2016-10-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2016-10-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2016-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2016-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2016-10-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2016-10-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2017-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2017-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2017-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2017-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2017-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2017-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2017-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2017-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2018-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2018-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2018-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2018-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2018-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2018-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2018-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2018-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2019-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2019-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2019-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2019-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2019-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2019-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2019-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2019-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2020-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2020-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2020-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2020-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2020-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2020-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2020-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2020-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2021-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2021-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2021-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2021-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2021-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2021-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2021-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2021-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2022-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2022-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2022-10-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2022-10-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2022-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2022-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2022-10-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2022-10-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2023-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2023-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2023-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2023-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2023-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2023-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2023-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2023-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2024-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2024-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2024-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2024-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2024-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2024-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2024-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2024-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2025-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2025-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2025-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2025-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2025-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2025-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2025-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2025-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2026-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2026-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2026-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2026-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2026-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2026-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2026-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2026-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2027-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2027-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2027-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2027-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2027-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2027-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2027-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2027-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2028-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2028-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2028-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2028-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2028-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2028-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2028-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2028-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2029-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2029-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2029-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2029-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2029-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2029-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2029-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2029-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2030-03-31T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2030-03-31T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2030-10-27T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2030-10-27T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2030-03-31T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2030-03-31T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2030-10-27T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2030-10-27T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2031-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2031-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2031-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2031-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2031-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2031-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2031-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2031-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2032-03-28T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2032-03-28T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2032-10-31T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2032-10-31T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2032-03-28T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2032-03-28T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2032-10-31T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2032-10-31T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2033-03-27T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2033-03-27T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2033-10-30T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2033-10-30T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2033-03-27T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2033-03-27T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2033-10-30T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2033-10-30T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2034-03-26T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2034-03-26T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2034-10-29T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2034-10-29T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2034-03-26T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2034-03-26T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2034-10-29T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2034-10-29T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2035-03-25T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2035-03-25T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2035-10-28T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2035-10-28T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2035-03-25T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2035-03-25T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2035-10-28T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2035-10-28T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2036-03-30T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2036-03-30T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2036-10-26T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2036-10-26T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2036-03-30T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2036-03-30T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2036-10-26T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2036-10-26T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "00:59:59", "2037-03-29T00:59:59+00:00 should be 00:59:59 WET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "02:00:00", "2037-03-29T01:00:00+00:00 should be 02:00:00 WEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:59:59", "2037-10-25T00:59:59+00:00 should be 01:59:59 WEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Lisbon").format("HH:mm:ss"), "01:00:00", "2037-10-25T01:00:00+00:00 should be 01:00:00 WET");

		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Lisbon").zone(), 0, "2037-03-29T00:59:59+00:00 should be 0 minutes offset in WET");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Lisbon").zone(), -60, "2037-03-29T01:00:00+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Lisbon").zone(), -60, "2037-10-25T00:59:59+00:00 should be -60 minutes offset in WEST");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Lisbon").zone(), 0, "2037-10-25T01:00:00+00:00 should be 0 minutes offset in WET");

		t.done();
	}
};
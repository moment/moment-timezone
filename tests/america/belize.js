var moment = require("../../moment-timezone");

exports["America/Belize"] = {

	"1912" : function (t) {
		t.equal(moment("1912-04-01T05:52:47+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1912-04-01T05:52:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1912-04-01T05:52:48+00:00").tz("America/Belize").format("HH:mm:ss"), "23:52:48", "1912-04-01T05:52:48+00:00 should be 23:52:48 CST");

		t.equal(moment("1912-04-01T05:52:47+00:00").tz("America/Belize").zone(), 21168 / 60, "1912-04-01T05:52:47+00:00 should be 21168 / 60 minutes offset in LMT");
		t.equal(moment("1912-04-01T05:52:48+00:00").tz("America/Belize").zone(), 360, "1912-04-01T05:52:48+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-10-06T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1918-10-06T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1918-10-06T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1918-10-06T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1918-10-06T05:59:59+00:00").tz("America/Belize").zone(), 360, "1918-10-06T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1918-10-06T06:00:00+00:00").tz("America/Belize").zone(), 330, "1918-10-06T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-02-09T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1919-02-09T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1919-02-09T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1919-02-09T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1919-10-05T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1919-10-05T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1919-10-05T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1919-10-05T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1919-02-09T05:29:59+00:00").tz("America/Belize").zone(), 330, "1919-02-09T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1919-02-09T05:30:00+00:00").tz("America/Belize").zone(), 360, "1919-02-09T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1919-10-05T05:59:59+00:00").tz("America/Belize").zone(), 360, "1919-10-05T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1919-10-05T06:00:00+00:00").tz("America/Belize").zone(), 330, "1919-10-05T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-02-15T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1920-02-15T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1920-02-15T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1920-02-15T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1920-10-03T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1920-10-03T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1920-10-03T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1920-10-03T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1920-02-15T05:29:59+00:00").tz("America/Belize").zone(), 330, "1920-02-15T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1920-02-15T05:30:00+00:00").tz("America/Belize").zone(), 360, "1920-02-15T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1920-10-03T05:59:59+00:00").tz("America/Belize").zone(), 360, "1920-10-03T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1920-10-03T06:00:00+00:00").tz("America/Belize").zone(), 330, "1920-10-03T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-02-13T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1921-02-13T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1921-02-13T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1921-02-13T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1921-10-02T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1921-10-02T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1921-10-02T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1921-10-02T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1921-02-13T05:29:59+00:00").tz("America/Belize").zone(), 330, "1921-02-13T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1921-02-13T05:30:00+00:00").tz("America/Belize").zone(), 360, "1921-02-13T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1921-10-02T05:59:59+00:00").tz("America/Belize").zone(), 360, "1921-10-02T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1921-10-02T06:00:00+00:00").tz("America/Belize").zone(), 330, "1921-10-02T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-02-12T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1922-02-12T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1922-02-12T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1922-02-12T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1922-10-08T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1922-10-08T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1922-10-08T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1922-10-08T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1922-02-12T05:29:59+00:00").tz("America/Belize").zone(), 330, "1922-02-12T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1922-02-12T05:30:00+00:00").tz("America/Belize").zone(), 360, "1922-02-12T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1922-10-08T05:59:59+00:00").tz("America/Belize").zone(), 360, "1922-10-08T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1922-10-08T06:00:00+00:00").tz("America/Belize").zone(), 330, "1922-10-08T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1923" : function (t) {
		t.equal(moment("1923-02-11T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1923-02-11T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1923-02-11T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1923-02-11T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1923-10-07T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1923-10-07T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1923-10-07T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1923-10-07T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1923-02-11T05:29:59+00:00").tz("America/Belize").zone(), 330, "1923-02-11T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1923-02-11T05:30:00+00:00").tz("America/Belize").zone(), 360, "1923-02-11T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1923-10-07T05:59:59+00:00").tz("America/Belize").zone(), 360, "1923-10-07T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1923-10-07T06:00:00+00:00").tz("America/Belize").zone(), 330, "1923-10-07T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-02-10T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1924-02-10T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1924-02-10T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1924-02-10T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1924-10-05T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1924-10-05T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1924-10-05T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1924-10-05T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1924-02-10T05:29:59+00:00").tz("America/Belize").zone(), 330, "1924-02-10T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1924-02-10T05:30:00+00:00").tz("America/Belize").zone(), 360, "1924-02-10T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1924-10-05T05:59:59+00:00").tz("America/Belize").zone(), 360, "1924-10-05T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1924-10-05T06:00:00+00:00").tz("America/Belize").zone(), 330, "1924-10-05T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1925" : function (t) {
		t.equal(moment("1925-02-15T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1925-02-15T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1925-02-15T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1925-02-15T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1925-10-04T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1925-10-04T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1925-10-04T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1925-10-04T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1925-02-15T05:29:59+00:00").tz("America/Belize").zone(), 330, "1925-02-15T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1925-02-15T05:30:00+00:00").tz("America/Belize").zone(), 360, "1925-02-15T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1925-10-04T05:59:59+00:00").tz("America/Belize").zone(), 360, "1925-10-04T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1925-10-04T06:00:00+00:00").tz("America/Belize").zone(), 330, "1925-10-04T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-02-14T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1926-02-14T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1926-02-14T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1926-02-14T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1926-10-03T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1926-10-03T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1926-10-03T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1926-10-03T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1926-02-14T05:29:59+00:00").tz("America/Belize").zone(), 330, "1926-02-14T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1926-02-14T05:30:00+00:00").tz("America/Belize").zone(), 360, "1926-02-14T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1926-10-03T05:59:59+00:00").tz("America/Belize").zone(), 360, "1926-10-03T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1926-10-03T06:00:00+00:00").tz("America/Belize").zone(), 330, "1926-10-03T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-02-13T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1927-02-13T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1927-02-13T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1927-02-13T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1927-10-02T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1927-10-02T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1927-10-02T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1927-10-02T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1927-02-13T05:29:59+00:00").tz("America/Belize").zone(), 330, "1927-02-13T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1927-02-13T05:30:00+00:00").tz("America/Belize").zone(), 360, "1927-02-13T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1927-10-02T05:59:59+00:00").tz("America/Belize").zone(), 360, "1927-10-02T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1927-10-02T06:00:00+00:00").tz("America/Belize").zone(), 330, "1927-10-02T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-02-12T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1928-02-12T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1928-02-12T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1928-02-12T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1928-10-07T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1928-10-07T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1928-10-07T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1928-10-07T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1928-02-12T05:29:59+00:00").tz("America/Belize").zone(), 330, "1928-02-12T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1928-02-12T05:30:00+00:00").tz("America/Belize").zone(), 360, "1928-02-12T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1928-10-07T05:59:59+00:00").tz("America/Belize").zone(), 360, "1928-10-07T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1928-10-07T06:00:00+00:00").tz("America/Belize").zone(), 330, "1928-10-07T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-02-10T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1929-02-10T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1929-02-10T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1929-02-10T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1929-10-06T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1929-10-06T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1929-10-06T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1929-10-06T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1929-02-10T05:29:59+00:00").tz("America/Belize").zone(), 330, "1929-02-10T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1929-02-10T05:30:00+00:00").tz("America/Belize").zone(), 360, "1929-02-10T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1929-10-06T05:59:59+00:00").tz("America/Belize").zone(), 360, "1929-10-06T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1929-10-06T06:00:00+00:00").tz("America/Belize").zone(), 330, "1929-10-06T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-02-09T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1930-02-09T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1930-02-09T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1930-02-09T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1930-10-05T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1930-10-05T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1930-10-05T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1930-10-05T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1930-02-09T05:29:59+00:00").tz("America/Belize").zone(), 330, "1930-02-09T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1930-02-09T05:30:00+00:00").tz("America/Belize").zone(), 360, "1930-02-09T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1930-10-05T05:59:59+00:00").tz("America/Belize").zone(), 360, "1930-10-05T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1930-10-05T06:00:00+00:00").tz("America/Belize").zone(), 330, "1930-10-05T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-02-15T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1931-02-15T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1931-02-15T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1931-02-15T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1931-10-04T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1931-10-04T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1931-10-04T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1931-10-04T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1931-02-15T05:29:59+00:00").tz("America/Belize").zone(), 330, "1931-02-15T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1931-02-15T05:30:00+00:00").tz("America/Belize").zone(), 360, "1931-02-15T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1931-10-04T05:59:59+00:00").tz("America/Belize").zone(), 360, "1931-10-04T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1931-10-04T06:00:00+00:00").tz("America/Belize").zone(), 330, "1931-10-04T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-02-14T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1932-02-14T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1932-02-14T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1932-02-14T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1932-10-02T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1932-10-02T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1932-10-02T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1932-10-02T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1932-02-14T05:29:59+00:00").tz("America/Belize").zone(), 330, "1932-02-14T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1932-02-14T05:30:00+00:00").tz("America/Belize").zone(), 360, "1932-02-14T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1932-10-02T05:59:59+00:00").tz("America/Belize").zone(), 360, "1932-10-02T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1932-10-02T06:00:00+00:00").tz("America/Belize").zone(), 330, "1932-10-02T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-02-12T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1933-02-12T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1933-02-12T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1933-02-12T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1933-10-08T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1933-10-08T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1933-10-08T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1933-10-08T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1933-02-12T05:29:59+00:00").tz("America/Belize").zone(), 330, "1933-02-12T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1933-02-12T05:30:00+00:00").tz("America/Belize").zone(), 360, "1933-02-12T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1933-10-08T05:59:59+00:00").tz("America/Belize").zone(), 360, "1933-10-08T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1933-10-08T06:00:00+00:00").tz("America/Belize").zone(), 330, "1933-10-08T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-02-11T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1934-02-11T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1934-02-11T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1934-02-11T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1934-10-07T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1934-10-07T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1934-10-07T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1934-10-07T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1934-02-11T05:29:59+00:00").tz("America/Belize").zone(), 330, "1934-02-11T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1934-02-11T05:30:00+00:00").tz("America/Belize").zone(), 360, "1934-02-11T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1934-10-07T05:59:59+00:00").tz("America/Belize").zone(), 360, "1934-10-07T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1934-10-07T06:00:00+00:00").tz("America/Belize").zone(), 330, "1934-10-07T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-02-10T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1935-02-10T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1935-02-10T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1935-02-10T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1935-10-06T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1935-10-06T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1935-10-06T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1935-10-06T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1935-02-10T05:29:59+00:00").tz("America/Belize").zone(), 330, "1935-02-10T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1935-02-10T05:30:00+00:00").tz("America/Belize").zone(), 360, "1935-02-10T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1935-10-06T05:59:59+00:00").tz("America/Belize").zone(), 360, "1935-10-06T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1935-10-06T06:00:00+00:00").tz("America/Belize").zone(), 330, "1935-10-06T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-02-09T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1936-02-09T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1936-02-09T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1936-02-09T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1936-10-04T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1936-10-04T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1936-10-04T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1936-10-04T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1936-02-09T05:29:59+00:00").tz("America/Belize").zone(), 330, "1936-02-09T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1936-02-09T05:30:00+00:00").tz("America/Belize").zone(), 360, "1936-02-09T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1936-10-04T05:59:59+00:00").tz("America/Belize").zone(), 360, "1936-10-04T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1936-10-04T06:00:00+00:00").tz("America/Belize").zone(), 330, "1936-10-04T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-02-14T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1937-02-14T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1937-02-14T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1937-02-14T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1937-10-03T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1937-10-03T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1937-10-03T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1937-10-03T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1937-02-14T05:29:59+00:00").tz("America/Belize").zone(), 330, "1937-02-14T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1937-02-14T05:30:00+00:00").tz("America/Belize").zone(), 360, "1937-02-14T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1937-10-03T05:59:59+00:00").tz("America/Belize").zone(), 360, "1937-10-03T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1937-10-03T06:00:00+00:00").tz("America/Belize").zone(), 330, "1937-10-03T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-02-13T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1938-02-13T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1938-02-13T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1938-02-13T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1938-10-02T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1938-10-02T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1938-10-02T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1938-10-02T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1938-02-13T05:29:59+00:00").tz("America/Belize").zone(), 330, "1938-02-13T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1938-02-13T05:30:00+00:00").tz("America/Belize").zone(), 360, "1938-02-13T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1938-10-02T05:59:59+00:00").tz("America/Belize").zone(), 360, "1938-10-02T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1938-10-02T06:00:00+00:00").tz("America/Belize").zone(), 330, "1938-10-02T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-02-12T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1939-02-12T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1939-02-12T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1939-02-12T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1939-10-08T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1939-10-08T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1939-10-08T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1939-10-08T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1939-02-12T05:29:59+00:00").tz("America/Belize").zone(), 330, "1939-02-12T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1939-02-12T05:30:00+00:00").tz("America/Belize").zone(), 360, "1939-02-12T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1939-10-08T05:59:59+00:00").tz("America/Belize").zone(), 360, "1939-10-08T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1939-10-08T06:00:00+00:00").tz("America/Belize").zone(), 330, "1939-10-08T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-02-11T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1940-02-11T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1940-02-11T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1940-02-11T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1940-10-06T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1940-10-06T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1940-10-06T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1940-10-06T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1940-02-11T05:29:59+00:00").tz("America/Belize").zone(), 330, "1940-02-11T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1940-02-11T05:30:00+00:00").tz("America/Belize").zone(), 360, "1940-02-11T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1940-10-06T05:59:59+00:00").tz("America/Belize").zone(), 360, "1940-10-06T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1940-10-06T06:00:00+00:00").tz("America/Belize").zone(), 330, "1940-10-06T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-02-09T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1941-02-09T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1941-02-09T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1941-02-09T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1941-10-05T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1941-10-05T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1941-10-05T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1941-10-05T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1941-02-09T05:29:59+00:00").tz("America/Belize").zone(), 330, "1941-02-09T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1941-02-09T05:30:00+00:00").tz("America/Belize").zone(), 360, "1941-02-09T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1941-10-05T05:59:59+00:00").tz("America/Belize").zone(), 360, "1941-10-05T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1941-10-05T06:00:00+00:00").tz("America/Belize").zone(), 330, "1941-10-05T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-15T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1942-02-15T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1942-02-15T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1942-02-15T05:30:00+00:00 should be 23:30:00 CST");
		t.equal(moment("1942-10-04T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1942-10-04T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1942-10-04T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "00:30:00", "1942-10-04T06:00:00+00:00 should be 00:30:00 CHDT");

		t.equal(moment("1942-02-15T05:29:59+00:00").tz("America/Belize").zone(), 330, "1942-02-15T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1942-02-15T05:30:00+00:00").tz("America/Belize").zone(), 360, "1942-02-15T05:30:00+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1942-10-04T05:59:59+00:00").tz("America/Belize").zone(), 360, "1942-10-04T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1942-10-04T06:00:00+00:00").tz("America/Belize").zone(), 330, "1942-10-04T06:00:00+00:00 should be 330 minutes offset in CHDT");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-02-14T05:29:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1943-02-14T05:29:59+00:00 should be 23:59:59 CHDT");
		t.equal(moment("1943-02-14T05:30:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:30:00", "1943-02-14T05:30:00+00:00 should be 23:30:00 CST");

		t.equal(moment("1943-02-14T05:29:59+00:00").tz("America/Belize").zone(), 330, "1943-02-14T05:29:59+00:00 should be 330 minutes offset in CHDT");
		t.equal(moment("1943-02-14T05:30:00+00:00").tz("America/Belize").zone(), 360, "1943-02-14T05:30:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-12-05T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1973-12-05T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1973-12-05T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "01:00:00", "1973-12-05T06:00:00+00:00 should be 01:00:00 CDT");

		t.equal(moment("1973-12-05T05:59:59+00:00").tz("America/Belize").zone(), 360, "1973-12-05T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1973-12-05T06:00:00+00:00").tz("America/Belize").zone(), 300, "1973-12-05T06:00:00+00:00 should be 300 minutes offset in CDT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-02-09T04:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1974-02-09T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1974-02-09T05:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:00:00", "1974-02-09T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1974-02-09T04:59:59+00:00").tz("America/Belize").zone(), 300, "1974-02-09T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1974-02-09T05:00:00+00:00").tz("America/Belize").zone(), 360, "1974-02-09T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-12-18T05:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1982-12-18T05:59:59+00:00 should be 23:59:59 CST");
		t.equal(moment("1982-12-18T06:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "01:00:00", "1982-12-18T06:00:00+00:00 should be 01:00:00 CDT");

		t.equal(moment("1982-12-18T05:59:59+00:00").tz("America/Belize").zone(), 360, "1982-12-18T05:59:59+00:00 should be 360 minutes offset in CST");
		t.equal(moment("1982-12-18T06:00:00+00:00").tz("America/Belize").zone(), 300, "1982-12-18T06:00:00+00:00 should be 300 minutes offset in CDT");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-02-12T04:59:59+00:00").tz("America/Belize").format("HH:mm:ss"), "23:59:59", "1983-02-12T04:59:59+00:00 should be 23:59:59 CDT");
		t.equal(moment("1983-02-12T05:00:00+00:00").tz("America/Belize").format("HH:mm:ss"), "23:00:00", "1983-02-12T05:00:00+00:00 should be 23:00:00 CST");

		t.equal(moment("1983-02-12T04:59:59+00:00").tz("America/Belize").zone(), 300, "1983-02-12T04:59:59+00:00 should be 300 minutes offset in CDT");
		t.equal(moment("1983-02-12T05:00:00+00:00").tz("America/Belize").zone(), 360, "1983-02-12T05:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
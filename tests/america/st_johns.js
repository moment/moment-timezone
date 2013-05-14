var moment = require("../../index");

exports["America/St_Johns"] = {

	"1917" : function (t) {
		t.equal(moment("1917-04-08T05:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1917-04-08T05:30:51+00:00 should be 01:59:59 NST");
		t.equal(moment("1917-04-08T05:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1917-04-08T05:30:52+00:00 should be 03:00:00 NDT");
		t.equal(moment("1917-09-17T04:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1917-09-17T04:30:51+00:00 should be 01:59:59 NDT");
		t.equal(moment("1917-09-17T04:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1917-09-17T04:30:52+00:00 should be 01:00:00 NST");

		t.equal(moment("1917-04-08T05:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1917-04-08T05:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1917-04-08T05:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1917-04-08T05:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1917-09-17T04:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1917-09-17T04:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1917-09-17T04:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1917-09-17T04:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-04-14T05:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1918-04-14T05:30:51+00:00 should be 01:59:59 NST");
		t.equal(moment("1918-04-14T05:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1918-04-14T05:30:52+00:00 should be 03:00:00 NDT");
		t.equal(moment("1918-10-27T04:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1918-10-27T04:30:51+00:00 should be 01:59:59 NDT");
		t.equal(moment("1918-10-27T04:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1918-10-27T04:30:52+00:00 should be 01:00:00 NST");

		t.equal(moment("1918-04-14T05:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1918-04-14T05:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1918-04-14T05:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1918-04-14T05:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1918-10-27T04:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1918-10-27T04:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1918-10-27T04:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1918-10-27T04:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1919" : function (t) {
		t.equal(moment("1919-05-06T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1919-05-06T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1919-05-06T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1919-05-06T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1919-08-13T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1919-08-13T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1919-08-13T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1919-08-13T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1919-05-06T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1919-05-06T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1919-05-06T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1919-05-06T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1919-08-13T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1919-08-13T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1919-08-13T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1919-08-13T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-05-03T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1920-05-03T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1920-05-03T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1920-05-03T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1920-11-01T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1920-11-01T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1920-11-01T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1920-11-01T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1920-05-03T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1920-05-03T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1920-05-03T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1920-05-03T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1920-11-01T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1920-11-01T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1920-11-01T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1920-11-01T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-05-02T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1921-05-02T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1921-05-02T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1921-05-02T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1921-10-31T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1921-10-31T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1921-10-31T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1921-10-31T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1921-05-02T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1921-05-02T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1921-05-02T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1921-05-02T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1921-10-31T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1921-10-31T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1921-10-31T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1921-10-31T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-05-08T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1922-05-08T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1922-05-08T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1922-05-08T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1922-10-30T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1922-10-30T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1922-10-30T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1922-10-30T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1922-05-08T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1922-05-08T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1922-05-08T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1922-05-08T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1922-10-30T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1922-10-30T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1922-10-30T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1922-10-30T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1923" : function (t) {
		t.equal(moment("1923-05-07T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1923-05-07T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1923-05-07T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1923-05-07T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1923-10-29T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1923-10-29T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1923-10-29T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1923-10-29T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1923-05-07T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1923-05-07T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1923-05-07T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1923-05-07T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1923-10-29T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1923-10-29T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1923-10-29T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1923-10-29T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-05-05T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1924-05-05T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1924-05-05T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1924-05-05T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1924-10-27T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1924-10-27T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1924-10-27T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1924-10-27T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1924-05-05T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1924-05-05T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1924-05-05T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1924-05-05T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1924-10-27T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1924-10-27T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1924-10-27T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1924-10-27T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1925" : function (t) {
		t.equal(moment("1925-05-04T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1925-05-04T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1925-05-04T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1925-05-04T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1925-10-26T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1925-10-26T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1925-10-26T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1925-10-26T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1925-05-04T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1925-05-04T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1925-05-04T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1925-05-04T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1925-10-26T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1925-10-26T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1925-10-26T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1925-10-26T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-05-03T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1926-05-03T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1926-05-03T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1926-05-03T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1926-11-01T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1926-11-01T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1926-11-01T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1926-11-01T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1926-05-03T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1926-05-03T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1926-05-03T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1926-05-03T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1926-11-01T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1926-11-01T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1926-11-01T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1926-11-01T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1927" : function (t) {
		t.equal(moment("1927-05-02T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1927-05-02T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1927-05-02T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1927-05-02T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1927-10-31T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1927-10-31T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1927-10-31T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1927-10-31T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1927-05-02T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1927-05-02T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1927-05-02T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1927-05-02T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1927-10-31T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1927-10-31T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1927-10-31T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1927-10-31T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1928" : function (t) {
		t.equal(moment("1928-05-07T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1928-05-07T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1928-05-07T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1928-05-07T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1928-10-29T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1928-10-29T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1928-10-29T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1928-10-29T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1928-05-07T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1928-05-07T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1928-05-07T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1928-05-07T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1928-10-29T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1928-10-29T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1928-10-29T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1928-10-29T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1929" : function (t) {
		t.equal(moment("1929-05-06T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1929-05-06T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1929-05-06T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1929-05-06T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1929-10-28T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1929-10-28T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1929-10-28T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1929-10-28T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1929-05-06T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1929-05-06T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1929-05-06T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1929-05-06T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1929-10-28T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1929-10-28T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1929-10-28T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1929-10-28T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-05-05T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1930-05-05T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1930-05-05T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1930-05-05T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1930-10-27T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1930-10-27T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1930-10-27T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1930-10-27T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1930-05-05T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1930-05-05T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1930-05-05T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1930-05-05T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1930-10-27T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1930-10-27T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1930-10-27T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1930-10-27T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-05-04T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1931-05-04T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1931-05-04T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1931-05-04T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1931-10-26T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1931-10-26T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1931-10-26T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1931-10-26T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1931-05-04T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1931-05-04T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1931-05-04T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1931-05-04T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1931-10-26T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1931-10-26T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1931-10-26T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1931-10-26T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-05-02T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1932-05-02T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1932-05-02T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1932-05-02T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1932-10-31T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1932-10-31T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1932-10-31T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1932-10-31T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1932-05-02T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1932-05-02T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1932-05-02T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1932-05-02T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1932-10-31T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1932-10-31T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1932-10-31T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1932-10-31T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-05-08T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1933-05-08T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1933-05-08T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1933-05-08T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1933-10-30T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1933-10-30T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1933-10-30T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1933-10-30T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1933-05-08T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1933-05-08T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1933-05-08T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1933-05-08T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1933-10-30T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1933-10-30T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1933-10-30T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1933-10-30T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-05-07T02:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1934-05-07T02:30:51+00:00 should be 22:59:59 NST");
		t.equal(moment("1934-05-07T02:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1934-05-07T02:30:52+00:00 should be 00:00:00 NDT");
		t.equal(moment("1934-10-29T01:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1934-10-29T01:30:51+00:00 should be 22:59:59 NDT");
		t.equal(moment("1934-10-29T01:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1934-10-29T01:30:52+00:00 should be 22:00:00 NST");

		t.equal(moment("1934-05-07T02:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1934-05-07T02:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1934-05-07T02:30:52+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1934-05-07T02:30:52+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1934-10-29T01:30:51+00:00").tz("America/St_Johns").zone(), 9052 / 60, "1934-10-29T01:30:51+00:00 should be 9052 / 60 minutes offset in NDT");
		t.equal(moment("1934-10-29T01:30:52+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1934-10-29T01:30:52+00:00 should be 12652 / 60 minutes offset in NST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-03-30T03:30:51+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1935-03-30T03:30:51+00:00 should be 23:59:59 NST");
		t.equal(moment("1935-03-30T03:30:52+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:52", "1935-03-30T03:30:52+00:00 should be 00:00:52 NST");
		t.equal(moment("1935-05-06T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1935-05-06T02:29:59+00:00 should be 22:59:59 NST");
		t.equal(moment("1935-05-06T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:00", "1935-05-06T02:30:00+00:00 should be 00:00:00 NDT");
		t.equal(moment("1935-10-28T01:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:59:59", "1935-10-28T01:29:59+00:00 should be 22:59:59 NDT");
		t.equal(moment("1935-10-28T01:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:00:00", "1935-10-28T01:30:00+00:00 should be 22:00:00 NST");

		t.equal(moment("1935-03-30T03:30:51+00:00").tz("America/St_Johns").zone(), 12652 / 60, "1935-03-30T03:30:51+00:00 should be 12652 / 60 minutes offset in NST");
		t.equal(moment("1935-03-30T03:30:52+00:00").tz("America/St_Johns").zone(), 210, "1935-03-30T03:30:52+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1935-05-06T02:29:59+00:00").tz("America/St_Johns").zone(), 210, "1935-05-06T02:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1935-05-06T02:30:00+00:00").tz("America/St_Johns").zone(), 150, "1935-05-06T02:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1935-10-28T01:29:59+00:00").tz("America/St_Johns").zone(), 150, "1935-10-28T01:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1935-10-28T01:30:00+00:00").tz("America/St_Johns").zone(), 210, "1935-10-28T01:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-05-11T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1936-05-11T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1936-05-11T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1936-05-11T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1936-10-05T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1936-10-05T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1936-10-05T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1936-10-05T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1936-05-11T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1936-05-11T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1936-05-11T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1936-05-11T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1936-10-05T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1936-10-05T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1936-10-05T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1936-10-05T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-05-10T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1937-05-10T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1937-05-10T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1937-05-10T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1937-10-04T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1937-10-04T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1937-10-04T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1937-10-04T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1937-05-10T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1937-05-10T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1937-05-10T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1937-05-10T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1937-10-04T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1937-10-04T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1937-10-04T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1937-10-04T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-05-09T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1938-05-09T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1938-05-09T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1938-05-09T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1938-10-03T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1938-10-03T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1938-10-03T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1938-10-03T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1938-05-09T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1938-05-09T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1938-05-09T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1938-05-09T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1938-10-03T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1938-10-03T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1938-10-03T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1938-10-03T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-05-15T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1939-05-15T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1939-05-15T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1939-05-15T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1939-10-02T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1939-10-02T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1939-10-02T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1939-10-02T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1939-05-15T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1939-05-15T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1939-05-15T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1939-05-15T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1939-10-02T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1939-10-02T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1939-10-02T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1939-10-02T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-05-13T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1940-05-13T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1940-05-13T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1940-05-13T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1940-10-07T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1940-10-07T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1940-10-07T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1940-10-07T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1940-05-13T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1940-05-13T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1940-05-13T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1940-05-13T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1940-10-07T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1940-10-07T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1940-10-07T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1940-10-07T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-05-12T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1941-05-12T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1941-05-12T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1941-05-12T03:30:00+00:00 should be 01:00:00 NDT");
		t.equal(moment("1941-10-06T02:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1941-10-06T02:29:59+00:00 should be 23:59:59 NDT");
		t.equal(moment("1941-10-06T02:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:00:00", "1941-10-06T02:30:00+00:00 should be 23:00:00 NST");

		t.equal(moment("1941-05-12T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1941-05-12T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1941-05-12T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1941-05-12T03:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1941-10-06T02:29:59+00:00").tz("America/St_Johns").zone(), 150, "1941-10-06T02:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1941-10-06T02:30:00+00:00").tz("America/St_Johns").zone(), 210, "1941-10-06T02:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-05-11T03:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:59:59", "1942-05-11T03:29:59+00:00 should be 23:59:59 NST");
		t.equal(moment("1942-05-11T03:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1942-05-11T03:30:00+00:00 should be 01:00:00 NWT");

		t.equal(moment("1942-05-11T03:29:59+00:00").tz("America/St_Johns").zone(), 210, "1942-05-11T03:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1942-05-11T03:30:00+00:00").tz("America/St_Johns").zone(), 150, "1942-05-11T03:30:00+00:00 should be 150 minutes offset in NWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "20:29:59", "1945-08-14T22:59:59+00:00 should be 20:29:59 NWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "20:30:00", "1945-08-14T23:00:00+00:00 should be 20:30:00 NPT");
		t.equal(moment("1945-09-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1945-09-30T04:29:59+00:00 should be 01:59:59 NPT");
		t.equal(moment("1945-09-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1945-09-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/St_Johns").zone(), 150, "1945-08-14T22:59:59+00:00 should be 150 minutes offset in NWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/St_Johns").zone(), 150, "1945-08-14T23:00:00+00:00 should be 150 minutes offset in NPT");
		t.equal(moment("1945-09-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1945-09-30T04:29:59+00:00 should be 150 minutes offset in NPT");
		t.equal(moment("1945-09-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1945-09-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-05-12T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1946-05-12T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1946-05-12T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1946-05-12T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1946-10-06T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1946-10-06T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1946-10-06T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1946-10-06T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1946-05-12T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1946-05-12T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1946-05-12T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1946-05-12T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1946-10-06T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1946-10-06T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1946-10-06T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1946-10-06T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-05-11T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1947-05-11T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1947-05-11T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1947-05-11T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1947-10-05T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1947-10-05T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1947-10-05T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1947-10-05T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1947-05-11T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1947-05-11T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1947-05-11T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1947-05-11T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1947-10-05T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1947-10-05T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1947-10-05T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1947-10-05T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-05-09T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1948-05-09T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1948-05-09T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1948-05-09T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1948-10-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1948-10-03T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1948-10-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1948-10-03T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1948-05-09T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1948-05-09T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1948-05-09T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1948-05-09T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1948-10-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1948-10-03T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1948-10-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1948-10-03T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-05-08T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1949-05-08T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1949-05-08T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1949-05-08T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1949-10-02T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1949-10-02T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1949-10-02T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1949-10-02T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1949-05-08T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1949-05-08T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1949-05-08T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1949-05-08T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1949-10-02T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1949-10-02T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1949-10-02T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1949-10-02T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-05-14T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1950-05-14T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1950-05-14T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1950-05-14T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1950-10-08T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1950-10-08T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1950-10-08T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1950-10-08T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1950-05-14T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1950-05-14T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1950-05-14T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1950-05-14T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1950-10-08T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1950-10-08T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1950-10-08T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1950-10-08T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1951-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1951-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1951-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1951-09-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1951-09-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1951-09-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1951-09-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1951-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1951-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1951-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1951-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1951-09-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1951-09-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1951-09-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1951-09-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1952-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1952-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1952-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1952-09-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1952-09-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1952-09-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1952-09-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1952-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1952-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1952-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1952-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1952-09-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1952-09-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1952-09-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1952-09-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-26T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1953-04-26T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1953-04-26T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1953-04-26T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1953-09-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1953-09-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1953-09-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1953-09-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1953-04-26T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1953-04-26T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1953-04-26T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1953-04-26T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1953-09-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1953-09-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1953-09-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1953-09-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1954-04-25T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1954-04-25T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1954-04-25T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1954-09-26T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1954-09-26T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1954-09-26T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1954-09-26T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1954-04-25T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1954-04-25T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1954-04-25T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1954-04-25T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1954-09-26T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1954-09-26T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1954-09-26T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1954-09-26T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-24T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1955-04-24T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1955-04-24T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1955-04-24T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1955-09-25T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1955-09-25T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1955-09-25T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1955-09-25T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1955-04-24T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1955-04-24T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1955-04-24T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1955-04-24T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1955-09-25T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1955-09-25T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1955-09-25T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1955-09-25T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1956-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1956-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1956-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1956-09-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1956-09-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1956-09-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1956-09-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1956-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1956-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1956-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1956-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1956-09-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1956-09-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1956-09-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1956-09-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1957-04-28T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1957-04-28T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1957-04-28T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1957-09-29T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1957-09-29T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1957-09-29T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1957-09-29T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1957-04-28T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1957-04-28T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1957-04-28T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1957-04-28T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1957-09-29T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1957-09-29T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1957-09-29T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1957-09-29T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1958-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1958-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1958-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1958-09-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1958-09-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1958-09-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1958-09-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1958-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1958-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1958-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1958-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1958-09-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1958-09-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1958-09-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1958-09-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1959-04-26T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1959-04-26T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1959-04-26T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1959-09-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1959-09-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1959-09-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1959-09-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1959-04-26T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1959-04-26T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1959-04-26T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1959-04-26T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1959-09-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1959-09-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1959-09-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1959-09-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1960-04-24T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1960-04-24T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1960-04-24T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1960-10-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1960-10-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1960-10-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1960-10-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1960-04-24T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1960-04-24T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1960-04-24T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1960-04-24T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1960-10-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1960-10-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1960-10-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1960-10-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1961-04-30T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1961-04-30T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1961-04-30T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1961-10-29T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1961-10-29T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1961-10-29T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1961-10-29T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1961-04-30T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1961-04-30T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1961-04-30T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1961-04-30T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1961-10-29T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1961-10-29T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1961-10-29T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1961-10-29T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1962-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1962-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1962-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1962-10-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1962-10-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1962-10-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1962-10-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1962-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1962-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1962-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1962-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1962-10-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1962-10-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1962-10-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1962-10-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-28T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1963-04-28T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1963-04-28T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1963-04-28T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1963-10-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1963-10-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1963-10-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1963-10-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1963-04-28T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1963-04-28T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1963-04-28T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1963-04-28T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1963-10-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1963-10-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1963-10-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1963-10-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-26T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1964-04-26T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1964-04-26T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1964-04-26T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1964-10-25T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1964-10-25T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1964-10-25T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1964-10-25T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1964-04-26T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1964-04-26T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1964-04-26T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1964-04-26T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1964-10-25T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1964-10-25T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1964-10-25T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1964-10-25T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-25T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1965-04-25T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1965-04-25T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1965-04-25T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1965-10-31T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1965-10-31T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1965-10-31T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1965-10-31T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1965-04-25T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1965-04-25T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1965-04-25T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1965-04-25T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1965-10-31T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1965-10-31T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1965-10-31T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1965-10-31T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-24T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1966-04-24T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1966-04-24T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1966-04-24T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1966-10-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1966-10-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1966-10-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1966-10-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1966-04-24T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1966-04-24T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1966-04-24T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1966-04-24T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1966-10-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1966-10-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1966-10-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1966-10-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1967-04-30T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1967-04-30T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1967-04-30T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1967-10-29T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1967-10-29T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1967-10-29T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1967-10-29T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1967-04-30T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1967-04-30T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1967-04-30T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1967-04-30T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1967-10-29T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1967-10-29T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1967-10-29T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1967-10-29T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-28T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1968-04-28T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1968-04-28T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1968-04-28T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1968-10-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1968-10-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1968-10-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1968-10-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1968-04-28T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1968-04-28T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1968-04-28T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1968-04-28T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1968-10-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1968-10-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1968-10-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1968-10-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1969-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1969-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1969-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1969-10-26T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1969-10-26T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1969-10-26T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1969-10-26T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1969-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1969-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1969-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1969-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1969-10-26T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1969-10-26T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1969-10-26T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1969-10-26T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-26T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1970-04-26T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1970-04-26T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1970-04-26T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1970-10-25T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1970-10-25T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1970-10-25T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1970-10-25T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1970-04-26T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1970-04-26T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1970-04-26T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1970-04-26T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1970-10-25T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1970-10-25T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1970-10-25T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1970-10-25T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-25T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1971-04-25T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1971-04-25T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1971-04-25T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1971-10-31T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1971-10-31T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1971-10-31T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1971-10-31T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1971-04-25T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1971-04-25T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1971-04-25T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1971-04-25T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1971-10-31T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1971-10-31T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1971-10-31T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1971-10-31T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1972-04-30T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1972-04-30T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1972-04-30T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1972-10-29T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1972-10-29T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1972-10-29T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1972-10-29T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1972-04-30T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1972-04-30T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1972-04-30T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1972-04-30T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1972-10-29T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1972-10-29T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1972-10-29T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1972-10-29T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1973-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1973-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1973-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1973-10-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1973-10-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1973-10-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1973-10-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1973-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1973-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1973-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1973-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1973-10-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1973-10-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1973-10-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1973-10-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-28T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1974-04-28T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1974-04-28T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1974-04-28T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1974-10-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1974-10-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1974-10-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1974-10-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1974-04-28T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1974-04-28T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1974-04-28T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1974-04-28T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1974-10-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1974-10-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1974-10-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1974-10-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1975-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1975-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1975-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1975-10-26T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1975-10-26T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1975-10-26T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1975-10-26T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1975-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1975-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1975-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1975-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1975-10-26T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1975-10-26T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1975-10-26T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1975-10-26T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-25T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1976-04-25T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1976-04-25T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1976-04-25T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1976-10-31T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1976-10-31T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1976-10-31T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1976-10-31T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1976-04-25T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1976-04-25T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1976-04-25T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1976-04-25T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1976-10-31T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1976-10-31T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1976-10-31T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1976-10-31T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-24T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1977-04-24T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1977-04-24T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1977-04-24T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1977-10-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1977-10-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1977-10-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1977-10-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1977-04-24T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1977-04-24T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1977-04-24T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1977-04-24T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1977-10-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1977-10-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1977-10-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1977-10-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1978-04-30T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1978-04-30T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1978-04-30T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1978-10-29T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1978-10-29T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1978-10-29T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1978-10-29T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1978-04-30T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1978-04-30T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1978-04-30T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1978-04-30T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1978-10-29T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1978-10-29T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1978-10-29T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1978-10-29T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1979-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1979-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1979-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1979-10-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1979-10-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1979-10-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1979-10-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1979-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1979-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1979-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1979-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1979-10-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1979-10-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1979-10-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1979-10-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1980-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1980-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1980-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1980-10-26T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1980-10-26T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1980-10-26T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1980-10-26T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1980-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1980-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1980-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1980-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1980-10-26T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1980-10-26T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1980-10-26T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1980-10-26T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-04-26T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1981-04-26T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1981-04-26T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1981-04-26T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1981-10-25T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1981-10-25T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1981-10-25T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1981-10-25T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1981-04-26T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1981-04-26T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1981-04-26T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1981-04-26T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1981-10-25T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1981-10-25T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1981-10-25T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1981-10-25T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1982" : function (t) {
		t.equal(moment("1982-04-25T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1982-04-25T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1982-04-25T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1982-04-25T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1982-10-31T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1982-10-31T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1982-10-31T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1982-10-31T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1982-04-25T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1982-04-25T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1982-04-25T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1982-04-25T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1982-10-31T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1982-10-31T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1982-10-31T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1982-10-31T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-24T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1983-04-24T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1983-04-24T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1983-04-24T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1983-10-30T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1983-10-30T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1983-10-30T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1983-10-30T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1983-04-24T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1983-04-24T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1983-04-24T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1983-04-24T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1983-10-30T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1983-10-30T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1983-10-30T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1983-10-30T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-29T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1984-04-29T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1984-04-29T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1984-04-29T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1984-10-28T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1984-10-28T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1984-10-28T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1984-10-28T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1984-04-29T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1984-04-29T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1984-04-29T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1984-04-29T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1984-10-28T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1984-10-28T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1984-10-28T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1984-10-28T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-28T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1985-04-28T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1985-04-28T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1985-04-28T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1985-10-27T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1985-10-27T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1985-10-27T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1985-10-27T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1985-04-28T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1985-04-28T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1985-04-28T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1985-04-28T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1985-10-27T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1985-10-27T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1985-10-27T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1985-10-27T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-04-27T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1986-04-27T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("1986-04-27T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "1986-04-27T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("1986-10-26T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "1986-10-26T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("1986-10-26T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "1986-10-26T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("1986-04-27T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "1986-04-27T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1986-04-27T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "1986-04-27T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1986-10-26T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "1986-10-26T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1986-10-26T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "1986-10-26T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-05T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1987-04-05T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1987-04-05T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1987-04-05T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1987-10-25T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1987-10-25T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1987-10-25T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1987-10-25T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1987-04-05T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1987-04-05T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1987-04-05T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1987-04-05T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1987-10-25T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1987-10-25T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1987-10-25T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1987-10-25T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-03T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1988-04-03T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1988-04-03T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "02:01:00", "1988-04-03T03:31:00+00:00 should be 02:01:00 NDDT");
		t.equal(moment("1988-10-30T01:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1988-10-30T01:30:59+00:00 should be 00:00:59 NDDT");
		t.equal(moment("1988-10-30T01:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "22:01:00", "1988-10-30T01:31:00+00:00 should be 22:01:00 NST");

		t.equal(moment("1988-04-03T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1988-04-03T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1988-04-03T03:31:00+00:00").tz("America/St_Johns").zone(), 90, "1988-04-03T03:31:00+00:00 should be 90 minutes offset in NDDT");
		t.equal(moment("1988-10-30T01:30:59+00:00").tz("America/St_Johns").zone(), 90, "1988-10-30T01:30:59+00:00 should be 90 minutes offset in NDDT");
		t.equal(moment("1988-10-30T01:31:00+00:00").tz("America/St_Johns").zone(), 210, "1988-10-30T01:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-02T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1989-04-02T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1989-04-02T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1989-04-02T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1989-10-29T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1989-10-29T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1989-10-29T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1989-10-29T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1989-04-02T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1989-04-02T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1989-04-02T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1989-04-02T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1989-10-29T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1989-10-29T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1989-10-29T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1989-10-29T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-04-01T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1990-04-01T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1990-04-01T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1990-04-01T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1990-10-28T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1990-10-28T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1990-10-28T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1990-10-28T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1990-04-01T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1990-04-01T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1990-04-01T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1990-04-01T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1990-10-28T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1990-10-28T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1990-10-28T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1990-10-28T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-04-07T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1991-04-07T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1991-04-07T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1991-04-07T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1991-10-27T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1991-10-27T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1991-10-27T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1991-10-27T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1991-04-07T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1991-04-07T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1991-04-07T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1991-04-07T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1991-10-27T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1991-10-27T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1991-10-27T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1991-10-27T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-05T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1992-04-05T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1992-04-05T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1992-04-05T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1992-10-25T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1992-10-25T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1992-10-25T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1992-10-25T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1992-04-05T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1992-04-05T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1992-04-05T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1992-04-05T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1992-10-25T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1992-10-25T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1992-10-25T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1992-10-25T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-04T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1993-04-04T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1993-04-04T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1993-04-04T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1993-10-31T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1993-10-31T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1993-10-31T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1993-10-31T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1993-04-04T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1993-04-04T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1993-04-04T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1993-04-04T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1993-10-31T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1993-10-31T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1993-10-31T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1993-10-31T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-04-03T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1994-04-03T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1994-04-03T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1994-04-03T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1994-10-30T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1994-10-30T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1994-10-30T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1994-10-30T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1994-04-03T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1994-04-03T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1994-04-03T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1994-04-03T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1994-10-30T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1994-10-30T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1994-10-30T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1994-10-30T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-04-02T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1995-04-02T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1995-04-02T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1995-04-02T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1995-10-29T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1995-10-29T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1995-10-29T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1995-10-29T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1995-04-02T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1995-04-02T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1995-04-02T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1995-04-02T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1995-10-29T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1995-10-29T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1995-10-29T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1995-10-29T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-07T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1996-04-07T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1996-04-07T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1996-04-07T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1996-10-27T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1996-10-27T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1996-10-27T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1996-10-27T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1996-04-07T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1996-04-07T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1996-04-07T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1996-04-07T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1996-10-27T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1996-10-27T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1996-10-27T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1996-10-27T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-06T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1997-04-06T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1997-04-06T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1997-04-06T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1997-10-26T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1997-10-26T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1997-10-26T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1997-10-26T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1997-04-06T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1997-04-06T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1997-04-06T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1997-04-06T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1997-10-26T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1997-10-26T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1997-10-26T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1997-10-26T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-05T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1998-04-05T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1998-04-05T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1998-04-05T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1998-10-25T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1998-10-25T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1998-10-25T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1998-10-25T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1998-04-05T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1998-04-05T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1998-04-05T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1998-04-05T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1998-10-25T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1998-10-25T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1998-10-25T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1998-10-25T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-04T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1999-04-04T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("1999-04-04T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "1999-04-04T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("1999-10-31T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "1999-10-31T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("1999-10-31T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "1999-10-31T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("1999-04-04T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "1999-04-04T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("1999-04-04T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "1999-04-04T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1999-10-31T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "1999-10-31T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("1999-10-31T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "1999-10-31T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-02T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2000-04-02T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2000-04-02T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2000-04-02T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2000-10-29T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2000-10-29T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2000-10-29T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2000-10-29T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2000-04-02T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2000-04-02T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2000-04-02T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2000-04-02T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2000-10-29T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2000-10-29T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2000-10-29T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2000-10-29T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-01T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2001-04-01T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2001-04-01T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2001-04-01T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2001-10-28T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2001-10-28T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2001-10-28T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2001-10-28T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2001-04-01T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2001-04-01T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2001-04-01T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2001-04-01T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2001-10-28T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2001-10-28T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2001-10-28T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2001-10-28T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-07T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2002-04-07T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2002-04-07T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2002-04-07T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2002-10-27T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2002-10-27T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2002-10-27T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2002-10-27T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2002-04-07T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2002-04-07T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2002-04-07T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2002-04-07T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2002-10-27T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2002-10-27T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2002-10-27T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2002-10-27T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-06T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2003-04-06T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2003-04-06T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2003-04-06T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2003-10-26T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2003-10-26T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2003-10-26T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2003-10-26T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2003-04-06T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2003-04-06T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2003-04-06T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2003-04-06T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2003-10-26T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2003-10-26T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2003-10-26T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2003-10-26T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-04T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2004-04-04T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2004-04-04T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2004-04-04T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2004-10-31T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2004-10-31T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2004-10-31T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2004-10-31T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2004-04-04T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2004-04-04T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2004-04-04T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2004-04-04T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2004-10-31T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2004-10-31T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2004-10-31T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2004-10-31T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-03T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2005-04-03T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2005-04-03T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2005-04-03T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2005-10-30T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2005-10-30T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2005-10-30T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2005-10-30T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2005-04-03T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2005-04-03T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2005-04-03T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2005-04-03T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2005-10-30T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2005-10-30T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2005-10-30T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2005-10-30T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-04-02T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2006-04-02T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2006-04-02T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2006-04-02T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2006-10-29T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2006-10-29T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2006-10-29T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2006-10-29T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2006-04-02T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2006-04-02T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2006-04-02T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2006-04-02T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2006-10-29T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2006-10-29T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2006-10-29T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2006-10-29T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2007-03-11T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2007-03-11T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2007-03-11T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2007-11-04T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2007-11-04T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2007-11-04T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2007-11-04T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2007-03-11T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2007-03-11T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2007-03-11T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2007-03-11T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2007-11-04T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2007-11-04T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2007-11-04T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2007-11-04T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2008-03-09T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2008-03-09T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2008-03-09T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2008-11-02T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2008-11-02T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2008-11-02T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2008-11-02T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2008-03-09T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2008-03-09T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2008-03-09T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2008-03-09T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2008-11-02T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2008-11-02T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2008-11-02T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2008-11-02T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2009-03-08T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2009-03-08T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2009-03-08T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2009-11-01T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2009-11-01T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2009-11-01T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2009-11-01T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2009-03-08T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2009-03-08T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2009-03-08T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2009-03-08T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2009-11-01T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2009-11-01T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2009-11-01T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2009-11-01T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2010-03-14T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2010-03-14T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2010-03-14T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2010-11-07T02:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2010-11-07T02:30:59+00:00 should be 00:00:59 NDT");
		t.equal(moment("2010-11-07T02:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "23:01:00", "2010-11-07T02:31:00+00:00 should be 23:01:00 NST");

		t.equal(moment("2010-03-14T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2010-03-14T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2010-03-14T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2010-03-14T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2010-11-07T02:30:59+00:00").tz("America/St_Johns").zone(), 150, "2010-11-07T02:30:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2010-11-07T02:31:00+00:00").tz("America/St_Johns").zone(), 210, "2010-11-07T02:31:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T03:30:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "00:00:59", "2011-03-13T03:30:59+00:00 should be 00:00:59 NST");
		t.equal(moment("2011-03-13T03:31:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:01:00", "2011-03-13T03:31:00+00:00 should be 01:01:00 NDT");
		t.equal(moment("2011-11-06T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2011-11-06T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2011-11-06T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2011-11-06T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2011-03-13T03:30:59+00:00").tz("America/St_Johns").zone(), 210, "2011-03-13T03:30:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2011-03-13T03:31:00+00:00").tz("America/St_Johns").zone(), 150, "2011-03-13T03:31:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2011-11-06T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2011-11-06T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2011-11-06T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2011-11-06T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2012-03-11T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2012-03-11T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2012-03-11T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2012-11-04T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2012-11-04T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2012-11-04T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2012-11-04T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2012-03-11T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2012-03-11T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2012-03-11T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2012-03-11T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2012-11-04T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2012-11-04T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2012-11-04T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2012-11-04T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2013-03-10T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2013-03-10T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2013-03-10T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2013-11-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2013-11-03T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2013-11-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2013-11-03T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2013-03-10T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2013-03-10T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2013-03-10T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2013-03-10T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2013-11-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2013-11-03T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2013-11-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2013-11-03T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2014-03-09T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2014-03-09T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2014-03-09T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2014-11-02T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2014-11-02T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2014-11-02T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2014-11-02T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2014-03-09T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2014-03-09T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2014-03-09T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2014-03-09T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2014-11-02T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2014-11-02T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2014-11-02T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2014-11-02T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2015-03-08T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2015-03-08T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2015-03-08T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2015-11-01T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2015-11-01T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2015-11-01T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2015-11-01T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2015-03-08T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2015-03-08T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2015-03-08T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2015-03-08T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2015-11-01T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2015-11-01T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2015-11-01T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2015-11-01T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2016-03-13T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2016-03-13T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2016-03-13T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2016-11-06T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2016-11-06T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2016-11-06T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2016-11-06T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2016-03-13T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2016-03-13T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2016-03-13T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2016-03-13T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2016-11-06T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2016-11-06T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2016-11-06T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2016-11-06T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2017-03-12T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2017-03-12T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2017-03-12T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2017-11-05T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2017-11-05T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2017-11-05T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2017-11-05T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2017-03-12T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2017-03-12T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2017-03-12T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2017-03-12T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2017-11-05T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2017-11-05T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2017-11-05T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2017-11-05T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2018-03-11T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2018-03-11T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2018-03-11T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2018-11-04T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2018-11-04T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2018-11-04T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2018-11-04T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2018-03-11T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2018-03-11T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2018-03-11T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2018-03-11T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2018-11-04T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2018-11-04T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2018-11-04T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2018-11-04T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2019-03-10T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2019-03-10T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2019-03-10T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2019-11-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2019-11-03T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2019-11-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2019-11-03T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2019-03-10T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2019-03-10T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2019-03-10T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2019-03-10T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2019-11-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2019-11-03T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2019-11-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2019-11-03T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2020-03-08T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2020-03-08T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2020-03-08T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2020-11-01T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2020-11-01T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2020-11-01T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2020-11-01T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2020-03-08T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2020-03-08T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2020-03-08T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2020-03-08T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2020-11-01T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2020-11-01T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2020-11-01T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2020-11-01T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2021-03-14T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2021-03-14T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2021-03-14T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2021-11-07T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2021-11-07T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2021-11-07T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2021-11-07T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2021-03-14T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2021-03-14T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2021-03-14T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2021-03-14T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2021-11-07T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2021-11-07T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2021-11-07T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2021-11-07T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2022-03-13T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2022-03-13T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2022-03-13T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2022-11-06T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2022-11-06T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2022-11-06T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2022-11-06T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2022-03-13T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2022-03-13T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2022-03-13T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2022-03-13T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2022-11-06T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2022-11-06T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2022-11-06T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2022-11-06T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2023-03-12T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2023-03-12T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2023-03-12T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2023-11-05T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2023-11-05T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2023-11-05T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2023-11-05T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2023-03-12T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2023-03-12T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2023-03-12T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2023-03-12T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2023-11-05T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2023-11-05T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2023-11-05T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2023-11-05T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2024-03-10T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2024-03-10T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2024-03-10T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2024-11-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2024-11-03T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2024-11-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2024-11-03T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2024-03-10T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2024-03-10T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2024-03-10T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2024-03-10T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2024-11-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2024-11-03T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2024-11-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2024-11-03T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2025-03-09T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2025-03-09T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2025-03-09T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2025-11-02T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2025-11-02T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2025-11-02T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2025-11-02T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2025-03-09T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2025-03-09T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2025-03-09T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2025-03-09T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2025-11-02T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2025-11-02T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2025-11-02T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2025-11-02T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2026-03-08T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2026-03-08T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2026-03-08T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2026-11-01T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2026-11-01T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2026-11-01T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2026-11-01T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2026-03-08T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2026-03-08T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2026-03-08T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2026-03-08T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2026-11-01T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2026-11-01T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2026-11-01T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2026-11-01T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2027-03-14T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2027-03-14T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2027-03-14T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2027-11-07T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2027-11-07T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2027-11-07T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2027-11-07T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2027-03-14T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2027-03-14T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2027-03-14T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2027-03-14T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2027-11-07T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2027-11-07T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2027-11-07T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2027-11-07T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2028-03-12T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2028-03-12T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2028-03-12T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2028-11-05T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2028-11-05T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2028-11-05T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2028-11-05T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2028-03-12T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2028-03-12T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2028-03-12T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2028-03-12T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2028-11-05T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2028-11-05T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2028-11-05T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2028-11-05T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2029-03-11T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2029-03-11T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2029-03-11T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2029-11-04T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2029-11-04T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2029-11-04T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2029-11-04T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2029-03-11T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2029-03-11T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2029-03-11T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2029-03-11T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2029-11-04T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2029-11-04T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2029-11-04T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2029-11-04T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2030-03-10T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2030-03-10T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2030-03-10T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2030-11-03T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2030-11-03T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2030-11-03T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2030-11-03T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2030-03-10T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2030-03-10T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2030-03-10T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2030-03-10T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2030-11-03T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2030-11-03T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2030-11-03T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2030-11-03T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2031-03-09T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2031-03-09T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2031-03-09T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2031-11-02T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2031-11-02T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2031-11-02T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2031-11-02T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2031-03-09T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2031-03-09T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2031-03-09T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2031-03-09T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2031-11-02T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2031-11-02T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2031-11-02T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2031-11-02T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2032-03-14T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2032-03-14T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2032-03-14T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2032-11-07T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2032-11-07T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2032-11-07T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2032-11-07T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2032-03-14T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2032-03-14T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2032-03-14T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2032-03-14T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2032-11-07T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2032-11-07T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2032-11-07T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2032-11-07T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2033-03-13T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2033-03-13T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2033-03-13T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2033-11-06T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2033-11-06T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2033-11-06T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2033-11-06T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2033-03-13T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2033-03-13T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2033-03-13T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2033-03-13T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2033-11-06T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2033-11-06T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2033-11-06T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2033-11-06T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2034-03-12T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2034-03-12T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2034-03-12T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2034-11-05T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2034-11-05T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2034-11-05T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2034-11-05T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2034-03-12T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2034-03-12T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2034-03-12T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2034-03-12T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2034-11-05T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2034-11-05T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2034-11-05T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2034-11-05T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2035-03-11T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2035-03-11T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2035-03-11T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2035-11-04T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2035-11-04T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2035-11-04T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2035-11-04T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2035-03-11T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2035-03-11T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2035-03-11T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2035-03-11T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2035-11-04T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2035-11-04T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2035-11-04T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2035-11-04T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2036-03-09T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2036-03-09T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2036-03-09T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2036-11-02T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2036-11-02T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2036-11-02T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2036-11-02T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2036-03-09T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2036-03-09T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2036-03-09T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2036-03-09T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2036-11-02T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2036-11-02T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2036-11-02T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2036-11-02T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T05:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2037-03-08T05:29:59+00:00 should be 01:59:59 NST");
		t.equal(moment("2037-03-08T05:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "03:00:00", "2037-03-08T05:30:00+00:00 should be 03:00:00 NDT");
		t.equal(moment("2037-11-01T04:29:59+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:59:59", "2037-11-01T04:29:59+00:00 should be 01:59:59 NDT");
		t.equal(moment("2037-11-01T04:30:00+00:00").tz("America/St_Johns").format("HH:mm:ss"), "01:00:00", "2037-11-01T04:30:00+00:00 should be 01:00:00 NST");

		t.equal(moment("2037-03-08T05:29:59+00:00").tz("America/St_Johns").zone(), 210, "2037-03-08T05:29:59+00:00 should be 210 minutes offset in NST");
		t.equal(moment("2037-03-08T05:30:00+00:00").tz("America/St_Johns").zone(), 150, "2037-03-08T05:30:00+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2037-11-01T04:29:59+00:00").tz("America/St_Johns").zone(), 150, "2037-11-01T04:29:59+00:00 should be 150 minutes offset in NDT");
		t.equal(moment("2037-11-01T04:30:00+00:00").tz("America/St_Johns").zone(), 210, "2037-11-01T04:30:00+00:00 should be 210 minutes offset in NST");

		t.done();
	}
};
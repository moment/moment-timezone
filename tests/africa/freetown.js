var moment = require("../../index");

exports["Africa/Freetown"] = {

	"1913" : function (t) {
		t.equal(moment("1913-06-01T00:52:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1913-06-01T00:52:59+00:00 should be 23:59:59 FMT");
		t.equal(moment("1913-06-01T00:53:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:53:00", "1913-06-01T00:53:00+00:00 should be 23:53:00 WAT");

		t.equal(moment("1913-06-01T00:52:59+00:00").tz("Africa/Freetown").zone(), 53, "1913-06-01T00:52:59+00:00 should be 53 minutes offset in FMT");
		t.equal(moment("1913-06-01T00:53:00+00:00").tz("Africa/Freetown").zone(), 60, "1913-06-01T00:53:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1935-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1935-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1935-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1935-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1935-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1935-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1935-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1935-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1935-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1935-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1935-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1935-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1935-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1935-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1935-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1936-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1936-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1936-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1936-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1936-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1936-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1936-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1936-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1936-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1936-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1936-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1936-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1936-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1936-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1936-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1937-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1937-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1937-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1937-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1937-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1937-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1937-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1937-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1937-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1937-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1937-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1937-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1937-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1937-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1937-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1938-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1938-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1938-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1938-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1938-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1938-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1938-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1938-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1938-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1938-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1938-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1938-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1938-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1938-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1938-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1939-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1939-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1939-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1939-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1939-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1939-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1939-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1939-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1939-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1939-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1939-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1939-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1939-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1939-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1939-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1940-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1940-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1940-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1940-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1940-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1940-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1940-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1940-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1940-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1940-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1940-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1940-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1940-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1940-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1940-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1941-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1941-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1941-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1941-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1941-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1941-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1941-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1941-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1941-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1941-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1941-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1941-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1941-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1941-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1941-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-06-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1942-06-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1942-06-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "00:40:00", "1942-06-01T01:00:00+00:00 should be 00:40:00 SLST");
		t.equal(moment("1942-10-01T00:19:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1942-10-01T00:19:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1942-10-01T00:20:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:20:00", "1942-10-01T00:20:00+00:00 should be 23:20:00 WAT");

		t.equal(moment("1942-06-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1942-06-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1942-06-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 20, "1942-06-01T01:00:00+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1942-10-01T00:19:59+00:00").tz("Africa/Freetown").zone(), 20, "1942-10-01T00:19:59+00:00 should be 20 minutes offset in SLST");
		t.equal(moment("1942-10-01T00:20:00+00:00").tz("Africa/Freetown").zone(), 60, "1942-10-01T00:20:00+00:00 should be 60 minutes offset in WAT");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-01-01T00:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1957-01-01T00:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1957-01-01T01:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1957-01-01T01:00:00+00:00 should be 01:00:00 WAT");
		t.equal(moment("1957-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1957-05-31T23:59:59+00:00 should be 23:59:59 WAT");
		t.equal(moment("1957-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1957-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1957-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1957-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1957-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1957-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1957-01-01T00:59:59+00:00").tz("Africa/Freetown").zone(), 60, "1957-01-01T00:59:59+00:00 should be 60 minutes offset in WAT");
		t.equal(moment("1957-01-01T01:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1957-01-01T01:00:00+00:00 should be 0 minutes offset in WAT");
		t.equal(moment("1957-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1957-05-31T23:59:59+00:00 should be 0 minutes offset in WAT");
		t.equal(moment("1957-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1957-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1957-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1957-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1957-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1957-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1958-05-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1958-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1958-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1958-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1958-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1958-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1958-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1958-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1958-05-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1958-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1958-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1958-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1958-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1958-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1958-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1959-05-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1959-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1959-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1959-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1959-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1959-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1959-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1959-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1959-05-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1959-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1959-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1959-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1959-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1959-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1959-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1960-05-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1960-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1960-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1960-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1960-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1960-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1960-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1960-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1960-05-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1960-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1960-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1960-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1960-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1960-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1960-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1961-05-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1961-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1961-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1961-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1961-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1961-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1961-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1961-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1961-05-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1961-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1961-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1961-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1961-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1961-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1961-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-05-31T23:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1962-05-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1962-06-01T00:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "01:00:00", "1962-06-01T00:00:00+00:00 should be 01:00:00 SLST");
		t.equal(moment("1962-08-31T22:59:59+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:59:59", "1962-08-31T22:59:59+00:00 should be 23:59:59 SLST");
		t.equal(moment("1962-08-31T23:00:00+00:00").tz("Africa/Freetown").format("HH:mm:ss"), "23:00:00", "1962-08-31T23:00:00+00:00 should be 23:00:00 GMT");

		t.equal(moment("1962-05-31T23:59:59+00:00").tz("Africa/Freetown").zone(), 0, "1962-05-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1962-06-01T00:00:00+00:00").tz("Africa/Freetown").zone(), -60, "1962-06-01T00:00:00+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1962-08-31T22:59:59+00:00").tz("Africa/Freetown").zone(), -60, "1962-08-31T22:59:59+00:00 should be -60 minutes offset in SLST");
		t.equal(moment("1962-08-31T23:00:00+00:00").tz("Africa/Freetown").zone(), 0, "1962-08-31T23:00:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
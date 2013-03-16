var moment = require("../../moment-timezone");

exports["Africa/Accra"] = {

	"1918" : function (t) {
		t.equal(moment("1918-01-01T00:00:51+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1918-01-01T00:00:51+00:00 should be 23:59:59 LMT");
		t.equal(moment("1918-01-01T00:00:52+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:00:52", "1918-01-01T00:00:52+00:00 should be 00:00:52 GMT");

		t.equal(moment("1918-01-01T00:00:51+00:00").tz("Africa/Accra").zone(), 0, "1918-01-01T00:00:51+00:00 should be 0 minutes offset in LMT");
		t.equal(moment("1918-01-01T00:00:52+00:00").tz("Africa/Accra").zone(), 0, "1918-01-01T00:00:52+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1936-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1936-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1936-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1936-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1936-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1936-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1936-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1936-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1936-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1936-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1936-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1936-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1936-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1936-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1936-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1937-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1937-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1937-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1937-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1937-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1937-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1937-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1937-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1937-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1937-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1937-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1937-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1937-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1937-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1937-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1938-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1938-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1938-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1938-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1938-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1938-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1938-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1938-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1938-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1938-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1938-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1938-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1938-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1938-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1938-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1939-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1939-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1939-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1939-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1939-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1939-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1939-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1939-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1939-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1939-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1939-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1939-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1939-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1939-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1939-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1940-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1940-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1940-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1940-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1940-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1940-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1940-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1940-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1940-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1940-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1940-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1940-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1940-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1940-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1940-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1941-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1941-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1941-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1941-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1941-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1941-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1941-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1941-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1941-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1941-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1941-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1941-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1941-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1941-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1941-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-08-31T23:59:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1942-08-31T23:59:59+00:00 should be 23:59:59 GMT");
		t.equal(moment("1942-09-01T00:00:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "00:20:00", "1942-09-01T00:00:00+00:00 should be 00:20:00 GHST");
		t.equal(moment("1942-12-30T23:39:59+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:59:59", "1942-12-30T23:39:59+00:00 should be 23:59:59 GHST");
		t.equal(moment("1942-12-30T23:40:00+00:00").tz("Africa/Accra").format("HH:mm:ss"), "23:40:00", "1942-12-30T23:40:00+00:00 should be 23:40:00 GMT");

		t.equal(moment("1942-08-31T23:59:59+00:00").tz("Africa/Accra").zone(), 0, "1942-08-31T23:59:59+00:00 should be 0 minutes offset in GMT");
		t.equal(moment("1942-09-01T00:00:00+00:00").tz("Africa/Accra").zone(), -20, "1942-09-01T00:00:00+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1942-12-30T23:39:59+00:00").tz("Africa/Accra").zone(), -20, "1942-12-30T23:39:59+00:00 should be -20 minutes offset in GHST");
		t.equal(moment("1942-12-30T23:40:00+00:00").tz("Africa/Accra").zone(), 0, "1942-12-30T23:40:00+00:00 should be 0 minutes offset in GMT");

		t.done();
	}
};
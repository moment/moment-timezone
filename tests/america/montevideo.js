var moment = require("../../index");

exports["America/Montevideo"] = {

	"1920" : function (t) {
		t.equal(moment("1920-05-01T03:44:43+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1920-05-01T03:44:43+00:00 should be 23:59:59 MMT");
		t.equal(moment("1920-05-01T03:44:44+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:14:44", "1920-05-01T03:44:44+00:00 should be 00:14:44 UYT");

		t.equal(moment("1920-05-01T03:44:43+00:00").tz("America/Montevideo").zone(), 13484 / 60, "1920-05-01T03:44:43+00:00 should be 13484 / 60 minutes offset in MMT");
		t.equal(moment("1920-05-01T03:44:44+00:00").tz("America/Montevideo").zone(), 210, "1920-05-01T03:44:44+00:00 should be 210 minutes offset in UYT");

		t.done();
	},

	"1923" : function (t) {
		t.equal(moment("1923-10-02T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1923-10-02T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1923-10-02T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1923-10-02T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1923-10-02T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1923-10-02T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1923-10-02T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1923-10-02T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1924" : function (t) {
		t.equal(moment("1924-04-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1924-04-01T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1924-04-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1924-04-01T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1924-10-01T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1924-10-01T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1924-10-01T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1924-10-01T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1924-04-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1924-04-01T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1924-04-01T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1924-04-01T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1924-10-01T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1924-10-01T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1924-10-01T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1924-10-01T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1925" : function (t) {
		t.equal(moment("1925-04-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1925-04-01T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1925-04-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1925-04-01T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1925-10-01T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1925-10-01T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1925-10-01T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1925-10-01T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1925-04-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1925-04-01T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1925-04-01T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1925-04-01T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1925-10-01T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1925-10-01T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1925-10-01T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1925-10-01T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1926" : function (t) {
		t.equal(moment("1926-04-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1926-04-01T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1926-04-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1926-04-01T03:00:00+00:00 should be 23:30:00 UYT");

		t.equal(moment("1926-04-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1926-04-01T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1926-04-01T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1926-04-01T03:00:00+00:00 should be 210 minutes offset in UYT");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-10-29T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1933-10-29T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1933-10-29T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1933-10-29T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1933-10-29T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1933-10-29T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1933-10-29T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1933-10-29T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-04-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1934-04-01T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1934-04-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1934-04-01T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1934-10-28T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1934-10-28T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1934-10-28T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1934-10-28T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1934-04-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1934-04-01T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1934-04-01T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1934-04-01T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1934-10-28T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1934-10-28T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1934-10-28T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1934-10-28T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-03-31T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1935-03-31T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1935-03-31T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1935-03-31T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1935-10-27T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1935-10-27T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1935-10-27T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1935-10-27T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1935-03-31T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1935-03-31T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1935-03-31T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1935-03-31T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1935-10-27T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1935-10-27T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1935-10-27T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1935-10-27T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-03-29T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1936-03-29T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1936-03-29T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1936-03-29T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1936-11-01T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1936-11-01T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1936-11-01T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1936-11-01T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1936-03-29T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1936-03-29T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1936-03-29T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1936-03-29T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1936-11-01T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1936-11-01T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1936-11-01T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1936-11-01T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-03-28T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1937-03-28T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1937-03-28T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1937-03-28T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1937-10-31T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1937-10-31T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1937-10-31T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1937-10-31T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1937-03-28T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1937-03-28T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1937-03-28T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1937-03-28T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1937-10-31T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1937-10-31T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1937-10-31T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1937-10-31T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-03-27T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1938-03-27T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1938-03-27T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1938-03-27T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1938-10-30T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1938-10-30T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1938-10-30T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1938-10-30T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1938-03-27T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1938-03-27T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1938-03-27T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1938-03-27T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1938-10-30T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1938-10-30T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1938-10-30T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1938-10-30T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-03-26T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1939-03-26T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1939-03-26T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1939-03-26T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1939-10-29T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1939-10-29T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1939-10-29T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1939-10-29T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1939-03-26T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1939-03-26T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1939-03-26T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1939-03-26T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1939-10-29T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1939-10-29T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1939-10-29T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1939-10-29T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-03-31T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1940-03-31T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1940-03-31T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1940-03-31T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1940-10-27T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1940-10-27T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1940-10-27T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1940-10-27T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1940-03-31T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1940-03-31T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1940-03-31T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1940-03-31T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1940-10-27T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1940-10-27T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1940-10-27T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1940-10-27T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-03-30T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1941-03-30T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1941-03-30T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1941-03-30T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1941-08-01T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1941-08-01T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1941-08-01T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1941-08-01T03:30:00+00:00 should be 00:30:00 UYHST");

		t.equal(moment("1941-03-30T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1941-03-30T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1941-03-30T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1941-03-30T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1941-08-01T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1941-08-01T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1941-08-01T03:30:00+00:00").tz("America/Montevideo").zone(), 180, "1941-08-01T03:30:00+00:00 should be 180 minutes offset in UYHST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-01-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1942-01-01T02:59:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1942-01-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1942-01-01T03:00:00+00:00 should be 23:30:00 UYT");
		t.equal(moment("1942-12-14T03:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1942-12-14T03:29:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1942-12-14T03:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:30:00", "1942-12-14T03:30:00+00:00 should be 01:30:00 UYST");

		t.equal(moment("1942-01-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1942-01-01T02:59:59+00:00 should be 180 minutes offset in UYHST");
		t.equal(moment("1942-01-01T03:00:00+00:00").tz("America/Montevideo").zone(), 210, "1942-01-01T03:00:00+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1942-12-14T03:29:59+00:00").tz("America/Montevideo").zone(), 210, "1942-12-14T03:29:59+00:00 should be 210 minutes offset in UYT");
		t.equal(moment("1942-12-14T03:30:00+00:00").tz("America/Montevideo").zone(), 120, "1942-12-14T03:30:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-14T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1943-03-14T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1943-03-14T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1943-03-14T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1943-03-14T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1943-03-14T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1943-03-14T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1943-03-14T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-05-24T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1959-05-24T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1959-05-24T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1959-05-24T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1959-11-15T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1959-11-15T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1959-11-15T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1959-11-15T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1959-05-24T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1959-05-24T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1959-05-24T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1959-05-24T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1959-11-15T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1959-11-15T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1959-11-15T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1959-11-15T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-01-17T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1960-01-17T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1960-01-17T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1960-01-17T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1960-03-06T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1960-03-06T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1960-03-06T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1960-03-06T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1960-01-17T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1960-01-17T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1960-01-17T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1960-01-17T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1960-03-06T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1960-03-06T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1960-03-06T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1960-03-06T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-04T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1965-04-04T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1965-04-04T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1965-04-04T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1965-09-26T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1965-09-26T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1965-09-26T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1965-09-26T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1965-04-04T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1965-04-04T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1965-04-04T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1965-04-04T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1965-09-26T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1965-09-26T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1965-09-26T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1965-09-26T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-03T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1966-04-03T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1966-04-03T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1966-04-03T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1966-10-31T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1966-10-31T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1966-10-31T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1966-10-31T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1966-04-03T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1966-04-03T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1966-04-03T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1966-04-03T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1966-10-31T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1966-10-31T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1966-10-31T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1966-10-31T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-02T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1967-04-02T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1967-04-02T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1967-10-31T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1967-10-31T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1967-10-31T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1967-10-31T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1967-04-02T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1967-04-02T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1967-04-02T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1967-10-31T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1967-10-31T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1967-10-31T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1967-10-31T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-05-27T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1968-05-27T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1968-05-27T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1968-05-27T03:00:00+00:00 should be 00:30:00 UYHST");
		t.equal(moment("1968-12-02T02:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1968-12-02T02:29:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1968-12-02T02:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1968-12-02T02:30:00+00:00 should be 23:30:00 UYT");

		t.equal(moment("1968-05-27T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1968-05-27T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1968-05-27T03:00:00+00:00").tz("America/Montevideo").zone(), 150, "1968-05-27T03:00:00+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1968-12-02T02:29:59+00:00").tz("America/Montevideo").zone(), 150, "1968-12-02T02:29:59+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1968-12-02T02:30:00+00:00").tz("America/Montevideo").zone(), 180, "1968-12-02T02:30:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-05-27T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1969-05-27T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1969-05-27T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1969-05-27T03:00:00+00:00 should be 00:30:00 UYHST");
		t.equal(moment("1969-12-02T02:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1969-12-02T02:29:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1969-12-02T02:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1969-12-02T02:30:00+00:00 should be 23:30:00 UYT");

		t.equal(moment("1969-05-27T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1969-05-27T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1969-05-27T03:00:00+00:00").tz("America/Montevideo").zone(), 150, "1969-05-27T03:00:00+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1969-12-02T02:29:59+00:00").tz("America/Montevideo").zone(), 150, "1969-12-02T02:29:59+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1969-12-02T02:30:00+00:00").tz("America/Montevideo").zone(), 180, "1969-12-02T02:30:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-05-27T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1970-05-27T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1970-05-27T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1970-05-27T03:00:00+00:00 should be 00:30:00 UYHST");
		t.equal(moment("1970-12-02T02:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1970-12-02T02:29:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1970-12-02T02:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:30:00", "1970-12-02T02:30:00+00:00 should be 23:30:00 UYT");

		t.equal(moment("1970-05-27T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1970-05-27T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1970-05-27T03:00:00+00:00").tz("America/Montevideo").zone(), 150, "1970-05-27T03:00:00+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1970-12-02T02:29:59+00:00").tz("America/Montevideo").zone(), 150, "1970-12-02T02:29:59+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1970-12-02T02:30:00+00:00").tz("America/Montevideo").zone(), 180, "1970-12-02T02:30:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-24T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1972-04-24T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1972-04-24T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1972-04-24T03:00:00+00:00 should be 01:00:00 UYST");
		t.equal(moment("1972-08-15T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1972-08-15T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1972-08-15T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1972-08-15T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1972-04-24T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1972-04-24T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1972-04-24T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1972-04-24T03:00:00+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1972-08-15T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1972-08-15T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1972-08-15T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1972-08-15T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-03-10T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1974-03-10T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1974-03-10T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1974-03-10T03:00:00+00:00 should be 00:30:00 UYHST");
		t.equal(moment("1974-12-22T02:29:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1974-12-22T02:29:59+00:00 should be 23:59:59 UYHST");
		t.equal(moment("1974-12-22T02:30:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "00:30:00", "1974-12-22T02:30:00+00:00 should be 00:30:00 UYST");

		t.equal(moment("1974-03-10T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1974-03-10T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1974-03-10T03:00:00+00:00").tz("America/Montevideo").zone(), 150, "1974-03-10T03:00:00+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1974-12-22T02:29:59+00:00").tz("America/Montevideo").zone(), 150, "1974-12-22T02:29:59+00:00 should be 150 minutes offset in UYHST");
		t.equal(moment("1974-12-22T02:30:00+00:00").tz("America/Montevideo").zone(), 120, "1974-12-22T02:30:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-10-01T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1976-10-01T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1976-10-01T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1976-10-01T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1976-10-01T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1976-10-01T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1976-10-01T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1976-10-01T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-12-04T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1977-12-04T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1977-12-04T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1977-12-04T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1977-12-04T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1977-12-04T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1977-12-04T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1977-12-04T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-01T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1978-04-01T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1978-04-01T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1978-04-01T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1978-04-01T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1978-04-01T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1978-04-01T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1978-04-01T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-10-01T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1979-10-01T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1979-10-01T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1979-10-01T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1979-10-01T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1979-10-01T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1979-10-01T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1979-10-01T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-05-01T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1980-05-01T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1980-05-01T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1980-05-01T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1980-05-01T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1980-05-01T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1980-05-01T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1980-05-01T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-12-14T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1987-12-14T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1987-12-14T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1987-12-14T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1987-12-14T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1987-12-14T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1987-12-14T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1987-12-14T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-14T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1988-03-14T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1988-03-14T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1988-03-14T02:00:00+00:00 should be 23:00:00 UYT");
		t.equal(moment("1988-12-11T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1988-12-11T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1988-12-11T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1988-12-11T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1988-03-14T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1988-03-14T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1988-03-14T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1988-03-14T02:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1988-12-11T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1988-12-11T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1988-12-11T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1988-12-11T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-12T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1989-03-12T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1989-03-12T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1989-03-12T02:00:00+00:00 should be 23:00:00 UYT");
		t.equal(moment("1989-10-29T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1989-10-29T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1989-10-29T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1989-10-29T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1989-03-12T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1989-03-12T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1989-03-12T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1989-03-12T02:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1989-10-29T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1989-10-29T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1989-10-29T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1989-10-29T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-04T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1990-03-04T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1990-03-04T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1990-03-04T02:00:00+00:00 should be 23:00:00 UYT");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1990-10-21T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1990-10-21T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1990-03-04T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1990-03-04T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1990-03-04T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1990-03-04T02:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1990-10-21T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1990-10-21T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-03T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1991-03-03T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1991-03-03T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1991-03-03T02:00:00+00:00 should be 23:00:00 UYT");
		t.equal(moment("1991-10-27T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1991-10-27T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1991-10-27T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1991-10-27T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1991-03-03T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1991-03-03T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1991-03-03T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1991-03-03T02:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1991-10-27T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1991-10-27T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1991-10-27T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1991-10-27T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-01T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1992-03-01T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1992-03-01T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1992-03-01T02:00:00+00:00 should be 23:00:00 UYT");
		t.equal(moment("1992-10-18T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1992-10-18T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("1992-10-18T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "1992-10-18T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("1992-03-01T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1992-03-01T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1992-03-01T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1992-03-01T02:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1992-10-18T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "1992-10-18T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("1992-10-18T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "1992-10-18T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-02-28T01:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "1993-02-28T01:59:59+00:00 should be 23:59:59 UYST");
		t.equal(moment("1993-02-28T02:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:00:00", "1993-02-28T02:00:00+00:00 should be 23:00:00 UYT");

		t.equal(moment("1993-02-28T01:59:59+00:00").tz("America/Montevideo").zone(), 120, "1993-02-28T01:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("1993-02-28T02:00:00+00:00").tz("America/Montevideo").zone(), 180, "1993-02-28T02:00:00+00:00 should be 180 minutes offset in UYT");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-09-19T02:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "23:59:59", "2004-09-19T02:59:59+00:00 should be 23:59:59 UYT");
		t.equal(moment("2004-09-19T03:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2004-09-19T03:00:00+00:00 should be 01:00:00 UYST");

		t.equal(moment("2004-09-19T02:59:59+00:00").tz("America/Montevideo").zone(), 180, "2004-09-19T02:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2004-09-19T03:00:00+00:00").tz("America/Montevideo").zone(), 120, "2004-09-19T03:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-27T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2005-03-27T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2005-03-27T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2005-03-27T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2005-10-09T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2005-10-09T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2005-10-09T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2005-10-09T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2005-03-27T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2005-03-27T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2005-03-27T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2005-03-27T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2005-10-09T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2005-10-09T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2005-10-09T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2005-10-09T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-12T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2006-03-12T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2006-03-12T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2006-03-12T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2006-10-01T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2006-10-01T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2006-10-01T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2006-10-01T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2006-03-12T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2006-03-12T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2006-03-12T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2006-03-12T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2006-10-01T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2006-10-01T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2006-10-01T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2006-10-01T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-11T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2007-03-11T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2007-03-11T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2007-03-11T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2007-10-07T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2007-10-07T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2007-10-07T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2007-10-07T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2007-03-11T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2007-03-11T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2007-03-11T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2007-03-11T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2007-10-07T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2007-10-07T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2007-10-07T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2007-10-07T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-09T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2008-03-09T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2008-03-09T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2008-03-09T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2008-10-05T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2008-10-05T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2008-10-05T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2008-10-05T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2008-03-09T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2008-03-09T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2008-03-09T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2008-03-09T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2008-10-05T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2008-10-05T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2008-10-05T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2008-10-05T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-08T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2009-03-08T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2009-03-08T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2009-03-08T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2009-10-04T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2009-10-04T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2009-10-04T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2009-10-04T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2009-03-08T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2009-03-08T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2009-03-08T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2009-03-08T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2009-10-04T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2009-10-04T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2009-10-04T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2009-10-04T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-14T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2010-03-14T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2010-03-14T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2010-03-14T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2010-10-03T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2010-10-03T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2010-10-03T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2010-10-03T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2010-03-14T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2010-03-14T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2010-03-14T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2010-03-14T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2010-10-03T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2010-10-03T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2010-10-03T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2010-10-03T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-13T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2011-03-13T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2011-03-13T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2011-03-13T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2011-10-02T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2011-10-02T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2011-10-02T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2011-10-02T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2011-03-13T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2011-03-13T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2011-03-13T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2011-03-13T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2011-10-02T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2011-10-02T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2011-10-02T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2011-10-02T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-11T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2012-03-11T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2012-03-11T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2012-03-11T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2012-10-07T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2012-10-07T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2012-10-07T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2012-10-07T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2012-03-11T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2012-03-11T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2012-03-11T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2012-03-11T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2012-10-07T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2012-10-07T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2012-10-07T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2012-10-07T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-10T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2013-03-10T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2013-03-10T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2013-03-10T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2013-10-06T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2013-10-06T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2013-10-06T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2013-10-06T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2013-03-10T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2013-03-10T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2013-03-10T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2013-03-10T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2013-10-06T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2013-10-06T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2013-10-06T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2013-10-06T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2014-03-09T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2014-03-09T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2014-03-09T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2014-10-05T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2014-10-05T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2014-10-05T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2014-10-05T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2014-03-09T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2014-03-09T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2014-03-09T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2014-03-09T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2014-10-05T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2014-10-05T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2014-10-05T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2014-10-05T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2015-03-08T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2015-03-08T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2015-03-08T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2015-10-04T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2015-10-04T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2015-10-04T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2015-10-04T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2015-03-08T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2015-03-08T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2015-03-08T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2015-03-08T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2015-10-04T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2015-10-04T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2015-10-04T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2015-10-04T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2016-03-13T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2016-03-13T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2016-03-13T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2016-10-02T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2016-10-02T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2016-10-02T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2016-10-02T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2016-03-13T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2016-03-13T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2016-03-13T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2016-03-13T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2016-10-02T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2016-10-02T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2016-10-02T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2016-10-02T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2017-03-12T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2017-03-12T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2017-03-12T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2017-10-01T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2017-10-01T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2017-10-01T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2017-10-01T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2017-03-12T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2017-03-12T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2017-03-12T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2017-03-12T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2017-10-01T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2017-10-01T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2017-10-01T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2017-10-01T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2018-03-11T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2018-03-11T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2018-03-11T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2018-10-07T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2018-10-07T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2018-10-07T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2018-10-07T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2018-03-11T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2018-03-11T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2018-03-11T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2018-03-11T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2018-10-07T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2018-10-07T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2018-10-07T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2018-10-07T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2019-03-10T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2019-03-10T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2019-03-10T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2019-10-06T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2019-10-06T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2019-10-06T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2019-10-06T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2019-03-10T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2019-03-10T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2019-03-10T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2019-03-10T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2019-10-06T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2019-10-06T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2019-10-06T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2019-10-06T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2020-03-08T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2020-03-08T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2020-03-08T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2020-10-04T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2020-10-04T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2020-10-04T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2020-10-04T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2020-03-08T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2020-03-08T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2020-03-08T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2020-03-08T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2020-10-04T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2020-10-04T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2020-10-04T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2020-10-04T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2021-03-14T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2021-03-14T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2021-03-14T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2021-10-03T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2021-10-03T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2021-10-03T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2021-10-03T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2021-03-14T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2021-03-14T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2021-03-14T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2021-03-14T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2021-10-03T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2021-10-03T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2021-10-03T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2021-10-03T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2022-03-13T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2022-03-13T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2022-03-13T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2022-10-02T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2022-10-02T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2022-10-02T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2022-10-02T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2022-03-13T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2022-03-13T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2022-03-13T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2022-03-13T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2022-10-02T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2022-10-02T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2022-10-02T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2022-10-02T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2023-03-12T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2023-03-12T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2023-03-12T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2023-10-01T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2023-10-01T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2023-10-01T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2023-10-01T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2023-03-12T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2023-03-12T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2023-03-12T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2023-03-12T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2023-10-01T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2023-10-01T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2023-10-01T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2023-10-01T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2024-03-10T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2024-03-10T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2024-03-10T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2024-10-06T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2024-10-06T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2024-10-06T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2024-10-06T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2024-03-10T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2024-03-10T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2024-03-10T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2024-03-10T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2024-10-06T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2024-10-06T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2024-10-06T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2024-10-06T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2025-03-09T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2025-03-09T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2025-03-09T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2025-10-05T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2025-10-05T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2025-10-05T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2025-10-05T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2025-03-09T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2025-03-09T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2025-03-09T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2025-03-09T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2025-10-05T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2025-10-05T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2025-10-05T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2025-10-05T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2026-03-08T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2026-03-08T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2026-03-08T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2026-10-04T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2026-10-04T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2026-10-04T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2026-10-04T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2026-03-08T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2026-03-08T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2026-03-08T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2026-03-08T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2026-10-04T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2026-10-04T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2026-10-04T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2026-10-04T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2027-03-14T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2027-03-14T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2027-03-14T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2027-10-03T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2027-10-03T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2027-10-03T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2027-10-03T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2027-03-14T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2027-03-14T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2027-03-14T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2027-03-14T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2027-10-03T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2027-10-03T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2027-10-03T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2027-10-03T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2028-03-12T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2028-03-12T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2028-03-12T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2028-10-01T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2028-10-01T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2028-10-01T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2028-10-01T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2028-03-12T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2028-03-12T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2028-03-12T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2028-03-12T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2028-10-01T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2028-10-01T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2028-10-01T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2028-10-01T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2029-03-11T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2029-03-11T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2029-03-11T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2029-10-07T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2029-10-07T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2029-10-07T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2029-10-07T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2029-03-11T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2029-03-11T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2029-03-11T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2029-03-11T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2029-10-07T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2029-10-07T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2029-10-07T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2029-10-07T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2030-03-10T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2030-03-10T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2030-03-10T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2030-10-06T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2030-10-06T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2030-10-06T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2030-10-06T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2030-03-10T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2030-03-10T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2030-03-10T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2030-03-10T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2030-10-06T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2030-10-06T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2030-10-06T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2030-10-06T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2031-03-09T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2031-03-09T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2031-03-09T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2031-10-05T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2031-10-05T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2031-10-05T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2031-10-05T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2031-03-09T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2031-03-09T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2031-03-09T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2031-03-09T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2031-10-05T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2031-10-05T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2031-10-05T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2031-10-05T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2032-03-14T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2032-03-14T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2032-03-14T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2032-10-03T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2032-10-03T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2032-10-03T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2032-10-03T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2032-03-14T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2032-03-14T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2032-03-14T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2032-03-14T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2032-10-03T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2032-10-03T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2032-10-03T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2032-10-03T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2033-03-13T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2033-03-13T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2033-03-13T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2033-10-02T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2033-10-02T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2033-10-02T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2033-10-02T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2033-03-13T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2033-03-13T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2033-03-13T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2033-03-13T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2033-10-02T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2033-10-02T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2033-10-02T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2033-10-02T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2034-03-12T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2034-03-12T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2034-03-12T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2034-10-01T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2034-10-01T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2034-10-01T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2034-10-01T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2034-03-12T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2034-03-12T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2034-03-12T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2034-03-12T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2034-10-01T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2034-10-01T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2034-10-01T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2034-10-01T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2035-03-11T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2035-03-11T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2035-03-11T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2035-10-07T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2035-10-07T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2035-10-07T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2035-10-07T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2035-03-11T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2035-03-11T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2035-03-11T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2035-03-11T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2035-10-07T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2035-10-07T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2035-10-07T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2035-10-07T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2036-03-09T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2036-03-09T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2036-03-09T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2036-10-05T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2036-10-05T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2036-10-05T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2036-10-05T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2036-03-09T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2036-03-09T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2036-03-09T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2036-03-09T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2036-10-05T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2036-10-05T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2036-10-05T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2036-10-05T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T03:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2037-03-08T03:59:59+00:00 should be 01:59:59 UYST");
		t.equal(moment("2037-03-08T04:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:00:00", "2037-03-08T04:00:00+00:00 should be 01:00:00 UYT");
		t.equal(moment("2037-10-04T04:59:59+00:00").tz("America/Montevideo").format("HH:mm:ss"), "01:59:59", "2037-10-04T04:59:59+00:00 should be 01:59:59 UYT");
		t.equal(moment("2037-10-04T05:00:00+00:00").tz("America/Montevideo").format("HH:mm:ss"), "03:00:00", "2037-10-04T05:00:00+00:00 should be 03:00:00 UYST");

		t.equal(moment("2037-03-08T03:59:59+00:00").tz("America/Montevideo").zone(), 120, "2037-03-08T03:59:59+00:00 should be 120 minutes offset in UYST");
		t.equal(moment("2037-03-08T04:00:00+00:00").tz("America/Montevideo").zone(), 180, "2037-03-08T04:00:00+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2037-10-04T04:59:59+00:00").tz("America/Montevideo").zone(), 180, "2037-10-04T04:59:59+00:00 should be 180 minutes offset in UYT");
		t.equal(moment("2037-10-04T05:00:00+00:00").tz("America/Montevideo").zone(), 120, "2037-10-04T05:00:00+00:00 should be 120 minutes offset in UYST");

		t.done();
	}
};
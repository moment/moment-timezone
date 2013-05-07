var moment = require("../../../moment-timezone");

exports["America/Argentina/Catamarca"] = {

	"1920" : function (t) {
		t.equal(moment("1920-05-01T04:16:47+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1920-05-01T04:16:47+00:00 should be 23:59:59 CMT");
		t.equal(moment("1920-05-01T04:16:48+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "00:16:48", "1920-05-01T04:16:48+00:00 should be 00:16:48 ART");

		t.equal(moment("1920-05-01T04:16:47+00:00").tz("America/Argentina/Catamarca").zone(), 15408 / 60, "1920-05-01T04:16:47+00:00 should be 15408 / 60 minutes offset in CMT");
		t.equal(moment("1920-05-01T04:16:48+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1920-05-01T04:16:48+00:00 should be 240 minutes offset in ART");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-12-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1930-12-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1930-12-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1930-12-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1930-12-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1930-12-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1930-12-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1930-12-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-04-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1931-04-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1931-04-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1931-04-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1931-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1931-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1931-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1931-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1931-04-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1931-04-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1931-04-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1931-04-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1931-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1931-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1931-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1931-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1932-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1932-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1932-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1932-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1932-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1932-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1932-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1932-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1932-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1932-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1932-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1932-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1932-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1932-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1932-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1933-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1933-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1933-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1933-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1933-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1933-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1933-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1933-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1933-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1933-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1933-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1933-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1933-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1933-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1933-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1934-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1934-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1934-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1934-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1934-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1934-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1934-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1934-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1934-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1934-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1934-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1934-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1934-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1934-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1934-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1935-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1935-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1935-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1935-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1935-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1935-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1935-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1935-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1935-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1935-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1935-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1935-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1935-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1935-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1935-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1936-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1936-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1936-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1936-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1936-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1936-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1936-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1936-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1936-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1936-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1936-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1936-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1936-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1936-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1936-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1937-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1937-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1937-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1937-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1937-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1937-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1937-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1937-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1937-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1937-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1937-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1937-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1937-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1937-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1937-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1938-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1938-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1938-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1938-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1938-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1938-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1938-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1938-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1938-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1938-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1938-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1938-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1938-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1938-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1938-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1939-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1939-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1939-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1939-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1939-11-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1939-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1939-11-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1939-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1939-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1939-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1939-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1939-11-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1939-11-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1939-11-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1939-11-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1940-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1940-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1940-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1940-07-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1940-07-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1940-07-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1940-07-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1940-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1940-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1940-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1940-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1940-07-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1940-07-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1940-07-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1940-07-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-06-15T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1941-06-15T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1941-06-15T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1941-06-15T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1941-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1941-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1941-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1941-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1941-06-15T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1941-06-15T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1941-06-15T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1941-06-15T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1941-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1941-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1941-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1941-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-08-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1943-08-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1943-08-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1943-08-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1943-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1943-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1943-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1943-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1943-08-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1943-08-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1943-08-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1943-08-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1943-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1943-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1943-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1943-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1946-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1946-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1946-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1946-10-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1946-10-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1946-10-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1946-10-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1946-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1946-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1946-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1946-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1946-10-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1946-10-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1946-10-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1946-10-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-10-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1963-10-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1963-10-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1963-10-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1963-12-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1963-12-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1963-12-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1963-12-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1963-10-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1963-10-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1963-10-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1963-10-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1963-12-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1963-12-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1963-12-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1963-12-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1964-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1964-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1964-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1964-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1964-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1964-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1964-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1964-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1964-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1964-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1964-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1964-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1964-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1964-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1965-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1965-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1965-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1965-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1965-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1965-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1965-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1965-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1965-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1965-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1965-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1965-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1965-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1965-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1965-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1966-03-01T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1966-03-01T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1966-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1966-10-15T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1966-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1966-10-15T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1966-03-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1966-03-01T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1966-03-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1966-03-01T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1966-10-15T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1966-10-15T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1966-10-15T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1966-10-15T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-02T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1967-04-02T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1967-04-02T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1967-10-01T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1967-10-01T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1967-10-01T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1967-04-02T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1967-04-02T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1967-04-02T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1967-04-02T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1967-10-01T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1967-10-01T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1967-10-01T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1967-10-01T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-07T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1968-04-07T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1968-04-07T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1968-04-07T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1968-10-06T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1968-10-06T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1968-10-06T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1968-10-06T04:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1968-04-07T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1968-04-07T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1968-04-07T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1968-04-07T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1968-10-06T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1968-10-06T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1968-10-06T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1968-10-06T04:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-06T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1969-04-06T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1969-04-06T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1969-04-06T03:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1969-10-05T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1969-10-05T03:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1969-10-05T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1969-10-05T04:00:00+00:00 should be 01:00:00 ART");

		t.equal(moment("1969-04-06T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1969-04-06T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("1969-04-06T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1969-04-06T03:00:00+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1969-10-05T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1969-10-05T03:59:59+00:00 should be 240 minutes offset in ART");
		t.equal(moment("1969-10-05T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1969-10-05T04:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-01-23T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1974-01-23T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1974-01-23T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1974-01-23T03:00:00+00:00 should be 01:00:00 ARST");
		t.equal(moment("1974-05-01T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1974-05-01T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1974-05-01T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1974-05-01T02:00:00+00:00 should be 23:00:00 ART");

		t.equal(moment("1974-01-23T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1974-01-23T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1974-01-23T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1974-01-23T03:00:00+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1974-05-01T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1974-05-01T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1974-05-01T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1974-05-01T02:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-12-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1988-12-01T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1988-12-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1988-12-01T03:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1988-12-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1988-12-01T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1988-12-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1988-12-01T03:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-05T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1989-03-05T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1989-03-05T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1989-03-05T02:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1989-10-15T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1989-10-15T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1989-10-15T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1989-10-15T03:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1989-03-05T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1989-03-05T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1989-03-05T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1989-03-05T02:00:00+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1989-10-15T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1989-10-15T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1989-10-15T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1989-10-15T03:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-04T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1990-03-04T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1990-03-04T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1990-03-04T02:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1990-10-21T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1990-10-21T03:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1990-03-04T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1990-03-04T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1990-03-04T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1990-03-04T02:00:00+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1990-10-21T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1990-10-21T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1990-10-21T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1990-10-21T03:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-03T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1991-03-03T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1991-03-03T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "22:00:00", "1991-03-03T02:00:00+00:00 should be 22:00:00 WART");
		t.equal(moment("1991-10-20T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1991-10-20T03:59:59+00:00 should be 23:59:59 WART");
		t.equal(moment("1991-10-20T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "02:00:00", "1991-10-20T04:00:00+00:00 should be 02:00:00 ARST");

		t.equal(moment("1991-03-03T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1991-03-03T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1991-03-03T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1991-03-03T02:00:00+00:00 should be 240 minutes offset in WART");
		t.equal(moment("1991-10-20T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "1991-10-20T03:59:59+00:00 should be 240 minutes offset in WART");
		t.equal(moment("1991-10-20T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1991-10-20T04:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-01T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1992-03-01T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1992-03-01T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1992-03-01T02:00:00+00:00 should be 23:00:00 ART");
		t.equal(moment("1992-10-18T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1992-10-18T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1992-10-18T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "1992-10-18T03:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("1992-03-01T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1992-03-01T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1992-03-01T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1992-03-01T02:00:00+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1992-10-18T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1992-10-18T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1992-10-18T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1992-10-18T03:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-07T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1993-03-07T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("1993-03-07T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "1993-03-07T02:00:00+00:00 should be 23:00:00 ART");

		t.equal(moment("1993-03-07T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "1993-03-07T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("1993-03-07T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1993-03-07T02:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-10-03T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "1999-10-03T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("1999-10-03T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "00:00:00", "1999-10-03T03:00:00+00:00 should be 00:00:00 ARST");

		t.equal(moment("1999-10-03T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1999-10-03T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("1999-10-03T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "1999-10-03T03:00:00+00:00 should be 180 minutes offset in ARST");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-03T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "2000-03-03T02:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("2000-03-03T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "00:00:00", "2000-03-03T03:00:00+00:00 should be 00:00:00 ART");

		t.equal(moment("2000-03-03T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2000-03-03T02:59:59+00:00 should be 180 minutes offset in ARST");
		t.equal(moment("2000-03-03T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2000-03-03T03:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-06-01T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "2004-06-01T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("2004-06-01T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "2004-06-01T03:00:00+00:00 should be 23:00:00 WART");
		t.equal(moment("2004-06-20T03:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "2004-06-20T03:59:59+00:00 should be 23:59:59 WART");
		t.equal(moment("2004-06-20T04:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "2004-06-20T04:00:00+00:00 should be 01:00:00 ART");

		t.equal(moment("2004-06-01T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2004-06-01T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("2004-06-01T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 240, "2004-06-01T03:00:00+00:00 should be 240 minutes offset in WART");
		t.equal(moment("2004-06-20T03:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 240, "2004-06-20T03:59:59+00:00 should be 240 minutes offset in WART");
		t.equal(moment("2004-06-20T04:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2004-06-20T04:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-12-30T02:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "2007-12-30T02:59:59+00:00 should be 23:59:59 ART");
		t.equal(moment("2007-12-30T03:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "01:00:00", "2007-12-30T03:00:00+00:00 should be 01:00:00 ARST");

		t.equal(moment("2007-12-30T02:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2007-12-30T02:59:59+00:00 should be 180 minutes offset in ART");
		t.equal(moment("2007-12-30T03:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 120, "2007-12-30T03:00:00+00:00 should be 120 minutes offset in ARST");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-16T01:59:59+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:59:59", "2008-03-16T01:59:59+00:00 should be 23:59:59 ARST");
		t.equal(moment("2008-03-16T02:00:00+00:00").tz("America/Argentina/Catamarca").format("HH:mm:ss"), "23:00:00", "2008-03-16T02:00:00+00:00 should be 23:00:00 ART");

		t.equal(moment("2008-03-16T01:59:59+00:00").tz("America/Argentina/Catamarca").zone(), 120, "2008-03-16T01:59:59+00:00 should be 120 minutes offset in ARST");
		t.equal(moment("2008-03-16T02:00:00+00:00").tz("America/Argentina/Catamarca").zone(), 180, "2008-03-16T02:00:00+00:00 should be 180 minutes offset in ART");

		t.done();
	}
};
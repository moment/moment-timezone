var moment = require("../../moment-timezone");

exports["America/Regina"] = {

	"1905" : function (t) {
		t.equal(moment("1905-09-01T06:58:35+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1905-09-01T06:58:35+00:00 should be 23:59:59 LMT");
		t.equal(moment("1905-09-01T06:58:36+00:00").tz("America/Regina").format("HH:mm:ss"), "23:58:36", "1905-09-01T06:58:36+00:00 should be 23:58:36 MST");

		t.equal(moment("1905-09-01T06:58:35+00:00").tz("America/Regina").zone(), 418, "1905-09-01T06:58:35+00:00 should be 418 minutes offset in LMT");
		t.equal(moment("1905-09-01T06:58:36+00:00").tz("America/Regina").zone(), 420, "1905-09-01T06:58:36+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1918" : function (t) {
		t.equal(moment("1918-04-14T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1918-04-14T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1918-04-14T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1918-04-14T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1918-10-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1918-10-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1918-04-14T08:59:59+00:00").tz("America/Regina").zone(), 420, "1918-04-14T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1918-04-14T09:00:00+00:00").tz("America/Regina").zone(), 360, "1918-04-14T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T07:59:59+00:00").tz("America/Regina").zone(), 360, "1918-10-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1918-10-27T08:00:00+00:00").tz("America/Regina").zone(), 420, "1918-10-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1930" : function (t) {
		t.equal(moment("1930-05-04T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1930-05-04T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1930-05-04T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1930-05-04T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1930-10-05T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1930-10-05T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1930-10-05T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1930-10-05T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1930-05-04T06:59:59+00:00").tz("America/Regina").zone(), 420, "1930-05-04T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1930-05-04T07:00:00+00:00").tz("America/Regina").zone(), 360, "1930-05-04T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1930-10-05T05:59:59+00:00").tz("America/Regina").zone(), 360, "1930-10-05T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1930-10-05T06:00:00+00:00").tz("America/Regina").zone(), 420, "1930-10-05T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1931" : function (t) {
		t.equal(moment("1931-05-03T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1931-05-03T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1931-05-03T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1931-05-03T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1931-10-04T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1931-10-04T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1931-10-04T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1931-10-04T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1931-05-03T06:59:59+00:00").tz("America/Regina").zone(), 420, "1931-05-03T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1931-05-03T07:00:00+00:00").tz("America/Regina").zone(), 360, "1931-05-03T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1931-10-04T05:59:59+00:00").tz("America/Regina").zone(), 360, "1931-10-04T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1931-10-04T06:00:00+00:00").tz("America/Regina").zone(), 420, "1931-10-04T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-05-01T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1932-05-01T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1932-05-01T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1932-05-01T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1932-10-02T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1932-10-02T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1932-10-02T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1932-10-02T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1932-05-01T06:59:59+00:00").tz("America/Regina").zone(), 420, "1932-05-01T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1932-05-01T07:00:00+00:00").tz("America/Regina").zone(), 360, "1932-05-01T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1932-10-02T05:59:59+00:00").tz("America/Regina").zone(), 360, "1932-10-02T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1932-10-02T06:00:00+00:00").tz("America/Regina").zone(), 420, "1932-10-02T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1933" : function (t) {
		t.equal(moment("1933-05-07T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1933-05-07T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1933-05-07T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1933-05-07T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1933-10-01T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1933-10-01T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1933-10-01T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1933-10-01T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1933-05-07T06:59:59+00:00").tz("America/Regina").zone(), 420, "1933-05-07T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1933-05-07T07:00:00+00:00").tz("America/Regina").zone(), 360, "1933-05-07T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1933-10-01T05:59:59+00:00").tz("America/Regina").zone(), 360, "1933-10-01T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1933-10-01T06:00:00+00:00").tz("America/Regina").zone(), 420, "1933-10-01T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1934" : function (t) {
		t.equal(moment("1934-05-06T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1934-05-06T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1934-05-06T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1934-05-06T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1934-10-07T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1934-10-07T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1934-10-07T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1934-10-07T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1934-05-06T06:59:59+00:00").tz("America/Regina").zone(), 420, "1934-05-06T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1934-05-06T07:00:00+00:00").tz("America/Regina").zone(), 360, "1934-05-06T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1934-10-07T05:59:59+00:00").tz("America/Regina").zone(), 360, "1934-10-07T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1934-10-07T06:00:00+00:00").tz("America/Regina").zone(), 420, "1934-10-07T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-04-11T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1937-04-11T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1937-04-11T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1937-04-11T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1937-10-10T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1937-10-10T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1937-10-10T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1937-10-10T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1937-04-11T06:59:59+00:00").tz("America/Regina").zone(), 420, "1937-04-11T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1937-04-11T07:00:00+00:00").tz("America/Regina").zone(), 360, "1937-04-11T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1937-10-10T05:59:59+00:00").tz("America/Regina").zone(), 360, "1937-10-10T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1937-10-10T06:00:00+00:00").tz("America/Regina").zone(), 420, "1937-10-10T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-04-10T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1938-04-10T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1938-04-10T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1938-04-10T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1938-10-02T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1938-10-02T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1938-10-02T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1938-10-02T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1938-04-10T06:59:59+00:00").tz("America/Regina").zone(), 420, "1938-04-10T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1938-04-10T07:00:00+00:00").tz("America/Regina").zone(), 360, "1938-04-10T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1938-10-02T05:59:59+00:00").tz("America/Regina").zone(), 360, "1938-10-02T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1938-10-02T06:00:00+00:00").tz("America/Regina").zone(), 420, "1938-10-02T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-04-09T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1939-04-09T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1939-04-09T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1939-04-09T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1939-10-08T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1939-10-08T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1939-10-08T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1939-10-08T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1939-04-09T06:59:59+00:00").tz("America/Regina").zone(), 420, "1939-04-09T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1939-04-09T07:00:00+00:00").tz("America/Regina").zone(), 360, "1939-04-09T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1939-10-08T05:59:59+00:00").tz("America/Regina").zone(), 360, "1939-10-08T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1939-10-08T06:00:00+00:00").tz("America/Regina").zone(), 420, "1939-10-08T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-04-14T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1940-04-14T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1940-04-14T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1940-04-14T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1940-10-13T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1940-10-13T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1940-10-13T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1940-10-13T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1940-04-14T06:59:59+00:00").tz("America/Regina").zone(), 420, "1940-04-14T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1940-04-14T07:00:00+00:00").tz("America/Regina").zone(), 360, "1940-04-14T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1940-10-13T05:59:59+00:00").tz("America/Regina").zone(), 360, "1940-10-13T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1940-10-13T06:00:00+00:00").tz("America/Regina").zone(), 420, "1940-10-13T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-04-13T06:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1941-04-13T06:59:59+00:00 should be 23:59:59 MST");
		t.equal(moment("1941-04-13T07:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1941-04-13T07:00:00+00:00 should be 01:00:00 MDT");
		t.equal(moment("1941-10-12T05:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "23:59:59", "1941-10-12T05:59:59+00:00 should be 23:59:59 MDT");
		t.equal(moment("1941-10-12T06:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "23:00:00", "1941-10-12T06:00:00+00:00 should be 23:00:00 MST");

		t.equal(moment("1941-04-13T06:59:59+00:00").tz("America/Regina").zone(), 420, "1941-04-13T06:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1941-04-13T07:00:00+00:00").tz("America/Regina").zone(), 360, "1941-04-13T07:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1941-10-12T05:59:59+00:00").tz("America/Regina").zone(), 360, "1941-10-12T05:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1941-10-12T06:00:00+00:00").tz("America/Regina").zone(), 420, "1941-10-12T06:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1942-02-09T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1942-02-09T09:00:00+00:00 should be 03:00:00 MWT");

		t.equal(moment("1942-02-09T08:59:59+00:00").tz("America/Regina").zone(), 420, "1942-02-09T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1942-02-09T09:00:00+00:00").tz("America/Regina").zone(), 360, "1942-02-09T09:00:00+00:00 should be 360 minutes offset in MWT");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "16:59:59", "1945-08-14T22:59:59+00:00 should be 16:59:59 MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "17:00:00", "1945-08-14T23:00:00+00:00 should be 17:00:00 MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1945-09-30T07:59:59+00:00 should be 01:59:59 MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1945-09-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1945-08-14T22:59:59+00:00").tz("America/Regina").zone(), 360, "1945-08-14T22:59:59+00:00 should be 360 minutes offset in MWT");
		t.equal(moment("1945-08-14T23:00:00+00:00").tz("America/Regina").zone(), 360, "1945-08-14T23:00:00+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T07:59:59+00:00").tz("America/Regina").zone(), 360, "1945-09-30T07:59:59+00:00 should be 360 minutes offset in MPT");
		t.equal(moment("1945-09-30T08:00:00+00:00").tz("America/Regina").zone(), 420, "1945-09-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-14T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1946-04-14T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1946-04-14T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1946-04-14T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1946-10-13T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1946-10-13T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1946-10-13T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1946-10-13T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1946-04-14T08:59:59+00:00").tz("America/Regina").zone(), 420, "1946-04-14T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1946-04-14T09:00:00+00:00").tz("America/Regina").zone(), 360, "1946-04-14T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1946-10-13T07:59:59+00:00").tz("America/Regina").zone(), 360, "1946-10-13T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1946-10-13T08:00:00+00:00").tz("America/Regina").zone(), 420, "1946-10-13T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1947" : function (t) {
		t.equal(moment("1947-04-27T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1947-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1947-04-27T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1947-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1947-09-28T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1947-09-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1947-09-28T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1947-09-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1947-04-27T08:59:59+00:00").tz("America/Regina").zone(), 420, "1947-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1947-04-27T09:00:00+00:00").tz("America/Regina").zone(), 360, "1947-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1947-09-28T07:59:59+00:00").tz("America/Regina").zone(), 360, "1947-09-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1947-09-28T08:00:00+00:00").tz("America/Regina").zone(), 420, "1947-09-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1948" : function (t) {
		t.equal(moment("1948-04-25T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1948-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1948-04-25T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1948-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1948-09-26T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1948-09-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1948-09-26T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1948-09-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1948-04-25T08:59:59+00:00").tz("America/Regina").zone(), 420, "1948-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1948-04-25T09:00:00+00:00").tz("America/Regina").zone(), 360, "1948-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1948-09-26T07:59:59+00:00").tz("America/Regina").zone(), 360, "1948-09-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1948-09-26T08:00:00+00:00").tz("America/Regina").zone(), 420, "1948-09-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1949" : function (t) {
		t.equal(moment("1949-04-24T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1949-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1949-04-24T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1949-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1949-09-25T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1949-09-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1949-09-25T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1949-09-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1949-04-24T08:59:59+00:00").tz("America/Regina").zone(), 420, "1949-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1949-04-24T09:00:00+00:00").tz("America/Regina").zone(), 360, "1949-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1949-09-25T07:59:59+00:00").tz("America/Regina").zone(), 360, "1949-09-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1949-09-25T08:00:00+00:00").tz("America/Regina").zone(), 420, "1949-09-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-04-30T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1950-04-30T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1950-04-30T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1950-04-30T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1950-09-24T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1950-09-24T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1950-09-24T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1950-09-24T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1950-04-30T08:59:59+00:00").tz("America/Regina").zone(), 420, "1950-04-30T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1950-04-30T09:00:00+00:00").tz("America/Regina").zone(), 360, "1950-04-30T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1950-09-24T07:59:59+00:00").tz("America/Regina").zone(), 360, "1950-09-24T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1950-09-24T08:00:00+00:00").tz("America/Regina").zone(), 420, "1950-09-24T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1951" : function (t) {
		t.equal(moment("1951-04-29T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1951-04-29T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1951-04-29T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1951-04-29T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1951-09-30T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1951-09-30T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1951-09-30T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1951-09-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1951-04-29T08:59:59+00:00").tz("America/Regina").zone(), 420, "1951-04-29T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1951-04-29T09:00:00+00:00").tz("America/Regina").zone(), 360, "1951-04-29T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1951-09-30T07:59:59+00:00").tz("America/Regina").zone(), 360, "1951-09-30T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1951-09-30T08:00:00+00:00").tz("America/Regina").zone(), 420, "1951-09-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1952" : function (t) {
		t.equal(moment("1952-04-27T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1952-04-27T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1952-04-27T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1952-04-27T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1952-09-28T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1952-09-28T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1952-09-28T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1952-09-28T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1952-04-27T08:59:59+00:00").tz("America/Regina").zone(), 420, "1952-04-27T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1952-04-27T09:00:00+00:00").tz("America/Regina").zone(), 360, "1952-04-27T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1952-09-28T07:59:59+00:00").tz("America/Regina").zone(), 360, "1952-09-28T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1952-09-28T08:00:00+00:00").tz("America/Regina").zone(), 420, "1952-09-28T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1953" : function (t) {
		t.equal(moment("1953-04-26T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1953-04-26T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1953-04-26T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1953-04-26T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1953-09-27T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1953-09-27T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1953-09-27T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1953-09-27T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1953-04-26T08:59:59+00:00").tz("America/Regina").zone(), 420, "1953-04-26T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1953-04-26T09:00:00+00:00").tz("America/Regina").zone(), 360, "1953-04-26T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1953-09-27T07:59:59+00:00").tz("America/Regina").zone(), 360, "1953-09-27T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1953-09-27T08:00:00+00:00").tz("America/Regina").zone(), 420, "1953-09-27T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1954" : function (t) {
		t.equal(moment("1954-04-25T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1954-04-25T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1954-04-25T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1954-04-25T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1954-09-26T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1954-09-26T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1954-09-26T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1954-09-26T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1954-04-25T08:59:59+00:00").tz("America/Regina").zone(), 420, "1954-04-25T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1954-04-25T09:00:00+00:00").tz("America/Regina").zone(), 360, "1954-04-25T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1954-09-26T07:59:59+00:00").tz("America/Regina").zone(), 360, "1954-09-26T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1954-09-26T08:00:00+00:00").tz("America/Regina").zone(), 420, "1954-09-26T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1955" : function (t) {
		t.equal(moment("1955-04-24T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1955-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1955-04-24T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1955-04-24T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1955-09-25T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1955-09-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1955-09-25T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1955-09-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1955-04-24T08:59:59+00:00").tz("America/Regina").zone(), 420, "1955-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1955-04-24T09:00:00+00:00").tz("America/Regina").zone(), 360, "1955-04-24T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1955-09-25T07:59:59+00:00").tz("America/Regina").zone(), 360, "1955-09-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1955-09-25T08:00:00+00:00").tz("America/Regina").zone(), 420, "1955-09-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1956" : function (t) {
		t.equal(moment("1956-04-29T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1956-04-29T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1956-04-29T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1956-04-29T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1956-09-30T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1956-09-30T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1956-09-30T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1956-09-30T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1956-04-29T08:59:59+00:00").tz("America/Regina").zone(), 420, "1956-04-29T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1956-04-29T09:00:00+00:00").tz("America/Regina").zone(), 360, "1956-04-29T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1956-09-30T07:59:59+00:00").tz("America/Regina").zone(), 360, "1956-09-30T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1956-09-30T08:00:00+00:00").tz("America/Regina").zone(), 420, "1956-09-30T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-04-28T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1957-04-28T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1957-04-28T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1957-04-28T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1957-09-29T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1957-09-29T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1957-09-29T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1957-09-29T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1957-04-28T08:59:59+00:00").tz("America/Regina").zone(), 420, "1957-04-28T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1957-04-28T09:00:00+00:00").tz("America/Regina").zone(), 360, "1957-04-28T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1957-09-29T07:59:59+00:00").tz("America/Regina").zone(), 360, "1957-09-29T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1957-09-29T08:00:00+00:00").tz("America/Regina").zone(), 420, "1957-09-29T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-26T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1959-04-26T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1959-04-26T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1959-04-26T09:00:00+00:00 should be 03:00:00 MDT");
		t.equal(moment("1959-10-25T07:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1959-10-25T07:59:59+00:00 should be 01:59:59 MDT");
		t.equal(moment("1959-10-25T08:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "01:00:00", "1959-10-25T08:00:00+00:00 should be 01:00:00 MST");

		t.equal(moment("1959-04-26T08:59:59+00:00").tz("America/Regina").zone(), 420, "1959-04-26T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1959-04-26T09:00:00+00:00").tz("America/Regina").zone(), 360, "1959-04-26T09:00:00+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1959-10-25T07:59:59+00:00").tz("America/Regina").zone(), 360, "1959-10-25T07:59:59+00:00 should be 360 minutes offset in MDT");
		t.equal(moment("1959-10-25T08:00:00+00:00").tz("America/Regina").zone(), 420, "1959-10-25T08:00:00+00:00 should be 420 minutes offset in MST");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-24T08:59:59+00:00").tz("America/Regina").format("HH:mm:ss"), "01:59:59", "1960-04-24T08:59:59+00:00 should be 01:59:59 MST");
		t.equal(moment("1960-04-24T09:00:00+00:00").tz("America/Regina").format("HH:mm:ss"), "03:00:00", "1960-04-24T09:00:00+00:00 should be 03:00:00 CST");

		t.equal(moment("1960-04-24T08:59:59+00:00").tz("America/Regina").zone(), 420, "1960-04-24T08:59:59+00:00 should be 420 minutes offset in MST");
		t.equal(moment("1960-04-24T09:00:00+00:00").tz("America/Regina").zone(), 360, "1960-04-24T09:00:00+00:00 should be 360 minutes offset in CST");

		t.done();
	}
};
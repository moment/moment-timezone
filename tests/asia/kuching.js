var moment = require("../../moment-timezone");

exports["Asia/Kuching"] = {

	"1926" : function (t) {
		t.equal(moment("1926-02-28T16:38:39+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1926-02-28T16:38:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1926-02-28T16:38:40+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:08:40", "1926-02-28T16:38:40+00:00 should be 00:08:40 BORT");

		t.equal(moment("1926-02-28T16:38:39+00:00").tz("Asia/Kuching").zone(), -26480 / 60, "1926-02-28T16:38:39+00:00 should be -26480 / 60 minutes offset in LMT");
		t.equal(moment("1926-02-28T16:38:40+00:00").tz("Asia/Kuching").zone(), -450, "1926-02-28T16:38:40+00:00 should be -450 minutes offset in BORT");

		t.done();
	},

	"1932" : function (t) {
		t.equal(moment("1932-12-31T16:29:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1932-12-31T16:29:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1932-12-31T16:30:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:30:00", "1932-12-31T16:30:00+00:00 should be 00:30:00 BORT");

		t.equal(moment("1932-12-31T16:29:59+00:00").tz("Asia/Kuching").zone(), -450, "1932-12-31T16:29:59+00:00 should be -450 minutes offset in BORT");
		t.equal(moment("1932-12-31T16:30:00+00:00").tz("Asia/Kuching").zone(), -480, "1932-12-31T16:30:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1935" : function (t) {
		t.equal(moment("1935-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1935-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1935-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1935-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1935-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1935-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1935-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1935-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1935-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1935-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1935-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1935-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1935-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1935-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1935-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1935-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1936" : function (t) {
		t.equal(moment("1936-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1936-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1936-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1936-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1936-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1936-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1936-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1936-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1936-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1936-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1936-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1936-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1936-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1936-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1936-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1936-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1937" : function (t) {
		t.equal(moment("1937-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1937-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1937-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1937-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1937-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1937-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1937-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1937-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1937-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1937-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1937-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1937-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1937-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1937-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1937-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1937-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1938" : function (t) {
		t.equal(moment("1938-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1938-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1938-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1938-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1938-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1938-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1938-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1938-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1938-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1938-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1938-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1938-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1938-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1938-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1938-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1938-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1939" : function (t) {
		t.equal(moment("1939-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1939-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1939-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1939-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1939-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1939-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1939-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1939-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1939-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1939-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1939-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1939-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1939-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1939-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1939-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1939-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1940" : function (t) {
		t.equal(moment("1940-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1940-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1940-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1940-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1940-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1940-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1940-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1940-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1940-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1940-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1940-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1940-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1940-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1940-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1940-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1940-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1941" : function (t) {
		t.equal(moment("1941-09-13T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1941-09-13T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1941-09-13T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:20:00", "1941-09-13T16:00:00+00:00 should be 00:20:00 BORTST");
		t.equal(moment("1941-12-13T15:39:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1941-12-13T15:39:59+00:00 should be 23:59:59 BORTST");
		t.equal(moment("1941-12-13T15:40:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:40:00", "1941-12-13T15:40:00+00:00 should be 23:40:00 BORT");

		t.equal(moment("1941-09-13T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1941-09-13T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1941-09-13T16:00:00+00:00").tz("Asia/Kuching").zone(), -500, "1941-09-13T16:00:00+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1941-12-13T15:39:59+00:00").tz("Asia/Kuching").zone(), -500, "1941-12-13T15:39:59+00:00 should be -500 minutes offset in BORTST");
		t.equal(moment("1941-12-13T15:40:00+00:00").tz("Asia/Kuching").zone(), -480, "1941-12-13T15:40:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-02-15T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1942-02-15T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1942-02-15T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "01:00:00", "1942-02-15T16:00:00+00:00 should be 01:00:00 JST");

		t.equal(moment("1942-02-15T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1942-02-15T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1942-02-15T16:00:00+00:00").tz("Asia/Kuching").zone(), -540, "1942-02-15T16:00:00+00:00 should be -540 minutes offset in JST");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-09-11T14:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1945-09-11T14:59:59+00:00 should be 23:59:59 JST");
		t.equal(moment("1945-09-11T15:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:00:00", "1945-09-11T15:00:00+00:00 should be 23:00:00 BORT");

		t.equal(moment("1945-09-11T14:59:59+00:00").tz("Asia/Kuching").zone(), -540, "1945-09-11T14:59:59+00:00 should be -540 minutes offset in JST");
		t.equal(moment("1945-09-11T15:00:00+00:00").tz("Asia/Kuching").zone(), -480, "1945-09-11T15:00:00+00:00 should be -480 minutes offset in BORT");

		t.done();
	},

	"1981" : function (t) {
		t.equal(moment("1981-12-31T15:59:59+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "23:59:59", "1981-12-31T15:59:59+00:00 should be 23:59:59 BORT");
		t.equal(moment("1981-12-31T16:00:00+00:00").tz("Asia/Kuching").format("HH:mm:ss"), "00:00:00", "1981-12-31T16:00:00+00:00 should be 00:00:00 MYT");

		t.equal(moment("1981-12-31T15:59:59+00:00").tz("Asia/Kuching").zone(), -480, "1981-12-31T15:59:59+00:00 should be -480 minutes offset in BORT");
		t.equal(moment("1981-12-31T16:00:00+00:00").tz("Asia/Kuching").zone(), -480, "1981-12-31T16:00:00+00:00 should be -480 minutes offset in MYT");

		t.done();
	}
};
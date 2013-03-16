var moment = require("../../moment-timezone");

exports["Asia/Hebron"] = {

	"1940" : function (t) {
		t.equal(moment("1940-05-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1940-05-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1940-05-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1940-05-31T22:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1940-05-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1940-05-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1940-05-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1940-05-31T22:00:00+00:00 should be -180 minutes offset in EET");

		t.done();
	},

	"1942" : function (t) {
		t.equal(moment("1942-10-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1942-10-31T20:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1942-10-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1942-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1942-10-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1942-10-31T20:59:59+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1942-10-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1942-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1943" : function (t) {
		t.equal(moment("1943-03-31T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "1943-03-31T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1943-04-01T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "03:00:00", "1943-04-01T00:00:00+00:00 should be 03:00:00 EET");
		t.equal(moment("1943-10-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1943-10-31T20:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1943-10-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1943-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1943-03-31T23:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1943-03-31T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1943-04-01T00:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1943-04-01T00:00:00+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1943-10-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1943-10-31T20:59:59+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1943-10-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1943-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1944" : function (t) {
		t.equal(moment("1944-03-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1944-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1944-03-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1944-03-31T22:00:00+00:00 should be 01:00:00 EET");
		t.equal(moment("1944-10-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1944-10-31T20:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1944-10-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1944-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1944-03-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1944-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1944-03-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1944-03-31T22:00:00+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1944-10-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1944-10-31T20:59:59+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1944-10-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1944-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1945" : function (t) {
		t.equal(moment("1945-04-15T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1945-04-15T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1945-04-15T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1945-04-15T22:00:00+00:00 should be 01:00:00 EET");
		t.equal(moment("1945-10-31T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "1945-10-31T22:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1945-10-31T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1945-10-31T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1945-04-15T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1945-04-15T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1945-04-15T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1945-04-15T22:00:00+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1945-10-31T22:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1945-10-31T22:59:59+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1945-10-31T23:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1945-10-31T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1946" : function (t) {
		t.equal(moment("1946-04-15T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "1946-04-15T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1946-04-16T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "03:00:00", "1946-04-16T00:00:00+00:00 should be 03:00:00 EET");
		t.equal(moment("1946-10-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1946-10-31T20:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1946-10-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1946-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1946-04-15T23:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1946-04-15T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1946-04-16T00:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1946-04-16T00:00:00+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1946-10-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1946-10-31T20:59:59+00:00 should be -180 minutes offset in EET");
		t.equal(moment("1946-10-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1946-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1957" : function (t) {
		t.equal(moment("1957-05-09T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1957-05-09T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1957-05-09T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1957-05-09T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1957-09-30T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1957-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1957-09-30T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1957-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1957-05-09T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1957-05-09T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1957-05-09T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1957-05-09T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1957-09-30T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1957-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1957-09-30T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1957-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1958" : function (t) {
		t.equal(moment("1958-04-30T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1958-04-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1958-04-30T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1958-04-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1958-09-30T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1958-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1958-09-30T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1958-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1958-04-30T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1958-04-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1958-04-30T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1958-04-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1958-09-30T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1958-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1958-09-30T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1958-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1959" : function (t) {
		t.equal(moment("1959-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1959-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1959-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1959-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1959-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1959-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1959-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1959-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1959-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1959-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1959-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1959-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1959-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1959-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1959-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1959-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1960" : function (t) {
		t.equal(moment("1960-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1960-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1960-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1960-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1960-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1960-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1960-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1960-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1960-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1960-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1960-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1960-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1960-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1960-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1960-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1960-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1961-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1961-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1961-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1961-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1961-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1961-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1961-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1961-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1961-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1961-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1961-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1961-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1961-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1961-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1961-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1962-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1962-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1962-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1962-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1962-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1962-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1962-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1962-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1962-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1962-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1962-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1962-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1962-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1963-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1963-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1963-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1963-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1963-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1963-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1963-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1963-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1963-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1963-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1963-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1963-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1963-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1964-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1964-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1964-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1964-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1964-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1964-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1964-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1964-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1964-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1964-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1964-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1964-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1964-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1965-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1965-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1965-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1965-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1965-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1965-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1965-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1965-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1965-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1965-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1965-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1965-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1965-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1966-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1966-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1966-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1966-09-30T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "1966-09-30T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("1966-10-01T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1966-10-01T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("1966-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1966-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1966-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1966-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-09-30T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1966-09-30T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-10-01T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1966-10-01T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1967-04-30T22:59:59+00:00 should be 00:59:59 EET");
		t.equal(moment("1967-04-30T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "1967-04-30T23:00:00+00:00 should be 02:00:00 EEST");
		t.equal(moment("1967-06-04T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1967-06-04T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1967-06-04T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1967-06-04T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1967-04-30T22:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1967-04-30T22:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1967-04-30T23:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1967-04-30T23:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-06-04T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1967-06-04T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-06-04T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1967-06-04T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-07-06T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1974-07-06T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1974-07-06T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1974-07-06T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1974-10-12T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1974-10-12T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1974-10-12T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1974-10-12T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1974-07-06T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1974-07-06T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1974-07-06T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1974-07-06T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1974-10-12T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1974-10-12T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1974-10-12T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1974-10-12T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-19T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1975-04-19T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1975-04-19T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1975-04-19T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1975-08-30T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1975-08-30T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1975-08-30T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1975-08-30T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1975-04-19T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1975-04-19T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1975-04-19T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1975-04-19T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1975-08-30T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1975-08-30T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1975-08-30T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1975-08-30T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1985" : function (t) {
		t.equal(moment("1985-04-13T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1985-04-13T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1985-04-13T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1985-04-13T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1985-09-14T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1985-09-14T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1985-09-14T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1985-09-14T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1985-04-13T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1985-04-13T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1985-04-13T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1985-04-13T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1985-09-14T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1985-09-14T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1985-09-14T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1985-09-14T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-05-17T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1986-05-17T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1986-05-17T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1986-05-17T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1986-09-06T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1986-09-06T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1986-09-06T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1986-09-06T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1986-05-17T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1986-05-17T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1986-05-17T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1986-05-17T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1986-09-06T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1986-09-06T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1986-09-06T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1986-09-06T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-04-14T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1987-04-14T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1987-04-14T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1987-04-14T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1987-09-12T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1987-09-12T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1987-09-12T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1987-09-12T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1987-04-14T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1987-04-14T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1987-04-14T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1987-04-14T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1987-09-12T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1987-09-12T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1987-09-12T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1987-09-12T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-04-08T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1988-04-08T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1988-04-08T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1988-04-08T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1988-09-02T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1988-09-02T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1988-09-02T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1988-09-02T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1988-04-08T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1988-04-08T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1988-04-08T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1988-04-08T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1988-09-02T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1988-09-02T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1988-09-02T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1988-09-02T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-04-29T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1989-04-29T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1989-04-29T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1989-04-29T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1989-09-02T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1989-09-02T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1989-09-02T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1989-09-02T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1989-04-29T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1989-04-29T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1989-04-29T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1989-04-29T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1989-09-02T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1989-09-02T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1989-09-02T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1989-09-02T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1990-03-24T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1990-03-24T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1990-08-25T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1990-08-25T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1990-08-25T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1990-08-25T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1990-03-24T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1990-03-24T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1990-03-24T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1990-03-24T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1990-08-25T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1990-08-25T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1990-08-25T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1990-08-25T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-23T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1991-03-23T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1991-03-23T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1991-03-23T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1991-08-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1991-08-31T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1991-08-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1991-08-31T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1991-03-23T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1991-03-23T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1991-03-23T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1991-03-23T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1991-08-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1991-08-31T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1991-08-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1991-08-31T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-03-28T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1992-03-28T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1992-03-28T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1992-03-28T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1992-09-05T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1992-09-05T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1992-09-05T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1992-09-05T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1992-03-28T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1992-03-28T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1992-03-28T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1992-03-28T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1992-09-05T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1992-09-05T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1992-09-05T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1992-09-05T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-04-01T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1993-04-01T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1993-04-01T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1993-04-01T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1993-09-04T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1993-09-04T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1993-09-04T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1993-09-04T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1993-04-01T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1993-04-01T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1993-04-01T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1993-04-01T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1993-09-04T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1993-09-04T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1993-09-04T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1993-09-04T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1994-03-31T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1994-03-31T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1994-08-27T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1994-08-27T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1994-08-27T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1994-08-27T21:00:00+00:00 should be 23:00:00 IST");

		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1994-03-31T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1994-03-31T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1994-08-27T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1994-08-27T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1994-08-27T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1994-08-27T21:00:00+00:00 should be -120 minutes offset in IST");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-30T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1995-03-30T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1995-03-30T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1995-03-30T22:00:00+00:00 should be 01:00:00 IDT");
		t.equal(moment("1995-09-02T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1995-09-02T20:59:59+00:00 should be 23:59:59 IDT");
		t.equal(moment("1995-09-02T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1995-09-02T21:00:00+00:00 should be 23:00:00 IST");
		t.equal(moment("1995-12-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1995-12-31T21:59:59+00:00 should be 23:59:59 IST");
		t.equal(moment("1995-12-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "1995-12-31T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1995-03-30T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1995-03-30T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1995-03-30T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1995-03-30T22:00:00+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1995-09-02T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1995-09-02T20:59:59+00:00 should be -180 minutes offset in IDT");
		t.equal(moment("1995-09-02T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1995-09-02T21:00:00+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1995-12-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1995-12-31T21:59:59+00:00 should be -120 minutes offset in IST");
		t.equal(moment("1995-12-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1995-12-31T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-04-04T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1996-04-04T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1996-04-04T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1996-04-04T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1996-09-19T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1996-09-19T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1996-09-19T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "1996-09-19T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1996-04-04T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1996-04-04T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-04-04T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1996-04-04T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-19T21:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1996-09-19T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-19T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1996-09-19T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-04-03T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1997-04-03T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1997-04-03T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1997-04-03T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1997-09-18T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1997-09-18T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1997-09-18T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "1997-09-18T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1997-04-03T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1997-04-03T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-04-03T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1997-04-03T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-18T21:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1997-09-18T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-18T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1997-09-18T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-04-02T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1998-04-02T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1998-04-02T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1998-04-02T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1998-09-17T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "1998-09-17T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("1998-09-17T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "1998-09-17T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("1998-04-02T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1998-04-02T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-04-02T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1998-04-02T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-17T21:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1998-09-17T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-17T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1998-09-17T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-04-15T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1999-04-15T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1999-04-15T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "1999-04-15T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1999-10-14T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "1999-10-14T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1999-10-14T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "1999-10-14T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1999-04-15T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "1999-04-15T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-04-15T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "1999-04-15T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-14T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "1999-10-14T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-10-14T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "1999-10-14T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-04-20T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2000-04-20T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2000-04-20T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2000-04-20T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2000-10-19T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2000-10-19T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2000-10-19T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2000-10-19T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2000-04-20T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2000-04-20T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-04-20T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2000-04-20T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-19T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2000-10-19T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-10-19T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2000-10-19T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-04-19T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2001-04-19T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2001-04-19T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2001-04-19T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2001-10-18T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2001-10-18T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2001-10-18T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2001-10-18T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2001-04-19T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2001-04-19T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-04-19T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2001-04-19T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-18T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2001-10-18T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-10-18T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2001-10-18T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-04-18T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2002-04-18T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2002-04-18T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2002-04-18T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2002-10-17T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2002-10-17T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2002-10-17T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2002-10-17T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2002-04-18T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2002-04-18T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-04-18T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2002-04-18T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-17T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2002-10-17T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-10-17T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2002-10-17T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-04-17T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2003-04-17T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2003-04-17T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2003-04-17T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2003-10-16T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2003-10-16T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2003-10-16T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2003-10-16T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2003-04-17T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2003-04-17T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-04-17T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2003-04-17T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-16T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2003-10-16T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-10-16T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2003-10-16T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-04-15T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2004-04-15T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2004-04-15T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2004-04-15T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2004-09-30T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "2004-09-30T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2004-09-30T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "2004-09-30T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2004-04-15T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2004-04-15T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-04-15T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2004-04-15T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T21:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2004-09-30T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2004-09-30T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-04-14T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2005-04-14T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2005-04-14T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2005-04-14T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2005-10-03T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "2005-10-03T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2005-10-03T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2005-10-03T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2005-04-14T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2005-04-14T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-04-14T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2005-04-14T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-03T22:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2005-10-03T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-10-03T23:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2005-10-03T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2006-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2006-03-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2006-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2006-09-21T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2006-09-21T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2006-03-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2006-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-03-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2006-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2006-09-21T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2006-09-21T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2007-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2007-03-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2007-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2007-09-12T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "2007-09-12T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2007-09-12T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2007-09-12T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2007-03-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2007-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-03-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2007-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-09-12T22:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2007-09-12T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-09-12T23:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2007-09-12T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-03-31T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2008-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2008-03-31T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2008-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2008-08-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2008-08-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2008-08-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2008-08-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2008-03-31T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2008-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-03-31T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2008-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-08-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2008-08-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-08-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2008-08-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2009-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2009-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2009-09-03T22:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:59:59", "2009-09-03T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("2009-09-03T23:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2009-09-03T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2009-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2009-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-09-03T22:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2009-09-03T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-09-03T23:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2009-09-03T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-03-26T22:00:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:59", "2010-03-26T22:00:59+00:00 should be 00:00:59 EET");
		t.equal(moment("2010-03-26T22:01:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:01:00", "2010-03-26T22:01:00+00:00 should be 01:01:00 EEST");
		t.equal(moment("2010-08-10T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2010-08-10T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2010-08-10T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2010-08-10T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2010-03-26T22:00:59+00:00").tz("Asia/Hebron").zone(), -120, "2010-03-26T22:00:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-03-26T22:01:00+00:00").tz("Asia/Hebron").zone(), -180, "2010-03-26T22:01:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-08-10T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2010-08-10T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-08-10T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2010-08-10T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-01T10:00:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "12:00:59", "2011-04-01T10:00:59+00:00 should be 12:00:59 EET");
		t.equal(moment("2011-04-01T10:01:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "13:01:00", "2011-04-01T10:01:00+00:00 should be 13:01:00 EEST");
		t.equal(moment("2011-07-31T20:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2011-07-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2011-07-31T21:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:00:00", "2011-07-31T21:00:00+00:00 should be 23:00:00 EET");
		t.equal(moment("2011-08-29T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2011-08-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2011-08-29T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2011-08-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2011-09-29T23:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:59:59", "2011-09-29T23:59:59+00:00 should be 02:59:59 EEST");
		t.equal(moment("2011-09-30T00:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "02:00:00", "2011-09-30T00:00:00+00:00 should be 02:00:00 EET");

		t.equal(moment("2011-04-01T10:00:59+00:00").tz("Asia/Hebron").zone(), -120, "2011-04-01T10:00:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-04-01T10:01:00+00:00").tz("Asia/Hebron").zone(), -180, "2011-04-01T10:01:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-07-31T20:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2011-07-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-07-31T21:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2011-07-31T21:00:00+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-08-29T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2011-08-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-08-29T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2011-08-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-09-29T23:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2011-09-29T23:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-09-30T00:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2011-09-30T00:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "23:59:59", "2012-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "01:00:00", "2012-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2012-09-20T21:59:59+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:59:59", "2012-09-20T21:59:59+00:00 should be 00:59:59 EEST");
		t.equal(moment("2012-09-20T22:00:00+00:00").tz("Asia/Hebron").format("HH:mm:ss"), "00:00:00", "2012-09-20T22:00:00+00:00 should be 00:00:00 EET");

		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Hebron").zone(), -120, "2012-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Hebron").zone(), -180, "2012-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-09-20T21:59:59+00:00").tz("Asia/Hebron").zone(), -180, "2012-09-20T21:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-09-20T22:00:00+00:00").tz("Asia/Hebron").zone(), -120, "2012-09-20T22:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	}
};
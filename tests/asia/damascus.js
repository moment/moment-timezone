var moment = require("../../moment-timezone");

exports["Asia/Damascus"] = {

	"1919" : function (t) {
		t.equal(moment("1919-12-31T21:34:47+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1919-12-31T21:34:47+00:00 should be 23:59:59 LMT");
		t.equal(moment("1919-12-31T21:34:48+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:34:48", "1919-12-31T21:34:48+00:00 should be 23:34:48 EET");

		t.equal(moment("1919-12-31T21:34:47+00:00").tz("Asia/Damascus").zone(), -145, "1919-12-31T21:34:47+00:00 should be -145 minutes offset in LMT");
		t.equal(moment("1919-12-31T21:34:48+00:00").tz("Asia/Damascus").zone(), -120, "1919-12-31T21:34:48+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1920" : function (t) {
		t.equal(moment("1920-04-17T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1920-04-17T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1920-04-18T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1920-04-18T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1920-10-02T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1920-10-02T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1920-10-02T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1920-10-02T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1920-04-17T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1920-04-17T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1920-04-18T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1920-04-18T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1920-10-02T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1920-10-02T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1920-10-02T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1920-10-02T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1921" : function (t) {
		t.equal(moment("1921-04-16T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1921-04-16T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1921-04-17T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1921-04-17T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1921-10-01T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1921-10-01T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1921-10-01T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1921-10-01T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1921-04-16T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1921-04-16T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1921-04-17T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1921-04-17T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1921-10-01T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1921-10-01T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1921-10-01T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1921-10-01T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1922" : function (t) {
		t.equal(moment("1922-04-15T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1922-04-15T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1922-04-16T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1922-04-16T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1922-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1922-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1922-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1922-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1922-04-15T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1922-04-15T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1922-04-16T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1922-04-16T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1922-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1922-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1922-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1922-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1923" : function (t) {
		t.equal(moment("1923-04-14T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1923-04-14T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1923-04-15T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1923-04-15T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1923-10-06T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1923-10-06T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1923-10-06T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1923-10-06T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1923-04-14T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1923-04-14T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1923-04-15T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1923-04-15T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1923-10-06T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1923-10-06T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1923-10-06T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1923-10-06T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-04-28T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1962-04-28T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1962-04-29T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1962-04-29T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1962-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1962-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1962-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1962-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1962-04-28T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1962-04-28T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1962-04-29T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1962-04-29T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1962-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1962-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1962-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1963-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1963-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1963-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1963-09-29T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1963-09-29T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1963-09-29T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1963-09-29T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1963-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1963-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1963-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1963-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-29T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1963-09-29T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1963-09-29T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1963-09-29T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1964-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1964-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1964-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1964-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1964-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1964-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1964-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1964-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1964-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1964-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1964-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1964-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1964-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1964-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1965-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1965-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1965-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1965-09-29T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1965-09-29T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1965-09-29T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1965-09-29T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1965-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1965-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1965-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1965-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-29T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1965-09-29T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1965-09-29T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1965-09-29T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-23T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1966-04-23T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1966-04-24T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1966-04-24T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1966-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1966-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1966-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1966-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1966-04-23T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1966-04-23T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1966-04-24T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1966-04-24T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1966-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1966-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1966-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1967-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1967-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1967-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1967-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1967-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1967-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1967-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1967-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1967-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1967-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1967-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1967-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1967-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1967-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1968-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1968-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1968-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1968-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1968-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1968-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1968-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1968-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1968-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1968-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1968-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1968-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1968-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1968-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1968-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1969-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1969-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1969-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1969-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1969-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1969-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1969-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1969-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1969-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1969-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1969-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1969-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1969-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1969-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1969-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1970-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1970-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1970-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1970-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1970-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1970-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1970-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1970-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1970-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1970-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1970-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1970-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1970-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1970-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1971-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1971-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1971-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1971-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1971-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1971-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1971-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1971-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1971-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1971-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1971-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1971-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1971-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1971-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1972-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1972-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1972-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1972-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1972-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1972-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1972-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1972-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1972-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1972-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1972-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1972-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1972-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1972-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1973-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1973-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1973-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1973-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1973-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1973-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1973-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1973-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1973-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1973-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1973-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1973-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1973-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1973-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1974-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1974-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1974-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1974-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1974-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1974-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1974-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1974-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1974-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1974-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1974-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1974-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1974-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1974-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1975-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1975-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1975-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1975-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1975-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1975-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1975-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1975-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1975-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1975-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1975-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1975-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1975-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1975-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1976-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1976-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1976-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1976-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1976-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1976-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1976-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1976-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1976-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1976-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1976-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1976-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1976-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1976-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1977-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1977-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1977-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1977-08-31T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1977-08-31T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1977-08-31T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1977-08-31T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1977-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1977-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1977-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1977-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-08-31T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1977-08-31T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1977-08-31T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1977-08-31T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1978-04-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1978-05-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1978-05-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1978-08-31T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1978-08-31T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1978-08-31T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1978-08-31T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1978-04-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1978-04-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1978-05-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1978-05-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-08-31T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1978-08-31T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1978-08-31T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1978-08-31T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1983" : function (t) {
		t.equal(moment("1983-04-08T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1983-04-08T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1983-04-09T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1983-04-09T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1983-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1983-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1983-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1983-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1983-04-08T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1983-04-08T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1983-04-09T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1983-04-09T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1983-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1983-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1983-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1983-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1984" : function (t) {
		t.equal(moment("1984-04-08T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1984-04-08T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1984-04-09T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1984-04-09T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1984-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1984-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1984-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1984-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1984-04-08T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1984-04-08T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1984-04-09T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1984-04-09T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1984-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1984-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1984-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1984-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1986" : function (t) {
		t.equal(moment("1986-02-15T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1986-02-15T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1986-02-16T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1986-02-16T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1986-10-08T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1986-10-08T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1986-10-08T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1986-10-08T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1986-02-15T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1986-02-15T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1986-02-16T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1986-02-16T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-10-08T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1986-10-08T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1986-10-08T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1986-10-08T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1987" : function (t) {
		t.equal(moment("1987-02-28T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1987-02-28T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1987-03-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1987-03-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1987-10-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1987-10-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1987-10-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1987-10-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1987-02-28T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1987-02-28T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1987-03-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1987-03-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-10-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1987-10-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1987-10-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1987-10-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1988" : function (t) {
		t.equal(moment("1988-03-14T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1988-03-14T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1988-03-15T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1988-03-15T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1988-10-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1988-10-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1988-10-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1988-10-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1988-03-14T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1988-03-14T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1988-03-15T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1988-03-15T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-10-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1988-10-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1988-10-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1988-10-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1989" : function (t) {
		t.equal(moment("1989-03-30T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1989-03-30T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1989-03-31T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1989-03-31T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1989-09-30T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1989-09-30T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1989-09-30T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1989-09-30T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1989-03-30T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1989-03-30T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1989-03-31T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1989-03-31T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-09-30T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1989-09-30T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1989-09-30T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1989-09-30T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1990" : function (t) {
		t.equal(moment("1990-03-31T23:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1990-03-31T23:59:59+00:00 should be 01:59:59 EET");
		t.equal(moment("1990-04-01T00:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "03:00:00", "1990-04-01T00:00:00+00:00 should be 03:00:00 EEST");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:59:59", "1990-09-29T22:59:59+00:00 should be 01:59:59 EEST");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1990-09-29T23:00:00+00:00 should be 01:00:00 EET");

		t.equal(moment("1990-03-31T23:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1990-03-31T23:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1990-04-01T00:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1990-04-01T00:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-09-29T22:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1990-09-29T22:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1990-09-29T23:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1990-09-29T23:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1991" : function (t) {
		t.equal(moment("1991-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1991-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1991-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1991-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1991-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1991-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1991-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1991-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1991-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1991-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1991-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1991-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1991-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1991-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1991-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1992" : function (t) {
		t.equal(moment("1992-04-07T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1992-04-07T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1992-04-07T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1992-04-07T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1992-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1992-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1992-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1992-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1992-04-07T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1992-04-07T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1992-04-07T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1992-04-07T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1992-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1992-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1992-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1993" : function (t) {
		t.equal(moment("1993-03-25T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1993-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1993-03-25T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1993-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1993-09-24T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1993-09-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1993-09-24T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1993-09-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1993-03-25T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1993-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1993-03-25T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1993-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-24T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1993-09-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1993-09-24T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1993-09-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1994" : function (t) {
		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1994-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1994-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1994-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1994-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1994-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1994-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1994-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1994-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1994-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1994-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1994-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1994-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1994-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1995" : function (t) {
		t.equal(moment("1995-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1995-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1995-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1995-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1995-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1995-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1995-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1995-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1995-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1995-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1995-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1995-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1995-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1995-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1995-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1996" : function (t) {
		t.equal(moment("1996-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1996-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1996-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1996-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1996-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1996-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1996-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1996-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1996-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1996-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1996-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1996-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1996-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1996-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1996-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1997" : function (t) {
		t.equal(moment("1997-03-30T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1997-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1997-03-30T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1997-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1997-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1997-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1997-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1997-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1997-03-30T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1997-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1997-03-30T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1997-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1997-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1997-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1997-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1998" : function (t) {
		t.equal(moment("1998-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1998-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1998-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1998-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1998-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1998-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1998-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1998-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1998-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1998-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1998-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1998-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1998-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1998-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1998-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1999-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("1999-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "1999-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("1999-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "1999-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("1999-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "1999-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("1999-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "1999-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("1999-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "1999-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "1999-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("1999-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "1999-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2000" : function (t) {
		t.equal(moment("2000-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2000-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2000-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2000-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2000-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2000-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2000-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2000-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2000-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2000-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2000-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2000-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2000-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2000-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2000-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2001" : function (t) {
		t.equal(moment("2001-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2001-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2001-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2001-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2001-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2001-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2001-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2001-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2001-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2001-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2001-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2001-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2001-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2001-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2001-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2002" : function (t) {
		t.equal(moment("2002-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2002-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2002-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2002-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2002-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2002-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2002-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2002-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2002-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2002-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2002-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2002-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2002-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2002-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2002-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2003" : function (t) {
		t.equal(moment("2003-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2003-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2003-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2003-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2003-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2003-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2003-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2003-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2003-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2003-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2003-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2003-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2003-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2003-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2003-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2004" : function (t) {
		t.equal(moment("2004-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2004-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2004-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2004-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2004-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2004-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2004-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2004-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2004-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2004-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2004-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2004-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2004-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2004-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2004-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2005" : function (t) {
		t.equal(moment("2005-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2005-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2005-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2005-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2005-09-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2005-09-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2005-09-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2005-09-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2005-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2005-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2005-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2005-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2005-09-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2005-09-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2005-09-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2006" : function (t) {
		t.equal(moment("2006-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2006-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2006-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2006-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2006-09-21T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2006-09-21T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2006-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2006-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2006-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2006-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2006-09-21T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2006-09-21T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2006-09-21T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2007" : function (t) {
		t.equal(moment("2007-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2007-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2007-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2007-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2007-11-01T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2007-11-01T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2007-11-01T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2007-11-01T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2007-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2007-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2007-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2007-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-11-01T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2007-11-01T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2007-11-01T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2007-11-01T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2008" : function (t) {
		t.equal(moment("2008-04-03T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2008-04-03T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2008-04-03T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2008-04-03T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2008-10-31T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2008-10-31T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2008-10-31T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2008-10-31T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2008-04-03T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2008-04-03T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2008-04-03T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2008-04-03T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-31T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2008-10-31T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2008-10-31T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2008-10-31T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2009" : function (t) {
		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2009-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2009-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2009-10-29T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2009-10-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2009-10-29T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2009-10-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2009-03-26T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2009-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2009-03-26T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2009-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-29T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2009-10-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2009-10-29T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2009-10-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-04-01T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2010-04-01T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2010-04-01T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2010-04-01T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2010-10-28T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2010-10-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2010-10-28T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2010-10-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2010-04-01T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2010-04-01T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2010-04-01T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2010-04-01T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-28T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2010-10-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2010-10-28T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2010-10-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-03-31T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2011-03-31T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2011-03-31T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2011-03-31T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2011-10-27T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2011-10-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2011-10-27T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2011-10-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2011-03-31T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2011-03-31T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2011-03-31T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2011-03-31T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-27T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2011-10-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2011-10-27T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2011-10-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2012-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2012-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2012-10-25T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2012-10-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2012-10-25T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2012-10-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2012-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2012-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2012-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2012-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-10-25T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2012-10-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2012-10-25T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2012-10-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-03-28T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2013-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2013-03-28T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2013-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2013-10-24T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2013-10-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2013-10-24T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2013-10-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2013-03-28T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2013-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2013-03-28T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2013-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2013-10-24T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2013-10-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2013-10-24T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2013-10-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-27T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2014-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2014-03-27T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2014-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2014-10-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2014-10-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2014-10-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2014-10-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2014-03-27T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2014-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2014-03-27T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2014-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2014-10-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2014-10-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2014-10-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-26T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2015-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2015-03-26T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2015-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2015-10-29T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2015-10-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2015-10-29T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2015-10-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2015-03-26T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2015-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2015-03-26T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2015-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-29T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2015-10-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2015-10-29T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2015-10-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-24T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2016-03-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2016-03-24T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2016-03-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2016-10-27T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2016-10-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2016-10-27T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2016-10-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2016-03-24T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2016-03-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2016-03-24T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2016-03-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-27T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2016-10-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2016-10-27T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2016-10-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-30T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2017-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2017-03-30T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2017-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2017-10-26T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2017-10-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2017-10-26T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2017-10-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2017-03-30T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2017-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2017-03-30T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2017-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-26T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2017-10-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2017-10-26T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2017-10-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2018-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2018-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2018-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2018-10-25T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2018-10-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2018-10-25T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2018-10-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2018-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2018-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2018-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2018-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-25T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2018-10-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2018-10-25T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2018-10-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-28T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2019-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2019-03-28T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2019-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2019-10-24T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2019-10-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2019-10-24T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2019-10-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2019-03-28T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2019-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2019-03-28T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2019-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-24T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2019-10-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2019-10-24T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2019-10-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-26T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2020-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2020-03-26T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2020-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2020-10-29T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2020-10-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2020-10-29T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2020-10-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2020-03-26T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2020-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2020-03-26T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2020-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-29T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2020-10-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2020-10-29T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2020-10-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-25T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2021-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2021-03-25T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2021-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2021-10-28T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2021-10-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2021-10-28T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2021-10-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2021-03-25T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2021-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2021-03-25T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2021-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-28T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2021-10-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2021-10-28T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2021-10-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-24T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2022-03-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2022-03-24T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2022-03-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2022-10-27T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2022-10-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2022-10-27T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2022-10-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2022-03-24T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2022-03-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2022-03-24T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2022-03-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-27T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2022-10-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2022-10-27T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2022-10-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-30T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2023-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2023-03-30T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2023-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2023-10-26T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2023-10-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2023-10-26T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2023-10-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2023-03-30T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2023-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2023-03-30T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2023-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-26T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2023-10-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2023-10-26T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2023-10-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-28T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2024-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2024-03-28T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2024-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2024-10-24T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2024-10-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2024-10-24T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2024-10-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2024-03-28T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2024-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2024-03-28T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2024-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-24T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2024-10-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2024-10-24T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2024-10-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-27T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2025-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2025-03-27T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2025-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2025-10-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2025-10-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2025-10-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2025-10-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2025-03-27T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2025-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2025-03-27T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2025-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2025-10-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2025-10-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2025-10-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-26T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2026-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2026-03-26T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2026-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2026-10-29T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2026-10-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2026-10-29T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2026-10-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2026-03-26T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2026-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2026-03-26T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2026-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-29T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2026-10-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2026-10-29T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2026-10-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-25T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2027-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2027-03-25T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2027-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2027-10-28T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2027-10-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2027-10-28T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2027-10-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2027-03-25T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2027-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2027-03-25T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2027-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-28T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2027-10-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2027-10-28T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2027-10-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-30T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2028-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2028-03-30T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2028-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2028-10-26T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2028-10-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2028-10-26T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2028-10-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2028-03-30T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2028-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2028-03-30T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2028-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-26T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2028-10-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2028-10-26T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2028-10-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2029-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2029-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2029-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2029-10-25T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2029-10-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2029-10-25T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2029-10-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2029-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2029-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2029-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2029-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-25T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2029-10-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2029-10-25T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2029-10-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-28T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2030-03-28T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2030-03-28T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2030-03-28T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2030-10-24T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2030-10-24T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2030-10-24T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2030-10-24T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2030-03-28T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2030-03-28T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2030-03-28T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2030-03-28T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-24T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2030-10-24T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2030-10-24T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2030-10-24T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-27T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2031-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2031-03-27T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2031-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2031-10-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2031-10-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2031-10-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2031-10-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2031-03-27T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2031-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2031-03-27T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2031-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2031-10-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2031-10-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2031-10-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-25T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2032-03-25T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2032-03-25T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2032-03-25T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2032-10-28T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2032-10-28T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2032-10-28T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2032-10-28T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2032-03-25T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2032-03-25T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2032-03-25T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2032-03-25T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-28T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2032-10-28T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2032-10-28T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2032-10-28T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-24T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2033-03-24T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2033-03-24T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2033-03-24T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2033-10-27T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2033-10-27T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2033-10-27T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2033-10-27T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2033-03-24T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2033-03-24T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2033-03-24T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2033-03-24T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-27T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2033-10-27T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2033-10-27T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2033-10-27T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-30T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2034-03-30T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2034-03-30T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2034-03-30T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2034-10-26T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2034-10-26T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2034-10-26T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2034-10-26T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2034-03-30T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2034-03-30T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2034-03-30T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2034-03-30T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-26T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2034-10-26T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2034-10-26T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2034-10-26T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-29T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2035-03-29T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2035-03-29T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2035-03-29T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2035-10-25T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2035-10-25T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2035-10-25T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2035-10-25T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2035-03-29T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2035-03-29T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2035-03-29T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2035-03-29T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-25T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2035-10-25T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2035-10-25T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2035-10-25T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-27T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2036-03-27T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2036-03-27T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2036-03-27T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2036-10-30T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2036-10-30T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2036-10-30T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2036-10-30T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2036-03-27T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2036-03-27T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2036-03-27T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2036-03-27T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-30T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2036-10-30T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2036-10-30T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2036-10-30T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-26T21:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2037-03-26T21:59:59+00:00 should be 23:59:59 EET");
		t.equal(moment("2037-03-26T22:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "01:00:00", "2037-03-26T22:00:00+00:00 should be 01:00:00 EEST");
		t.equal(moment("2037-10-29T20:59:59+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:59:59", "2037-10-29T20:59:59+00:00 should be 23:59:59 EEST");
		t.equal(moment("2037-10-29T21:00:00+00:00").tz("Asia/Damascus").format("HH:mm:ss"), "23:00:00", "2037-10-29T21:00:00+00:00 should be 23:00:00 EET");

		t.equal(moment("2037-03-26T21:59:59+00:00").tz("Asia/Damascus").zone(), -120, "2037-03-26T21:59:59+00:00 should be -120 minutes offset in EET");
		t.equal(moment("2037-03-26T22:00:00+00:00").tz("Asia/Damascus").zone(), -180, "2037-03-26T22:00:00+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-29T20:59:59+00:00").tz("Asia/Damascus").zone(), -180, "2037-10-29T20:59:59+00:00 should be -180 minutes offset in EEST");
		t.equal(moment("2037-10-29T21:00:00+00:00").tz("Asia/Damascus").zone(), -120, "2037-10-29T21:00:00+00:00 should be -120 minutes offset in EET");

		t.done();
	}
};
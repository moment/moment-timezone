var moment = require("../../index");

exports["Asia/Macau"] = {

	"1911" : function (t) {
		t.equal(moment("1911-12-31T16:25:39+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1911-12-31T16:25:39+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-12-31T16:25:40+00:00").tz("Asia/Macau").format("HH:mm:ss"), "00:25:40", "1911-12-31T16:25:40+00:00 should be 00:25:40 MOT");

		t.equal(moment("1911-12-31T16:25:39+00:00").tz("Asia/Macau").zone(), -27260 / 60, "1911-12-31T16:25:39+00:00 should be -27260 / 60 minutes offset in LMT");
		t.equal(moment("1911-12-31T16:25:40+00:00").tz("Asia/Macau").zone(), -480, "1911-12-31T16:25:40+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1961" : function (t) {
		t.equal(moment("1961-03-18T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1961-03-18T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1961-03-18T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1961-03-18T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1961-11-04T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1961-11-04T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1961-11-04T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1961-11-04T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1961-03-18T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1961-03-18T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1961-03-18T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1961-03-18T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1961-11-04T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1961-11-04T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1961-11-04T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1961-11-04T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1962" : function (t) {
		t.equal(moment("1962-03-17T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1962-03-17T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1962-03-17T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1962-03-17T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1962-11-03T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1962-11-03T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1962-11-03T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1962-11-03T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1962-03-17T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1962-03-17T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1962-03-17T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1962-03-17T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1962-11-03T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1962-11-03T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1962-11-03T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1962-11-03T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1963" : function (t) {
		t.equal(moment("1963-03-16T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1963-03-16T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1963-03-16T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1963-03-16T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1963-11-02T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1963-11-02T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1963-11-02T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1963-11-02T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1963-03-16T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1963-03-16T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1963-03-16T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1963-03-16T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1963-11-02T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1963-11-02T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1963-11-02T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1963-11-02T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1964" : function (t) {
		t.equal(moment("1964-03-21T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1964-03-21T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1964-03-21T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1964-03-21T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1964-10-31T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1964-10-31T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1964-10-31T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1964-10-31T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1964-03-21T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1964-03-21T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1964-03-21T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1964-03-21T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1964-10-31T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1964-10-31T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1964-10-31T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1964-10-31T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1965" : function (t) {
		t.equal(moment("1965-03-20T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1965-03-20T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1965-03-20T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1965-03-20T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1965-10-30T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1965-10-30T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1965-10-30T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1965-10-30T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1965-03-20T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1965-03-20T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1965-03-20T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1965-03-20T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1965-10-30T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1965-10-30T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1965-10-30T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1965-10-30T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1966" : function (t) {
		t.equal(moment("1966-04-16T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1966-04-16T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1966-04-16T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1966-04-16T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1966-10-15T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1966-10-15T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1966-10-15T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1966-10-15T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1966-04-16T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1966-04-16T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1966-04-16T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1966-04-16T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1966-10-15T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1966-10-15T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1966-10-15T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1966-10-15T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1967" : function (t) {
		t.equal(moment("1967-04-15T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1967-04-15T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1967-04-15T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1967-04-15T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1967-10-21T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1967-10-21T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1967-10-21T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1967-10-21T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1967-04-15T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1967-04-15T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1967-04-15T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1967-04-15T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1967-10-21T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1967-10-21T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1967-10-21T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1967-10-21T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1968" : function (t) {
		t.equal(moment("1968-04-20T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1968-04-20T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1968-04-20T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1968-04-20T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1968-10-19T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1968-10-19T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1968-10-19T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1968-10-19T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1968-04-20T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1968-04-20T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1968-04-20T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1968-04-20T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1968-10-19T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1968-10-19T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1968-10-19T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1968-10-19T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1969" : function (t) {
		t.equal(moment("1969-04-19T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1969-04-19T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1969-04-19T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1969-04-19T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1969-10-18T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1969-10-18T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1969-10-18T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1969-10-18T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1969-04-19T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1969-04-19T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1969-04-19T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1969-04-19T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1969-10-18T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1969-10-18T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1969-10-18T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1969-10-18T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1970" : function (t) {
		t.equal(moment("1970-04-18T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1970-04-18T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1970-04-18T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1970-04-18T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1970-10-17T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1970-10-17T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1970-10-17T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1970-10-17T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1970-04-18T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1970-04-18T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1970-04-18T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1970-04-18T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1970-10-17T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1970-10-17T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1970-10-17T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1970-10-17T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1971" : function (t) {
		t.equal(moment("1971-04-17T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1971-04-17T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1971-04-17T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1971-04-17T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1971-10-16T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1971-10-16T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1971-10-16T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1971-10-16T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1971-04-17T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1971-04-17T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1971-04-17T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1971-04-17T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1971-10-16T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1971-10-16T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1971-10-16T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1971-10-16T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1972" : function (t) {
		t.equal(moment("1972-04-15T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1972-04-15T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1972-04-15T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1972-04-15T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1972-10-14T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1972-10-14T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1972-10-14T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1972-10-14T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1972-04-15T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1972-04-15T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1972-04-15T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1972-04-15T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1972-10-14T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1972-10-14T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1972-10-14T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1972-10-14T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1973" : function (t) {
		t.equal(moment("1973-04-14T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1973-04-14T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1973-04-14T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1973-04-14T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1973-10-20T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1973-10-20T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1973-10-20T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1973-10-20T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1973-04-14T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1973-04-14T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1973-04-14T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1973-04-14T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1973-10-20T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1973-10-20T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1973-10-20T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1973-10-20T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1974" : function (t) {
		t.equal(moment("1974-04-20T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1974-04-20T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1974-04-20T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1974-04-20T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1974-10-19T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1974-10-19T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1974-10-19T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1974-10-19T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1974-04-20T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1974-04-20T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1974-04-20T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1974-04-20T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1974-10-19T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1974-10-19T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1974-10-19T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1974-10-19T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1975" : function (t) {
		t.equal(moment("1975-04-19T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1975-04-19T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1975-04-19T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1975-04-19T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1975-10-18T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1975-10-18T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1975-10-18T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1975-10-18T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1975-04-19T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1975-04-19T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1975-04-19T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1975-04-19T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1975-10-18T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1975-10-18T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1975-10-18T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1975-10-18T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1976" : function (t) {
		t.equal(moment("1976-04-17T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1976-04-17T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1976-04-17T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1976-04-17T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1976-10-16T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1976-10-16T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1976-10-16T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1976-10-16T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1976-04-17T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1976-04-17T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1976-04-17T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1976-04-17T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1976-10-16T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1976-10-16T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1976-10-16T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1976-10-16T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1977" : function (t) {
		t.equal(moment("1977-04-16T19:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1977-04-16T19:29:59+00:00 should be 03:29:59 MOT");
		t.equal(moment("1977-04-16T19:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "04:30:00", "1977-04-16T19:30:00+00:00 should be 04:30:00 MOST");
		t.equal(moment("1977-10-15T18:29:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "03:29:59", "1977-10-15T18:29:59+00:00 should be 03:29:59 MOST");
		t.equal(moment("1977-10-15T18:30:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "02:30:00", "1977-10-15T18:30:00+00:00 should be 02:30:00 MOT");

		t.equal(moment("1977-04-16T19:29:59+00:00").tz("Asia/Macau").zone(), -480, "1977-04-16T19:29:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1977-04-16T19:30:00+00:00").tz("Asia/Macau").zone(), -540, "1977-04-16T19:30:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1977-10-15T18:29:59+00:00").tz("Asia/Macau").zone(), -540, "1977-10-15T18:29:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1977-10-15T18:30:00+00:00").tz("Asia/Macau").zone(), -480, "1977-10-15T18:30:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1978" : function (t) {
		t.equal(moment("1978-04-15T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1978-04-15T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1978-04-15T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1978-04-15T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1978-10-14T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1978-10-14T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1978-10-14T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1978-10-14T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1978-04-15T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1978-04-15T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1978-04-15T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1978-04-15T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1978-10-14T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1978-10-14T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1978-10-14T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1978-10-14T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1979" : function (t) {
		t.equal(moment("1979-04-14T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1979-04-14T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1979-04-14T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1979-04-14T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1979-10-20T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1979-10-20T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1979-10-20T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1979-10-20T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1979-04-14T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1979-04-14T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1979-04-14T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1979-04-14T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1979-10-20T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1979-10-20T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1979-10-20T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1979-10-20T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1980" : function (t) {
		t.equal(moment("1980-04-19T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1980-04-19T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1980-04-19T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "01:00:00", "1980-04-19T16:00:00+00:00 should be 01:00:00 MOST");
		t.equal(moment("1980-10-18T14:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1980-10-18T14:59:59+00:00 should be 23:59:59 MOST");
		t.equal(moment("1980-10-18T15:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:00:00", "1980-10-18T15:00:00+00:00 should be 23:00:00 MOT");

		t.equal(moment("1980-04-19T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1980-04-19T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1980-04-19T16:00:00+00:00").tz("Asia/Macau").zone(), -540, "1980-04-19T16:00:00+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1980-10-18T14:59:59+00:00").tz("Asia/Macau").zone(), -540, "1980-10-18T14:59:59+00:00 should be -540 minutes offset in MOST");
		t.equal(moment("1980-10-18T15:00:00+00:00").tz("Asia/Macau").zone(), -480, "1980-10-18T15:00:00+00:00 should be -480 minutes offset in MOT");

		t.done();
	},

	"1999" : function (t) {
		t.equal(moment("1999-12-19T15:59:59+00:00").tz("Asia/Macau").format("HH:mm:ss"), "23:59:59", "1999-12-19T15:59:59+00:00 should be 23:59:59 MOT");
		t.equal(moment("1999-12-19T16:00:00+00:00").tz("Asia/Macau").format("HH:mm:ss"), "00:00:00", "1999-12-19T16:00:00+00:00 should be 00:00:00 CST");

		t.equal(moment("1999-12-19T15:59:59+00:00").tz("Asia/Macau").zone(), -480, "1999-12-19T15:59:59+00:00 should be -480 minutes offset in MOT");
		t.equal(moment("1999-12-19T16:00:00+00:00").tz("Asia/Macau").zone(), -480, "1999-12-19T16:00:00+00:00 should be -480 minutes offset in CST");

		t.done();
	}
};
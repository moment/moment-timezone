var moment = require("../../moment-timezone");

exports["Pacific/Apia"] = {

	"1911" : function (t) {
		t.equal(moment("1911-01-01T11:26:55+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "23:59:59", "1911-01-01T11:26:55+00:00 should be 23:59:59 LMT");
		t.equal(moment("1911-01-01T11:26:56+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "23:56:56", "1911-01-01T11:26:56+00:00 should be 23:56:56 SAMT");

		t.equal(moment("1911-01-01T11:26:55+00:00").tz("Pacific/Apia").zone(), 686, "1911-01-01T11:26:55+00:00 should be 686 minutes offset in LMT");
		t.equal(moment("1911-01-01T11:26:56+00:00").tz("Pacific/Apia").zone(), 690, "1911-01-01T11:26:56+00:00 should be 690 minutes offset in SAMT");

		t.done();
	},

	"1950" : function (t) {
		t.equal(moment("1950-01-01T11:29:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "23:59:59", "1950-01-01T11:29:59+00:00 should be 23:59:59 SAMT");
		t.equal(moment("1950-01-01T11:30:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "00:30:00", "1950-01-01T11:30:00+00:00 should be 00:30:00 WST");

		t.equal(moment("1950-01-01T11:29:59+00:00").tz("Pacific/Apia").zone(), 690, "1950-01-01T11:29:59+00:00 should be 690 minutes offset in SAMT");
		t.equal(moment("1950-01-01T11:30:00+00:00").tz("Pacific/Apia").zone(), 660, "1950-01-01T11:30:00+00:00 should be 660 minutes offset in WST");

		t.done();
	},

	"2010" : function (t) {
		t.equal(moment("2010-09-26T10:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "23:59:59", "2010-09-26T10:59:59+00:00 should be 23:59:59 WST");
		t.equal(moment("2010-09-26T11:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "01:00:00", "2010-09-26T11:00:00+00:00 should be 01:00:00 WSDT");

		t.equal(moment("2010-09-26T10:59:59+00:00").tz("Pacific/Apia").zone(), 660, "2010-09-26T10:59:59+00:00 should be 660 minutes offset in WST");
		t.equal(moment("2010-09-26T11:00:00+00:00").tz("Pacific/Apia").zone(), 600, "2010-09-26T11:00:00+00:00 should be 600 minutes offset in WSDT");

		t.done();
	},

	"2011" : function (t) {
		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2011-04-02T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2011-04-02T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2011-09-24T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2011-09-24T14:00:00+00:00 should be 04:00:00 WSDT");
		t.equal(moment("2011-12-30T09:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "23:59:59", "2011-12-30T09:59:59+00:00 should be 23:59:59 WSDT");
		t.equal(moment("2011-12-30T10:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "00:00:00", "2011-12-30T10:00:00+00:00 should be 00:00:00 WSDT");

		t.equal(moment("2011-04-02T13:59:59+00:00").tz("Pacific/Apia").zone(), 600, "2011-04-02T13:59:59+00:00 should be 600 minutes offset in WSDT");
		t.equal(moment("2011-04-02T14:00:00+00:00").tz("Pacific/Apia").zone(), 660, "2011-04-02T14:00:00+00:00 should be 660 minutes offset in WST");
		t.equal(moment("2011-09-24T13:59:59+00:00").tz("Pacific/Apia").zone(), 660, "2011-09-24T13:59:59+00:00 should be 660 minutes offset in WST");
		t.equal(moment("2011-09-24T14:00:00+00:00").tz("Pacific/Apia").zone(), 600, "2011-09-24T14:00:00+00:00 should be 600 minutes offset in WSDT");
		t.equal(moment("2011-12-30T09:59:59+00:00").tz("Pacific/Apia").zone(), 600, "2011-12-30T09:59:59+00:00 should be 600 minutes offset in WSDT");
		t.equal(moment("2011-12-30T10:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2011-12-30T10:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2012" : function (t) {
		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2012-03-31T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2012-03-31T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2012-09-29T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2012-09-29T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2012-03-31T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2012-03-31T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2012-03-31T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2012-03-31T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2012-09-29T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2012-09-29T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2012-09-29T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2012-09-29T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2013" : function (t) {
		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2013-04-06T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2013-04-06T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2013-09-28T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2013-09-28T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2013-04-06T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2013-04-06T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2013-04-06T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2013-04-06T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2013-09-28T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2013-09-28T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2013-09-28T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2013-09-28T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2014-04-05T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2014-04-05T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2014-09-27T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2014-09-27T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2014-04-05T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2014-04-05T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2014-04-05T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2014-04-05T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2014-09-27T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2014-09-27T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2014-09-27T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2014-09-27T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2015-04-04T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2015-04-04T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2015-09-26T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2015-09-26T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2015-04-04T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2015-04-04T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2015-04-04T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2015-04-04T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2015-09-26T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2015-09-26T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2015-09-26T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2015-09-26T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2016-04-02T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2016-04-02T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2016-09-24T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2016-09-24T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2016-04-02T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2016-04-02T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2016-04-02T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2016-04-02T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2016-09-24T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2016-09-24T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2016-09-24T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2016-09-24T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2017-04-01T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2017-04-01T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2017-09-23T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2017-09-23T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2017-04-01T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2017-04-01T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2017-04-01T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2017-04-01T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2017-09-23T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2017-09-23T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2017-09-23T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2017-09-23T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2018-03-31T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2018-03-31T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2018-09-29T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2018-09-29T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2018-03-31T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2018-03-31T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2018-03-31T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2018-03-31T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2018-09-29T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2018-09-29T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2018-09-29T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2018-09-29T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2019-04-06T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2019-04-06T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2019-09-28T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2019-09-28T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2019-04-06T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2019-04-06T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2019-04-06T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2019-04-06T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2019-09-28T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2019-09-28T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2019-09-28T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2019-09-28T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2020-04-04T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2020-04-04T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2020-09-26T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2020-09-26T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2020-04-04T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2020-04-04T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2020-04-04T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2020-04-04T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2020-09-26T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2020-09-26T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2020-09-26T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2020-09-26T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2021-04-03T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2021-04-03T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2021-09-25T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2021-09-25T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2021-04-03T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2021-04-03T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2021-04-03T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2021-04-03T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2021-09-25T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2021-09-25T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2021-09-25T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2021-09-25T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2022-04-02T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2022-04-02T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2022-09-24T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2022-09-24T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2022-04-02T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2022-04-02T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2022-04-02T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2022-04-02T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2022-09-24T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2022-09-24T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2022-09-24T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2022-09-24T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2023-04-01T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2023-04-01T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2023-09-23T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2023-09-23T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2023-04-01T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2023-04-01T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2023-04-01T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2023-04-01T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2023-09-23T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2023-09-23T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2023-09-23T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2023-09-23T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2024-04-06T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2024-04-06T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2024-09-28T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2024-09-28T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2024-04-06T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2024-04-06T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2024-04-06T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2024-04-06T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2024-09-28T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2024-09-28T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2024-09-28T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2024-09-28T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2025-04-05T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2025-04-05T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2025-09-27T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2025-09-27T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2025-04-05T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2025-04-05T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2025-04-05T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2025-04-05T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2025-09-27T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2025-09-27T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2025-09-27T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2025-09-27T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2026-04-04T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2026-04-04T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2026-09-26T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2026-09-26T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2026-04-04T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2026-04-04T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2026-04-04T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2026-04-04T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2026-09-26T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2026-09-26T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2026-09-26T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2026-09-26T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2027-04-03T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2027-04-03T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2027-09-25T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2027-09-25T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2027-04-03T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2027-04-03T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2027-04-03T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2027-04-03T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2027-09-25T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2027-09-25T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2027-09-25T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2027-09-25T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2028-04-01T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2028-04-01T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2028-09-23T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2028-09-23T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2028-04-01T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2028-04-01T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2028-04-01T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2028-04-01T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2028-09-23T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2028-09-23T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2028-09-23T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2028-09-23T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2029-03-31T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2029-03-31T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2029-09-29T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2029-09-29T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2029-03-31T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2029-03-31T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2029-03-31T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2029-03-31T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2029-09-29T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2029-09-29T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2029-09-29T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2029-09-29T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2030-04-06T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2030-04-06T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2030-09-28T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2030-09-28T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2030-04-06T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2030-04-06T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2030-04-06T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2030-04-06T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2030-09-28T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2030-09-28T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2030-09-28T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2030-09-28T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2031-04-05T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2031-04-05T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2031-09-27T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2031-09-27T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2031-04-05T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2031-04-05T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2031-04-05T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2031-04-05T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2031-09-27T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2031-09-27T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2031-09-27T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2031-09-27T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2032-04-03T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2032-04-03T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2032-09-25T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2032-09-25T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2032-04-03T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2032-04-03T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2032-04-03T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2032-04-03T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2032-09-25T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2032-09-25T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2032-09-25T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2032-09-25T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2033-04-02T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2033-04-02T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2033-09-24T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2033-09-24T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2033-04-02T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2033-04-02T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2033-04-02T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2033-04-02T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2033-09-24T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2033-09-24T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2033-09-24T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2033-09-24T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2034-04-01T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2034-04-01T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2034-09-23T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2034-09-23T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2034-04-01T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2034-04-01T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2034-04-01T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2034-04-01T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2034-09-23T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2034-09-23T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2034-09-23T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2034-09-23T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2035-03-31T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2035-03-31T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2035-09-29T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2035-09-29T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2035-03-31T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2035-03-31T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2035-03-31T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2035-03-31T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2035-09-29T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2035-09-29T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2035-09-29T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2035-09-29T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2036-04-05T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2036-04-05T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2036-09-27T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2036-09-27T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2036-04-05T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2036-04-05T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2036-04-05T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2036-04-05T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2036-09-27T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2036-09-27T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2036-09-27T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2036-09-27T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:59:59", "2037-04-04T13:59:59+00:00 should be 03:59:59 WSDT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "03:00:00", "2037-04-04T14:00:00+00:00 should be 03:00:00 WST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "02:59:59", "2037-09-26T13:59:59+00:00 should be 02:59:59 WST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Apia").format("HH:mm:ss"), "04:00:00", "2037-09-26T14:00:00+00:00 should be 04:00:00 WSDT");

		t.equal(moment("2037-04-04T13:59:59+00:00").tz("Pacific/Apia").zone(), -840, "2037-04-04T13:59:59+00:00 should be -840 minutes offset in WSDT");
		t.equal(moment("2037-04-04T14:00:00+00:00").tz("Pacific/Apia").zone(), -780, "2037-04-04T14:00:00+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2037-09-26T13:59:59+00:00").tz("Pacific/Apia").zone(), -780, "2037-09-26T13:59:59+00:00 should be -780 minutes offset in WST");
		t.equal(moment("2037-09-26T14:00:00+00:00").tz("Pacific/Apia").zone(), -840, "2037-09-26T14:00:00+00:00 should be -840 minutes offset in WSDT");

		t.done();
	}
};
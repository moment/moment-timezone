var moment = require("../../moment-timezone");

exports["America/Cuiaba"] = {

	"2013" : function (t) {
		t.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2013-02-17T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2013-02-17T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2013-10-20T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2013-10-20T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2013-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2013-02-17T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2013-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2013-02-17T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2013-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2013-10-20T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2013-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2013-10-20T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2014-02-16T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2014-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2014-02-16T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2014-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2014-10-19T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2014-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2014-10-19T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2014-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2014-02-16T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2014-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2014-02-16T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2014-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2014-10-19T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2014-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2014-10-19T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2015-02-22T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2015-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2015-02-22T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2015-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2015-10-18T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2015-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2015-10-18T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2015-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2015-02-22T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2015-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2015-02-22T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2015-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2015-10-18T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2015-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2015-10-18T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2016-02-21T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2016-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2016-02-21T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2016-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2016-10-16T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2016-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2016-10-16T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2016-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2016-02-21T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2016-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2016-02-21T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2016-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2016-10-16T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2016-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2016-10-16T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-02-19T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2017-02-19T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2017-02-19T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2017-02-19T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2017-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2017-10-15T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2017-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2017-10-15T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2017-02-19T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2017-02-19T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2017-02-19T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2017-02-19T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2017-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2017-10-15T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2017-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2017-10-15T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2018-02-18T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2018-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2018-02-18T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2018-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2018-10-21T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2018-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2018-10-21T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2018-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2018-02-18T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2018-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2018-02-18T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2018-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2018-10-21T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2018-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2018-10-21T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2019-02-17T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2019-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2019-02-17T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2019-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2019-10-20T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2019-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2019-10-20T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2019-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2019-02-17T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2019-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2019-02-17T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2019-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2019-10-20T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2019-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2019-10-20T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2020-02-16T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2020-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2020-02-16T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2020-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2020-10-18T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2020-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2020-10-18T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2020-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2020-02-16T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2020-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2020-02-16T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2020-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2020-10-18T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2020-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2020-10-18T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2021-02-21T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2021-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2021-02-21T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2021-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2021-10-17T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2021-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2021-10-17T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2021-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2021-02-21T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2021-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2021-02-21T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2021-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2021-10-17T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2021-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2021-10-17T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2022-02-20T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2022-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2022-02-20T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2022-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2022-10-16T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2022-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2022-10-16T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2022-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2022-02-20T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2022-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2022-02-20T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2022-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2022-10-16T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2022-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2022-10-16T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-02-26T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2023-02-26T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2023-02-26T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2023-02-26T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2023-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2023-10-15T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2023-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2023-10-15T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2023-02-26T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2023-02-26T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2023-02-26T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2023-02-26T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2023-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2023-10-15T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2023-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2023-10-15T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2024-02-18T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2024-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2024-02-18T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2024-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2024-10-20T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2024-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2024-10-20T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2024-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2024-02-18T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2024-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2024-02-18T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2024-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2024-10-20T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2024-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2024-10-20T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2025-02-16T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2025-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2025-02-16T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2025-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2025-10-19T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2025-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2025-10-19T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2025-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2025-02-16T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2025-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2025-02-16T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2025-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2025-10-19T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2025-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2025-10-19T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2026-02-22T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2026-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2026-02-22T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2026-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2026-10-18T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2026-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2026-10-18T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2026-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2026-02-22T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2026-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2026-02-22T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2026-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2026-10-18T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2026-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2026-10-18T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-02-21T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2027-02-21T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2027-02-21T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2027-02-21T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2027-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2027-10-17T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2027-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2027-10-17T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2027-02-21T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2027-02-21T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2027-02-21T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2027-02-21T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2027-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2027-10-17T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2027-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2027-10-17T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2028-02-20T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2028-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2028-02-20T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2028-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2028-10-15T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2028-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2028-10-15T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2028-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2028-02-20T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2028-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2028-02-20T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2028-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2028-10-15T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2028-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2028-10-15T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2029-02-18T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2029-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2029-02-18T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2029-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2029-10-21T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2029-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2029-10-21T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2029-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2029-02-18T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2029-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2029-02-18T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2029-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2029-10-21T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2029-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2029-10-21T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2030-02-17T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2030-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2030-02-17T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2030-10-20T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2030-10-20T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2030-10-20T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2030-10-20T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2030-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2030-02-17T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2030-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2030-02-17T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2030-10-20T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2030-10-20T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2030-10-20T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2030-10-20T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-02-16T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2031-02-16T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2031-02-16T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2031-02-16T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2031-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2031-10-19T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2031-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2031-10-19T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2031-02-16T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2031-02-16T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2031-02-16T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2031-02-16T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2031-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2031-10-19T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2031-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2031-10-19T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-02-15T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2032-02-15T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2032-02-15T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2032-02-15T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2032-10-17T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2032-10-17T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2032-10-17T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2032-10-17T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2032-02-15T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2032-02-15T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2032-02-15T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2032-02-15T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2032-10-17T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2032-10-17T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2032-10-17T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2032-10-17T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-02-20T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2033-02-20T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2033-02-20T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2033-02-20T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2033-10-16T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2033-10-16T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2033-10-16T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2033-10-16T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2033-02-20T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2033-02-20T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2033-02-20T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2033-02-20T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2033-10-16T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2033-10-16T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2033-10-16T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2033-10-16T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-02-26T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2034-02-26T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2034-02-26T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2034-02-26T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2034-10-15T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2034-10-15T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2034-10-15T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2034-10-15T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2034-02-26T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2034-02-26T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2034-02-26T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2034-02-26T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2034-10-15T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2034-10-15T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2034-10-15T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2034-10-15T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-02-18T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2035-02-18T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2035-02-18T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2035-02-18T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2035-10-21T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2035-10-21T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2035-10-21T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2035-10-21T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2035-02-18T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2035-02-18T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2035-02-18T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2035-02-18T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2035-10-21T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2035-10-21T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2035-10-21T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2035-10-21T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-02-17T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2036-02-17T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2036-02-17T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2036-02-17T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2036-10-19T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2036-10-19T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2036-10-19T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2036-10-19T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2036-02-17T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2036-02-17T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2036-02-17T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2036-02-17T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2036-10-19T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2036-10-19T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2036-10-19T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2036-10-19T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-02-22T02:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2037-02-22T02:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2037-02-22T03:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:00:00", "2037-02-22T03:00:00+00:00 should be 23:00:00 in America/Cuiaba");
		t.equal(moment("2037-10-18T03:59:59+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "23:59:59", "2037-10-18T03:59:59+00:00 should be 23:59:59 in America/Cuiaba");
		t.equal(moment("2037-10-18T04:00:00+00:00").tz("America/Cuiaba").format("HH:mm:ss"), "01:00:00", "2037-10-18T04:00:00+00:00 should be 01:00:00 in America/Cuiaba");

		t.equal(moment("2037-02-22T02:59:59+00:00").tz("America/Cuiaba").zone(), 180, "2037-02-22T02:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2037-02-22T03:00:00+00:00").tz("America/Cuiaba").zone(), 240, "2037-02-22T03:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2037-10-18T03:59:59+00:00").tz("America/Cuiaba").zone(), 240, "2037-10-18T03:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2037-10-18T04:00:00+00:00").tz("America/Cuiaba").zone(), 180, "2037-10-18T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	}
};
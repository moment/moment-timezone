var moment = require("../../moment-timezone");

exports["America/Miquelon"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2013-03-10T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2013-03-10T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2013-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2013-11-03T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2013-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2013-11-03T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2013-03-10T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2013-03-10T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2013-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2013-11-03T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2013-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2013-11-03T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2014-03-09T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2014-03-09T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2014-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2014-11-02T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2014-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2014-11-02T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2014-03-09T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2014-03-09T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2014-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2014-11-02T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2014-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2014-11-02T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2015-03-08T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2015-03-08T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2015-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2015-11-01T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2015-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2015-11-01T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2015-03-08T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2015-03-08T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2015-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2015-11-01T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2015-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2015-11-01T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2016-03-13T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2016-03-13T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2016-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2016-11-06T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2016-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2016-11-06T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2016-03-13T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2016-03-13T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2016-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2016-11-06T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2016-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2016-11-06T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2017-03-12T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2017-03-12T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2017-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2017-11-05T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2017-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2017-11-05T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2017-03-12T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2017-03-12T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2017-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2017-11-05T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2017-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2017-11-05T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2018-03-11T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2018-03-11T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2018-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2018-11-04T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2018-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2018-11-04T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2018-03-11T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2018-03-11T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2018-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2018-11-04T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2018-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2018-11-04T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2019-03-10T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2019-03-10T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2019-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2019-11-03T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2019-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2019-11-03T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2019-03-10T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2019-03-10T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2019-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2019-11-03T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2019-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2019-11-03T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2020-03-08T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2020-03-08T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2020-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2020-11-01T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2020-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2020-11-01T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2020-03-08T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2020-03-08T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2020-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2020-11-01T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2020-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2020-11-01T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2021-03-14T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2021-03-14T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2021-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2021-11-07T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2021-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2021-11-07T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2021-03-14T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2021-03-14T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2021-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2021-11-07T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2021-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2021-11-07T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2022-03-13T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2022-03-13T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2022-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2022-11-06T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2022-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2022-11-06T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2022-03-13T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2022-03-13T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2022-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2022-11-06T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2022-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2022-11-06T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2023-03-12T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2023-03-12T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2023-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2023-11-05T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2023-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2023-11-05T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2023-03-12T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2023-03-12T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2023-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2023-11-05T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2023-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2023-11-05T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2024-03-10T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2024-03-10T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2024-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2024-11-03T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2024-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2024-11-03T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2024-03-10T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2024-03-10T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2024-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2024-11-03T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2024-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2024-11-03T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2025-03-09T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2025-03-09T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2025-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2025-11-02T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2025-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2025-11-02T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2025-03-09T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2025-03-09T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2025-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2025-11-02T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2025-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2025-11-02T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2026-03-08T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2026-03-08T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2026-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2026-11-01T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2026-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2026-11-01T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2026-03-08T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2026-03-08T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2026-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2026-11-01T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2026-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2026-11-01T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2027-03-14T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2027-03-14T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2027-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2027-11-07T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2027-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2027-11-07T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2027-03-14T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2027-03-14T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2027-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2027-11-07T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2027-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2027-11-07T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2028-03-12T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2028-03-12T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2028-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2028-11-05T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2028-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2028-11-05T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2028-03-12T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2028-03-12T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2028-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2028-11-05T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2028-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2028-11-05T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2029-03-11T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2029-03-11T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2029-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2029-11-04T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2029-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2029-11-04T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2029-03-11T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2029-03-11T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2029-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2029-11-04T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2029-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2029-11-04T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2030-03-10T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2030-03-10T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2030-11-03T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2030-11-03T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2030-11-03T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2030-11-03T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2030-03-10T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2030-03-10T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2030-11-03T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2030-11-03T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2030-11-03T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2030-11-03T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2031-03-09T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2031-03-09T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2031-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2031-11-02T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2031-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2031-11-02T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2031-03-09T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2031-03-09T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2031-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2031-11-02T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2031-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2031-11-02T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2032-03-14T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2032-03-14T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2032-11-07T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2032-11-07T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2032-11-07T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2032-11-07T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2032-03-14T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2032-03-14T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2032-11-07T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2032-11-07T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2032-11-07T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2032-11-07T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2033-03-13T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2033-03-13T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2033-11-06T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2033-11-06T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2033-11-06T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2033-11-06T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2033-03-13T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2033-03-13T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2033-11-06T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2033-11-06T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2033-11-06T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2033-11-06T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2034-03-12T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2034-03-12T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2034-11-05T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2034-11-05T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2034-11-05T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2034-11-05T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2034-03-12T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2034-03-12T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2034-11-05T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2034-11-05T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2034-11-05T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2034-11-05T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2035-03-11T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2035-03-11T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2035-11-04T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2035-11-04T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2035-11-04T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2035-11-04T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2035-03-11T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2035-03-11T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2035-11-04T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2035-11-04T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2035-11-04T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2035-11-04T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2036-03-09T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2036-03-09T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2036-11-02T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2036-11-02T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2036-11-02T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2036-11-02T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2036-03-09T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2036-03-09T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2036-11-02T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2036-11-02T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2036-11-02T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2036-11-02T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2037-03-08T04:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "03:00:00", "2037-03-08T05:00:00+00:00 should be 03:00:00 in America/Miquelon");
		t.equal(moment("2037-11-01T03:59:59+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:59:59", "2037-11-01T03:59:59+00:00 should be 01:59:59 in America/Miquelon");
		t.equal(moment("2037-11-01T04:00:00+00:00").tz("America/Miquelon").format("HH:mm:ss"), "01:00:00", "2037-11-01T04:00:00+00:00 should be 01:00:00 in America/Miquelon");

		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Miquelon").zone(), 180, "2037-03-08T04:59:59+00:00 should be 180 minutes offset");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Miquelon").zone(), 120, "2037-03-08T05:00:00+00:00 should be 120 minutes offset");
		t.equal(moment("2037-11-01T03:59:59+00:00").tz("America/Miquelon").zone(), 120, "2037-11-01T03:59:59+00:00 should be 120 minutes offset");
		t.equal(moment("2037-11-01T04:00:00+00:00").tz("America/Miquelon").zone(), 180, "2037-11-01T04:00:00+00:00 should be 180 minutes offset");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["America/Havana"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2013-03-10T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2013-03-10T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2013-11-03T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2013-11-03T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2013-03-10T04:59:59+00:00").tz("America/Havana").zone(), 300, "2013-03-10T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2013-03-10T05:00:00+00:00").tz("America/Havana").zone(), 240, "2013-03-10T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2013-11-03T04:59:59+00:00").tz("America/Havana").zone(), 240, "2013-11-03T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2013-11-03T05:00:00+00:00").tz("America/Havana").zone(), 300, "2013-11-03T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2014-03-09T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2014-03-09T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2014-11-02T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2014-11-02T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2014-11-02T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2014-11-02T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2014-03-09T04:59:59+00:00").tz("America/Havana").zone(), 300, "2014-03-09T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2014-03-09T05:00:00+00:00").tz("America/Havana").zone(), 240, "2014-03-09T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2014-11-02T04:59:59+00:00").tz("America/Havana").zone(), 240, "2014-11-02T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2014-11-02T05:00:00+00:00").tz("America/Havana").zone(), 300, "2014-11-02T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2015-03-08T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2015-03-08T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2015-11-01T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2015-11-01T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2015-11-01T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2015-11-01T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2015-03-08T04:59:59+00:00").tz("America/Havana").zone(), 300, "2015-03-08T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2015-03-08T05:00:00+00:00").tz("America/Havana").zone(), 240, "2015-03-08T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2015-11-01T04:59:59+00:00").tz("America/Havana").zone(), 240, "2015-11-01T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2015-11-01T05:00:00+00:00").tz("America/Havana").zone(), 300, "2015-11-01T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2016-03-13T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2016-03-13T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2016-11-06T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2016-11-06T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2016-11-06T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2016-11-06T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2016-03-13T04:59:59+00:00").tz("America/Havana").zone(), 300, "2016-03-13T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2016-03-13T05:00:00+00:00").tz("America/Havana").zone(), 240, "2016-03-13T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2016-11-06T04:59:59+00:00").tz("America/Havana").zone(), 240, "2016-11-06T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2016-11-06T05:00:00+00:00").tz("America/Havana").zone(), 300, "2016-11-06T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2017-03-12T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2017-03-12T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2017-11-05T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2017-11-05T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2017-11-05T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2017-11-05T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2017-03-12T04:59:59+00:00").tz("America/Havana").zone(), 300, "2017-03-12T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2017-03-12T05:00:00+00:00").tz("America/Havana").zone(), 240, "2017-03-12T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2017-11-05T04:59:59+00:00").tz("America/Havana").zone(), 240, "2017-11-05T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2017-11-05T05:00:00+00:00").tz("America/Havana").zone(), 300, "2017-11-05T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2018-03-11T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2018-03-11T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2018-11-04T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2018-11-04T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2018-11-04T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2018-11-04T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2018-03-11T04:59:59+00:00").tz("America/Havana").zone(), 300, "2018-03-11T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2018-03-11T05:00:00+00:00").tz("America/Havana").zone(), 240, "2018-03-11T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2018-11-04T04:59:59+00:00").tz("America/Havana").zone(), 240, "2018-11-04T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2018-11-04T05:00:00+00:00").tz("America/Havana").zone(), 300, "2018-11-04T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2019-03-10T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2019-03-10T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2019-11-03T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2019-11-03T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2019-11-03T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2019-11-03T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2019-03-10T04:59:59+00:00").tz("America/Havana").zone(), 300, "2019-03-10T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2019-03-10T05:00:00+00:00").tz("America/Havana").zone(), 240, "2019-03-10T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2019-11-03T04:59:59+00:00").tz("America/Havana").zone(), 240, "2019-11-03T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2019-11-03T05:00:00+00:00").tz("America/Havana").zone(), 300, "2019-11-03T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2020-03-08T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2020-03-08T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2020-11-01T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2020-11-01T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2020-11-01T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2020-11-01T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2020-03-08T04:59:59+00:00").tz("America/Havana").zone(), 300, "2020-03-08T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2020-03-08T05:00:00+00:00").tz("America/Havana").zone(), 240, "2020-03-08T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2020-11-01T04:59:59+00:00").tz("America/Havana").zone(), 240, "2020-11-01T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2020-11-01T05:00:00+00:00").tz("America/Havana").zone(), 300, "2020-11-01T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2021-03-14T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2021-03-14T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2021-11-07T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2021-11-07T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2021-11-07T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2021-11-07T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2021-03-14T04:59:59+00:00").tz("America/Havana").zone(), 300, "2021-03-14T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2021-03-14T05:00:00+00:00").tz("America/Havana").zone(), 240, "2021-03-14T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2021-11-07T04:59:59+00:00").tz("America/Havana").zone(), 240, "2021-11-07T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2021-11-07T05:00:00+00:00").tz("America/Havana").zone(), 300, "2021-11-07T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2022-03-13T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2022-03-13T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2022-11-06T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2022-11-06T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2022-11-06T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2022-11-06T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2022-03-13T04:59:59+00:00").tz("America/Havana").zone(), 300, "2022-03-13T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2022-03-13T05:00:00+00:00").tz("America/Havana").zone(), 240, "2022-03-13T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2022-11-06T04:59:59+00:00").tz("America/Havana").zone(), 240, "2022-11-06T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2022-11-06T05:00:00+00:00").tz("America/Havana").zone(), 300, "2022-11-06T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2023-03-12T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2023-03-12T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2023-11-05T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2023-11-05T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2023-11-05T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2023-11-05T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2023-03-12T04:59:59+00:00").tz("America/Havana").zone(), 300, "2023-03-12T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2023-03-12T05:00:00+00:00").tz("America/Havana").zone(), 240, "2023-03-12T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2023-11-05T04:59:59+00:00").tz("America/Havana").zone(), 240, "2023-11-05T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2023-11-05T05:00:00+00:00").tz("America/Havana").zone(), 300, "2023-11-05T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2024-03-10T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2024-03-10T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2024-11-03T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2024-11-03T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2024-11-03T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2024-11-03T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2024-03-10T04:59:59+00:00").tz("America/Havana").zone(), 300, "2024-03-10T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2024-03-10T05:00:00+00:00").tz("America/Havana").zone(), 240, "2024-03-10T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2024-11-03T04:59:59+00:00").tz("America/Havana").zone(), 240, "2024-11-03T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2024-11-03T05:00:00+00:00").tz("America/Havana").zone(), 300, "2024-11-03T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2025-03-09T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2025-03-09T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2025-11-02T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2025-11-02T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2025-11-02T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2025-11-02T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2025-03-09T04:59:59+00:00").tz("America/Havana").zone(), 300, "2025-03-09T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2025-03-09T05:00:00+00:00").tz("America/Havana").zone(), 240, "2025-03-09T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2025-11-02T04:59:59+00:00").tz("America/Havana").zone(), 240, "2025-11-02T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2025-11-02T05:00:00+00:00").tz("America/Havana").zone(), 300, "2025-11-02T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2026-03-08T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2026-03-08T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2026-11-01T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2026-11-01T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2026-11-01T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2026-11-01T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2026-03-08T04:59:59+00:00").tz("America/Havana").zone(), 300, "2026-03-08T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2026-03-08T05:00:00+00:00").tz("America/Havana").zone(), 240, "2026-03-08T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2026-11-01T04:59:59+00:00").tz("America/Havana").zone(), 240, "2026-11-01T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2026-11-01T05:00:00+00:00").tz("America/Havana").zone(), 300, "2026-11-01T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2027-03-14T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2027-03-14T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2027-11-07T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2027-11-07T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2027-11-07T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2027-11-07T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2027-03-14T04:59:59+00:00").tz("America/Havana").zone(), 300, "2027-03-14T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2027-03-14T05:00:00+00:00").tz("America/Havana").zone(), 240, "2027-03-14T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2027-11-07T04:59:59+00:00").tz("America/Havana").zone(), 240, "2027-11-07T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2027-11-07T05:00:00+00:00").tz("America/Havana").zone(), 300, "2027-11-07T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2028-03-12T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2028-03-12T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2028-11-05T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2028-11-05T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2028-11-05T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2028-11-05T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2028-03-12T04:59:59+00:00").tz("America/Havana").zone(), 300, "2028-03-12T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2028-03-12T05:00:00+00:00").tz("America/Havana").zone(), 240, "2028-03-12T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2028-11-05T04:59:59+00:00").tz("America/Havana").zone(), 240, "2028-11-05T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2028-11-05T05:00:00+00:00").tz("America/Havana").zone(), 300, "2028-11-05T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2029-03-11T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2029-03-11T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2029-11-04T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2029-11-04T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2029-11-04T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2029-11-04T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2029-03-11T04:59:59+00:00").tz("America/Havana").zone(), 300, "2029-03-11T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2029-03-11T05:00:00+00:00").tz("America/Havana").zone(), 240, "2029-03-11T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2029-11-04T04:59:59+00:00").tz("America/Havana").zone(), 240, "2029-11-04T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2029-11-04T05:00:00+00:00").tz("America/Havana").zone(), 300, "2029-11-04T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2030-03-10T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2030-03-10T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2030-11-03T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2030-11-03T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2030-11-03T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2030-11-03T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2030-03-10T04:59:59+00:00").tz("America/Havana").zone(), 300, "2030-03-10T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2030-03-10T05:00:00+00:00").tz("America/Havana").zone(), 240, "2030-03-10T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2030-11-03T04:59:59+00:00").tz("America/Havana").zone(), 240, "2030-11-03T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2030-11-03T05:00:00+00:00").tz("America/Havana").zone(), 300, "2030-11-03T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2031-03-09T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2031-03-09T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2031-11-02T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2031-11-02T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2031-11-02T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2031-11-02T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2031-03-09T04:59:59+00:00").tz("America/Havana").zone(), 300, "2031-03-09T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2031-03-09T05:00:00+00:00").tz("America/Havana").zone(), 240, "2031-03-09T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2031-11-02T04:59:59+00:00").tz("America/Havana").zone(), 240, "2031-11-02T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2031-11-02T05:00:00+00:00").tz("America/Havana").zone(), 300, "2031-11-02T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2032-03-14T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2032-03-14T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2032-11-07T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2032-11-07T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2032-11-07T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2032-11-07T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2032-03-14T04:59:59+00:00").tz("America/Havana").zone(), 300, "2032-03-14T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2032-03-14T05:00:00+00:00").tz("America/Havana").zone(), 240, "2032-03-14T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2032-11-07T04:59:59+00:00").tz("America/Havana").zone(), 240, "2032-11-07T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2032-11-07T05:00:00+00:00").tz("America/Havana").zone(), 300, "2032-11-07T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2033-03-13T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2033-03-13T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2033-11-06T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2033-11-06T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2033-11-06T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2033-11-06T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2033-03-13T04:59:59+00:00").tz("America/Havana").zone(), 300, "2033-03-13T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2033-03-13T05:00:00+00:00").tz("America/Havana").zone(), 240, "2033-03-13T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2033-11-06T04:59:59+00:00").tz("America/Havana").zone(), 240, "2033-11-06T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2033-11-06T05:00:00+00:00").tz("America/Havana").zone(), 300, "2033-11-06T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2034-03-12T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2034-03-12T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2034-11-05T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2034-11-05T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2034-11-05T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2034-11-05T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2034-03-12T04:59:59+00:00").tz("America/Havana").zone(), 300, "2034-03-12T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2034-03-12T05:00:00+00:00").tz("America/Havana").zone(), 240, "2034-03-12T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2034-11-05T04:59:59+00:00").tz("America/Havana").zone(), 240, "2034-11-05T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2034-11-05T05:00:00+00:00").tz("America/Havana").zone(), 300, "2034-11-05T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2035-03-11T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2035-03-11T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2035-11-04T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2035-11-04T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2035-11-04T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2035-11-04T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2035-03-11T04:59:59+00:00").tz("America/Havana").zone(), 300, "2035-03-11T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2035-03-11T05:00:00+00:00").tz("America/Havana").zone(), 240, "2035-03-11T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2035-11-04T04:59:59+00:00").tz("America/Havana").zone(), 240, "2035-11-04T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2035-11-04T05:00:00+00:00").tz("America/Havana").zone(), 300, "2035-11-04T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2036-03-09T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2036-03-09T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2036-11-02T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2036-11-02T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2036-11-02T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2036-11-02T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2036-03-09T04:59:59+00:00").tz("America/Havana").zone(), 300, "2036-03-09T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2036-03-09T05:00:00+00:00").tz("America/Havana").zone(), 240, "2036-03-09T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2036-11-02T04:59:59+00:00").tz("America/Havana").zone(), 240, "2036-11-02T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2036-11-02T05:00:00+00:00").tz("America/Havana").zone(), 300, "2036-11-02T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "23:59:59", "2037-03-08T04:59:59+00:00 should be 23:59:59 in America/Havana");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "01:00:00", "2037-03-08T05:00:00+00:00 should be 01:00:00 in America/Havana");
		t.equal(moment("2037-11-01T04:59:59+00:00").tz("America/Havana").format("HH:mm:ss"), "00:59:59", "2037-11-01T04:59:59+00:00 should be 00:59:59 in America/Havana");
		t.equal(moment("2037-11-01T05:00:00+00:00").tz("America/Havana").format("HH:mm:ss"), "00:00:00", "2037-11-01T05:00:00+00:00 should be 00:00:00 in America/Havana");

		t.equal(moment("2037-03-08T04:59:59+00:00").tz("America/Havana").zone(), 300, "2037-03-08T04:59:59+00:00 should be 300 minutes offset");
		t.equal(moment("2037-03-08T05:00:00+00:00").tz("America/Havana").zone(), 240, "2037-03-08T05:00:00+00:00 should be 240 minutes offset");
		t.equal(moment("2037-11-01T04:59:59+00:00").tz("America/Havana").zone(), 240, "2037-11-01T04:59:59+00:00 should be 240 minutes offset");
		t.equal(moment("2037-11-01T05:00:00+00:00").tz("America/Havana").zone(), 300, "2037-11-01T05:00:00+00:00 should be 300 minutes offset");

		t.done();
	}
};
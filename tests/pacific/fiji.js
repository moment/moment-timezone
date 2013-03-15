var moment = require("../../moment-timezone");

exports["Pacific/Fiji"] = {

	"2013" : function (t) {
		t.equal(moment("2013-01-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2013-01-19T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2013-01-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2013-01-19T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2013-10-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2013-10-19T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2013-10-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2013-10-19T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2013-01-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2013-01-19T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2013-01-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2013-01-19T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2013-10-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2013-10-19T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2013-10-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2013-10-19T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-01-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2014-01-18T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2014-01-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2014-01-18T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2014-10-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2014-10-18T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2014-10-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2014-10-18T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2014-01-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2014-01-18T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2014-01-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2014-01-18T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2014-10-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2014-10-18T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2014-10-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2014-10-18T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-01-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2015-01-17T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2015-01-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2015-01-17T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2015-10-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2015-10-17T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2015-10-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2015-10-17T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2015-01-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2015-01-17T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2015-01-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2015-01-17T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2015-10-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2015-10-17T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2015-10-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2015-10-17T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-01-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2016-01-23T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2016-01-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2016-01-23T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2016-10-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2016-10-22T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2016-10-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2016-10-22T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2016-01-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2016-01-23T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2016-01-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2016-01-23T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2016-10-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2016-10-22T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2016-10-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2016-10-22T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-01-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2017-01-21T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2017-01-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2017-01-21T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2017-10-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2017-10-21T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2017-10-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2017-10-21T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2017-01-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2017-01-21T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2017-01-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2017-01-21T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2017-10-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2017-10-21T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2017-10-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2017-10-21T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-01-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2018-01-20T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2018-01-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2018-01-20T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2018-10-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2018-10-20T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2018-10-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2018-10-20T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2018-01-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2018-01-20T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2018-01-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2018-01-20T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2018-10-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2018-10-20T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2018-10-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2018-10-20T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-01-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2019-01-19T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2019-01-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2019-01-19T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2019-10-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2019-10-19T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2019-10-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2019-10-19T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2019-01-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2019-01-19T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2019-01-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2019-01-19T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2019-10-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2019-10-19T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2019-10-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2019-10-19T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-01-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2020-01-18T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2020-01-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2020-01-18T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2020-10-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2020-10-17T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2020-10-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2020-10-17T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2020-01-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2020-01-18T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2020-01-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2020-01-18T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2020-10-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2020-10-17T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2020-10-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2020-10-17T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-01-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2021-01-23T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2021-01-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2021-01-23T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2021-10-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2021-10-23T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2021-10-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2021-10-23T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2021-01-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2021-01-23T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2021-01-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2021-01-23T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2021-10-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2021-10-23T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2021-10-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2021-10-23T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-01-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2022-01-22T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2022-01-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2022-01-22T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2022-10-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2022-10-22T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2022-10-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2022-10-22T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2022-01-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2022-01-22T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2022-01-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2022-01-22T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2022-10-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2022-10-22T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2022-10-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2022-10-22T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-01-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2023-01-21T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2023-01-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2023-01-21T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2023-10-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2023-10-21T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2023-10-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2023-10-21T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2023-01-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2023-01-21T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2023-01-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2023-01-21T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2023-10-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2023-10-21T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2023-10-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2023-10-21T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-01-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2024-01-20T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2024-01-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2024-01-20T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2024-10-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2024-10-19T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2024-10-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2024-10-19T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2024-01-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2024-01-20T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2024-01-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2024-01-20T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2024-10-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2024-10-19T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2024-10-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2024-10-19T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-01-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2025-01-18T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2025-01-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2025-01-18T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2025-10-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2025-10-18T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2025-10-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2025-10-18T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2025-01-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2025-01-18T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2025-01-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2025-01-18T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2025-10-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2025-10-18T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2025-10-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2025-10-18T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-01-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2026-01-17T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2026-01-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2026-01-17T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2026-10-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2026-10-17T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2026-10-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2026-10-17T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2026-01-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2026-01-17T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2026-01-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2026-01-17T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2026-10-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2026-10-17T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2026-10-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2026-10-17T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-01-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2027-01-23T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2027-01-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2027-01-23T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2027-10-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2027-10-23T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2027-10-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2027-10-23T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2027-01-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2027-01-23T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2027-01-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2027-01-23T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2027-10-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2027-10-23T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2027-10-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2027-10-23T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-01-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2028-01-22T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2028-01-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2028-01-22T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2028-10-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2028-10-21T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2028-10-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2028-10-21T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2028-01-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2028-01-22T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2028-01-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2028-01-22T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2028-10-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2028-10-21T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2028-10-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2028-10-21T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-01-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2029-01-20T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2029-01-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2029-01-20T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2029-10-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2029-10-20T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2029-10-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2029-10-20T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2029-01-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2029-01-20T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2029-01-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2029-01-20T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2029-10-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2029-10-20T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2029-10-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2029-10-20T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-01-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2030-01-19T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2030-01-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2030-01-19T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2030-10-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2030-10-19T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2030-10-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2030-10-19T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2030-01-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2030-01-19T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2030-01-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2030-01-19T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2030-10-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2030-10-19T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2030-10-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2030-10-19T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-01-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2031-01-18T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2031-01-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2031-01-18T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2031-10-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2031-10-18T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2031-10-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2031-10-18T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2031-01-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2031-01-18T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2031-01-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2031-01-18T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2031-10-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2031-10-18T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2031-10-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2031-10-18T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-01-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2032-01-17T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2032-01-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2032-01-17T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2032-10-23T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2032-10-23T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2032-10-23T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2032-10-23T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2032-01-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2032-01-17T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2032-01-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2032-01-17T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2032-10-23T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2032-10-23T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2032-10-23T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2032-10-23T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-01-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2033-01-22T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2033-01-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2033-01-22T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2033-10-22T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2033-10-22T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2033-10-22T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2033-10-22T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2033-01-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2033-01-22T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2033-01-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2033-01-22T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2033-10-22T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2033-10-22T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2033-10-22T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2033-10-22T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-01-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2034-01-21T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2034-01-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2034-01-21T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2034-10-21T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2034-10-21T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2034-10-21T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2034-10-21T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2034-01-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2034-01-21T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2034-01-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2034-01-21T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2034-10-21T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2034-10-21T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2034-10-21T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2034-10-21T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-01-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2035-01-20T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2035-01-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2035-01-20T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2035-10-20T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2035-10-20T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2035-10-20T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2035-10-20T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2035-01-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2035-01-20T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2035-01-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2035-01-20T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2035-10-20T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2035-10-20T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2035-10-20T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2035-10-20T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-01-19T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2036-01-19T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2036-01-19T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2036-01-19T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2036-10-18T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2036-10-18T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2036-10-18T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2036-10-18T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2036-01-19T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2036-01-19T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2036-01-19T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2036-01-19T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2036-10-18T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2036-10-18T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2036-10-18T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2036-10-18T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-01-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:59:59", "2037-01-17T13:59:59+00:00 should be 02:59:59 in Pacific/Fiji");
		t.equal(moment("2037-01-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "02:00:00", "2037-01-17T14:00:00+00:00 should be 02:00:00 in Pacific/Fiji");
		t.equal(moment("2037-10-17T13:59:59+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "01:59:59", "2037-10-17T13:59:59+00:00 should be 01:59:59 in Pacific/Fiji");
		t.equal(moment("2037-10-17T14:00:00+00:00").tz("Pacific/Fiji").format("HH:mm:ss"), "03:00:00", "2037-10-17T14:00:00+00:00 should be 03:00:00 in Pacific/Fiji");

		t.equal(moment("2037-01-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -780, "2037-01-17T13:59:59+00:00 should be -780 minutes offset");
		t.equal(moment("2037-01-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -720, "2037-01-17T14:00:00+00:00 should be -720 minutes offset");
		t.equal(moment("2037-10-17T13:59:59+00:00").tz("Pacific/Fiji").zone(), -720, "2037-10-17T13:59:59+00:00 should be -720 minutes offset");
		t.equal(moment("2037-10-17T14:00:00+00:00").tz("Pacific/Fiji").zone(), -780, "2037-10-17T14:00:00+00:00 should be -780 minutes offset");

		t.done();
	}
};
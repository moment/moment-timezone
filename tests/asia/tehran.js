var moment = require("../../moment-timezone");

exports["Asia/Tehran"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2013-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2013-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2013-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2013-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2013-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2013-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2013-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2013-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2013-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2013-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2013-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2013-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2014-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2014-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2014-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2014-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2014-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2014-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2014-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2014-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2014-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2014-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2014-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2014-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2014-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2014-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2014-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2015-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2015-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2015-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2015-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2015-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2015-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2015-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2015-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2015-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2015-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2015-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2015-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2015-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2015-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2015-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2016-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2016-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2016-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2016-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2016-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2016-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2016-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2016-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2016-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2016-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2016-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2016-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2016-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2016-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2016-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2017-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2017-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2017-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2017-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2017-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2017-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2017-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2017-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2017-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2017-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2017-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2017-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2017-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2017-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2017-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2018-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2018-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2018-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2018-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2018-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2018-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2018-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2018-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2018-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2018-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2018-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2018-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2018-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2018-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2018-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2019-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2019-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2019-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2019-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2019-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2019-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2019-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2019-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2019-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2019-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2019-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2019-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2019-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2019-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2019-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2020-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2020-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2020-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2020-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2020-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2020-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2020-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2020-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2020-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2020-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2020-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2020-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2020-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2020-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2020-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2021-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2021-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2021-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2021-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2021-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2021-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2021-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2021-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2021-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2021-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2021-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2021-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2021-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2021-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2021-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2022-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2022-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2022-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2022-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2022-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2022-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2022-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2022-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2022-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2022-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2022-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2022-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2022-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2022-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2022-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2023-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2023-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2023-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2023-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2023-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2023-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2023-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2023-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2023-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2023-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2023-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2023-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2023-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2023-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2023-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2024-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2024-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2024-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2024-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2024-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2024-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2024-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2024-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2024-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2024-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2024-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2024-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2024-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2024-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2024-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2025-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2025-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2025-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2025-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2025-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2025-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2025-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2025-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2025-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2025-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2025-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2025-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2025-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2025-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2025-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2026-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2026-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2026-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2026-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2026-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2026-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2026-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2026-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2026-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2026-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2026-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2026-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2026-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2026-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2026-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2027-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2027-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2027-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2027-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2027-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2027-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2027-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2027-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2027-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2027-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2027-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2027-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2027-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2027-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2027-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2028-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2028-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2028-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2028-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2028-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2028-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2028-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2028-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2028-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2028-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2028-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2028-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2028-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2028-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2028-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2029-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2029-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2029-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2029-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2029-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2029-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2029-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2029-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2029-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2029-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2029-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2029-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2029-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2029-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2029-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2030-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2030-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2030-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2030-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2030-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2030-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2030-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2030-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2030-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2030-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2030-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2030-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2030-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2030-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2030-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2031-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2031-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2031-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2031-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2031-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2031-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2031-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2031-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2031-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2031-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2031-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2031-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2031-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2031-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2031-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2032-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2032-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2032-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2032-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2032-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2032-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2032-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2032-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2032-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2032-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2032-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2032-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2032-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2032-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2032-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2033-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2033-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2033-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2033-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2033-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2033-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2033-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2033-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2033-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2033-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2033-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2033-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2033-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2033-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2033-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2034-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2034-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2034-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2034-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2034-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2034-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2034-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2034-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2034-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2034-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2034-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2034-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2034-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2034-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2034-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-21T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2035-03-21T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2035-03-21T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2035-03-21T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2035-09-21T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2035-09-21T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2035-09-21T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2035-09-21T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2035-03-21T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2035-03-21T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2035-03-21T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2035-03-21T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2035-09-21T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2035-09-21T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2035-09-21T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2035-09-21T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2036-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2036-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2036-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2036-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2036-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2036-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2036-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2036-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2036-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2036-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2036-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2036-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2036-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2036-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2036-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-20T20:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2037-03-20T20:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2037-03-20T20:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "01:00:00", "2037-03-20T20:30:00+00:00 should be 01:00:00 in Asia/Tehran");
		t.equal(moment("2037-09-20T19:29:59+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:59:59", "2037-09-20T19:29:59+00:00 should be 23:59:59 in Asia/Tehran");
		t.equal(moment("2037-09-20T19:30:00+00:00").tz("Asia/Tehran").format("HH:mm:ss"), "23:00:00", "2037-09-20T19:30:00+00:00 should be 23:00:00 in Asia/Tehran");

		t.equal(moment("2037-03-20T20:29:59+00:00").tz("Asia/Tehran").zone(), -210, "2037-03-20T20:29:59+00:00 should be -210 minutes offset");
		t.equal(moment("2037-03-20T20:30:00+00:00").tz("Asia/Tehran").zone(), -270, "2037-03-20T20:30:00+00:00 should be -270 minutes offset");
		t.equal(moment("2037-09-20T19:29:59+00:00").tz("Asia/Tehran").zone(), -270, "2037-09-20T19:29:59+00:00 should be -270 minutes offset");
		t.equal(moment("2037-09-20T19:30:00+00:00").tz("Asia/Tehran").zone(), -210, "2037-09-20T19:30:00+00:00 should be -210 minutes offset");

		t.done();
	}
};
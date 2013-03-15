var moment = require("../../moment-timezone");

exports["Australia/Hobart"] = {

	"2013" : function (t) {
		t.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2013-04-06T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2013-04-06T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2013-10-05T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2013-10-05T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2013-04-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2013-04-06T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2013-04-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2013-04-06T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2013-10-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2013-10-05T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2013-10-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2013-10-05T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2014-04-05T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2014-04-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2014-04-05T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2014-10-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2014-10-04T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2014-10-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2014-10-04T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2014-04-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2014-04-05T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2014-04-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2014-04-05T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2014-10-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2014-10-04T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2014-10-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2014-10-04T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2015-04-04T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2015-04-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2015-04-04T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2015-10-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2015-10-03T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2015-10-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2015-10-03T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2015-04-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2015-04-04T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2015-04-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2015-04-04T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2015-10-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2015-10-03T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2015-10-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2015-10-03T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2016-04-02T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2016-04-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2016-04-02T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2016-10-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2016-10-01T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2016-10-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2016-10-01T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2016-04-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2016-04-02T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2016-04-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2016-04-02T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2016-10-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2016-10-01T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2016-10-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2016-10-01T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2017-04-01T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2017-04-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2017-04-01T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2017-09-30T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2017-09-30T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2017-09-30T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2017-09-30T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2017-04-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2017-04-01T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2017-04-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2017-04-01T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2017-09-30T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2017-09-30T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2017-09-30T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2017-09-30T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2018-03-31T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2018-03-31T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2018-03-31T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2018-10-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2018-10-06T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2018-10-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2018-10-06T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2018-03-31T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2018-03-31T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2018-03-31T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2018-03-31T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2018-10-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2018-10-06T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2018-10-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2018-10-06T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2019-04-06T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2019-04-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2019-04-06T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2019-10-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2019-10-05T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2019-10-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2019-10-05T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2019-04-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2019-04-06T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2019-04-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2019-04-06T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2019-10-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2019-10-05T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2019-10-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2019-10-05T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2020-04-04T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2020-04-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2020-04-04T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2020-10-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2020-10-03T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2020-10-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2020-10-03T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2020-04-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2020-04-04T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2020-04-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2020-04-04T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2020-10-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2020-10-03T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2020-10-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2020-10-03T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2021-04-03T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2021-04-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2021-04-03T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2021-10-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2021-10-02T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2021-10-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2021-10-02T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2021-04-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2021-04-03T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2021-04-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2021-04-03T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2021-10-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2021-10-02T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2021-10-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2021-10-02T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2022-04-02T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2022-04-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2022-04-02T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2022-10-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2022-10-01T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2022-10-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2022-10-01T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2022-04-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2022-04-02T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2022-04-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2022-04-02T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2022-10-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2022-10-01T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2022-10-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2022-10-01T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2023-04-01T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2023-04-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2023-04-01T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2023-09-30T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2023-09-30T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2023-09-30T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2023-09-30T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2023-04-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2023-04-01T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2023-04-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2023-04-01T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2023-09-30T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2023-09-30T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2023-09-30T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2023-09-30T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2024-04-06T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2024-04-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2024-04-06T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2024-10-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2024-10-05T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2024-10-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2024-10-05T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2024-04-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2024-04-06T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2024-04-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2024-04-06T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2024-10-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2024-10-05T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2024-10-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2024-10-05T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2025-04-05T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2025-04-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2025-04-05T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2025-10-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2025-10-04T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2025-10-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2025-10-04T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2025-04-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2025-04-05T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2025-04-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2025-04-05T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2025-10-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2025-10-04T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2025-10-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2025-10-04T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2026-04-04T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2026-04-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2026-04-04T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2026-10-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2026-10-03T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2026-10-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2026-10-03T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2026-04-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2026-04-04T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2026-04-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2026-04-04T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2026-10-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2026-10-03T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2026-10-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2026-10-03T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2027-04-03T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2027-04-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2027-04-03T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2027-10-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2027-10-02T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2027-10-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2027-10-02T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2027-04-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2027-04-03T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2027-04-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2027-04-03T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2027-10-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2027-10-02T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2027-10-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2027-10-02T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2028-04-01T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2028-04-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2028-04-01T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2028-09-30T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2028-09-30T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2028-09-30T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2028-09-30T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2028-04-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2028-04-01T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2028-04-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2028-04-01T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2028-09-30T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2028-09-30T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2028-09-30T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2028-09-30T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2029-03-31T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2029-03-31T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2029-03-31T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2029-10-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2029-10-06T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2029-10-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2029-10-06T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2029-03-31T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2029-03-31T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2029-03-31T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2029-03-31T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2029-10-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2029-10-06T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2029-10-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2029-10-06T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2030-04-06T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2030-04-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2030-04-06T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2030-10-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2030-10-05T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2030-10-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2030-10-05T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2030-04-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2030-04-06T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2030-04-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2030-04-06T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2030-10-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2030-10-05T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2030-10-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2030-10-05T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2031-04-05T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2031-04-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2031-04-05T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2031-10-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2031-10-04T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2031-10-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2031-10-04T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2031-04-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2031-04-05T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2031-04-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2031-04-05T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2031-10-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2031-10-04T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2031-10-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2031-10-04T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2032-04-03T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2032-04-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2032-04-03T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2032-10-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2032-10-02T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2032-10-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2032-10-02T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2032-04-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2032-04-03T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2032-04-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2032-04-03T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2032-10-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2032-10-02T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2032-10-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2032-10-02T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2033-04-02T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2033-04-02T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2033-04-02T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2033-10-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2033-10-01T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2033-10-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2033-10-01T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2033-04-02T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2033-04-02T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2033-04-02T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2033-04-02T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2033-10-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2033-10-01T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2033-10-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2033-10-01T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2034-04-01T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2034-04-01T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2034-04-01T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2034-09-30T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2034-09-30T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2034-09-30T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2034-09-30T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2034-04-01T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2034-04-01T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2034-04-01T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2034-04-01T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2034-09-30T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2034-09-30T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2034-09-30T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2034-09-30T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2035-03-31T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2035-03-31T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2035-03-31T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2035-10-06T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2035-10-06T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2035-10-06T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2035-10-06T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2035-03-31T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2035-03-31T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2035-03-31T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2035-03-31T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2035-10-06T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2035-10-06T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2035-10-06T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2035-10-06T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2036-04-05T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2036-04-05T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2036-04-05T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2036-10-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2036-10-04T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2036-10-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2036-10-04T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2036-04-05T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2036-04-05T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2036-04-05T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2036-04-05T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2036-10-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2036-10-04T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2036-10-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2036-10-04T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:59:59", "2037-04-04T15:59:59+00:00 should be 02:59:59 in Australia/Hobart");
		t.equal(moment("2037-04-04T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "02:00:00", "2037-04-04T16:00:00+00:00 should be 02:00:00 in Australia/Hobart");
		t.equal(moment("2037-10-03T15:59:59+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "01:59:59", "2037-10-03T15:59:59+00:00 should be 01:59:59 in Australia/Hobart");
		t.equal(moment("2037-10-03T16:00:00+00:00").tz("Australia/Hobart").format("HH:mm:ss"), "03:00:00", "2037-10-03T16:00:00+00:00 should be 03:00:00 in Australia/Hobart");

		t.equal(moment("2037-04-04T15:59:59+00:00").tz("Australia/Hobart").zone(), -660, "2037-04-04T15:59:59+00:00 should be -660 minutes offset");
		t.equal(moment("2037-04-04T16:00:00+00:00").tz("Australia/Hobart").zone(), -600, "2037-04-04T16:00:00+00:00 should be -600 minutes offset");
		t.equal(moment("2037-10-03T15:59:59+00:00").tz("Australia/Hobart").zone(), -600, "2037-10-03T15:59:59+00:00 should be -600 minutes offset");
		t.equal(moment("2037-10-03T16:00:00+00:00").tz("Australia/Hobart").zone(), -660, "2037-10-03T16:00:00+00:00 should be -660 minutes offset");

		t.done();
	}
};
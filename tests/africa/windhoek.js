var moment = require("../../moment-timezone");

exports["Africa/Windhoek"] = {

	"2013" : function (t) {
		t.equal(moment("2013-04-06T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2013-04-06T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2013-04-07T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2013-04-07T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2013-09-01T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2013-09-01T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2013-09-01T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2013-09-01T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2013-04-06T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2013-04-06T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2013-04-07T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2013-04-07T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2013-09-01T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2013-09-01T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2013-09-01T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2013-09-01T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-04-05T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2014-04-05T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2014-04-06T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2014-04-06T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2014-09-07T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2014-09-07T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2014-09-07T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2014-09-07T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2014-04-05T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2014-04-05T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2014-04-06T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2014-04-06T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2014-09-07T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2014-09-07T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2014-09-07T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2014-09-07T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-04-04T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2015-04-04T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2015-04-05T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2015-04-05T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2015-09-06T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2015-09-06T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2015-09-06T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2015-09-06T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2015-04-04T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2015-04-04T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2015-04-05T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2015-04-05T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2015-09-06T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2015-09-06T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2015-09-06T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2015-09-06T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-04-02T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2016-04-02T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2016-04-03T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2016-04-03T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2016-09-04T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2016-09-04T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2016-09-04T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2016-09-04T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2016-04-02T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2016-04-02T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2016-04-03T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2016-04-03T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2016-09-04T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2016-09-04T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2016-09-04T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2016-09-04T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-04-01T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2017-04-01T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2017-04-02T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2017-04-02T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2017-09-03T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2017-09-03T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2017-09-03T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2017-09-03T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2017-04-01T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2017-04-01T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2017-04-02T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2017-04-02T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2017-09-03T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2017-09-03T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2017-09-03T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2017-09-03T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-31T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2018-03-31T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2018-04-01T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2018-04-01T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2018-09-02T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2018-09-02T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2018-09-02T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2018-09-02T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2018-03-31T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2018-03-31T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2018-04-01T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2018-04-01T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2018-09-02T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2018-09-02T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2018-09-02T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2018-09-02T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-04-06T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2019-04-06T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2019-04-07T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2019-04-07T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2019-09-01T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2019-09-01T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2019-09-01T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2019-09-01T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2019-04-06T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2019-04-06T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2019-04-07T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2019-04-07T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2019-09-01T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2019-09-01T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2019-09-01T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2019-09-01T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-04-04T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2020-04-04T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2020-04-05T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2020-04-05T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2020-09-06T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2020-09-06T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2020-09-06T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2020-09-06T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2020-04-04T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2020-04-04T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2020-04-05T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2020-04-05T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2020-09-06T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2020-09-06T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2020-09-06T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2020-09-06T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-04-03T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2021-04-03T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2021-04-04T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2021-04-04T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2021-09-05T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2021-09-05T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2021-09-05T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2021-09-05T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2021-04-03T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2021-04-03T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2021-04-04T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2021-04-04T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2021-09-05T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2021-09-05T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2021-09-05T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2021-09-05T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-04-02T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2022-04-02T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2022-04-03T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2022-04-03T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2022-09-04T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2022-09-04T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2022-09-04T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2022-09-04T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2022-04-02T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2022-04-02T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2022-04-03T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2022-04-03T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2022-09-04T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2022-09-04T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2022-09-04T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2022-09-04T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-04-01T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2023-04-01T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2023-04-02T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2023-04-02T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2023-09-03T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2023-09-03T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2023-09-03T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2023-09-03T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2023-04-01T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2023-04-01T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2023-04-02T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2023-04-02T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2023-09-03T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2023-09-03T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2023-09-03T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2023-09-03T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-04-06T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2024-04-06T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2024-04-07T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2024-04-07T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2024-09-01T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2024-09-01T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2024-09-01T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2024-09-01T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2024-04-06T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2024-04-06T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2024-04-07T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2024-04-07T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2024-09-01T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2024-09-01T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2024-09-01T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2024-09-01T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-04-05T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2025-04-05T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2025-04-06T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2025-04-06T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2025-09-07T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2025-09-07T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2025-09-07T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2025-09-07T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2025-04-05T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2025-04-05T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2025-04-06T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2025-04-06T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2025-09-07T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2025-09-07T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2025-09-07T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2025-09-07T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-04-04T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2026-04-04T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2026-04-05T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2026-04-05T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2026-09-06T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2026-09-06T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2026-09-06T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2026-09-06T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2026-04-04T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2026-04-04T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2026-04-05T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2026-04-05T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2026-09-06T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2026-09-06T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2026-09-06T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2026-09-06T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-04-03T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2027-04-03T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2027-04-04T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2027-04-04T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2027-09-05T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2027-09-05T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2027-09-05T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2027-09-05T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2027-04-03T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2027-04-03T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2027-04-04T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2027-04-04T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2027-09-05T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2027-09-05T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2027-09-05T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2027-09-05T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-04-01T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2028-04-01T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2028-04-02T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2028-04-02T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2028-09-03T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2028-09-03T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2028-09-03T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2028-09-03T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2028-04-01T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2028-04-01T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2028-04-02T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2028-04-02T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2028-09-03T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2028-09-03T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2028-09-03T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2028-09-03T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-31T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2029-03-31T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2029-04-01T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2029-04-01T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2029-09-02T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2029-09-02T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2029-09-02T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2029-09-02T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2029-03-31T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2029-03-31T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2029-04-01T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2029-04-01T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2029-09-02T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2029-09-02T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2029-09-02T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2029-09-02T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-04-06T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2030-04-06T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2030-04-07T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2030-04-07T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2030-09-01T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2030-09-01T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2030-09-01T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2030-09-01T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2030-04-06T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2030-04-06T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2030-04-07T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2030-04-07T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2030-09-01T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2030-09-01T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2030-09-01T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2030-09-01T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-04-05T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2031-04-05T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2031-04-06T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2031-04-06T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2031-09-07T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2031-09-07T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2031-09-07T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2031-09-07T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2031-04-05T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2031-04-05T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2031-04-06T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2031-04-06T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2031-09-07T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2031-09-07T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2031-09-07T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2031-09-07T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-04-03T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2032-04-03T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2032-04-04T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2032-04-04T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2032-09-05T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2032-09-05T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2032-09-05T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2032-09-05T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2032-04-03T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2032-04-03T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2032-04-04T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2032-04-04T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2032-09-05T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2032-09-05T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2032-09-05T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2032-09-05T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-04-02T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2033-04-02T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2033-04-03T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2033-04-03T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2033-09-04T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2033-09-04T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2033-09-04T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2033-09-04T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2033-04-02T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2033-04-02T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2033-04-03T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2033-04-03T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2033-09-04T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2033-09-04T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2033-09-04T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2033-09-04T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-04-01T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2034-04-01T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2034-04-02T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2034-04-02T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2034-09-03T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2034-09-03T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2034-09-03T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2034-09-03T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2034-04-01T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2034-04-01T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2034-04-02T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2034-04-02T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2034-09-03T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2034-09-03T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2034-09-03T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2034-09-03T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-31T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2035-03-31T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2035-04-01T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2035-04-01T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2035-09-02T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2035-09-02T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2035-09-02T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2035-09-02T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2035-03-31T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2035-03-31T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2035-04-01T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2035-04-01T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2035-09-02T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2035-09-02T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2035-09-02T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2035-09-02T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-04-05T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2036-04-05T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2036-04-06T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2036-04-06T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2036-09-07T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2036-09-07T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2036-09-07T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2036-09-07T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2036-04-05T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2036-04-05T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2036-04-06T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2036-04-06T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2036-09-07T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2036-09-07T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2036-09-07T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2036-09-07T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-04-04T23:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2037-04-04T23:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2037-04-05T00:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:00:00", "2037-04-05T00:00:00+00:00 should be 01:00:00 in Africa/Windhoek");
		t.equal(moment("2037-09-06T00:59:59+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "01:59:59", "2037-09-06T00:59:59+00:00 should be 01:59:59 in Africa/Windhoek");
		t.equal(moment("2037-09-06T01:00:00+00:00").tz("Africa/Windhoek").format("HH:mm:ss"), "03:00:00", "2037-09-06T01:00:00+00:00 should be 03:00:00 in Africa/Windhoek");

		t.equal(moment("2037-04-04T23:59:59+00:00").tz("Africa/Windhoek").zone(), -120, "2037-04-04T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2037-04-05T00:00:00+00:00").tz("Africa/Windhoek").zone(), -60, "2037-04-05T00:00:00+00:00 should be -60 minutes offset");
		t.equal(moment("2037-09-06T00:59:59+00:00").tz("Africa/Windhoek").zone(), -60, "2037-09-06T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2037-09-06T01:00:00+00:00").tz("Africa/Windhoek").zone(), -120, "2037-09-06T01:00:00+00:00 should be -120 minutes offset");

		t.done();
	}
};
var moment = require("../../moment-timezone");

exports["Asia/Jerusalem"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-28T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2013-03-28T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2013-03-29T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2013-03-29T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2013-10-05T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2013-10-05T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2013-10-05T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2013-10-05T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2013-03-28T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-03-28T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2013-03-29T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2013-03-29T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2013-10-05T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2013-10-05T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2013-10-05T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2013-10-05T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-27T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2014-03-27T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2014-03-28T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2014-03-28T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2014-10-04T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2014-10-04T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2014-10-04T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2014-10-04T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2014-03-27T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2014-03-27T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2014-03-28T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2014-03-28T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2014-10-04T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2014-10-04T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2014-10-04T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2014-10-04T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-26T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2015-03-26T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2015-03-27T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2015-03-27T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2015-10-03T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2015-10-03T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2015-10-03T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2015-10-03T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2015-03-26T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2015-03-26T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2015-03-27T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2015-03-27T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2015-10-03T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2015-10-03T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2015-10-03T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2015-10-03T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-24T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2016-03-24T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2016-03-25T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2016-03-25T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2016-10-01T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2016-10-01T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2016-10-01T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2016-10-01T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2016-03-24T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2016-03-24T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2016-03-25T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2016-03-25T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2016-10-01T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2016-10-01T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2016-10-01T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2016-10-01T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-23T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2017-03-23T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2017-03-24T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2017-03-24T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2017-10-07T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2017-10-07T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2017-10-07T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2017-10-07T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2017-03-23T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2017-03-23T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2017-03-24T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2017-03-24T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2017-10-07T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2017-10-07T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2017-10-07T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2017-10-07T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-22T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2018-03-22T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2018-03-23T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2018-03-23T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2018-10-06T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2018-10-06T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2018-10-06T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2018-10-06T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2018-03-22T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2018-03-22T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2018-03-23T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2018-03-23T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2018-10-06T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2018-10-06T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2018-10-06T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2018-10-06T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-28T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2019-03-28T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2019-03-29T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2019-03-29T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2019-10-05T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2019-10-05T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2019-10-05T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2019-10-05T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2019-03-28T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2019-03-28T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2019-03-29T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2019-03-29T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2019-10-05T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2019-10-05T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2019-10-05T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2019-10-05T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-26T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2020-03-26T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2020-03-27T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2020-03-27T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2020-10-03T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2020-10-03T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2020-10-03T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2020-10-03T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2020-03-26T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2020-03-26T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2020-03-27T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2020-03-27T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2020-10-03T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2020-10-03T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2020-10-03T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2020-10-03T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-25T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2021-03-25T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2021-03-26T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2021-03-26T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2021-10-02T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2021-10-02T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2021-10-02T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2021-10-02T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2021-03-25T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2021-03-25T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2021-03-26T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2021-03-26T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2021-10-02T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2021-10-02T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2021-10-02T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2021-10-02T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-24T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2022-03-24T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2022-03-25T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2022-03-25T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2022-10-01T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2022-10-01T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2022-10-01T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2022-10-01T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2022-03-24T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2022-03-24T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2022-03-25T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2022-03-25T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2022-10-01T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2022-10-01T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2022-10-01T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2022-10-01T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-23T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2023-03-23T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2023-03-24T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2023-03-24T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2023-10-07T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2023-10-07T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2023-10-07T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2023-10-07T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2023-03-23T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2023-03-23T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2023-03-24T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2023-03-24T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2023-10-07T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2023-10-07T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2023-10-07T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2023-10-07T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-28T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2024-03-28T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2024-03-29T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2024-03-29T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2024-10-05T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2024-10-05T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2024-10-05T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2024-10-05T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2024-03-28T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2024-03-28T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2024-03-29T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2024-03-29T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2024-10-05T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2024-10-05T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2024-10-05T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2024-10-05T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-27T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2025-03-27T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2025-03-28T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2025-03-28T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2025-10-04T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2025-10-04T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2025-10-04T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2025-10-04T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2025-03-27T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2025-03-27T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2025-03-28T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2025-03-28T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2025-10-04T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2025-10-04T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2025-10-04T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2025-10-04T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-26T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2026-03-26T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2026-03-27T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2026-03-27T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2026-10-03T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2026-10-03T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2026-10-03T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2026-10-03T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2026-03-26T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2026-03-26T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2026-03-27T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2026-03-27T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2026-10-03T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2026-10-03T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2026-10-03T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2026-10-03T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-25T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2027-03-25T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2027-03-26T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2027-03-26T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2027-10-03T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2027-10-03T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2027-10-03T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2027-10-03T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2027-03-25T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2027-03-25T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2027-03-26T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2027-03-26T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2027-10-03T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2027-10-03T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2027-10-03T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2027-10-03T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-23T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2028-03-23T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2028-03-24T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2028-03-24T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2028-10-07T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2028-10-07T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2028-10-07T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2028-10-07T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2028-03-23T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2028-03-23T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2028-03-24T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2028-03-24T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2028-10-07T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2028-10-07T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2028-10-07T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2028-10-07T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-22T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2029-03-22T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2029-03-23T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2029-03-23T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2029-10-06T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2029-10-06T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2029-10-06T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2029-10-06T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2029-03-22T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2029-03-22T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2029-03-23T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2029-03-23T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2029-10-06T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2029-10-06T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2029-10-06T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2029-10-06T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-28T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2030-03-28T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2030-03-29T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2030-03-29T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2030-10-05T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2030-10-05T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2030-10-05T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2030-10-05T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2030-03-28T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2030-03-28T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2030-03-29T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2030-03-29T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2030-10-05T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2030-10-05T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2030-10-05T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2030-10-05T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-27T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2031-03-27T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2031-03-28T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2031-03-28T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2031-10-04T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2031-10-04T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2031-10-04T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2031-10-04T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2031-03-27T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2031-03-27T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2031-03-28T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2031-03-28T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2031-10-04T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2031-10-04T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2031-10-04T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2031-10-04T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-25T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2032-03-25T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2032-03-26T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2032-03-26T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2032-10-02T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2032-10-02T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2032-10-02T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2032-10-02T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2032-03-25T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2032-03-25T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2032-03-26T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2032-03-26T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2032-10-02T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2032-10-02T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2032-10-02T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2032-10-02T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-24T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2033-03-24T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2033-03-25T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2033-03-25T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2033-10-01T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2033-10-01T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2033-10-01T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2033-10-01T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2033-03-24T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2033-03-24T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2033-03-25T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2033-03-25T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2033-10-01T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2033-10-01T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2033-10-01T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2033-10-01T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-23T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2034-03-23T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2034-03-24T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2034-03-24T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2034-10-07T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2034-10-07T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2034-10-07T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2034-10-07T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2034-03-23T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2034-03-23T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2034-03-24T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2034-03-24T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2034-10-07T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2034-10-07T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2034-10-07T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2034-10-07T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-22T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2035-03-22T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2035-03-23T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2035-03-23T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2035-10-06T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2035-10-06T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2035-10-06T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2035-10-06T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2035-03-22T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2035-03-22T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2035-03-23T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2035-03-23T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2035-10-06T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2035-10-06T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2035-10-06T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2035-10-06T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-27T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2036-03-27T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2036-03-28T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2036-03-28T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2036-10-04T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2036-10-04T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2036-10-04T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2036-10-04T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2036-03-27T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2036-03-27T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2036-03-28T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2036-03-28T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2036-10-04T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2036-10-04T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2036-10-04T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2036-10-04T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-26T23:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2037-03-26T23:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2037-03-27T00:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "03:00:00", "2037-03-27T00:00:00+00:00 should be 03:00:00 in Asia/Jerusalem");
		t.equal(moment("2037-10-03T22:59:59+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:59:59", "2037-10-03T22:59:59+00:00 should be 01:59:59 in Asia/Jerusalem");
		t.equal(moment("2037-10-03T23:00:00+00:00").tz("Asia/Jerusalem").format("HH:mm:ss"), "01:00:00", "2037-10-03T23:00:00+00:00 should be 01:00:00 in Asia/Jerusalem");

		t.equal(moment("2037-03-26T23:59:59+00:00").tz("Asia/Jerusalem").zone(), -120, "2037-03-26T23:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2037-03-27T00:00:00+00:00").tz("Asia/Jerusalem").zone(), -180, "2037-03-27T00:00:00+00:00 should be -180 minutes offset");
		t.equal(moment("2037-10-03T22:59:59+00:00").tz("Asia/Jerusalem").zone(), -180, "2037-10-03T22:59:59+00:00 should be -180 minutes offset");
		t.equal(moment("2037-10-03T23:00:00+00:00").tz("Asia/Jerusalem").zone(), -120, "2037-10-03T23:00:00+00:00 should be -120 minutes offset");

		t.done();
	}
};
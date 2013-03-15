var moment = require("../../moment-timezone");

exports["America/Vancouver"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-10T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2013-03-10T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2013-03-10T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2013-03-10T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2013-11-03T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2013-11-03T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2013-11-03T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2013-11-03T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2013-03-10T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2013-03-10T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2013-03-10T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2013-03-10T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2013-11-03T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2013-11-03T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2013-11-03T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2013-11-03T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-09T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2014-03-09T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2014-03-09T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2014-03-09T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2014-11-02T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2014-11-02T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2014-11-02T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2014-11-02T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2014-03-09T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2014-03-09T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2014-03-09T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2014-03-09T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2014-11-02T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2014-11-02T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2014-11-02T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2014-11-02T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-08T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2015-03-08T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2015-03-08T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2015-03-08T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2015-11-01T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2015-11-01T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2015-11-01T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2015-11-01T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2015-03-08T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2015-03-08T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2015-03-08T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2015-03-08T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2015-11-01T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2015-11-01T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2015-11-01T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2015-11-01T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-13T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2016-03-13T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2016-03-13T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2016-03-13T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2016-11-06T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2016-11-06T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2016-11-06T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2016-11-06T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2016-03-13T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2016-03-13T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2016-03-13T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2016-03-13T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2016-11-06T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2016-11-06T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2016-11-06T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2016-11-06T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-12T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2017-03-12T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2017-03-12T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2017-03-12T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2017-11-05T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2017-11-05T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2017-11-05T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2017-11-05T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2017-03-12T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2017-03-12T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2017-03-12T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2017-03-12T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2017-11-05T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2017-11-05T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2017-11-05T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2017-11-05T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-11T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2018-03-11T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2018-03-11T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2018-03-11T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2018-11-04T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2018-11-04T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2018-11-04T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2018-11-04T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2018-03-11T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2018-03-11T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2018-03-11T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2018-03-11T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2018-11-04T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2018-11-04T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2018-11-04T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2018-11-04T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-10T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2019-03-10T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2019-03-10T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2019-03-10T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2019-11-03T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2019-11-03T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2019-11-03T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2019-11-03T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2019-03-10T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2019-03-10T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2019-03-10T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2019-03-10T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2019-11-03T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2019-11-03T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2019-11-03T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2019-11-03T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-08T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2020-03-08T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2020-03-08T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2020-03-08T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2020-11-01T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2020-11-01T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2020-11-01T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2020-11-01T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2020-03-08T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2020-03-08T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2020-03-08T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2020-03-08T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2020-11-01T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2020-11-01T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2020-11-01T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2020-11-01T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-14T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2021-03-14T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2021-03-14T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2021-03-14T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2021-11-07T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2021-11-07T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2021-11-07T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2021-11-07T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2021-03-14T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2021-03-14T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2021-03-14T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2021-03-14T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2021-11-07T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2021-11-07T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2021-11-07T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2021-11-07T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-13T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2022-03-13T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2022-03-13T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2022-03-13T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2022-11-06T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2022-11-06T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2022-11-06T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2022-11-06T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2022-03-13T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2022-03-13T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2022-03-13T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2022-03-13T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2022-11-06T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2022-11-06T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2022-11-06T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2022-11-06T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-12T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2023-03-12T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2023-03-12T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2023-03-12T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2023-11-05T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2023-11-05T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2023-11-05T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2023-11-05T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2023-03-12T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2023-03-12T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2023-03-12T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2023-03-12T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2023-11-05T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2023-11-05T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2023-11-05T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2023-11-05T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-10T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2024-03-10T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2024-03-10T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2024-03-10T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2024-11-03T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2024-11-03T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2024-11-03T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2024-11-03T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2024-03-10T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2024-03-10T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2024-03-10T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2024-03-10T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2024-11-03T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2024-11-03T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2024-11-03T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2024-11-03T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-09T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2025-03-09T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2025-03-09T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2025-03-09T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2025-11-02T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2025-11-02T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2025-11-02T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2025-11-02T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2025-03-09T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2025-03-09T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2025-03-09T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2025-03-09T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2025-11-02T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2025-11-02T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2025-11-02T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2025-11-02T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-08T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2026-03-08T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2026-03-08T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2026-03-08T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2026-11-01T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2026-11-01T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2026-11-01T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2026-11-01T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2026-03-08T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2026-03-08T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2026-03-08T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2026-03-08T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2026-11-01T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2026-11-01T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2026-11-01T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2026-11-01T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-14T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2027-03-14T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2027-03-14T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2027-03-14T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2027-11-07T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2027-11-07T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2027-11-07T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2027-11-07T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2027-03-14T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2027-03-14T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2027-03-14T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2027-03-14T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2027-11-07T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2027-11-07T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2027-11-07T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2027-11-07T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-12T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2028-03-12T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2028-03-12T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2028-03-12T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2028-11-05T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2028-11-05T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2028-11-05T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2028-11-05T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2028-03-12T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2028-03-12T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2028-03-12T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2028-03-12T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2028-11-05T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2028-11-05T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2028-11-05T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2028-11-05T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-11T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2029-03-11T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2029-03-11T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2029-03-11T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2029-11-04T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2029-11-04T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2029-11-04T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2029-11-04T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2029-03-11T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2029-03-11T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2029-03-11T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2029-03-11T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2029-11-04T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2029-11-04T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2029-11-04T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2029-11-04T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-10T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2030-03-10T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2030-03-10T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2030-03-10T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2030-11-03T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2030-11-03T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2030-11-03T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2030-11-03T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2030-03-10T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2030-03-10T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2030-03-10T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2030-03-10T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2030-11-03T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2030-11-03T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2030-11-03T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2030-11-03T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-09T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2031-03-09T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2031-03-09T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2031-03-09T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2031-11-02T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2031-11-02T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2031-11-02T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2031-11-02T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2031-03-09T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2031-03-09T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2031-03-09T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2031-03-09T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2031-11-02T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2031-11-02T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2031-11-02T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2031-11-02T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-14T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2032-03-14T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2032-03-14T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2032-03-14T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2032-11-07T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2032-11-07T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2032-11-07T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2032-11-07T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2032-03-14T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2032-03-14T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2032-03-14T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2032-03-14T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2032-11-07T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2032-11-07T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2032-11-07T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2032-11-07T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-13T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2033-03-13T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2033-03-13T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2033-03-13T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2033-11-06T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2033-11-06T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2033-11-06T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2033-11-06T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2033-03-13T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2033-03-13T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2033-03-13T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2033-03-13T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2033-11-06T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2033-11-06T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2033-11-06T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2033-11-06T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-12T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2034-03-12T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2034-03-12T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2034-03-12T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2034-11-05T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2034-11-05T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2034-11-05T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2034-11-05T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2034-03-12T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2034-03-12T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2034-03-12T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2034-03-12T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2034-11-05T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2034-11-05T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2034-11-05T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2034-11-05T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-11T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2035-03-11T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2035-03-11T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2035-03-11T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2035-11-04T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2035-11-04T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2035-11-04T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2035-11-04T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2035-03-11T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2035-03-11T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2035-03-11T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2035-03-11T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2035-11-04T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2035-11-04T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2035-11-04T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2035-11-04T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-09T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2036-03-09T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2036-03-09T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2036-03-09T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2036-11-02T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2036-11-02T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2036-11-02T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2036-11-02T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2036-03-09T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2036-03-09T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2036-03-09T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2036-03-09T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2036-11-02T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2036-11-02T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2036-11-02T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2036-11-02T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-08T09:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2037-03-08T09:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2037-03-08T10:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "03:00:00", "2037-03-08T10:00:00+00:00 should be 03:00:00 in America/Vancouver");
		t.equal(moment("2037-11-01T08:59:59+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:59:59", "2037-11-01T08:59:59+00:00 should be 01:59:59 in America/Vancouver");
		t.equal(moment("2037-11-01T09:00:00+00:00").tz("America/Vancouver").format("HH:mm:ss"), "01:00:00", "2037-11-01T09:00:00+00:00 should be 01:00:00 in America/Vancouver");

		t.equal(moment("2037-03-08T09:59:59+00:00").tz("America/Vancouver").zone(), 480, "2037-03-08T09:59:59+00:00 should be 480 minutes offset");
		t.equal(moment("2037-03-08T10:00:00+00:00").tz("America/Vancouver").zone(), 420, "2037-03-08T10:00:00+00:00 should be 420 minutes offset");
		t.equal(moment("2037-11-01T08:59:59+00:00").tz("America/Vancouver").zone(), 420, "2037-11-01T08:59:59+00:00 should be 420 minutes offset");
		t.equal(moment("2037-11-01T09:00:00+00:00").tz("America/Vancouver").zone(), 480, "2037-11-01T09:00:00+00:00 should be 480 minutes offset");

		t.done();
	}
};
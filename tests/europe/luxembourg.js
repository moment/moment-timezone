var moment = require("../../moment-timezone");

exports["Europe/Luxembourg"] = {

	"2013" : function (t) {
		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2013-03-31T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2013-03-31T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2013-10-27T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2013-10-27T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2013-03-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2013-03-31T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2013-03-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2013-03-31T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2013-10-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2013-10-27T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2013-10-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2013-10-27T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2014" : function (t) {
		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2014-03-30T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2014-03-30T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2014-10-26T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2014-10-26T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2014-03-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2014-03-30T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2014-03-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2014-03-30T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2014-10-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2014-10-26T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2014-10-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2014-10-26T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2015" : function (t) {
		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2015-03-29T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2015-03-29T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2015-10-25T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2015-10-25T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2015-03-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2015-03-29T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2015-03-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2015-03-29T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2015-10-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2015-10-25T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2015-10-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2015-10-25T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2016" : function (t) {
		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2016-03-27T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2016-03-27T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2016-10-30T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2016-10-30T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2016-03-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2016-03-27T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2016-03-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2016-03-27T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2016-10-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2016-10-30T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2016-10-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2016-10-30T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2017" : function (t) {
		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2017-03-26T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2017-03-26T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2017-10-29T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2017-10-29T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2017-03-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2017-03-26T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2017-03-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2017-03-26T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2017-10-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2017-10-29T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2017-10-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2017-10-29T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2018" : function (t) {
		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2018-03-25T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2018-03-25T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2018-10-28T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2018-10-28T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2018-03-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2018-03-25T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2018-03-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2018-03-25T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2018-10-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2018-10-28T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2018-10-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2018-10-28T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2019" : function (t) {
		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2019-03-31T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2019-03-31T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2019-10-27T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2019-10-27T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2019-03-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2019-03-31T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2019-03-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2019-03-31T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2019-10-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2019-10-27T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2019-10-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2019-10-27T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2020" : function (t) {
		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2020-03-29T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2020-03-29T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2020-10-25T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2020-10-25T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2020-03-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2020-03-29T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2020-03-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2020-03-29T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2020-10-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2020-10-25T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2020-10-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2020-10-25T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2021" : function (t) {
		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2021-03-28T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2021-03-28T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2021-10-31T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2021-10-31T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2021-03-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2021-03-28T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2021-03-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2021-03-28T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2021-10-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2021-10-31T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2021-10-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2021-10-31T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2022" : function (t) {
		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2022-03-27T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2022-03-27T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2022-10-30T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2022-10-30T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2022-03-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2022-03-27T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2022-03-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2022-03-27T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2022-10-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2022-10-30T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2022-10-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2022-10-30T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2023" : function (t) {
		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2023-03-26T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2023-03-26T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2023-10-29T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2023-10-29T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2023-03-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2023-03-26T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2023-03-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2023-03-26T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2023-10-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2023-10-29T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2023-10-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2023-10-29T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2024" : function (t) {
		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2024-03-31T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2024-03-31T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2024-10-27T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2024-10-27T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2024-03-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2024-03-31T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2024-03-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2024-03-31T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2024-10-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2024-10-27T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2024-10-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2024-10-27T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2025" : function (t) {
		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2025-03-30T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2025-03-30T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2025-10-26T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2025-10-26T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2025-03-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2025-03-30T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2025-03-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2025-03-30T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2025-10-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2025-10-26T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2025-10-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2025-10-26T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2026" : function (t) {
		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2026-03-29T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2026-03-29T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2026-10-25T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2026-10-25T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2026-03-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2026-03-29T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2026-03-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2026-03-29T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2026-10-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2026-10-25T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2026-10-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2026-10-25T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2027" : function (t) {
		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2027-03-28T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2027-03-28T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2027-10-31T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2027-10-31T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2027-03-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2027-03-28T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2027-03-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2027-03-28T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2027-10-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2027-10-31T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2027-10-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2027-10-31T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2028" : function (t) {
		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2028-03-26T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2028-03-26T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2028-10-29T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2028-10-29T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2028-03-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2028-03-26T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2028-03-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2028-03-26T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2028-10-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2028-10-29T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2028-10-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2028-10-29T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2029" : function (t) {
		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2029-03-25T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2029-03-25T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2029-10-28T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2029-10-28T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2029-03-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2029-03-25T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2029-03-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2029-03-25T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2029-10-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2029-10-28T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2029-10-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2029-10-28T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2030" : function (t) {
		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2030-03-31T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2030-03-31T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2030-10-27T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2030-10-27T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2030-03-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2030-03-31T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2030-03-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2030-03-31T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2030-10-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2030-10-27T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2030-10-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2030-10-27T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2031" : function (t) {
		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2031-03-30T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2031-03-30T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2031-10-26T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2031-10-26T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2031-03-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2031-03-30T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2031-03-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2031-03-30T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2031-10-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2031-10-26T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2031-10-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2031-10-26T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2032" : function (t) {
		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2032-03-28T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2032-03-28T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2032-10-31T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2032-10-31T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2032-03-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2032-03-28T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2032-03-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2032-03-28T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2032-10-31T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2032-10-31T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2032-10-31T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2032-10-31T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2033" : function (t) {
		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2033-03-27T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2033-03-27T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2033-10-30T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2033-10-30T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2033-03-27T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2033-03-27T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2033-03-27T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2033-03-27T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2033-10-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2033-10-30T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2033-10-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2033-10-30T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2034" : function (t) {
		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2034-03-26T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2034-03-26T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2034-10-29T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2034-10-29T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2034-03-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2034-03-26T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2034-03-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2034-03-26T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2034-10-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2034-10-29T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2034-10-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2034-10-29T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2035" : function (t) {
		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2035-03-25T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2035-03-25T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2035-10-28T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2035-10-28T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2035-03-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2035-03-25T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2035-03-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2035-03-25T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2035-10-28T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2035-10-28T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2035-10-28T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2035-10-28T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2036" : function (t) {
		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2036-03-30T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2036-03-30T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2036-10-26T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2036-10-26T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2036-03-30T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2036-03-30T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2036-03-30T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2036-03-30T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2036-10-26T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2036-10-26T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2036-10-26T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2036-10-26T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	},

	"2037" : function (t) {
		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "01:59:59", "2037-03-29T00:59:59+00:00 should be 01:59:59 in Europe/Luxembourg");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "03:00:00", "2037-03-29T01:00:00+00:00 should be 03:00:00 in Europe/Luxembourg");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:59:59", "2037-10-25T00:59:59+00:00 should be 02:59:59 in Europe/Luxembourg");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Luxembourg").format("HH:mm:ss"), "02:00:00", "2037-10-25T01:00:00+00:00 should be 02:00:00 in Europe/Luxembourg");

		t.equal(moment("2037-03-29T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -60, "2037-03-29T00:59:59+00:00 should be -60 minutes offset");
		t.equal(moment("2037-03-29T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -120, "2037-03-29T01:00:00+00:00 should be -120 minutes offset");
		t.equal(moment("2037-10-25T00:59:59+00:00").tz("Europe/Luxembourg").zone(), -120, "2037-10-25T00:59:59+00:00 should be -120 minutes offset");
		t.equal(moment("2037-10-25T01:00:00+00:00").tz("Europe/Luxembourg").zone(), -60, "2037-10-25T01:00:00+00:00 should be -60 minutes offset");

		t.done();
	}
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Ujung_Pandang"] = {
	"1932" : helpers.makeTestYear("Asia/Ujung_Pandang", [
		["1932-10-31T16:02:23+00:00", "23:59:59", "MMT", -28656 / 60],
		["1932-10-31T16:02:24+00:00", "00:02:24", "WITA", -480]
	]),

	"1942" : helpers.makeTestYear("Asia/Ujung_Pandang", [
		["1942-02-08T15:59:59+00:00", "23:59:59", "WITA", -480],
		["1942-02-08T16:00:00+00:00", "01:00:00", "JST", -540]
	])
};
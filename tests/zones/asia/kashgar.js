"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kashgar"] = {
	"1927" : helpers.makeTestYear("Asia/Kashgar", [
		["1927-12-31T18:09:39Z", "23:59:59", "LMT", -21020 / 60],
		["1927-12-31T18:09:40Z", "00:09:40", "XJT", -360]
	])
};
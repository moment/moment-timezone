"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Kashgar"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Kashgar", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Kashgar", { abbr: true, expect: "Asia/Dhaka" }),

	"1927" : helpers.makeTestYear("Asia/Kashgar", [
		["1927-12-31T18:09:39+00:00", "23:59:59", "LMT", -21020 / 60],
		["1927-12-31T18:09:40+00:00", "00:09:40", "+06", -360]
	])
};
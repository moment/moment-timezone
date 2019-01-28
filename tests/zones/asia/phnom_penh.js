"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Phnom_Penh"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Phnom_Penh", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Phnom_Penh", { abbr: true, expect: "Asia/Jakarta" }),

	"1920" : helpers.makeTestYear("Asia/Phnom_Penh", [
		["1920-03-31T17:17:55+00:00", "23:59:59", "BMT", -24124 / 60],
		["1920-03-31T17:17:56+00:00", "00:17:56", "+07", -420]
	])
};
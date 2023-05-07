"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Vientiane"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Vientiane", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Vientiane", { abbr: true, expect: "Asia/Jakarta" }),

	"1879" : helpers.makeTestYear("Asia/Vientiane", [
		["1879-12-31T17:17:55+00:00", "23:59:59", "LMT", -24124 / 60],
		["1879-12-31T17:17:56+00:00", "00:00:00", "BMT", -24124 / 60]
	]),

	"1920" : helpers.makeTestYear("Asia/Vientiane", [
		["1920-03-31T17:17:55+00:00", "23:59:59", "BMT", -24124 / 60],
		["1920-03-31T17:17:56+00:00", "00:17:56", "+07", -420]
	])
};
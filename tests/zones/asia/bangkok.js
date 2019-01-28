"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bangkok"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Bangkok", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Bangkok", { abbr: true, expect: "Asia/Jakarta" }),

	"1920" : helpers.makeTestYear("Asia/Bangkok", [
		["1920-03-31T17:17:55+00:00", "23:59:59", "BMT", -24124 / 60],
		["1920-03-31T17:17:56+00:00", "00:17:56", "+07", -420]
	])
};
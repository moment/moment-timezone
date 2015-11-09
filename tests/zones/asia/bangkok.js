"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Bangkok"] = {
	"guess" : helpers.makeTestGuess("Asia/Bangkok", { offset: false, abbr: true}),

	"1920" : helpers.makeTestYear("Asia/Bangkok", [
		["1920-03-31T17:17:55+00:00", "23:59:59", "BMT", -24124 / 60],
		["1920-03-31T17:17:56+00:00", "00:17:56", "ICT", -420]
	])
};
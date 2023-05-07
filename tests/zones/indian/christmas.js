"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Christmas"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Christmas", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Christmas", { abbr: true, expect: "Asia/Jakarta" }),

	"1879" : helpers.makeTestYear("Indian/Christmas", [
		["1879-12-31T17:17:55+00:00", "23:59:59", "LMT", -24124 / 60],
		["1879-12-31T17:17:56+00:00", "00:00:00", "BMT", -24124 / 60]
	]),

	"1920" : helpers.makeTestYear("Indian/Christmas", [
		["1920-03-31T17:17:55+00:00", "23:59:59", "BMT", -24124 / 60],
		["1920-03-31T17:17:56+00:00", "00:17:56", "+07", -420]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Truk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Truk", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Truk", { abbr: true, expect: "Australia/Brisbane" }),

	"1879" : helpers.makeTestYear("Pacific/Truk", [
		["1879-12-31T14:11:19+00:00", "23:59:59", "LMT", -35320 / 60],
		["1879-12-31T14:11:20+00:00", "23:59:52", "PMMT", -35312 / 60]
	]),

	"1894" : helpers.makeTestYear("Pacific/Truk", [
		["1894-12-31T14:11:27+00:00", "23:59:59", "PMMT", -35312 / 60],
		["1894-12-31T14:11:28+00:00", "00:11:28", "+10", -600]
	])
};
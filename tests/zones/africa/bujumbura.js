"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bujumbura"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bujumbura", { offset: true, expect: "Europe/Kaliningrad" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bujumbura", { abbr: true, expect: "Africa/Windhoek" }),

	"1903" : helpers.makeTestYear("Africa/Bujumbura", [
		["1903-02-28T21:49:39+00:00", "23:59:59", "LMT", -7820 / 60],
		["1903-02-28T21:49:40+00:00", "23:49:40", "CAT", -120]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Blantyre"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Blantyre", { offset: true, expect: "Europe/Kaliningrad" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Blantyre", { abbr: true, expect: "Africa/Windhoek" }),

	"1903" : helpers.makeTestYear("Africa/Blantyre", [
		["1903-02-28T21:49:39+00:00", "23:59:59", "LMT", -7820 / 60],
		["1903-02-28T21:49:40+00:00", "23:49:40", "CAT", -120]
	])
};
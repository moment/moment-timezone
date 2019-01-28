"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kigali"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kigali", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kigali", { abbr: true, expect: "Africa/Maputo" }),

	"1903" : helpers.makeTestYear("Africa/Kigali", [
		["1903-02-28T21:49:39+00:00", "23:59:59", "LMT", -7820 / 60],
		["1903-02-28T21:49:40+00:00", "23:49:40", "CAT", -120]
	])
};
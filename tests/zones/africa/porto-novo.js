"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Porto-Novo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Porto-Novo", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Porto-Novo", { abbr: true, expect: "Africa/Lagos" }),

	"1919" : helpers.makeTestYear("Africa/Porto-Novo", [
		["1919-08-31T23:46:23+00:00", "23:59:59", "LMT", -816 / 60],
		["1919-08-31T23:46:24+00:00", "00:46:24", "WAT", -60]
	])
};
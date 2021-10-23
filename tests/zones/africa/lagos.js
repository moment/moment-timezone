"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lagos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lagos", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lagos", { abbr: true }),

	"1908" : helpers.makeTestYear("Africa/Lagos", [
		["1908-06-30T23:59:59+00:00", "23:59:59", "GMT", 0, 0],
		["1908-07-01T00:00:00+00:00", "00:13:35", "LMT", -815 / 60, 0]
	]),

	"1913" : helpers.makeTestYear("Africa/Lagos", [
		["1913-12-31T23:46:24+00:00", "23:59:59", "LMT", -815 / 60, 0],
		["1913-12-31T23:46:25+00:00", "00:16:25", "+0030", -30, 0]
	])
};
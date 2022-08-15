"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Lagos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Lagos", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Lagos", { abbr: true }),

	"1905" : helpers.makeTestYear("Africa/Lagos", [
		["1905-06-30T23:46:24+00:00", "23:59:59", "LMT", -815 / 60],
		["1905-06-30T23:46:25+00:00", "23:46:25", "GMT", 0]
	]),

	"1908" : helpers.makeTestYear("Africa/Lagos", [
		["1908-06-30T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1908-07-01T00:00:00+00:00", "00:13:35", "LMT", -815 / 60]
	]),

	"1913" : helpers.makeTestYear("Africa/Lagos", [
		["1913-12-31T23:46:24+00:00", "23:59:59", "LMT", -815 / 60],
		["1913-12-31T23:46:25+00:00", "00:16:25", "+0030", -30]
	]),

	"1919" : helpers.makeTestYear("Africa/Lagos", [
		["1919-08-31T23:29:59+00:00", "23:59:59", "+0030", -30],
		["1919-08-31T23:30:00+00:00", "00:30:00", "WAT", -60]
	])
};
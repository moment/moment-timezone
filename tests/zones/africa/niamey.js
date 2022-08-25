"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Niamey"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Niamey", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Niamey", { abbr: true, expect: "Africa/Lagos" }),

	"1905" : helpers.makeTestYear("Africa/Niamey", [
		["1905-06-30T23:46:25+00:00", "23:46:25", "GMT", 0]
	]),

	"1908" : helpers.makeTestYear("Africa/Niamey", [
		["1908-06-30T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1908-07-01T00:00:00+00:00", "00:13:35", "LMT", -815 / 60]
	]),

	"1913" : helpers.makeTestYear("Africa/Niamey", [
		["1913-12-31T23:46:24+00:00", "23:59:59", "LMT", -815 / 60],
		["1913-12-31T23:46:25+00:00", "00:16:25", "+0030", -30]
	]),

	"1919" : helpers.makeTestYear("Africa/Niamey", [
		["1919-08-31T23:29:59+00:00", "23:59:59", "+0030", -30]
	])
};
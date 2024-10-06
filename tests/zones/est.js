"use strict";

var helpers = require("../helpers/helpers");

exports["EST"] = {

	"guess:by:offset" : helpers.makeTestGuess("EST", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("EST", { abbr: true, expect: "America/Panama" }),

	"1890" : helpers.makeTestYear("EST", [
		["1890-01-01T05:18:07+00:00", "23:59:59", "LMT", 19088 / 60],
		["1890-01-01T05:18:08+00:00", "23:58:32", "CMT", 19176 / 60]
	]),

	"1908" : helpers.makeTestYear("EST", [
		["1908-04-22T05:19:35+00:00", "23:59:59", "CMT", 19176 / 60],
		["1908-04-22T05:19:36+00:00", "00:19:36", "EST", 300]
	])
};
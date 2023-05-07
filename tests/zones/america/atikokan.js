"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Atikokan"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Atikokan", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Atikokan", { abbr: true, expect: "America/Panama" }),

	"1890" : helpers.makeTestYear("America/Atikokan", [
		["1890-01-01T05:18:07+00:00", "23:59:59", "LMT", 19088 / 60],
		["1890-01-01T05:18:08+00:00", "23:58:32", "CMT", 19176 / 60]
	]),

	"1908" : helpers.makeTestYear("America/Atikokan", [
		["1908-04-22T05:19:35+00:00", "23:59:59", "CMT", 19176 / 60],
		["1908-04-22T05:19:36+00:00", "00:19:36", "EST", 300]
	])
};
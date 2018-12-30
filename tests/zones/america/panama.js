"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Panama"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Panama", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Panama", { abbr: true }),

	"1908" : helpers.makeTestYear("America/Panama", [
		["1908-04-22T05:19:35+00:00", "23:59:59", "CMT", 19176 / 60],
		["1908-04-22T05:19:36+00:00", "00:19:36", "EST", 300]
	])
};
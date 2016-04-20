"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Panama"] = {
	"guess" : helpers.makeTestGuess("America/Panama", { offset: false, abbr: true }),

	"1908" : helpers.makeTestYear("America/Panama", [
		["1908-04-22T05:19:35Z", "23:59:59", "CMT", 19176 / 60],
		["1908-04-22T05:19:36Z", "00:19:36", "EST", 300]
	])
};
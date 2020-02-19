"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Muscat"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Muscat", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Muscat", { abbr: true, expect: "Asia/Dubai" }),

	"1919" : helpers.makeTestYear("Asia/Muscat", [
		["1919-12-31T20:18:47+00:00", "23:59:59", "LMT", -13272 / 60],
		["1919-12-31T20:18:48+00:00", "00:18:48", "+04", -240]
	])
};
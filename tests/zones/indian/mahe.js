"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Mahe"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Mahe", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Mahe", { abbr: true, expect: "Asia/Dubai" }),

	"1906" : helpers.makeTestYear("Indian/Mahe", [
		["1906-12-31T20:18:11+00:00", "23:59:59", "LMT", -13308 / 60],
		["1906-12-31T20:18:12+00:00", "00:18:12", "+04", -240]
	])
};
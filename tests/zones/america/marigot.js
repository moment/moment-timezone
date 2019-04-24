"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Marigot"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Marigot", { offset: true, expect: "America/Caracas" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Marigot", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/Marigot", [
		["1912-03-02T04:06:03+00:00", "23:59:59", "LMT", 14764 / 60],
		["1912-03-02T04:06:04+00:00", "00:06:04", "AST", 240]
	])
};
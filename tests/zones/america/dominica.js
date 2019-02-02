"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Dominica"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Dominica", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Dominica", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/Dominica", [
		["1912-03-02T04:06:03+00:00", "23:59:59", "LMT", 14764 / 60],
		["1912-03-02T04:06:04+00:00", "00:06:04", "AST", 240]
	])
};
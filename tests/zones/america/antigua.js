"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Antigua"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Antigua", { offset: true, expect: "Etc/GMT+4" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Antigua", { abbr: true, expect: "America/Santo_Domingo" }),

	"1912" : helpers.makeTestYear("America/Antigua", [
		["1912-03-02T04:06:03+00:00", "23:59:59", "LMT", 14764 / 60],
		["1912-03-02T04:06:04+00:00", "00:06:04", "AST", 240]
	])
};
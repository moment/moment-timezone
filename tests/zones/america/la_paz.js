"use strict";

var helpers = require("../../helpers/helpers");

exports["America/La_Paz"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/La_Paz", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/La_Paz", { abbr: true, expect: "America/Santo_Domingo" }),

	"1931" : helpers.makeTestYear("America/La_Paz", [
		["1931-10-15T04:32:35+00:00", "23:59:59", "CMT", 16356 / 60],
		["1931-10-15T04:32:36+00:00", "01:00:00", "BST", 12756 / 60]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guyana"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guyana", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guyana", { abbr: true, expect: "America/Santo_Domingo" }),

	"1975" : helpers.makeTestYear("America/Guyana", [
		["1975-07-31T03:44:59+00:00", "23:59:59", "-0345", 225],
		["1975-07-31T03:45:00+00:00", "00:45:00", "-03", 180]
	])
};
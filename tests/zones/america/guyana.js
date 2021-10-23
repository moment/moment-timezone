"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guyana"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guyana", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guyana", { abbr: true, expect: "America/Santo_Domingo" }),

	"1915" : helpers.makeTestYear("America/Guyana", [
		["1915-03-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1915-03-01T04:00:00+00:00", "00:15:00", "-0345", 225, 0]
	]),

	"1975" : helpers.makeTestYear("America/Guyana", [
		["1975-08-01T03:44:59+00:00", "23:59:59", "-0345", 225, 0],
		["1975-08-01T03:45:00+00:00", "00:45:00", "-03", 180, 0]
	])
};
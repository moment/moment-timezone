"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Syowa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Syowa", { offset: true, expect: "Europe/Simferopol" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Syowa", { abbr: true, expect: "Europe/Simferopol" }),

	"1957" : helpers.makeTestYear("Antarctica/Syowa", [
		["1957-01-28T23:59:59+00:00", "23:59:59", "-00", 0],
		["1957-01-29T00:00:00+00:00", "03:00:00", "+03", -180]
	])
};
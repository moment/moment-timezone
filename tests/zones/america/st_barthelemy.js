"use strict";

var helpers = require("../../helpers/helpers");

exports["America/St_Barthelemy"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/St_Barthelemy", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/St_Barthelemy", { abbr: true, expect: "America/Santo_Domingo" }),

	"1942" : helpers.makeTestYear("America/St_Barthelemy", [
		["1942-05-03T03:59:59+00:00", "23:59:59", "AST", 240],
		["1942-05-03T04:00:00+00:00", "01:00:00", "AWT", 180]
	]),

	"1945" : helpers.makeTestYear("America/St_Barthelemy", [
		["1945-08-14T22:59:59+00:00", "19:59:59", "AWT", 180],
		["1945-08-14T23:00:00+00:00", "20:00:00", "APT", 180],
		["1945-09-30T04:59:59+00:00", "01:59:59", "APT", 180],
		["1945-09-30T05:00:00+00:00", "01:00:00", "AST", 240]
	])
};
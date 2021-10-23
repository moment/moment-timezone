"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Grenada"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Grenada", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Grenada", { abbr: true, expect: "America/Santo_Domingo" }),

	"1942" : helpers.makeTestYear("America/Grenada", [
		["1942-05-03T03:59:59+00:00", "23:59:59", "AST", 240, 0],
		["1942-05-03T04:00:00+00:00", "01:00:00", "AWT", 180, 1]
	]),

	"1945" : helpers.makeTestYear("America/Grenada", [
		["1945-08-14T22:59:59+00:00", "19:59:59", "AWT", 180, 1],
		["1945-08-14T23:00:00+00:00", "20:00:00", "APT", 180, 1]
	])
};
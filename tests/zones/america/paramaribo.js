"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Paramaribo"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Paramaribo", { offset: true, expect: "America/Fortaleza" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Paramaribo", { abbr: true, expect: "America/Fortaleza" }),

	"1935" : helpers.makeTestYear("America/Paramaribo", [
		["1935-01-01T03:40:51+00:00", "23:59:59", "PMT", 13252 / 60],
		["1935-01-01T03:40:52+00:00", "00:00:16", "PMT", 13236 / 60]
	]),

	"1945" : helpers.makeTestYear("America/Paramaribo", [
		["1945-10-01T03:40:35+00:00", "23:59:59", "PMT", 13236 / 60],
		["1945-10-01T03:40:36+00:00", "00:10:36", "-0330", 210]
	])
};
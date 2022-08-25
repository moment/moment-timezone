"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Paramaribo"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Paramaribo", { offset: true, expect: "America/Sao_Paulo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Paramaribo", { abbr: true, expect: "America/Sao_Paulo" }),

	"1911" : helpers.makeTestYear("America/Paramaribo", [
		["1911-01-01T03:40:40+00:00", "23:59:48", "PMT", 13252 / 60]
	]),

	"1935" : helpers.makeTestYear("America/Paramaribo", [
		["1935-01-01T03:40:51+00:00", "23:59:59", "PMT", 13252 / 60],
		["1935-01-01T03:40:52+00:00", "00:00:16", "PMT", 13236 / 60]
	]),

	"1945" : helpers.makeTestYear("America/Paramaribo", [
		["1945-10-01T03:40:35+00:00", "23:59:59", "PMT", 13236 / 60],
		["1945-10-01T03:40:36+00:00", "00:10:36", "-0330", 210]
	]),

	"1984" : helpers.makeTestYear("America/Paramaribo", [
		["1984-10-01T03:29:59+00:00", "23:59:59", "-0330", 210]
	])
};
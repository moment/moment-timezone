"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guyana"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guyana", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guyana", { abbr: true, expect: "America/Santo_Domingo" }),

	"1911" : helpers.makeTestYear("America/Guyana", [
		["1911-08-01T03:52:38+00:00", "23:59:59", "LMT", 13959 / 60],
		["1911-08-01T03:52:39+00:00", "23:52:39", "-04", 240]
	]),

	"1915" : helpers.makeTestYear("America/Guyana", [
		["1915-03-01T03:59:59+00:00", "23:59:59", "-04", 240],
		["1915-03-01T04:00:00+00:00", "00:15:00", "-0345", 225]
	]),

	"1975" : helpers.makeTestYear("America/Guyana", [
		["1975-08-01T03:44:59+00:00", "23:59:59", "-0345", 225],
		["1975-08-01T03:45:00+00:00", "00:45:00", "-03", 180]
	]),

	"1992" : helpers.makeTestYear("America/Guyana", [
		["1992-03-29T03:59:59+00:00", "00:59:59", "-03", 180],
		["1992-03-29T04:00:00+00:00", "00:00:00", "-04", 240]
	])
};
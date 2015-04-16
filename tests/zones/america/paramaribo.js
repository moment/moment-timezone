"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Paramaribo"] = {
	"1935" : helpers.makeTestYear("America/Paramaribo", [
		["1935-01-01T03:40:51+00:00", "23:59:59", "PMT", 13252 / 60],
		["1935-01-01T03:40:52+00:00", "00:00:16", "PMT", 13236 / 60]
	]),

	"1945" : helpers.makeTestYear("America/Paramaribo", [
		["1945-10-01T03:40:35+00:00", "23:59:59", "PMT", 13236 / 60],
		["1945-10-01T03:40:36+00:00", "00:10:36", "NEGT", 210]
	]),

	"1975" : helpers.makeTestYear("America/Paramaribo", [
		["1975-11-20T03:29:59+00:00", "23:59:59", "NEGT", 210],
		["1975-11-20T03:30:00+00:00", "00:00:00", "SRT", 210]
	])
};
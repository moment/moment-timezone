"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Paramaribo"] = {
	"guess" : helpers.makeTestGuess("America/Paramaribo", { offset: false, abbr: true }),

	"1911" : helpers.makeTestYear("America/Paramaribo", [
		["1911-01-01T03:40:39Z", "23:59:59", "LMT", 13240 / 60],
		["1911-01-01T03:40:40Z", "23:59:48", "PMT", 13252 / 60]
	]),

	"1935" : helpers.makeTestYear("America/Paramaribo", [
		["1935-01-01T03:40:51Z", "23:59:59", "PMT", 13252 / 60],
		["1935-01-01T03:40:52Z", "00:00:16", "PMT", 13236 / 60]
	]),

	"1945" : helpers.makeTestYear("America/Paramaribo", [
		["1945-10-01T03:40:35Z", "23:59:59", "PMT", 13236 / 60],
		["1945-10-01T03:40:36Z", "00:10:36", "NEGT", 210]
	]),

	"1975" : helpers.makeTestYear("America/Paramaribo", [
		["1975-11-20T03:29:59Z", "23:59:59", "NEGT", 210],
		["1975-11-20T03:30:00Z", "00:00:00", "SRT", 210]
	]),

	"1984" : helpers.makeTestYear("America/Paramaribo", [
		["1984-10-01T03:29:59Z", "23:59:59", "SRT", 210],
		["1984-10-01T03:30:00Z", "00:30:00", "SRT", 180]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Atlantic/Cape_Verde"] = {
	"guess" : helpers.makeTestGuess("Atlantic/Cape_Verde", { offset: true, abbr: true }),

	"1907" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1907-01-01T01:34:03Z", "23:59:59", "LMT", 5644 / 60],
		["1907-01-01T01:34:04Z", "23:34:04", "CVT", 120]
	]),

	"1942" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1942-09-01T01:59:59Z", "23:59:59", "CVT", 120],
		["1942-09-01T02:00:00Z", "01:00:00", "CVST", 60]
	]),

	"1945" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1945-10-15T00:59:59Z", "23:59:59", "CVST", 60],
		["1945-10-15T01:00:00Z", "23:00:00", "CVT", 120]
	]),

	"1975" : helpers.makeTestYear("Atlantic/Cape_Verde", [
		["1975-11-25T03:59:59Z", "01:59:59", "CVT", 120],
		["1975-11-25T04:00:00Z", "03:00:00", "CVT", 60]
	])
};
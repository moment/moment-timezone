"use strict";

var helpers = require("../../helpers/helpers");

exports["America/El_Salvador"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/El_Salvador", { offset: true, expect: "America/Mexico_City" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/El_Salvador", { abbr: true, expect: "America/Mexico_City" }),

	"1921" : helpers.makeTestYear("America/El_Salvador", [
		["1921-01-01T05:56:47+00:00", "23:59:59", "LMT", 21408 / 60],
		["1921-01-01T05:56:48+00:00", "23:56:48", "CST", 360]
	]),

	"1987" : helpers.makeTestYear("America/El_Salvador", [
		["1987-05-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1987-05-03T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1987-09-27T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1987-09-27T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1988" : helpers.makeTestYear("America/El_Salvador", [
		["1988-05-01T05:59:59+00:00", "23:59:59", "CST", 360],
		["1988-05-01T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1988-09-25T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1988-09-25T05:00:00+00:00", "23:00:00", "CST", 360]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Costa_Rica"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Costa_Rica", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Costa_Rica", { abbr: true, expect: "America/Managua" }),

	"1921" : helpers.makeTestYear("America/Costa_Rica", [
		["1921-01-15T05:36:12+00:00", "23:59:59", "SJMT", 20173 / 60],
		["1921-01-15T05:36:13+00:00", "23:36:13", "CST", 360]
	]),

	"1979" : helpers.makeTestYear("America/Costa_Rica", [
		["1979-02-25T05:59:59+00:00", "23:59:59", "CST", 360],
		["1979-02-25T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1979-06-03T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1979-06-03T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1980" : helpers.makeTestYear("America/Costa_Rica", [
		["1980-02-24T05:59:59+00:00", "23:59:59", "CST", 360],
		["1980-02-24T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1980-06-01T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1980-06-01T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1991" : helpers.makeTestYear("America/Costa_Rica", [
		["1991-01-19T05:59:59+00:00", "23:59:59", "CST", 360],
		["1991-01-19T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1991-07-01T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1991-07-01T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1992" : helpers.makeTestYear("America/Costa_Rica", [
		["1992-01-18T05:59:59+00:00", "23:59:59", "CST", 360],
		["1992-01-18T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1992-03-15T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1992-03-15T05:00:00+00:00", "23:00:00", "CST", 360]
	])
};
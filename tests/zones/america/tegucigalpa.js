"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Tegucigalpa"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Tegucigalpa", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Tegucigalpa", { abbr: true, expect: "America/Managua" }),

	"1921" : helpers.makeTestYear("America/Tegucigalpa", [
		["1921-04-01T05:48:52+00:00", "23:48:52", "CST", 360]
	]),

	"1987" : helpers.makeTestYear("America/Tegucigalpa", [
		["1987-05-03T05:59:59+00:00", "23:59:59", "CST", 360],
		["1987-05-03T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1987-09-27T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1987-09-27T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1988" : helpers.makeTestYear("America/Tegucigalpa", [
		["1988-05-01T05:59:59+00:00", "23:59:59", "CST", 360],
		["1988-05-01T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1988-09-25T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1988-09-25T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"2006" : helpers.makeTestYear("America/Tegucigalpa", [
		["2006-05-07T05:59:59+00:00", "23:59:59", "CST", 360],
		["2006-05-07T06:00:00+00:00", "01:00:00", "CDT", 300],
		["2006-08-07T04:59:59+00:00", "23:59:59", "CDT", 300]
	])
};
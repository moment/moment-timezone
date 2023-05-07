"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Guatemala"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Guatemala", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Guatemala", { abbr: true, expect: "America/Managua" }),

	"1918" : helpers.makeTestYear("America/Guatemala", [
		["1918-10-05T06:02:03+00:00", "23:59:59", "LMT", 21724 / 60],
		["1918-10-05T06:02:04+00:00", "00:02:04", "CST", 360]
	]),

	"1973" : helpers.makeTestYear("America/Guatemala", [
		["1973-11-25T05:59:59+00:00", "23:59:59", "CST", 360],
		["1973-11-25T06:00:00+00:00", "01:00:00", "CDT", 300]
	]),

	"1974" : helpers.makeTestYear("America/Guatemala", [
		["1974-02-24T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1974-02-24T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1983" : helpers.makeTestYear("America/Guatemala", [
		["1983-05-21T05:59:59+00:00", "23:59:59", "CST", 360],
		["1983-05-21T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1983-09-22T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1983-09-22T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1991" : helpers.makeTestYear("America/Guatemala", [
		["1991-03-23T05:59:59+00:00", "23:59:59", "CST", 360],
		["1991-03-23T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1991-09-07T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1991-09-07T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"2006" : helpers.makeTestYear("America/Guatemala", [
		["2006-04-30T05:59:59+00:00", "23:59:59", "CST", 360],
		["2006-04-30T06:00:00+00:00", "01:00:00", "CDT", 300],
		["2006-10-01T04:59:59+00:00", "23:59:59", "CDT", 300],
		["2006-10-01T05:00:00+00:00", "23:00:00", "CST", 360]
	])
};
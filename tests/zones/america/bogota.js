"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Bogota"] = {
	"guess" : helpers.makeTestGuess("America/Bogota", { offset: false, abbr: true }),

	"1914" : helpers.makeTestYear("America/Bogota", [
		["1914-11-23T04:56:15Z", "23:59:59", "BMT", 17776 / 60],
		["1914-11-23T04:56:16Z", "23:56:16", "COT", 300]
	]),

	"1992" : helpers.makeTestYear("America/Bogota", [
		["1992-05-03T04:59:59Z", "23:59:59", "COT", 300],
		["1992-05-03T05:00:00Z", "01:00:00", "COST", 240]
	]),

	"1993" : helpers.makeTestYear("America/Bogota", [
		["1993-04-04T03:59:59Z", "23:59:59", "COST", 240],
		["1993-04-04T04:00:00Z", "23:00:00", "COT", 300]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Bogota"] = {
	"1914" : helpers.makeTestYear("America/Bogota", [
		["1914-11-23T04:56:15+00:00", "23:59:59", "BMT", 17776 / 60],
		["1914-11-23T04:56:16+00:00", "23:56:16", "COT", 300]
	]),

	"1992" : helpers.makeTestYear("America/Bogota", [
		["1992-05-03T04:59:59+00:00", "23:59:59", "COT", 300],
		["1992-05-03T05:00:00+00:00", "01:00:00", "COST", 240]
	])
};
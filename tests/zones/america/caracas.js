"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Caracas"] = {
	"1912" : helpers.makeTestYear("America/Caracas", [
		["1912-02-12T04:27:39+00:00", "23:59:59", "CMT", 16060 / 60],
		["1912-02-12T04:27:40+00:00", "23:57:40", "VET", 270]
	]),

	"1965" : helpers.makeTestYear("America/Caracas", [
		["1965-01-01T04:29:59+00:00", "23:59:59", "VET", 270],
		["1965-01-01T04:30:00+00:00", "00:30:00", "VET", 240]
	])
};
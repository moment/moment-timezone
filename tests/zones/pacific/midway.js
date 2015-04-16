"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Midway"] = {
	"1911" : helpers.makeTestYear("Pacific/Midway", [
		["1911-01-01T11:22:47+00:00", "23:59:59", "LMT", 40968 / 60],
		["1911-01-01T11:22:48+00:00", "00:22:48", "NST", 660]
	]),

	"1967" : helpers.makeTestYear("Pacific/Midway", [
		["1967-04-01T10:59:59+00:00", "23:59:59", "NST", 660],
		["1967-04-01T11:00:00+00:00", "00:00:00", "BST", 660]
	])
};
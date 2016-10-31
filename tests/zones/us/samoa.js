"use strict";

var helpers = require("../../helpers/helpers");

exports["US/Samoa"] = {
	"1911" : helpers.makeTestYear("US/Samoa", [
		["1911-01-01T11:22:47+00:00", "23:59:59", "LMT", 40968 / 60],
		["1911-01-01T11:22:48+00:00", "00:22:48", "NST", 660]
	]),

	"1967" : helpers.makeTestYear("US/Samoa", [
		["1967-04-01T10:59:59+00:00", "23:59:59", "NST", 660],
		["1967-04-01T11:00:00+00:00", "00:00:00", "BST", 660]
	]),

	"1983" : helpers.makeTestYear("US/Samoa", [
		["1983-11-30T10:59:59+00:00", "23:59:59", "BST", 660],
		["1983-11-30T11:00:00+00:00", "00:00:00", "SST", 660]
	])
};
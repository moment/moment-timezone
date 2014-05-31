"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Conakry"] = {
	"1912" : helpers.makeTestYear("Africa/Conakry", [
		["1912-01-01T00:54:51+00:00", "23:59:59", "LMT", 3292 / 60],
		["1912-01-01T00:54:52+00:00", "00:54:52", "GMT", 0]
	]),

	"1934" : helpers.makeTestYear("Africa/Conakry", [
		["1934-02-25T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1934-02-26T00:00:00+00:00", "23:00:00", "WAT", 60]
	]),

	"1960" : helpers.makeTestYear("Africa/Conakry", [
		["1960-01-01T00:59:59+00:00", "23:59:59", "WAT", 60],
		["1960-01-01T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};
"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Dakar"] = {
	"1912" : helpers.makeTestYear("Africa/Dakar", [
		["1912-01-01T01:09:43+00:00", "23:59:59", "LMT", 4184 / 60],
		["1912-01-01T01:09:44+00:00", "00:09:44", "WAT", 60]
	]),

	"1941" : helpers.makeTestYear("Africa/Dakar", [
		["1941-06-01T00:59:59+00:00", "23:59:59", "WAT", 60],
		["1941-06-01T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};
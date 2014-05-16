"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Banjul"] = {
	"1912" : helpers.makeTestYear("Africa/Banjul", [
		["1912-01-01T01:06:35+00:00", "23:59:59", "LMT", 3996 / 60],
		["1912-01-01T01:06:36+00:00", "00:00:00", "BMT", 3996 / 60]
	]),

	"1935" : helpers.makeTestYear("Africa/Banjul", [
		["1935-01-01T01:06:35+00:00", "23:59:59", "BMT", 3996 / 60],
		["1935-01-01T01:06:36+00:00", "00:06:36", "WAT", 60]
	]),

	"1964" : helpers.makeTestYear("Africa/Banjul", [
		["1964-01-01T00:59:59+00:00", "23:59:59", "WAT", 60],
		["1964-01-01T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};
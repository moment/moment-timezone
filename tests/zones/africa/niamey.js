"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Niamey"] = {
	"1911" : helpers.makeTestYear("Africa/Niamey", [
		["1911-12-31T23:51:31+00:00", "23:59:59", "LMT", -508 / 60],
		["1911-12-31T23:51:32+00:00", "22:51:32", "WAT", 60]
	]),

	"1934" : helpers.makeTestYear("Africa/Niamey", [
		["1934-02-26T00:59:59+00:00", "23:59:59", "WAT", 60],
		["1934-02-26T01:00:00+00:00", "01:00:00", "GMT", 0]
	]),

	"1959" : helpers.makeTestYear("Africa/Niamey", [
		["1959-12-31T23:59:59+00:00", "23:59:59", "GMT", 0]
	]),

	"1960" : helpers.makeTestYear("Africa/Niamey", [
		["1960-01-01T00:00:00+00:00", "01:00:00", "WAT", -60]
	])
};
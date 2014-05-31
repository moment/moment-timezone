"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Nouakchott"] = {
	"1912" : helpers.makeTestYear("Africa/Nouakchott", [
		["1912-01-01T01:03:47+00:00", "23:59:59", "LMT", 3828 / 60],
		["1912-01-01T01:03:48+00:00", "01:03:48", "GMT", 0]
	]),

	"1934" : helpers.makeTestYear("Africa/Nouakchott", [
		["1934-02-25T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1934-02-26T00:00:00+00:00", "23:00:00", "WAT", 60]
	]),

	"1960" : helpers.makeTestYear("Africa/Nouakchott", [
		["1960-11-28T00:59:59+00:00", "23:59:59", "WAT", 60],
		["1960-11-28T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};
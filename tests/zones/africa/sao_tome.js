"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Sao_Tome"] = {
	"1912" : helpers.makeTestYear("Africa/Sao_Tome", [
		["1912-01-01T00:36:44+00:00", "23:59:59", "LMT", 2205 / 60],
		["1912-01-01T00:36:45+00:00", "00:36:45", "GMT", 0]
	]),

	"2018" : helpers.makeTestYear("Africa/Sao_Tome", [
		["2018-01-01T00:59:59+00:00", "00:59:59", "GMT", 0],
		["2018-01-01T01:00:00+00:00", "02:00:00", "WAT", -60]
	])
};
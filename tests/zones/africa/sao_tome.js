"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Sao_Tome"] = {
	"1912" : helpers.makeTestYear("Africa/Sao_Tome", [
		["1912-01-01T00:36:31+00:00", "23:59:59", "LMT", 2192 / 60],
		["1912-01-01T00:36:32+00:00", "00:36:32", "GMT", 0]
	])
};
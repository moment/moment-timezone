"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Ouagadougou"] = {
	"1912" : helpers.makeTestYear("Africa/Ouagadougou", [
		["1912-01-01T00:06:03+00:00", "23:59:59", "LMT", 364 / 60],
		["1912-01-01T00:06:04+00:00", "00:06:04", "GMT", 0]
	])
};
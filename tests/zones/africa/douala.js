"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Douala"] = {
	"1911" : helpers.makeTestYear("Africa/Douala", [
		["1911-12-31T23:21:11+00:00", "23:59:59", "LMT", -2328 / 60],
		["1911-12-31T23:21:12+00:00", "00:21:12", "WAT", -60]
	])
};
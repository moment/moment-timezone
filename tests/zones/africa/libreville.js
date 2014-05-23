"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Libreville"] = {
	"1911" : helpers.makeTestYear("Africa/Libreville", [
		["1911-12-31T23:22:11+00:00", "23:59:59", "LMT", -2268 / 60],
		["1911-12-31T23:22:12+00:00", "00:22:12", "WAT", -60]
	])
};
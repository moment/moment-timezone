"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Brazzaville"] = {
	"1911" : helpers.makeTestYear("Africa/Brazzaville", [
		["1911-12-31T22:58:51+00:00", "23:59:59", "LMT", -3668 / 60],
		["1911-12-31T22:58:52+00:00", "23:58:52", "WAT", -60]
	])
};
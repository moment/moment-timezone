"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Lagos"] = {
	"1919" : helpers.makeTestYear("Africa/Lagos", [
		["1919-08-31T23:46:23+00:00", "23:59:59", "LMT", -816 / 60],
		["1919-08-31T23:46:24+00:00", "00:46:24", "WAT", -60]
	])
};
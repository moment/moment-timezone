"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Brazzaville"] = {
	"1919" : helpers.makeTestYear("Africa/Brazzaville", [
		["1919-08-31T23:46:23+00:00", "23:59:59", "LMT", -816 / 60],
		["1919-08-31T23:46:24+00:00", "00:46:24", "WAT", -60]
	])
};
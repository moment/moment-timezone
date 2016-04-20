"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Luanda"] = {
	"1919" : helpers.makeTestYear("Africa/Luanda", [
		["1919-08-31T23:46:23Z", "23:59:59", "LMT", -816 / 60],
		["1919-08-31T23:46:24Z", "00:46:24", "WAT", -60]
	])
};
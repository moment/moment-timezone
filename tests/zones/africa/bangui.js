"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bangui"] = {
	"1911" : helpers.makeTestYear("Africa/Bangui", [
		["1911-12-31T22:45:39+00:00", "23:59:59", "LMT", -4460 / 60],
		["1911-12-31T22:45:40+00:00", "23:45:40", "WAT", -60]
	])
};
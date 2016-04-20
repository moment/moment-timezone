"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Blantyre"] = {
	"1903" : helpers.makeTestYear("Africa/Blantyre", [
		["1903-02-28T21:49:39Z", "23:59:59", "LMT", -7820 / 60],
		["1903-02-28T21:49:40Z", "23:49:40", "CAT", -120]
	])
};
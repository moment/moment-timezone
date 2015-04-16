"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Monrovia"] = {
	"1919" : helpers.makeTestYear("Africa/Monrovia", [
		["1919-03-01T00:43:07+00:00", "23:59:59", "MMT", 2588 / 60],
		["1919-03-01T00:43:08+00:00", "23:58:38", "LRT", 2670 / 60]
	])
};
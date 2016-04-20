"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Monrovia"] = {
	"1919" : helpers.makeTestYear("Africa/Monrovia", [
		["1919-03-01T00:43:07Z", "23:59:59", "MMT", 2588 / 60],
		["1919-03-01T00:43:08Z", "23:58:38", "LRT", 2670 / 60]
	]),

	"1972" : helpers.makeTestYear("Africa/Monrovia", [
		["1972-05-01T00:44:29Z", "23:59:59", "LRT", 2670 / 60],
		["1972-05-01T00:44:30Z", "00:44:30", "GMT", 0]
	])
};
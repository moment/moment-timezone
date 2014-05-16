"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Luanda"] = {
	"1911" : helpers.makeTestYear("Africa/Luanda", [
		["1911-05-25T23:07:55+00:00", "23:59:59", "AOT", -3124 / 60],
		["1911-05-25T23:07:56+00:00", "00:07:56", "WAT", -60]
	])
};
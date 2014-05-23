"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Malabo"] = {
	"1911" : helpers.makeTestYear("Africa/Malabo", [
		["1911-12-31T23:24:51+00:00", "23:59:59", "LMT", -2108 / 60],
		["1911-12-31T23:24:52+00:00", "23:24:52", "GMT", 0]
	]),

	"1963" : helpers.makeTestYear("Africa/Malabo", [
		["1963-12-14T23:59:59+00:00", "23:59:59", "GMT", 0],
		["1963-12-15T00:00:00+00:00", "01:00:00", "WAT", -60]
	])
};
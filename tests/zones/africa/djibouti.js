"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Djibouti"] = {
	"1911" : helpers.makeTestYear("Africa/Djibouti", [
		["1911-06-30T21:07:23+00:00", "23:59:59", "LMT", -10356 / 60],
		["1911-06-30T21:07:24+00:00", "00:07:24", "EAT", -180]
	])
};
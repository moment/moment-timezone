"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Africa/Mogadishu"] = {
	"1930" : helpers.makeTestYear("Africa/Mogadishu", [
		["1930-12-31T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1930-12-31T21:00:00+00:00", "23:30:00", "BEAT", -150]
	]),

	"1956" : helpers.makeTestYear("Africa/Mogadishu", [
		["1956-12-31T21:29:59+00:00", "23:59:59", "BEAT", -150],
		["1956-12-31T21:30:00+00:00", "00:30:00", "EAT", -180]
	])
};
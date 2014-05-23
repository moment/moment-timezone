"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Pacific/Marquesas"] = {
	"1912" : helpers.makeTestYear("Pacific/Marquesas", [
		["1912-10-01T09:17:59+00:00", "23:59:59", "LMT", 558],
		["1912-10-01T09:18:00+00:00", "23:48:00", "MART", 570]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Tahiti"] = {
	"1912" : helpers.makeTestYear("Pacific/Tahiti", [
		["1912-10-01T09:58:15+00:00", "23:59:59", "LMT", 35896 / 60],
		["1912-10-01T09:58:16+00:00", "23:58:16", "-10", 600]
	])
};
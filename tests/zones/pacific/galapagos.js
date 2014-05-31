"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Galapagos"] = {
	"1931" : helpers.makeTestYear("Pacific/Galapagos", [
		["1931-01-01T05:58:23+00:00", "23:59:59", "LMT", 21504 / 60],
		["1931-01-01T05:58:24+00:00", "00:58:24", "ECT", 300]
	]),

	"1986" : helpers.makeTestYear("Pacific/Galapagos", [
		["1986-01-01T04:59:59+00:00", "23:59:59", "ECT", 300],
		["1986-01-01T05:00:00+00:00", "23:00:00", "GALT", 360]
	])
};
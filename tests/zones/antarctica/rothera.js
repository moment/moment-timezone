"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Antarctica/Rothera"] = {
	"1976" : helpers.makeTestYear("Antarctica/Rothera", [
		["1976-11-30T23:59:59+00:00", "23:59:59", "zzz", 0],
		["1976-12-01T00:00:00+00:00", "21:00:00", "ROTT", 180]
	])
};
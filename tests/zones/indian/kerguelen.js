"use strict";

var helpers = require("../../../tests/helpers/helpers");

exports["Indian/Kerguelen"] = {
	"1949" : helpers.makeTestYear("Indian/Kerguelen", [
		["1949-12-31T23:59:59+00:00", "23:59:59", "zzz", 0]
	]),

	"1950" : helpers.makeTestYear("Indian/Kerguelen", [
		["1950-01-01T00:00:00+00:00", "05:00:00", "TFT", -300]
	])
};
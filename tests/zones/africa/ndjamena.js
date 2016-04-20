"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Ndjamena"] = {
	"1911" : helpers.makeTestYear("Africa/Ndjamena", [
		["1911-12-31T22:59:47Z", "23:59:59", "LMT", -3612 / 60],
		["1911-12-31T22:59:48Z", "23:59:48", "WAT", -60]
	]),

	"1979" : helpers.makeTestYear("Africa/Ndjamena", [
		["1979-10-13T22:59:59Z", "23:59:59", "WAT", -60],
		["1979-10-13T23:00:00Z", "01:00:00", "WAST", -120]
	]),

	"1980" : helpers.makeTestYear("Africa/Ndjamena", [
		["1980-03-07T21:59:59Z", "23:59:59", "WAST", -120],
		["1980-03-07T22:00:00Z", "23:00:00", "WAT", -60]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Ndjamena"] = {
	"1979" : helpers.makeTestYear("Africa/Ndjamena", [
		["1979-10-13T22:59:59+00:00", "23:59:59", "WAT", -60],
		["1979-10-13T23:00:00+00:00", "01:00:00", "WAST", -120]
	])
};
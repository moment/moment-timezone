"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Cayenne"] = {
	"guess" : helpers.makeTestGuess("America/Cayenne", { offset: false, abbr: true }),

	"1911" : helpers.makeTestYear("America/Cayenne", [
		["1911-07-01T03:29:19Z", "23:59:59", "LMT", 12560 / 60],
		["1911-07-01T03:29:20Z", "23:29:20", "GFT", 240]
	]),

	"1967" : helpers.makeTestYear("America/Cayenne", [
		["1967-10-01T03:59:59Z", "23:59:59", "GFT", 240],
		["1967-10-01T04:00:00Z", "01:00:00", "GFT", 180]
	])
};
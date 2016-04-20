"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guadalcanal"] = {
	"guess" : helpers.makeTestGuess("Pacific/Guadalcanal", { offset: false, abbr: true }),

	"1912" : helpers.makeTestYear("Pacific/Guadalcanal", [
		["1912-09-30T13:20:11Z", "23:59:59", "LMT", -38388 / 60],
		["1912-09-30T13:20:12Z", "00:20:12", "SBT", -660]
	])
};
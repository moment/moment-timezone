"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guadalcanal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Guadalcanal", { offset: true, expect: "Pacific/Pohnpei" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Guadalcanal", { abbr: true, expect: "Pacific/Pohnpei" }),

	"1912" : helpers.makeTestYear("Pacific/Guadalcanal", [
		["1912-09-30T13:20:11+00:00", "23:59:59", "LMT", -38388 / 60],
		["1912-09-30T13:20:12+00:00", "00:20:12", "+11", -660]
	])
};
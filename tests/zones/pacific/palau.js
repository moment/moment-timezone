"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Palau"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Palau", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Palau", { abbr: true, expect: "Asia/Tokyo" }),

	"1844" : helpers.makeTestYear("Pacific/Palau", [
		["1844-12-31T15:02:03+00:00", "23:59:59", "LMT", 54124 / 60],
		["1844-12-31T15:02:04+00:00", "00:00:00", "LMT", -32276 / 60]
	]),

	"1900" : helpers.makeTestYear("Pacific/Palau", [
		["1900-12-31T15:02:03+00:00", "23:59:59", "LMT", -32276 / 60],
		["1900-12-31T15:02:04+00:00", "00:02:04", "+09", -540]
	])
};
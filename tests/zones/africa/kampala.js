"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kampala"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Kampala", { offset: true, expect: "Europe/Moscow" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Kampala", { abbr: true, expect: "Africa/Nairobi" }),

	"1929" : helpers.makeTestYear("Africa/Kampala", [
		["1929-12-31T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1929-12-31T21:00:00+00:00", "23:30:00", "+0230", -150]
	]),

	"1939" : helpers.makeTestYear("Africa/Kampala", [
		["1939-12-31T21:29:59+00:00", "23:59:59", "+0230", -150],
		["1939-12-31T21:30:00+00:00", "00:15:00", "+0245", -165]
	])
};
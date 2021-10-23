"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Galapagos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Galapagos", { offset: true, expect: "America/Managua" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Galapagos", { abbr: true, expect: "America/Managua" }),

	"1986" : helpers.makeTestYear("Pacific/Galapagos", [
		["1986-01-01T04:59:59+00:00", "23:59:59", "-05", 300, 0],
		["1986-01-01T05:00:00+00:00", "23:00:00", "-06", 360, 0]
	]),

	"1992" : helpers.makeTestYear("Pacific/Galapagos", [
		["1992-11-28T05:59:59+00:00", "23:59:59", "-06", 360, 0],
		["1992-11-28T06:00:00+00:00", "01:00:00", "-05", 300, 1]
	])
};
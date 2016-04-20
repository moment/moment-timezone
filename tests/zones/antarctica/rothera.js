"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Rothera"] = {
	"guess" : helpers.makeTestGuess("Antarctica/Rothera", { offset: false, abbr: true }),

	"1976" : helpers.makeTestYear("Antarctica/Rothera", [
		["1976-11-30T23:59:59Z", "23:59:59", "zzz", 0],
		["1976-12-01T00:00:00Z", "21:00:00", "ROTT", 180]
	])
};
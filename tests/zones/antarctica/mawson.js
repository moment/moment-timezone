"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Mawson"] = {
	"guess" : helpers.makeTestGuess("Antarctica/Mawson", { offset: false, abbr: true }),

	"1954" : helpers.makeTestYear("Antarctica/Mawson", [
		["1954-02-12T23:59:59+00:00", "23:59:59", "zzz", 0],
		["1954-02-13T00:00:00+00:00", "06:00:00", "MAWT", -360]
	]),

	"2009" : helpers.makeTestYear("Antarctica/Mawson", [
		["2009-10-17T19:59:59+00:00", "01:59:59", "MAWT", -360],
		["2009-10-17T20:00:00+00:00", "01:00:00", "MAWT", -300]
	])
};
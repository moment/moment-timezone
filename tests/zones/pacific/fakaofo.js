"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Fakaofo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Fakaofo", { offset: true, expect: "Pacific/Tongatapu" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Fakaofo", { abbr: true, expect: "Pacific/Tongatapu" }),

	"1901" : helpers.makeTestYear("Pacific/Fakaofo", [
		["1901-01-01T11:24:56+00:00", "00:24:56", "-11", 660]
	]),

	"2011" : helpers.makeTestYear("Pacific/Fakaofo", [
		["2011-12-30T10:59:59+00:00", "23:59:59", "-11", 660]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Fakaofo"] = {
	"guess" : helpers.makeTestGuess("Pacific/Fakaofo", { offset: false, abbr: true }),

	"2011" : helpers.makeTestYear("Pacific/Fakaofo", [
		["2011-12-30T10:59:59Z", "23:59:59", "TKT", 660],
		["2011-12-30T11:00:00Z", "00:00:00", "TKT", -780]
	])
};
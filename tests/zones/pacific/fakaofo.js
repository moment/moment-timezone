"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Fakaofo"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Fakaofo", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Fakaofo", { abbr: true }),

	"2011" : helpers.makeTestYear("Pacific/Fakaofo", [
		["2011-12-30T10:59:59+00:00", "23:59:59", "-11", 660],
		["2011-12-30T11:00:00+00:00", "00:00:00", "+13", -780]
	])
};
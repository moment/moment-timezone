"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Majuro"] = {
	"guess" : helpers.makeTestGuess("Pacific/Majuro", { offset: false, abbr: true }),

	"1969" : helpers.makeTestYear("Pacific/Majuro", [
		["1969-09-30T12:59:59Z", "23:59:59", "MHT", -660],
		["1969-09-30T13:00:00Z", "01:00:00", "MHT", -720]
	])
};
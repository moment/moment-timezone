"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Guam"] = {
	"guess" : helpers.makeTestGuess("Pacific/Guam", { offset: false, abbr: true }),

	"2000" : helpers.makeTestYear("Pacific/Guam", [
		["2000-12-22T13:59:59Z", "23:59:59", "GST", -600],
		["2000-12-22T14:00:00Z", "00:00:00", "ChST", -600]
	])
};
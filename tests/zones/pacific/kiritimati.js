"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kiritimati"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Kiritimati", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Kiritimati", { abbr: true }),

	"1979" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1979-10-01T10:39:59+00:00", "23:59:59", "-1040", 640],
		["1979-10-01T10:40:00+00:00", "00:40:00", "-10", 600]
	])
};
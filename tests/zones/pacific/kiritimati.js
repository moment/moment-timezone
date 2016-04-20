"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kiritimati"] = {
	"guess" : helpers.makeTestGuess("Pacific/Kiritimati", { offset: true, abbr: true }),

	"1979" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1979-10-01T10:39:59Z", "23:59:59", "LINT", 640],
		["1979-10-01T10:40:00Z", "00:40:00", "LINT", 600]
	]),

	"1995" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1995-01-01T09:59:59Z", "23:59:59", "LINT", 600],
		["1995-01-01T10:00:00Z", "00:00:00", "LINT", -840]
	])
};
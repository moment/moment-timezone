"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {
	"guess" : helpers.makeTestGuess("Pacific/Niue", { offset: false, abbr: true }),

	"1951" : helpers.makeTestYear("Pacific/Niue", [
		["1951-01-01T11:19:59Z", "23:59:59", "NUT", 680],
		["1951-01-01T11:20:00Z", "23:50:00", "NUT", 690]
	]),

	"1978" : helpers.makeTestYear("Pacific/Niue", [
		["1978-10-01T11:29:59Z", "23:59:59", "NUT", 690],
		["1978-10-01T11:30:00Z", "00:30:00", "NUT", 660]
	])
};
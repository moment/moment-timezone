"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kiritimati"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Kiritimati", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Kiritimati", { abbr: true }),

	"1901" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1901-01-01T10:29:19+00:00", "23:59:59", "LMT", 37760 / 60],
		["1901-01-01T10:29:20+00:00", "23:49:20", "-1040", 640]
	]),

	"1979" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1979-10-01T10:39:59+00:00", "23:59:59", "-1040", 640],
		["1979-10-01T10:40:00+00:00", "00:40:00", "-10", 600]
	]),

	"1994" : helpers.makeTestYear("Pacific/Kiritimati", [
		["1994-12-31T09:59:59+00:00", "23:59:59", "-10", 600],
		["1994-12-31T10:00:00+00:00", "00:00:00", "+14", -840]
	])
};
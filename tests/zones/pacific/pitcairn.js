"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pitcairn"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pitcairn", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pitcairn", { abbr: true }),

	"1901" : helpers.makeTestYear("Pacific/Pitcairn", [
		["1901-01-01T08:40:19+00:00", "23:59:59", "LMT", 31220 / 60],
		["1901-01-01T08:40:20+00:00", "00:10:20", "-0830", 510]
	]),

	"1998" : helpers.makeTestYear("Pacific/Pitcairn", [
		["1998-04-27T08:29:59+00:00", "23:59:59", "-0830", 510],
		["1998-04-27T08:30:00+00:00", "00:30:00", "-08", 480]
	])
};
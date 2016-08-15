"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kosrae"] = {
	"guess" : helpers.makeTestGuess("Pacific/Kosrae", { offset: false, abbr: true }),

	"1969" : helpers.makeTestYear("Pacific/Kosrae", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "KOST", -660],
		["1969-09-30T13:00:00+00:00", "01:00:00", "KOST", -720]
	]),

	"1998" : helpers.makeTestYear("Pacific/Kosrae", [
		["1998-12-31T11:59:59+00:00", "23:59:59", "KOST", -720],
		["1998-12-31T12:00:00+00:00", "23:00:00", "KOST", -660]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kosrae"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Kosrae", { offset: true, expect: "Pacific/Norfolk" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Kosrae", { abbr: true, expect: "Pacific/Norfolk" }),

	"1969" : helpers.makeTestYear("Pacific/Kosrae", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "+11", -660],
		["1969-09-30T13:00:00+00:00", "01:00:00", "+12", -720]
	])
};
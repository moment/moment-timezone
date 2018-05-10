"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Majuro"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Majuro", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Majuro", { abbr: true, expect: "Asia/Kamchatka" }),

	"1969" : helpers.makeTestYear("Pacific/Majuro", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "+11", -660],
		["1969-09-30T13:00:00+00:00", "01:00:00", "+12", -720]
	])
};
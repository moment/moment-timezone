"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Wallis"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Wallis", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Wallis", { abbr: true, expect: "Asia/Kamchatka" }),

	"1900" : helpers.makeTestYear("Pacific/Wallis", [
		["1900-12-31T12:27:55+00:00", "23:59:59", "LMT", -41524 / 60],
		["1900-12-31T12:27:56+00:00", "00:27:56", "+12", -720]
	])
};
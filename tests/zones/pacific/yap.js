"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Yap"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Yap", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Yap", { abbr: true, expect: "Australia/Brisbane" }),

	"1879" : helpers.makeTestYear("Pacific/Yap", [
		["1879-12-31T14:11:20+00:00", "23:59:52", "PMMT", -35312 / 60]
	]),

	"1894" : helpers.makeTestYear("Pacific/Yap", [
		["1894-12-31T14:11:27+00:00", "23:59:59", "PMMT", -35312 / 60]
	])
};
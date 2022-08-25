"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Port_Moresby"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Port_Moresby", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Port_Moresby", { abbr: true, expect: "Australia/Brisbane" }),

	"1879" : helpers.makeTestYear("Pacific/Port_Moresby", [
		["1879-12-31T14:11:20+00:00", "23:59:52", "PMMT", -35312 / 60]
	]),

	"1894" : helpers.makeTestYear("Pacific/Port_Moresby", [
		["1894-12-31T14:11:27+00:00", "23:59:59", "PMMT", -35312 / 60]
	])
};
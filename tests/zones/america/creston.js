"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Creston"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Creston", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Creston", { abbr: true, expect: "America/Phoenix" }),

	"1916" : helpers.makeTestYear("America/Creston", [
		["1916-10-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1916-10-01T07:00:00+00:00", "23:00:00", "PST", 480]
	]),

	"1918" : helpers.makeTestYear("America/Creston", [
		["1918-06-02T07:59:59+00:00", "23:59:59", "PST", 480],
		["1918-06-02T08:00:00+00:00", "01:00:00", "MST", 420]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Kerguelen"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Kerguelen", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Kerguelen", { abbr: true, expect: "Asia/Karachi" }),

	"1949" : helpers.makeTestYear("Indian/Kerguelen", [
		["1949-12-31T23:59:59+00:00", "23:59:59", "-00", 0]
	]),

	"1950" : helpers.makeTestYear("Indian/Kerguelen", [
		["1950-01-01T00:00:00+00:00", "05:00:00", "+05", -300]
	])
};
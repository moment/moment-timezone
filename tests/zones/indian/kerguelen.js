"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Kerguelen"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Kerguelen", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Kerguelen", { abbr: true, expect: "Asia/Karachi" }),

	"1879" : helpers.makeTestYear("Indian/Kerguelen", [
		["1879-12-31T19:05:59+00:00", "23:59:59", "LMT", -294],
		["1879-12-31T19:06:00+00:00", "00:00:00", "MMT", -294]
	]),

	"1959" : helpers.makeTestYear("Indian/Kerguelen", [
		["1959-12-31T19:05:59+00:00", "23:59:59", "MMT", -294],
		["1959-12-31T19:06:00+00:00", "00:06:00", "+05", -300]
	])
};
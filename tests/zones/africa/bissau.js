"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Bissau"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Bissau", { offset: true, expect: "Etc/UTC" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Bissau", { abbr: true, expect: "Etc/UTC" }),

	"1912" : helpers.makeTestYear("Africa/Bissau", [
		["1912-01-01T00:59:59+00:00", "23:57:39", "LMT", 3740 / 60],
		["1912-01-01T01:00:00+00:00", "00:00:00", "-01", 60]
	]),

	"1975" : helpers.makeTestYear("Africa/Bissau", [
		["1975-01-01T00:59:59+00:00", "23:59:59", "-01", 60],
		["1975-01-01T01:00:00+00:00", "01:00:00", "GMT", 0]
	])
};
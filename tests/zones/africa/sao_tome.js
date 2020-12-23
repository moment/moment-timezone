"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Sao_Tome"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Sao_Tome", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Sao_Tome", { abbr: true }),

	"1911" : helpers.makeTestYear("Africa/Sao_Tome", [
		["1911-12-31T23:59:59+00:00", "23:23:14", "LMT", 2205 / 60]
	]),

	"1912" : helpers.makeTestYear("Africa/Sao_Tome", [
		["1912-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	]),

	"2018" : helpers.makeTestYear("Africa/Sao_Tome", [
		["2018-01-01T00:59:59+00:00", "00:59:59", "GMT", 0],
		["2018-01-01T01:00:00+00:00", "02:00:00", "WAT", -60]
	])
};
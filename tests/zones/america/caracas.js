"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Caracas"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Caracas", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Caracas", { abbr: true }),

	"1912" : helpers.makeTestYear("America/Caracas", [
		["1912-02-12T04:27:39+00:00", "23:59:59", "CMT", 16060 / 60],
		["1912-02-12T04:27:40+00:00", "23:57:40", "-0430", 270]
	]),

	"1965" : helpers.makeTestYear("America/Caracas", [
		["1965-01-01T04:29:59+00:00", "23:59:59", "-0430", 270],
		["1965-01-01T04:30:00+00:00", "00:30:00", "-04", 240]
	]),

	"2007" : helpers.makeTestYear("America/Caracas", [
		["2007-12-09T06:59:59+00:00", "02:59:59", "-04", 240],
		["2007-12-09T07:00:00+00:00", "02:30:00", "-0430", 270]
	])
};
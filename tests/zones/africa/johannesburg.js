"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Johannesburg"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Johannesburg", { offset: true, expect: "Africa/Cairo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Johannesburg", { abbr: true }),

	"1903" : helpers.makeTestYear("Africa/Johannesburg", [
		["1903-02-28T22:29:59+00:00", "23:59:59", "SAST", -90, 0],
		["1903-02-28T22:30:00+00:00", "00:30:00", "SAST", -120, 0]
	]),

	"1942" : helpers.makeTestYear("Africa/Johannesburg", [
		["1942-09-19T23:59:59+00:00", "01:59:59", "SAST", -120, 0],
		["1942-09-20T00:00:00+00:00", "03:00:00", "SAST", -180, 1]
	]),

	"1943" : helpers.makeTestYear("Africa/Johannesburg", [
		["1943-03-20T22:59:59+00:00", "01:59:59", "SAST", -180, 1],
		["1943-03-20T23:00:00+00:00", "01:00:00", "SAST", -120, 0],
		["1943-09-18T23:59:59+00:00", "01:59:59", "SAST", -120, 0],
		["1943-09-19T00:00:00+00:00", "03:00:00", "SAST", -180, 1]
	])
};
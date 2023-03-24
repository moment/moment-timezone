"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Mbabane"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Mbabane", { offset: true, expect: "Africa/Johannesburg" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Mbabane", { abbr: true, expect: "Africa/Johannesburg" }),

	"1892" : helpers.makeTestYear("Africa/Mbabane", [
		["1892-02-07T22:08:00+00:00", "23:38:00", "SAST", -90]
	]),

	"1903" : helpers.makeTestYear("Africa/Mbabane", [
		["1903-02-28T22:29:59+00:00", "23:59:59", "SAST", -90],
		["1903-02-28T22:30:00+00:00", "00:30:00", "SAST", -120]
	]),

	"1942" : helpers.makeTestYear("Africa/Mbabane", [
		["1942-09-19T23:59:59+00:00", "01:59:59", "SAST", -120],
		["1942-09-20T00:00:00+00:00", "03:00:00", "SAST", -180]
	]),

	"1943" : helpers.makeTestYear("Africa/Mbabane", [
		["1943-03-20T22:59:59+00:00", "01:59:59", "SAST", -180],
		["1943-03-20T23:00:00+00:00", "01:00:00", "SAST", -120],
		["1943-09-18T23:59:59+00:00", "01:59:59", "SAST", -120],
		["1943-09-19T00:00:00+00:00", "03:00:00", "SAST", -180]
	]),

	"1944" : helpers.makeTestYear("Africa/Mbabane", [
		["1944-03-18T22:59:59+00:00", "01:59:59", "SAST", -180]
	])
};
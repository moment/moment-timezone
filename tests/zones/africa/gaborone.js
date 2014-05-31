"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Gaborone"] = {
	"1903" : helpers.makeTestYear("Africa/Gaborone", [
		["1903-02-28T22:29:59+00:00", "23:59:59", "SAST", -90],
		["1903-02-28T22:30:00+00:00", "00:30:00", "CAT", -120]
	]),

	"1943" : helpers.makeTestYear("Africa/Gaborone", [
		["1943-09-18T23:59:59+00:00", "01:59:59", "CAT", -120],
		["1943-09-19T00:00:00+00:00", "03:00:00", "CAST", -180]
	]),

	"1944" : helpers.makeTestYear("Africa/Gaborone", [
		["1944-03-18T22:59:59+00:00", "01:59:59", "CAST", -180],
		["1944-03-18T23:00:00+00:00", "01:00:00", "CAT", -120]
	])
};
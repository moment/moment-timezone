"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Maseru"] = {
	"1903" : helpers.makeTestYear("Africa/Maseru", [
		["1903-02-28T22:09:59+00:00", "23:59:59", "LMT", -110],
		["1903-02-28T22:10:00+00:00", "00:10:00", "SAST", -120]
	]),

	"1943" : helpers.makeTestYear("Africa/Maseru", [
		["1943-09-18T23:59:59+00:00", "01:59:59", "SAST", -120],
		["1943-09-19T00:00:00+00:00", "03:00:00", "SAST", -180]
	]),

	"1944" : helpers.makeTestYear("Africa/Maseru", [
		["1944-03-18T22:59:59+00:00", "01:59:59", "SAST", -180],
		["1944-03-18T23:00:00+00:00", "01:00:00", "SAST", -120]
	])
};
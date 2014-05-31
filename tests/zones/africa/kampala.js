"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Kampala"] = {
	"1928" : helpers.makeTestYear("Africa/Kampala", [
		["1928-06-30T21:50:19+00:00", "23:59:59", "LMT", -7780 / 60],
		["1928-06-30T21:50:20+00:00", "00:50:20", "EAT", -180]
	]),

	"1929" : helpers.makeTestYear("Africa/Kampala", [
		["1929-12-31T20:59:59+00:00", "23:59:59", "EAT", -180],
		["1929-12-31T21:00:00+00:00", "23:30:00", "BEAT", -150]
	]),

	"1947" : helpers.makeTestYear("Africa/Kampala", [
		["1947-12-31T21:29:59+00:00", "23:59:59", "BEAT", -150],
		["1947-12-31T21:30:00+00:00", "00:15:00", "BEAUT", -165]
	]),

	"1956" : helpers.makeTestYear("Africa/Kampala", [
		["1956-12-31T21:14:59+00:00", "23:59:59", "BEAUT", -165],
		["1956-12-31T21:15:00+00:00", "00:15:00", "EAT", -180]
	])
};
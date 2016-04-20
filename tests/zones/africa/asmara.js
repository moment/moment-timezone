"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Asmara"] = {
	"1928" : helpers.makeTestYear("Africa/Asmara", [
		["1928-06-30T21:32:43Z", "23:59:59", "LMT", -8836 / 60],
		["1928-06-30T21:32:44Z", "00:32:44", "EAT", -180]
	]),

	"1929" : helpers.makeTestYear("Africa/Asmara", [
		["1929-12-31T20:59:59Z", "23:59:59", "EAT", -180],
		["1929-12-31T21:00:00Z", "23:30:00", "BEAT", -150]
	]),

	"1939" : helpers.makeTestYear("Africa/Asmara", [
		["1939-12-31T21:29:59Z", "23:59:59", "BEAT", -150],
		["1939-12-31T21:30:00Z", "00:15:00", "BEAUT", -165]
	]),

	"1959" : helpers.makeTestYear("Africa/Asmara", [
		["1959-12-31T21:14:59Z", "23:59:59", "BEAUT", -165],
		["1959-12-31T21:15:00Z", "00:15:00", "EAT", -180]
	])
};
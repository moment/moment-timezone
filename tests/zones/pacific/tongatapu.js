"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Tongatapu"] = {
	"guess" : helpers.makeTestGuess("Pacific/Tongatapu", { offset: true, abbr: true }),

	"1940" : helpers.makeTestYear("Pacific/Tongatapu", [
		["1940-12-31T11:39:59Z", "23:59:59", "TOT", -740],
		["1940-12-31T11:40:00Z", "00:40:00", "TOT", -780]
	]),

	"1999" : helpers.makeTestYear("Pacific/Tongatapu", [
		["1999-10-06T12:59:59Z", "01:59:59", "TOT", -780],
		["1999-10-06T13:00:00Z", "03:00:00", "TOST", -840]
	]),

	"2000" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2000-03-18T12:59:59Z", "02:59:59", "TOST", -840],
		["2000-03-18T13:00:00Z", "02:00:00", "TOT", -780],
		["2000-11-04T12:59:59Z", "01:59:59", "TOT", -780],
		["2000-11-04T13:00:00Z", "03:00:00", "TOST", -840]
	]),

	"2001" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2001-01-27T11:59:59Z", "01:59:59", "TOST", -840],
		["2001-01-27T12:00:00Z", "01:00:00", "TOT", -780],
		["2001-11-03T12:59:59Z", "01:59:59", "TOT", -780],
		["2001-11-03T13:00:00Z", "03:00:00", "TOST", -840]
	]),

	"2002" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2002-01-26T11:59:59Z", "01:59:59", "TOST", -840],
		["2002-01-26T12:00:00Z", "01:00:00", "TOT", -780]
	])
};
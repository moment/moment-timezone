"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Tongatapu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Tongatapu", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Tongatapu", { abbr: true }),

	"1945" : helpers.makeTestYear("Pacific/Tongatapu", [
		["1945-09-09T11:40:47+00:00", "23:59:59", "LMT", -44352 / 60],
		["1945-09-09T11:40:48+00:00", "00:00:48", "+1220", -740]
	]),

	"1960" : helpers.makeTestYear("Pacific/Tongatapu", [
		["1960-12-31T11:39:59+00:00", "23:59:59", "+1220", -740],
		["1960-12-31T11:40:00+00:00", "00:40:00", "+13", -780]
	]),

	"1999" : helpers.makeTestYear("Pacific/Tongatapu", [
		["1999-10-06T12:59:59+00:00", "01:59:59", "+13", -780],
		["1999-10-06T13:00:00+00:00", "03:00:00", "+14", -840]
	]),

	"2000" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2000-03-18T12:59:59+00:00", "02:59:59", "+14", -840],
		["2000-03-18T13:00:00+00:00", "02:00:00", "+13", -780],
		["2000-11-04T12:59:59+00:00", "01:59:59", "+13", -780],
		["2000-11-04T13:00:00+00:00", "03:00:00", "+14", -840]
	]),

	"2001" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2001-01-27T11:59:59+00:00", "01:59:59", "+14", -840],
		["2001-01-27T12:00:00+00:00", "01:00:00", "+13", -780],
		["2001-11-03T12:59:59+00:00", "01:59:59", "+13", -780],
		["2001-11-03T13:00:00+00:00", "03:00:00", "+14", -840]
	]),

	"2002" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2002-01-26T11:59:59+00:00", "01:59:59", "+14", -840],
		["2002-01-26T12:00:00+00:00", "01:00:00", "+13", -780]
	]),

	"2016" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2016-11-05T12:59:59+00:00", "01:59:59", "+13", -780],
		["2016-11-05T13:00:00+00:00", "03:00:00", "+14", -840]
	]),

	"2017" : helpers.makeTestYear("Pacific/Tongatapu", [
		["2017-01-14T12:59:59+00:00", "02:59:59", "+14", -840],
		["2017-01-14T13:00:00+00:00", "02:00:00", "+13", -780]
	])
};
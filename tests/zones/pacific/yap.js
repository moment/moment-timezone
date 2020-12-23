"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Yap"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Yap", { offset: true, expect: "Australia/Brisbane" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Yap", { abbr: true, expect: "Australia/Brisbane" }),

	"1900" : helpers.makeTestYear("Pacific/Yap", [
		["1900-12-31T13:52:51+00:00", "23:59:59", "LMT", -36428 / 60],
		["1900-12-31T13:52:52+00:00", "23:52:52", "+10", -600]
	]),

	"1914" : helpers.makeTestYear("Pacific/Yap", [
		["1914-09-30T13:59:59+00:00", "23:59:59", "+10", -600],
		["1914-09-30T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1919" : helpers.makeTestYear("Pacific/Yap", [
		["1919-01-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1919-01-31T15:00:00+00:00", "01:00:00", "+10", -600]
	]),

	"1941" : helpers.makeTestYear("Pacific/Yap", [
		["1941-03-31T13:59:59+00:00", "23:59:59", "+10", -600],
		["1941-03-31T14:00:00+00:00", "23:00:00", "+09", -540]
	])
};
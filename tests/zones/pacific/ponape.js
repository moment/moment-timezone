"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Ponape"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Ponape", { offset: true, expect: "Pacific/Pohnpei" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Ponape", { abbr: true, expect: "Pacific/Pohnpei" }),

	"1914" : helpers.makeTestYear("Pacific/Ponape", [
		["1914-09-30T12:59:59+00:00", "23:59:59", "+11", -660],
		["1914-09-30T13:00:00+00:00", "22:00:00", "+09", -540]
	]),

	"1919" : helpers.makeTestYear("Pacific/Ponape", [
		["1919-01-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1919-01-31T15:00:00+00:00", "02:00:00", "+11", -660]
	]),

	"1936" : helpers.makeTestYear("Pacific/Ponape", [
		["1936-12-31T12:59:59+00:00", "23:59:59", "+11", -660],
		["1936-12-31T13:00:00+00:00", "23:00:00", "+10", -600]
	]),

	"1941" : helpers.makeTestYear("Pacific/Ponape", [
		["1941-03-31T13:59:59+00:00", "23:59:59", "+10", -600],
		["1941-03-31T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Pacific/Ponape", [
		["1945-07-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-07-31T15:00:00+00:00", "02:00:00", "+11", -660]
	])
};
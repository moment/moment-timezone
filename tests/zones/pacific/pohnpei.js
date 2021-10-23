"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pohnpei"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pohnpei", { offset: true, expect: "Asia/Sakhalin" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pohnpei", { abbr: true, expect: "Asia/Sakhalin" }),

	"1900" : helpers.makeTestYear("Pacific/Pohnpei", [
		["1900-12-31T13:27:07+00:00", "23:59:59", "LMT", -37972 / 60, 0],
		["1900-12-31T13:27:08+00:00", "00:27:08", "+11", -660, 0]
	]),

	"1914" : helpers.makeTestYear("Pacific/Pohnpei", [
		["1914-09-30T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1914-09-30T13:00:00+00:00", "22:00:00", "+09", -540, 0]
	]),

	"1919" : helpers.makeTestYear("Pacific/Pohnpei", [
		["1919-01-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1919-01-31T15:00:00+00:00", "02:00:00", "+11", -660, 0]
	]),

	"1936" : helpers.makeTestYear("Pacific/Pohnpei", [
		["1936-12-31T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1936-12-31T13:00:00+00:00", "23:00:00", "+10", -600, 0]
	]),

	"1941" : helpers.makeTestYear("Pacific/Pohnpei", [
		["1941-03-31T13:59:59+00:00", "23:59:59", "+10", -600, 0],
		["1941-03-31T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	])
};
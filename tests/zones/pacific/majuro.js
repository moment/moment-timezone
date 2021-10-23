"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Majuro"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Majuro", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Majuro", { abbr: true, expect: "Asia/Kamchatka" }),

	"1914" : helpers.makeTestYear("Pacific/Majuro", [
		["1914-09-30T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1914-09-30T13:00:00+00:00", "22:00:00", "+09", -540, 0]
	]),

	"1919" : helpers.makeTestYear("Pacific/Majuro", [
		["1919-01-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1919-01-31T15:00:00+00:00", "02:00:00", "+11", -660, 0]
	]),

	"1936" : helpers.makeTestYear("Pacific/Majuro", [
		["1936-12-31T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1936-12-31T13:00:00+00:00", "23:00:00", "+10", -600, 0]
	]),

	"1941" : helpers.makeTestYear("Pacific/Majuro", [
		["1941-03-31T13:59:59+00:00", "23:59:59", "+10", -600, 0],
		["1941-03-31T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	]),

	"1944" : helpers.makeTestYear("Pacific/Majuro", [
		["1944-01-29T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1944-01-29T15:00:00+00:00", "02:00:00", "+11", -660, 0]
	])
};
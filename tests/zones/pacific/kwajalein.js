"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Kwajalein"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Kwajalein", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Kwajalein", { abbr: true, expect: "Asia/Kamchatka" }),

	"1936" : helpers.makeTestYear("Pacific/Kwajalein", [
		["1936-12-31T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1936-12-31T13:00:00+00:00", "23:00:00", "+10", -600, 0]
	]),

	"1941" : helpers.makeTestYear("Pacific/Kwajalein", [
		["1941-03-31T13:59:59+00:00", "23:59:59", "+10", -600, 0],
		["1941-03-31T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	]),

	"1944" : helpers.makeTestYear("Pacific/Kwajalein", [
		["1944-02-05T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1944-02-05T15:00:00+00:00", "02:00:00", "+11", -660, 0]
	]),

	"1969" : helpers.makeTestYear("Pacific/Kwajalein", [
		["1969-09-30T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["1969-09-30T13:00:00+00:00", "01:00:00", "-12", 720, 0]
	])
};
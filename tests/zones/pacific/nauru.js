"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Nauru"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Nauru", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Nauru", { abbr: true, expect: "Asia/Kamchatka" }),

	"1942" : helpers.makeTestYear("Pacific/Nauru", [
		["1942-03-14T12:29:59+00:00", "23:59:59", "+1130", -690],
		["1942-03-14T12:30:00+00:00", "21:30:00", "+09", -540]
	]),

	"1944" : helpers.makeTestYear("Pacific/Nauru", [
		["1944-08-14T14:59:59+00:00", "23:59:59", "+09", -540],
		["1944-08-14T15:00:00+00:00", "02:30:00", "+1130", -690]
	])
};
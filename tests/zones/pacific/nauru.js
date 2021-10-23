"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Nauru"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Nauru", { offset: true, expect: "Asia/Kamchatka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Nauru", { abbr: true, expect: "Asia/Kamchatka" }),

	"1942" : helpers.makeTestYear("Pacific/Nauru", [
		["1942-08-28T12:29:59+00:00", "23:59:59", "+1130", -690, 0],
		["1942-08-28T12:30:00+00:00", "21:30:00", "+09", -540, 0]
	]),

	"1945" : helpers.makeTestYear("Pacific/Nauru", [
		["1945-09-07T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1945-09-07T15:00:00+00:00", "02:30:00", "+1130", -690, 0]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Nauru"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Nauru", { offset: true, expect: "Pacific/Tarawa" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Nauru", { abbr: true, expect: "Pacific/Tarawa" }),

	"1921" : helpers.makeTestYear("Pacific/Nauru", [
		["1921-01-14T12:52:19+00:00", "23:59:59", "LMT", -40060 / 60],
		["1921-01-14T12:52:20+00:00", "00:22:20", "+1130", -690]
	]),

	"1942" : helpers.makeTestYear("Pacific/Nauru", [
		["1942-08-28T12:29:59+00:00", "23:59:59", "+1130", -690],
		["1942-08-28T12:30:00+00:00", "21:30:00", "+09", -540]
	]),

	"1945" : helpers.makeTestYear("Pacific/Nauru", [
		["1945-09-07T14:59:59+00:00", "23:59:59", "+09", -540],
		["1945-09-07T15:00:00+00:00", "02:30:00", "+1130", -690]
	]),

	"1979" : helpers.makeTestYear("Pacific/Nauru", [
		["1979-02-09T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1979-02-09T14:30:00+00:00", "02:30:00", "+12", -720]
	])
};
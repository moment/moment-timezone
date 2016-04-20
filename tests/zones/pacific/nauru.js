"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Nauru"] = {
	"guess" : helpers.makeTestGuess("Pacific/Nauru", { offset: false, abbr: true }),

	"1921" : helpers.makeTestYear("Pacific/Nauru", [
		["1921-01-14T12:52:19Z", "23:59:59", "LMT", -40060 / 60],
		["1921-01-14T12:52:20Z", "00:22:20", "NRT", -690]
	]),

	"1942" : helpers.makeTestYear("Pacific/Nauru", [
		["1942-03-14T12:29:59Z", "23:59:59", "NRT", -690],
		["1942-03-14T12:30:00Z", "21:30:00", "JST", -540]
	]),

	"1944" : helpers.makeTestYear("Pacific/Nauru", [
		["1944-08-14T14:59:59Z", "23:59:59", "JST", -540],
		["1944-08-14T15:00:00Z", "02:30:00", "NRT", -690]
	]),

	"1979" : helpers.makeTestYear("Pacific/Nauru", [
		["1979-04-30T12:29:59Z", "23:59:59", "NRT", -690],
		["1979-04-30T12:30:00Z", "00:30:00", "NRT", -720]
	])
};
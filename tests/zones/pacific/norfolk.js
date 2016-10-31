"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Norfolk"] = {
	"guess" : helpers.makeTestGuess("Pacific/Norfolk", { offset: true, abbr: true }),

	"1950" : helpers.makeTestYear("Pacific/Norfolk", [
		["1950-12-31T12:47:59+00:00", "23:59:59", "NMT", -672],
		["1950-12-31T12:48:00+00:00", "00:18:00", "NFT", -690]
	]),

	"1974" : helpers.makeTestYear("Pacific/Norfolk", [
		["1974-10-26T14:29:59+00:00", "01:59:59", "NFT", -690],
		["1974-10-26T14:30:00+00:00", "03:00:00", "NFST", -750]
	]),

	"1975" : helpers.makeTestYear("Pacific/Norfolk", [
		["1975-03-01T13:29:59+00:00", "01:59:59", "NFST", -750],
		["1975-03-01T13:30:00+00:00", "01:00:00", "NFT", -690]
	]),

	"2015" : helpers.makeTestYear("Pacific/Norfolk", [
		["2015-10-03T14:29:59+00:00", "01:59:59", "NFT", -690],
		["2015-10-03T14:30:00+00:00", "01:30:00", "NFT", -660]
	])
};
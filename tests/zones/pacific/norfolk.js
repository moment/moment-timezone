"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Norfolk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Norfolk", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Norfolk", { abbr: true }),

	"1950" : helpers.makeTestYear("Pacific/Norfolk", [
		["1950-12-31T12:47:59+00:00", "23:59:59", "+1112", -672],
		["1950-12-31T12:48:00+00:00", "00:18:00", "+1130", -690]
	]),

	"1974" : helpers.makeTestYear("Pacific/Norfolk", [
		["1974-10-26T14:29:59+00:00", "01:59:59", "+1130", -690],
		["1974-10-26T14:30:00+00:00", "03:00:00", "+1230", -750]
	]),

	"1975" : helpers.makeTestYear("Pacific/Norfolk", [
		["1975-03-01T13:29:59+00:00", "01:59:59", "+1230", -750],
		["1975-03-01T13:30:00+00:00", "01:00:00", "+1130", -690]
	])
};
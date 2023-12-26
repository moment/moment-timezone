"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Vostok"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Vostok", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Vostok", { abbr: true }),

	"1957" : helpers.makeTestYear("Antarctica/Vostok", [
		["1957-12-15T23:59:59+00:00", "23:59:59", "-00", 0],
		["1957-12-16T00:00:00+00:00", "07:00:00", "+07", -420]
	]),

	"1994" : helpers.makeTestYear("Antarctica/Vostok", [
		["1994-01-31T16:59:59+00:00", "23:59:59", "+07", -420],
		["1994-01-31T17:00:00+00:00", "17:00:00", "-00", 0],
		["1994-10-31T23:59:59+00:00", "23:59:59", "-00", 0],
		["1994-11-01T00:00:00+00:00", "07:00:00", "+07", -420]
	]),

	"2023" : helpers.makeTestYear("Antarctica/Vostok", [
		["2023-12-17T18:59:59+00:00", "01:59:59", "+07", -420],
		["2023-12-17T19:00:00+00:00", "00:00:00", "+05", -300]
	])
};
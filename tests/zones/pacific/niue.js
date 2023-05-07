"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Niue", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Niue", { abbr: true, expect: "Pacific/Pago_Pago" }),

	"1952" : helpers.makeTestYear("Pacific/Niue", [
		["1952-10-16T11:19:39+00:00", "23:59:59", "LMT", 40780 / 60],
		["1952-10-16T11:19:40+00:00", "23:59:40", "-1120", 680]
	]),

	"1964" : helpers.makeTestYear("Pacific/Niue", [
		["1964-07-01T11:19:59+00:00", "23:59:59", "-1120", 680],
		["1964-07-01T11:20:00+00:00", "00:20:00", "-11", 660]
	])
};
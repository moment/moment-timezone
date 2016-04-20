"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pago_Pago"] = {
	"guess" : helpers.makeTestGuess("Pacific/Pago_Pago", { offset: true, abbr: true }),

	"1911" : helpers.makeTestYear("Pacific/Pago_Pago", [
		["1911-01-01T11:22:47Z", "23:59:59", "LMT", 40968 / 60],
		["1911-01-01T11:22:48Z", "00:22:48", "NST", 660]
	]),

	"1967" : helpers.makeTestYear("Pacific/Pago_Pago", [
		["1967-04-01T10:59:59Z", "23:59:59", "NST", 660],
		["1967-04-01T11:00:00Z", "00:00:00", "BST", 660]
	]),

	"1983" : helpers.makeTestYear("Pacific/Pago_Pago", [
		["1983-11-30T10:59:59Z", "23:59:59", "BST", 660],
		["1983-11-30T11:00:00Z", "00:00:00", "SST", 660]
	])
};
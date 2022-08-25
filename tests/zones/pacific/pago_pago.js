"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Pago_Pago"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Pago_Pago", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Pago_Pago", { abbr: true }),

	"1892" : helpers.makeTestYear("Pacific/Pago_Pago", [
		["1892-07-04T11:22:48+00:00", "00:00:00", "LMT", 40968 / 60]
	]),

	"1911" : helpers.makeTestYear("Pacific/Pago_Pago", [
		["1911-01-01T11:22:47+00:00", "23:59:59", "LMT", 40968 / 60]
	])
};
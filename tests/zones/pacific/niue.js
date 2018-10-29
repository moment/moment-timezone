"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Niue"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Niue", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Niue", { abbr: true, expect: "Pacific/Pago_Pago" }),

	"1951" : helpers.makeTestYear("Pacific/Niue", [
		["1951-01-01T11:19:59+00:00", "23:59:59", "-1120", 680],
		["1951-01-01T11:20:00+00:00", "23:50:00", "-1130", 690]
	])
};
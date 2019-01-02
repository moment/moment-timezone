"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Samoa"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Samoa", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Samoa", { abbr: true, expect: "Pacific/Pago_Pago" }),

	"1911" : helpers.makeTestYear("Pacific/Samoa", [
		["1911-01-01T11:22:47+00:00", "23:59:59", "LMT", 40968 / 60],
		["1911-01-01T11:22:48+00:00", "00:22:48", "SST", 660]
	])
};
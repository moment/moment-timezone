"use strict";

var helpers = require("../../helpers/helpers");

exports["US/Samoa"] = {

	"guess:by:offset" : helpers.makeTestGuess("US/Samoa", { offset: true, expect: "Pacific/Pago_Pago" }),

	"guess:by:abbr" : helpers.makeTestGuess("US/Samoa", { abbr: true, expect: "Pacific/Pago_Pago" }),

	"1911" : helpers.makeTestYear("US/Samoa", [
		["1911-01-01T11:22:47+00:00", "23:59:59", "LMT", 40968 / 60],
		["1911-01-01T11:22:48+00:00", "00:22:48", "SST", 660]
	])
};
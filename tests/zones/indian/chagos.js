"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Chagos"] = {

	"guess:by:offset" : helpers.makeTestGuess("Indian/Chagos", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Indian/Chagos", { abbr: true }),

	"1906" : helpers.makeTestYear("Indian/Chagos", [
		["1906-12-31T19:10:19+00:00", "23:59:59", "LMT", -17380 / 60],
		["1906-12-31T19:10:20+00:00", "00:10:20", "+05", -300]
	]),

	"1995" : helpers.makeTestYear("Indian/Chagos", [
		["1995-12-31T18:59:59+00:00", "23:59:59", "+05", -300],
		["1995-12-31T19:00:00+00:00", "01:00:00", "+06", -360]
	])
};
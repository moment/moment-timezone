"use strict";

var helpers = require("../../helpers/helpers");

exports["Indian/Maldives"] = {
	"guess" : helpers.makeTestGuess("Indian/Maldives", { offset: false, abbr: true }),

	"1959" : helpers.makeTestYear("Indian/Maldives", [
		["1959-12-31T19:05:59Z", "23:59:59", "MMT", -294],
		["1959-12-31T19:06:00Z", "00:06:00", "MVT", -300]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Vostok"] = {
	"guess" : helpers.makeTestGuess("Antarctica/Vostok", { offset: false, abbr: true}),

	"1957" : helpers.makeTestYear("Antarctica/Vostok", [
		["1957-12-15T23:59:59+00:00", "23:59:59", "zzz", 0],
		["1957-12-16T00:00:00+00:00", "06:00:00", "VOST", -360]
	])
};
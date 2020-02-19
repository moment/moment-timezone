"use strict";

var helpers = require("../../helpers/helpers");

exports["Antarctica/Vostok"] = {

	"guess:by:offset" : helpers.makeTestGuess("Antarctica/Vostok", { offset: true, expect: "Indian/Chagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Antarctica/Vostok", { abbr: true, expect: "Indian/Chagos" }),

	"1957" : helpers.makeTestYear("Antarctica/Vostok", [
		["1957-12-15T23:59:59+00:00", "23:59:59", "-00", 0],
		["1957-12-16T00:00:00+00:00", "06:00:00", "+06", -360]
	])
};
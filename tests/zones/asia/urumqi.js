"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Urumqi"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Urumqi", { offset: true, expect: "Indian/Chagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Urumqi", { abbr: true, expect: "Indian/Chagos" }),

	"1927" : helpers.makeTestYear("Asia/Urumqi", [
		["1927-12-31T18:09:39+00:00", "23:59:59", "LMT", -21020 / 60],
		["1927-12-31T18:09:40+00:00", "00:09:40", "+06", -360]
	])
};
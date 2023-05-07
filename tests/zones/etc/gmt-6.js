"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-6"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-6", { offset: true, expect: "Asia/Dhaka" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-6", { abbr: true, expect: "Asia/Dhaka" }),

	"1970" : helpers.makeTestYear("Etc/GMT-6", [
		["1970-01-01T00:00:00+00:00", "06:00:00", "+06", -360]
	])
};
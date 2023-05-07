"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-4"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-4", { offset: true, expect: "Asia/Dubai" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-4", { abbr: true, expect: "Asia/Dubai" }),

	"1970" : helpers.makeTestYear("Etc/GMT-4", [
		["1970-01-01T00:00:00+00:00", "04:00:00", "+04", -240]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/GMT-8"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/GMT-8", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/GMT-8", { abbr: true, expect: "Asia/Manila" }),

	"1970" : helpers.makeTestYear("Etc/GMT-8", [
		["1970-01-01T00:00:00+00:00", "08:00:00", "+08", -480]
	])
};
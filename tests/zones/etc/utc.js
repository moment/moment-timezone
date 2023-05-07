"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/UTC"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/UTC", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/UTC", { abbr: true }),

	"1970" : helpers.makeTestYear("Etc/UTC", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
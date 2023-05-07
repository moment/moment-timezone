"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/UCT"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/UCT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/UCT", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("Etc/UCT", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
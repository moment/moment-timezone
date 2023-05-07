"use strict";

var helpers = require("../helpers/helpers");

exports["UCT"] = {

	"guess:by:offset" : helpers.makeTestGuess("UCT", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("UCT", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("UCT", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
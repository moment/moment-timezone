"use strict";

var helpers = require("../helpers/helpers");

exports["Universal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Universal", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Universal", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("Universal", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Universal"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Universal", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Universal", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("Etc/Universal", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
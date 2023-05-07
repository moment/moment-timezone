"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Zulu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Zulu", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Zulu", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("Etc/Zulu", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
"use strict";

var helpers = require("../helpers/helpers");

exports["Zulu"] = {

	"guess:by:offset" : helpers.makeTestGuess("Zulu", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Zulu", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("Zulu", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
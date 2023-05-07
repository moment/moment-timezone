"use strict";

var helpers = require("../../helpers/helpers");

exports["Etc/Greenwich"] = {

	"guess:by:offset" : helpers.makeTestGuess("Etc/Greenwich", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Etc/Greenwich", { abbr: true, expect: "Africa/Abidjan" }),

	"1970" : helpers.makeTestYear("Etc/Greenwich", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	])
};
"use strict";

var helpers = require("../helpers/helpers");

exports["Greenwich"] = {

	"guess:by:offset" : helpers.makeTestGuess("Greenwich", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("Greenwich", { abbr: true, expect: "Africa/Abidjan" }),

	"1970" : helpers.makeTestYear("Greenwich", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "GMT", 0]
	])
};
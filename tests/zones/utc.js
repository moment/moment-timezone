"use strict";

var helpers = require("../helpers/helpers");

exports["UTC"] = {

	"guess:by:offset" : helpers.makeTestGuess("UTC", { offset: true, expect: "Africa/Abidjan" }),

	"guess:by:abbr" : helpers.makeTestGuess("UTC", { abbr: true, expect: "Etc/UTC" }),

	"1970" : helpers.makeTestYear("UTC", [
		["1970-01-01T00:00:00+00:00", "00:00:00", "UTC", 0]
	])
};
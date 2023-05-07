"use strict";

var helpers = require("../helpers/helpers");

exports["HST"] = {

	"guess:by:offset" : helpers.makeTestGuess("HST", { offset: true, expect: "Pacific/Honolulu" }),

	"guess:by:abbr" : helpers.makeTestGuess("HST", { abbr: true, expect: "Pacific/Honolulu" }),

	"1970" : helpers.makeTestYear("HST", [
		["1970-01-01T00:00:00+00:00", "14:00:00", "HST", 600]
	])
};
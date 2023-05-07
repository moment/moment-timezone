"use strict";

var helpers = require("../helpers/helpers");

exports["EST"] = {

	"guess:by:offset" : helpers.makeTestGuess("EST", { offset: true, expect: "America/Lima" }),

	"guess:by:abbr" : helpers.makeTestGuess("EST", { abbr: true, expect: "America/Panama" }),

	"1970" : helpers.makeTestYear("EST", [
		["1970-01-01T00:00:00+00:00", "19:00:00", "EST", 300]
	])
};
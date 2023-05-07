"use strict";

var helpers = require("../helpers/helpers");

exports["MST"] = {

	"guess:by:offset" : helpers.makeTestGuess("MST", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("MST", { abbr: true, expect: "America/Phoenix" }),

	"1970" : helpers.makeTestYear("MST", [
		["1970-01-01T00:00:00+00:00", "17:00:00", "MST", 420]
	])
};